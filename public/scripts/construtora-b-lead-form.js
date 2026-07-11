(function () {
  var TRACKING_KEY = "antares_tracking_params";
  var TRACKING_PARAMS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "ttclid",
    "li_fat_id",
    "ref",
  ];

  function digitsOnly(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function formatBrazilianPhone(value) {
    var digits = digitsOnly(value).slice(0, 11);

    if (digits.length <= 2) {
      return digits;
    }

    if (digits.length <= 6) {
      return "(" + digits.slice(0, 2) + ") " + digits.slice(2);
    }

    if (digits.length <= 10) {
      return "(" + digits.slice(0, 2) + ") " + digits.slice(2, 6) + "-" + digits.slice(6);
    }

    return "(" + digits.slice(0, 2) + ") " + digits.slice(2, 7) + "-" + digits.slice(7);
  }

  function isValidBrazilianPhone(value) {
    var digits = digitsOnly(value);
    return digits.length === 10 || digits.length === 11;
  }

  function readTracking() {
    try {
      var raw = sessionStorage.getItem(TRACKING_KEY);
      if (!raw) {
        return {};
      }
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (error) {
      return {};
    }
  }

  function writeTracking(params) {
    sessionStorage.setItem(TRACKING_KEY, JSON.stringify(params));
  }

  function captureTracking() {
    var stored = readTracking();
    var current = new URLSearchParams(window.location.search);

    current.forEach(function (value, key) {
      if (value.trim()) {
        stored[key] = value.trim();
      }
    });

    for (var i = 0; i < TRACKING_PARAMS.length; i++) {
      var param = TRACKING_PARAMS[i];
      var paramValue = current.get(param);
      if (paramValue && paramValue.trim()) {
        stored[param] = paramValue.trim();
      }
    }

    if (!stored.landing_page) {
      stored.landing_page = window.location.href;
    }
    if (!stored.landing_path) {
      stored.landing_path = window.location.pathname;
    }
    if (!stored.captured_at) {
      stored.captured_at = new Date().toISOString();
    }

    writeTracking(stored);
    return stored;
  }

  function getTrackingPayload() {
    var params = readTracking();
    if (!Object.keys(params).length) {
      params = captureTracking();
    }

    return {
      params: params,
      landing_page: params.landing_page || window.location.href,
      landing_path: params.landing_path || window.location.pathname,
      referrer: document.referrer || "",
      captured_at: params.captured_at || new Date().toISOString(),
    };
  }

  function getSuccessUrl() {
    var path = window.location.pathname.replace(/index\.html$/, "");
    if (!path.endsWith("/")) {
      path += "/";
    }
    return path + "obrigado/";
  }

  function initLeadForm() {
    var form = document.getElementById("lead-form");
    if (!form || form.dataset.trackingBound === "true") {
      return;
    }

    form.dataset.trackingBound = "true";

    var webhookUrl = form.getAttribute("data-webhook-url") || "";
    var formId = form.getAttribute("data-form-id") || "construtora-b";
    var submitButton = form.querySelector('button[type="submit"]');
    var statusBox = document.getElementById("form-status");
    var phoneInput = form.querySelector('input[name="telefone"]');
    var isSubmitting = false;
    var leadSuccessSent = false;
    var formStartSent = false;

    captureTracking();

    function trackEvent(eventName, params) {
      var dedupeKey = eventName + "::" + window.location.pathname;
      var now = Date.now();
      window.__antaresLeadEventLog = window.__antaresLeadEventLog || {};
      var lastSent = window.__antaresLeadEventLog[dedupeKey] || 0;

      if (now - lastSent < 1500) {
        return;
      }

      window.__antaresLeadEventLog[dedupeKey] = now;

      var eventParams = Object.assign(
        {
          page_location: window.location.href,
          page_path: window.location.pathname,
          form_id: formId,
        },
        params || {},
      );

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: eventName }, eventParams));
    }

    function trackFormStart(fieldName) {
      if (formStartSent) {
        return;
      }

      formStartSent = true;

      var tracking = getTrackingPayload();
      trackEvent("form_start", {
        field_name: fieldName,
        utm_source: (tracking.params && tracking.params.utm_source) || "",
        utm_campaign: (tracking.params && tracking.params.utm_campaign) || "",
        gclid: (tracking.params && tracking.params.gclid) || "",
      });
    }

    function isTrackableField(target) {
      if (!target || !target.name || !form.contains(target)) {
        return false;
      }

      return (
        target.type === "text" ||
        target.type === "tel" ||
        target.type === "radio" ||
        target.type === "checkbox"
      );
    }

    function setFieldError(name, message) {
      var errorElement = form.querySelector('[data-error-for="' + name + '"]');
      var field = form.elements.namedItem(name);

      if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.toggle("hidden", !message);
      }

      if (field && field.setAttribute) {
        field.setAttribute("aria-invalid", message ? "true" : "false");
      }
    }

    function clearErrors() {
      form.querySelectorAll("[data-error-for]").forEach(function (element) {
        element.textContent = "";
        element.classList.add("hidden");
      });
    }

    function showStatus(message, type) {
      if (!statusBox) {
        return;
      }

      statusBox.textContent = message;
      statusBox.classList.remove("hidden", "bg-red-50", "text-red-700", "bg-green-50", "text-green-700");

      if (type === "error") {
        statusBox.classList.add("bg-red-50", "text-red-700");
      } else {
        statusBox.classList.add("bg-green-50", "text-green-700");
      }
    }

    function getRadioValue(name) {
      var selected = form.querySelector('input[name="' + name + '"]:checked');
      return selected ? selected.value : "";
    }

    function validateForm() {
      clearErrors();

      var nome = (form.elements.namedItem("nome") && form.elements.namedItem("nome").value.trim()) || "";
      var telefone =
        (form.elements.namedItem("telefone") && form.elements.namedItem("telefone").value.trim()) || "";
      var possuiTerreno = getRadioValue("possui_terreno");
      // Campos de investimento temporariamente ocultos na LP.
      // Continuam no payload (vazios) para não quebrar o contrato do webhook/n8n.
      var formaInvestimento = getRadioValue("forma_investimento") || "";
      var valorInvestimento = getRadioValue("valor_investimento") || "";
      var isValid = true;

      if (nome.length < 3) {
        setFieldError("nome", "Informe seu nome completo.");
        isValid = false;
      }

      if (!isValidBrazilianPhone(telefone)) {
        setFieldError("telefone", "Informe um telefone válido com DDD.");
        isValid = false;
      }

      if (!possuiTerreno) {
        setFieldError("possui_terreno", "Selecione uma opção.");
        isValid = false;
      }

      return {
        isValid: isValid,
        values: {
          nome: nome,
          telefone: telefone,
          telefone_digits: digitsOnly(telefone),
          possui_terreno: possuiTerreno,
          forma_investimento: formaInvestimento,
          valor_investimento: valorInvestimento,
        },
      };
    }

    function applyPhoneMask() {
      if (!phoneInput) {
        return;
      }

      var cursorFromEnd = phoneInput.value.length - phoneInput.selectionStart;
      phoneInput.value = formatBrazilianPhone(phoneInput.value);
      var nextPos = Math.max(0, phoneInput.value.length - cursorFromEnd);
      phoneInput.setSelectionRange(nextPos, nextPos);
      setFieldError("telefone", "");
    }

    function submitViaHiddenForm(payload) {
      return new Promise(function (resolve) {
        var iframeName = "lead-form-hidden-frame";
        var iframe = document.getElementById(iframeName);

        if (!iframe) {
          iframe = document.createElement("iframe");
          iframe.name = iframeName;
          iframe.id = iframeName;
          iframe.style.display = "none";
          iframe.setAttribute("aria-hidden", "true");
          document.body.appendChild(iframe);
        }

        var hiddenForm = document.createElement("form");
        hiddenForm.method = "POST";
        hiddenForm.action = webhookUrl;
        hiddenForm.target = iframeName;
        hiddenForm.style.display = "none";

        function addField(name, value) {
          var input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          input.value = String(value);
          hiddenForm.appendChild(input);
        }

        Object.keys(payload).forEach(function (key) {
          var value = payload[key];
          if (value && typeof value === "object") {
            addField(key, JSON.stringify(value));
          } else {
            addField(key, value);
          }
        });

        document.body.appendChild(hiddenForm);
        hiddenForm.submit();
        document.body.removeChild(hiddenForm);

        window.setTimeout(resolve, 800);
      });
    }

    async function submitLead(payload) {
      try {
        var response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          return true;
        }
      } catch (error) {
        // segue para fallback sem CORS
      }

      try {
        await fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(payload),
        });
        return true;
      } catch (error) {
        // segue para fallback via form POST
      }

      await submitViaHiddenForm(payload);
      return true;
    }

    if (phoneInput) {
      phoneInput.setAttribute("maxlength", "16");
      phoneInput.addEventListener("input", applyPhoneMask);
      phoneInput.addEventListener("blur", applyPhoneMask);
      phoneInput.addEventListener("paste", function () {
        window.setTimeout(applyPhoneMask, 0);
      });
    }

    form.addEventListener("focusin", function (event) {
      var target = event.target;
      if (isTrackableField(target)) {
        trackFormStart(target.name);
      }
    });

    form.addEventListener("input", function (event) {
      var target = event.target;
      if (isTrackableField(target)) {
        trackFormStart(target.name);
      }
    });

    form.addEventListener("change", function (event) {
      var target = event.target;
      if (isTrackableField(target)) {
        trackFormStart(target.name);
      }
    });

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (isSubmitting) {
        return;
      }

      var validation = validateForm();
      if (!validation.isValid) {
        showStatus("Revise os campos destacados antes de enviar.", "error");
        return;
      }

      if (!webhookUrl) {
        showStatus("Configuração do formulário incompleta. Tente novamente mais tarde.", "error");
        return;
      }

      isSubmitting = true;

      var defaultLabel = (submitButton && submitButton.getAttribute("data-default-label")) || "Enviar";
      var loadingLabel = (submitButton && submitButton.getAttribute("data-loading-label")) || "Enviando...";

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = loadingLabel;
      }

      statusBox && statusBox.classList.add("hidden");

      var tracking = getTrackingPayload();
      var payload = Object.assign({}, validation.values, {
        form_id: formId,
        source: "construtora-b-lp",
        page_url: window.location.href,
        page_path: window.location.pathname,
        submitted_at: new Date().toISOString(),
        tracking: tracking,
      });

      try {
        var sent = await submitLead(payload);
        if (!sent) {
          throw new Error("submit failed");
        }

        if (!leadSuccessSent) {
          leadSuccessSent = true;
          trackEvent("lead_success", {
            possui_terreno: validation.values.possui_terreno,
            forma_investimento: validation.values.forma_investimento,
            valor_investimento: validation.values.valor_investimento,
            utm_source: (tracking.params && tracking.params.utm_source) || "",
            utm_campaign: (tracking.params && tracking.params.utm_campaign) || "",
            gclid: (tracking.params && tracking.params.gclid) || "",
          });
        }

        window.location.href = getSuccessUrl();
      } catch (error) {
        isSubmitting = false;
        showStatus("Não foi possível enviar agora. Verifique sua conexão e tente novamente.", "error");

        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = defaultLabel;
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLeadForm);
  } else {
    initLeadForm();
  }
})();

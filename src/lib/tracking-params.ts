const TRACKING_STORAGE_KEY = "antares_tracking_params";

const TRACKING_PARAM_KEYS = [
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

export type TrackingParams = Record<string, string>;

function readStoredParams(): TrackingParams {
  try {
    const raw = sessionStorage.getItem(TRACKING_STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function writeStoredParams(params: TrackingParams) {
  sessionStorage.setItem(TRACKING_STORAGE_KEY, JSON.stringify(params));
}

export function captureTrackingParams(search = window.location.search): TrackingParams {
  const currentParams = new URLSearchParams(search);
  const storedParams = readStoredParams();
  const capturedParams: TrackingParams = { ...storedParams };

  currentParams.forEach((value, key) => {
    if (value.trim()) {
      capturedParams[key] = value.trim();
    }
  });

  for (const key of TRACKING_PARAM_KEYS) {
    const value = currentParams.get(key);
    if (value?.trim()) {
      capturedParams[key] = value.trim();
    }
  }

  writeStoredParams(capturedParams);

  return capturedParams;
}

export function getTrackingParams(): TrackingParams {
  const storedParams = readStoredParams();

  if (Object.keys(storedParams).length > 0) {
    return storedParams;
  }

  return captureTrackingParams();
}

export function getTrackingPayload() {
  const params = getTrackingParams();

  return {
    params,
    landing_page: params.landing_page || window.location.href,
    landing_path: params.landing_path || window.location.pathname,
    referrer: document.referrer || "",
    captured_at: params.captured_at || new Date().toISOString(),
  };
}

export function initTrackingCapture() {
  const params = captureTrackingParams();

  if (!params.landing_page) {
    params.landing_page = window.location.href;
  }

  if (!params.landing_path) {
    params.landing_path = window.location.pathname;
  }

  if (!params.captured_at) {
    params.captured_at = new Date().toISOString();
  }

  writeStoredParams(params);
}

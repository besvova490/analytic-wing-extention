export const INITIAL_STORAGE = {
  userToken: null,
  webApp: { url: null, token: null },
  isAnalyticsBadgeEnabled: false,
};

export const setStorage = (data) => {
  return new Promise((resolve) => {
    chrome.storage.sync.set(data, resolve);
  });
};

export const setStorageItem = (key, value) => {
  return new Promise((resolve) => {
    chrome.storage.sync.set({ [key]: value }, resolve);
  });
};

export const getStorage = () => {
  return chrome.storage.sync.get();
};

export const getStorageItem = (key) => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(key, (result) => resolve(result ? result[key] : null));
  });
};

export const initStorage = () => {
  return setStorage(INITIAL_STORAGE);
};

export const messageKeys = { TOGGLE_ANALYTICS_BADGE: "TOGGLE_ANALYTICS_BADGE", };

export const sendMessage = (messageKey, payload) => {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length) {
        chrome.tabs.sendMessage(tabs[0].id, { messageKey, payload }, {}, resolve);
      }
    });
  });
};

export const onMessage = (messageKey, callback) => {
  chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
    if (message.messageKey === messageKey) {
      callback(message.payload, sendResponse);
    }
  });
};

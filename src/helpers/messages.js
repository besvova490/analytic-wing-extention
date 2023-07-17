export const messageKeys = {
  TOGGLE_ANALYTICS_BADGE: "TOGGLE_ANALYTICS_BADGE",
  REGISTER_EVENT_LISTENER: "REGISTER_EVENT_LISTENER",
};

export const sendMessage = (messageKey, payload, options) => {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length) {
        chrome.tabs.sendMessage(tabs[0].id, { messageKey, payload }, options, resolve);
      }
    });
  });
};

export const onMessage = (messageKey, callback) => {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    sendResponse();

    if (message.messageKey === messageKey) {
      callback(message.payload);
    }
  });
};

export const onWithResponseMessage = (messageKey, callback) => {
  chrome.runtime.onMessage.addListener((message, _, sendResponse) => {

    if (message.messageKey === messageKey) {
      callback(message, sendResponse);
    }

    return true;
  });
};

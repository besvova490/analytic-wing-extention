import { initStorage } from "../helpers/storage";

chrome.runtime.onInstalled.addListener(() => {
  initStorage();

  if (process.env.NODE_ENV !== "development") {
    chrome.runtime.openOptionsPage();
  }

  chrome.contextMenus.create({
    id: "open-web-app",
    title: "Register Event Listener",
    contexts: ["all"],
  });
});

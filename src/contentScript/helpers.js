// helpers
import { onWithResponseMessage, messageKeys } from "../helpers/messages";

function getCSSPath(element) {
  const path = [];
  while (element.nodeType === Node.ELEMENT_NODE) {
    let selector = element.nodeName.toLowerCase();
    if (element.id) {
      selector += `#${ element.id}`;
      path.unshift(selector);
      break;
    } else {
      let sibling = element;
      const siblingSelectors = [];
      while (sibling !== null && sibling.nodeType === Node.ELEMENT_NODE) {
        siblingSelectors.unshift(sibling.nodeName.toLowerCase());
        sibling = sibling.previousElementSibling;
      }
      if (siblingSelectors.length > 1) {
        selector += `:nth-child(${ siblingSelectors.length })`;
      }
    }
    path.unshift(selector);
    element = element.parentNode;
  }
  
  return path.join(" > ");
}

let lastClickedElementPath = null;

onWithResponseMessage(messageKeys.REGISTER_EVENT_LISTENER, (event, sendResponse) => {
  sendResponse(lastClickedElementPath);
});

export function handleClick(e) {
  lastClickedElementPath = getCSSPath(e.target);
}

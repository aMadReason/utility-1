export function stringToHtml(htmlInString) {
  return document.createRange().createContextualFragment(htmlInString);
}

/**
 * unwraps a tag type from it's contents inside a parent element
 * @param {element} parent
 * @param {String} tagSelector
 */
export function unwrap(parent, tagSelector) {
  const elements = Array.from(parent.querySelectorAll(tagSelector));

  if (elements.length > 0) {
    elements.map((mark) => {
      const frag = stringToHtml(mark.innerHTML);
      parent.insertBefore(frag, mark);
      mark.remove();
    });
  }
}

/**
 * Gets currently selected text (via browser) and wraps it in a Mark tag
 * with an optional marker name that will be added to a data-marker attribute.
 * @param {String} markerName {optional}
 */
export function markSelected(markerName = "", clearRange = true) {
  // get selections
  const sel = window.getSelection();

  if (sel.isCollapsed) return true; // check for selection content
  if (!markerName) return true; // check for active marker

  if (window.confirm("Mark selected text?")) {
    // just in case multiple selects have been made we're gunna loop de loop
    for (let i = 0; i < sel.rangeCount; i++) {
      const range = sel.getRangeAt(i);

      const markEl = document.createElement("MARK");
      markEl.setAttribute("data-marker", markerName);

      const rangeTxt = range.toString();
      markEl.innerHTML = rangeTxt;

      range.deleteContents();
      range.insertNode(markEl);
    }
  }

  // multi select can cause issues
  if (clearRange) {
    sel.removeAllRanges();
  }
}

export default {
  stringToHtml,
  unwrap,
  markSelected
};

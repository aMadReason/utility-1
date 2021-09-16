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

export default unwrap;

export function stringToHtml(htmlInString) {
  return document.createRange().createContextualFragment(htmlInString);
}

export default stringToHtml;

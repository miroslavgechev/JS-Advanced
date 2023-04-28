function editElement(element, match, replace) {
    let matcher = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(matcher, replace);
}
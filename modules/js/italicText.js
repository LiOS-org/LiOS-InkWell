export function italicText(editor) {
    const text = prompt("Enter Text:");
    const selection = window.getSelection();
    if (!text) return;

    let range;
    range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);

    const italic = document.createElement("em");
    italic.textContent = text;

    range.insertNode(italic);
    const space = document.createTextNode("\u200B \x20");
    italic.after(space);
    range.setStartAfter(space);

    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}
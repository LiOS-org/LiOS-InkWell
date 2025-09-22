export function underlineText(editor) {
    const text = prompt("Enter Text:");
    const selection = window.getSelection();
    if (!text) return;

    let range;
    range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);

    const underline = document.createElement("u");
    underline.textContent = text;

    range.insertNode(underline);
    const space = document.createTextNode("\u200B \x20");
    underline.after(space);
    range.setStartAfter(space);

    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}
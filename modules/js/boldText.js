// modules/js/newLink.js
export function boldText(editor) {
    const text = prompt("Enter Text:")
    const selection = window.getSelection();
    if (!text) return;

    let range;
    
    // Use current selection if available, otherwise insert at end
    if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
    } else {
        range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
    }


    const bold = document.createElement("strong");
    bold.textContent = text;

    range.insertNode(bold);
    const space = document.createTextNode("\u200B \x20");

    bold.after(space);

    // Move cursor after the inserted link
    range.setStartAfter(space);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}

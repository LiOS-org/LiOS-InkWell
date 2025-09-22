// modules/js/newLink.js
export function createLink(editor) {
    const url = prompt("Enter URL:");
    const text = prompt("Enter Text:")
    const selection = window.getSelection();
    if (!url) return;
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


    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.textContent = text;
    const space = document.createTextNode("\u200B");

    range.insertNode(anchor);
    anchor.after(space);

    // Move cursor after the inserted link
    range.setStartAfter(space);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}
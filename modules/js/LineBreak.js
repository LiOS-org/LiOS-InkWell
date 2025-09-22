// modules/js/newLink.js
export function lineBreak(editor) {
    const selection = window.getSelection();

    let range;
    
    // Use current selection if available, otherwise insert at end
    if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
    } else {
        range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
    }


    const lineBreak = document.createElement("br");

    range.insertNode(lineBreak);
    const space = document.createTextNode("\u200B");

    lineBreak.after(space);

    // Move cursor after the inserted link
    range.setStartAfter(space);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}

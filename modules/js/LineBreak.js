// modules/js/newLink.js
export function lineBreak(editor) {
    const selection = window.getSelection();

    let range;
    
        range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);


    const lineBreak = document.createElement("br");

    range.insertNode(lineBreak);
    const space = document.createTextNode("\u200B");

    range.insertNode(lineBreak);
    lineBreak.after(space);

    // Move cursor after the inserted link
    range.setStartAfter(space);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}

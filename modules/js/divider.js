// modules/js/newLink.js
export function divider(editor) {
    const selection = window.getSelection();

    let range;
    
        range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);


    const divider = document.createElement("hr");

    range.insertNode(divider);
    const space = document.createTextNode("\u200B");

    range.insertNode(divider);
    divider.after(space);

    // Move cursor after the inserted link
    range.setStartAfter(space);
    range.collapse(true);

    selection.removeAllRanges();
    selection.addRange(range);
}

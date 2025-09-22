export function insertImage(editor) {
    const url = prompt("Enter image URL:");
    if (!url) return;

    const selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);

    const img = document.createElement("img");
    img.src = url;
    img.alt = prompt("Inserted Image Name");

    range.insertNode(img);

    const space = document.createTextNode("\u200B"); // caret holder
    const lineBreak = document.createElement("br");
    img.after(lineBreak);
    lineBreak.after(space);

    range.setStartAfter(space);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}
export function insertHeading(editor, level = 1) {
    const text = prompt(`Enter Heading ${level}:`);
    if (!text) return;

    const selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);

    const heading = document.createElement(`h${level}`);
    heading.textContent = text;

    range.insertNode(heading);

    // Add a line break after heading and caret placeholder
    const space = document.createTextNode("\u200B"); // caret holder

    heading.after(space);

    range.setStartAfter(space);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}
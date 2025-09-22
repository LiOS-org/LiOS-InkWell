import { createLink } from "../../modules/js/newLink.js";
import { boldText } from "../../modules/js/boldText.js";
import { lineBreak } from "../../modules/js/LineBreak.js";
import { divider } from "../../modules/js/divider.js";
import { italicText } from "../../modules/js/italicText.js";
import { underlineText } from "../../modules/js/underlineText.js";
import { insertImage } from "../../modules/js/imageInsertion.js";
import { insertHeading } from "../../modules/js/headings.js";

const inkwellInput = document.querySelector(".inkwell-input");
const output = document.querySelector(".inkwell-output");
let savedRange = null;
const selection = window.getSelection();
function saveSelection() {
    output.innerText = inkwellInput.innerHTML;
    if (selection.rangeCount > 0) {
        savedRange = selection.getRangeAt(0).cloneRange();
    }
}
inkwellInput.addEventListener("keyup", saveSelection);
inkwellInput.addEventListener("mouseup", saveSelection);

document.querySelector(".new-link").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    createLink(inkwellInput);
});
document.querySelector(".bold-text").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    boldText(inkwellInput);
});
document.querySelector(".line-break").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    lineBreak(inkwellInput);
});
document.querySelector(".divider").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    divider(inkwellInput);
});
document.querySelector(".italic-text").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    italicText(inkwellInput);
});
document.querySelector(".underline-text").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    underlineText(inkwellInput);
});
document.querySelector(".insert-image").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    insertImage(inkwellInput);
});
document.querySelector(".insert-h1").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    insertHeading(inkwellInput,1);
});
document.querySelector(".insert-h2").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    insertHeading(inkwellInput,2);
});
document.querySelector(".insert-h3").addEventListener("click", () => {
    inkwellInput.focus();
    if (savedRange) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange);
    }
    insertHeading(inkwellInput,3);
});
## Barcode Generator

This is a simple web application for generating barcodes based on user input. <br>
Overall, this application allows users to input text, click a button, and generate a barcode dynamically on the webpage.  Here's how it works:

1. **HTML Structure (index.html):**
   - The HTML file defines the structure of the webpage.
   - It includes a `<div>` element with the class "container" that holds the content.
   - Inside the container, there's an `<h1>` heading, an `<input>` field for user input, a button with the id "btn-barcode-generator" for generating the barcode, and an empty `<svg>` element with the id "barcode" where the generated barcode will be displayed.
   - External dependencies such as Google Fonts and the JsBarcode library are included via CDN links.
   - External stylesheets and scripts (`style.css` and `script.js`) are linked.

2. **CSS Styles (style.css):**
   - Resets default margin, padding, and box-sizing behavior for all elements.
   - Sets the background color of the webpage to a dark color (`#1b1b1b`).
   - Styles the container with a light background color, padding, border radius, and centers it on the page.
   - Styles various elements like headings, input fields, and buttons for consistent appearance.

3. **JavaScript (script.js):**
   - Retrieves the input field and the button from the DOM.
   - Adds an event listener to the button that triggers a function when clicked.
   - When the button is clicked, it uses JsBarcode library to generate a barcode based on the value entered in the input field.
   - The barcode is displayed inside the SVG element with the id "barcode".
   - Additionally, when the window loads, it clears the input field.


### About Barcode

A barcode or bar code is a method of representing data in a visual, machine-readable form. Initially, barcodes represented data by varying the widths, spacings and sizes of parallel lines. These barcodes, now commonly referred to as linear or one-dimensional (1D), can be scanned by special optical scanners, called barcode readers, of which there are several types. <br>
[wiki](https://en.wikipedia.org/wiki/Barcode)


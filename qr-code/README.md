# Quick Response Code Generator
![image](images/1.png)

This is a simple web application for generating QR codes based on user input. it's a neat and user-friendly tool for generating QR codes with customization options. <br>
Here's a breakdown of how it works:

1. **HTML Structure**:
   - The `index.html` file defines the structure of the web page.
   - It includes input fields for the user to enter text or a URL, select options for QR code size, and choose background and foreground colors.
   - It has buttons for generating and downloading the QR code.

2. **CSS Styling**:
   - The `style.css` file provides styling for the HTML elements, including layout, colors, and fonts.
   - It ensures that the page looks visually appealing and is responsive.

3. **JavaScript Functionality**:
   - The `script.js` file handles the interactive functionality of the web page.
   - It listens for events such as changes in input values or button clicks.
   - When the user inputs text or changes options, it updates the QR code accordingly.
   - It formats the input, generates the QR code using the selected options, and provides a download link for the generated QR code image.

4. **QR Code Generation**:
   - It uses the `qrcodejs` library to generate QR codes dynamically based on user input.
   - The QR code's size, background color, and foreground color can be customized by the user.
   - The generated QR code is displayed on the web page and can be downloaded as an image.


## About QR Code

A QR code (quick-response code) is a type of two-dimensional matrix barcode, invented in 1994, by Japanese company Denso Wave for labelling automobile parts. A QR code consists of black squares arranged in a square grid on a white background, including some fiducial markers, which can be read by an imaging device, such as a camera, and processed using Reed–Solomon error correction until the image can be appropriately interpreted. The required data are then extracted from patterns that are present in both the horizontal and the vertical components of the QR image. [[wiki](https://en.wikipedia.org/wiki/QR_code)]

<[web app]()>

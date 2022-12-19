# React Color Generator
 
⚡ Generate shades for your respective input color and copy colors to your clipboard.

## [Live Link](https://react-color-generator-ochre.vercel.app/)

## DEMO ▶: 
https://user-images.githubusercontent.com/113245457/206903547-75cdd70a-a3a1-4bbc-98b4-68dd9553ed39.mp4

# Tech Stack: 
- CSS
- React
- TypeScript
- React Icons
- React Hot Toasts
- Values.js

## Features: 
1. Get Random Color shades on clicking random button. (Toasts)
2. On Clicking Submit button, provided with input shades and input color, (100 / shades) of both light and dark and base color will be generated. Example. entering shades : 2, 50 dark, 50 light and 1 base color will be generated.
3. If the rgb of any shade sums upto less than 300 (< 300), white text is used to give info about that particular shade, as black text on the shade background will not be visible. Example. if rgb of any shade is rgb(158, 61, 61) i.e. 158 + 61 + 61 = 280 so it is less than 300, so the text will be white on that rgb(158, 61, 61) shade, else it will be in black.
4. If the user, submits without changing inputs, i.e. previous and current input is same, a toast is shown to user saying to change inputs to generate different color shades or differenct shade count.   
5. Copy to clipboard feature. The check icon will last for 500 milliseconds.
6. Toasts will be visible for 750 milliseconds.
7. App is Responsive 😎.

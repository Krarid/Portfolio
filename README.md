# Portfolio
QA Automation Portfolio by Javier Meléndez

# Pre-requisites
Download node js: https://nodejs.org/en/download

# Steps
1. Create a folder “portfolio”
2. Open terminal in Visual Studio Code and navigate via CLI to the recently added folder
3. Run the following commands:
  > npm init -y
  > npm install -D tailwindcss
  > npx tailwindcss init
4. Create “input.css” file in root
5. Add the following in “package.json”
```"scripts": { "build": "tailwindcss -i ./input.css -o ./css/style.css", "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch" } ```
6. Run in terminal
> npm run build
7. Create an “index.html” file and link the CSS file recently added
> <link rel="stylesheet" href="css/style.css">
8. Add to the body:
``` <h1 class="text-3xl text-white bg-stone-800">Hello world!</h1> ```
10. Test tailwind by running in terminal:
> npm run watch
10. Open “index.html” with open live server extension
11. You should see a text with CSS styles thanks to tailwindcss! 

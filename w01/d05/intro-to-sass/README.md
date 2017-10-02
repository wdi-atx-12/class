# Intro to Sass

- [Presentation Slides](https://docs.google.com/a/generalassemb.ly/presentation/d/13fR_1BdKNNNBm5v-wvJFk1t9yaJB5kZZV0GEodCNfR0/edit?usp=sharing)

## Adding this build to a project

1. Copy the `gulpfile.js` and `package.json` from this folder into your project's main folder.
2. Open terminal and `cd` into your project's main folder. (It's important you run the build commands from the project folder--not a subfolder).
3. Run `npm install` in order to get all the packages (dependencies) that our build needs.
4. Use gulp to build your SCSS to CSS (`gulp build` or `gulp watch` or `gulp deploy`, `gulp` will explain the purpose of each)
5. Note that the build is expecting to find a `scss/` folder with `.scss` files inside and it will output the CSS to a `public/` folder by default. You can modify these folders by editing the `gulpfile.js` (i.e. build instructions).

* If you've never installed `gulp` before, you'll get a message like "command not found" on step 4. In that case, install gulp on your machine before continuing (`npm install -g gulp`). You should only need to do this on your machine once.

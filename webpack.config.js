const path = require("path");

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve.
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/
// NOTE: each time you change this file and want to try again, you will need to "control-c" in the
// terminal, and re-run the "npm run react-webpack" command.

// TODO: edit the lines below that have comments above them
// you might want to refer to webpack docs as well https://webpack.js.org/concepts/
// (this repo was created with webpack v5)

// you can now delete or comment out these next lines:
// setTimeout(()=> {
//   console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
//   console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
//   console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
//   console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
// }, 2000);

// Update this variable below to point to the folder with the file
// that will be webpack's "entry point".
// This is the first file that webpack puts into the "bundle.js" file it is creating.
// Webpack will then create a "dependency graph", bundling any dependencies
// referenced by the file. Such as: other files, npm modules, images, or css.
// see https://webpack.js.org/concepts/dependency-graph/

// Update this next variable to point to the folder
// where webpack will write the final bundled file.
// Have this variable resolve to the "dist" folder inside of "./client"
var DIST_DIR = path.join(__dirname, './client/dist');


module.exports = {
  // mode needs to be set to 'development'. Another option is 'production'
  mode: 'development',

  // this will reference the value set above, and look first at 'index.jsx'
  // as the starting point when combining all the files into a final bundle.
  entry: `./index.jsx`,
  output: {

    // standard name
    filename: 'bundle.js',

    // this was set above
    path: DIST_DIR,
  },

  // Out of the box, webpack only understands JavaScript and JSON files. "Loaders" allow
  // webpack to process other types of files and convert them into valid modules that can
  // be consumed by your application and added to the dependency graph.

  module: {

    rules: [
      {
        // this loader allows the direct "import" of css rules, such as in
        // client/webpack-src/Image.jsx

        // The "test" property identifies which file or files should be transformed.
        // The "use" property indicates which loader should be used to do the transforming.
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {

          // NOTE: when using the 'babel-loader', there must be a ".babelrc" file
          // with the proper plugins.
          // NEXT: head to ".babelrc" and follow the instructions there to
          // make the needed edits in that file
          loader: 'babel-loader',
        },
      }
    ],
  },
};

// module.exports={
//     /** "mode"
//      * the environment - development, production, none. tells webpack
//      * to use its built-in optimizations accordingly. default is production
//      */
//     mode: "development",
//     /** "entry"
//      * the entry point
//      */
//     entry: "./index.jsx",
//     output: {
//         /** "path"
//          * the folder path of the output file
//          */
//         path: path.resolve(__dirname, "public"),
//         /** "filename"
//          * the name of the output file
//          */
//         filename: "main.js"
//     },
//     /** "target"
//      * setting "node" as target app (server side), and setting it as "web" is
//      * for browser (client side). Default is "web"
//      */
//     target: "web",
//     devServer: {
//         /** "port"
//          * port of dev server
//         */
//         port: "9500",
//         /** "static"
//          * This property tells Webpack what static file it should serve
//         */
//         static: ["./public"],
//         /** "open"
//          * opens the browser after server is successfully started
//         */
//         open: true,
//         /** "hot"
//          * enabling and disabling HMR. takes "true", "false" and "only".
//          * "only" is used if enable Hot Module Replacement without page
//          * refresh as a fallback in case of build failures
//          */
//         hot: true ,
//         /** "liveReload"
//          * disable live reload on the browser. "hot" must be set to false for this to work
//         */
//         liveReload: true
//     },
//     resolve: {
//         /** "extensions"
//          * If multiple files share the same name but have different extensions, webpack will
//          * resolve the one with the extension listed first in the array and skip the rest.
//          * This is what enables users to leave off the extension when importing
//          */
//         extensions: ['.js','.jsx','.json']
//     },
//     module:{
//         /** "rules"
//          * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
//          * file inside of a require()/import statement, use the babel-loader to transform it before you
//          * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
//          * being searched"
//          */
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
//                 exclude: /node_modules/, //folder to be excluded
//                 use:  'babel-loader' //loader which we are going to use
//             }
//         ]
//     }
// }
# Lake Afton Public Observatory website
Website for the Lake Afton Public Observatory

## Working with the source code
The source files are written in [EJS](http://ejs.co/) and we are using [Harp.js](https://harpjs.com/) to build those files.
All the sources are inside the `_src` directory. When you run `harp compile _src .` the contents of the `_src` directory will be compiled and copied to the root directory of the project.
You need to put all the files inside the `_src` directory, since the files in the root directory will be replaced each time the files are compiled.

`npm i`

You can start a local web server for development by running the following command:

```
npm start
```

Run the following command to build the source files (note the dot at the end):

```
harp compile _src .
```

## Images, scripts, and other includes
The website is now set up as https only (thanks to letsencrypt.org!). When adding images, scripts, and other includes you must ensure they are coming from a secure (http) source. The best way is to include the file in this repository and reference it using relative URLs. If you must include an external source it must support https.

Note: Creating external hyperlinks to non-secure resources is fine.

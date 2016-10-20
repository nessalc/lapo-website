# Lake Afton Public Observatory website
Website for the Lake Afton Public Observatory

## Working with the source code

The source files are writen in [EJS](http://ejs.co/) and we are using [Harp.js](https://harpjs.com/) to build those files.
All the sources are inside the `_src` directory. When you run `harp compile _src .` the contents of the `_src` directory will be compiled and copied to the root directory of the project.
Is recommended to put all the files inside the `_src` directory, since the files in the root directory will be replaced each time the files are compiled.

Before installing Harp make sure you have [NodeJS](https://nodejs.org) installed. 

To install Harp, run the following command:

```sudo npm install -g harp```

You can start a local web server for development by running the following command:

```harp server _src```

Run the following command to build the source files (note the dot at the end):

```harp compile _src .```

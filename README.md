ng-wallet
==========

Simple wallet application which allows a user to add and remove amounts to and from his/her wallet.

Current version: 0.0.1

## Features

- General development features:
  - AngularJS
  - Sass
  - Gulp.js 
  - Bower

## Getting Started

To get you started you can simply clone the ng-wallet repository and install the dependencies:

### Prerequisites

You need git to clone the ng-wallet repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

I also use a number of node.js tools to initialise ng-wallet. You must have node.js and its package manager (npm) installed. You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone ng-wallet

Clone the ng-wallet repository using [git](http://git-scm.com/):

```
git clone https://github.com/borteo/ng-wallet.git
cd ng-wallet
```

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code. The tools help to manage the application.

* We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.org/).
* We get the angular code via `bower`, a [client-side code package manager](http://bower.io/).
* `gulp` concatenates JavaScript, compiles Sass and move HTML files into dist/ [The streaming build system](http://gulpjs.com/).


I have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. You should find that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `dist/components` - contains the angular framework files


### Run the application

I have preconfigured the project with a simple development web server. 

Firstly we have to build the application:

```
gulp build
```

The simplest way to start the server is:

```
gulp server
```

At this point your browser will open the Web page (localhost -port 9122).

### Run tasks with gulp
- Run `gulp watch` for live compiling SCSS and JS
- Run `gulp build` for building
- Run `gulp server` for starting the server

## Directory Layout

    app/          --> all of the files to be used in development
      css/        --> CSS files (Sass)
      js/         --> JavaScript files
      partials/   --> AngularJS partials
    dist/         --> public folder - minified scripts
      index.html  --> index page
    test/         --> test scripts


## Application dependencies

- As CSS bootstrap the project relies on __PureCSS__. A set of small, responsive CSS modules. Tiny and very light.
- The wallet data persists on page refresh. [ngStorage](https://github.com/gsklee/ngStorage) provides a simple and quick way to use session storage and local storage.

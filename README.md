gruntAndCoffee
==============

a test repo for setting up grunt.  also developing coffeescript chops by converting responsivenav.js to coffee script.

## Getting Setup

Make sure you have Node ~> v0.10.24 and Ruby ~> v2.0.0 installed

From your working directory:

* `$ gem install bundler`
* `$ bundle install`
* `$ npm install -g grunt-cli`
* `$ npm install`

_If you're using rbenv, run `rbenv rehash` after the installation to ensure the shim is created_

You can verify everything is working by executing

`$ grunt build`

You should now have a _build_ folder with the minified contents.

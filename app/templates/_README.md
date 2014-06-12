# <%= props.name %>
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

<%= props.description %>


## Install

```bash
$ npm install --save <%= slugname %>
```


## API

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## Release History

_(Nothing yet)_


## License

Copyright (c) <%= currentYear %><% if (props.authorName) { %> <%= props.authorName %><% } %>. Licensed under the <%= props.license %> license.



[npm-url]: https://npmjs.org/package/<%= slugname %>
[npm-image]: https://badge.fury.io/js/<%= slugname %>.svg
[travis-url]: https://travis-ci.org/<%= props.githubUsername %>/<%= slugname %>
[travis-image]: https://travis-ci.org/<%= props.githubUsername %>/<%= slugname %>.svg?branch=master
[daviddm-url]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>

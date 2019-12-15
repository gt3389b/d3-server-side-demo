# d3-server-side-demo

This demo app uses d3.js to render svg charts on the server-side with node.js.


## Requirements

* Node.js - [http://nodejs.org](http://nodejs.org)
* GCC Compiler - the d3 node module uses jsdom which requires a C++ compiler:
[https://github.com/tmpvar/jsdom#contextify](https://github.com/tmpvar/jsdom#contextify)


## Getting Started

* Clone the repo
* Install dependencies with `npm install`

For latest OSX:
```
export LD_LIBRARY_PATH=/usr/local/Cellar/gcc/9.2.0_2/lib/gcc/9/
env CXXFLAGS="-mmacosx-version-min=10.9" npm install
```

* Run development server with `npm start` and go here:
[http://localhost:3000/](http://localhost:3005/)

# React File Reader
[![Build Status](https://travis-ci.org/GrillWork/react-file-reader.png?branch=master)](https://travis-ci.org/GrillWork/react-file-reader)
[![DAVID](https://david-dm.org/grillwork/react-file-reader.svg)](https://david-dm.org/grillwork/react-file-reader)

[![NPM](https://nodei.co/npm/react-file-reader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-file-reader/)

[LIVE DEMO](http://react-file-reader.herokuapp.com/)

A flexible ReactJS component for handling styled HTML file inputs.

## Install
```
npm install react-file-reader --save
```

## ChangeLog
  - 1.1.4
    - adds disabled prop for input
  - 1.1.3
    - adds the ability to accept multiple fileTypes as an array
  - 1.1.2
    - fixes an issue where the same file couldn't be selected twice in a row
  - 1.1.1
    - changes the way we're hiding the input, as previously it would break parent elements that were positioned absolutely.
  - 1.1.0
    - adds the ability to return both base64 strings and an HTML5 FileList from handleFiles
  - 1.0.3
    - bumps React version to 15.5 and fixes UNMET peer dependency with webpack
  - 1.0.2
    - fixed an issue w/ prop-types not being available
  - 1.0.1
    - fixed issue w/ uuid4 being a devDependency
  - 1.0.0
    - initial release

## Props
### Default Props
  - fileTypes: 'image/\*'
  - multipleFiles: false
  - base64: false

### Required Props
- a child element/component
  - pass in your customized element to represent your upload input
- handleFiles
  - a function to handle the selected files from the HTML input

### Optional Props
- elementId
  - set a `unique` element Id for the input element
  - if this is not set, a random UUID is generated for each input on the page.
- base64
  - a `boolean` to convert and return the files as a base64 `string`
  - multipleFile selection will return an `array` of base64 `strings`
- multipleFiles
  - a `boolean` enforce single file or multiple file selection
- fileTypes
  - React File Reader supports all [HTML input accept attributes](https://www.w3schools.com/tags/att_input_accept.asp).
  - Can be passed as a string or an array
- disabled
  - disable input

## Usage
### Import React File Reader
```javascript
import ReactFileReader from 'react-file-reader';
```

### Basic Use
```javascript
handleFiles = files => {
  console.log(files)
}

<ReactFileReader handleFiles={this.handleFiles}>
  <button className='btn'>Upload</button>
</ReactFileReader>
```

#### Response
[HTML5 FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)

### Base64
When base64 is true, React File Reader returns a JS Object including both the base64 files and the HTML5 FileList. You can access their values at Object.base64 or Object.fileList

```javascript
handleFiles = (files) => {
  console.log(files.base64)
}

<ReactFileReader fileTypes={[".csv",".zip"]} base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
  <button className='btn'>Upload</button>
</ReactFileReader>
```

#### Response

###### multipleFiles={true}
```
["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA", "data:image/png;base64,i..."]
```

###### multipleFiles={false}
```
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."
```

###### Access HTML5 FileList with base64={true}
```
handleFiles = (files) => {
  console.log(files.fileList)
}
```

## Copyright
Copyright (c)2017 [Grillwork Inc](http://grillwork.io). See [LICENSE](https://github.com/GrillWork/react-file-reader/blob/master/LICENSE) for details.

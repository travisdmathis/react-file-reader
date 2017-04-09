'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactFileReader = function (_React$Component) {
  _inherits(ReactFileReader, _React$Component);

  function ReactFileReader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactFileReader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactFileReader.__proto__ || Object.getPrototypeOf(ReactFileReader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      elementId: _this.props.elementId || (0, _v2.default)()
    }, _this.clickInput = function () {
      var element = document.getElementById(_this.state.elementId);

      element.click();
    }, _this.handleFiles = function (event) {
      if (_this.props.base64) {
        _this.convertFilesToBase64(event.target.files);
      } else {
        _this.props.handleFiles(event.target.files);
      }
    }, _this.convertFilesToBase64 = function (files) {
      var ef = files;

      if (_this.props.multipleFiles) {
        var i, len;

        (function () {
          var files = [];

          var _loop = function _loop() {
            var reader = new FileReader();
            var f = ef[i];

            reader.onloadend = function (e) {
              files.push(reader.result);

              if (files.length === ef.length) {
                _this.props.handleFiles(files);
              }
            };

            reader.readAsDataURL(f);
          };

          for (i = 0, len = ef.length; i < len; i++) {
            _loop();
          }
        })();
      } else {
        var f = files[0];
        var _reader = new FileReader();

        _reader.onloadend = function (e) {
          this.props.handleFiles(_reader.result);
        }.bind(_this);

        _reader.readAsDataURL(f);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactFileReader, [{
    key: 'render',
    value: function render() {
      var hideInput = {
        width: '0px',
        opacity: '0px',
        position: 'fixed',
        left: '-99999999px'
      };

      return _react2.default.createElement(
        'div',
        { className: 'react-file-reader' },
        _react2.default.createElement('input', { type: 'file',
          onChange: this.handleFiles,
          accept: this.props.fileTypes,
          className: 'react-file-reader-input',
          id: this.state.elementId,
          multiple: this.props.multipleFiles,
          style: hideInput
        }),
        _react2.default.createElement(
          'div',
          { className: 'react-file-reader-button', onClick: this.clickInput },
          this.props.children
        )
      );
    }
  }]);

  return ReactFileReader;
}(_react2.default.Component);

exports.default = ReactFileReader;


ReactFileReader.defaultProps = {
  fileTypes: 'image/*',
  multipleImages: false,
  base64: false
};

ReactFileReader.propTypes = {
  multipleFiles: _react2.default.PropTypes.bool,
  handleFiles: _react2.default.PropTypes.func.isRequired,
  fileTypes: _react2.default.PropTypes.string,
  base64: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.element.isRequired
};

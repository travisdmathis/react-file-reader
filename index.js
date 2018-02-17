'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uuid = require('uuid4');

var _uuid2 = _interopRequireDefault(_uuid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
      elementId: _this.props.elementId || (0, _uuid2.default)()
    }, _this.clickInput = function () {
      var element = document.getElementById(_this.state.elementId);
      element.value = '';
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
          var files = { base64: [], fileList: ef };

          var _loop = function _loop() {
            var reader = new FileReader();
            var f = ef[i];

            reader.onloadend = function (e) {
              files.base64.push(reader.result);

              if (files.base64.length === ef.length) {
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
        var _files = { base64: '', fileList: ef };
        var f = ef[0];
        var _reader = new FileReader();

        _reader.onloadend = function (e) {
          _files.base64 = _reader.result;
          _this.props.handleFiles(_files);
        };

        _reader.readAsDataURL(f);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactFileReader, [{
    key: 'render',
    value: function render() {
      var hideInput = {
        width: '0px',
        opacity: '0',
        position: 'fixed'
      };

      return _react2.default.createElement(
        'div',
        { className: 'react-file-reader' },
        _react2.default.createElement('input', { type: 'file',
          onChange: this.handleFiles,
          accept: Array.isArray(this.props.fileTypes) ? this.props.fileTypes.join(',') : this.props.fileTypes,
          className: 'react-file-reader-input',
          id: this.state.elementId,
          multiple: this.props.multipleFiles,
          style: hideInput,
          disabled: this.props.disabled
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
  multipleFiles: false,
  base64: false,
  disabled: false
};

ReactFileReader.propTypes = {
  multipleFiles: _propTypes2.default.bool,
  handleFiles: _propTypes2.default.func.isRequired,
  fileTypes: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  base64: _propTypes2.default.bool,
  children: _propTypes2.default.element.isRequired,
  disabled: _propTypes2.default.bool
};

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_LottoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/LottoController */ "./src/js/controller/LottoController.js");

var lottoManager = new _controller_LottoController__WEBPACK_IMPORTED_MODULE_0__["default"]();
lottoManager.init();

/***/ }),

/***/ "./src/js/constants/index.js":
/*!***********************************!*\
  !*** ./src/js/constants/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOTTO_NUMBERS": () => (/* binding */ LOTTO_NUMBERS),
/* harmony export */   "ALERT_MESSAGE": () => (/* binding */ ALERT_MESSAGE)
/* harmony export */ });
var LOTTO_NUMBERS = Object.freeze({
  THOUSAND: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_LENGTH: 6,
  FIRST_WINNINGS: 2000000000,
  SECOND_WINNINGS: 30000000,
  THIRD_WINNINGS: 1500000,
  FOURTH_WINNINGS: 50000,
  FIFTH_WINNINGS: 5000
});
var ALERT_MESSAGE = Object.freeze({
  MUST_NUMBER: '숫자를 입력하세요.',
  OVER_THOUSAND_INPUT: '1000원 이상을 입력해주세요.',
  DIVIDED_BY_THOUSAND: '1000으로 나누어 떨어지는 값을 입력해주세요',
  OUT_OF_BOUNDS: '1 ~ 45 사이의 숫자를 입력해주세요.',
  DUPLICATED_NUMBERS: '중복되지 않은 숫자를 입력해주세요.'
});

/***/ }),

/***/ "./src/js/controller/LottoController.js":
/*!**********************************************!*\
  !*** ./src/js/controller/LottoController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LottoController)
/* harmony export */ });
/* harmony import */ var _model_LottoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/LottoModel */ "./src/js/model/LottoModel.js");
/* harmony import */ var _view_resultView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/resultView */ "./src/js/view/resultView.js");
/* harmony import */ var _view_inputView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/inputView */ "./src/js/view/inputView.js");
/* harmony import */ var _view_PopupView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/PopupView */ "./src/js/view/PopupView.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var LottoController = /*#__PURE__*/function () {
  function LottoController() {
    _classCallCheck(this, LottoController);

    this.model = new _model_LottoModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.resultView = new _view_resultView__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.inputView = new _view_inputView__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.popupView = new _view_PopupView__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  _createClass(LottoController, [{
    key: "init",
    value: function init() {
      this.initDOMs();
      this.bindEvent();
    }
  }, {
    key: "initDOMs",
    value: function initDOMs() {
      this.$lottoPriceForm = document.querySelector('#lotto-price-form');
      this.$lottoPriceInput = document.querySelector('#lotto-price-input');
      this.$lottoPriceButton = document.querySelector('#lotto-price-button');
      this.$result = document.querySelector('#result');
      this.$popup = document.querySelector('#popup');
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      this.$lottoPriceForm.addEventListener('submit', this.submitLottoPriceHandler.bind(this));
      this.$result.addEventListener('click', this.clickCheckResultButtonHandler.bind(this));
      this.$popup.addEventListener('click', this.clickClosePopupButtonHandler.bind(this));
      this.$popup.addEventListener('click', this.clickRestartButtonHandler.bind(this));
    }
  }, {
    key: "initAfterRenderResult",
    value: function initAfterRenderResult() {
      this.initDOMsAfterRenderResult();
      this.bindEventAfterRenderResult();
    }
  }, {
    key: "initDOMsAfterRenderResult",
    value: function initDOMsAfterRenderResult() {
      this.$checkbox = document.querySelector('#view-checkbox');
    }
  }, {
    key: "bindEventAfterRenderResult",
    value: function bindEventAfterRenderResult() {
      this.$checkbox.addEventListener('change', this.changeCheckBoxHandler.bind(this));
    }
  }, {
    key: "unbindEvent",
    value: function unbindEvent() {
      this.$checkbox.removeEventListener('change', this.changeCheckBoxHandler.bind(this));
    }
  }, {
    key: "closePopupHandler",
    value: function closePopupHandler() {
      this.popupView.toggleMainContainerState();
      this.popupView.closePopup();
    }
  }, {
    key: "initLottoGame",
    value: function initLottoGame() {
      this.inputView.initLottoPriceInput();
      this.resultView.initResult();
      this.model.initGame();
      this.unbindEvent();
    }
  }, {
    key: "submitLottoPriceHandler",
    value: function submitLottoPriceHandler(event) {
      event.preventDefault();
      var value = this.$lottoPriceInput.value;

      try {
        this.model.setLottoCount(value);
        this.model.setLottos(this.model.generateLottos());
        this.resultView.renderResult(this.model.getLottoCount());
        this.initAfterRenderResult();
        this.inputView.renderWinningNumbersInput();
      } catch (err) {
        alert(err);
      }
    }
  }, {
    key: "changeCheckBoxHandler",
    value: function changeCheckBoxHandler(_ref) {
      var target = _ref.target;

      if (target.checked) {
        this.resultView.renderLottos(this.model.getLottos());
        return;
      }

      this.resultView.initLottos();
    }
  }, {
    key: "clickCheckResultButtonHandler",
    value: function clickCheckResultButtonHandler(_ref2) {
      var target = _ref2.target;
      if (target.id !== 'check-result-button') return;
      var $winningNumberInputs = document.querySelectorAll('.winning-number-input');
      var $bonusNumberInput = document.querySelector('.bonus-number-input');
      var winnerNumberArray = Array.from($winningNumberInputs).map(function ($winningNumberInput) {
        return Number($winningNumberInput.value);
      });
      var bonusNumber = Number($bonusNumberInput.value);

      try {
        this.model.setWinningLottoNumbers(winnerNumberArray, bonusNumber);
        this.popupView.renderPopup(this.model.calculateWinningNumbers(), this.model.calculateEarningRate());
        this.popupView.toggleMainContainerState();
      } catch (err) {
        alert(err);
      }
    }
  }, {
    key: "clickClosePopupButtonHandler",
    value: function clickClosePopupButtonHandler(_ref3) {
      var target = _ref3.target;
      if (target.id !== 'close-popup-button') return;
      this.model.initWinningType();
      this.closePopupHandler();
    }
  }, {
    key: "clickRestartButtonHandler",
    value: function clickRestartButtonHandler(_ref4) {
      var target = _ref4.target;
      if (target.id !== 'restart-button') return;
      this.closePopupHandler();
      this.initLottoGame();
    }
  }]);

  return LottoController;
}();



/***/ }),

/***/ "./src/js/model/LottoModel.js":
/*!************************************!*\
  !*** ./src/js/model/LottoModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LottoModel)
/* harmony export */ });
/* harmony import */ var _utils_getTotalWinningLottoNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getTotalWinningLottoNumbers */ "./src/js/utils/getTotalWinningLottoNumbers.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/random */ "./src/js/utils/random.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/validator */ "./src/js/utils/validator.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var LottoModel = /*#__PURE__*/function () {
  function LottoModel() {
    _classCallCheck(this, LottoModel);

    this.lottoCount = 0;
    this.lottos = [];
    this.winningLottoNumbers = {
      winningNumbers: [],
      bonus: 0
    };
    this.winningType = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0
    };
  }

  _createClass(LottoModel, [{
    key: "setLottoCount",
    value: function setLottoCount(value) {
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_3__.checkValidLottoCount)(value);
      this.lottoCount = value / _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.THOUSAND;
    }
  }, {
    key: "getLottoCount",
    value: function getLottoCount() {
      return this.lottoCount;
    }
  }, {
    key: "getLottoNumbers",
    value: function getLottoNumbers() {
      var lottoNumberSet = new Set();

      while (lottoNumberSet.size < _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.LOTTO_LENGTH) {
        lottoNumberSet.add((0,_utils_random__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.MIN_LOTTO_NUMBER, _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.MAX_LOTTO_NUMBER));
      }

      return _toConsumableArray(lottoNumberSet);
    }
  }, {
    key: "setLottos",
    value: function setLottos(lottos) {
      this.lottos = lottos;
    }
  }, {
    key: "getLottos",
    value: function getLottos() {
      return this.lottos;
    }
  }, {
    key: "setWinningLottoNumbers",
    value: function setWinningLottoNumbers(winnerNumberArray, bonusNumber) {
      (0,_utils_validator__WEBPACK_IMPORTED_MODULE_3__.checkValidWinningNumbers)((0,_utils_getTotalWinningLottoNumbers__WEBPACK_IMPORTED_MODULE_0__["default"])(winnerNumberArray, bonusNumber));
      this.winningLottoNumbers.winningNumbers = winnerNumberArray;
      this.winningLottoNumbers.bonus = bonusNumber;
    }
  }, {
    key: "generateLottos",
    value: function generateLottos() {
      var lottos = [];

      for (var i = 0; i < this.getLottoCount(); i += 1) {
        lottos.push(this.getLottoNumbers());
      }

      return lottos;
    }
  }, {
    key: "calculateWinningNumbers",
    value: function calculateWinningNumbers() {
      var _this = this;

      this.lottos.forEach(function (lotto) {
        var winningCount = 2 * lotto.length - _toConsumableArray(new Set(lotto.concat(_this.winningLottoNumbers.winningNumbers))).length;

        if (winningCount === 5 && lotto.includes(_this.winningLottoNumbers.bonus)) {
          winningCount += 0.5;
        }

        if (winningCount >= 3) {
          _this.winningType[winningCount] += 1;
        }
      });
      return this.winningType;
    }
  }, {
    key: "calculateEarningRate",
    value: function calculateEarningRate() {
      var winningPriceInfo = {
        3: _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.FIFTH_WINNINGS,
        4: _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.FOURTH_WINNINGS,
        5: _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.THIRD_WINNINGS,
        5.5: _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.SECOND_WINNINGS,
        6: _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.FIRST_WINNINGS
      };
      return Math.floor(Object.entries(this.winningType).reduce(function (acc, cur) {
        return acc + winningPriceInfo[cur[0]] * cur[1];
      }, 0) / (this.lottoCount * _constants_index__WEBPACK_IMPORTED_MODULE_2__.LOTTO_NUMBERS.THOUSAND) * 100);
    }
  }, {
    key: "initWinningType",
    value: function initWinningType() {
      this.winningType = {
        3: 0,
        4: 0,
        5: 0,
        5.5: 0,
        6: 0
      };
    }
  }, {
    key: "initGame",
    value: function initGame() {
      this.lottoCount = 0;
      this.lottos = [];
      this.winningLottoNumbers = {
        winningNumbers: [],
        bonus: 0
      };
      this.winningType = {
        3: 0,
        4: 0,
        5: 0,
        5.5: 0,
        6: 0
      };
    }
  }]);

  return LottoModel;
}();



/***/ }),

/***/ "./src/js/utils/getTotalWinningLottoNumbers.js":
/*!*****************************************************!*\
  !*** ./src/js/utils/getTotalWinningLottoNumbers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getTotalWinningLottoNumbers = function getTotalWinningLottoNumbers(winnerNumberArray, bonusNumber) {
  return [].concat(winnerNumberArray, bonusNumber);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTotalWinningLottoNumbers);

/***/ }),

/***/ "./src/js/utils/random.js":
/*!********************************!*\
  !*** ./src/js/utils/random.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomNumber);

/***/ }),

/***/ "./src/js/utils/validator.js":
/*!***********************************!*\
  !*** ./src/js/utils/validator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkValidLottoCount": () => (/* binding */ checkValidLottoCount),
/* harmony export */   "checkValidWinningNumbers": () => (/* binding */ checkValidWinningNumbers)
/* harmony export */ });
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ "./src/js/constants/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var validator = Object.freeze({
  isDividedThousand: function isDividedThousand(value) {
    return value % _constants_index__WEBPACK_IMPORTED_MODULE_0__.LOTTO_NUMBERS.THOUSAND === 0;
  },
  isOverThousand: function isOverThousand(value) {
    return value >= _constants_index__WEBPACK_IMPORTED_MODULE_0__.LOTTO_NUMBERS.THOUSAND;
  },
  isNumber: function isNumber(value) {
    return value.match(/[0-9]/);
  },
  isDuplicateWinningNumbers: function isDuplicateWinningNumbers(value) {
    return _toConsumableArray(new Set(value)).length !== value.length;
  },
  isOverRangeNumbers: function isOverRangeNumbers(value) {
    return value.some(function (elem) {
      return elem > _constants_index__WEBPACK_IMPORTED_MODULE_0__.LOTTO_NUMBERS.MAX_LOTTO_NUMBER || elem < _constants_index__WEBPACK_IMPORTED_MODULE_0__.LOTTO_NUMBERS.MIN_LOTTO_NUMBER;
    });
  },
  isAllNumber: function isAllNumber(value) {
    return value.every(function (elem) {
      return typeof elem === 'number';
    });
  }
});
var checkValidLottoCount = function checkValidLottoCount(value) {
  if (!validator.isNumber(value)) {
    throw Error(_constants_index__WEBPACK_IMPORTED_MODULE_0__.ALERT_MESSAGE.MUST_NUMBER);
  }

  if (!validator.isOverThousand(value)) {
    throw Error(_constants_index__WEBPACK_IMPORTED_MODULE_0__.ALERT_MESSAGE.OVER_THOUSAND_INPUT);
  }

  if (!validator.isDividedThousand(value)) {
    throw Error(_constants_index__WEBPACK_IMPORTED_MODULE_0__.ALERT_MESSAGE.DIVIDED_BY_THOUSAND);
  }
};
var checkValidWinningNumbers = function checkValidWinningNumbers(value) {
  if (validator.isOverRangeNumbers(value)) {
    throw Error(_constants_index__WEBPACK_IMPORTED_MODULE_0__.ALERT_MESSAGE.OUT_OF_BOUNDS);
  }

  if (validator.isDuplicateWinningNumbers(value)) {
    throw Error(_constants_index__WEBPACK_IMPORTED_MODULE_0__.ALERT_MESSAGE.DUPLICATED_NUMBERS);
  }
};

/***/ }),

/***/ "./src/js/view/PopupView.js":
/*!**********************************!*\
  !*** ./src/js/view/PopupView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupView)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/js/view/template/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var PopupView = /*#__PURE__*/function () {
  function PopupView() {
    _classCallCheck(this, PopupView);

    this.$popup = document.querySelector('#popup');
    this.$mainContainer = document.querySelector('.main-container');
  }

  _createClass(PopupView, [{
    key: "renderPopup",
    value: function renderPopup(winningType, earningRate) {
      this.$popup.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_0__["default"].makePopupTemplate(winningType, earningRate));
    }
  }, {
    key: "toggleMainContainerState",
    value: function toggleMainContainerState() {
      this.$mainContainer.classList.toggle('blocked');
      this.$popup.classList.toggle('emphasized');
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.$popup.replaceChildren();
    }
  }]);

  return PopupView;
}();



/***/ }),

/***/ "./src/js/view/inputView.js":
/*!**********************************!*\
  !*** ./src/js/view/inputView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputView)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/js/view/template/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var InputView = /*#__PURE__*/function () {
  function InputView() {
    _classCallCheck(this, InputView);

    this.$result = document.querySelector('#result');
    this.$lottoPriceInput = document.querySelector('#lotto-price-input');
  }

  _createClass(InputView, [{
    key: "renderWinningNumbersInput",
    value: function renderWinningNumbersInput() {
      this.$result.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_0__["default"].makeWinningNumbersTemplate());
    }
  }, {
    key: "initLottoPriceInput",
    value: function initLottoPriceInput() {
      this.$lottoPriceInput.value = '';
    }
  }]);

  return InputView;
}();



/***/ }),

/***/ "./src/js/view/resultView.js":
/*!***********************************!*\
  !*** ./src/js/view/resultView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResultView)
/* harmony export */ });
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/js/view/template/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var ResultView = /*#__PURE__*/function () {
  function ResultView() {
    _classCallCheck(this, ResultView);

    this.$result = document.querySelector('#result');
  }

  _createClass(ResultView, [{
    key: "renderResult",
    value: function renderResult(count) {
      this.$result.replaceChildren();
      this.$result.insertAdjacentHTML('beforeend', _template__WEBPACK_IMPORTED_MODULE_0__["default"].makeResultTemplate(count));
    }
  }, {
    key: "renderLottos",
    value: function renderLottos(lottos) {
      var $lottos = document.querySelectorAll('.lotto');
      var $resultLottos = document.querySelector('#result-lotto');
      $lottos.forEach(function ($lotto, idx) {
        $lotto.insertAdjacentHTML('beforeend', "<div class=\"lotto-numbers\">".concat(lottos[idx].join(', '), "</div>"));
      });
      $resultLottos.classList.toggle('checked');
    }
  }, {
    key: "initLottos",
    value: function initLottos() {
      var $lottosNumbers = document.querySelectorAll('.lotto-numbers');
      var $resultLottos = document.querySelector('#result-lotto');
      $lottosNumbers.forEach(function ($lottosNumber) {
        $lottosNumber.remove();
      });
      $resultLottos.classList.toggle('checked');
    }
  }, {
    key: "initResult",
    value: function initResult() {
      this.$result.replaceChildren();
    }
  }]);

  return ResultView;
}();



/***/ }),

/***/ "./src/js/view/template/index.js":
/*!***************************************!*\
  !*** ./src/js/view/template/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var makeTemplate = Object.freeze({
  makeWinningNumbersTemplate: function makeWinningNumbersTemplate() {
    return "\n    <div>\n      <p>\uC9C0\uB09C \uC8FC \uB2F9\uCCA8\uBC88\uD638 6\uAC1C\uC640 \uBCF4\uB108\uC2A4 \uBC88\uD638 1\uAC1C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</p>\n      <div class=\"numbers-input\">\n        <div class=\"winning-numbers\">\n          <div class=\"winning-numbers-header\">\uB2F9\uCCA8 \uBC88\uD638</div>\n          <div class=\"winning-numbers-input\">\n            <input type=\"number\" class=\"winning-number-input\"/>\n            <input type=\"number\" class=\"winning-number-input\"/>\n            <input type=\"number\" class=\"winning-number-input\"/>\n            <input type=\"number\" class=\"winning-number-input\"/>\n            <input type=\"number\" class=\"winning-number-input\"/>\n            <input type=\"number\" class=\"winning-number-input\"/>\n          </div>\n        </div>\n        <div class=\"bonus-number\">\n          <div class=\"bonus-number-header\">\uBCF4\uB108\uC2A4 \uBC88\uD638</div> \n          <input type=\"number\" class=\"bonus-number-input\"/>\n        </div>\n      </div>\n      <button id=\"check-result-button\" class=\"btn\">\uACB0\uACFC \uD655\uC778\uD558\uAE30</button>\n    </div>\n    ";
  },
  makePopupTemplate: function makePopupTemplate(winningType, earningRate) {
    return "\n    <div class=\"popup-container\">\n      <button id=\"close-popup-button\">X</button>\n      <h2>\uD83C\uDFC6 \uB2F9\uCCA8 \uD1B5\uACC4 \uD83C\uDFC6</h2>\n      <table>\n        <thead>\n          <tr>\n            <th>\uC77C\uCE58 \uAC2F\uC218</th>\n            <th>\uB2F9\uCCA8\uAE08</th>\n            <th>\uB2F9\uCCA8 \uAC2F\uC218</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>3\uAC1C</td>\n            <td>5,000</td>\n            <td>".concat(winningType['3'], "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>4\uAC1C</td>\n            <td>5,0000</td>\n            <td>").concat(winningType['4'], "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>5\uAC1C</td>\n            <td>1,500,000</td>\n            <td>").concat(winningType['5'], "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>5\uAC1C+\uBCF4\uB108\uC2A4\uBCFC</td>\n            <td>30,000,000</td>\n            <td>").concat(winningType['5.5'], "\uAC1C</td>\n          </tr>\n          <tr>\n            <td>6\uAC1C</td>\n            <td>2,000,000,000</td>\n            <td>").concat(winningType['6'], "\uAC1C</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class=\"earning-rate\">\uB2F9\uC2E0\uC758 \uCD1D \uC218\uC775\uB960\uC740 ").concat(earningRate, "% \uC785\uB2C8\uB2E4</p>\n      <button id=\"restart-button\" class=\"btn\">\uB2E4\uC2DC \uC2DC\uC791\uD558\uAE30</button>\n    </div>\n      ");
  },
  makeResultTemplate: function makeResultTemplate(count) {
    return "\n    <div id=\"result-container\">\n      <div id=\"purchase-result\">\n        <div id=\"result-header\">\uCD1D ".concat(count, "\uAC1C\uB97C \uAD6C\uB9E4\uD558\uC600\uC2B5\uB2C8\uB2E4.</div>\n        <div id=\"result-lotto\">\n          ").concat('<div class="lotto"><div class="lotto-icon">🎟️</div></div>'.repeat(count), "\n        </div>\n      </div>\n      <div id=\"view-number\">\n          <div>\uBC88\uD638 \uBCF4\uAE30</div>\n        <div class=\"toggle-switch\">\n          <input type=\"checkbox\" id=\"view-checkbox\" />\n          <label for=\"view-checkbox\">\n            <span class=\"toggle-track\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n    ");
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeTemplate);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nh1 {\n  text-align: center;\n  font-size: 34px;\n}\n\n#app {\n  position: relative;\n  width: 414px;\n  margin: 0 auto;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n}\n\n#lotto-price-form {\n  width: 100%;\n  margin-top: 40px;\n}\n\n#lotto-price-input {\n  width: 83%;\n  height: 36px;\n  border-radius: 4px;\n  border: 1px solid #b4b4b4;\n  padding-left: 8px;\n}\n\n#lotto-price-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n}\n\n.btn {\n  background: #00bcd4;\n  color: white;\n}\n\n.btn:hover {\n  cursor: pointer;\n  background-color: #80deea;\n}\n\n#result {\n  margin-top: 35px;\n}\n\n#result-container {\n  display: flex;\n}\n\n#purchase-result {\n  width: 75%;\n  margin-right: 30px;\n}\n\n#result-lotto {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  font-size: 34px;\n}\n\n#view-number {\n  margin-left: 10px;\n}\n\n.toggle-switch input[type='checkbox'] {\n  display: none;\n}\n\n.toggle-track {\n  display: inline-block;\n  position: relative;\n  width: 30px;\n  height: 14px;\n  border-radius: 60px;\n  margin-top: 25px;\n  margin-left: 25px;\n  background: #8b8b8b;\n  cursor: pointer;\n}\n\n.toggle-track:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -8px;\n  left: -15px;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  background: #ededed;\n  border-radius: 100%;\n  transition: left 0.3s;\n}\n\n.toggle-switch input[type='checkbox'] + label .toggle-track:after {\n  display: inline-block;\n  position: absolute;\n  right: 8px;\n  color: #fff;\n}\n\n.toggle-switch input[type='checkbox']:checked + label .toggle-track {\n  background: #80deea;\n}\n\n.toggle-switch input[type='checkbox']:checked + label .toggle-track:before {\n  left: 12px;\n}\n\n.toggle-switch input[type='checkbox']:checked + label .toggle-track:after {\n  left: 5px;\n}\n\n.checked {\n  flex-direction: column;\n}\n\n.lotto-numbers {\n  width: 100%;\n  font-size: 15px;\n  margin-left: 15px;\n  line-height: 43px;\n}\n\n.lotto {\n  display: flex;\n  margin-right: 10px;\n}\n\n.numbers-input {\n  display: flex;\n}\n\n.winning-numbers-input {\n  display: flex;\n  gap: 10px;\n}\n\n.bonus-number {\n  margin-left: 85px;\n  display: flex;\n  flex-direction: column;\n}\n\n.winning-number-input,\n.bonus-number-input {\n  width: 34px;\n  height: 36px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.bonus-number-input {\n  align-self: flex-end;\n}\n\n#check-result-button {\n  margin-top: 25px;\n  width: 100%;\n  height: 36px;\n  border-radius: 4px;\n  border: transparent;\n}\n\n.popup-container {\n  text-align: center;\n  border-radius: 4px;\n  width: 350px;\n  padding-bottom: 20px;\n  padding-top: 10px;\n  background-color: #ffffff;\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n\ntable {\n  width: 320px;\n  margin: 0 auto;\n  border-collapse: collapse;\n}\n\ntable tr {\n  border-bottom: 1px solid #dcdcdc;\n  height: 40px;\n}\n\n.earning-rate {\n  font-weight: 600;\n  margin-top: 30px;\n}\n\n#restart-button {\n  width: 152px;\n  height: 36px;\n  border: transparent;\n  border-radius: 4px;\n}\n\n#close-popup-button {\n  appearance: none;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n}\n\n#popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.blocked {\n  pointer-events: none;\n}\n\n.emphasized {\n  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;\n  z-index: 100;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,oBAAoB;EACpB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,SAAS;EACT,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,2CAA2C;EAC3C,YAAY;AACd","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nh1 {\n  text-align: center;\n  font-size: 34px;\n}\n\n#app {\n  position: relative;\n  width: 414px;\n  margin: 0 auto;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 10px;\n}\n\n#lotto-price-form {\n  width: 100%;\n  margin-top: 40px;\n}\n\n#lotto-price-input {\n  width: 83%;\n  height: 36px;\n  border-radius: 4px;\n  border: 1px solid #b4b4b4;\n  padding-left: 8px;\n}\n\n#lotto-price-button {\n  width: 56px;\n  height: 36px;\n  margin-left: 10px;\n  border: none;\n  border-radius: 4px;\n}\n\n.btn {\n  background: #00bcd4;\n  color: white;\n}\n\n.btn:hover {\n  cursor: pointer;\n  background-color: #80deea;\n}\n\n#result {\n  margin-top: 35px;\n}\n\n#result-container {\n  display: flex;\n}\n\n#purchase-result {\n  width: 75%;\n  margin-right: 30px;\n}\n\n#result-lotto {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  font-size: 34px;\n}\n\n#view-number {\n  margin-left: 10px;\n}\n\n.toggle-switch input[type='checkbox'] {\n  display: none;\n}\n\n.toggle-track {\n  display: inline-block;\n  position: relative;\n  width: 30px;\n  height: 14px;\n  border-radius: 60px;\n  margin-top: 25px;\n  margin-left: 25px;\n  background: #8b8b8b;\n  cursor: pointer;\n}\n\n.toggle-track:before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -8px;\n  left: -15px;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  background: #ededed;\n  border-radius: 100%;\n  transition: left 0.3s;\n}\n\n.toggle-switch input[type='checkbox'] + label .toggle-track:after {\n  display: inline-block;\n  position: absolute;\n  right: 8px;\n  color: #fff;\n}\n\n.toggle-switch input[type='checkbox']:checked + label .toggle-track {\n  background: #80deea;\n}\n\n.toggle-switch input[type='checkbox']:checked + label .toggle-track:before {\n  left: 12px;\n}\n\n.toggle-switch input[type='checkbox']:checked + label .toggle-track:after {\n  left: 5px;\n}\n\n.checked {\n  flex-direction: column;\n}\n\n.lotto-numbers {\n  width: 100%;\n  font-size: 15px;\n  margin-left: 15px;\n  line-height: 43px;\n}\n\n.lotto {\n  display: flex;\n  margin-right: 10px;\n}\n\n.numbers-input {\n  display: flex;\n}\n\n.winning-numbers-input {\n  display: flex;\n  gap: 10px;\n}\n\n.bonus-number {\n  margin-left: 85px;\n  display: flex;\n  flex-direction: column;\n}\n\n.winning-number-input,\n.bonus-number-input {\n  width: 34px;\n  height: 36px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.bonus-number-input {\n  align-self: flex-end;\n}\n\n#check-result-button {\n  margin-top: 25px;\n  width: 100%;\n  height: 36px;\n  border-radius: 4px;\n  border: transparent;\n}\n\n.popup-container {\n  text-align: center;\n  border-radius: 4px;\n  width: 350px;\n  padding-bottom: 20px;\n  padding-top: 10px;\n  background-color: #ffffff;\n  position: absolute;\n  transform: translate(-50%, -50%);\n}\n\ntable {\n  width: 320px;\n  margin: 0 auto;\n  border-collapse: collapse;\n}\n\ntable tr {\n  border-bottom: 1px solid #dcdcdc;\n  height: 40px;\n}\n\n.earning-rate {\n  font-weight: 600;\n  margin-top: 30px;\n}\n\n#restart-button {\n  width: 152px;\n  height: 36px;\n  border: transparent;\n  border-radius: 4px;\n}\n\n#close-popup-button {\n  appearance: none;\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n}\n\n#popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.blocked {\n  pointer-events: none;\n}\n\n.emphasized {\n  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;\n  z-index: 100;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index */ "./src/css/index.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            title: "Indecision App",
            subtitle: "Put your life in the hands of a computer",
            options: [],
            selectedOption: ''
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("componentDidMount");
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            console.log("componentDidUpdate");
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            console.log("componentWillUnmount");
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (opt) {
                        return opt !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return 'Please enter a valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists';
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var _this2 = this;

            this.setState(function () {
                return {
                    selectedOption: _this2.state.options[Math.floor(Math.random() * _this2.state.options.length)]
                };
            });
            alert(this.state.selectedOption);
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(Header, {
                    title: this.state.title,
                    subtitle: this.state.subtitle
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length,
                    onPick: this.handlePick
                }),
                React.createElement(Options, {
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption,
                    options: this.state.options
                }),
                React.createElement(AddOption, {
                    addOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "p",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.onPick },
            "What should I do"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            props.options.map(function (opt) {
                return React.createElement(
                    "li",
                    { key: opt },
                    React.createElement(Option, { label: opt, handleDeleteOption: props.handleDeleteOption })
                );
            })
        )
    );
};
var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "label",
            null,
            props.label
        ),
        React.createElement(
            "button",
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.label);
                }
            },
            " remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
        _this3.state = {
            error: ''
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.addOption(option);
            if (!error) {
                e.target.elements.option.value = "";
            }
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);

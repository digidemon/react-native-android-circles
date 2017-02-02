'use strict';

var React = require('react');
var ReactNative = require('react-native');

var { NativeModules, requireNativeComponent, View } = ReactNative;
var { PropTypes } = React;

class CirclesAndroid extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
  }

  _onChange(event: Event) {
    if (!this.props.onValueChange) {
      return;
    }
    this.props.onValueChange(event.nativeEvent.newValue);
  }

  _onTouchStart(event: Event) {
    if (!this.props.onTouchStart) {
      return;
    }
    this.props.onTouchStart();
  }

  _onTouchEnd(event: Event) {
    if (!this.props.onTouchEnd) {
      return;
    }
    this.props.onTouchEnd();
  }

  spin() {
    NativeModules.UIManager.dispatchViewManagerCommand(
      React.findNodeHandle(this),
      NativeModules.UIManager.RCTCircles.Commands.spin,
      []
    );
  };

  stopSpinning() {
    NativeModules.UIManager.dispatchViewManagerCommand(
      React.findNodeHandle(this),
      UIManager.RCTCircles.Commands.stopSpinning,
      []
    );
  };

  render() {
    return (
      <NativeCirclesAndroid 
        {...this.props}
        onChange={this._onChange}
        onTouchStart={this._onTouchStart}
        onTouchEnd={this._onTouchEnd} />
      );
  }
}
CirclesAndroid.propTypes = {
  ...View.propTypes,
  barColors: PropTypes.array,
  barWidth: PropTypes.number,
  blockCount: PropTypes.number,
  blockScale: PropTypes.number,
  contourColor: PropTypes.string,
  textColor: PropTypes.string,
  contourSize: PropTypes.number,
  delayMillis: PropTypes.number,
  fillColor: PropTypes.string,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  rimColor: PropTypes.string,
  rimWidth: PropTypes.number,
  startAngle: PropTypes.number,
  textScale: PropTypes.number,
  textSize: PropTypes.number,
  unit: PropTypes.string,
  unitVisible: PropTypes.bool,
  unitColor: PropTypes.string,
  unitScale: PropTypes.number,
  unitSize: PropTypes.number,
  animated:  PropTypes.bool,
  text: PropTypes.string,
  textMode: PropTypes.oneOf(['text', 'value', 'percent']),
  seekMode: PropTypes.bool,
  spinColor: PropTypes.string,
  spinSpeed: PropTypes.number,
  spinBarLength: PropTypes.number,
  onValueChange: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func
};

var NativeCirclesAndroid = requireNativeComponent('RCTCircles', CirclesAndroid);

module.exports = CirclesAndroid;
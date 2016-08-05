import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import tags from 'hyperscript-helpers';

const {div, h1, input, button, label} = tags(h);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }
  render(){
      return div([
          h(NumInput, {
              ref: "red",
              min: 0,
              max: 255,
              step: 0.01,
              val: +this.state.red,
              label: "Red",
              update: this.update
            })
        ])
  }
}

class NumInput extends React.Component {
  render(){
    return div([
                input({ref: "inp",
                    type: this.props.type,
                    min: this.props.min,
                    max: this.props.max,
                    step: this.props.step,
                    defaultValue: this.props.val,
                    onChange: this.props.update}),
                this.props.label !== '' ? label([this.props.label, " - ",  this.props.val]) : ''
            ])
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App
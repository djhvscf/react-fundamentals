import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import tags from 'hyperscript-helpers';

const {div, h1, input, button, label} = tags(h);

let Mixin = InnerComponent => class extends React.Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {val: 0};
    }
    update() {
        this.setState({
            val: this.state.val + 1
        })
    }
    componentWillMount() {
        console.log("will mount")
    }
    render() {
        return h(InnerComponent, {update: this.update, ...this.state, ...this.props})
    }
    componentDidMount() {
        console.log("mounted")
    }
}

const Button = (props) => button({onClick: props.update}, [props.txt, " - ", props.val])

const Label = (props) => label({onMouseMove: props.update}, [props.txt, " - ", props.val])

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
    render(){
        return div([h(ButtonMixed, {txt: 'Button'}), h(LabelMixed, {txt: 'Label'})])
    }
}

App.defaultProps = {
    txt : 'button'
}

export default App
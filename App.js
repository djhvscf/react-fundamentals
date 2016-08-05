import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import tags from 'hyperscript-helpers';

const {div, h1, input, button} = tags(h);

class App extends React.Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({
            val: this.state.val + 1
        })
    }
    componentWillMount() {
        this.setState({
            m: 2
        })
    }
    render(){
        console.log("rendering!")
        return button({onClick: this.update}, [this.state.val * this.state.m])
    }
    componentDidMount() {
        this.inc = setInterval(this.update, 500)
    }
    componentWillUnmount() {
        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {
    constructor() {
        super();
    }
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return div([
            button({onClick: this.mount.bind(this)}, ["Mount"]),
            button({onClick: this.unmount.bind(this)}, ["Unmount"]),
            div({id: 'a'})
        ])
    }
}

export default Wrapper
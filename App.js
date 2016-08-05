import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import tags from 'hyperscript-helpers';

const {div, h1, input} = tags(h);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        }
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red).value,
            green: ReactDOM.findDOMNode(this.refs.green).value,
            blue: ReactDOM.findDOMNode(this.refs.blue).value
        })
    }
    render(){
        //const style = {border: "1px solid black"};
        //let txt = this.state.txt
        //return div({style}, [Widget({onChange: this.update}), h1([txt])])
        return (
            <div>
                {this.state.txt}
                <hr/>
                <Slider ref="red" update={this.update} />
                {this.state.red}
                <br/>
                <Slider ref="green" update={this.update} />
                {this.state.green}
                <br/>
                <Slider ref="blue"update={this.update} />
                {this.state.blue}
            </div>
        )
    }
}

class Slider extends React.Component {
    render() {
        return input({onChange: this.props.update, type: "range", min:"0", max:"255"})
    }
}

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);

export default App
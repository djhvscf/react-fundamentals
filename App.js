import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import tags from 'hyperscript-helpers';

const {div, h1, input, button} = tags(h);

class App extends React.Component {
    render(){
        return <Button>I <Heart/> React</Button>        
    }
}

class Button extends React.Component {
    render() {
        return button([this.props.children])
    }
}

const Heart = () => <span>♡</span>


ReactDOM.render(
    <App />,
    document.getElementById('app')
);


export default App
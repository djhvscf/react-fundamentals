import React from 'react';
import ReactDOM from 'react-dom';
import h from 'react-hyperscript';
import tags from 'hyperscript-helpers';

const {div, h1} = tags(h);

class App extends React.Component {
    render(){
        const style = {border: "1px solid black"};
        let txt = this.props.txt
        return div({style}, [h1([txt])])
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: 'this is the default txt'
}

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
);

export default App
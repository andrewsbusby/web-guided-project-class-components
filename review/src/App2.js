import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Warren",
            age: 33
        }
        this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            name: "Allison",
            age: 12
        });
    }

    render() {
        return(<div>
            <h1>Hello {this.state.name}. Age is {this.state.age}.</h1>
            <button onClick={this.handleClick}>Change the state</button>
        </div>);
    }
}

export default App2;
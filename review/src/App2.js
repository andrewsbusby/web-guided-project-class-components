import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Warren",
            age: 33
        }
    }

    handleClick = () => {
        this.setState({
            name: "Allison",
            age: 12
        });
    }

    render() {
        return(<div>
            <Person/>
            <div>
                <h1>Hello {this.state.name}. Age is {this.state.age}.</h1>
                <h3>{this.state.name} is a fine name for a {this.state.age} year old.</h3>
            </div>
            <button onClick={this.handleClick}>Change the state</button>
        </div>);
    }
}

export default App2;
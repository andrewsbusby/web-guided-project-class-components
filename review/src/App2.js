import React from 'react';

class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Andrew',
            age: 32
        }
    }
    handleClick = () =>{
        this.setState({
            name: 'Busby',
            age: 16
        });
    }
    render() {
        

        return(
            <>
            <div>Hello {this.state.name}. Age is {this.state.age}.</div>
            <button onClick={this.handleClick}>Change the state here!</button>
            </>
        )
    }
}

export default App2;
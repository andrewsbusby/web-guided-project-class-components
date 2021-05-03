import React from 'react';

// const Person = (props)=>  {
//     return(<div>
//         <h1>Hello {props.name}. Age is {props.age}.</h1>
//         <h3>{props.name} is a fine name for a {props.age} year old.</h3>
//     </div>);
// }

class Person extends React.Component {
    render() {
        return(<div>
            <h1>Hello {props.name}. Age is {props.age}.</h1>
            <h3>{props.name} is a fine name for a {props.age} year old.</h3>
        </div>);   
    }
}

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
            <Person name={this.state.name} age={this.state.age}/>
            <button onClick={this.handleClick}>Change the state</button>
        </div>);
    }
}

export default App2;
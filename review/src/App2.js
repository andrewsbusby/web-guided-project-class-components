import React from 'react';

// const Person = (props) =>{
//     return(
//         <div>
//         <h1>Hello {props.name}. Age is {props.age}.</h1>
//         <h3>{props.name} is a fine name for you.</h3>
//         </div>
//     )
// }

class Person extends React.Component {
    render(){
        return( 
                <div>
                    <h1>Hello {this.props.name}. Age is {this.props.age}.</h1>
                    <h3>{this.props.name} is a fine name for you.</h3>
                </div>)
    }
}
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
            <Person name={this.state.name} age={this.state.age} />
            <button onClick={this.handleClick}>Change the state here!</button>
            </>
        )
    }
}

export default App2;
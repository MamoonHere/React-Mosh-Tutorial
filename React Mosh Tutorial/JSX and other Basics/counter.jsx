import React, {Component} from 'react';

// Any JS expression can be written in render return using {}. By expression, i mean they return  value etc.
// JSX expressions are just like normal JS objects. They can be returned and passed to a function and can be assigned to a const variable etc.

class Counter extends Component {
    state = { count: 0 }  // State is an object that will contain any data that this component needs. 

    formatCount() { 
        const {count} = this.state;            // Here I am destructuring the object to get only the count value. 
                                               // if I don't do this, the return statement would have been long as followed:
                                               // return this.state.count ===0 ?  'Zero' : this.state.count
        return count === 0 ? 'Zero' : count    // condition before ?. If state after ?. else statement after :
    }

    render(){  // we need to enclose our html in a single div or <></> because React.CreateElement() expects a single container as parameter.
               // if you don't want to to that because another pointless div will come in the root div container, you can simply use <React.Fragment>
        return (
        <React.Fragment>                        
        <h1>{this.formatCount()}</h1>
        <button>Increment</button>
        </React.Fragment>
        );
    }
}

export default Counter
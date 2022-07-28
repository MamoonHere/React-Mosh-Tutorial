import React, { Component } from 'react';
import Counter from './counter' 

/*

Explanation:

Props are basically attributes of an html element that can be passed on to the child component like value etc.
In child component, you must pass the props to the contructor and then access props.value from there or you can directly 
access in return block of child element. No need of constructor in the case of functional components. 
Props are unidirectional.
Now apart from that, here I opened the <Counter/> to <Counter></Counter>. Now When i add some html between these, they
will get passed to the child component as props.children. Can be used to send dialog boxes and other complex things etc.

*/
class counterParent extends Component {
    state = { 
        counters :
        [
            {id: 0, value: 0},
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 6}
        ] 
     } 
     
    render() { 
        return (
            <>
            {this.state.counters.map(item => <Counter key = {item.id} value = {item.value}>
                <h2>Counter {item.id}</h2>
            </Counter>)}
            </>
        );
    }
}
 
export default counterParent

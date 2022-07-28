import React, { Component } from 'react';
import Counter from './counter' 

/*

Explanation!

Now basically, we have the counter component where counters are being made along with their buttons. And we have the counterParent 
component where the counters are being called and displayed. Now for delete functionality, we must update the state i.e. the array of 
counters in the the state object. We must ensure that THE COMPONENT THAT OWNS THE STATE MUST BE THE ONE MODIFYING IT. Hence, we will 
create the handleDelete function in counterParent. we will pass an onDelete prop containing the reference to this function, to the
child component. In the child component, in the delete button see this --> onClick={() => this.props.onDelete(this.props.counter.id)}

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

    handleDelete = (id) => {
        const counters = this.state.counters.filter(item => item.id !== id);
        this.setState({counters}); 
        console.log("Here"); 
    }
     
    render() { 
        return (
            <>
            {this.state.counters.map(item => <Counter key = {item.id} onDelete = {this.handleDelete} counter = {item}>
                <h2>Counter {item.id}</h2>
            </Counter>)}
            </>
        );
    }
}
 
export default counterParent

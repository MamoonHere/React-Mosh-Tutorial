import React, {Component} from 'react';

// To render lists we will use .map function in the following way. Each <li> must have a unique key so that reactDOM can correctly identify it in case of any change.


class Counter extends Component {
    state = { 
        count: 0, 
        tags: ["tag1", "tag2", "tag3"]
    }  
    conditionalRender()    // We can not use if and else inside the render return method. So we can do it by creating a function like this.
    {
        if (this.state.tags.length === 0)
        {
            return <h1>Empty array</h1>;
        }
        else 
        {
            return this.state.tags.map(item => <li key ={item}>{item}</li>);
        }
    }
    
    // if we want to return something based on a true condition and only a true condition and we don;t want to return something on else, we can use the && method.
    // concept of truthy and falsey in javascript causes this to work.
    render(){   
        return (
        <div>                        
        <ul>
            {this.state.tags.length === 0 && "Add something to the Array"}
            {this.conditionalRender()} 
        </ul>
        </div>
        );
    }
}

export default Counter
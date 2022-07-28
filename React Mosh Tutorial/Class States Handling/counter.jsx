import React, {Component} from 'react';

class Counter extends Component {
    state = { count: 0 }  

    constructor()
    {
        super();          // This must be at the start. Since we are calling contructor of child class. We must call constructor of parent class i.e. here it is Component which is the parent class due to extends.
        this.handleIncrement = this.handleIncrement.bind(this);  // the lhs return a new function and we must set it equal to our function of rhs
                                                                 // if we don't bind our function, the this will not be referiing to our counter object anymore. 
        // Instead of making tis constructor and continuously binding, a better way is to make the handleIncrement() function an arrow function, since  it essentially inherits 'this'.
    }



    formatCount() { 
        const {count} = this.state;            
        return count === 0 ? 'Zero' : count   
    }

    handleIncrement() {    // Note that we pass a reference to this function to the onClick event handler. 
                           // This is precisely why if we access 'this' here, we will get undefined (in strict mode). If the exact object.method was passed we would have been able to get this. 
                           // The solution to this is to bind using the constructor
        
        this.setState({count: this.state.count + 1});   // This is how you update the state in class components.
        /* What is Happening?
        Basically, when this.setState() is called, we are telling react that this state/component is going to change. 
        React will then schedule a call to the render method. Meaning sometime in the future, this method is going to be called.
        Asynchornous call --> the render method will be invoked in the future.
        React will compare the new dom and the old dom and figure out which element was modified. 
        Afterwards, only that element will be updated. rest will be same. */
    }

    badgeColor() {
        let classes = 'badge m-2 badge-';   
        classes += this.state.count === 0 ? "warning" : "primary";  
        console.log(classes);
        return classes;
    }

    render(){   
        return (
        <div>                        
        <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className= 'btn btn-secondary btn-sm'>Increment</button>
        </div>
        );
    }
}

export default Counter
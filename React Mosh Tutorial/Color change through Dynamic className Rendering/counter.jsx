import React, {Component} from 'react';

class Counter extends Component {
    state = { count: 0 }  

    formatCount() { 
        const {count} = this.state;            
        return count === 0 ? 'Zero' : count   
    }

    badgeColor() {
        let classes = 'badge m-2 badge-';   // Recall bootstrap 
        classes += this.state.count === 0 ? "warning" : "primary";  // Think of this part as a function which will return a string
                     // and that string will get appended to our classes. This is why it works. Also use += for strings not classes = classes +
        console.log(classes);
        return classes;
    }

    render(){   
        return (
        <div>                        
        <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button className= 'btn btn-secondary btn-sm'>Increment</button>
        </div>
        );
    }
}

export default Counter
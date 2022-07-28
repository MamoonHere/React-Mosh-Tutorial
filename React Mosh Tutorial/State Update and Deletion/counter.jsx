import React, {Component} from 'react';

class Counter extends Component {
    state = { count: 0 }  

    constructor(props)
    {
        super();           
        this.handleIncrement = this.handleIncrement.bind(this);
        this.state = {count: props.counter.value}
    }

    formatCount() { 
        const {count} = this.state;            
        return count === 0 ? 'Zero' : count   
    }

    handleIncrement() {    
        this.setState({count: this.state.count + 1});   
    }

    badgeColor() {
        let classes = 'badge m-2 badge-';   
        classes += this.state.count === 0 ? "warning" : "primary";  
        return classes;
    }

    render(){ 
        console.log(this.props)
        return (
        <div>   
        {this.props.children}                     
        <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className= 'btn btn-secondary btn-sm'>Increment</button>
        <button className='btn btn-danger m-2' onClick={() => this.props.onDelete(this.props.counter.id)}> Delete </button>
        </div>
        );
    }
}

export default Counter
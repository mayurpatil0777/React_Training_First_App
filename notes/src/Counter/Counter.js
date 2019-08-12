import React, { Component } from 'react';
import {connect} from 'react-redux'

class Counter extends Component {
    state={
        counter: 0
    }

    onIncrement=()=>{
        this.setState({
            counter:this.state.counter + 1
        })
    }
    onDecrement=()=>{
        this.setState({
            counter:this.state.counter - 1
        })
    }
    onAdd=(value)=>{
        this.setState({
            counter:this.state.counter + value
        })
    }
    onSubtract=(value)=>{
        this.setState({
            counter:this.state.counter - value
        })
    }
    render() {
        return (
            <div className="card text-center">
                <div className="card-header">
                    <h2>Counter: {this.props.counter}</h2>
                </div>
                <div className="card-body text-center">
                    <button className="btn btn-dark mr-1" onClick={this.props.onIncrement}>Increment</button>
                    <button className="btn btn-dark mr-1" onClick={this.props.onDecrement}>Decrement</button>
                    <button className="btn btn-dark mr-1" onClick={()=>this.props.onAdd(10)}>Add 10</button>
                    <button className="btn btn-dark mr-1" onClick={()=>this.props.onSubtract(5)}>Subtract 5</button>

                
            </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{

    return {
        counter: state.counter
    }
}
const mapDispatchToProps=(dispatch)=>{

    return {
        onIncrement : ()=>{dispatch({type:"INCREMENT"})},
        onDecrement : ()=>{dispatch({type:"DECREMENT"})},
        onAdd : (val)=>{dispatch({type:"ADD10",add:val})},
        onSubtract : (val)=>{dispatch({type:"SUBTRACT5",subtract:val})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
import React, { Component } from 'react';
import {connect} from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div className="container">
                <h3>Result:</h3>
                <button className="btn btn-dark mr-1" onClick={this.props.result}>Result</button>

                 <ul>
                    {
                        this.props.resultArr.map(res=>{
                        return(
                            <li key={res.id} >{res.value}</li>
                        )
                    })}
                    
                </ul> 
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    
    return {
        resultArr: [...state.resultArr]
    }
}
const mapDispatchToProps=(dispatch)=>{

    return {
        result : ()=>{dispatch({type:"RESULT"})},
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Result);
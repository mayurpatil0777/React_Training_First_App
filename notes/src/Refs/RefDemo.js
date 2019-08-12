import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class RefDemo extends Component {
    constructor(props) {
        super(props);
        console.log("propsssss router",props)
        this.inputTitle = {
            addTitle : React.createRef(),
            addBody : React.createRef()
        }
    }
    
    clickHandler=(e)=>{
        e.preventDefault();
        console.log("reference",this.inputTitle.addTitle.current.value,this.inputTitle.addBody.current.value);
        this.props.history.push({
            pathname : '/',
            state : {
                addTitle: this.inputTitle.addTitle.current.value,
                addBody: this.inputTitle.addBody.current.value
            },
          //  search : "?page_no=99"
        })
        
    }
    render() {
        return (
            <div className="container">
                <form>
                    <label>Title</label>
                    <input type="text" ref={this.inputTitle.addTitle} className="form-control"></input>
                    <label>Body</label>
                    <input type="text" ref={this.inputTitle.addBody} className="form-control"></input>
                    <button className="btn btn-dark btn-md mt-2"
                        onClick={(e)=>{this.clickHandler(e)}}>Save</button>
                </form>
                
            </div>
        );
    }
}

export default RefDemo;
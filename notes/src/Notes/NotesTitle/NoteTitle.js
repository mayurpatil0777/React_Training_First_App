import React from 'react';

const noteTitle = (props) =>{

    const handleClick=()=>{
        props.onClickHandler();
    }
    return(
        <div className="col-sm-6 col-md-6">
        <div className="card myClass" onClick={()=>handleClick()}>
            <div className="card-header ">{props.title}</div>
        </div>
    </div>
    )
}

export default noteTitle
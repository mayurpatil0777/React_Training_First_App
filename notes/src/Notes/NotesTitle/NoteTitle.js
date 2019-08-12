import React from 'react';
import PropTypes from 'prop-types';
import {MyContext} from '../../App'

const noteTitle = (props) =>{

    const handleClick=()=>{
        props.onClickHandler();
    }
    return(
        <div className="col-sm-6 col-md-6 pb-4">
        <div className="card myClass" onClick={()=>handleClick()}>
            <div className="card-header">{props.title.toUpperCase()}</div>
            {/* <div style={'color':'blue','fontSize':'24px'}>23</div> */}
            <div className=''>{props.name}</div>
            {/* <MyContext.Consumer> 
                {value => value.fullName}
              </MyContext.Consumer> */}
        </div>
    </div>
    )
}
noteTitle.propTypes ={
    title: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func,
    
}
noteTitle.defaultProps={
    name: 'Click me for description'
}

export default noteTitle
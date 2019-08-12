import React from 'react';

const editNote= (props) => {
  //      let {body,note}=props
    
return(
<div>
    <div className="row mt-3">
        <div className="col-8 offset-2 border p-4">
            <form>
                <h3 className="text-center" style={{'background':'#ccc'}}>Title:<span className="pl-2">{props.note.title.toUpperCase()}</span></h3>
                <input type="text" className="form-control" placeholder="Edit the description" value={props.note.body} onChange={(e)=>{props.onChangeHandler(e)}}/>
                <button className="btn btn-success form-control mt-2" onClick={()=>{props.saveHandler()}}>Save</button>
            </form>
        </div>
    </div>
</div>
)
}

export default editNote
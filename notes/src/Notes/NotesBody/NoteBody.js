import React from 'react';

const noteBody = (props) => {
    console.log("props",props)
    
    return (

        <div className="row ">
            <div className="col-sm-12 col-md-12">
                <div className="card p-3">

                    <div className="card-body col-12 ">{props.note.body}</div>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-primary form-control" onClick={() => props.onEditHandler()}>Edit</button>
                        </div>
                        <div className="col-6" onClick={() => { props.deleteHandler()}}>
                            <button className="btn btn-danger form-control">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default noteBody
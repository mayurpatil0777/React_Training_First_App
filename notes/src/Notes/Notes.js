import React, { Component } from 'react';
import './notes.css'
import NoteTitle from './NotesTitle/NoteTitle'

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state={
            showBody:false,
            selectedID:null,
            notes : [{ id:1,title: "grocery", body: "Buy the pulses" },
            { id:2,title: "domestic", body: "Domestic stuffs" },
            { id:3,title: "study", body: "Informative books" },
            { id:4,title: "sports", body: "Sportsman spirit is important" }]
        }
    }
    

    onClickHandler = (e,showBody,id) => {
        console.log("hi",showBody,id)
        this.setState({
            showBody:true,
            selectedID:id,
            
        })
    }
    
    render() {
        let {showBody,notes,selectedID}=this.state;
        let body = null;
        if (showBody && selectedID!==null) {
            const duplicateNotes =[...notes];
            const note = duplicateNotes.find(note=>{
                return note.id === selectedID
            });
            body = (
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="card">
                            <div className="card-body">{note.body}</div>
                        </div>
                    </div>
                </div>
            )
        }
        let notesObj = notes.map(nt=>(
            <NoteTitle title={nt.title} key={nt.id} id={nt.id} onClickHandler={(e)=>{this.onClickHandler(e,true,nt.id)}}/>

            ))
        return (
            
            <div className="container">
                <div className="row">
                    {notesObj}
                </div>
                <br />

{body}
            </div>
        );
    }
}

export default Notes;
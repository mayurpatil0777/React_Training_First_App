import React, { Component } from 'react';
import './notes.css'
import NoteTitle from './NotesTitle/NoteTitle'
import NoteBody from './NotesBody/NoteBody'
import EditNote from './NotesBody/EditNoteBody'
import axios from 'axios'

class Notes extends Component {
    constructor(props) {
        super(props);
        console.log("I am a constructor",props)
        this.state = {
            showBody: false,
            selectedID: null,
            editNoteID: null,
            notes: []
        }
    }

    componentWillUnmount() {
        console.log("I am a comp WILL UNMOUNT")
    }
    componentDidUpdate() {
        console.log("I am a comp DID UPDATE")
    }
    componentDidMount() {
        axios.get("model/notes-data.json")
            .then(response => {
                if (this.props.location.state){
                    const note ={
                        id: new Date(),
                        title: this.props.location.state.addTitle,
                        body: this.props.location.state.addBody

                    };
                    return [...response.data['notesData'],note]
                }
                    return [...response.data['notesData']]
            }).then(updatedNote =>{
                this.setState({
                    notes: updatedNote
                })
            }).catch(err => console.log("error"));

        console.log("I am a comp DID MOUNT")
    }
    /*  static getDerivedStateFromProps() {
         console.log("I am a derived state from props")
     } */
    getSnapshotBeforUpdate() {
        console.log("I am a GET SNAPSHOT")
    }

    onClickHandler = (e, showBody, id) => {
        console.log("hi", showBody, id)
        this.setState({
            showBody: true,
            selectedID: id,

        })
    }
    deleteHandler = (id) => {
        console.log("delete", id);
        let duplicateNotes = [...this.state.notes];
        const position = duplicateNotes.findIndex(note => note.id === id);
        duplicateNotes.splice(position, 1)
        this.setState({
            notes: duplicateNotes,
            showBody: false
        })


    }
    editHandler = (id) => {
        console.log("edit", id)
        this.setState({
            editNoteID: id
        })
    }

    changeHandler = (e) => {
        console.log(e.target.value);
        const duplicateNotes = [...this.state.notes];
        const position = duplicateNotes.findIndex(note => note.id === this.state.editNoteID);
        const note = duplicateNotes.find(note => note.id === this.state.editNoteID);
        duplicateNotes.splice(position, 1);
        note.body = e.target.value;
        duplicateNotes.push(note);
        this.setState({
            notes: duplicateNotes
        })


    }

    saveHandler = () => {
         this.setState({
             editNoteID: null
         })
    }
    render() {
        console.log("I am a render function")
        let { showBody, notes, selectedID, showEditBody } = this.state;
        let body =null;
        let editNote = null;
        console.log(this.state);
        if (this.state.editNoteID !== null) {
            const duplicateNotes = [...this.state.notes];
            console.log("Inside Edit===================")
            const note = duplicateNotes.find(note => {
                return note.id === this.state.editNoteID;
            })
            editNote = (
                <EditNote
                    note={note}
                    onChangeHandler={(e) => { this.changeHandler(e) }}
                    saveHandler={() => { this.saveHandler() }}></EditNote>
            )
        }


        if (showBody && selectedID !== null) {
            const duplicateNotes = [...notes];
            const note = duplicateNotes.find(note => {
                return note.id === selectedID
            });

            body = (
                <NoteBody note={note}
                    deleteHandler={(id) => this.deleteHandler(note.id)}
                    onEditHandler={() => this.editHandler(note.id)}></NoteBody>
            )
        }
        let notesObj = notes.map(nt => (
            <NoteTitle
                title={nt.title}
                key={nt.id} id={nt.id} onClickHandler={(e) => { this.onClickHandler(e, true, nt.id) }} />

        ))

        return (

            <div className="container">
                <div className="row">
                    {notesObj}
                </div>
                <br />
                <h3>Description</h3>

                {body}
                {editNote}
            </div>
        );
    }
}

export default Notes;
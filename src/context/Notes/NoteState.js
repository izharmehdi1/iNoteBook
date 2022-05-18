import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host ="http://localhost:5000"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

// Get all Notes
const getNotes = async ( ) => {
  //todo api call
  // API call
  
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyZjU4ZTVjMzY5MDVlZjk2YjkwMTI2In0sImlhdCI6MTY0NzYwNzQxN30.i5wK_Cyjk2pVdr_12fC6luInIUcpJbX_9rM9Sag-3oA"
    },
  });
  const json = await response.json()
  console.log(json)
  setNotes(json)
};


  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyZjU4ZTVjMzY5MDVlZjk2YjkwMTI2In0sImlhdCI6MTY0NzYwNzQxN30.i5wK_Cyjk2pVdr_12fC6luInIUcpJbX_9rM9Sag-3oA"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }



  //Delete a Note
  const deleteNote = async(id) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyZjU4ZTVjMzY5MDVlZjk2YjkwMTI2In0sImlhdCI6MTY0NzYwNzQxN30.i5wK_Cyjk2pVdr_12fC6luInIUcpJbX_9rM9Sag-3oA"
      },
      
    });
    const json = response.json();
    console.log(json)
    console.log("deleting the note using id : " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyZjU4ZTVjMzY5MDVlZjk2YjkwMTI2In0sImlhdCI6MTY0NzYwNzQxN30.i5wK_Cyjk2pVdr_12fC6luInIUcpJbX_9rM9Sag-3oA"
      },
      body: JSON.stringify(title,description,tag),
    });
    // const json = response.json();

    //login to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote,getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

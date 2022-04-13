import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6234922631fca04f112796ce",
      user: "622f58e5c36905ef96b90126",
      title: "My Title",
      description: "Please Wake me Up Early",
      tag: "personal",
      date: "2022-03-18T14:07:34.043Z",
      __v: 0,
    },
    {
      _id: "623498495d3eb731cbd64d7c",
      user: "622f58e5c36905ef96b90126",
      title: "New Note Updated",
      description: "New Note Description Updated",
      tag: "general",
      date: "2022-03-18T14:33:45.100Z",
      __v: 0,
    },
    {
      _id: "6234922631fca04f112796ce",
      user: "622f58e5c36905ef96b90126",
      title: "My Title",
      description: "Please Wake me Up Early",
      tag: "personal",
      date: "2022-03-18T14:07:34.043Z",
      __v: 0,
    },
    {
      _id: "623498495d3eb731cbd64d7c",
      user: "622f58e5c36905ef96b90126",
      title: "New Note Updated",
      description: "New Note Description Updated",
      tag: "general",
      date: "2022-03-18T14:33:45.100Z",
      __v: 0,
    },
    {
      _id: "6234922631fca04f112796ce",
      user: "622f58e5c36905ef96b90126",
      title: "My Title",
      description: "Please Wake me Up Early",
      tag: "personal",
      date: "2022-03-18T14:07:34.043Z",
      __v: 0,
    },
    {
      _id: "623498495d3eb731cbd64d7c",
      user: "622f58e5c36905ef96b90126",
      title: "New Note Updated",
      description: "New Note Description Updated",
      tag: "general",
      date: "2022-03-18T14:33:45.100Z",
      __v: 0,
    },
    {
      _id: "6234922631fca04f112796ce",
      user: "622f58e5c36905ef96b90126",
      title: "My Title",
      description: "Please Wake me Up Early",
      tag: "personal",
      date: "2022-03-18T14:07:34.043Z",
      __v: 0,
    },
    {
      _id: "6234922631fca04f112796ce",
      user: "622f58e5c36905ef96b90126",
      title: "My Title",
      description: "Please Wake me Up Early",
      tag: "personal",
      date: "2022-03-18T14:07:34.043Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

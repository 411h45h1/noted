import React, { useEffect, useState, useContext } from "react";
import { Grid, Segment, Card, Label } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const NoteItem = () => {
  const state = useContext(AppContext);
  const { userData, notes } = state;

  return (
    <Segment
      className="NoteInput"
      inverted
      style={{
        width: "100%",
        maxHeight: "65vh",
        overflowY: "scroll",
      }}
    >
      {notes.map((i, k) => {
        return (
          <Segment key={k}>
            {i.date && <Label attached="top left" content={i.date} />}
            <Card
              link
              header={i.title}
              meta={i.importance}
              description={i.content}
            />
          </Segment>
        );
      })}
    </Segment>
  );
};

export default NoteItem;

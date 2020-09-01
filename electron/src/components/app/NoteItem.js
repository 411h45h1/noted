import React, { useContext } from "react";
import { Grid, Segment, Card, Label } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const NoteItem = () => {
  const state = useContext(AppContext);
  const { uid, notes, removeNote } = state;

  return (
    notes &&
    notes.map((i, k) => (
      <Grid.Column key={k}>
        <Segment
          raised
          style={{
            backgroundColor: "#C9BF77",
          }}
        >
          {i.importance && (
            <Label
              color={
                i.importance === "Lv.1"
                  ? "grey"
                  : i.importance === "Lv.2"
                  ? "blue"
                  : i.importance === "Lv.3"
                  ? "orange"
                  : i.importance === "Lv.4"
                  ? "red"
                  : null
              }
              attached="top right"
              content={i.importance}
            />
          )}
          <Label
            as="a"
            size="tiny"
            attached="top left"
            content="❌"
            onClick={() => removeNote(uid, i.nid)}
            style={{
              backgroundColor: "#C9BF77",
            }}
          />
          <Label
            size="tiny"
            color="black"
            attached="bottom left"
            content={i.date}
          />

          <Card
            header={i.title}
            description={i.content}
            style={{
              marginTop: 20,
              marginBottom: 30,
              backgroundColor: "#F2F2EF",
            }}
          />
        </Segment>
      </Grid.Column>
    ))
  );
};

export default NoteItem;

import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import NoteItem from "../app/NoteItem";

export const NOTE_SCROLL_MOBILE = ({ col }) => {
  return (
    <Segment
      fluid
      inverted
      style={{
        marginTop: 10,
        marginBottom: 20,
        minHeight: "20vh",
        maxHeight: "25vh",
        overflowY: "scroll",
        backgroundColor: "#FDD543",
      }}
    >
      <Grid columns={col}>
        <NoteItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_TABLET = ({ col }) => {
  return (
    <Segment
      fluid
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#FDD543",
      }}
    >
      <Grid columns={col}>
        <NoteItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_COMPUTER = ({ col }) => {
  return (
    <Segment
      fluid
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#FDD543",
      }}
    >
      <Grid columns={col}>
        <NoteItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_LARGESCREEN = ({ col }) => {
  return (
    <Segment
      fluid
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#FDD543",
      }}
    >
      <Grid columns={col}>
        <NoteItem />
      </Grid>
    </Segment>
  );
};

export const NOTE_SCROLL_GREATER = ({ col }) => {
  return (
    <Segment
      fluid
      inverted
      style={{
        maxHeight: "65vh",
        overflowY: "scroll",
        backgroundColor: "#FDD543",
      }}
    >
      <Grid columns={col}>
        <NoteItem />
      </Grid>
    </Segment>
  );
};

import React, { useContext } from "react";
import { Media } from "../core/media";
import { Grid, Segment, Form } from "semantic-ui-react";
import AppContext from "../context/appContext";
import NoteItem from "./app/NoteItem";
import { ResponsiveInput } from "./responsive";

const MainEvent = () => {
  const state = useContext(AppContext);
  const { notes } = state;

  return (
    <div>
      <Grid>
        <p id="title">Noted</p>
      </Grid>
      <Grid>
        <Grid.Row columns="equal">
          {/* @ mobile */}
          <Grid.Column as={Media} at="mobile" width={16}>
            <ResponsiveInput />
          </Grid.Column>

          <Grid.Column as={Media} at="mobile" width={16}>
            {notes && (
              <Segment
                fluid
                inverted
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  maxHeight: "35vh",
                  overflowY: "scroll",
                  backgroundColor: "#FDD543",
                }}
              >
                <NoteItem />
              </Segment>
            )}
          </Grid.Column>

          {/* @ tablet */}

          <Grid.Column as={Media} at="tablet" width={9}>
            <ResponsiveInput />
          </Grid.Column>

          <Grid.Column as={Media} at="tablet">
            {notes && (
              <Segment
                fluid
                inverted
                style={{
                  maxHeight: "65vh",
                  overflowY: "scroll",
                  backgroundColor: "#FDD543",
                }}
              >
                <NoteItem />
              </Segment>
            )}
          </Grid.Column>

          {/* @ greater */}

          <Grid.Column as={Media} greaterThan="tablet" width={8}>
            <ResponsiveInput />
          </Grid.Column>

          <Grid.Column as={Media} greaterThan="tablet">
            {notes && (
              <Segment
                fluid
                inverted
                style={{
                  maxHeight: "65vh",
                  overflowY: "scroll",
                  backgroundColor: "#FDD543",
                }}
              >
                <NoteItem />
              </Segment>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MainEvent;

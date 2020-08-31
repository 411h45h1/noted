import React, { useContext } from "react";
import { Media } from "../core/media";
import { Grid, Segment } from "semantic-ui-react";
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
            <ResponsiveInput contentRows={1} />
          </Grid.Column>

          <Grid.Column as={Media} at="mobile" width={16}>
            {notes && (
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
                <Grid columns={1}>
                  <NoteItem />
                </Grid>{" "}
              </Segment>
            )}
          </Grid.Column>

          {/* @ tablet */}

          <Grid.Column as={Media} at="tablet" width={9}>
            <ResponsiveInput contentRows={3} />
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
                <Grid columns={1}>
                  <NoteItem />
                </Grid>{" "}
              </Segment>
            )}
          </Grid.Column>

          {/* @ computer */}

          <Grid.Column as={Media} at="computer" width={9}>
            <ResponsiveInput contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="computer">
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
                <Grid columns={2}>
                  <NoteItem />
                </Grid>{" "}
              </Segment>
            )}
          </Grid.Column>

          {/* @ largeScreen */}

          <Grid.Column as={Media} at="largeScreen" width={9}>
            <ResponsiveInput contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="largeScreen">
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
                <Grid columns={3}>
                  <NoteItem />
                </Grid>{" "}
              </Segment>
            )}
          </Grid.Column>

          {/* @ greater */}

          <Grid.Column as={Media} greaterThan="largeScreen" width={7}>
            <ResponsiveInput contentRows={5} />
          </Grid.Column>

          <Grid.Column as={Media} greaterThan="largeScreen">
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
                <Grid columns={4}>
                  <NoteItem />
                </Grid>
              </Segment>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MainEvent;

import React from "react";
import { Media } from "../core/media";
import { Grid, Segment } from "semantic-ui-react";
import NoteItem from "./app/NoteItem";
import { ResponsiveInput } from "./responsive";

const MainEvent = () => {
  return (
    <div>
      <Grid>
        <p id="title">Noted</p>
      </Grid>
      <Grid>
        <Grid.Row>
          {/* @ mobile */}
          <Grid.Column as={Media} at="mobile" width={16}>
            <ResponsiveInput size={"large"} contentRows={1} />
          </Grid.Column>

          <Grid.Column as={Media} at="mobile" width={16}>
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
              </Grid>
            </Segment>
          </Grid.Column>

          {/* @ tablet */}

          <Grid.Column as={Media} at="tablet" width={9}>
            <ResponsiveInput size={"large"} contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="tablet" width={7}>
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
              </Grid>
            </Segment>
          </Grid.Column>

          {/* @ computer */}

          <Grid.Column as={Media} at="computer" width={7}>
            <ResponsiveInput size={"large"} contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="computer" width={9}>
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
              </Grid>
            </Segment>
          </Grid.Column>

          {/* @ largeScreen */}

          <Grid.Column as={Media} at="largeScreen" width={6}>
            <ResponsiveInput size={"big"} contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="largeScreen" width={9}>
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
              </Grid>
            </Segment>
          </Grid.Column>

          {/* @ greater */}

          <Grid.Column as={Media} greaterThan="largeScreen" width={6}>
            <ResponsiveInput size={"big"} contentRows={5} />
          </Grid.Column>

          <Grid.Column as={Media} greaterThan="largeScreen" width={10}>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MainEvent;

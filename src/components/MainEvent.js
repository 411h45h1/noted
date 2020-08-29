import React from "react";
import { Grid, Header } from "semantic-ui-react";
import LogoutButton from "./app/LogoutButton";

const MainEvent = () => {
  return (
    <div>
      <Grid>
        <Grid.Column floated="left" width={5}>
          <Header as="h2" content="Noted" />
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <LogoutButton />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MainEvent;

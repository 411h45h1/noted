import React, { useState, useContext } from "react";
import { Grid, Segment, Form } from "semantic-ui-react";
import { addNote } from "../api/notes";
import AppContext from "../context/appContext";
import NoteItem from "./app/NoteItem";

const MainEvent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [radioValue, setRadioValue] = useState(null);
  const state = useContext(AppContext);
  const { uid, loadNotes, notes } = state;

  let importance = radioValue;

  const handleSubmit = async () =>
    await addNote(uid, title, content, importance).then(() => loadNotes());

  return (
    <div>
      <Grid>
        <p id="title">Noted</p>
      </Grid>
      <Grid>
        <Grid.Column width={10}>
          <Segment raised style={{ backgroundColor: "#DDBA3B" }}>
            <Form>
              <Form.Input
                label="Title"
                value={title}
                placeholder="Title"
                onChange={(e, { value }) => setTitle(value)}
              />
              <Form.Group inline>
                <label>Level of importance</label>
                <Form.Radio
                  label="Lv.1"
                  value="Lv.1"
                  checked={radioValue === "Lv.1"}
                  onChange={(e, { value }) => setRadioValue(value)}
                />
                <Form.Radio
                  label="Lv.2"
                  value="Lv.2"
                  checked={radioValue === "Lv.2"}
                  onChange={(e, { value }) => setRadioValue(value)}
                />
                <Form.Radio
                  label="Lv.3"
                  value="Lv.3"
                  checked={radioValue === "Lv.3"}
                  onChange={(e, { value }) => setRadioValue(value)}
                />
                <Form.Radio
                  label="Lv.4"
                  value="Lv.4"
                  checked={radioValue === "Lv.4"}
                  onChange={(e, { value }) => setRadioValue(value)}
                />
              </Form.Group>
              <Form.TextArea
                label="Content"
                value={content}
                placeholder="Enter note data here"
                onChange={(e, { value }) => setContent(value)}
              />
              <Form.Button color="black" onClick={() => handleSubmit()}>
                Submit
              </Form.Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>{notes && <NoteItem />}</Grid.Column>
      </Grid>
    </div>
  );
};

export default MainEvent;

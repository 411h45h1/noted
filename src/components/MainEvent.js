import React, { useEffect, useState, useContext } from "react";
import { Grid, Segment, Form } from "semantic-ui-react";
import { addNote, getNotes } from "../api/notes";
import AppContext from "../context/appContext";

const MainEvent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [radioValue, setRadioValue] = useState(null);
  const state = useContext(AppContext);

  const { userData } = state;

  let importance = radioValue;
  let uid = userData.uid;

  const handleSubmit = async () =>
    await addNote(uid, title, content, importance);

  useEffect(() => {
    getNotes(uid).then((res) => console.log(res));
  }, [uid]);

  return (
    <div>
      <Grid>
        <p id="title">Noted</p>
      </Grid>
      <Grid>
        <Grid.Column width={10}>
          <Segment>
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
              <Form.Button onClick={() => handleSubmit()}>Submit</Form.Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment className="NoteInput"></Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MainEvent;

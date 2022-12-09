import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { DropDownSection } from './DropdownSection';


export default function NotificationForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [screen, setScreen] = useState("");
  const [titleErr, setTitleErr] = useState<string[]>([]);
  const [bodyErr, setBodyErr] = useState<string[]>([]);
  const [screenErr, setScreenErr] = useState<string[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let title_err = "Title can not be empty."
    let body_err = "Body can not be empty."
    let screen_err = "Select a screen to take the user to."
    let errCount = []
    if (title === "" && !titleErr.includes(title_err) ) {
      errCount.push("a")
      setTitleErr([...titleErr, title_err])
    } else if (title !== "") {
      setTitleErr([])
    }

    if (body === "" && !bodyErr.includes(body_err) ) {
      errCount.push("a")
      setBodyErr([...bodyErr, body_err])
    } else if (body !== "") {
      setBodyErr([])
    }
    if (screen === "" && !screenErr.includes(screen_err) ) {
      errCount.push("a")
      setScreenErr([...screenErr, screen_err])
    } else if (screen !== ""){
      setScreenErr([])
    }
    if (errCount.length > 0 || titleErr.length > 0 || bodyErr.length > 0 || screenErr.length > 0) {
      return
    }

    // TODO: Call firebase funciton here . 

  };

  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const handleBody = (event: any) => {
    setBody(event.target.value);
  };

  const dropDownItems = [
    {
      label: "Home Screen",
      value: "homescreen",
    },

    {
      label: "Profile Screen",
      value: "profilescreen",
    },

    {
      label: "Chat Screen",
      value: "chatscreen",
    },
  ]

  return (
    <form className="form" >
      <Container className="mb-3 form-group">
        <label> Notification title</label>
        <input
          id="notificationTitle"
          name="notificationTitle"
          placeholder="What's your notification title"
          value={title}
          onChange={handleTitle}
          className={titleErr.length > 0 ? "form-control is-invalid" : "form-control"}
        />
     {
          titleErr.length > 0 ?
            <div className="invalid-feedback">
              {titleErr[0]}
            </div>
            :
            null
        }

      </Container>

      <Container className="mb-3 form-group">
        <label> Notification body</label>
        <input
          id="notificationBody"
          name="notificationBody"
          placeholder="What's your notification message"
          className={bodyErr.length > 0 ? "form-control is-invalid" : "form-control"}
          value={body}
          onChange={handleBody}
        />
     {
          bodyErr.length > 0 ?
            <div className="invalid-feedback">
              {bodyErr[0]}
            </div>
            :
            null
        }
         </Container>

      <Container className="mb-3 form-group">
        <DropDownSection
          placeHolder='Select a screen to go to  '
          dropDownItems={dropDownItems}
          setItem={setScreen}
          selectedDropdown={screen}
        />
        {
          screenErr.length > 0 ?
            <div className="invalid-feedback">
              {/* {screenErr[0]} */}
              hey
            </div>
            :
            null
        }
      </Container>

      <Container className="mb-3">
        <button className="btn btn-success" type="submit" onClick={handleSubmit}>Submit</button>
      </Container>

    </form>
  );
}

import React, { useState } from "react";
import { Fade } from "react-reveal";

import Button from "@mui/material/Button";
export default function Right() {
  // const [userName, setuserName] = useState(false);
  // const [userEmail, setuserEmail] = useState(false);
  // const [userPhone, setuserPhone] = useState(false);
  // const [userMessage, setuserMessage] = useState(false);
  const [errorState, setErrorState] = useState({
    userName: false,
    userEmail: false,
    userPhone: false,
    userMessage: false,
  });
  const [userData, setUserData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userMessage: "",
  });

  const inputEventHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    if (String(e.target.value).length > 0) {
      console.log("goooooooddddddddd");
      setErrorState({ ...errorState, [e.target.name]: false });
    } else {
      console.log("no..");

      setErrorState({ ...errorState, [e.target.name]: true });
    }
    // console.log("name", e.target.name, "value", e.target.value);
    // console.log("errorstate...", errorState);
  };

  function handleSubmit() {
    // console.log("entered data...", userData);

    // if (userData.userName.length <= 0) {
    //   // setuserName(true);
    //   setErrorState({ ...errorState, userName: true });
    //   // console.log("name");
    // } else {
    //   // setuserName(false);
    //   setErrorState({ ...errorState, userName: false });
    // }
    // if (userData.userEmail.length <= 0) {
    //   // setuserEmail(true);
    //   setErrorState({ ...errorState, userEmail: true });

    //   // console.log("email");
    // } else {
    //   // setuserEmail(false);
    //   setErrorState({ ...errorState, userEmail: true });
    // }
    // if (userData.userPhone.length <= 0) {
    //   // setuserPhone(true);
    //   setErrorState({ ...errorState, userPhone: true });

    //   // console.log("phone");
    // } else {
    //   // setuserPhone(false);
    //   setErrorState({ ...errorState, userPhone: false });
    // }
    // if (userData.userMessage.length <= 0) {
    //   // setuserMessage(true);
    //   setErrorState({ ...errorState, userMessage: true });

    //   // console.log("message");
    // } else {
    //   // setuserMessage(false);
    //   setErrorState({ ...errorState, userMessage: false });
    // }
    // console.log("need action");

    if (
      errorState.userName &&
      errorState.userEmail &&
      errorState.userPhone &&
      errorState.userMessage
    ) {
      // if (userData.userName.length <= 0) {
      //   setuserName(true);
      //   setErrorState({ ...errorState, userName: true });
      //   // console.log("name");
      // } else {
      //   setuserName(false);
      //   setErrorState({ ...errorState, userName: false });
      // }
      // if (userData.userEmail.length <= 0) {
      //   setuserEmail(true);
      //   setErrorState({ ...errorState, userEmail: true });

      //   // console.log("email");
      // } else {
      //   setuserEmail(false);
      //   setErrorState({ ...errorState, userEmail: true });
      // }
      // if (userData.userPhone.length <= 0) {
      //   setuserPhone(true);
      //   setErrorState({ ...errorState, userPhone: true });

      //   // console.log("phone");
      // } else {
      //   setuserPhone(false);
      //   setErrorState({ ...errorState, userPhone: false });
      // }
      // if (userData.userMessage.length <= 0) {
      //   setuserMessage(true);
      //   setErrorState({ ...errorState, userMessage: true });

      //   // console.log("message");
      // } else {
      //   setuserMessage(false);
      //   setErrorState({ ...errorState, userMessage: false });
      // }
      // console.log("need action");

      // console.log(
      //   "separate......",
      //   "name",
      //   userName,
      //   "email",
      //   userEmail,
      //   "phone",
      //   userPhone,
      //   "message",
      //   userMessage
      // );
      console.log("good to go......");
    } else {
      setErrorState({
        userName: true,
        userEmail: true,
        userPhone: true,
        userMessage: true,
      });

      // console.log(
      //   "need action.....",
      //   "name",
      //   errorState.userName,
      //   "email",
      //   errorState.userEmail,
      //   "phone",
      //   errorState.userPhone,
      //   "message",
      //   errorState.userMessage
      // );
    }
  }

  // console.log(
  //   "name",
  //   userName,
  //   "email",
  //   userEmail,
  //   "phone",
  //   userPhone,
  //   "message",
  //   userMessage
  // );

  return (
    <>
      <form>
        <div className="p-5 row">
          <div>
            <div className="mb-2">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="nameInput"
                placeholder="xyz"
                required
                name="userName"
                onChange={(e) => {
                  inputEventHandler(e);
                }}
                className="form-control border-2"
                style={
                  errorState.userName
                    ? { borderColor: "red" }
                    : { borderColor: "grey" }
                }
              />
            </div>
            <div className="mb-2">
              <label htmlFor="mailInput" className="form-label">
                Mail ID
              </label>
              <input
                type="text"
                // className="form-control"
                id="mailInput"
                placeholder="abc@example.com"
                required
                name="userEmail"
                onChange={(e) => {
                  inputEventHandler(e);
                }}
                className="form-control border-2"
                style={
                  errorState.userEmail
                    ? { borderColor: "red" }
                    : { borderColor: "grey" }
                }
              />
            </div>

            <div className="mb-2">
              <label htmlFor="numInput" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                // className="form-control"
                id="numInput"
                placeholder="0000000000"
                required
                name="userPhone"
                onChange={(e) => {
                  inputEventHandler(e);
                }}
                className="form-control border-2"
                style={
                  errorState.userPhone
                    ? { borderColor: "red" }
                    : { borderColor: "grey" }
                }
              />
            </div>

            <div className="mb-2">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                // className="form-control"
                id="messageInput"
                rows={3}
                placeholder="Hi my name is xyz!"
                required
                name="userMessage"
                onChange={(e) => {
                  inputEventHandler(e);
                }}
                className="form-control border-2"
                style={
                  errorState.userMessage
                    ? { borderColor: "red" }
                    : { borderColor: "grey" }
                }
              />
            </div>
          </div>
          <div className="p-2"></div>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                handleSubmit();
              }}
              disabled={
                !userData.userName ||
                !userData.userEmail ||
                !userData.userPhone ||
                !userData.userMessage
              }
            >
              Send :)
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

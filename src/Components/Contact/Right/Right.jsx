// import React, { useState } from "react";
// import { Fade } from "react-reveal";

// import Button from "@mui/material/Button";
// export default function Right() {
//   // const [userName, setuserName] = useState(false);
//   // const [userEmail, setuserEmail] = useState(false);
//   // const [userPhone, setuserPhone] = useState(false);
//   // const [userMessage, setuserMessage] = useState(false);
//   const [errorState, setErrorState] = useState({
//     userName: false,
//     userEmail: false,
//     userPhone: false,
//     userMessage: false,
//   });
//   const [userData, setUserData] = useState({
//     userName: "",
//     userEmail: "",
//     userPhone: "",
//     userMessage: "",
//   });

//   const inputEventHandler = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//     if (String(e.target.value).length > 0) {
//       console.log("goooooooddddddddd");
//       setErrorState({ ...errorState, [e.target.name]: false });
//     } else {
//       console.log("no..");

//       setErrorState({ ...errorState, [e.target.name]: true });
//     }
//     // console.log("name", e.target.name, "value", e.target.value);
//     // console.log("errorstate...", errorState);
//   };

//   function handleSubmit() {
//     // console.log("entered data...", userData);

//     // if (userData.userName.length <= 0) {
//     //   // setuserName(true);
//     //   setErrorState({ ...errorState, userName: true });
//     //   // console.log("name");
//     // } else {
//     //   // setuserName(false);
//     //   setErrorState({ ...errorState, userName: false });
//     // }
//     // if (userData.userEmail.length <= 0) {
//     //   // setuserEmail(true);
//     //   setErrorState({ ...errorState, userEmail: true });

//     //   // console.log("email");
//     // } else {
//     //   // setuserEmail(false);
//     //   setErrorState({ ...errorState, userEmail: true });
//     // }
//     // if (userData.userPhone.length <= 0) {
//     //   // setuserPhone(true);
//     //   setErrorState({ ...errorState, userPhone: true });

//     //   // console.log("phone");
//     // } else {
//     //   // setuserPhone(false);
//     //   setErrorState({ ...errorState, userPhone: false });
//     // }
//     // if (userData.userMessage.length <= 0) {
//     //   // setuserMessage(true);
//     //   setErrorState({ ...errorState, userMessage: true });

//     //   // console.log("message");
//     // } else {
//     //   // setuserMessage(false);
//     //   setErrorState({ ...errorState, userMessage: false });
//     // }
//     // console.log("need action");

//     if (
//       errorState.userName &&
//       errorState.userEmail &&
//       errorState.userPhone &&
//       errorState.userMessage
//     ) {
//       // if (userData.userName.length <= 0) {
//       //   setuserName(true);
//       //   setErrorState({ ...errorState, userName: true });
//       //   // console.log("name");
//       // } else {
//       //   setuserName(false);
//       //   setErrorState({ ...errorState, userName: false });
//       // }
//       // if (userData.userEmail.length <= 0) {
//       //   setuserEmail(true);
//       //   setErrorState({ ...errorState, userEmail: true });

//       //   // console.log("email");
//       // } else {
//       //   setuserEmail(false);
//       //   setErrorState({ ...errorState, userEmail: true });
//       // }
//       // if (userData.userPhone.length <= 0) {
//       //   setuserPhone(true);
//       //   setErrorState({ ...errorState, userPhone: true });

//       //   // console.log("phone");
//       // } else {
//       //   setuserPhone(false);
//       //   setErrorState({ ...errorState, userPhone: false });
//       // }
//       // if (userData.userMessage.length <= 0) {
//       //   setuserMessage(true);
//       //   setErrorState({ ...errorState, userMessage: true });

//       //   // console.log("message");
//       // } else {
//       //   setuserMessage(false);
//       //   setErrorState({ ...errorState, userMessage: false });
//       // }
//       // console.log("need action");

//       // console.log(
//       //   "separate......",
//       //   "name",
//       //   userName,
//       //   "email",
//       //   userEmail,
//       //   "phone",
//       //   userPhone,
//       //   "message",
//       //   userMessage
//       // );
//       console.log("good to go......");
//     } else {
//       setErrorState({
//         userName: true,
//         userEmail: true,
//         userPhone: true,
//         userMessage: true,
//       });

//       // console.log(
//       //   "need action.....",
//       //   "name",
//       //   errorState.userName,
//       //   "email",
//       //   errorState.userEmail,
//       //   "phone",
//       //   errorState.userPhone,
//       //   "message",
//       //   errorState.userMessage
//       // );
//     }
//   }

//   // console.log(
//   //   "name",
//   //   userName,
//   //   "email",
//   //   userEmail,
//   //   "phone",
//   //   userPhone,
//   //   "message",
//   //   userMessage
//   // );

//   return (
//     <>
//       <form>
//         <div className="p-5 row">
//           <div>
//             <div className="mb-2">
//               <label htmlFor="nameInput" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="nameInput"
//                 placeholder="xyz"
//                 required
//                 name="userName"
//                 onChange={(e) => {
//                   inputEventHandler(e);
//                 }}
//                 className="form-control border-2"
//                 style={
//                   errorState.userName
//                     ? { borderColor: "red" }
//                     : { borderColor: "grey" }
//                 }
//               />
//             </div>
//             <div className="mb-2">
//               <label htmlFor="mailInput" className="form-label">
//                 Mail ID
//               </label>
//               <input
//                 type="text"
//                 // className="form-control"
//                 id="mailInput"
//                 placeholder="abc@example.com"
//                 required
//                 name="userEmail"
//                 onChange={(e) => {
//                   inputEventHandler(e);
//                 }}
//                 className="form-control border-2"
//                 style={
//                   errorState.userEmail
//                     ? { borderColor: "red" }
//                     : { borderColor: "grey" }
//                 }
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="numInput" className="form-label">
//                 Contact Number
//               </label>
//               <input
//                 type="text"
//                 // className="form-control"
//                 id="numInput"
//                 placeholder="0000000000"
//                 required
//                 name="userPhone"
//                 onChange={(e) => {
//                   inputEventHandler(e);
//                 }}
//                 className="form-control border-2"
//                 style={
//                   errorState.userPhone
//                     ? { borderColor: "red" }
//                     : { borderColor: "grey" }
//                 }
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="messageInput" className="form-label">
//                 Message
//               </label>
//               <textarea
//                 // className="form-control"
//                 id="messageInput"
//                 rows={3}
//                 placeholder="Hi my name is xyz!"
//                 required
//                 name="userMessage"
//                 onChange={(e) => {
//                   inputEventHandler(e);
//                 }}
//                 className="form-control border-2"
//                 style={
//                   errorState.userMessage
//                     ? { borderColor: "red" }
//                     : { borderColor: "grey" }
//                 }
//               />
//             </div>
//           </div>
//           <div className="p-2"></div>
//           <div className="d-flex justify-content-end">
//             <Button
//               variant="contained"
//               color="success"
//               onClick={() => {
//                 handleSubmit();
//               }}
//               disabled={
//                 !userData.userName ||
//                 !userData.userEmail ||
//                 !userData.userPhone ||
//                 !userData.userMessage
//               }
//             >
//               Send :)
//             </Button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="text"
//         placeholder="Name"
//         {...register("Name", { required: true, min: 0, maxLength: 80 })}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
//       />
//       <input
//         type="tel"
//         placeholder="Contact Number"
//         {...register("Contact Number", { required: true, maxLength: 12 })}
//       />
//       <input
//         type="text"
//         placeholder="Message"
//         {...register("Message", { required: true, maxLength: 1200 })}
//       />

//       <input type="submit" />
//     </form>
//   );
// }

import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

// import "./styles.css";

export default function Right() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              maxLength: 50,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.name?.type === "required" && <p>This field is required</p>}
          {errors?.name?.type === "maxLength" && (
            <p>Name cannot exceed 20 characters</p>
          )}
          {errors?.name?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>
        {/* email */}
        <div>
          <label>Email ID</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              maxLength: 50,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors?.email?.type === "required" && <p>This field is required</p>}
          {errors?.email?.type === "maxLength" && (
            <p>Email cannot exceed 50 characters</p>
          )}
          {errors?.email?.type === "pattern" && (
            <p>Please provide the correct Email</p>
          )}
        </div>
        {/* contact number */}
        <div>
          <label>Contact Number</label>
          <input
            type="number"
            {...register("number", {
              required: true,
              minLength: 10,
              maxLength: 12,
              // pattern: /[0-9]{3}-[0-9]{2}-[0-9]{3}/i,
              // pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.number?.type === "required" && <p>This field is required</p>}
          {errors?.number?.type === "maxLength" && (
            <p>Contact Number cannot exceed 12 characters</p>
          )}
          {errors?.number?.type === "minLength" && (
            <p>Please provide the acurate Contact Number</p>
          )}
          {errors?.number?.type === "pattern" && <p>Numeric characters only</p>}
        </div>
        {/* message */}
        <div>
          <label>Message</label>
          <textarea
            // type="text"
            {...register("message", {
              required: true,
              maxLength: 1200,
              // pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.message?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.message?.type === "maxLength" && (
            <p>Message cannot exceed 1200 characters</p>
          )}
          {errors?.message?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

// function App() {

// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

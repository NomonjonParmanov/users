import React, { useRef } from "react";
import { useCreateUserMutation } from "../context/usersAPi";

const CreatUser = () => {
  let [createUser, error] = useCreateUserMutation();
  let firstName = useRef();
  let lastName = useRef();
  let role = useRef();
  let userName = useRef();
  let password = useRef();
  let active = useRef();
  let phone = useRef([]);
  console.log("error", error);
  let handleCreateUser = (e) => {
    e.preventDefault();
    let user = {
      FirstName: firstName.current.value,
      LastName: lastName.current.value,
      phones: [phone.current.value],
      role: role.current.value,
      UserName: userName.current.value,
      password: password.current.value,
      isActive: JSON.parse(active.current.value),
    };
    createUser(user);
  };
  return (
    <div className="container create">
      <form onSubmit={handleCreateUser} action="">
        <h1>Registration</h1>
        <hr />
        <div className="inp">
          <div className="inp1">
            <label>FirstName</label>
            <input
              ref={firstName}
              type="text"
              required
              placeholder="FirstName"
            />
          </div>
          <div className="inp1">
            <label>LastName</label>
            <input ref={lastName} type="text" required placeholder="LastName" />
          </div>
        </div>
        <div className="inp">
          <div className="inp1">
            <label>Phone Number</label>
            <input
              ref={phone}
              type="number"
              required
              placeholder="PhoneNumber"
            />
          </div>
          <div className="inp1">
            <label>Role</label>
            <input
              ref={role}
              type="text"
              required
              placeholder="write admin or owner or user"
            />
          </div>
        </div>
        <div className="inp">
          <div className="inp1">
            <label>UserName</label>
            <input ref={userName} type="text" required placeholder="UserName" />
          </div>
          <div className="inp1">
            <label>PassWord</label>
            <input
              ref={password}
              type="password"
              required
              placeholder="password"
            />
          </div>
        </div>
        <div className="inp">
          <div className="inp1">
            <label htmlFor="">IsActive</label>
            <input
              className="active"
              ref={active}
              type="text"
              required
              placeholder="write true or false"
            />
          </div>
        </div>
        <p>
          By clicking the "Register" button, you agree to our Terms of Use,
          Privacy Policy and Cookie Policy. You may receive SMS notifications
          from us, which you can cancel at any time.
        </p>
        <button>Register</button>
      </form>
    </div>
  );
};

export default CreatUser;

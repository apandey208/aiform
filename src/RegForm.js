import React from "react";
import './Form.css';
import Vector from './Vector.svg';

const RegForm = () => {
  return (
    <article className="loginBorder">
      <main className="pa4 black-80">
        <div className="center">
          <img
              src={Vector}
              className="logo"
              title="Photo of a kitty staring at you"
              alt=""
            />
            <div className="formLabel">
              <label className="firstLabel" hmtlFor="name">
               First Name
            </label>
              <input
                className="first"
                type="text"
                name="First Name"
                value= "Write your first name"
              />
              <label className="secondLabel" hmtlFor="name">
               Last Name
            </label>
            <input
                className="last"
                type="text"
                name="Last Name"
                value= "Write your last name"
              />
            </div>
            <div className="work">
              <label className="db fw6 lh-copy f6" hmtlFor="email-address">
               Work Email
            </label>
              <input
                className="workEmail"
                type="email"
                name="email-address"
                id="email-address"
              />

            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" hmtlFor="password">
                Password
            </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="">
            <input

              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
                 
        </div>
      </main>
    </article>
  );
}



export default RegForm;

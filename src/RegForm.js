import React from "react";
import "./Form.css";
import Vector from "./Vector.svg";

const RegForm = () => {
  return (
    <div className="full">
    <article className="loginBorder">
      <main className="black">
        <div className="whole">
        <img
            src={Vector}
            className="logo"
            title="Photo of a kitty staring at you"
            alt=""
          />
        <div className="imgSrc">
        <p className="trial" >To Start Your Free Trial</p>
          </div>
         <div className="center">
          <div className="formLabel">
            <label className="firstLabel" hmtlFor="name">
              First Name
            </label>
            <input
              className="first"
              type="text"
              name="First Name"
              value="Your first name"
            />
            <label className="secondLabel" hmtlFor="name">
              Last Name
            </label>
            <input
              className="last"
              type="text"
              name="Last Name"
              value="Your last name"
            />
          </div>
          <div className="work">
            <label className="eWork" hmtlFor="email-address">
              Work Email
            </label>
            <input
              className="workEmail"
              type="email"
              name="email-address"
              id="email-address"
              value = "Write your email"
            />
            <label className="sal" hmtlFor="Salutation">Salutation</label>
              <select name="salutation" id="prefix" className="prefix">
                <option className="option" value="Mr">Mr.</option>
                <option className="option" value="MrS">MrS.</option>
                </select>
            </div>
          <div className="company">
            <label className="compName" hmtlFor="company">Company</label>
            <input className="comInput" type="text" name="company" id="company" value="Enter Your Company Name"/>
          </div>
          <div className="employees">
            <label className="compName" hmtlFor="company">No. Of Employees</label>
            <select name="salutation" id="prefix" className="count">
                <option className="employe" value="fifty">50+</option>
                <option className="employe" value="hundred">100+</option>
                <option className="employe" value="fiveHundred">500+</option>
                <option className="employe" value="thousand">100+</option>
                </select>          
          </div>
          <div className="birth">
            <label className="eWork" hmtlFor="birthday">
              Birthdate
            </label>
          <input className="workEmail" type="date" id="birthday" name="birthday" value="select" />
            <label className="crm" hmtlFor="CRM Vendor">CRM Vendor</label>
            <input
              className="last"
              type="text"
              name="CRM Vendor"
              value="CRM Vendor"
            /> 
                
            </div>
          </div>
          <div className="personal">
          <div className="formLabel">
            <label className="birth" hmtlFor="name">
              Phone Number
            </label>
            <input
              className="first"
              type="tel"
              name="telephone"
              value="91xxxxxxx"
            />
            <label className="country" hmtlFor="name">
              Last Name
            </label>
            <input
              className="last"
              type="text"
              name="country"
              value="Select Your Country"
            />
          </div>
          <div className="agree">
           <input
              type="checkbox"
              name="agree"
              required="required"
              value = "I agree to terms and Conditions"
              />
               <label className="agreement">I agree the terms and Conditions</label>
          </div>
         <div className="button">
         <input 
         className="submit"
         type="text"
         name="country"
          value="Start My Free Trial" />
            </div>
            </div>
            </div>
            </main>
    </article>
    </div>
  );
};

export default RegForm;

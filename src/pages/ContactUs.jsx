// import React from "react";
// import Instagram from "../components/Svgs/Instagram";
// import Whatsapp from "../components/Svgs/Whatsapp";
import { useState } from "react";

export default function ContactUs() {
  const [contactFormData, setContactFormData] = useState({
    contactName: "",
    email: "",
    message: ""
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setContactFormData(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }
  return (
    <section className="bg-oColor">
      <div className="pt-24 flex flex-col justify-around items-center mx-auto rounded-lg w-[90%] min-[840px]:w-[900px] min-[840px]:flex-row">
        <div
          style={{ boxShadow: "5px 5px 11px #ebe2de, -5px -5px 11px #ffffff" }}
          className="w-full bg-oColor rounded-3xl p-4 flex flex-col justify-between my-3 text-center min-[840px]:h-[500px] min-[840px]:w-2/5"
        >
          <div>
            <h2 className="pt-4 pb-[.3em]">Contact information</h2>
            <p className="font-light">
              Fill up the form and you will receive a response as soon as
              possible
            </p>
            <p className="font-light">Phone: 020199409</p>
          </div>
          {/* <h2>Other Platforms</h2> */}
          <div className="con">
            <div className="contact-box">
              {/* <Instagram /> */}
            </div>
            <div className="contact-box">
              {/* <Whatsapp /> */}
            </div>
            <div className="contact-box" />
          </div>
        </div>
        <div className="w-[80%] min-[840px]:w-2/5">
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <div className="w-full relative my-3 pt-3 form__group">
              <input
                type="input"
                className="form__field"
                placeholder="Name"
                name="contactName"
                id="name"
                required
                value={contactFormData.name}
                onChange={handleForm}
              />
              <label
                htmlFor="name"
                className="form__label"
              >
                Name
              </label>
            </div>
            <div className="w-full relative my-3 pt-3 form__group">
              <input
                type="email"
                className="form__field"
                placeholder="Email"
                name="email"
                id="email"
                value={contactFormData.email}
                onChange={handleForm}
                required
              />
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>
            <div className="w-full relative my-3 pt-3 form__group">
              <textarea
                className="form__field"
                name="message"
                id="message"
                cols="20"
                rows="3"
                required
                value={contactFormData.message}
                onChange={handleForm}
              />
              <label htmlFor="name" className="form__label">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="form-submit-btn"
            >
              Submit
            </button>
            <a href="mailto:sammyntewusu1@gmail.com">
              <button type="button" className="form-submit-btn">
                Direct Email
              </button>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

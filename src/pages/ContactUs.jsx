import { useState } from "react";
import {
  FacebookSvg,
  Instagram,
  SnapchatSvg,
  WhatsappSvg
} from "../components/Svgs";
import { Link } from "react-router-dom";

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
    <section className=" grid place-content-center">
      <div className="text-tColor flex flex-col justify-around items-center mx-auto rounded-lg w-[90%] min-[840px]:w-[900px] min-[840px]:flex-row">
        <div
          style={{ boxShadow: "5px 5px 11px #ebe2de, -5px -5px 11px #ffffff" }}
          className="w-full bg-oColor rounded-3xl p-4 flex flex-col justify-between my-3 text-center min-[840px]:h-[500px] min-[840px]:w-2/5"
        >
          <div>
            <h2 className="pt-4 pb-[.3em] font-[Anton] text-xl">
              Contact information
            </h2>
            <p className="font-light">
              Fill up the form and you will receive a response as soon as
              possible
            </p>
            <p className="font-light">Phone: 020199409</p>
          </div>
          <h2 className="font-[Anton] mt-11">Our Platforms</h2>
          <p className="font-light">Tap to be redirected</p>
          <div className="grid grid-cols-1 min-[353px]:grid-cols-2 min-[512px]:grid-cols-2 place-items-center">
            <a href="https://www.instagram.com" target="_blank">
              <div className="contact-box">
                <Instagram />
              </div>
            </a>
            <a href="https://wa.me/233204223551" target="_blank">
              <div className="contact-box">
                <WhatsappSvg />
              </div>
            </a>
            <a href="https://www.snapchat.com/add/kwabe.naa?share_id=dx1EM-575M8&locale=en-CA" target="_blank">
              <div className="contact-box">
                <SnapchatSvg />
              </div>
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <div className="contact-box">
                <FacebookSvg />
              </div>
            </a>
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
              <label htmlFor="name" className="form__label">
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
                className="form__field resize-none"
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
            <button type="button" className="form-submit-btn">
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

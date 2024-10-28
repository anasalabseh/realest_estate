import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import api from "../services/axios";
import { Oval } from "react-loader-spinner";
import { addAlert } from "../store/alert/alertSlice";
import { useDispatch } from "react-redux";
import { useNavigation, useActionData, Form } from "react-router-dom";

const Contact = () => {
  const dispatch = useDispatch();
  const alert = useActionData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigation = useNavigation();

  const { name, email, subject, message } = formData;
  const loading = navigation.state === "submitting";

  if (alert?.status === "error") {
    dispatch(addAlert({ message: alert.message, alertType: alert.status }));
  } else if (alert?.status === "success") {
    dispatch(addAlert({ message: alert.message, alertType: alert.status }));
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Realest Estate - Contact</title>
        <meta name="description" content="Contact us" />
      </Helmet>

      <Form className="contact__form">
        <label htmlFor="name" className="contact__form__label">
          Name
        </label>
        <input
          type="text"
          className="contact__form__input"
          name="name"
          placeholder="Full Name"
          onChange={(event) => onChange(event)}
          value={name}
          required
        />
        <label htmlFor="email" className="contact__form__label">
          Email
        </label>
        <input
          type="email"
          className="contact__form__input"
          name="email"
          placeholder="example@gmail.com"
          onChange={(event) => onChange(event)}
          value={email}
          required
        />
        <label htmlFor="subject" className="contact__form__label">
          Subject
        </label>
        <input
          type="text"
          className="contact__form__input"
          name="subject"
          placeholder="Buying Home"
          onChange={(event) => onChange(event)}
          value={subject}
          required
        />
        <label htmlFor="message" className="contact__form__label">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="contact__form__textarea"
          cols="8"
          rows="18"
          placeholder="Message"
          onChange={(event) => onChange(event)}
          value={message}
        />
        {loading ? (
          <div className="listingform__loader">
            <Oval color="#424242" height={50} width={50} />
          </div>
        ) : (
          <button className="contact__form__button" type="submit">
            Send
          </button>
        )}
      </Form>
    </div>
  );
};

export default Contact;

export const action = async ({ request }) => {
  try {
    const form = Object.fromEntries(await request.formData());
    console.log(form);
    const response = api.post("/api/contacts/", { ...form });
    console.log(response);

    return { message: "Message sent", status: "success" };
  } catch (error) {
    window.scrollTo(0, 0);
    return { message: "Error with Sending Message", status: "error" };
  }
};

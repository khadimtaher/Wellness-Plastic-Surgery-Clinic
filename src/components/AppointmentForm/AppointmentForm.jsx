import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./AppointmentForm.module.css";

function AppointmentForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // ✅ spinner state

  // ✅ Form Validation
  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);

    if (!formData.get("user_name").trim()) {
      newErrors.user_name = "Name is required";
    }
    if (!formData.get("user_email").match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.user_email = "Valid email is required";
    }
    if (!formData.get("user_phone").match(/^\d{10}$/)) {
      newErrors.user_phone = "Enter 10-digit phone number";
    }
    if (!formData.get("appointment_date")) {
      newErrors.appointment_date = "Select appointment date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Send Email Function
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true); // 🔄 spinner on
    setStatus(""); // reset status msg

    emailjs
      .sendForm(
        "service_nvmzl2p", // 🔑 Your Service ID
        "template_yologxp", // 🔑 Your Template ID
        form.current,
        "LBPS4dp33zfFTC54B" // 🔑 Your Public Key (User ID)
      )
      .then(
        () => {
          setStatus(" Appointment request sent successfully!");
          setErrors({});
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send. Please try again!");
        }
      )
      .finally(() => {
        setLoading(false); // 🔄 spinner off
      });
  };

  return (
    <div className={style.appointmentWrapper}>
      {/* Hospital Info Section */}
      <div className={style.hospitalInfo}>
        <h2>Contact Us</h2>
        <p className={style.infoText}>
          Schedule your appointment with Wellness Plastic & Cosmetic Surgery
          Center for personalized, world-class care.
        </p>
        <div className={style.details}>
          <p>
            <strong>Address:</strong> Mayur Ban Colony, Near Prayagbai Patil
            College, Ambajogai Road Latur
          </p>
          <p>
            <strong>Timing:</strong> Monday - Saturday : 12:00 PM – 7:00 PM |
            Sunday OPD → By Appointment
          </p>
          <p>For Emergencies | 24 x 7</p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919322901735">+91 93229 01735</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Wellnesssurgeon@gmail.com">
              Wellnesssurgeon@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className={style.formWrapper}>
        <h2 className={style.form_heading}>Book an Appointment</h2>
        <form ref={form} onSubmit={sendEmail} className={style.form}>
          <label>
            Name:
            <input type="text" name="user_name" />
            {errors.user_name && (
              <span className={style.error}>{errors.user_name}</span>
            )}
          </label>

          <label>
            Email:
            <input type="email" name="user_email" />
            {errors.user_email && (
              <span className={style.error}>{errors.user_email}</span>
            )}
          </label>

          <label>
            Phone:
            <input type="tel" name="user_phone" />
            {errors.user_phone && (
              <span className={style.error}>{errors.user_phone}</span>
            )}
          </label>

          <label>
            Appointment Date:
            <input type="date" name="appointment_date" />
            {errors.appointment_date && (
              <span className={style.error}>{errors.appointment_date}</span>
            )}
          </label>

          <label>
            Message:
            <textarea name="message"></textarea>
          </label>

          {/* ✅ Button with spinner */}
          <button type="submit" disabled={loading}>
            {loading ? (
              <span className={style.spinner}></span> // spinner css
            ) : (
              "Book Appointment"
            )}
          </button>
        </form>

        {status && <p className={style.response}>{status}</p>}
      </div>
    </div>
  );
}

export default AppointmentForm;

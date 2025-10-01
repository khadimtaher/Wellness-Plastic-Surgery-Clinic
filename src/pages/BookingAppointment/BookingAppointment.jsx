// BookingAppointment.jsx
import React from "react";
import style from "./BookingAppointment.module.css";
import appointmentBanner from "../../Images/BannerImages/appointmentBanner.jpeg";
import Appointmentform from "../../components/AppointmentForm/AppointmentForm";
// ✅ If your form component exists, uncomment and fix the import path
// import AppointmentForm from "../YourFormFolder/AppointmentForm";

export default function BookingAppointment({
  bannerSrc = appointmentBanner,
  heading = "Book an Appointment",
  subheading = "Fast, friendly, and expert care — schedule your visit in seconds",
}) {
  return (
    <section className={style.bookingSection} aria-labelledby="booking-heading">
      {/* Banner */}
      <div className={style.banner}>
        <img
          className={style.bannerImg}
          src={bannerSrc}
          alt="ABC Multispeciality Hospital appointment booking banner"
          loading="lazy"
        />
        <div className={style.bannerOverlay}>
          <h1 id="booking-heading" className={style.bannerHeading}>
            {heading}
          </h1>
          <p className={style.bannerSub}>{subheading}</p>
        </div>
      </div>
      <Appointmentform />

      {/* Main content: Form on the left, Timing/Details on the right */}
    </section>
  );
}

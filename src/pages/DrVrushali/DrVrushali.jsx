import React, { useEffect } from "react";
import style from "./DrVrushali.module.css";
import bannerImg from "../../Images/DrVrushali.jpg";
import { NavLink } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { CiHospital1, CiLocationOn, CiClock2, CiPhone } from "react-icons/ci";
import Feedback from "../../components/Feedback/Feedback";
import { FaCircleCheck } from "react-icons/fa6";

function DrVrushali() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Scroll ke hisaab se headings ko move karna
      document.documentElement.style.setProperty(
        "--moveRight",
        `${scrollY * 0.6}px`
      );
      document.documentElement.style.setProperty(
        "--moveLeft",
        `${-scrollY * 0.6}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style.doctorPage}>
      <img
        src={bannerImg}
        alt="Dr. Sumit Sudhir Hadgaonkar at Wellness Plastic and Cosmetic Surgery Center"
        className={style.bannerImg}
      />

      {/* Banner Section */}
      <div className={style.banner}>
        <div className={style.bannerContent}>
          <h1 style={{ transform: `translateX(var(--moveRight, 0px))` }}>
            Wellness Plastic and
          </h1>
          <h1 style={{ transform: `translateX(var(--moveLeft, 0px))` }}>
            Cosmetic Surgery Center
          </h1>
        </div>
      </div>

      {/* About Doctor Section */}

      <div className={style.aboutSection}>
        <h2>Know More About Dr. Vrushali Joshi Hadgaonkar</h2>
        <p className={style.details}>
          <strong>Dr. Vrushali Joshi Hadgaonkar</strong> is a highly skilled
          Dental and Cosmetic Surgeon from <strong>Latur</strong>, known for her
          compassionate approach, clinical expertise, and artistic eye for
          aesthetics. She has earned her <strong>BDS (2006–2012)</strong> from
          MIDSR Dental College, Latur, followed by{" "}
          <strong>7 years of professional experience</strong> in Trust and
          Corporate Hospitals across Mumbai, where she gained hands-on exposure
          to advanced dental procedures and patient care. To further specialize
          in aesthetics, she completed her{" "}
          <strong>
            PGDCC (Post Graduate Diploma in Clinical Cosmetology, 2024–2025)
          </strong>{" "}
          in Mumbai, strengthening her expertise in modern cosmetic treatments.
        </p>
        <br />
        <p className={style.details}>
          With extensive experience in cosmetic dentistry and clinical
          cosmetology, Dr. Vrushali specializes in smile design, cosmetic
          fillings, veneers, teeth whitening, and full smile makeovers. Her
          expertise also extends to facial aesthetics including Botox, dermal
          fillers, and non-surgical facial rejuvenation. She strongly believes
          that a confident smile and youthful appearance can enhance not only
          how one looks but also how one feels.
        </p>
        <br />
        <p className={style.details}>
          Patients admire her ability to listen carefully, explain treatment
          options clearly, and design personalized plans tailored to individual
          needs. She combines modern technologies with a patient-centric
          approach to ensure results that are safe, natural-looking, and
          long-lasting. Her clinic,{" "}
          <strong>Wellness Plastic and Cosmetic Surgery Center</strong>, has
          become a trusted destination in Latur for advanced dental and cosmetic
          care.
        </p>
        <br />

        {/* <NavLink
          to="/BookingAppointment"
          className={style.appointmentBtn}
          aria-label="Book an appointment with Dr. Vrushali Joshi Hadgaonkar"
        >
          Book an Appointment
        </NavLink> */}
      </div>

      {/* Why Choose Section */}
      <div className={style.whyChoose}>
        <h2>Why Choose Dr. Vrushali Joshi Hadgaonkar?</h2>

        <p className={style.details}>
          Choosing the right dental and cosmetic surgeon is an important
          decision when it comes to your smile, appearance, and overall
          confidence.
          <strong>
            {" "}
            Dr. Vrushali Joshi Hadgaonkar, the best dental and cosmetic surgeon
            in Latur,
          </strong>
          is widely recognized for her expertise, patient-centric approach, and
          commitment to excellence. With a solid academic background, years of
          clinical experience, and advanced training in modern cosmetic
          procedures, she ensures that every patient receives safe, natural, and
          long-lasting results. Dr. Vrushali focuses on blending medical
          knowledge with an artistic eye to create transformations that not only
          look beautiful but also feel natural. Her clinic in Latur has become a
          trusted destination for individuals seeking world-class dental and
          cosmetic care in a welcoming and comfortable environment.
        </p>

        <div className={style.whyGrid}>
          <div className={style.whyCard}>
            <h3>✔ Expertise</h3>
            <p>
              Dr. Vrushali brings years of specialized training in dental and
              cosmetic surgery. From cosmetic fillings and veneers to Botox and
              dermal fillers, her vast knowledge ensures the highest standards
              of care and exceptional results for every patient.
            </p>
          </div>
          <div className={style.whyCard}>
            <h3>✔ Advanced Techniques</h3>
            <p>
              She uses state-of-the-art equipment and the latest techniques in
              dentistry and aesthetics. Whether it’s a smile makeover or
              non-surgical facial rejuvenation, patients in Latur trust her to
              deliver safe, effective, and modern treatments.
            </p>
          </div>
          <div className={style.whyCard}>
            <h3>✔ Patient-Centered Care</h3>
            <p>
              Every treatment plan is customized according to the patient’s
              needs and goals. Dr. Vrushali listens carefully, explains
              procedures in detail, and ensures complete comfort at every step,
              making patients feel confident and cared for.
            </p>
          </div>
          <div className={style.whyCard}>
            <h3>✔ Trusted Reputation</h3>
            <p>
              Known in Latur for her compassionate approach and dedication, Dr.
              Vrushali has built a reputation of trust and excellence. Numerous
              patients have benefitted from her treatments and continue to
              recommend her for her professionalism and natural-looking results.
            </p>
          </div>
        </div>
      </div>

      {/* education and experience  */}

      {/* Education & Experience Section */}
      <h2 className={style.eduHeading}>Education & Experience</h2>
      <div className={style.educationSection}>
        <div className={style.educationGrid}>
          <div className={style.educationCard}>
            <h3>
              <FaCircleCheck className={style.eduIcons} /> BDS (2006–2012)
            </h3>
            <p>BDS(2006-2012) - From MIDSR Dental College, Latur </p>
          </div>
          <div className={style.educationCard}>
            <h3>
              <FaCircleCheck className={style.eduIcons} /> Work Experience
            </h3>
            <p>
              7 years of clinical practice at Trust and Corporate Hospitals in
              Mumbai, gaining expertise in patient care and advanced dental
              procedures.
            </p>
          </div>
          <div className={style.educationCard}>
            <h3>
              <FaCircleCheck className={style.eduIcons} /> PGDCC (2024–2025)
            </h3>
            <p>
              Post Graduate Diploma in Clinical Cosmetology, Mumbai –
              specializing in modern cosmetic treatments and non-surgical facial
              aesthetics.
            </p>
          </div>
        </div>
      </div>

      <h1 className={style.hospitalTimings}>Hospital Timings</h1>
      <div className={style.infoGrid}>
        <div className={style.hospitalCard}>
          <h4>
            <CiHospital1 className={style.infoGridIcon} aria-hidden="true" />{" "}
            Hospital
          </h4>
          <p>Wellness Plastic and Cosmetic Surgery Center</p>
        </div>
        <div className={style.addressCard}>
          <h4>
            <CiLocationOn className={style.infoGridIcon} aria-hidden="true" />{" "}
            Address
          </h4>
          <p>
            Mayur Ban Colony, Near Prayagbai Patil College, Ambajogai Road,
            Latur, Maharashtra – 413512
          </p>
        </div>
        <div className={style.timingsCard}>
          <h4>
            <CiClock2 className={style.infoGridIcon} aria-hidden="true" />{" "}
            Timings
          </h4>
          <p>12:00 PM - 7:00 PM | Sunday OPD → By Appointment</p>
          <p>For Emergencies | 24 x 7</p>
        </div>
        <div className={style.contactCard}>
          <h4>
            <CiPhone className={style.infoGridIcon} aria-hidden="true" />{" "}
            Contact
          </h4>
          <p>
            <a
              href="tel:+919322901735"
              className={style.contactLink}
              aria-label="Call Wellness Surgery Center at +91 93229 01735"
            >
              +91 93229 01735
            </a>
          </p>
          <p>
            <a
              href="mailto:Wellnesssurgeon@gmail.com"
              className={style.contactLink}
              aria-label="Email Wellness Surgery Center"
            >
              <TfiEmail className={style.infoGridIcon} aria-hidden="true" />{" "}
              Wellnesssurgeon@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className={style.feedbackContent}>
        <h1 className={style.Feedback}>Patients Feedback</h1>
        <Feedback />
      </div>
    </div>
  );
}

export default DrVrushali;

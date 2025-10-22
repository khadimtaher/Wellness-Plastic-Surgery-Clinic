import React from "react";
import style from "./AboutClinic.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bannerImg from "../../Images/BannerImages/aboutBanner.png";
import Feedback from "../../components/Feedback/Feedback";
import sumit from "../../Images/drImg.jpeg";
import vrushali from "../../Images/drImg.jpeg";

import _img1 from "../../Images/Hsptlgallery/img1.jpeg";
import _img2 from "../../Images/Hsptlgallery/img2.jpeg";
import _img3 from "../../Images/Hsptlgallery/img3.jpeg";
import _img4 from "../../Images/Hsptlgallery/img4.jpeg";
import _img5 from "../../Images/Hsptlgallery/img5.jpeg";
import _img6 from "../../Images/Hsptlgallery/img6.jpeg";
import _img7 from "../../Images/Hsptlgallery/img7.jpeg";
import _img8 from "../../Images/Hsptlgallery/img8.jpeg";
import _img9 from "../../Images/Hsptlgallery/img9.jpeg";

function AboutClinic() {
  const images = [
    _img1,
    _img2,
    _img3,
    _img4,
    _img5,
    _img6,
    _img7,
    _img8,
    _img9,
  ];

  return (
    <div className={style.aboutClinic}>
      {/* Banner Section */}
      <div className={style.bannerSection}>
        <img src={bannerImg} alt="Clinic Banner" className={style.bannerImg} />
        <div className={style.bannerOverlay}>
          <h1 className={style.h1}>About Our Hospital</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className={style.introSection}>
        <div className={style.sectionContainer}>
          <h2 className={style.aboutHeading}>About Our Hospital</h2>
          <p>
            Welcome to Wellness Plastic Surgery Hospital, Latur, a center where
            advanced medical expertise meets compassionate care. We specialize
            in a wide range of treatments including Plastic, Reconstructive,
            Cosmetic, Hand, Microvascular Surgery, Dental and Aesthetic
            procedures. With modern facilities and a patient-first approach, our
            hospital is dedicated to enhancing confidence, restoring health, and
            improving quality of life.
            <br />
            <br />
            Our hospital is led by two highly qualified specialists:
            <br />
            <br />
            Dr. Sumit S Hadgaonkar (MBBS, MS, MCh – Plastic Surgery), Consultant
            Plastic, Reconstructive, Cosmetic, Hand and Microvascular Surgeon,
            known for his precision, innovation, and commitment to patient
            safety.
            <br />
            <br />
            Dr. Vrushali Joshi Hadgaonkar (BDS, PGDCC – Mumbai), an experienced
            Dental and Cosmetic Surgeon, who brings expertise in aesthetic
            dentistry and advanced cosmetic care to help patients achieve
            natural, confident smiles.
            <br />
            <br />
            Together, they bring a unique blend of medical excellence and
            personalized care to Latur, ensuring every patient receives
            treatment that is safe, ethical, and tailored to their individual
            needs.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className={style.valuesSection}>
        <div className={style.sectionContainer}>
          <h2>Our Core Values</h2>
          <div className={style.valuesGrid}>
            <div className={style.valueCard}>
              <h3>Compassion</h3>
              <p>
                We treat every patient with empathy, understanding their unique
                needs and providing care with warmth and respect.
              </p>
            </div>
            <div className={style.valueCard}>
              <h3>Innovation</h3>
              <p>
                We embrace the latest medical advancements to deliver precise,
                effective, and safe treatments for optimal outcomes.
              </p>
            </div>
            <div className={style.valueCard}>
              <h3>Integrity</h3>
              <p>
                We uphold the highest ethical standards, ensuring trust and
                transparency in every interaction with our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className={style.facilitySection}>
        <div className={style.sectionContainer}>
          <h2>Our Facilities</h2>
          <p className={style.paragraph}>
            Our state-of-the-art facilities are designed to provide
            comprehensive care, ensuring safety, comfort, and efficiency for all
            patients.
          </p>
          <div className={style.facilityGrid}>
            <div className={style.facilityCard}>
              <h3>Advanced Operation Theatres</h3>
              <p>
                Equipped with cutting-edge technology, our operation theatres
                ensure precision and safety during complex surgical procedures.
              </p>
            </div>
            <div className={style.facilityCard}>
              <h3>24/7 Emergency Care</h3>
              <p>
                Our dedicated emergency department is staffed round-the-clock to
                provide immediate, life-saving care when it matters most.
              </p>
            </div>
            <div className={style.facilityCard}>
              <h3>Modern Diagnostic Labs</h3>
              <p>
                Our labs utilize advanced imaging and testing equipment to
                deliver accurate and timely results for effective treatment
                planning.
              </p>
            </div>
            <div className={style.facilityCard}>
              <h3>Specialized Outpatient Clinics</h3>
              <p>
                We offer specialized clinics for various medical fields,
                providing expert consultations in a comfortable setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className={style.doctorSection}>
        <div className={style.sectionContainer}>
          <h2>Meet Our Expert Doctors</h2>
          <p className={style.paragraph}>
            Our team of highly qualified specialists brings expertise and
            dedication to every patient, ensuring top-notch care and positive
            outcomes.
          </p>

          <div className={style.doctorGrid}>
            <div className={style.doctorCard}>
              <img
                src={sumit}
                alt="Dr. Sumit Sudhir"
                className={style.doctorImg}
              />
              <h3>Dr. Sumit S Hadgaonkar</h3>
              <p>
                Consultant Plastic, Reconstructive, Cosmetic, Hand and
                Microvascular Surgeon
              </p>
              <p className={style.doctorBio}>
                Dr. Sumit S Hadgaonkar — MBBS, MS, MCh (Plastic Surgery),
                Consultant Plastic, Reconstructive, Cosmetic, Hand &
                Microvascular Surgeon <br />
                <br /> Dr. Sumit S Hadgaonkar is a highly qualified Plastic and
                Cosmetic Surgeon with expertise in advanced reconstructive and
                aesthetic procedures. He specializes in trauma and burn
                reconstruction, rhinoplasty, liposuction, facelifts, body
                contouring, and skin rejuvenation. <br />
              </p>
            </div>
            <div className={style.doctorCard}>
              <img
                src={vrushali}
                alt="Dr. Vrushali"
                className={style.doctorImg}
              />
              <h3>Dr. Vrushali Joshi Hadgaonkar</h3>
              <p>Consultant Dental and Cosmetic Surgeon</p>
              <p className={style.doctorBio}>
                Dr. Vrushali Joshi Hadgaonkar is a qualified Dental and Cosmetic
                Surgeon (BDS, PGDCC – Mumbai) with expertise in cosmetic
                dentistry, smile design, and minimally invasive aesthetic
                treatments. <br />
                <br /> She specializes in procedures such as veneers, teeth
                whitening, smile makeovers, Botox, and dermal fillers, helping
                patients achieve natural-looking and long-lasting results. Known
                for her patient-focused and compassionate approach, Dr. Vrushali
                blends clinical expertise with modern cosmetic techniques to
                deliver personalized, high-quality care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* images gallary  */}
      <section className={style.gallerySection}>
        <h2 className={style.heading}>Our Hospital Gallery</h2>
        <div className={style.gallery}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={style.testimonialSection}>
        <div className={style.sectionContainer}>
          <h2>What Our Patients Say</h2>
          <p className={style.paragraph}>
            We are proud to have touched the lives of thousands of patients who
            trust us with their healthcare needs.
          </p>
        </div>
        <Feedback />
      </section>

      {/* Contact Section */}
      <section className={style.contactSection}>
        <div className={style.sectionContainer}>
          <h2>Get in Touch</h2>
          <p className={style.paragraph}>
            We are here to assist you with all your healthcare needs. Reach out
            to us for appointments, inquiries, or feedback.
          </p>
          <div className={style.contactGrid}>
            <div className={style.contactCard}>
              <strong>
                <FaMapMarkerAlt className={style.icon} /> Address:
              </strong>
              <p>
                Mayur Ban Colony, Near Prayagbai Patil College, Ambajogai Road,
                Latur, Maharashtra – 413512
              </p>
            </div>

            <div className={style.contactCard}>
              <strong>
                <FaPhoneAlt className={style.icon} /> Phone:
              </strong>
              <p>
                <a href="tel:+919322901735" className={style.link}>
                  +91 9322901735
                </a>
              </p>
            </div>

            <div className={style.contactCard}>
              <strong>
                <FaEnvelope className={style.icon} /> Email:
              </strong>
              <p>
                <a
                  href="mailto:Wellnesssurgeon@gmail.com"
                  className={style.link}
                >
                  Wellnesssurgeon@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <div className={style.mapSection}>
        <h2>Find Us</h2>
        <p className={style.mapSubtitle}>
          Wellness Plastic and Cosmetic Surgery Center
        </p>
        <p className={style.address}>
          Besides Prayagbai Patil College, Mayurban Colony, Ambajogai Road,
          Latur
        </p>

        <div className={style.mapWrap}>
          <iframe
            className={style.mapIframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.5879946958166!2d76.5699662!3d18.411593199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf8326a590a881%3A0xba8482c7a545deb!2sWellness%20Plastic%20Surgery%20Center!5e0!3m2!1sen!2sin!4v1756561288776!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wellness Plastic & Cosmetic Surgery Center Location"
          ></iframe>
        </div>

        <div className={style.mapActions}>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=18.4115932,76.5699662"
            target="_blank"
            rel="noopener noreferrer"
            className={style.mapBtn}
            aria-label="Get directions to Wellness Plastic & Cosmetic Surgery Center"
          >
            Get Directions
          </a>
          <a
            href="tel:+919322901735"
            className={style.mapBtn}
            aria-label="Call the clinic"
          >
            Call Clinic
          </a>
          <a
            href="https://maps.google.com/?q=Wellness+Plastic+Surgery+Center"
            target="_blank"
            rel="noopener noreferrer"
            className={style.mapBtnSecondary}
            aria-label="Open in Google Maps"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutClinic;

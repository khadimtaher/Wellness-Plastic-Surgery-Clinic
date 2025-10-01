import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";

import locationIcon from "../../Images/location.png";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        {/* About Clinic */}
        <div className={style.section}>
          <img
            className={style.LogoImage}
            src="/wellnessIcon.jpeg"
            alt="Healthcare Logo"
          />
          <p>
            Providing trusted healthcare with experienced doctors, modern
            facilities, and patient-first approach. Your health and well-being
            are our top priority.
          </p>
        </div>

        {/* About Links */}
        <div className={style.section}>
          <h3>About</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/about/dr-sumit-sudhir">Dr. Sumit Sudhir</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/about/dr-vrushali-joshi">Dr. Vrushali Joshi</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/about/about-clinic">About Clinic</a>
            </li>
          </ul>
        </div>

        {/* Skin Treatments */}
        <div className={style.section}>
          <h3>Vascular Surgery</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/vascular-surgery/laser">Laser Treatment</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/vascular-surgery/re-implantation">Re-implantation</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/vascular-surgery/nerves-&-veins">Nerves & Veins</a>
            </li>
          </ul>
        </div>

        {/* hand surgery */}
        <div className={style.section}>
          <h3>Hand Surgery</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/hand-surgery/accident-cuts">Accident Cuts</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/hand-surgery/machine-injuries">Machine Injuries</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/hand-surgery/hand-lumps">Hand Lumps</a>
            </li>
          </ul>
        </div>

        {/* Minor surgery */}
        <div className={style.section}>
          <h3>Minor Surgery</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/minor-surgery/toenail">Toenail</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/minor-surgery/body-lumps">Body Lumps</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/minor-surgery/warts">Warts</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/minor-surgery/ear-repair">Ear Repairs</a>
            </li>
          </ul>
        </div>

        {/* Reconstructive Surgery  */}
        <div className={style.section}>
          <h3>Reconstructive Surgery</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/reconstructive-surgery/burn-treatment">
                Burn Treatement
              </a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/reconstructive-surgery/diabetic-wound-care">
                Diabetic Wound Care
              </a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/reconstructive-surgery/face-fracture-care">
                Face Fracture Care
              </a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/reconstructive-surgery/pilonidal-sinus-surgery">
                Pilonidal Sinus Surgery
              </a>
            </li>
          </ul>
        </div>

        {/* cosmetic surgery section  */}
        <div className={style.section}>
          <h3>Cosmetic Surgery</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/cosmetic-surgery/gynaecosmatic">Gynaecosmatic</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/cosmetic-surgery/liposuction">Liposuction</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/cosmetic-surgery/hair-transplant">Hair Transplant</a>
            </li>
          </ul>
        </div>

        {/* before and after images and videos section  */}
        <div className={style.section}>
          <h3>Gallery</h3>
          <ul>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/gallery/before-&-after">Befor After</a>
            </li>
            <li>
              <MdKeyboardDoubleArrowRight className={style.menusArrow} />
              <a href="/gallery/videos">Videos</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={style.section}>
          <h3>Contact</h3>

          <p className={style.contactInformation}>
            <a href="tel:+919322901735" className={style.contactLink}>
              <FiPhoneCall className={style.contactIcons} /> +919322901735
            </a>
          </p>

          <p className={style.contactInformation}>
            <a
              href="mailto:support@healthcare.com"
              className={style.contactLink}
            >
              <AiTwotoneMail className={style.contactIcons} />{" "}
              Wellnesssurgeon@gmail.com
            </a>
          </p>

          <p className={style.contactInformation}>
            {" "}
            <MdOutlineAccessTime className={style.contactIcons} />
            Monday - Saturday: 12:00 AM - 7:00 PM | Sunday OPD → By Appointment
          </p>
          <p>For Emergencies | 24 x 7</p>

          <div className={style.social}>
            <a
              href="https://www.facebook.com/share/17AZqQC5vr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={style.socialIcons} />
            </a>

            <a
              href="https://www.instagram.com/wellness.plastic.surgery_latur?igsh=MWZ4Yzh3OHQwOTJ2Yw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={style.socialIcons} />
            </a>

            <a
              href="https://wa.me/+919322901735" // yaha apna number daaliye
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={style.socialIcons} />
            </a>
          </div>
        </div>

        {/* addresss section  */}
        <div className={style.section}>
          <h3>Address</h3>
          <p className={style.addressText}>
            Mayur Ban Colony, Near Prayagbai Patil College, Ambajogai Road,
            Latur, Maharashtra – 413512
          </p>
          <a
            className={style.getLocation}
            href="https://maps.app.goo.gl/cLUfV37h1igHr68r9"
            target="_blank"
          >
            Get Directions{" "}
            <span>
              <img
                className={style.locationIcon}
                src={locationIcon}
                alt="location icon"
              />
            </span>
          </a>
        </div>
      </div>
      <div className={style.bottom}>
        <p>
          © {new Date().getFullYear()} Wellness Plastic Surgery Center. All
          Rights Reserved.
        </p>
      </div>
      <div className={style.privacyContainer}>
        <Link to="/privacyPolicy">Privacy Policy</Link> |
        <Link to="/termsCondition">Terms & Conditions</Link>
      </div>
    </footer>
  );
}

export default Footer;

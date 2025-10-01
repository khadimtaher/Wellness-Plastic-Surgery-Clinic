import React, { useState } from "react";
import style from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menus = [
    {
      name: "About",
      links: ["Dr  Sumit Sudhir", "Dr Vrushali Joshi", "About Clinic"],
    },
    {
      name: "Cosmetic Surgery",
      links: ["Gynecomastia surgery", "Liposuction", "Hair Transplant", "Rhinoplasty", "Breast Implants", "Breast Reduction"],
    },
    {
      name: "Reconstructive Surgery",
      links: [
        "Burn Surgery",
        "Diabetic Wound Care",
        "Face Fracture Care",
        "Pilonidal Sinus Surgery",
        "Bed Sore Surgery"
      ],
    },
    {
      name: "Vascular Surgery",
      links: ["Laser Treatment", "Re-Implantation", "A.V. Fistula Surgery", "Varicose Veins Surgery"],
    },
    {
      name: "Hand Surgery",
      links: ["Accident Cuts", "Machine Injuries", "Hand Lumps"],
    },
    {
      name: "Minor Surgery",
      links: ["Toenail Surgery", "Body Lumps Removal", "Corn Removal", "Ear Lobe Repair"],
    },

    { name: "Gallery", links: ["Before & After"] },
  ];

  const handleDropdownToggle = (idx) => {
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  // Helper function to normalize strings for URL
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <NavLink to="/" onClick={handleLinkClick}>
          <img src="/wellnessIcon.png" alt="Wellness Logo" />
        </NavLink>

        <div className={style.contactInformation}>
          <p className={style.contact}>
            <a href="tel:+919322901735" className={style.contactLink}>
              <FiPhoneCall className={style.contactIcons} /> +919322901735
            </a>
          </p>

          <p className={style.contact}>
            <a
              href="mailto:support@healthcare.com"
              className={style.contactLink}
            >
              <AiTwotoneMail className={style.contactIcons} />{" "}
             Wellnesssurgeon@gmail.com
            </a>
          </p>
        </div>

        <button
          className={style.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className={style.purple} />
          ) : (
            <FaBars className={style.white} />
          )}
        </button>
      </div>

      <ul className={`${style.navLinks} ${menuOpen ? style.active : ""}`}>
        <li className={style.home}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.activeLink : "")}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
        </li>

        {/* Dropdown Menus */}
        {menus.map((menu, idx) => (
          <li
            key={idx}
            className={style.dropdown}
            onMouseEnter={() =>
              window.innerWidth > 992 && setActiveDropdown(idx)
            }
            onMouseLeave={() =>
              window.innerWidth > 992 && setActiveDropdown(null)
            }
          >
            <button
              className={style.dropbtn}
              onClick={() => handleDropdownToggle(idx)}
            >
              {menu.name} <span className={style.arrow}>▼</span>
            </button>

            <ul
              className={`${style.dropdownContent} ${
                activeDropdown === idx ? style.activeDropdown : ""
              }`}
            >
              {menu.links.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={`/${normalize(menu.name)}/${normalize(link)}`}
                    className={({ isActive }) =>
                      isActive ? style.activeLink : ""
                    }
                    onClick={handleLinkClick}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}

        <li>
          <NavLink
            to="/BookingAppointment"
            className={({ isActive }) =>
              isActive
                ? `${style.bookingBtn} ${style.activeLink}`
                : style.bookingBtn
            }
            onClick={handleLinkClick}
          >
            Book Appointment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

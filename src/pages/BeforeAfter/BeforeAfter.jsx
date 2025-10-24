import React from "react";
import style from "./BeforeAfter.module.css";
import galleryBanner from "../../Images/BannerImages/gallerBanner.jpg";

// Before After images
import laserBA from "../../Images/BannerImages/laseBF.jpeg";
import reImplaBA from "../../Images/BannerImages/reImplaBA.png";
import nerves from "../../Images/BannerImages/nervesBA.png";
import accidentCut from "../../Images/BannerImages/accidentCutBA.png";
import handInjuBA from "../../Images/BannerImages/handInjuBA.jpeg";
import handLumpsBA from "../../Images/BannerImages/handLumpsBA.jpeg";
import varicose from "../../Images/BannerImages/varicose.jpeg";
import avfistula from "../../Images/BannerImages/avFistula.png";

import toinailBA from "../../Images/BannerImages/toinailBA.png";
import bodyLumpBA from "../../Images/BannerImages/bodyLumpBA.jpeg";
import wartBA from "../../Images/BannerImages/wartBA.png";
import earBA from "../../Images/BannerImages/earBA.jpg";

import burnBA from "../../Images/BannerImages/burnBA.png";
import woundBA from "../../Images/BannerImages/woundBA.png";
import faceFracBA from "../../Images/BannerImages/faceFracBA.png";
import pilonidalBA from "../../Images/BannerImages/pilonidalBA.png";

import gyneBA from "../../Images/BannerImages/gyneBA.png";
import liposuctionBA from "../../Images/BannerImages/liposuctionBA.jpg";
import hairTransplantBA from "../../Images/BannerImages/hairTransplantBA.jpeg";

// Multiple sections and images with links
import { Link } from "react-router-dom";
const sections = [
  {
    title: "Vascular Surgery Before & After",
    images: [
      { src: laserBA, link: "/vascular-surgery/laser" },
      { src: reImplaBA, link: "/vascular-surgery/re-implantation" },
      { src: avfistula, link: "/vascular-surgery/a.v.-fistula-surgery" },
      { src: varicose, link: "/vascular-surgery/varicose-veins-surgery" },
    ],
  },
  {
    title: "Hand Surgery",
    images: [
      { src: accidentCut, link: "/hand-surgery/accident-cuts" },
      { src: handInjuBA, link: "/hand-surgery/machine-injuries" },
      { src: handLumpsBA, link: "/hand-surgery/hand-lumps" },
    ],
  },
  {
    title: "Minor Surgery",
    images: [
      { src: toinailBA, link: "/minor-surgery/toenail" },
      { src: bodyLumpBA, link: "/minor-surgery/body-lumps" },
      { src: wartBA, link: "/minor-surgery/warts" },
      { src: earBA, link: "/minor-surgery/ear-repair" },
    ],
  },
  {
    title: "Reconstructive Surgery",
    images: [
      { src: burnBA, link: "/reconstructive-surgery/burn-treatment" },
      { src: woundBA, link: "/reconstructive-surgery/diabetic-wound-care" },
      { src: faceFracBA, link: "/reconstructive-surgery/face-fracture-care" },
      {
        src: pilonidalBA,
        link: "/reconstructive-surgery/pilonidal-sinus-surgery",
      },
    ],
  },
  {
    title: "Cosmetic Surgery",
    images: [
      { src: gyneBA, link: "/cosmetic-surgery/gynecomastia" },
      { src: liposuctionBA, link: "/cosmetic-surgery/liposuction" },
      { src: hairTransplantBA, link: "/cosmetic-surgery/hair-transplant" },
    ],
  },
];

function BeforeAfter() {
  return (
    <>
      {/* Banner Section */}
      <div className={style.bannerSection} role="banner">
        <img
          src={galleryBanner}
          alt="Clinic Before & After Gallery Banner"
          className={style.bannerImg}
          loading="lazy"
        />
        <div className={style.bannerOverlay}>
          <h1 className={style.h1}>Before & After Gallery</h1>
        </div>
      </div>

      {/* Gallery Sections */}
      {sections.map((section, idx) => (
        <section
          key={idx}
          className={style.imagesGallery}
          aria-labelledby={`section-${idx}`}
        >
          <h2 id={`section-${idx}`} className={style.heading}>
            {section.title}
          </h2>
          <div className={style.gallery}>
            {section.images.map((item, i) => (
              <div key={i} className={style.box}>
                <img
                  src={item.src}
                  alt={`${section.title} Image ${i + 1}`}
                  className={style.image}
                  loading="lazy"
                />
              <Link to={item.link} className={style.viewBtn}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default BeforeAfter;

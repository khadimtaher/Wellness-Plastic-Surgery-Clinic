import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import style from "./Home.module.css";

// Hero Banners
import banner1 from "../../Images/welnessBanner.jpeg";
import banner2 from "../../Images/wellnessBanner2.jpeg";
// import banner3 from "../../Images/wellnessBanner3.jpeg";
import banner3 from "../../Images/BannerImages/minorSurgeryBanner.jpg";
import banner4 from "../../Images/BannerImages/handSurBanner.jpeg";

import banner5 from "../../Images/BannerImages/comprehensiveCosmetic.jpeg";

// Signature Treatments
import img1 from "../../Images/img1.webp";

import img2 from "../../Images/img2.webp";
import img3 from "../../Images/img3.webp";
import img5 from "../../Images/img5.jpg";
import img6 from "../../Images/img6.jpg";
import img7 from "../../Images/img7.webp";

// slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// our services
import img8 from "../../Images/img8.webp";
import img9 from "../../Images/img9.webp";
import img10 from "../../Images/img10.webp";
import img11 from "../../Images/img11.webp";
import img12 from "../../Images/img12.webp";
import img13 from "../../Images/img13.webp";

// vasluar surgery section
import laser from "../../Images/laser.jpg";
import re_impl from "../../Images/reImplant.jpeg";
import avfistula from "../../Images/avFistula.jpeg";
import varicoseveins from "../../Images/varicoseVeins.jpeg";

// Hand Surgery section
import hand_cut from "../../Images/hand_cut.jpg";
import hand_lumps from "../../Images/hand_lump.jpg";
import machine_inju from "../../Images/machineInjuries.jpg";

// Minor surgery section
import toenail from "../../Images/toenaill.jpeg";

import warts from "../../Images/warts.jfif";
import body_lumps from "../../Images/body_lumps.jpg";
import ear_repair from "../../Images/ear_repair.jfif";

// Reconstructive surgery section
import burnleg from "../../Images/burnHand.png";
import diabetic from "../../Images/diabetic.jpg";
import face_fracture from "../../Images/faceFracture.png";
import pilonidal from "../../Images/pilonidalSinus.jfif";
import bedSore from "../../Images/bedSore.png";

// Cosmetic surgery section
import gynaecosmatic from "../../Images/gynaecosmatic.jpg";
import lipocustion from "../../Images/liposuction.jpg";
import hair_transplant from "../../Images/hair_transplant.jpeg";
import rhinoplasty from "../../Images/rhinoplasty.jpg";
import breastImplants from "../../Images/breastImplants.png";
import breastReduction from "../../Images/breastReduction.png";
// before and after image
import beforafter from "../../Images/gynaecosmatic.jpg";
// brofly about icons
import icon1 from "../../Images/icon1.webp";
import icon2 from "../../Images/icon2.webp";
import icon3 from "../../Images/icon3.webp";
import icon4 from "../../Images/icon4.webp";
import Feedback from "../../components/Feedback/Feedback";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";

import drImage from "../../Images/drImg.jpeg";
import drImage2 from "../../Images/drImg2.jpeg";

const slides = [
  {
    image: banner1,
    heading: "Wellness Plastic Surgery Center",
    text: "Providing world-class healthcare services with a touch of care.",
  },
  {
    image: banner2,
    heading: "Hair Transplant",
    text: "Restore natural hair and confidence with advanced, minimally invasive hair transplant techniques for permanent, natural-looking results.",
  },
  {
    image: banner3,
    heading: "Minor Surgery",
    text: "We provide safe and quick minor surgeries including hand injury repair, abscess drainage, nail and skin procedures. All treatments are performed under local anesthesia with minimal discomfort and fast recovery.",
  },
  //   {
  //   image: banner4,
  //   heading: "Liquid Face Lift",
  //   text: "Rejuvenate and lift your facial features instantly using non-surgical injectable treatments for a youthful, refreshed appearance.",
  // },

  {
    image: banner4,
    heading: "Hand Surgery",
    text: "We provide expert hand surgery for injuries, fractures, and soft tissue conditions. Our goal is to restore hand function with minimal pain and faster recovery.",
  },
  {
    image: banner5,
    heading: "Comprehensive Cosmetic Treatments",
    text: "We offer comprehensive cosmetic treatments including HydraFacial, MDA (Microdermabrasion), Botox, Fillers, Peels, PRP and more. Our advanced procedures are designed to rejuvenate your skin and enhance natural beauty safely and effectively.",
  },
];

const services1 = [
  {
    img: img8,
    title: "Skin",
    description:
      "Range of skin treatments for pigmentation, acne, and melasma. Remove skin tags, freckles, and imperfections for healthy, glowing skin.",
  },
  {
    img: img9,
    title: "Hair",
    description:
      "Advanced hair treatments for hair loss and thinning. Hair transplant and regrowth solutions for strong, natural-looking hair.",
  },
  {
    img: img10,
    title: "Aesthetics",
    description:
      "Enhance your appearance with dermal fillers, laser toning, lip fillers, carbon peel, microblading, and thread lift for youthful skin.",
  },
  {
    img: img11,
    title: "Cosmetic Surgery",
    description:
      "Comprehensive surgeries like rhinoplasties, breast implants & reduction, vitiligo surgery for balanced & confident look.",
  },

  {
    img: img13,
    title: "Body Contouring",
    description:
      "Achieve toned physique with surgical methods such as liposuction, abdominoplasty, butt lifts, mommy-makeovers",
  },
];
// Vascular surgery section
const services2 = [
  {
    img: laser,
    title: "Laser Treatment",
    description:
      "Advanced laser treatment for safe, effective, and minimally invasive solutions to improve skin health and appearance.",
  },
  {
    img: re_impl,
    title: "Re-Implantation",
    description:
      "A surgical procedure to reattach a severed body part (like a finger, hand, or leg) or to place an extracted tooth back into its original socket. The goal is to restore normal function, appearance, and blood circulation (for body parts) or dental function (for teeth).",
  },
  {
    img: avfistula,
    title: "A.V. Fistula Surgery",
    description:
      "A procedure to connect an artery and a vein, providing reliable access for dialysis. It helps patients with kidney failure receive regular hemodialysis safely.",
  },
  {
    img: varicoseveins,
    title: "Varicose Veins Surgery",
    description:
      "Swollen, twisted veins usually appearing in the legs due to weakened or damaged valves. They can cause pain, heaviness, and discomfort, and may require lifestyle changes or surgical treatment for relief.",
  },
];

// Hand surgery section
const services3 = [
  {
    img: hand_cut,
    title: "Accident Cuts",
    description:
      "Specialized surgical care for deep accident cuts, ensuring proper wound cleaning, repair, and healing to restore normal function and appearance.",
  },
  {
    img: machine_inju,
    title: "Machine Injuries",
    description:
      "Comprehensive treatment for severe machine-related injuries with advanced surgical techniques to save and restore damaged hands or fingers.",
  },
  {
    img: hand_lumps,
    title: "Hand Lumps",
    description:
      "Expert diagnosis and removal of hand lumps or swellings to relieve discomfort, improve hand function, and restore natural appearance.",
  },
];

// misor surgery section
const services4 = [
  {
    img: toenail,
    title: "Toenail Surgery",
    description:
      "Treatment for painful, infected, or ingrown toenails with minor surgical procedures that provide permanent relief and restore comfort in walking.",
  },
  {
    img: body_lumps,
    title: "Body Lumps Removal",
    description:
      "Safe and effective removal of unwanted body lumps (like cysts or lipomas) through minimally invasive surgery, ensuring both health and aesthetics.",
  },
  {
    img: warts,
    title: "Corn Removal",
    description:
      "Safe and effective treatment to remove painful corns, relieving discomfort and restoring smooth, healthy skin.",
  },
  {
    img: ear_repair,
    title: "Ear Lobe Repair",
    description:
      "Cosmetic and reconstructive solutions for damaged or torn earlobes, restoring natural shape and symmetry for a confident appearance.",
  },
];

// Reconstructive surgery section
const services5 = [
  {
    img: burnleg,
    title: "Burn Surgery",
    description:
      "We provide advanced burn care solutions to minimize scarring, prevent infection, and restore skin health with expert surgical and non-surgical approaches.",
  },
  {
    img: diabetic,
    title: "Diabetic Wound Care",
    description:
      "Specialized wound management for diabetic patients, focusing on fast healing, infection control, and prevention of long-term complications.",
  },
  {
    img: face_fracture,
    title: "Face Fracture Care",
    description:
      "Expert treatment of facial bone fractures to restore natural appearance and function, ensuring both medical safety and aesthetic balance.",
  },
  {
    img: pilonidal,
    title: "Pilonidal Sinus Surgery",
    description:
      "Safe and effective surgical solutions for pilonidal sinus, aimed at quick recovery, pain relief, and prevention of recurrence.",
  },
  {
    img: bedSore,
    title: "Bed Sore Surgery",
    description:
      "A surgical procedure to remove dead or infected tissue caused by prolonged pressure ulcers (bed sores). It helps promote healing, prevent infection, and restore healthy skin and tissue.",
  },
];

// Cosmetic sugery section 6
const services6 = [
  {
    img: gynaecosmatic,
    title: "Gynecomastic Surgery",
    description:
      "We provide expert cosmetic gynecology solutions designed to restore confidence, enhance feminine wellness, and improve overall comfort. Our advanced techniques ensure safe, discreet, and personalized care.",
  },
  {
    img: lipocustion,
    title: "Liposuction",
    description:
      "Our liposuction treatments help reshape and contour the body by safely removing stubborn fat deposits. With modern methods, we focus on achieving natural-looking results and boosting your self-confidence.",
  },
  {
    img: hair_transplant,
    title: "Hair Transplant",
    description:
      "We offer advanced hair transplant procedures that restore natural hair growth with precision and care. Our minimally invasive techniques ensure long-lasting, fuller results for a confident appearance.",
  },
  {
    img: rhinoplasty,
    title: "Rhinoplasty",
    description:
      "A surgical procedure to reshape or reconstruct the nose, improving its appearance and/or function. It can correct breathing problems, repair deformities, or enhance facial harmony.",
  },
  {
    img: breastImplants,
    title: "Breast Implants",
    description:
      "Breast Implants (Augmentation): A cosmetic surgery that enhances breast size and shape using implants, helping achieve a fuller and more balanced appearance",
  },
  {
    img: breastReduction,
    title: "Breast Reduction",
    description:
      "Breast Reduction Surgery: A surgical procedure to remove excess breast tissue and fat, reducing breast size to relieve discomfort and improve body proportion.",
  },
];

// Our Signature Treatments
const images = [
  {
    src: img1,
    heading: "Wellness Lighten Up",
    description:
      "Target pigmentation and uneven skin tone with advanced treatments for a radiant, glowing complexion.",
  },
  {
    src: img2,
    heading: "Targeted Acne Therapy",
    description:
      "Treat active acne effectively with our Wellness BB Treatment, designed to clear skin without addressing post-acne issues.",
  },
  {
    src: img3,
    heading: "Wellness Master Blaster",
    description:
      "Revitalize skin with dual-laser technology to reduce fine lines, wrinkles, and uneven texture.",
  },
  {
    src: img5,
    heading: "Dermal Fillers",
    description:
      "Non-surgical injectables to restore volume, smooth lines, and enhance facial contours with natural results.",
  },
  {
    src: img6,
    heading: "Laser Treatment",
    description:
      "Brighten and rejuvenate skin with advanced laser technology for safe, efficient results.",
  },
  {
    src: img7,
    heading: "Wellness Rise and Shine",
    description:
      "Nourish hair with therapy that restores shine, smoothness, and vitality from root to tip.",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Carousel Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Slider settings for Mobile Gallery
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className={style.home}>
      {/* Hero Carousel */}
      <div className={style.carousel}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`${style.slide} ${
              idx === currentSlide ? style.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={style.overlay}></div>
            <div className={style.slideContent}>
              <h2>{slide.heading}</h2>
              <p>{slide.text}</p>
              <NavLink to="/BookingAppointment" className={style.bookingBtn}>
                Book an Appointment
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      {/* Dr Sanket container */}
      <div className={style.doctoresContainer1}>
        {/* Left Content */}
        <div className={style.drbanner1}>
          <h1>Enhance Beauty</h1>
          <h1>Restoring Confidence</h1>
          <p>
            Personalized aesthetic solutions to help you look and feel your best
          </p>
          <div>
            <h1>Dr. Sumit Sudhir Hadgaonkar </h1>
            <p>MBBS MS MCh Plastic Surgery</p>
            <p>
              Consultant Plastic, Reconstructive, Cosmetic, Hand and
              Microvascular Surgeon{" "}
            </p>
          </div>
          <a className={style.knowMore1} href="/about/dr-sumit-sudhir">
            Know More...
          </a>
        </div>
        {/* Right Image */}
        <div className={style.drDetails1}>
          <img src={drImage} alt="Dr. Sanket" className={style.drImage1} />
        </div>
      </div>

      {/* Dr Vrushali container */}
      <div className={style.doctoresContainer2}>
        {/* Left Image */}
        <div className={style.drDetails2}>
          <img src={drImage2} alt="Dr. Vrushali" className={style.drImage2} />
        </div>

        {/* Right Content */}
        <div className={style.drbanner2}>
          <h1>Enhance Beauty</h1>
          <h1>Restoring Confidence</h1>
          <p>
            Tailored cosmetic care designed to enhance your natural beauty and
            confidence.
          </p>
          <div>
            <h1>Dr Vrushali Joshi Hadgaonkar</h1>
            <p>BDS, PGDCC (Mumbai)</p>
            <p>Dental and Cosmetic Surgeon</p>
          </div>
          <a className={style.knowMore2} href="/about/dr-vrushali-joshi">
            Know More...
          </a>
        </div>
      </div>

      {/* Our Services Section */}
      <section className={style.servicesSection}>
        <h2 className={style.heading}>Our Most Requested Services</h2>
        <div className={style.servicesWrapper}>
          {services1.map((service, idx) => (
            <div key={idx} className={style.serviceCard}>
              <div className={style.cardInner}>
                <div className={style.cardFront}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
                <div className={style.cardBack}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* cosmatic surgery section 5  */}
      <section className={style.servicesSection}>
        <h2 className={style.heading}>Cosmetic Surgery Services </h2>
        <div className={style.servicesWrapper}>
          {services6.map((service, idx) => (
            <div key={idx} className={style.serviceCard}>
              <div className={style.cardInner}>
                <div className={style.cardFront}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
                <div className={style.cardBack}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reconstructive surgery section 4 */}
      <section className={style.servicesSection}>
        <h2 className={style.heading}>Reconstructive Surgery Services </h2>
        <div className={style.servicesWrapper}>
          {services5.map((service, idx) => (
            <div key={idx} className={style.serviceCard}>
              <div className={style.cardInner}>
                <div className={style.cardFront}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
                <div className={style.cardBack}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* vascular surgery section 1 */}
      <section className={style.servicesSection}>
        <h2 className={style.heading}>Vascular Surgery Services </h2>
        <div className={style.servicesWrapper}>
          {services2.map((service, idx) => (
            <div key={idx} className={style.serviceCard}>
              <div className={style.cardInner}>
                <div className={style.cardFront}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
                <div className={style.cardBack}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hand surgery section 2  */}
      <section className={style.servicesSection}>
        <h2 className={style.heading}>Hand Surgery Services </h2>
        <div className={style.servicesWrapper}>
          {services3.map((service, idx) => (
            <div key={idx} className={style.serviceCard}>
              <div className={style.cardInner}>
                <div className={style.cardFront}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
                <div className={style.cardBack}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* minor surgery section 3 */}
      <section className={style.servicesSection}>
        <h2 className={style.heading}>Minor Surgery Services </h2>
        <div className={style.servicesWrapper}>
          {services4.map((service, idx) => (
            <div key={idx} className={style.serviceCard}>
              <div className={style.cardInner}>
                <div className={style.cardFront}>
                  <img src={service.img} alt={service.title} />
                  <h3>{service.title}</h3>
                </div>
                <div className={style.cardBack}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Treatments */}
      <h1 className={style.our}>Our Cosmetology Treatments</h1>
      <div className={style.galleryWrapper}>
        <div className={style.desktopGrid}>
          {images.map((img, idx) => (
            <div key={idx} className={style.imageContainer}>
              <img src={img.src} alt={img.heading} />
              <div className={style.overlay}>
                <h3>{img.heading}</h3>
                <p>{img.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={style.mobileSlider}>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx} className={style.imageContainer}>
                <img src={img.src} alt={img.heading} />
                <div className={style.overlay}>
                  <h3>{img.heading}</h3>
                  <p>{img.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={style.whyChooseContainer}>
        <h1>Why Choose Dr. Sumit Sudhir</h1>
        {/* Left Content */}
        <div className={style.whyChooseContent}>
          <h2>Trusted Cosmetic & Plastic Surgery in Latur</h2>
          <p>
            Choosing the right surgeon is one of the most important decisions
            when it comes to enhancing your beauty and restoring your
            confidence. With years of experience, Dr. Sumit Sudhir combines
            advanced medical knowledge, surgical precision, and an artistic
            approach to deliver natural and safe results. Each treatment is
            carefully customized according to individual needs, ensuring that
            patients not only look better but also feel healthier and more
            confident.
            <br />
            <br />
            At our state-of-the-art facility, we focus on patient comfort,
            safety, and long-lasting outcomes. From consultation to recovery,
            every step is handled with utmost care and professionalism. Our
            dedication lies in offering transparent guidance, advanced
            technology, and compassionate support so that you can make informed
            choices about your health and appearance.
          </p>
        </div>

        {/* Right Side Image */}
        <div className={style.whyChooseImage}>
          <img src={beforafter} alt="Why Choose Dr Sumit Sudhir" />
        </div>
      </div>

      {/* Briefly About Section */}
      <section className={style.briflyAbout}>
        <div className={style.aboutContainer}>
          <h1 className={style.sectionTitle}>About Us</h1>
          <img
            src="/wellnessIcon.jpeg"
            alt="About"
            className={style.mainImage}
          />
          <h2 className={style.subHeading}>
            Comprehensive & Personalized Wellness Solutions
          </h2>
          <p className={style.description}>
            Wellness Plastic & Cosmetic Surgery Center is your trusted
            destination for comprehensive skin, body, and cosmetic solutions.
            Our holistic approach, led by skilled plastic surgeons,
            dermatologists, nutritionists, and therapists, ensures safe,
            effective treatments that enhance your appearance and well-being.
          </p>
          <div className={style.circles}>
            {[
              { icon: icon1, title: "Holistic Approach" },
              { icon: icon2, title: "US-FDA Approved" },
              { icon: icon3, title: "Patient Safety" },
              { icon: icon4, title: "Unmatched Results" },
            ].map((item, idx) => (
              <div key={idx} className={style.circleItem}>
                <div className={style.circle}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p className={style.circleTitle}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <h1 className={style.feedback}>Patients Feedback</h1>
        <Feedback />
        <AppointmentForm />
      </div>
    </div>
  );
}

export default Home;

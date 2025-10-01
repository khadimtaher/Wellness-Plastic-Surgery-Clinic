import React, { useEffect } from "react";
import style from "./DrSumit.module.css";
import bannerImg from "../../Images/DrSumit.jpg";
import { TfiEmail } from "react-icons/tfi";
import { FaCircleCheck } from "react-icons/fa6";
import { CiHospital1, CiLocationOn, CiClock2, CiPhone } from "react-icons/ci";
import Feedback from "../../components/Feedback/Feedback";

// videos section
import Video1 from "../../Images/IntroVideo1.mp4";
import Video2 from "../../Images/IntroVideo2.mp4";

function DrSumit() {
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
        <h2>Know More About Dr. Sumit S Hadgaonkar</h2>
        <p className={style.details}>
          <strong>
            Dr. Sumit S Hadgaonkar — MBBS, MS, MCH (Plastic Surgery), Consultant
            Plastic, Reconstructive, Cosmetic, Hand and Microvascular Surgeon
          </strong>
          <br />
          <br />
          Dr. Sumit S Hadgaonkar is a highly accomplished and compassionate
          Plastic & Cosmetic Surgeon with an impressive academic background and
          years of clinical excellence. He completed his{" "}
          <strong>MBBS (2004–2010)</strong> from Government Medical College,
          Latur, followed by <strong>MS in General Surgery (2011–2014)</strong>{" "}
          at RIMS, Imphal. He further honed his expertise with{" "}
          <strong>MCH in Plastic Surgery (2015–2018)</strong> from the
          prestigious Sion Hospital, Mumbai. To gain advanced specialization, he
          pursued a{" "}
          <strong>
            Fellowship in Microvascular Surgery & Onco Reconstruction
            (2018–2021)
          </strong>
          at Tata Memorial Hospital, Mumbai.
          <br />
          <br />
          With this strong academic foundation and extensive hands-on training,
          Dr. Sumit S brings unmatched expertise in a wide range of procedures.
          His areas of specialization include reconstructive surgeries for
          trauma and burns, complex microvascular procedures, and cosmetic
          enhancements such as rhinoplasty, liposuction, facelifts, and body
          contouring. He also offers advanced skin rejuvenation and anti-aging
          treatments, blending surgical precision with aesthetic artistry.
          <br />
          <br />
          Patients admire his ability to explain procedures clearly, design
          personalized treatment plans, and deliver safe, natural-looking
          results. For Dr. Sumit, cosmetic surgery is not just about external
          appearance but also about restoring confidence, improving self-esteem,
          and enhancing the overall quality of life. His patient-first approach,
          combined with state-of-the-art techniques, ensures that every
          individual feels comfortable, informed, and confident throughout their
          journey.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className={style.whyChoose}>
        <h2>Why Choose Dr. Sumit S Hadgaonkar?</h2>

        <p className={style.details}>
          Choosing the right plastic and cosmetic surgeon is one of the most
          important decisions you make when it comes to enhancing your
          appearance and confidence. <strong>Dr. Sumit S Hadgaonkar</strong>, a
          highly reputed and skilled Plastic & Cosmetic Surgeon, is known for
          delivering exceptional results through precision, advanced techniques,
          and patient-first care. With years of hands-on experience, he has
          helped countless patients achieve natural-looking transformations
          while maintaining the highest standards of safety and care. His
          approach blends medical expertise with artistic vision, ensuring
          results that not only look beautiful but also feel authentic.
        </p>

        <div className={style.whyGrid}>
          <div className={style.whyCard}>
            <h3>✔ Expertise</h3>
            <p>
              With extensive training and years of practical experience in
              Plastic & Cosmetic Surgery, Dr. Sumit S Hadgaonkar is an expert in
              procedures ranging from reconstructive surgeries to advanced
              cosmetic enhancements. His knowledge and precision ensure that
              patients receive world-class care with excellent outcomes.
            </p>
          </div>

          <div className={style.whyCard}>
            <h3>✔ Advanced Techniques</h3>
            <p>
              Staying updated with the latest advancements in medical
              technology, he employs modern surgical and non-surgical techniques
              to deliver safe, effective, and minimally invasive results. Every
              treatment is designed to ensure faster recovery and natural
              aesthetics.
            </p>
          </div>

          <div className={style.whyCard}>
            <h3>✔ Patient-Centered Care</h3>
            <p>
              Dr. Sumit believes in understanding each patient’s unique goals
              and concerns. He designs personalized treatment plans that are
              tailored to individual needs, ensuring comfort, confidence, and
              complete satisfaction at every step of the journey.
            </p>
          </div>

          <div className={style.whyCard}>
            <h3>✔ Trusted Reputation</h3>
            <p>
              Known for his compassionate approach and successful track record,
              Dr. Sumit S Hadgaonkar has earned the trust of patients across the
              region. His reputation for delivering excellent results and
              prioritizing patient well-being makes him one of the most
              sought-after surgeons in the field of Plastic & Cosmetic Surgery.
            </p>
          </div>
        </div>
      </div>

      {/* Education & Experience Section */}
      <h2 className={style.eduHeading}>Education & Experience</h2>
      <div className={style.educationSection}>
        <div className={style.educationGrid}>
          <div className={style.educationCard}>
            <h3>
              <FaCircleCheck className={style.eduIcons} /> MBBS (2004–2010)
            </h3>
            <p>
              MBBS completed from{" "}
              <strong>Government Medical College, Latur</strong>, where he built
              a strong foundation in medical sciences and clinical care.
            </p>
          </div>

          <div className={style.educationCard}>
            <h3>
              <FaCircleCheck className={style.eduIcons} /> MS (2011–2014)
            </h3>
            <p>
              Master of Surgery in <strong>General Surgery</strong> at{" "}
              <strong>RIMS, Imphal</strong>, where he gained in-depth surgical
              knowledge and practical expertise.
            </p>
          </div>

          <div className={style.educationCard}>
            <h3>
              <FaCircleCheck className={style.eduIcons} /> MCH Plastic Surgery
              (2015–2018)
            </h3>
            <p>
              Super-specialization in <strong>Plastic Surgery</strong> from{" "}
              <strong>
                Lokmanya Tilak Municipal Medical College & Sion Hospital, Mumbai
              </strong>
              , mastering advanced reconstructive and cosmetic procedures.
            </p>
          </div>

          <div className={style.educationCard}>
            <h3>
              <FaCircleCheck className={style.eduIcons} /> Fellowship
              (2018–2021)
            </h3>
            <p>
              Fellowship in{" "}
              <strong>Microvascular Surgery and Oncore Construction</strong>
              from <strong>Tata Memorial Hospital, Parel, Mumbai</strong>, one
              of the most prestigious institutions in India for advanced
              surgical training.
            </p>
          </div>
        </div>
      </div>

      {/* Doctor Details Section */}
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

      <h1 className={style.our_videos}>Our Videos</h1>
      <div className={style.videoContainer}>
        {/* First Video */}
        <div className={style.videoWrapper}>
          <video
            className={style.responsiveVideo}
            src={Video1}
            loop
            muted
            playsInline
            controls
          />
        </div>

        {/* Second Video */}
        <div className={style.videoWrapper}>
          <video
            className={style.responsiveVideo}
            src={Video2}
            loop
            muted
            playsInline
            controls
          />
        </div>
      </div>

      <div className={style.feedbackContent}>
        <h1 className={style.Feedback}>Patients Feedback</h1>
        <Feedback />
      </div>
    </div>
  );
}

export default DrSumit;

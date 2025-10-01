import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./DynamicPage.module.css";
import PageNotFound from "../../PageNotFound/PageNotFound";
// book an appointment
import AppointmentForm from "../../../components/AppointmentForm/AppointmentForm";
import FeedbackCarousel from "../../../components/Feedback/Feedback";

// laserBanner
import laserBanner from "../../../Images/BannerImages/laserBanner.jpg";
import re_implantationBanner from "../../../Images/BannerImages/re_implantationBanner.jpeg";
import nerveBanner from "../../../Images/BannerImages/nerve&veinBanner.jpeg";
import handBanner from "../../../Images/BannerImages/handBanner.jpeg";
import machinHandBanner from "../../../Images/BannerImages/machinehandBanner.jpg";
import handLumpsBanner from "../../../Images/BannerImages/handLumpsBanner.jpg";
import toenailBanner from "../../../Images/BannerImages/toenailBanner.jpeg";
import bodyLumpBanner from "../../../Images/BannerImages/bodyLumpBanner.jpg";
import wartsBanner from "../../../Images/BannerImages/wartsBanner.jpeg";
import earBanner from "../../../Images/BannerImages/earBanner.jpg";
import reConstructiveBanner from "../../../Images/BannerImages/reConstructiveBanner.jpeg";
import woundBanner from "../../../Images/BannerImages/woundBanner.jpeg";
import faceBanner from "../../../Images/BannerImages/faceBanner.jpg";
import aboutBanner from "../../../Images/BannerImages/aboutBanner.png";
import liposuctionBanner from "../../../Images/BannerImages/liposuctionBanner.jpeg";
import pilonidalImg from "../../../Images/BannerImages/pilonidalSinusImg.png";
import pilonidalBanner from "../../../Images/BannerImages/pilonidalBanner.jpeg";
import bedSoreBanner from "../../../Images/BannerImages/bedsoreBanner.jpeg";
import bedSoreImg from "../../../Images/BannerImages/bedsoreImg.jpg";

import gynemastiaBanner from "../../../Images/BannerImages/gynemastiaBanner.jpeg";
import hairTransplant from "../../../Images/BannerImages/hairTransplantBanner.jpg";

// berof and after images
import face_BA from "../../../Images/BannerImages/face_BA.jpg";
import leg_BA from "../../../Images/BannerImages/leg_BA.jpg";
import laserImg from "../../../Images/BannerImages/laserImg.jpeg";
import reimpl from "../../../Images/BannerImages/reimpla.jpeg";
import avFistulaBanner from "../../../Images/BannerImages/avfistulaBanner.jpeg";
import avFistulaImg from "../../../Images/BannerImages/avfistulaImg.jpg";
import varicoseVeinsBanner from "../../../Images/BannerImages/varicoseVeinsBanner.jpeg";
import varicoseVeinsImg from "../../../Images/BannerImages/varicoseVeins.jpg";

import machin_inju from "../../../Images/machine_inju.jpeg";
import machineInjuHnad from "../../../Images/BannerImages/machineInjuHnad.jpeg";
import handLumpsImg from "../../../Images/BannerImages/hand_lumpImg.png";
import toenailimg from "../../../Images/BannerImages/toenailimg.jpeg";
import bodyLumpimg from "../../../Images/BannerImages/legLumps.jpeg";
import cornRemovalBanner from "../../../Images/BannerImages/cornRemovalBanner.jpeg";
import cornRemovalImg from "../../../Images/BannerImages/cornRemovalImg.png";

import earimg from "../../../Images/BannerImages/earimg.png";
import burnImg from "../../../Images/burnHand.png";
import woundImg from "../../../Images/BannerImages/woundImg.jpg";
import faceImg from "../../../Images/BannerImages/faceImg.jpg";

import gyneImg from "../../../Images/BannerImages/gyneImg.jpeg";
import liposuctionImg from "../../../Images/BannerImages/liposuctionImg.jpg";
import hairTransplantImg from "../../../Images/BannerImages/hairTransplantImg.jpg";

// BA
import laserBA from "../../../Images/BannerImages/laseBF.jpeg";
import reImplaBA from "../../../Images/BannerImages/reImplaBA.png";
import varicose from "../../../Images/BannerImages/varicose.jpeg";
import avFistula from "../../../Images/BannerImages/avFistula.png";

import nervesBA from "../../../Images/BannerImages/nervesBA.png";
import accidentCutBA from "../../../Images/BannerImages/accidentCutBA.png";
import handInjuBA from "../../../Images/BannerImages/handInjuBA.jpeg";
import handLumpsBA from "../../../Images/BannerImages/handLumpsBA.jpeg";
import toinailBA from "../../../Images/BannerImages/toinailBA.png";
import bodyLumpBA from "../../../Images/BannerImages/bodyLumpBA.jpeg";
import wartBA from "../../../Images/BannerImages/wartBA.png";
import earBA from "../../../Images/BannerImages/earBA.jpg";

import burnBA from "../../../Images/BannerImages/burnBA.png";
import woundBA from "../../../Images/BannerImages/woundBA.png";
import faceFracBA from "../../../Images/BannerImages/faceFracBA.png";
import rhinoplastyBanner from "../../../Images/BannerImages/rhinoplasty.jpeg";
import rhinoplastyImg from "../../../Images/BannerImages/rhinoplastyImg.jpg";
import breastImplantBanner from "../../../Images/BannerImages/breastImplantsBanner.jpeg";
import breastImplantImg from "../../../Images/BannerImages/breastImplantsImg.jpg";
import breastReductionBanner from "../../../Images/BannerImages/breastReductionBanner.jpeg";
import breastReductionImg from "../../../Images/BannerImages/breastReductionImg.jpg";

import gyneBA from "../../../Images/BannerImages/gyneBA.png";
import liposuctionBA from "../../../Images/BannerImages/liposuctionBA.jpg";
import hairTransplantBA from "../../../Images/BannerImages/hairTransplantBA.jpeg";

// Menu structure
const menus = [
  { name: "About", links: ["Our Doctors", "about", "About Clinic"] },
  {
    name: "Vascular Surgery",
    links: [
      "Laser Treatment ",
      "Re-implantation",
      "A.V.Fistula Surgery",
      "Varicose Veins Surgery",
    ],
  },
  {
    name: "Hand Surgery",
    links: ["Accident Cuts", "Machine Injuries", "Hand Lumps"],
  },
  {
    name: "Minor Surgery",
    links: ["Toenail", "Body Lumps", "Warts", "Ear Repair"],
  },
  {
    name: "Reconstructive Surgery",
    links: [
      "Burn Treatment",
      "Diabetic Wound Care",
      "Face Fracture Care",
      "Pilonidal Sinus Surgery",
    ],
  },
  {
    name: "Cosmetic Surgery",
    links: [
      "Gynecomastia surgery",
      "Liposuction",
      "Hair Transplant",
      "Rhinoplasty",
      "Breast Implants",
      "Breast Reduction",
    ],
  },
  { name: "Gallery", links: ["Before & After", "Videos"] },
];

// Page-specific content
const pageContent = [
  // About
  {
    menu: "About",
    link: "Our Doctors",
    banner: aboutBanner,
    heading: "Meet Our Expert Doctors",
    paragraph:
      "Our team of highly experienced doctors provide personalized healthcare solutions to ensure your well-being.",
    cta: "Book an Appointment",
    details: {
      title: "Meet Our Expert Doctors",
      description:
        "Our team consists of highly skilled doctors dedicated to your health. We specialize in personalized treatment plans tailored to each patient. Our expertise spans various medical fields for comprehensive care. Advanced technology and compassionate care define our approach. Patients receive thorough consultations and ongoing support. Trust us for exceptional medical expertise and results.",
      sections: [
        {
          subHeading: "Before & After Results",
          images: [
            "/images/our-doctors-before.jpg",
            "/images/our-doctors-after.jpg",
          ],
        },
      ],
    },
  },
  {
    menu: "About",
    link: "About Clinic",
    banner: "/images/about-clinic.jpg",
    heading: "About Our Clinic",
    paragraph:
      "We offer state-of-the-art facilities and compassionate care to all our patients in a modern, comfortable environment.",

    details: {
      title: "About Our Clinic",
      description:
        "Our clinic features advanced facilities for top-quality medical care. We create a comfortable, welcoming environment for all patients. Our team is committed to compassionate and professional service. Modern technology ensures precise diagnostics and treatments. We prioritize patient satisfaction and well-being. Visit us for exceptional healthcare solutions.",
      sections: [
        {
          subHeading: "Before & After Results",
          images: [
            "/images/about-clinic-before.jpg",
            "/images/about-clinic-after.jpg",
          ],
        },
      ],
    },
  },
  // ----------------- VASCULAR SURGERY -----------------

  {
    menu: "Vascular Surgery",
    link: "Laser",
    banner: laserBanner,
    heading: "Advanced Laser Vascular Treatment",
    paragraph:
      "Our laser procedures ensure precise care, minimal recovery time, and outstanding results for vascular conditions.",
    cta: "Book an Appointment",
    details: {
      title: "Laser Vascular Treatments",
      description:
        "Laser Vascular Treatments have revolutionized the way vascular disorders are managed in modern medicine. These treatments employ focused laser energy to target abnormal or diseased blood vessels with precision. Unlike traditional surgical procedures, laser therapy is minimally invasive, which significantly reduces recovery time and the risk of complications. Patients often experience less discomfort during and after the procedure, making it a preferred choice for many. The technology works by delivering concentrated light to the affected vessels, which is absorbed by the blood or vessel walls, leading to coagulation and eventual closure of the vessel. This method is highly effective for treating conditions such as varicose veins, spider veins, port-wine stains, hemangiomas, and other vascular lesions. Each procedure is tailored to the individual’s specific condition, ensuring optimal results.",
      image: [laserImg],
      sections: [
        {
          subHeading: "Benefits of Laser Treatment",
          text: "Laser vascular treatments offer precise and minimally invasive solutions for abnormal blood vessels. Patients experience faster recovery times compared to traditional surgery, with minimal discomfort. These treatments are highly effective and safe when performed by qualified specialists. Laser therapy improves cosmetic appearance by reducing visible veins and vascular lesions. The procedure can be tailored to individual needs, ensuring optimal results and comfort. Overall, laser treatment enhances both medical outcomes and patient confidence.",
        },
        {
          subHeading: "Before & After Results",
          images: [laserBA],
        },
        {
          faqs: [
            {
              question: "Is laser vascular treatment painful?",
              answer:
                "The procedure is minimally invasive and performed under local anesthesia, so most patients experience little to no pain.",
            },
            {
              question: "How long is the recovery time?",
              answer:
                "Most patients resume normal activities within a day or two, with full recovery typically within a week.",
            },
            {
              question: "Are the results permanent?",
              answer:
                "For many conditions like spider veins, results are long-lasting, though new veins may develop over time.",
            },
            {
              question: "Who is a good candidate for laser treatment?",
              answer:
                "Patients with varicose veins, spider veins, or other vascular lesions are typically good candidates after a medical evaluation.",
            },
            {
              question: "Are there any side effects?",
              answer:
                "Minor side effects like redness or swelling may occur but usually resolve within a few days.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Vascular Surgery",
    link: "Laser Treatment",
    banner: laserBanner,
    heading: "Advanced Laser Vascular Treatment",
    paragraph:
      "Our laser procedures ensure precise care, minimal recovery time, and outstanding results for vascular conditions.",
    cta: "Book an Appointment",
    details: {
      title: "Laser Vascular Treatments",
      description:
        "Laser Vascular Treatments have revolutionized the way vascular disorders are managed in modern medicine. These treatments employ focused laser energy to target abnormal or diseased blood vessels with precision. Unlike traditional surgical procedures, laser therapy is minimally invasive, which significantly reduces recovery time and the risk of complications. Patients often experience less discomfort during and after the procedure, making it a preferred choice for many. The technology works by delivering concentrated light to the affected vessels, which is absorbed by the blood or vessel walls, leading to coagulation and eventual closure of the vessel. This method is highly effective for treating conditions such as varicose veins, spider veins, port-wine stains, hemangiomas, and other vascular lesions. Each procedure is tailored to the individual’s specific condition, ensuring optimal results.",
      image: [laserImg],
      sections: [
        {
          subHeading: "Benefits of Laser Treatment",
          text: "Laser vascular treatments offer precise and minimally invasive solutions for abnormal blood vessels. Patients experience faster recovery times compared to traditional surgery, with minimal discomfort. These treatments are highly effective and safe when performed by qualified specialists. Laser therapy improves cosmetic appearance by reducing visible veins and vascular lesions. The procedure can be tailored to individual needs, ensuring optimal results and comfort. Overall, laser treatment enhances both medical outcomes and patient confidence.",
        },
        {
          subHeading: "Before & After Results",
          images: [laserImg],
        },
        {
          faqs: [
            {
              question: "Is laser vascular treatment painful?",
              answer:
                "Laser vascular treatments are minimally invasive and performed under local anesthesia, ensuring a comfortable experience. Patients may feel a mild warming or tingling sensation as the laser targets the blood vessels. Post-procedure discomfort is typically minimal and can be managed with over-the-counter pain relief if needed. Our team provides detailed aftercare instructions to ensure a smooth and pain-free recovery process.",
            },
            {
              question: "How long is the recovery time for laser treatment?",
              answer:
                "Recovery is generally quick, with most patients resuming normal activities within 1–2 days after the procedure. Temporary redness or swelling at the treatment site usually subsides within a few days. Patients are advised to avoid strenuous exercise for a short period to promote optimal healing. Full recovery, including the fading of minor side effects, typically occurs within a week.",
            },
            {
              question: "Are the results of laser treatment permanent?",
              answer:
                "For conditions like spider veins or small varicose veins, laser treatment results are often long-lasting, as treated vessels are closed and absorbed by the body. However, new veins may develop over time due to genetic predisposition or lifestyle factors. Regular follow-ups and preventive measures, such as wearing compression stockings, help maintain results. Our team provides guidance to support long-term vascular health.",
            },
            {
              question: "Who is a good candidate for laser vascular treatment?",
              answer:
                "Ideal candidates include those with visible vascular conditions like varicose veins, spider veins, or port-wine stains. A thorough medical evaluation assesses suitability based on skin type, overall health, and condition severity. Patients seeking minimally invasive treatments with quick recovery are well-suited. Those with certain medical conditions may require alternative approaches, determined during consultation.",
            },
            {
              question:
                "What are the potential side effects of laser treatment?",
              answer:
                "Side effects are typically mild and temporary, including redness, swelling, or minor bruising at the treatment site, which resolve within a few days. Rarely, changes in skin pigmentation or minor burns may occur, but these are minimized with expert care. Following post-treatment care instructions, such as avoiding sun exposure, reduces risks. Our specialists monitor recovery to ensure optimal outcomes.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Vascular Surgery",
    link: "Re-implantation",
    banner: re_implantationBanner,
    heading: "Re-implantation Surgery",
    paragraph:
      "We perform successful re-implantation surgeries with a focus on functionality and aesthetics.",
    cta: "Book an Appointment",
    details: {
      title: "Re-implantation Surgery",
      description:
        "Re-Implantation Surgery is a highly specialized microsurgical procedure performed to reattach a completely amputated body part, such as a finger, hand, arm, or even a part of the ear or nose. The primary goal of this surgery is to restore both function and appearance by reconnecting the bones, blood vessels, nerves, tendons, and skin. The procedure begins with careful preservation of the amputated part, usually by wrapping it in sterile gauze and keeping it cool to maintain tissue viability. Once the patient reaches the hospital, surgeons evaluate whether the amputated part is suitable for re-implantation, considering factors such as the time since injury, level of contamination, and overall condition of the patient.",
      image: [reimpl],
      sections: [
        {
          subHeading: "When is it Required?",
          text: "Re-Implantation Surgery is required when a body part is completely amputated due to accidents, industrial injuries, or sharp cuts. It is considered in cases where the amputated part is in good condition, the patient is stable, and timely medical attention is possible. Early intervention greatly increases the chances of successful re-attachment and recovery.",
        },
        {
          subHeading: "Surgical Procedure",
          text: "Bones, tendons, blood vessels, and nerves are reconnected using microsurgical techniques. Rehabilitation plays a major role in recovery.",
        },
        {
          subHeading: "Before & After Results",
          images: [reImplaBA],
        },
        {
          faqs: [
            {
              question: "What is the success rate of re-implantation surgery?",
              answer:
                "Success rates depend on factors like the time since amputation, the condition of the amputated part, and the patient’s health. When performed within 6–12 hours, success rates for fingers or hands can exceed 80% with skilled microsurgery. Precise reconnection of nerves and blood vessels is critical for restoring function. Rehabilitation significantly influences the degree of long-term functional recovery.",
            },
            {
              question: "How long does re-implantation surgery take?",
              answer:
                "The procedure duration varies, typically ranging from 4 to 12 hours, depending on the complexity and body part involved. Microsurgical techniques require meticulous reconnection of bones, vessels, nerves, and tendons. Multiple specialists may collaborate to ensure precision and efficiency. Patients are kept under anesthesia to ensure comfort throughout the entire process.",
            },
            {
              question: "What does the recovery process entail?",
              answer:
                "Recovery involves immobilizing the reattached part to promote healing, followed by extensive physical therapy to restore function. Therapy focuses on improving movement, strength, and sensation, often spanning several months. Regular follow-ups monitor for complications like infection or poor circulation. Patient commitment to rehabilitation is essential for achieving the best functional outcomes.",
            },
            {
              question: "Can all amputated parts be re-implanted?",
              answer:
                "Not all amputated parts are suitable for re-implantation due to factors like damage extent, contamination, or time since injury. Clean cuts with properly preserved parts (e.g., kept cool and wrapped) have better outcomes. Surgeons evaluate each case to determine feasibility. Alternative reconstructive options may be recommended if re-implantation is not viable.",
            },
            {
              question: "Will the reattached part function normally?",
              answer:
                "Functional recovery varies based on the injury’s severity and rehabilitation efforts. Many patients regain significant function, such as grip or sensation, with early intervention. Full restoration may not be possible for complex injuries, but therapy improves outcomes. Ongoing follow-up care helps maximize function and address any challenges.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Vascular Surgery",
    link: "A.V. Fistula Surgery",
    banner: avFistulaBanner,
    heading: "A.V. Fistula Surgery",
    paragraph: "Safe and reliable access for long-term dialysis treatment.",
    cta: "Book an Appointment",
    details: {
      title: "A.V. Fistula Surgery (Arteriovenous Fistula Creation)",
      description: `An arteriovenous (A.V.) fistula is a surgically created connection between an artery and a vein, usually in the arm, to provide reliable access for patients undergoing long-term hemodialysis. It is considered the gold standard for vascular access due to its durability, lower risk of infection, and better blood flow compared to catheters or grafts.

During the procedure, a surgeon connects a vein directly to an artery, allowing the vein to enlarge and strengthen over time. This makes repeated needle insertions for dialysis safe and effective. Most fistulas are created in the forearm or upper arm, depending on the patient’s vascular condition.

The surgery is performed under local or regional anesthesia with minimal discomfort. After surgery, the fistula requires a few weeks to mature before it can be used for dialysis. Patients receive guidance on fistula care to ensure proper healing and long-term functionality.

Our approach emphasizes safety, precision, and patient education—helping individuals with kidney disease maintain effective dialysis treatment and improved quality of life.`,
      image: [avFistulaImg],
      sections: [
        {
          subHeading: "Why A.V. Fistula?",
          text: "✔ Reliable access for dialysis\n✔ Lower infection risk\n✔ Long-term durability",
        },
        {
          subHeading: "✔ Reliable Access for Dialysis",
          text: "A.V. fistula provides strong and stable blood flow, ensuring effective and consistent dialysis sessions.",
        },
        {
          subHeading: "✔ Lower Risk of Infection",
          text: "Unlike catheters, fistulas are under the skin, which significantly reduces the risk of infections and related complications.",
        },
        {
          subHeading: "✔ Long-Term Durability",
          text: "With proper care, fistulas can last for many years, making them the preferred choice for chronic dialysis patients.",
        },

        {
          subHeading: "Before & After Results",
          images: [avFistula],
        },
        {
          faqs: [
            {
              question: "Who needs an A.V. fistula?",
              answer:
                "A.V. fistulas are recommended for patients with chronic kidney disease who require long-term hemodialysis, as they provide safe and durable vascular access.",
            },
            {
              question:
                "How long does it take for an A.V. fistula to be ready for use?",
              answer:
                "A newly created fistula usually takes 6–12 weeks to mature before it can be used for dialysis. During this time, the vein strengthens and enlarges to handle the dialysis needles.",
            },
            {
              question: "Is A.V. fistula surgery painful?",
              answer:
                "The surgery is done under local or regional anesthesia, so patients do not feel pain during the procedure. Mild soreness or swelling may occur afterward but subsides with proper care.",
            },
            {
              question: "How should I take care of my A.V. fistula?",
              answer:
                "Patients should keep the area clean, avoid tight clothing or pressure on the fistula arm, and perform recommended exercises to help the vein mature. Regular monitoring ensures long-term success.",
            },
            {
              question: "Can an A.V. fistula fail?",
              answer:
                "While fistulas are highly durable, they can sometimes narrow or clot. Regular check-ups and early intervention help maintain fistula function and prevent complications.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Vascular Surgery",
    link: "Varicose Veins Surgery",
    banner: varicoseVeinsBanner,
    heading: "Varicose Veins Surgery",
    paragraph:
      "Minimally invasive treatments to relieve pain and improve leg appearance.",
    cta: "Book an Appointment",
    details: {
      title: "Varicose Veins Surgery",
      description: `Varicose veins are enlarged, twisted veins that often appear in the legs due to weak or damaged vein valves. They can cause discomfort, swelling, heaviness, and sometimes serious complications if left untreated. 

Varicose veins surgery involves removing or closing affected veins to restore healthy blood flow and improve both function and appearance. With advancements in vascular care, most treatments today are minimally invasive, ensuring faster recovery and excellent cosmetic results. 

Common surgical options include endovenous laser therapy (EVLT), radiofrequency ablation (RFA), sclerotherapy, and vein stripping in severe cases. These procedures are performed under local or regional anesthesia with minimal downtime. 

Our vascular specialists focus on personalized treatment, addressing both cosmetic concerns and medical complications such as pain, skin changes, or ulcers. Post-surgery, patients experience relief from symptoms, improved circulation, and renewed confidence.`,
      image: [varicoseVeinsImg],
      sections: [
        {
          subHeading: "Why Varicose Veins Surgery?",
          text: "✔ Relieves leg pain and heaviness\n✔ Prevents complications\n✔ Improves leg appearance",
        },
        {
          subHeading: "✔ Relieves Leg Pain & Heaviness",
          text: "Varicose vein surgery reduces discomfort, swelling, and cramping caused by poor blood circulation, helping patients walk and move more comfortably.",
        },
        {
          subHeading: "✔ Prevents Complications",
          text: "Untreated varicose veins may lead to ulcers, bleeding, or blood clots. Surgery helps prevent these risks and restores vein health.",
        },
        {
          subHeading: "✔ Improves Leg Appearance",
          text: "By removing or closing damaged veins, the procedure restores smooth, healthy-looking legs and boosts patient confidence.",
        },

        {
          subHeading: "Before & After Results",
          images: [varicose],
        },
        {
          faqs: [
            {
              question: "When should I consider surgery for varicose veins?",
              answer:
                "Surgery is recommended if varicose veins cause pain, swelling, skin changes, ulcers, or do not improve with lifestyle changes and compression therapy.",
            },
            {
              question: "What are the types of varicose veins surgery?",
              answer:
                "Minimally invasive options include EVLT (laser therapy), RFA (radiofrequency ablation), and sclerotherapy. In advanced cases, vein stripping or phlebectomy may be performed.",
            },
            {
              question: "Is varicose vein surgery painful?",
              answer:
                "Most modern procedures are done under local anesthesia and cause minimal discomfort. Patients usually experience mild soreness that resolves quickly.",
            },
            {
              question: "How long is the recovery period?",
              answer:
                "Most patients return to work within 2–5 days, depending on the procedure. Compression stockings are often recommended for a few weeks to aid healing.",
            },
            {
              question: "Can varicose veins come back after surgery?",
              answer:
                "Surgery treats existing varicose veins, but new veins may develop over time due to genetics or lifestyle. Regular check-ups and preventive care reduce recurrence.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Hand Surgery",
    link: "Accident Cuts",
    banner: handBanner,
    heading: "Accident Cut Repairs",
    paragraph: "Precision hand surgery for accident-related injuries.",
    cta: "Book an Appointment",
    details: {
      title: "Accident Cut Repairs",
      description: `Accidental cuts to the hand can cause serious damage to tendons, nerves, and blood vessels, leading to impaired movement and sensation. Our highly experienced surgeons specialize in advanced microsurgical techniques to perform precise and delicate repairs. The primary focus is not only on restoring the full function of the hand but also on achieving the best possible cosmetic outcome. Timely treatment is essential to prevent long-term complications, stiffness, or loss of mobility. Along with surgery, we provide comprehensive post-operative care and rehabilitation to support faster healing and recovery. With our skilled and compassionate approach, you can trust us to restore strength, function, and confidence in your hand.`,
      image: [machin_inju],
      sections: [
        {
          subHeading: "What We Treat",
          text: "We specialize in treating a wide range of hand injuries, including deep lacerations, nerve injuries, and tendon damage. Accidental cuts or traumatic injuries can affect the delicate structures of the hand, leading to pain, weakness, or restricted movement. With advanced diagnostic evaluation and surgical expertise, we ensure every patient receives precise treatment tailored to their condition. Our goal is to restore not only the functionality of your hand but also its strength and appearance for long-term recovery.",
        },
        {
          subHeading: "Why Choose Us?",
          text: "When it comes to hand surgery, precision and expertise make all the difference. Our highly skilled surgeons use state-of-the-art microsurgical techniques to repair delicate tendons, nerves, and blood vessels. With a patient-centered approach, we focus on restoring natural hand movement, minimizing scarring, and preventing long-term complications. From immediate emergency care to post-surgical rehabilitation, our comprehensive treatment plan ensures you receive the best outcome. Choosing us means trusting a team dedicated to skilled, safe, and compassionate care.",
        },
        {
          subHeading: "Before & After Results",
          images: [accidentCutBA],
        },
        {
          faqs: [
            {
              question: "How soon should cuts be treated?",
              answer:
                "Immediate treatment within 6–12 hours is critical to maximize repair success and prevent complications. Delays can lead to infection, poor healing, or permanent loss of function in the hand. Our team prioritizes rapid evaluation and surgery for optimal outcomes. Patients should seek care as soon as possible after an injury occurs.",
            },
            {
              question: "Will I regain full hand function after surgery?",
              answer:
                "Many patients regain significant hand function with timely surgery and dedicated rehabilitation. The extent of recovery depends on the severity of the injury and affected structures like nerves or tendons. Physical therapy is essential to restore strength and dexterity over time. Regular follow-ups ensure progress and address any recovery challenges.",
            },
            {
              question: "Is hand cut repair surgery painful?",
              answer:
                "The procedure is performed under local or general anesthesia, ensuring no pain during surgery. Post-operative discomfort, such as mild soreness or swelling, is manageable with prescribed medication. Our team provides detailed aftercare instructions to minimize discomfort. Most patients report manageable pain levels during the recovery period.",
            },
            {
              question: "How long is the recovery period for hand cuts?",
              answer:
                "Recovery varies by injury severity, typically ranging from 2–4 weeks for minor repairs to several months for complex injuries involving nerves or tendons. Physical therapy supports full functional recovery by improving strength and mobility. Personalized recovery plans are provided to ensure optimal outcomes. Follow-up visits monitor healing progress.",
            },
            {
              question: "Will there be visible scars after surgery?",
              answer:
                "Our microsurgical techniques use precise incisions, often placed in natural skin creases, to minimize scarring. Scars typically fade significantly over time, becoming less noticeable. Proper wound care and avoiding sun exposure enhance cosmetic results. Scar revision options are available if needed for further aesthetic improvement.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Hand Surgery",
    link: "Machine Injuries",
    banner: machinHandBanner,
    heading: "Machine Injury Repairs",
    paragraph: "Specialized treatment for machine-related hand injuries.",
    cta: "Book an Appointment",
    details: {
      title: "Machine Injury Repairs",
      description: `Machine Injuries and Hand Trauma
Machine-related accidents can lead to serious hand injuries such as deep lacerations, crushed bones, fractures, and even amputations. Such injuries not only cause immediate pain but can also severely affect hand mobility and day-to-day activities if not treated promptly.

Our team of expert hand surgeons specializes in advanced surgical repair and reconstruction, ensuring that both function and aesthetics of the hand are restored. With the use of state-of-the-art microsurgical techniques, we are able to reconnect delicate structures like nerves, vessels, and tendons with precision, offering the best chance for recovery.

Treatment does not stop at surgery alone. We provide comprehensive rehabilitation and physiotherapy programs designed to strengthen the hand, improve mobility, and prevent long-term disability. From emergency care to post-surgical recovery, our focus remains on delivering personalized, compassionate, and effective hand trauma management.`,
      image: [machineInjuHnad],
      sections: [
        {
          subHeading: "Treatments Include",
          text: "✔ Bone Fixation  ✔ Tendon & Nerve Repair ✔ Soft Tissue Reconstruction",
        },
        {
          subHeading: "✔ Bone Fixation ",
          text: "Bone Fixation We provide precise surgical stabilization of fractured or broken bones to ensure correct alignment, faster healing, and long-term strength. This helps restore mobility and prevents future complications.",
        },
        {
          subHeading: " ✔ Tendon & Nerve Repair ",
          text: "Tendon & Nerve Repair Using advanced microsurgical techniques, we carefully repair injured tendons and nerves to restore hand movements, improve grip strength, and bring back lost sensation, ensuring better functionality. ",
        },
        {
          subHeading: "✔ Soft Tissue Reconstruction",
          text: " Soft Tissue Reconstruction We rebuild muscles, ligaments, and skin through specialized reconstruction methods. This not only supports functional recovery but also restores a natural appearance for improved confidence and mobility.",
        },

        {
          subHeading: "Before & After Results",
          images: [handInjuBA],
        },
        {
          faqs: [
            {
              question: "Can all machine injuries to the hand be repaired?",
              answer:
                "Many machine-related injuries, such as fractures or partial amputations, can be repaired using advanced microsurgical techniques. The extent of damage and timeliness of treatment significantly affect outcomes. Our team evaluates each case to determine the best approach for restoring function and appearance. Complex injuries may require staged procedures for optimal results.",
            },
            {
              question: "How long does machine injury surgery take?",
              answer:
                "Surgery duration varies, typically ranging from 2 to 8 hours, depending on the injury’s complexity. Procedures like bone fixation or nerve repair require meticulous precision, often involving multiple specialists. Patients are under anesthesia for comfort throughout the procedure. Our team ensures efficient surgery to maximize recovery chances.",
            },
            {
              question:
                "What does recovery from machine injury surgery involve?",
              answer:
                "Recovery includes initial immobilization to stabilize repairs, followed by physical therapy to restore hand function. Therapy focuses on improving strength, mobility, and sensation over several months. Regular follow-ups monitor healing and address potential complications like infection. Patient dedication to rehabilitation is crucial for achieving optimal functional results.",
            },
            {
              question: "Will I need multiple surgeries for machine injuries?",
              answer:
                "Complex injuries may require staged surgeries, such as initial repair followed by reconstruction or scar revision. The need for additional procedures depends on the injury’s severity and healing progress. Our team plans treatments to minimize interventions while maximizing recovery. Follow-up evaluations guide further care if additional surgeries are needed.",
            },
            {
              question: "Are the results of hand injury repairs permanent?",
              answer:
                "Repairs aim to provide lasting restoration of function and aesthetics, though outcomes depend on injury severity. Successful surgery and rehabilitation can restore significant hand use in many cases. Ongoing therapy helps maintain results over time. Follow-up care ensures any issues are addressed to sustain long-term benefits.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Hand Surgery",
    link: "Hand Lumps",
    banner: handLumpsBanner,
    heading: "Hand Lump Removal",
    paragraph: "Safe and effective removal of hand lumps and cysts.",
    cta: "Book an Appointment",
    details: {
      title: "Hand Lump Removal",
      description: `Hand lumps, such as cysts, ganglions, or tumors, can often cause discomfort, restricted movement, or cosmetic concerns.
Our specialized hand surgery ensures safe and effective removal of these lumps using advanced surgical techniques. 
We focus on restoring complete hand function, improving comfort, and maintaining a natural appearance with minimal scarring. 
Every case is carefully assessed to choose the most suitable approach for long-term results. 
With expert post-surgery care and precise treatment, patients usually experience a quick recovery and minimal downtime. 
Trust our expertise for reliable, safe, and patient-focused hand lump treatment that helps you regain both function and confidence.`,
      image: [handLumpsImg],
      sections: [
        {
          subHeading: "Common Hand Lumps",
          text: "✔ Ganglion Cysts ✔ Fibromas ✔ Benign Tumors",
        },
        {
          subHeading: "✔ Ganglion Cysts",
          text: "Ganglion cysts are fluid-filled lumps that usually develop around joints or tendons in the hand. They may cause discomfort, limit movement, or create visible swelling, but can be safely removed through minor surgery for lasting relief.",
        },
        {
          subHeading: "✔ Fibromas",
          text: "Fibromas are non-cancerous growths made up of fibrous or connective tissue. While generally harmless, they can cause pain, stiffness, or functional issues in the hand. Surgical removal restores comfort and hand function effectively.",
        },
        {
          subHeading: "✔ Benign Tumors",
          text: "Benign tumors in the hand are non-cancerous masses that can arise from different tissues, such as fat, nerves, or skin. Though not dangerous, they may grow or interfere with daily activities. Precise surgical treatment ensures safe removal and recovery.",
        },

        {
          subHeading: "Before & After Results",
          images: [handLumpsBA],
        },
        {
          faqs: [
            {
              question: "Are all hand lumps dangerous?",
              answer:
                "Most hand lumps, such as ganglion cysts or fibromas, are benign and not dangerous. However, a medical evaluation, including imaging or a biopsy, is essential to rule out rare malignant tumors. Our team conducts thorough assessments to ensure accurate diagnosis. This approach provides peace of mind and guides appropriate treatment planning.",
            },
            {
              question: "Is the hand lump removal procedure painful?",
              answer:
                "Hand lump removal is performed under local anesthesia, ensuring minimal discomfort during the procedure. Patients may experience mild soreness or swelling afterward, which is manageable with over-the-counter medication. Our precise techniques prioritize patient comfort throughout the process. Post-operative care instructions support a smooth and pain-free recovery.",
            },
            {
              question: "How long is recovery after lump removal?",
              answer:
                "Recovery is typically quick, with most patients resuming normal activities within 3–7 days. Minor swelling or tenderness may persist briefly but resolves quickly with proper care. Hand therapy may be recommended to restore full function if needed. Follow-up visits ensure proper healing and optimal outcomes.",
            },
            {
              question: "Will the lump come back after removal?",
              answer:
                "Complete surgical removal, including the lump’s capsule, significantly reduces the risk of recurrence. For example, ganglion cysts rarely return when fully excised. New lumps may form in rare cases due to underlying factors like repetitive strain. Regular monitoring helps detect and address any new developments early.",
            },
            {
              question: "Will there be a scar after lump removal?",
              answer:
                "Our surgical techniques use small, precise incisions, often placed in natural skin creases, to minimize scarring. Scars typically fade significantly over time, becoming barely noticeable. Proper wound care, including avoiding sun exposure, enhances cosmetic results. Scar revision is available if needed for further aesthetic improvement.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Minor Surgery",
    link: "Toenail Surgery",
    banner: toenailBanner,
    heading: "Toenail Procedures",
    paragraph: "Pain-free and safe toenail treatments.",
    cta: "Book an Appointment",
    details: {
      title: "Toenail Procedures",
      description: `Ingrown toenails and nail deformities can cause significant pain, swelling, and infection if left untreated. We provide advanced treatment options for painful ingrown toenails, nail bed infections, and structural deformities using modern, safe, and highly precise techniques. Our goal is to ensure minimal discomfort during the procedure while effectively resolving the underlying problem.

With our specialized approach, patients experience faster recovery, reduced risk of recurrence, and long-lasting results. Whether it is a recurring ingrown toenail or a complex nail deformity, each case is carefully assessed to deliver the best possible outcome.

By restoring the natural shape and health of the nail, we help patients regain comfort, confidence, and mobility in their daily life. Safety, hygiene, and patient satisfaction remain our top priorities. Trust us for expert toenail care that combines medical precision with compassionate attention.`,
      image: [toenailimg],
      sections: [
        {
          subHeading: "Conditions Treated",
          text: "✔ Ingrown Toenails ✔ Nail Infections ✔ Nail Deformities",
        },
        {
          subHeading: "✔ Ingrown Toenails",
          text: "Ingrown toenails occur when the nail grows into the surrounding skin, causing pain, redness, swelling, and sometimes infection. If untreated, they may worsen, but timely surgical or non-surgical care restores comfort and prevents recurrence.",
        },
        {
          subHeading: "✔ Nail Infections",
          text: "Nail infections can be caused by fungi, bacteria, or yeast, leading to discoloration, brittleness, and thickening of the nails. Effective medical or surgical treatment eliminates infection, restores nail health, and prevents further spread.",
        },
        {
          subHeading: "✔ Nail Deformities",
          text: "Nail deformities are changes in nail shape, thickness, or growth caused by trauma, infection, or underlying medical issues. Specialized treatments help restore the natural appearance and function of nails for improved comfort and confidence.",
        },

        {
          subHeading: "Before & After Results",
          images: [toinailBA],
        },
        {
          faqs: [
            {
              question: "Is toenail surgery painful?",
              answer:
                "Toenail procedures, such as ingrown nail removal, are performed under local anesthesia, making them virtually pain-free. Patients may feel mild pressure during the procedure but no significant discomfort. Post-operative soreness is minimal and manageable with over-the-counter pain relief. Our team provides detailed aftercare to ensure a comfortable recovery experience.",
            },
            {
              question: "How long does recovery take after toenail surgery?",
              answer:
                "Most patients heal within 1–2 weeks, resuming normal activities within a few days. Minor swelling or redness may occur but typically resolves quickly with proper care. Patients should keep the area clean and avoid tight shoes during healing. Follow-up visits ensure proper recovery and address any potential complications.",
            },
            {
              question: "Can ingrown toenails recur after treatment?",
              answer:
                "Techniques like partial nail avulsion with matrixectomy significantly reduce recurrence rates for ingrown toenails. Proper nail care and wearing appropriate footwear help prevent new issues. In rare cases, recurrence may occur if underlying factors persist. Patient education is provided to minimize this risk and maintain foot health.",
            },
            {
              question: "Do I need to stay off my feet after toenail surgery?",
              answer:
                "Complete rest is rarely needed, but patients should limit strenuous activity for a few days to support healing. Walking is encouraged to promote circulation, avoiding heavy pressure on the toe. Comfortable, loose-fitting shoes are recommended during recovery. Our team provides tailored advice to ensure a smooth healing process.",
            },
            {
              question:
                "Are there risks of infection after toenail procedures?",
              answer:
                "Infection risk is low due to our sterile techniques and comprehensive aftercare instructions. Patients must keep the area clean and dry to prevent complications. Antibiotics may be prescribed if an infection was present before surgery. Regular follow-ups ensure any issues are detected and addressed promptly.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Minor Surgery",
    link: "Body Lumps Removal",
    banner: bodyLumpBanner,
    heading: "Body Lump Removal",
    paragraph: "Quick and safe procedures for body lumps.",
    cta: "Book an Appointment",
    details: {
      title: "Body Lump Removal",
      description: `Body lumps, such as lipomas, cysts, or other benign growths, are carefully evaluated and treated to ensure both safety and cosmetic satisfaction. Our specialists follow a patient-centered approach, starting with a detailed assessment to rule out any serious conditions and to determine the best treatment method. For most patients, removal is performed as a quick outpatient procedure under local anesthesia, ensuring comfort and minimizing downtime.

We use advanced surgical techniques designed to reduce scarring, promote faster healing, and achieve the most natural-looking results possible. Every case is handled individually, with attention to the size, type, and location of the lump to provide an optimal cosmetic outcome. Patients typically experience minimal discomfort and can return to normal activities within a short period.

By combining medical precision with aesthetic consideration, we provide effective and safe lump removal that restores confidence and peace of mind. Choosing us means choosing expertise, advanced care, and results that matter both medically and cosmetically.`,
      image: [bodyLumpimg],
      sections: [
        {
          subHeading: "Simple Outpatient Procedure",
          text: "Most lump removals are done as an outpatient procedure, meaning you can go home the same day without needing overnight hospital stay.",
        },
        {
          subHeading: "Minimal Scarring",
          text: "Advanced surgical techniques are used to ensure the smallest possible incision, leaving little to no visible scarring on the skin.",
        },
        {
          subHeading: "Fast Recovery",
          text: "Patients usually recover quickly after the procedure and can resume their normal daily activities within a short period of time.",
        },
        {
          subHeading: "Before & After Results",
          images: [bodyLumpBA],
        },
        {
          faqs: [
            {
              question: "Are all body lumps cancerous?",
              answer:
                "Most body lumps, such as lipomas or cysts, are benign and not cancerous. A medical evaluation, including imaging or a biopsy, confirms the lump’s nature to rule out malignancy. Our team ensures accurate diagnosis before proceeding with removal. This thorough approach provides peace of mind and guides appropriate treatment planning.",
            },
            {
              question: "How long does the lump removal procedure take?",
              answer:
                "Body lump removal is a quick outpatient procedure, typically completed in 30–60 minutes, depending on the lump’s size and location. Local anesthesia ensures patient comfort throughout the process. Our efficient techniques allow patients to return home the same day. Follow-up care ensures proper healing and optimal results.",
            },
            {
              question: "Will there be a scar after lump removal?",
              answer:
                "Our advanced techniques use small incisions, often placed in discreet locations, to minimize scarring. Scars typically fade significantly over time, becoming barely noticeable. Proper wound care, including avoiding sun exposure, enhances cosmetic outcomes. Scar revision is available if needed for further aesthetic improvement.",
            },
            {
              question: "How soon can I resume activities after lump removal?",
              answer:
                "Most patients return to normal activities within 3–7 days, depending on the lump’s location and size. Strenuous activities should be avoided for about a week to support healing. Our team provides personalized aftercare instructions for a smooth recovery. Follow-up visits monitor progress and address any concerns.",
            },
            {
              question: "Can lumps recur after removal?",
              answer:
                "Complete removal of the lump, including its capsule, significantly reduces the risk of recurrence. For example, lipomas or cysts rarely return when fully excised. New lumps may form in other areas due to genetic or environmental factors. Regular monitoring helps detect and address any new developments early.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Minor Surgery",
    link: "Corn Removal",
    banner: cornRemovalBanner,
    heading: "Corn Removal Surgery",
    paragraph:
      "Quick and effective treatment to remove painful corns and restore foot comfort.",
    cta: "Book an Appointment",
    details: {
      title: "Corn Removal",
      description: `Corn removal is a minor surgical procedure designed to eliminate hardened, thickened areas of skin (corns) that develop due to repeated friction or pressure, usually on the feet. Corns can cause significant discomfort, pain while walking, and in some cases lead to infections if left untreated.  

The procedure involves carefully trimming or excising the corn under sterile conditions, often under local anesthesia. In certain cases, minor surgical removal of the root may be performed to prevent recurrence.  

Corn removal is a quick, safe, and highly effective treatment that provides instant relief from pain and discomfort, allowing patients to walk comfortably again. Proper footwear, regular foot care, and addressing the root cause of pressure are essential to prevent corns from reappearing.`,

      image: [cornRemovalImg],

      sections: [
        {
          subHeading: "Why Corn Removal?",
          text: "✔ Relieves pain and discomfort\n✔ Restores normal walking comfort\n✔ Prevents infection and recurrence",
        },
        {
          subHeading: "✔ Relieves Pain & Discomfort",
          text: "Corn removal surgery eliminates the thickened skin that causes irritation and pain, allowing patients to resume daily activities comfortably.",
        },
        {
          subHeading: "✔ Restores Walking Comfort",
          text: "The procedure helps patients walk normally without friction or irritation caused by corns, improving mobility and quality of life.",
        },
        {
          subHeading: "✔ Prevents Infection & Recurrence",
          text: "Removing corns under sterile medical conditions reduces the risk of infections and, when combined with proper footwear, prevents recurrence.",
        },

        {
          subHeading: "Before & After Results",
          images: [cornRemovalImg],
        },
        {
          faqs: [
            {
              question: "When should I consider corn removal surgery?",
              answer:
                "If corns cause persistent pain, interfere with walking, or do not improve with padding, footwear changes, or home remedies, surgery is recommended.",
            },
            {
              question: "Is corn removal surgery painful?",
              answer:
                "The procedure is usually done under local anesthesia and is virtually painless. Mild soreness may be felt for a few days after treatment.",
            },
            {
              question: "How long does recovery take after corn removal?",
              answer:
                "Most patients can walk immediately after surgery. Recovery is typically quick, with mild discomfort lasting only a few days.",
            },
            {
              question: "Can corns come back after surgery?",
              answer:
                "If the underlying cause (like tight footwear or abnormal pressure) is not addressed, corns may return. Proper footwear and foot care are essential to prevent recurrence.",
            },
            {
              question: "Is corn removal safe for diabetic patients?",
              answer:
                "Yes, but diabetic patients should take extra precautions as their healing may be slower. Surgery performed by specialists minimizes risks of infection and complications.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Minor Surgery",
    link: "Ear Lobe Repair",
    banner: earBanner,
    heading: "Ear Lobe Surgery",
    paragraph: "Expert ear repair surgeries for injuries or deformities.",
    cta: "Book an Appointment",
    details: {
      title: "Ear Lobe Surgery",
      description: `We specialize in earlobe repair and correction of deformities caused by trauma, injury, or stretched/torn piercings. Our procedures are performed with precision and advanced surgical techniques to ensure both cosmetic improvement and functional restoration. Whether it is a minor tear or a more complex deformity, our team focuses on achieving natural-looking, symmetrical results that blend seamlessly with your facial aesthetics.

The treatment is usually quick, performed under local anesthesia, and involves minimal discomfort and downtime, allowing patients to resume daily activities soon after the procedure. Special care is taken to minimize scarring and enhance healing, ensuring long-lasting results.

Earlobe repair not only restores the physical appearance of the ear but also helps patients regain self-confidence, especially for those who wish to wear earrings again or simply improve the overall balance of their facial features.

Choose us for expert, compassionate, and result-oriented ear repair care, where your comfort, safety, and satisfaction remain our top priority.`,
      image: [earimg],
      sections: [
        {
          subHeading: "✔ Earlobe Repair",
          text: "We specialize in repairing torn or stretched earlobes caused by piercings, heavy earrings, or trauma. The procedure is quick, minimally invasive, and restores the natural shape of the earlobe with minimal scarring.",
        },
        {
          subHeading: "✔ Cosmetic Ear Reshaping",
          text: "This procedure corrects ear deformities, irregularities, or asymmetry to achieve a more balanced and natural appearance. It is performed with precision to ensure both cosmetic enhancement and functional improvement.",
        },
        {
          subHeading: "✔ Scar Revision",
          text: "Scar revision helps improve the appearance of scars resulting from previous surgeries, injuries, or ear trauma. Using advanced surgical techniques, we minimize scar visibility and promote smoother, natural-looking skin.",
        },

        {
          subHeading: "Before & After Results",
          images: [earBA],
        },
        {
          faqs: [
            {
              question: "Is ear repair surgery painful?",
              answer:
                "Ear repair surgery, such as for torn earlobes, is performed under local anesthesia, ensuring a virtually pain-free experience. Patients may feel mild pressure during the procedure but no significant discomfort. Post-operative soreness is minimal and manageable with over-the-counter pain relief. Our team provides detailed aftercare to ensure a comfortable recovery.",
            },
            {
              question: "How long does recovery take after ear repair?",
              answer:
                "Recovery is quick, with most patients resuming normal activities within 2–3 days. Full healing, including suture removal, typically occurs within 1–2 weeks. Patients should avoid pressure on the ear during this time to support healing. Follow-up visits ensure proper healing and optimal cosmetic results.",
            },
            {
              question: "Will there be visible scars after ear repair?",
              answer:
                "Our precise surgical techniques use small incisions, often placed in natural ear creases, to minimize scarring. Scars typically fade significantly within months, becoming barely noticeable. Proper wound care, including avoiding sun exposure, enhances cosmetic outcomes. Scar revision is available if needed for further aesthetic improvement.",
            },
            {
              question: "Can I wear earrings after ear repair surgery?",
              answer:
                "Patients can typically wear earrings again after full healing, usually 6–8 weeks post-surgery. The repaired earlobe is strong enough for light earrings, but heavy ones should be avoided to prevent re-tearing. Our team provides guidance on safe re-piercing if needed. Follow-up care ensures the repair’s long-term durability.",
            },
            {
              question: "Is ear repair suitable for all deformities?",
              answer:
                "Most ear deformities or injuries, such as torn earlobes or trauma-related damage, can be addressed with our techniques. A consultation assesses the extent of damage to determine the best approach, whether repair or reshaping. Complex cases may require additional reconstructive procedures. Our goal is to restore both function and aesthetics effectively.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Reconstructive Surgery",
    link: "Burn Treatment",
    banner: reConstructiveBanner,
    heading: "Advanced Burn Treatment",
    paragraph: "Reconstructive care for burn victims with optimal healing.",
    cta: "Book an Appointment",
    details: {
      title: "Burn Treatment & Reconstruction",
      description: `We provide specialized care for both acute and chronic burns, offering treatments designed to restore health, function, and appearance. Burns can affect not only the skin but also deeper tissues, leading to both physical and emotional challenges. Our team uses advanced techniques to ensure optimal healing, reduce complications, and achieve the best possible outcomes.

For patients with severe burns, skin grafting and reconstructive procedures are performed to replace damaged tissue, improve mobility, and restore natural skin contour. We also focus on scar management, using modern surgical and non-surgical methods to minimize visible scarring and enhance skin texture.

Our approach is not only about healing the wounds but also about functional and aesthetic restoration. By addressing contractures, deformities, and cosmetic concerns, we help patients regain confidence and improve their quality of life.

Each patient receives comprehensive, personalized care, which includes wound management, surgical reconstruction when required, physical rehabilitation, and long-term follow-up to ensure sustained recovery.

Trust us for expert burn treatment and reconstruction solutions that combine medical excellence with compassionate care, guiding patients towards complete healing and renewed self-assurance.`,
      image: [burnImg],
      sections: [
        {
          subHeading: "Treatment Includes",
          text: "✔ Skin grafts\n✔ Scar revision\n✔ Functional reconstruction",
        },
        {
          subHeading: "✔ Skin Grafts",
          text: "Skin grafting is performed to replace severely damaged or missing skin caused by burns. Healthy skin is taken from another part of the body and transplanted to the affected area, promoting healing, restoring function, and improving appearance.",
        },
        {
          subHeading: "✔ Scar Revision",
          text: "Burn scars can cause discomfort, tightness, and cosmetic concerns. Scar revision procedures help reduce scar visibility, soften skin texture, and improve flexibility, ensuring better cosmetic and functional outcomes.",
        },
        {
          subHeading: "✔ Functional Reconstruction",
          text: "Severe burns can lead to deformities and restricted movements. Functional reconstruction focuses on restoring mobility, correcting contractures, and rebuilding the natural structure of the skin and underlying tissues for long-term recovery.",
        },

        {
          subHeading: "Before & After Results",
          images: [burnBA],
        },
        {
          faqs: [
            {
              question: "How are burns treated surgically?",
              answer:
                "Severe burns often require surgical interventions like skin grafting, where healthy skin is transplanted to the burn site. Debridement removes dead tissue to prevent infection and promote healing. Reconstructive techniques restore function and appearance, tailored to the burn’s severity. Our team uses advanced methods to minimize complications and optimize outcomes.",
            },
            {
              question: "How long is the recovery process for burn treatment?",
              answer:
                "Recovery depends on the burn’s depth and extent, ranging from weeks for superficial burns to months for severe cases. Skin grafts require immobilization and regular dressings initially to promote healing. Physical therapy helps restore mobility in affected areas. Comprehensive follow-up care ensures long-term healing and functional recovery.",
            },
            {
              question: "Will scars from burns be permanent?",
              answer:
                "While some scarring is inevitable with deeper burns, our scar revision techniques significantly reduce their appearance. Methods like laser therapy or surgical revision improve skin texture and color over time. Proper wound care and sun protection help minimize scar visibility. Ongoing treatments can further enhance cosmetic results.",
            },
            {
              question: "Are multiple surgeries needed for burn treatment?",
              answer:
                "Severe burns may require multiple surgeries, such as initial debridement, skin grafting, and later scar revisions. Each procedure addresses specific aspects of healing or reconstruction. The need for additional surgeries is assessed based on the burn’s severity and patient goals. Our team plans treatments to minimize interventions while maximizing results.",
            },
            {
              question: "Can burns affect mobility long-term?",
              answer:
                "Deep burns can cause scar tissue that restricts movement, particularly near joints. Reconstructive surgery and physical therapy address scar contractures to restore mobility. Early intervention and consistent rehabilitation significantly improve outcomes. Our comprehensive care plans support patients in regaining function and quality of life.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Reconstructive Surgery",
    link: "Diabetic Wound Care",
    banner: woundBanner,
    heading: "Diabetic Wound Care",
    paragraph: "Expert care for diabetic patients to prevent complications.",
    cta: "Book an Appointment",
    details: {
      title: "Diabetic Wound Care",
      description: `We offer specialized care for diabetic wounds, focusing on early intervention to prevent severe complications such as infections, ulcerations, and amputations. Diabetic wounds often heal slowly due to reduced blood circulation, nerve damage, and increased risk of infection, which makes expert care essential.

Our treatment combines advanced wound-healing techniques with regular medical dressings to ensure wounds close quickly and effectively. We use modern methods such as debridement, specialized dressings, infection control, and pressure offloading, which help accelerate recovery while protecting surrounding healthy tissue.

Beyond treatment, we emphasize patient education and lifestyle guidance, enabling individuals to better manage their condition and prevent recurrence of wounds in the future. By teaching proper foot care, hygiene practices, and monitoring techniques, patients are empowered to take control of their health.

Our approach is comprehensive and holistic, addressing not just the wound itself but the overall health of the patient. From reducing pain and risk of complications to improving mobility and quality of life, our care ensures long-term results.

Trust us for expert diabetic wound management, where medical excellence, modern technology, and compassionate care come together to provide safe, effective, and lasting healing.`,
      image: [woundImg],
      sections: [
        {
          subHeading: "Care Includes",
          text: "✔ Regular wound dressing\n✔ Infection control\n✔ Advanced healing techniques",
        },
        {
          subHeading: "✔ Regular Wound Dressing",
          text: "Consistent and proper wound dressing helps maintain a clean environment, protects the wound from external contaminants, and promotes faster healing. Regular monitoring ensures any changes in the wound are promptly addressed.",
        },
        {
          subHeading: "✔ Infection Control",
          text: "Infection control is crucial in diabetic wound care. We use sterile techniques, appropriate medications, and early detection strategies to prevent infections, reduce complications, and avoid the risk of amputation.",
        },
        {
          subHeading: "✔ Advanced Healing Techniques",
          text: "Our advanced healing methods include debridement, specialized dressings, and therapies that enhance blood circulation and tissue regeneration. These techniques accelerate recovery and restore skin integrity effectively.",
        },
        {
          subHeading: "Before & After Results",
          images: [woundBA],
        },
        {
          faqs: [
            {
              question: "Why are diabetic wounds hard to heal?",
              answer:
                "Diabetic wounds heal slowly due to poor circulation, high blood sugar, and impaired immune responses in diabetic patients. These factors reduce oxygen and nutrient delivery to the wound, increasing infection risk. Neuropathy may delay injury detection, worsening the condition. Our specialized care addresses these challenges to promote effective healing.",
            },
            {
              question: "Can all diabetic wounds be treated successfully?",
              answer:
                "Most diabetic wounds can be managed with proper care, including debridement, dressings, and infection control. Severe cases may require advanced therapies like skin grafts or hyperbaric oxygen treatment. Early intervention is critical to prevent complications like amputations. Our team tailors treatment to each patient’s needs for optimal outcomes.",
            },
            {
              question: "How long does healing take for diabetic wounds?",
              answer:
                "Healing time varies based on wound size, depth, and patient health, often taking weeks to months. Regular dressings and infection control accelerate the process significantly. Patient compliance with care plans, including blood sugar management, is essential. Follow-up visits monitor progress and adjust treatment as needed.",
            },
            {
              question:
                "Can amputations be prevented with diabetic wound care?",
              answer:
                "Early and specialized care significantly reduces the risk of amputation for diabetic wounds. Techniques like debridement, infection control, and advanced dressings promote healing effectively. Patient education on foot care and blood sugar control is critical. Our comprehensive approach aims to preserve limbs and improve quality of life.",
            },
            {
              question: "What is involved in diabetic wound care?",
              answer:
                "Care includes cleaning and debriding the wound, applying specialized dressings, and controlling infections with antibiotics if needed. Advanced therapies, such as growth factors or skin substitutes, may be used for severe wounds. Patient education on hygiene and diabetes management is integral. Regular follow-ups ensure ongoing healing and prevent recurrence.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Reconstructive Surgery",
    link: "Face Fracture Care",
    banner: faceBanner,
    heading: "Face Fracture Treatment",
    paragraph: "Precision surgical care for facial fractures.",
    cta: "Book an Appointment",
    details: {
      title: "Face Fracture Care",
      description: `Facial fractures, resulting from trauma, accidents, or injuries, require expert evaluation and reconstruction to restore both appearance and function. Improper treatment can lead to long-term aesthetic deformities, difficulty in chewing, speaking, or breathing, and functional impairment.

Our team of experienced maxillofacial and plastic surgeons employs precise fixation and reconstruction techniques, including plates, screws, and wires, to ensure bones heal in the correct alignment. We focus not only on structural restoration but also on achieving natural facial symmetry and aesthetics.

Recovery is supported through a comprehensive care plan, which may include pain management, physiotherapy, dietary guidance, and regular follow-ups to monitor healing. Special attention is given to minimizing scarring and preserving soft tissue integrity, ensuring the patient regains a natural appearance.

Beyond physical healing, our approach emphasizes restoring patient confidence. Corrective treatment allows individuals to resume normal social and professional activities without visible deformities or functional limitations.

Choose us for skilled facial fracture treatment, where medical precision, advanced surgical methods, and compassionate care converge to provide optimal functional and aesthetic outcomes.`,
      image: [faceImg],
      sections: [
        {
          subHeading: "Treatment Include",
          text: "✔ Fracture fixation\n✔ Cosmetic restoration\n✔ Functional recovery",
        },
        {
          subHeading: "✔ Fracture Fixation",
          text: "Precise fracture fixation ensures that broken facial bones are correctly aligned and stabilized using advanced techniques such as plates, screws, and wires. This promotes proper healing and prevents long-term deformities or functional issues.",
        },
        {
          subHeading: "✔ Cosmetic Restoration",
          text: "Cosmetic restoration focuses on restoring natural facial symmetry and aesthetics. Our surgeons carefully reconstruct facial contours to minimize visible deformities and ensure a natural, balanced appearance.",
        },
        {
          subHeading: "✔ Functional Recovery",
          text: "Functional recovery addresses the restoration of essential facial functions such as chewing, speaking, and facial expressions. Comprehensive post-operative care, including physiotherapy and monitoring, ensures optimal functional outcomes.",
        },

        {
          subHeading: "Before & After Results",
          images: [faceFracBA],
        },
        {
          faqs: [
            {
              question: "How are facial fractures repaired surgically?",
              answer:
                "Facial fractures are repaired using plates, screws, or wires to align and stabilize bones accurately. Our surgeons use precise techniques to ensure proper bone positioning and healing. Incisions are placed discreetly to minimize scarring and maintain aesthetics. The goal is to restore both function, such as chewing or breathing, and facial appearance.",
            },
            {
              question: "Will my face look normal after fracture surgery?",
              answer:
                "Our advanced techniques aim to restore natural facial contours with minimal visible scarring. Bone alignment ensures proper structure, while soft tissue repair enhances aesthetics. Post-surgical swelling may take weeks to subside, revealing the final result. Follow-up care and possible scar revision ensure optimal cosmetic outcomes.",
            },
            {
              question: "How long is the recovery period for facial fractures?",
              answer:
                "Recovery typically takes 4–8 weeks, depending on the fracture’s severity and location. Initial swelling and bruising subside within 1–2 weeks, with full bone healing taking longer. Patients may need to avoid certain activities to support recovery. Comprehensive care plans, including follow-ups, ensure proper healing and functional restoration.",
            },
            {
              question: "Is facial fracture surgery painful?",
              answer:
                "The procedure is performed under general anesthesia, ensuring no pain during surgery. Post-operative discomfort, such as swelling or soreness, is manageable with prescribed medication. Our team provides detailed aftercare instructions to minimize discomfort. Most patients report tolerable pain levels during the recovery period.",
            },
            {
              question:
                "Are there risks of complications with facial fracture surgery?",
              answer:
                "Risks are low with expert care, but potential complications include infection or misalignment. Our team uses sterile techniques and precise fixation to minimize these risks. Regular follow-ups monitor healing and address any issues promptly. Patient compliance with aftercare instructions further reduces the likelihood of complications.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Reconstructive Surgery",
    link: "Pilonidal Sinus Surgery",
    banner: pilonidalBanner,
    heading: "Pilonidal Sinus Surgery",
    paragraph: "Minimally invasive surgery for pilonidal sinus treatment.",
    cta: "Book an Appointment",
    details: {
      title: "Pilonidal Sinus Surgery",
      description: `Pilonidal sinus is a common condition that usually occurs near the cleft of the buttocks, where small holes or tunnels form under the skin. These tunnels can collect hair, pus, or fluid, leading to pain, swelling, and recurrent infections. If left untreated, it often causes discomfort in sitting, walking, or performing daily activities.

At our clinic, pilonidal sinus is treated using minimally invasive and advanced surgical techniques designed to provide lasting relief. Our procedures focus on removing the sinus tract completely while minimizing scarring and promoting faster healing. Patients benefit from reduced pain, minimal blood loss, and quicker return to normal life compared to traditional methods.  

We also emphasize preventing recurrence through proper wound management, hygiene guidance, and follow-up care. Every treatment plan is personalized based on the severity of the condition, ensuring the best possible outcome. With our expertise and compassionate approach, patients experience long-term relief, improved comfort, and restored confidence in their daily activities.  
`,
      image: [pilonidalImg],
      sections: [
        {
          subHeading: "Why Surgery?",
          text: "✔ Prevent recurrence\n✔ Quick healing\n✔ Minimal scarring",
        },
        {
          subHeading: "✔ Prevent Recurrence",
          text: "Pilonidal surgery removes the sinus and surrounding infected tissue completely, significantly reducing the risk of the condition returning. Proper surgical technique ensures long-term relief and prevents repeated infections.",
        },
        {
          subHeading: "✔ Quick Healing",
          text: "The procedure is designed for efficient recovery, allowing patients to return to daily activities quickly. With proper post-operative care, healing is faster compared to conservative treatments.",
        },
        {
          subHeading: "✔ Minimal Scarring",
          text: "Advanced surgical methods focus on minimizing scarring while ensuring complete removal of the sinus. This results in a cleaner, aesthetically acceptable appearance of the treated area.",
        },

        {
          subHeading: "Before & After Results",
          images: [pilonidalImg],
        },
        {
          faqs: [
            {
              question: "What causes pilonidal sinus?",
              answer:
                "Pilonidal sinus is often caused by ingrown hairs or debris in the sacral area, leading to infection and abscess formation. Prolonged sitting or friction can exacerbate the condition, common in young adults. Poor hygiene may also contribute to its development. Our team addresses the root cause to prevent recurrence through surgical intervention.",
            },
            {
              question: "Is surgery the only treatment for pilonidal sinus?",
              answer:
                "Surgery is often required for chronic or severe pilonidal sinus to prevent recurrence and complications. Early cases may respond to non-surgical treatments like antibiotics or drainage, but these are less effective long-term. Minimally invasive techniques ensure quick recovery and lasting relief. A consultation determines the best approach for each patient.",
            },
            {
              question: "How long is recovery after pilonidal sinus surgery?",
              answer:
                "Most patients recover within 1–2 weeks, resuming normal activities within a few days for minimally invasive procedures. Full healing, including wound closure, may take a few months for more extensive surgeries. Patients should keep the area clean and avoid prolonged sitting. Follow-up visits ensure proper healing and prevent complications.",
            },
            {
              question: "Can pilonidal sinus recur after surgery?",
              answer:
                "Our minimally invasive techniques significantly reduce recurrence rates by fully removing the sinus tract. Proper post-operative care, including good hygiene and avoiding prolonged sitting, further lowers the risk. In rare cases, recurrence may occur due to new hair or debris accumulation. Regular monitoring and patient education help prevent this.",
            },
            {
              question: "Is pilonidal sinus surgery painful?",
              answer:
                "The procedure is performed under local or general anesthesia, ensuring no pain during surgery. Post-operative discomfort is typically mild and manageable with prescribed medication. Our techniques minimize tissue trauma for a smoother recovery. Detailed aftercare instructions help patients manage discomfort and promote healing.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Reconstructive Surgery",
    link: "Bed Sore Surgery",
    banner: bedSoreBanner,
    heading: "Bed Sore Surgery",
    paragraph:
      "Effective surgical solutions for chronic bed sores and pressure ulcers.",
    cta: "Book an Appointment",
    details: {
      title: "Bed Sore Surgery (Pressure Ulcer Reconstruction)",
      description: `Bed sores, also known as pressure ulcers, are skin and tissue injuries caused by prolonged pressure, friction, or lack of blood flow—often affecting patients who are bedridden or have limited mobility. When left untreated, bed sores can become deep, infected, and difficult to heal with standard wound care.

Bed sore surgery involves removing dead or infected tissue (debridement) and reconstructing the wound area using skin grafts or local flap techniques. The goal is to promote healing, prevent infection, and restore skin integrity.

Our team uses advanced surgical methods to ensure faster recovery, reduced recurrence, and improved quality of life for patients. Surgery is typically combined with ongoing medical care, physiotherapy, and nutritional support to ensure long-term success.

We focus not only on wound closure but also on prevention—helping patients and caregivers with strategies to minimize pressure, improve circulation, and maintain skin health.`,
      image: [bedSoreImg],
      sections: [
        {
          subHeading: "Why Bed Sore Surgery?",
          text: "✔ Removes infected or dead tissue\n✔ Restores skin integrity\n✔ Prevents recurrence and complications",
        },
        {
          subHeading: "✔ Removes Infected or Dead Tissue",
          text: "Surgical debridement eliminates necrotic tissue, reducing infection risk and allowing healthy tissue to regenerate effectively.",
        },
        {
          subHeading: "✔ Restores Skin Integrity",
          text: "Using flap reconstruction or grafting techniques, surgery helps close chronic wounds and rebuild the damaged area for long-term healing.",
        },
        {
          subHeading: "✔ Prevents Recurrence",
          text: "Combined with proper care, surgical treatment reduces the chances of bed sore recurrence, improving patient comfort and quality of life.",
        },

        {
          subHeading: "Before & After Results",
          images: [bedSoreImg],
        },
        {
          faqs: [
            {
              question: "When is surgery needed for bed sores?",
              answer:
                "Surgery is recommended for stage 3 or stage 4 pressure ulcers where the wound is deep, infected, or not responding to conservative treatments like dressings and medications.",
            },
            {
              question: "What types of surgeries are done for bed sores?",
              answer:
                "Common procedures include debridement (removal of dead tissue), skin grafting, and flap reconstruction using nearby healthy tissue to cover the wound.",
            },
            {
              question: "How long is recovery after bed sore surgery?",
              answer:
                "Recovery time varies depending on wound size, patient health, and surgical technique. Initial healing may take 3–4 weeks, while complete recovery can take several months with ongoing care.",
            },
            {
              question: "Can bed sores come back after surgery?",
              answer:
                "Yes, recurrence is possible if preventive measures are not followed. Proper repositioning, skin care, nutrition, and physiotherapy help reduce the risk of new sores.",
            },
            {
              question: "Is bed sore surgery painful?",
              answer:
                "The surgery is performed under anesthesia, so there is no pain during the procedure. Mild discomfort or soreness may occur post-surgery, which is managed with prescribed medications.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Cosmetic Surgery",
    link: "Gynecomastia surgery",
    banner: gynemastiaBanner,
    heading: "Gynecomastia Surgery",
    paragraph: "Safe and modern gynaecosmatic cosmetic treatments.",
    cta: "Book an Appointment",
    details: {
      title: "Gynecomastia Procedures",
      description: `Gynecomastia, or male breast enlargement, can cause physical discomfort as well as emotional distress. Our specialized gynecomastia treatments are designed to address this condition safely, effectively, and with lasting results. The procedure involves removal of excess fat and glandular tissue to restore a flatter, firmer, and more masculine chest contour, helping patients regain confidence and improve body image.

We employ advanced surgical techniques such as liposuction, gland excision, or combination procedures tailored to each patient’s anatomy. These methods minimize tissue trauma, reduce scarring, and promote faster, smoother recovery. Incisions are strategically placed to remain discreet, ensuring natural-looking results without visible marks.

Patient comfort, safety, and satisfaction are our top priorities. Preoperative evaluation, personalized treatment planning, and post-operative care are integral parts of our approach. By addressing both aesthetic and functional aspects, we aim to achieve symmetry, proportion, and a natural chest appearance.

Our team’s expertise ensures that each patient receives comprehensive care, from initial consultation to full recovery. With meticulous attention to detail, modern techniques, and a focus on individual needs, we provide solutions that not only enhance physical appearance but also restore self-esteem and confidence.`,
      image: [gyneImg],
      sections: [
        {
          subHeading: "Treatments Offered",
          text: "✔ Male Breast Reduction \n✔  Advanced Surgical Techniques\n✔  Minimal Scarring \n✔ Patient Comfort & Safety  \n✔ Natural-Looking Results",
        },
        {
          subHeading: "✔ Male Breast Reduction",
          text: "Our treatment targets excess fat and glandular tissue in the male chest to reduce breast enlargement. The procedure restores a flatter and more masculine chest contour, improving both appearance and self-confidence.",
        },
        {
          subHeading: "✔ Advanced Surgical Techniques",
          text: "We use modern, minimally invasive techniques to ensure precise removal of tissue while minimizing trauma. These methods help reduce complications and promote faster, smoother recovery.",
        },
        {
          subHeading: "✔ Minimal Scarring",
          text: "Special attention is given to placing incisions discreetly and using techniques that reduce scar visibility, resulting in natural-looking chest contours post-surgery.",
        },
        {
          subHeading: "✔ Patient Comfort & Safety",
          text: "Our approach prioritizes patient comfort and safety throughout the procedure, from anesthesia to post-operative care, ensuring a stress-free and secure experience.",
        },
        {
          subHeading: "✔ Natural-Looking Results",
          text: "The goal of treatment is not just reduction but achieving a natural and symmetrical chest appearance that complements the patient’s body, helping restore confidence and body image.",
        },

        {
          subHeading: "Before & After Results",
          images: [gyneBA],
        },
        {
          faqs: [
            {
              question: "What is gynecosmatic (gynecomastia) surgery?",
              answer:
                "Gynecosmatic surgery, also called gynecomastia surgery, reduces enlarged male breasts. The procedure removes excess fat and gland tissue. It helps restore a flatter, masculine chest. Results look natural and boost confidence.",
            },
            {
              question: "Is gynecosmatic surgery safe?",
              answer:
                "Yes, it is generally safe when performed by qualified surgeons. We use advanced techniques to minimize risks. Sterile conditions ensure safety during surgery. Proper care leads to smooth recovery.",
            },
            {
              question:
                "How long does recovery take after gynecosmatic surgery?",
              answer:
                "Most patients resume normal work within 1–2 weeks. Heavy exercise should be avoided for 4–6 weeks. Swelling and bruising gradually reduce over time. Final results become visible after healing.",
            },
            {
              question: "Will the results look natural?",
              answer:
                "Yes, results are designed to look natural and balanced. Our surgeons focus on chest contouring for symmetry. Scars are kept minimal and fade with time. Patients feel more confident post-surgery.",
            },
            {
              question: "Who is a good candidate for gynecosmatic surgery?",
              answer:
                "Men with enlarged chest due to hormones, genetics, or obesity are candidates. Those with realistic expectations benefit most. A medical evaluation confirms suitability for surgery. Healthy lifestyle supports long-term results.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Cosmetic Surgery",
    link: "Liposuction",
    banner: liposuctionBanner,
    heading: "Liposuction & Body Contouring",
    paragraph: "Body contouring using modern liposuction techniques.",
    cta: "Book an Appointment",
    details: {
      title: "Liposuction & Body Contouring",
      description: ` Liposuction is a highly effective cosmetic procedure designed to remove stubborn fat deposits that are resistant to diet and exercise, helping patients achieve a more sculpted and proportionate body shape. Our treatments target specific areas such as the abdomen, thighs, arms, or flanks, allowing for precise contouring and enhancement of natural body lines.

We employ advanced liposuction techniques, including tumescent, laser-assisted, or ultrasound-assisted methods, which ensure safe, precise, and uniform fat removal. These techniques minimize tissue trauma, reduce post-operative discomfort, and promote faster recovery, allowing patients to return to daily activities quickly.

Beyond physical transformation, liposuction boosts confidence and self-esteem by helping patients feel more comfortable in their own skin. Our approach emphasizes natural-looking results that enhance body contours without leaving irregularities or unnatural shapes.

Patient safety and satisfaction are paramount. From thorough preoperative assessments to customized treatment plans and attentive post-operative care, we ensure a comprehensive, patient-centered experience.

Trust our expertise for professional liposuction solutions that combine advanced technology, surgical precision, and a commitment to achieving lasting, aesthetically pleasing results.`,
      image: [liposuctionImg],
      sections: [
        {
          subHeading: "Benefits",
          text: "✔ Safe fat removal\n✔ Improved body shape\n✔ Boost in confidence",
        },
        {
          subHeading: "✔ Safe Fat Removal",
          text: "Liposuction is performed using advanced techniques to ensure precise removal of stubborn fat while minimizing risks. Safety protocols and experienced surgeons make the procedure reliable and effective.",
        },
        {
          subHeading: "✔ Improved Body Shape",
          text: "Targeted fat removal helps contour the body, enhancing natural curves and proportions. Patients achieve a more toned and balanced appearance that complements their physique.",
        },
        {
          subHeading: "✔ Boost in Confidence",
          text: "By improving body contours and reducing areas of unwanted fat, liposuction helps patients feel more confident and comfortable in their own skin, positively impacting self-esteem and overall well-being.",
        },

        {
          subHeading: "Before & After Results",
          images: [liposuctionBA],
        },
        {
          faqs: [
            {
              question: "Is liposuction a weight loss solution?",
              answer:
                "Liposuction is not a weight loss solution but a body contouring procedure for removing stubborn fat deposits. It targets areas resistant to diet and exercise, like the abdomen or thighs. Patients should be near their ideal weight for best results. Maintaining a healthy lifestyle post-procedure ensures lasting outcomes.",
            },
            {
              question: "How long does recovery take after liposuction?",
              answer:
                "Most patients resume normal activities within 1–2 weeks, with full results visible in a few months. Initial swelling and bruising subside within days, but compression garments may be worn for weeks. Light activity is encouraged to promote healing. Follow-up visits monitor progress and ensure optimal recovery.",
            },
            {
              question: "Are the results of liposuction permanent?",
              answer:
                "Liposuction results are long-lasting if patients maintain a stable weight post-procedure. Removed fat cells do not regenerate, but remaining cells can expand if weight is gained. A healthy diet and exercise help preserve the contoured appearance. Our team provides guidance to support long-term results.",
            },
            {
              question: "Is liposuction painful?",
              answer:
                "Liposuction is performed under local or general anesthesia, ensuring no pain during the procedure. Post-operative discomfort, such as soreness or swelling, is manageable with prescribed medication. Our techniques minimize trauma for a smoother recovery. Detailed aftercare instructions help patients manage discomfort effectively.",
            },
            {
              question: "Who is a good candidate for liposuction?",
              answer:
                "Ideal candidates are healthy individuals with stubborn fat deposits resistant to diet and exercise. They should be near their ideal weight with realistic expectations for body contouring. A consultation assesses health and suitability for the procedure. Our team ensures personalized care to achieve desired outcomes.",
            },
          ],
        },
      ],
    },
  },
  {
    menu: "Cosmetic Surgery",
    link: "Hair Transplant",
    banner: hairTransplant,
    heading: "Hair Transplant",
    paragraph: "Restore hair with expert surgical methods.",
    cta: "Book an Appointment",
    details: {
      title: "Hair Transplant & Restoration",
      description: `Hair loss and baldness can have a significant impact on self-esteem and overall appearance. Our specialized hair transplant treatments are designed to restore hair permanently while ensuring natural-looking results that blend seamlessly with your existing hair.

We utilize advanced techniques such as FUT (Follicular Unit Transplantation) and FUE (Follicular Unit Extraction), selecting the method best suited for each patient’s hair type, scalp condition, and aesthetic goals. These precision techniques allow for accurate graft placement, minimal scarring, and optimal hair density, providing a fuller, natural appearance.

Our procedures are performed with minimal discomfort, using local anesthesia and careful surgical methods to ensure a safe and comfortable experience. Post-operative care and guidance are provided to support fast recovery and maximize graft survival.

Beyond the procedure itself, we emphasize comprehensive follow-up, including monitoring hair growth, managing any concerns, and offering guidance on long-term hair care. This ensures sustained results and patient satisfaction over time.

Our goal is not only to restore hair but also to boost confidence and improve quality of life. With expert care, advanced technology, and personalized treatment plans, we provide solutions that are effective, natural-looking, and long-lasting.`,
      image: [hairTransplantImg],
      sections: [
        {
          subHeading: "Why Hair Transplant?",
          text: "✔ Permanent solution for baldness\n✔ Natural-looking results\n✔ Boost in confidence",
        },
        {
          subHeading: "✔ Permanent Solution for Baldness",
          text: "Hair transplant provides a long-lasting solution to hair loss by relocating healthy hair follicles to bald or thinning areas. This ensures that hair growth is sustained over time, reducing the need for temporary fixes.",
        },
        {
          subHeading: "✔ Natural-Looking Results",
          text: "Using advanced FUT and FUE techniques, grafts are carefully placed to mimic natural hair patterns, ensuring a seamless and aesthetically pleasing appearance that blends with existing hair.",
        },
        {
          subHeading: "✔ Boost in Confidence",
          text: "Restoring hair helps improve self-esteem and overall appearance. Patients often experience a significant boost in confidence and feel more comfortable in personal and professional interactions.",
        },

        {
          subHeading: "Before & After Results",
          images: [hairTransplantBA],
        },
        {
          faqs: [
            {
              question: "Is hair transplant permanent?",
              answer:
                "Hair transplants are permanent because the transplanted hair comes from donor areas resistant to hair loss. These follicles continue to grow naturally in their new location. Patients can expect lasting results with proper care. Regular follow-ups ensure the transplant’s success and address any concerns.",
            },
            {
              question: "Does the hair transplant procedure hurt?",
              answer:
                "The procedure is performed under local anesthesia, ensuring minimal discomfort during the process. Patients may feel slight pressure or tugging but no significant pain. Post-operative soreness is mild and manageable with medication. Our team provides aftercare instructions to ensure a comfortable recovery.",
            },
            {
              question: "What is the recovery time for hair transplant?",
              answer:
                "Most patients return to work within 3–5 days, with full scalp healing taking a few weeks. Minor swelling or redness may occur but typically subsides quickly. Patients should avoid strenuous activity during early recovery. Follow-up visits monitor hair growth and ensure optimal results.",
            },
            {
              question: "When will I see results from a hair transplant?",
              answer:
                "Initial hair growth typically starts within 3–4 months post-procedure, with full results visible in 9–12 months. Transplanted hair may shed initially before regrowing stronger. Patience is key as hair thickens over time. Our team provides guidance to support expectations and track progress.",
            },
            {
              question: "Are the results of hair transplant natural-looking?",
              answer:
                "Modern FUT and FUE techniques ensure natural-looking results with proper hairline design and density. Our surgeons carefully match the patient’s natural hair pattern for seamless integration. Post-procedure care enhances the aesthetic outcome. Patients often report boosted confidence due to the natural appearance.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Cosmetic Surgery",
    link: "Rhinoplasty",
    banner: rhinoplastyBanner,
    heading: "Rhinoplasty",
    paragraph:
      "Enhance facial harmony and improve breathing with advanced nose reshaping surgery.",
    cta: "Book an Appointment",
    details: {
      title: "Rhinoplasty (Nose Reshaping Surgery)",
      description: `Rhinoplasty, commonly known as a nose job, is a surgical procedure designed to enhance the appearance and functionality of the nose. Whether performed for cosmetic reasons or to correct breathing issues, rhinoplasty helps achieve better facial harmony while improving nasal structure.

Our approach combines aesthetic precision with medical expertise, ensuring that the results look natural and complement the patient’s facial features. Rhinoplasty can address a variety of concerns, including nasal hump reduction, reshaping the nasal tip, correcting asymmetry, or repairing structural issues caused by injury or congenital conditions.

The surgery is performed under anesthesia to ensure patient comfort, and modern techniques are used to minimize scarring and downtime. Recovery time is typically short, with most patients resuming normal activities within a week, while final results gradually become visible as swelling subsides.

Our focus is on personalized treatment plans that meet both cosmetic and functional goals, ensuring long-term satisfaction and improved confidence.`,
      image: [rhinoplastyImg],
      sections: [
        {
          subHeading: "Why Rhinoplasty?",
          text: "✔ Improves facial balance\n✔ Corrects structural issues\n✔ Boosts confidence",
        },
        {
          subHeading: "✔ Improves Facial Balance",
          text: "Rhinoplasty reshapes the nose to achieve a balanced and harmonious facial profile, enhancing overall aesthetics while maintaining natural proportions.",
        },
        {
          subHeading: "✔ Corrects Structural Issues",
          text: "Beyond cosmetic changes, rhinoplasty also addresses breathing problems caused by deviated septum or structural deformities, improving overall nasal function.",
        },
        {
          subHeading: "✔ Boosts Confidence",
          text: "A refined nose that suits your facial features can significantly improve self-esteem, making patients feel more comfortable in personal and professional interactions.",
        },

        {
          subHeading: "Before & After Results",
          images: [rhinoplastyImg],
        },
        {
          faqs: [
            {
              question: "Is rhinoplasty only for cosmetic purposes?",
              answer:
                "No. While many patients choose rhinoplasty for cosmetic enhancement, it can also correct breathing difficulties, repair damage from injury, or address congenital nasal defects.",
            },
            {
              question: "Does rhinoplasty leave visible scars?",
              answer:
                "In most cases, rhinoplasty incisions are placed inside the nose (closed rhinoplasty), leaving no visible scars. In open rhinoplasty, a small incision may be made at the base of the nose, but it usually heals well and is barely noticeable.",
            },
            {
              question: "How long does recovery take after rhinoplasty?",
              answer:
                "Most patients can return to work or school within 7–10 days. Initial swelling and bruising subside within 2 weeks, but complete healing and final results may take up to 6–12 months.",
            },
            {
              question: "Will rhinoplasty change my overall facial appearance?",
              answer:
                "Rhinoplasty enhances facial harmony by reshaping the nose, but it does not drastically change your overall appearance. The goal is to achieve natural, balanced results that complement your existing features.",
            },
            {
              question: "Is rhinoplasty painful?",
              answer:
                "The procedure is performed under anesthesia, so you won’t feel pain during surgery. Some swelling, pressure, or mild discomfort may occur post-surgery, which can be managed with prescribed medication.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Cosmetic Surgery",
    link: "Breast Implants",
    banner: breastImplantBanner,
    heading: "Breast Implants",
    paragraph:
      "Enhance breast shape and size with safe, natural-looking implants.",
    cta: "Book an Appointment",
    details: {
      title: "Breast Implants (Breast Augmentation Surgery)",
      description: `Breast implant surgery, also known as breast augmentation, is a cosmetic procedure designed to enhance the size, shape, and symmetry of the breasts. This procedure is ideal for women who wish to increase breast volume, restore fullness lost after pregnancy or weight loss, or achieve a more balanced body contour.

We offer both silicone and saline implants, with a wide range of shapes and sizes tailored to meet each patient’s unique goals. Our surgeons carefully assess chest structure, skin elasticity, and aesthetic preferences before recommending the best implant option for natural-looking and long-lasting results.

The surgery is performed under anesthesia to ensure comfort, using advanced surgical techniques to minimize scarring and downtime. Patients typically experience a quick recovery and can resume normal activities within a few days. 

Our priority is safety, precision, and aesthetics—delivering results that enhance confidence and overall appearance while maintaining a natural look and feel.`,
      image: [breastImplantImg],
      sections: [
        {
          subHeading: "Why Breast Implants?",
          text: "✔ Enhance breast size and shape\n✔ Restore lost volume\n✔ Improve body proportion and confidence",
        },
        {
          subHeading: "✔ Enhance Size & Shape",
          text: "Breast implants provide a fuller, more defined look, allowing patients to achieve their desired cup size and breast contour.",
        },
        {
          subHeading: "✔ Restore Lost Volume",
          text: "Post-pregnancy, breastfeeding, or weight loss may reduce breast volume. Implants help restore natural fullness and firmness.",
        },
        {
          subHeading: "✔ Improve Proportion & Confidence",
          text: "A balanced breast shape enhances body proportion, which often results in improved self-esteem and confidence in daily life.",
        },

        {
          subHeading: "Before & After Results",
          images: [breastImplantImg],
        },
        {
          faqs: [
            {
              question: "Are breast implants safe?",
              answer:
                "Yes. Breast implant surgery is a safe and widely performed procedure when carried out by qualified surgeons. We use FDA-approved implants to ensure safety, quality, and long-lasting results.",
            },
            {
              question: "How long do breast implants last?",
              answer:
                "Breast implants are long-lasting but not considered lifetime devices. Many patients enjoy results for 10–15 years or longer before considering replacement or revision surgery.",
            },
            {
              question: "Will breast implants look natural?",
              answer:
                "Yes. With the right implant choice, placement, and surgical technique, breast implants can look and feel very natural. We customize the procedure based on each patient’s anatomy and goals.",
            },
            {
              question:
                "How long is the recovery after breast implant surgery?",
              answer:
                "Most patients return to light activities within 3–5 days and resume normal routines in 1–2 weeks. Full healing and settling of implants may take a few months.",
            },
            {
              question: "Can I breastfeed after getting implants?",
              answer:
                "In most cases, yes. Many women with implants are able to breastfeed normally, although outcomes may vary depending on implant placement and individual factors.",
            },
          ],
        },
      ],
    },
  },

  {
    menu: "Cosmetic Surgery",
    link: "Breast Reduction",
    banner: breastReductionBanner,
    heading: "Breast Reduction",
    paragraph:
      "Achieve comfort and proportion with advanced breast reduction surgery.",
    cta: "Book an Appointment",
    details: {
      title: "Breast Reduction (Reduction Mammoplasty)",
      description: `Breast reduction surgery, also known as reduction mammoplasty, is a procedure designed to reduce the size and weight of large breasts. Many women experience physical discomfort such as back pain, shoulder grooves, and posture problems due to heavy breasts. This surgery not only alleviates these issues but also improves breast shape, balance, and overall body proportion.

Our breast reduction procedures involve removing excess breast tissue, fat, and skin while reshaping the breasts to create a lifted, youthful contour. The goal is to achieve natural-looking results that enhance comfort and appearance.

Performed under anesthesia, the surgery uses advanced techniques to minimize scarring and recovery time. Patients typically experience immediate relief from physical discomfort and a significant boost in confidence.

At our center, we emphasize personalized treatment—considering body frame, breast density, and patient goals—to ensure safe outcomes, natural aesthetics, and long-term satisfaction.`,
      image: [breastReductionImg],
      sections: [
        {
          subHeading: "Why Breast Reduction?",
          text: "✔ Relief from back, neck, and shoulder pain\n✔ Improved posture and comfort\n✔ Balanced and proportionate body contour",
        },
        {
          subHeading: "✔ Relief from Physical Discomfort",
          text: "Breast reduction helps relieve chronic back, neck, and shoulder pain caused by overly large breasts, improving daily comfort and mobility.",
        },
        {
          subHeading: "✔ Improved Posture & Comfort",
          text: "By reducing breast weight, patients often experience improved posture, reduced skin irritation, and greater ease in physical activity.",
        },
        {
          subHeading: "✔ Balanced Body Contour",
          text: "The procedure creates a more proportionate breast size that complements the patient’s overall body shape, enhancing aesthetics and self-confidence.",
        },

        {
          subHeading: "Before & After Results",
          images: [breastReductionImg],
        },
        {
          faqs: [
            {
              question: "Who is a good candidate for breast reduction?",
              answer:
                "Women with large, heavy breasts who experience physical discomfort such as back, neck, or shoulder pain, skin irritation, or posture problems are good candidates for breast reduction surgery.",
            },
            {
              question:
                "Will breast reduction affect my ability to breastfeed?",
              answer:
                "In some cases, breastfeeding may be affected depending on the surgical technique used. Our surgeons discuss this in detail during consultation to help you make an informed decision.",
            },
            {
              question: "How long does recovery take after breast reduction?",
              answer:
                "Most patients can return to light activities within 1–2 weeks. Swelling and healing continue for a few months, with final results becoming visible as the breasts settle into their new shape.",
            },
            {
              question: "Are the results of breast reduction permanent?",
              answer:
                "Yes. The removed tissue does not grow back, so the results are permanent. However, factors like weight changes, pregnancy, or aging may affect breast shape over time.",
            },
            {
              question: "Will there be visible scars after breast reduction?",
              answer:
                "Some scarring is inevitable, but modern surgical techniques place incisions in discreet areas and ensure scars fade significantly over time. Most patients find scars become minimally noticeable.",
            },
          ],
        },
      ],
    },
  },

  // ----------------- GALLERY -----------------
  {
    menu: "Gallery",
    link: "Before & After",
    banner: "/images/gallery-before-after.jpg",
    heading: "Before & After Transformations",
    paragraph: "See the remarkable results of our treatments.",
    cta: "Book an Appointment",
    details: {
      title: "Before & After Gallery",
      description:
        "Explore our gallery showcasing patient transformations from various treatments. Images highlight the success of our surgical and non-surgical procedures. See remarkable improvements in aesthetics and function. Each case reflects our commitment to excellence. Browse to understand the impact of our care. Trust us for transformative results.",
      sections: [
        {
          subHeading: "Before & After Images",
          images: [
            "/images/gallery-case1-before.jpg",
            "/images/gallery-case1-after.jpg",
          ],
        },
      ],
    },
  },
  {
    menu: "Gallery",
    link: "Videos",
    banner: "/images/gallery-videos.jpg",
    heading: "Treatment Videos",
    paragraph: "Watch video demonstrations of procedures and results.",
    cta: "Book an Appointment",
    details: {
      title: "Treatment Videos",
      description:
        "Our video collection features real patient stories and treatment outcomes. Watch demonstrations of surgical and non-surgical procedures. Videos showcase the precision and care in our work. Learn about the recovery process and results. Explore to see our expertise in action. Trust us for transformative care.",
      sections: [
        {
          subHeading: "Before & After Results",
          images: ["/images/videos-before.jpg", "/images/videos-after.jpg"],
        },
      ],
    },
  },
];

function normalize(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

function DynamicPage() {
  const { menu, link } = useParams();
  const currentMenu = menus.find((m) => normalize(m.name) === menu);
  if (!currentMenu) return <PageNotFound />;

  const content = pageContent.find(
    (p) => normalize(p.menu) === menu && normalize(p.link) === link
  );

  return (
    <>
      <div className={style.pageWrapper}>
        {content ? (
          <>
            {/* 🔹 Banner Section */}
            <div className={style.bannerSection}>
              <img
                src={content.banner}
                alt={content.heading}
                className={style.bannerImg}
              />
              <div className={style.bannerText}>
                <h1>{content.heading}</h1>
                <p>{content.paragraph}</p>
                <Link to="/BookingAppointment" className={style.ctaBtn}>
                  {content.cta}
                </Link>
              </div>
            </div>

            {/* 🔹 Details Section */}
            {content.details && (
              <div className={style.detailsSection}>
                <h2>{content.details.title}</h2>

                <div className={style.deswrap}>
                  <div className={style.box}>
                    <p>{content.details.description}</p>
                  </div>

                  {content.details.image && (
                    <div className={style.box}>
                      <img src={content.details.image} alt="img" />
                    </div>
                  )}
                </div>

                {content.details.sections &&
                  content.details.sections.map((section, idx) => (
                    <div key={idx} className={style.detailBlock}>
                      <h3>{section.subHeading}</h3>
                      {section.text && (
                        <p className={style.detailText}>{section.text}</p>
                      )}

                      {/* Agar images diye gaye ho to */}
                      {section.images && (
                        <div className={style.imageGallery}>
                          {section.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt={`${section.subHeading} ${i + 1}`}
                              className={style.detailImage}
                            />
                          ))}
                        </div>
                      )}

                      {/* 🔹 FAQ Section */}
                      {section.faqs && (
                        <div className={style.faqSection}>
                          <h1 className={style.faqHeading}>
                            Frequently Asked Questions
                          </h1>
                          {section.faqs.map((faq, fIdx) => {
                            const [open, setOpen] = useState(false);
                            const answerId = `faq-answer-${fIdx}`; // Unique ID for accessibility

                            return (
                              <div key={fIdx} className={style.faqItem}>
                                <div className={style.faqHeader}>
                                  <h4 className={style.faqQuestion}>
                                    {faq.question}
                                  </h4>
                                  <button
                                    className={style.toggleBtn}
                                    onClick={() => setOpen(!open)}
                                    aria-expanded={open}
                                    aria-controls={answerId}
                                  >
                                    {open ? "Hide" : "Show"}
                                  </button>
                                </div>
                                <div
                                  className={`${style.faqAnswer} ${
                                    open ? style.open : ""
                                  }`}
                                  id={answerId}
                                >
                                  <p>{faq.answer}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}

            <AppointmentForm />
            <FeedbackCarousel />
          </>
        ) : (
          <div className={style.subLinks}>
            <PageNotFound />
          </div>
        )}
      </div>
    </>
  );
}

export default DynamicPage;

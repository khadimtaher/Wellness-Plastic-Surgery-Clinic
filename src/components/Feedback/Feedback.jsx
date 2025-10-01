import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import style from "./Feedback.module.css";

import mandp1 from "../../Images/mandp1.jpg";
import mandp2 from "../../Images/mandp2.jpg";
import mandp3 from "../../Images/mandp3.jpg";
import mandp4 from "../../Images/mandp4.jpg";
import mandp5 from "../../Images/mandp5.jpg";
import mandp6 from "../../Images/mandp6.jpg";
import mandp7 from "../../Images/mandp7.jpg";
import mandp8 from "../../Images/mandp8.jpg";

const feedbacks = [
  {
    name: "Bhaswan Nile",
    image: mandp1,
    rating: 5,
    feedback:
      "My experience at Wellness Plastic & Cosmetic Surgery Center with Dr. Sumit Sudhir was excellent. He explained everything clearly, the care was great, and I’m very satisfied with the results.",
  },
  {
    name: "Trimbak Dhule",
    image: mandp2,
    rating: 4,
    feedback:
      "I had leg surgery at Wellness Plastic & Cosmetic Surgery Center. Dr. Sumit Sudhir guided me well and the recovery was smooth. I’m very happy with the results and highly recommend him",
  },
  {
    name: "Piyush Salunke",
    image: mandp3,
    rating: 5,
    feedback:
      "I had finger replantation at Wellness Plastic & Cosmetic Surgery Center. Dr. Sumit Sudhir guided me well, the care was excellent, and I’m very happy with the results",
  },
  {
    name: "Shaurya Chavan",
    image: mandp4,
    rating: 5,
    feedback:
      "I had thumb replacement surgery at Wellness Plastic & Cosmetic Surgery Center. Dr. Sumit Sudhir explained the procedure clearly, the care was excellent, and I’m very satisfied with the results.",
  },
  {
    name: "Shaikh Isak",
    image: mandp5,
    rating: 4,
    feedback:
      "I had leg skin graft surgery at Wellness Plastic & Cosmetic Surgery Center. Dr. Sumit Sudhir and his team were very professional, explained everything clearly, and my leg healed beautifully. I’m extremely happy with the results.",
  },
  {
    name: "Avad Chaus",
    image: mandp6,
    rating: 5,
    feedback:
      "I underwent leg skin grafts at Wellness Plastic & Cosmetic Surgery Center. The procedure was smooth, the care was excellent, and my leg is healing well. I’m very satisfied with the outcome.",
  },

  {
    name: "Sangameshwar Bhasnure",
    image: mandp7,
    rating: 5,
    feedback:
      "Excellent care at Wellness Plastic & Cosmetic Surgery Center. Dr. Sumit Sudhir was professional, attentive, and I’m very happy with the results",
  },
  {
    name: "Gopal Gulale",
    image: mandp8,
    rating: 5,
    feedback:
      "My overall journey with Wellness Plastic and Cosmetic Surgery Center has been wonderful. Both Dr. Sumit and Dr. Vrushali are very skilled and compassionate. They not only provide the right medical advice but also treat patients with a lot of care. It truly feels like being treated by a family, not just doctors.",
  },
];

function FeedbackCarousel() {
  return (
    <div className={style.feedbackContainer}>
      <div className={style.feedbackSection}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true} // 🔹 Add this line
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {feedbacks.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className={style.card}>
                <div className={style.profileRow}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={style.profileImg}
                  />
                  <h3 className={style.name}>{item.name}</h3>
                </div>
                <div className={style.rating}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      color={i < item.rating ? "#ffc107" : "#e4e5e9"}
                    />
                  ))}
                </div>
                <p className={style.feedbackText}>{item.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeedbackCarousel;

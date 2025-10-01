import React from "react";
import { Link } from "react-router-dom";
import style from "./PageNotFound.module.css";
import errorImg from "../../Images/PageNotFound.jpg"; // ✅ apni image ka path lagao

function PageNotFound() {
  return (
    <div className={style.notFound}>
      <img src={errorImg} alt="404 Not Found" className={style.image} />
      <h1 className={style.heading}>Oops! Page Not Found</h1>
      <p className={style.text}>
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link to="/" className={style.homeBtn}>
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;

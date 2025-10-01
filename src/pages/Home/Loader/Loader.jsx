import React from "react";
import style from "./Loader.module.css";

function Loader() {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.imgbox}>
        <img
          src="/wellnessIcon.png"
          alt="Loading"
          className={style.zoomImage}
        />
      </div>
      <div className={style.loader}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    </div>
  );
}

export default Loader;
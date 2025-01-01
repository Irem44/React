import React from "react";
import "../css/Course.css";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;

  return (
    <div className="course">
      <div className="comment">
        <img src={image} width={160} height={150}></img>

        <h2>{title}</h2>

        <p>{description}</p>

        <h4 className="price">{price} ₺</h4>

        <a href={link}>Sayfaya Gitmek İçin Tıklayınız!</a>
      </div>
    </div>
  );
}

export default Course;

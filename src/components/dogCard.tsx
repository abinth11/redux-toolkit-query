import React, { FC } from "react";
import "./dogCard.css";

interface DogInfo {
  image: string;
  breed: string;
  lifespan: string;
  temperament: string;
}

const DogCard: FC<DogInfo> = ({ image, breed, lifespan, temperament }) => {
    console.log(breed)
  return (
    <div className="dog-card">
      <img src={image} alt={breed} className="dog-image" />
      <div className="dog-details">
        <h3 className="dog-breed">{breed}</h3>
        <p className="dog-life-span">Life Span: {lifespan}</p>
        <p className="dog-temperament">Temperament: {temperament}</p>
      </div>
    </div>
  );
};

export default DogCard;

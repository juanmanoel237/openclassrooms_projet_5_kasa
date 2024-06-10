import React from "react";
import starGrey from "../../assets/Image/rating/starGrey.png";
import starRed from "../../assets/Image/rating/starRed.png";
import './ratings.scss';

export default function Stars({rating}) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        const ratingStar = (i < rating) ? starRed : starGrey;
        stars.push(<img src={ratingStar} alt='rating' key={i} className="rating-star" />);
    }
    return stars;
}

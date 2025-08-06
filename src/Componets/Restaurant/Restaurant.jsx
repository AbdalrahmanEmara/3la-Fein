import React, { useState } from "react";
import './Restaurant.css'; 

export default function Restaurant(props) {
    const [heartColor, setHeartColor] = useState("#B1B5C4");
    
        const changeColor = () => {
        setHeartColor((prevColor) =>
        prevColor === "#B1B5C4" ? "#FD7FE9" : "#B1B5C4"
        );
        };
    

    const { image, name, location, rating, visitors  } = props;

    return (
   
        <div className="Restaurant position-relative ">
        <img src={image} alt={name} />

        <div className="restHeart">
        <svg
            onClick={changeColor}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
            d="M9.9987 4.00798C9.02545 3.074 7.70411 2.5 6.2487 2.5C3.25716 2.5 0.832031 4.92512 0.832031 7.91667C0.832031 13.2235 6.64065 16.1542 9.01019 17.1289C9.64834 17.3914 10.3491 17.3914 10.9872 17.1289C13.3567 16.1542 19.1654 13.2235 19.1654 7.91667C19.1654 4.92512 16.7402 2.5 13.7487 2.5C12.2933 2.5 10.9719 3.074 9.9987 4.00798Z"
            fill={heartColor}
            />
        </svg>
        </div>


        <p style={{ font: '500 16px "Poppins"', lineHeight: "24px", marginTop: "20px", height: "20px" }}>
            {name}
        </p>

    <div className="d-flex" style={{ marginTop: "8px", height: "20px" }}>
        <div className=" d-flex justify-content-center align-items-center ms-2" style={{ height: "20px", marginRight: "8px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.0944 10.83C12.0282 9.53371 12.6667 8.10903 12.6667 6.66699C12.6667 4.08966 10.5773 2.00033 8 2.00033C5.42267 2.00033 3.33333 4.08966 3.33333 6.66699C3.33333 8.10903 3.97179 9.53371 4.90564 10.83C5.83245 12.1165 6.97209 13.1672 7.78459 13.8326C7.91787 13.9418 8.08213 13.9418 8.21541 13.8326C9.02791 13.1672 10.1675 12.1165 11.0944 10.83ZM9.06026 14.8642C10.7831 13.4531 14 10.3281 14 6.66699C14 3.35328 11.3137 0.666992 8 0.666992C4.68629 0.666992 2 3.35328 2 6.66699C2 10.3281 5.21692 13.4531 6.93974 14.8642C7.56437 15.3757 8.43563 15.3757 9.06026 14.8642Z" fill="#777E91"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M7.9987 5.33333C7.26232 5.33333 6.66536 5.93029 6.66536 6.66667C6.66536 7.40305 7.26232 8 7.9987 8C8.73508 8 9.33203 7.40305 9.33203 6.66667C9.33203 5.93029 8.73508 5.33333 7.9987 5.33333ZM5.33203 6.66667C5.33203 5.19391 6.52594 4 7.9987 4C9.47146 4 10.6654 5.19391 10.6654 6.66667C10.6654 8.13943 9.47146 9.33333 7.9987 9.33333C6.52594 9.33333 5.33203 8.13943 5.33203 6.66667Z" fill="#777E91"/>
            </svg>
            <span className="location">&nbsp;{location}</span>
        </div>

        <div className="ms-auto d-flex justify-content-center align-items-center" style={{ height: "20px", marginRight: "8px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.26769 0.771504L8.34956 2.90038L10.7783 3.24313C11.9161 3.40365 12.4362 4.80771 11.5591 5.63743L9.81456 7.28626L10.2251 9.60958C10.4354 10.7998 9.17219 11.5991 8.17749 11.0923L5.99989 9.98149L3.82294 11.0919C2.82677 11.6004 1.56462 10.7984 1.77462 9.60963L2.18521 7.28626L0.440938 5.63766C-0.436791 4.80734 0.0851323 3.40358 1.22135 3.24315L3.6503 2.90036L4.73271 0.771504C5.25549 -0.257123 6.745 -0.257213 7.26769 0.771504Z" fill="#F6C92D"/>
            </svg>
            <span className="rating">&nbsp;{rating}</span>
            <span style={{ font: '600 12px "Poppins"', color: "#777E90" }}>&nbsp;({visitors})</span>
        </div>
    </div>

    <div style={{ margin: "16px auto", width: "240px" }}>
        <hr />
    </div>

        <div className="d-flex justify-content-center  buttons-container" style={{ height: "20px" }}>
            <button className="detailButton">Details</button>
            <button className="bookButton">Book Now</button>
        </div>
    </div>
   
    
    
    );
}

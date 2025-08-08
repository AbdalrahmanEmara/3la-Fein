import { Link } from "react-router-dom";
// import { useState } from "react";
import Style from './discoverCards.module.css'


function DiscoverCards(place) {
  // const [heartColor, setHeartColor] = useState('#B1B5C4');

  // const changeColor = () => {
  //     if(heartColor === '#B1B5C4') {
  //         setHeartColor('#FD7FE9')
  //     } else{
  //         setHeartColor('#B1B5C4')
  //     }
  // }

  const clock = (opened) => {
    if (opened) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none">
          <path
            d="M7.0013 11.667C8.23898 11.667 9.42596 11.1753 10.3011 10.3002C11.1763 9.42499 11.668 8.238 11.668 7.00033C11.668 5.76265 11.1763 4.57566 10.3011 3.70049C9.42596 2.82532 8.23898 2.33366 7.0013 2.33366C5.76363 2.33366 4.57664 2.82532 3.70147 3.70049C2.8263 4.57566 2.33464 5.76265 2.33464 7.00033C2.33464 8.238 2.8263 9.42499 3.70147 10.3002C4.57664 11.1753 5.76363 11.667 7.0013 11.667ZM7.0013 1.16699C7.76735 1.16699 8.52589 1.31788 9.23362 1.61103C9.94136 1.90418 10.5844 2.33386 11.1261 2.87554C11.6678 3.41721 12.0974 4.06027 12.3906 4.76801C12.6838 5.47574 12.8346 6.23428 12.8346 7.00033C12.8346 8.54742 12.2201 10.0312 11.1261 11.1251C10.0321 12.2191 8.5484 12.8337 7.0013 12.8337C3.77547 12.8337 1.16797 10.2087 1.16797 7.00033C1.16797 5.45323 1.78255 3.9695 2.87651 2.87554C3.97047 1.78157 5.45421 1.16699 7.0013 1.16699ZM7.29297 4.08366V7.14616L9.91797 8.70366L9.48047 9.42116L6.41797 7.58366V4.08366H7.29297Z"
            fill="#4AC63F"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none">
          <path
            d="M7.0013 11.667C8.23898 11.667 9.42596 11.1753 10.3011 10.3002C11.1763 9.42499 11.668 8.238 11.668 7.00033C11.668 5.76265 11.1763 4.57566 10.3011 3.70049C9.42596 2.82532 8.23898 2.33366 7.0013 2.33366C5.76363 2.33366 4.57664 2.82532 3.70147 3.70049C2.8263 4.57566 2.33464 5.76265 2.33464 7.00033C2.33464 8.238 2.8263 9.42499 3.70147 10.3002C4.57664 11.1753 5.76363 11.667 7.0013 11.667ZM7.0013 1.16699C7.76735 1.16699 8.52589 1.31788 9.23362 1.61103C9.94136 1.90418 10.5844 2.33386 11.1261 2.87554C11.6678 3.41721 12.0974 4.06027 12.3906 4.76801C12.6838 5.47574 12.8346 6.23428 12.8346 7.00033C12.8346 8.54742 12.2201 10.0312 11.1261 11.1251C10.0321 12.2191 8.5484 12.8337 7.0013 12.8337C3.77547 12.8337 1.16797 10.2087 1.16797 7.00033C1.16797 5.45323 1.78255 3.9695 2.87651 2.87554C3.97047 1.78157 5.45421 1.16699 7.0013 1.16699ZM7.29297 4.08366V7.14616L9.91797 8.70366L9.48047 9.42116L6.41797 7.58366V4.08366H7.29297Z"
            fill="#C63F41"
          />
        </svg>
      );
    }
  };

  return (
    <div className={`${Style.discoverCards}`}>
      <div className="position-relative">
        <Link to="/">
          <img src={place.image} />
        </Link>
        {/* <div className={Style.discoverHeart}>
                    <svg onClick={changeColor} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.9987 4.00798C9.02545 3.074 7.70411 2.5 6.2487 2.5C3.25716 2.5 0.832031 4.92512 0.832031 7.91667C0.832031 13.2235 6.64065 16.1542 9.01019 17.1289C9.64834 17.3914 10.3491 17.3914 10.9872 17.1289C13.3567 16.1542 19.1654 13.2235 19.1654 7.91667C19.1654 4.92512 16.7402 2.5 13.7487 2.5C12.2933 2.5 10.9719 3.074 9.9987 4.00798Z" fill={heartColor}/>
                    </svg>
                </div> */}
      </div>

      <p
        style={{
          font: '500 16px "Poppins"',
          lineHeight: "24px",
          marginTop: "20px",
          height: "20px",
        }}>
        {place.name}
      </p>

      <div className="d-flex" style={{ marginTop: "8px", height: "20px" }}>
        <p style={{ font: '400 12px "Poppins"', color: "#353945" }}>
          {place.category}
        </p>
        <div
          className="ms-auto d-flex justify-content-center"
          style={{ height: "20px", marginRight: "8px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.26769 0.771504L8.34956 2.90038L10.7783 3.24313C11.9161 3.40365 12.4362 4.80771 11.5591 5.63743L9.81456 7.28626L10.2251 9.60958C10.4354 10.7998 9.17219 11.5991 8.17749 11.0923L5.99989 9.98149L3.82294 11.0919C2.82677 11.6004 1.56462 10.7984 1.77462 9.60963L2.18521 7.28626L0.440938 5.63766C-0.436791 4.80734 0.0851323 3.40358 1.22135 3.24315L3.6503 2.90036L4.73271 0.771504C5.25549 -0.257123 6.745 -0.257213 7.26769 0.771504Z"
              fill="#F6C92D"
            />
          </svg>
          <span className={Style.rating}>&nbsp;{place.rating}</span>
          <span style={{ font: '600 12px "Poppins"', color: "#777E90" }}>
            &nbsp;({place.visitors})
          </span>
        </div>
      </div>

      <div style={{ margin: "16px auto", width: "240px" }}>
        <hr />
      </div>

      <div className="d-flex" style={{ height: "20px" }}>
        <p
          className={Style.opened}
          style={{ color: place.isOpen ? "#4AC63F" : "#C63F41" }}>
          {clock(place.isOpen)}&nbsp;{place.isOpen ? "Opened" : "Closed"}
        </p>
        <p
          className="ms-auto d-flex align-items-center"
          style={{
            font: '400 12px "Poppins"',
            color: "#777E90",
            marginRight: "8px",
            height: "20px",
          }}>
          {place.openDate}
        </p>
      </div>
    </div>
  );
}

export default DiscoverCards;
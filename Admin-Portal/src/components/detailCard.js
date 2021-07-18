import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src="https://www.w3schools.com/w3css/img_avatar3.png" class="card-img-top" alt="profilePic" /> 
          {/* {props.imgsrc} */}
          {/* card_img */}
          <div className="container">
            {/* card-body */}
            <span className="card_title"><h3>{props.title}</h3></span>
            {/* "card_category" */}
            <h1 className="card_name">user : {props.user}</h1>
            <h2 className="card_text">Description : {props.description}</h2>
            <h2 className="card_text">status : {props.status}</h2>
            <h2 className="card_text">Location : {props.location}</h2>
            {/* card_title */}
            <h2 className="card_text">Coordinates : {props.coordinates}</h2>
            <h2 className="card_text">Tag : {props.tag}</h2>
            {/* <a href={props.link}  > */}
            {/* className="btn btn-primary" */}
              {/* Go Somewhere */}
              {/* <button className="button">M</button> */}
            {/* </a> */}
          </div>
        </div>
      </div>
  </>
  );
}

export default Cards;

import React from "react";

const ContactCard = (props) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">{props.contact.name}</div>
        <div className="">{props.contact.email}</div>
      </div>
      <div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginLeft: "90%" }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;

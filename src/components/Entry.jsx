import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span className="name">{props.name}</span>
      </dt>
      <dd className="meaning">{props.meaning}</dd>
    </div>
  );
}

export default Entry;

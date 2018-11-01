import React from "react";

export default function Product(props) {
  return (
    <div>
      {props.name}
      {props.price}
      <img
        src={props.url}
        alt="brokeded"
        onError={e => {
          e.target.src =
            "https://www.imcusa.org/global_graphics/default-store-350x350.jpg";
        }}
      />
      <button onClick={() => props.delete(props.id)}>Delete</button>
      <button>edit</button>
    </div>
  );
}

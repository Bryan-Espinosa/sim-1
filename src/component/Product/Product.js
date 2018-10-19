import React from "react";

export default function Product(props) {
  console.log(props);
  return (
    <div>
      {props.name}
      {props.price}
    </div>
  );
}

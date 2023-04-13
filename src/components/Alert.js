import React from "react";

export default function Alert(props) {
  let cap = (word) => {
    let nt = word.toLowerCase();
    return nt.charAt(0).toUpperCase() + nt.slice(1);
  };
  return (
    props.alert && (
      <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{cap(props.alert.type)}:</strong> {props.alert.msg}
      </div>
    )
  );
}

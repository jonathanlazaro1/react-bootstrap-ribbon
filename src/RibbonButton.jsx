import React from "react";

function RibbonButtonTitle({ small = false, inline = false, ...props }) {
  return React.createElement(
    inline ? "span" : "div",
    {
      className: `ribbon-button-title${small === true ? "-small" : ""} ${
        !inline ? "mt-2" : ""
      }`,
      ...props
    },
    props.children
  );
}

function RibbonButtonIcon({ small = false, inline = false, ...props }) {
  return React.createElement(
    inline ? "span" : "div",
    { className: `ribbon-icon${small === true ? "-small" : ""}`, ...props },
    props.children
  );
}

function RibbonButton(props) {
  return (
    <button className="btn btn-light btn-block m-1" {...props}>
      {props.children}
    </button>
  );
}

RibbonButton.Icon = RibbonButtonIcon;
RibbonButton.Title = RibbonButtonTitle;

export { RibbonButton as default, RibbonButtonIcon, RibbonButtonTitle };

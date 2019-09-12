import React from "react";

function RibbonGroup({ colClass = "col", title = "", ...props }) {
  return (
    <div className={`ribbon-group ${colClass}`} {...props}>
      <div className="d-flex justify-content-around h-75">{props.children}</div>
      <div className="d-flex justify-content-center h-25 mt-1 ribbon-group-title">
        {title}
      </div>
    </div>
  );
}

export default RibbonGroup;

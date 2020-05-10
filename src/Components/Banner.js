import React from "react";
import CopyrightText from "../static/copyright.html";

const Banner = () => {
  return (
    <React.Fragment>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: CopyrightText }}
      />
    </React.Fragment>
  );
};

export default Banner;

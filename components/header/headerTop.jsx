import React from "react";
import Link from "next/link";
import FormHeader from "./formheader";
import Branding from "./branding";

const HeaderTop = () => {
  return (
    <div className="top-header ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Branding />
          </div>
          <div className="col-9 col-lg-6">
            <FormHeader />
          </div>
          <div className="d-none d-lg-block col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;

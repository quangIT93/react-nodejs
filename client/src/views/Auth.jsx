import React from "react";
import { Outlet } from "react-router-dom";
function Auth() {
  const body = <Outlet />;
  return (
    <>
      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1>WellCome To Web of Thái Minh Quang</h1>
            <h4>Please login or register! Thank you!</h4>
            {body}
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;

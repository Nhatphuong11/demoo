import React from "react";
import { QRCode } from "antd";

function DemoAntd() {
  return (
    <div>
      <QRCode
        errorLevel="H"
        value="https://www.youtube.com/"
      />
    </div>
  );
}

export default DemoAntd;

import React from "react";
import { MicroApp } from "umi";
import { Spin } from "antd";

export default function Slave2() {
  return (
    <MicroApp
      name="slave2"
      base="/slave2"
      autoCaptureError
      // autoSetLoading
      loader={(loader) => {
        console.log("====================================");
        console.log(loader);
        console.log("====================================");
        return <Spin spinning={loader} />;
      }}
    />
  );
}

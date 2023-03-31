import React, { useState } from "react";
import { MicroApp, connect } from "umi";
import { Spin, ConfigProvider } from "antd";

function Slave2(props) {
  const [masterState, setMasterState] = useState<any>({
    slogan: "Hello MicroFrontend",
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <MicroApp
        name="slave2"
        // base="/slave2"
        autoCaptureError
        autoSetLoading
        loader={(loader) => <Spin spinning={loader} />}
        masterState={masterState}
        setMasterState={setMasterState}
      />
    </ConfigProvider>
  );
}

export default connect(({ global }) => ({
  global,
}))(Slave2);

import { Button } from "antd";
import { useState } from "react";

export default () => {
  const [state, setState] = useState(false);
  return (
    <Button type="primary" onClick={() => setState(!state)}>
      {String(state)}
    </Button>
  );
};

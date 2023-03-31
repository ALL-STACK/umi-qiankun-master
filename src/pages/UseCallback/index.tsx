import { useState, useCallback } from "react";
import { Button } from "antd";
import Child from "./child";

export default () => {
  const [count, setCount] = useState(1);
  const [otherState, setOtherState] = useState(false);

  const myCallback = useCallback(() => {
    console.log(count);
  }, [count]);

  console.log("父组件刷新");

  return (
    <div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        点我加
      </Button>
      {count}
      <Button onClick={() => setOtherState(!otherState)}>改变状态</Button>
      {String(otherState)}
      <Child myCallback={myCallback} />
    </div>
  );
};

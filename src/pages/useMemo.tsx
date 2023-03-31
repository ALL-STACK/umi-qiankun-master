import { useState, useMemo } from "react";
import { Button } from "antd";

export default () => {
  const [count, setCount] = useState(1);
  const [otherState, setOtherState] = useState(false);

  const myNum = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  console.log('====================================');
  console.log('刷新');
  console.log('====================================');

  return (
    <div>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        点我加
      </Button>
      {myNum}
      <Button onClick={() => setOtherState(!otherState)}>改变状态</Button>
      {String(otherState)}
    </div>
  );
};

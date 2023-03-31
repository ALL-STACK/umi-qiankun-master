import { useState, useCallback, memo, useEffect } from "react";
import { Button } from "antd";

const Child = ({ myCallback }) => {
  useEffect(() => {
    myCallback();
  }, [myCallback]);
  console.log('子组件更新');
  return <div></div>;
};

export default memo(Child);

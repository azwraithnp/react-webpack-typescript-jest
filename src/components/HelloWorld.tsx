import { Button } from 'antd';
import React from 'react';

const HelloWorld: React.FC<{}> = () => {
  const hello = 'hello';

  return (
    <div>
      <Button>{hello}</Button>
    </div>
  );
};

export default HelloWorld;

import React from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
const ParentComponent1 = () => {
  return (
    <div>
        <ChildComponent1 color={"Black"}></ChildComponent1>
        <ChildComponent2 color={"Yellow"}></ChildComponent2>
    </div>
  )
}
export default ParentComponent1;
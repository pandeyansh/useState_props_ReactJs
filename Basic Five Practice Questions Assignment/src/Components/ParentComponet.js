import React from 'react';
import ChildComponent from './ChildComponent';
const ParentComponet = () => {
  return (
    <div>
        <ChildComponent message={"My name is Lucifer!"}></ChildComponent>
    </div>
  )
}
export default ParentComponet;
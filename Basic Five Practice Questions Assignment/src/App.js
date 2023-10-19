import './App.css';
// import { useState } from 'react';
// import Counter from './Components/Counter';
// import ParentComponet from './Components/ParentComponet';
// import Form from './Components/Form';
// import ParentComponent1 from './Components/ParentComponent1';
// import Toggle from './Components/Toggle';
// import ChildComponent2 from './Components/ChildComponent2';
import ChildComponent from './Components/ChildComponent';
function App() {
  // const [count, updateCount] = useState(0);
  // const [product, setProduct] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(product)
  // }
  return (
    <div className="App">
      <ChildComponent message="Hello! Ansh Pandey!!" />
      {/* <ChildComponent2 /> */}
      {/* <Counter initialValue={count} increase={<button onClick={()=>updateCount(count+1)}>Click</button>}></Counter> */}
      {/* <ParentComponet></ParentComponet> */}
      {/* <Form></Form> */}
      {/* <ParentComponent1></ParentComponent1> */}
      {/* <Toggle></Toggle> */}
    </div>
  );
}
export default App;
import React, {forwardRef  } from "react";
import './App.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const TooltipColor = () => {
  return <p style={{color:"pink"}}>Tooltip Component</p>
}

const Child = forwardRef((props,ref) => {
  return(
    <div ref={ref}>
      <div>First child</div>
      <div>Second child</div>
    </div>
  )
})



function App() {
  return (
    <div className="App">
      <div style={{marginBottom:'30px'}}>
        <Tippy arrow={false} delay={1000} placement='left' content="Simple Tooltip">
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{marginBottom:'30px'}}>
        <Tippy content={<p style={{color:'red'}}>HTML Tooltip</p>}>
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{marginBottom:'30px'}}>
        <Tippy content={<TooltipColor></TooltipColor>}>
          <button>Hover me</button>
        </Tippy>
      </div>
      <div style={{marginBottom:'30px'}}>
        <Tippy content={<TooltipColor></TooltipColor>}>
          <Child></Child>
        </Tippy>
      </div>
    </div>
  );
}

export default App;

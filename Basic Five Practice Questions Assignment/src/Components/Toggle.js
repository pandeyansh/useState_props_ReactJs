import React, { useState } from 'react'
const Toggle = () => {
  const [value, setValue] = useState(true);
  const checkhandle = (e)=> {
    if(e.target.checked===false){
      setValue(!value);
    }
    else{
      setValue(false);
    }
  }
  return (
    <div>
        <p>Click on checkbox to hide the paragraph!</p>
        <input type="checkbox" onChange={checkhandle}/>
        {value && <p>Lucifer is an American urban fantasy television series developed by Tom Kapinos based on the DC Comics character created by
        Neil Gaiman, Sam Kieth, and Mike Dringenberg. The character was introduced in The Sandman comic book series and later became the 
        protagonist of a spin-off comic series, both published by the DC Vertigo imprint. The television series premiered January 25, 2016, 
        and concluded September 10, 2021, produced by Jerry Bruckheimer Television, DC Entertainment, and Warner Bros. Television.</p>}
    </div>
  )
}
export default Toggle;
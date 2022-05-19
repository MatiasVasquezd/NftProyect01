import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';


export function Sample() {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide style={{ backgroundColor: '#41669d'}} >
      obra n1 <br />
      <button onClick={() => { ref.current.toggle(); }}> Toggle via button</button>
    </FrontSide>
    <BackSide style={{ backgroundColor: '#175852'}}>
      mail@gmail.com
    </BackSide>
  </Flippy>
  )
}
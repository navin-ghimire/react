import React, { useEffect, useState } from 'react'
import Sample from './Sample';

const Home = () => {
  const [show, setshow] = useState(true);


  return (
    <div>
      <button onClick={() => setshow(!show)}>Toggle</button>

      {show && <Sample show={show}/>}
    </div>
  )
}

export default Home

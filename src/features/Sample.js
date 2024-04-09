import React, { useEffect, useState } from 'react'

const Sample = () => {

  const [show, setshow] = useState(true);

  useEffect(() => {

    const keypress = (e) => {
      console.log('e');
    }
    window.addEventListener('keypress', keypress);

return () => {
 window.removeEventListener('keypress', keypress);
}
  }, [])

  return (
    <div>
      
      <h1>
        Hello  This is Dample Page
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quisquam nobis molestias esse velit magnam autem odit quo officia at?
      </p>
    </div>
  )
}

export default Sample

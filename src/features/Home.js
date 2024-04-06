import {useEffect, useState} from 'react'

const Home = () => {

  const [show, setshow] = useState(true);
  const [depend, setDepend] = useState(0);

  const handleshow = () => {
    setshow((prev) => !prev);
  }

const handleDepend = () => {
  setDepend((prev) => prev + 1);
  }


useEffect(() => {
  console.log('effect call');
  return () => {
    console.log('something');
  }
  }, [depend]); 


  return (
    <div className='p-5'>

      <h1>{depend}</h1>

      <button onClick={handleDepend} className=' px-2 py-2 bg-black text-white border-4 font-semibold rounded-xl'>InCrement</button>
      

      <div className='mt-3'>
        <button onClick={handleshow} className=' px-2 py-2 bg-black text-white border-4 font-semibold rounded-xl'>DeCrement</button>
      </div>
    {show && <h1 className='text-2xl text-pink-700'>Show Now</h1>}
    </div>
  )
}

export default Home





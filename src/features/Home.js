import React, { useEffect, useRef } from 'react'

const Home = () => {

  const tar = useRef(null);
  // useEffect(() => {
  //   tar.current.focus();
  // }, [])

  const goDown = () => {
    tar.current.scrollIntoView({ behavior: 'smooth'});
  }
  

 
  return (
    <div>
      <button onClick={goDown}><h1>Go To 7</h1></button>
      {/* <input ref={tar} className='border-2 border-black' type='text'/>
       */}

       <div className='bx1'>
        <h1>box1</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam cupiditate aspernatur hic libero ipsam consequatur quis mollitia tenetur, consequuntur, enim distinctio laborum dolore quam maiores possimus blanditiis omnis beatae est adipisci ut facere natus. Dolores, atque fuga dolorem illum rerum dolore dicta ducimus culpa animi id explicabo quae quod!
       </div>
       <div className='bx1'>
        <h1>box1</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam cupiditate aspernatur hic libero ipsam consequatur quis mollitia tenetur, consequuntur, enim distinctio laborum dolore quam maiores possimus blanditiis omnis beatae est adipisci ut facere natus. Dolores, atque fuga dolorem illum rerum dolore dicta ducimus culpa animi id explicabo quae quod!
       </div>
       <div className='bx1'>
        <h1>box1</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam cupiditate aspernatur hic libero ipsam consequatur quis mollitia tenetur, consequuntur, enim distinctio laborum dolore quam maiores possimus blanditiis omnis beatae est adipisci ut facere natus. Dolores, atque fuga dolorem illum rerum dolore dicta ducimus culpa animi id explicabo quae quod!
       </div>
       <div className='bx1'>
        <h1>box1</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam cupiditate aspernatur hic libero ipsam consequatur quis mollitia tenetur, consequuntur, enim distinctio laborum dolore quam maiores possimus blanditiis omnis beatae est adipisci ut facere natus. Dolores, atque fuga dolorem illum rerum dolore dicta ducimus culpa animi id explicabo quae quod!
       </div>
       <div className='bx1'>
        <h1>box1</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam cupiditate aspernatur hic libero ipsam consequatur quis mollitia tenetur, consequuntur, enim distinctio laborum dolore quam maiores possimus blanditiis omnis beatae est adipisci ut facere natus. Dolores, atque fuga dolorem illum rerum dolore dicta ducimus culpa animi id explicabo quae quod!
       </div>
       <div className='bx1'>
        <h1>box1</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam cupiditate aspernatur hic libero ipsam consequatur quis mollitia tenetur, consequuntur, enim distinctio laborum dolore quam maiores possimus blanditiis omnis beatae est adipisci ut facere natus. Dolores, atque fuga dolorem illum rerum dolore dicta ducimus culpa animi id explicabo quae quod!
       </div>
       <div ref={tar} className='bx7'>
        <h1>box7</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam cupiditate aspernatur hic libero ipsam consequatur quis mollitia tenetur, consequuntur, enim distinctio laborum dolore quam maiores possimus blanditiis omnis beatae est adipisci ut facere natus. Dolores, atque fuga dolorem illum rerum dolore dicta ducimus culpa animi id explicabo quae quod!
       </div>
    </div>
  )
}

export default Home

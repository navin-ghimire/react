// import React from 'react'
// import Header from '../../ui/Header'
// import { data } from '../dummy/Product'
// import { useNavigate } from 'react-router'


// const Home = () => {

//   const nav = useNavigate();

//   return (
//     <div className='p-3'>
//       {/* <Header /> */}
//       {/* <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1711539925041-c94ababfb763?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} className='bg-no-repeat bg-cover bg-center bg-slate-400 bg-blend-darken h-[500px] w-full'>

//       </div> */}

//       <div className='space-y-6'>
//         {data.products.map((products) => {
//           return <div
//             onClick={() => nav('/products/Detail/${products.id}',)}
//             className='shadow-xl p-3 cursor-pointer' key={products.id} >
//             <h1>{products.title}</h1>
//             <p>{products.description}</p>

//           </div>
//         })}
//       </div>

//     </div >
//   )
// }

// export default Home

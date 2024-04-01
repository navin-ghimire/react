

// const App = () => {

//   const products = [
//     {

//       "id": 1,
//       "title": "iPhone 9",
//       "description": "An apple mobile which is nothing like apple",
//       "price": 549,
//       "discountPercentage": 12.96,
//       "rating": 4.69,
//       "stock": 94,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       "images": [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//       ]
//     },
//     {
//       "id": 2,
//       "title": "iPhone X",
//       "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//       "price": 899,
//       "discountPercentage": 17.94,
//       "rating": 4.44,
//       "stock": 34,
//       "brand": "Apple",
//       "category": "smartphones",
//       "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
//       "images": [
//         "https://cdn.dummyjson.com/product-images/2/1.jpg",
//         "https://cdn.dummyjson.com/product-images/2/2.jpg",
//         "https://cdn.dummyjson.com/product-images/2/3.jpg",
//         "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
//       ]
//     },
//     {
//       "id": 3,
//       "title": "Samsung Universe 9",
//       "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
//       "price": 1249,
//       "discountPercentage": 15.46,
//       "rating": 4.09,
//       "stock": 36,
//       "brand": "Samsung",
//       "category": "smartphones",
//       "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
//       "images": [
//         "https://cdn.dummyjson.com/product-images/3/1.jpg"
//       ]
//     },
//   ];

//   return (
//     <div>
//       {products.map((products) => {
//         return <div className="bg-slate-700 space-y-2 mb-3 p-4">
//           <h1>{products.id}</h1>
//           <p>{products.title}</p>
//           <p>{products.description}</p>
//           <p>{products.price}</p>
//           <p>{products.discountPercentage}</p>
//           <p>{products.rating}</p>
//           <p>{products.stock}</p>
//           <p>{products.brand}</p>
//           <p>{products.category}</p>
//           <div>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtL1wQtITWJqaJsGYaBiEuMbL2VS0UbvaHw&usqp=CAU" alt="#" />

//           </div>

//         </div>
//       })}
//     </div>
//   )
// }
// export default App
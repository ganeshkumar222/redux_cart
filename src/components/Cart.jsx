/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { handlecart,handlenav } from '../redux/CartSlice'

export const Cart = () => {
    const data = useSelector((state)=>state.cart.value)
    const quantity = useSelector((state)=>state.cart.quantity)
    const amount = useSelector((state)=>state.cart.amount)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(handlenav())
    },[data])
  return  <div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
<a className="navbar-brand" href="#">Redux kart</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   <li className="nav-item">
     <a className="nav-link active" aria-current="page" href="#">Qunantity : {quantity}</a>
   </li>
   <li className="nav-item">
     <a className="nav-link active" href="#">Total : {amount}</a>
   </li>
 </ul>
 <span className="navbar-text">
   Change the quantity to see the price changes
 </span>
</div>
</div>
</nav>
  <div className="container">
 {data[0].products.map((e) => {
   // console.log(e.image) 
   
   return <div className="row mt-3" key={e.id}>
   <div className="card">
     <div className="row g-2">
       <div className="col-3">
         <img
           src={e.images[0]}
           alt=""
           className="img-fluid"
           style={{ height: "200px", width: "200px" }}
         />
       </div>
       <div className="col-7 mt-5">
         <div className="card-title">{e.title}</div>
         <div className="card-text">{e.description}</div>
         <div className="card-text m-1">
           <strong>{`price: ${e.price}`}</strong>
         </div>
       </div>
       <div className="col-2 mt-5 d-flex ">
         <p
           className="btn"
           onClick={() => {
              dispatch(handlecart({
             type:"decrement",
              id:e.id
            }))
           }}
         >
           -
         </p>
         <p className="text mt-1">{e.quantity}</p>
         <p
           className="btn"
           onClick={() => {
            dispatch(handlecart({
           type:"increment",
            id:e.id
          }))
         }}
         >
           +
         </p>
         {/* </div> */}
       </div>
     </div>
   </div>
 </div>
 
 })}
 </div> 
 
</div>
}

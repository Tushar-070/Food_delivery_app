import React, { useEffect, useRef } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'
import { useState } from 'react'
export default function Card(props) {
  let dispatch = useDispatchCart()
  let data = useCart()
  let priceRef=useRef()
  let options = props.options
  let priceOtions = Object.keys(options)
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('')
  const handleAddToCart = async () => {
    await dispatch({ type: 'ADD', id: props.foodItems._id, name: props.foodItems.name, price: finalPrice, qty: qty, size: size })
    console.log(data)
  }

  let finalPrice=qty * parseInt(options[size]) 
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <>
      <div>
        <div className="card" style={{ "width": "18rem", "border": "1px solid", "maxHeight": "360px" }}>
          <img src={props.foodItems.img} style={{ maxHeight: '170px', minHeight: '170px' }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodItems.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded" onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (<option key={i + 1} value={i + 1}>{i + 1}</option>)
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                {priceOtions.map((data) => {
                  return (
                    <option key={data} value={data}>{data}</option>
                  )
                })}
              </select>
              <div className="d-inline h-100 ">
              ₹{finalPrice}
              </div>
            </div>
            <hr />
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

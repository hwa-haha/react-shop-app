import React from 'react'

const OrderDetails = ({ params, searchParams}) => {

    const { hello } = searchParams;
    const { id } = params;  

  return (
    <div>{ id }</div>
  )
}

export default OrderDetails
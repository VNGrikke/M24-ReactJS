import React from 'react'

export default function bt5(props) {
    const { product } = props;
  
    return (
      <div>
        <h3>sản phẩm bên con</h3>
        <p>ID: {product.id}</p>
        <p>Tên: {product.name}</p>
        <p>giá: ${product.price}</p>
        <p>Số Lượng: {product.quantity}</p>
      </div>
    );
  }

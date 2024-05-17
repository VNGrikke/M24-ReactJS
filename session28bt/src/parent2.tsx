import React from 'react'
import Bt5 from './component/bt5'

export default function parent2() {
    const product = {
        id: 1,
        name: 'Iphone 16 promax',
        price: 10000,
        quantity: 3
      };
    
      return (
        <div>
            <h2>sna pham ben cha</h2>
            <p>ID: {product.id}</p>
            <p>Tên: {product.name}</p>
            <p>giá: ${product.price}</p>
            <p>Số Lượng: {product.quantity}</p>
            <Bt5 product={product} />
        </div>
      );
}

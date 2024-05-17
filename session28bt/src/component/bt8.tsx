import React from 'react'

interface ProductProps {
    product: {
      id: number;
      name: string;
      price: number;
      quantity: number;
    };
  }

export default function bt8<ProductProps>({ product}) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
        </tr>
    )
}

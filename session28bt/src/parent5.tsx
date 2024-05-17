import React, {useState} from 'react'
import Product from './component/bt8'

interface ProductData {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function parent5() {
    const [products, setProducts] = useState<ProductData[]>([
        { id: 1, name: 'cam', price: 1000, quantity: 5 },
        { id: 2, name: 'xoài', price: 15000, quantity: 1 },
        { id: 3, name: 'bưởi', price: 20000, quantity: 34 }
    ]);
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    )
}

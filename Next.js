// pages/products/index.tsx
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product._id} className="border p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

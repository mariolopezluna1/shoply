// pages/products/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (query.id) {
      fetch(`/api/products/${query.id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [query.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl mt-2 font-semibold">${product.price}</p>
    </div>
  );
}

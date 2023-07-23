export interface Product {
  id?: number;
  name: string;
  price: string;
}

export default async function Home() {
  const res = await fetch(
    "https://64b9502379b7c9def6c0e3b9.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );
  const products: Product[] = await res.json();
  return (
    <main>
      <form action="" className="flex flex-col max-w-xl gap-5 p-5 mx-auto ">
        <input
          type="text"
          placeholder="Enter Product name..."
          className="p-2 border border-gray-300 rounded-md "
        />
        <input
          type="text"
          placeholder="Enter Price name..."
          className="p-2 border border-gray-300 rounded-md "
        />
        <button className="p-2 text-white bg-blue-400 border rounded-md ">
          Add Product
        </button>
      </form>

      <h2>List of product</h2>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

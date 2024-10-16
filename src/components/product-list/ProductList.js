// import the css file
// Define arrow function / regular function
// export the arrow function (default / regular)
// add the return statement with the JSX

import "./ProductList.css";

export const ProductList = (props) => {
  const { products } = props;

  if (products.length === 0) return <h2>No products available</h2>;

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

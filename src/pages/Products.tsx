import { useGetProductsQuery } from "../api/apiSlice";
import styles from "./products.module.css";

const Products = () => {
  let {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useGetProductsQuery("post");

  let content;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  } else if (isError) {
    content = <h2>Cannot fetch products!</h2>;
  } else if (isSuccess) {
    content = products.products.map((product: any) => {
      return (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      );
    });
  }

  return <div className={styles.container}>{content}</div>;
};

export default Products;

import { useCallback } from "react";

//Components
import { Container } from "../components";

//Layout
import MainLayout from "../layout/MainLayout";

//hooks
import { useGetProducts } from "../hooks/queries/Product.queries";

import { SectionList } from "./Home";

const ProductPages = () => {
  const { data } = useGetProducts();
  const products = data?.data?.data;

  return (
    <MainLayout>
      <Container>
        <SectionList title="All Products" data={products} buttonTitle="See" />
      </Container>
    </MainLayout>
  );
};

export default ProductPages;

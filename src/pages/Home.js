import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

//Components
import { CardProduct, Container } from "../components";

//Layout
import MainLayout from "../layout/MainLayout";

//hooks
import { useGetProducts } from "../hooks/queries/Product.queries";

const SectionList = memo((props) => {
  const { data, title } = props;
  const navigate = useNavigate();
  const navigateTo = useCallback(
    (slug) => {
      navigate(`/product/${slug}`);
    },
    [navigate]
  );

  return (
    <div className="px-3 mt-3 text-xl">
      <h1>{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 lg:gap-5 gap-x-3 gap-y-3 mt-3">
        {data?.map((item) => (
          <CardProduct onClick={() => navigateTo(item.slug)} product={item} />
        ))}
      </div>
    </div>
  );
});

const JumbotronSection = memo(() => {
  return (
    <div className="flex items-center justify-center px-3 mt-3 bg-grey-100">
      <img
        className="object-cover w-full max-h-80"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPcedZZvXxrSvJiad6xYndiGmLv6VKQMf-Q&usqp=CAU"
        }
        alt="jumbotron"
      />
    </div>
  );
});

const HomePages = () => {
  const { data } = useGetProducts();
  const products = data?.data?.data;

  const filterByCommodity = useCallback(
    (commodity) => {
      return products?.filter((product) => product?.commodity === commodity);
    },
    [products]
  );

  return (
    <MainLayout>
      <Container>
        <JumbotronSection />
        <SectionList
          title="Tanaman Pangan"
          data={filterByCommodity("tanaman pangan")}
        />

        <SectionList
          title="Perkebunan"
          data={filterByCommodity("perkebunan")}
        />
      </Container>
    </MainLayout>
  );
};

export default HomePages;

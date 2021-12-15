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
          "http://127.0.0.1:8000/storage/images/A5OrOcsJ9RgylP9xAeBP3AD00YFVxDvODG6NwzPo.png"
        }
        alt="jumbotron"
      />
    </div>
  );
});

const HomePages = () => {
  const { data } = useGetProducts();
  const products = data?.data?.data;

  return (
    <MainLayout>
      <Container>
        <JumbotronSection />
        <SectionList title="Alat Berat" data={products} />

        <SectionList title="Alat Bantu" data={products} />
      </Container>
    </MainLayout>
  );
};

export default HomePages;

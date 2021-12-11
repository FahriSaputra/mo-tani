import { memo } from "react";
import { useNavigate } from "react-router-dom";

//Components
import { CardProduct, Container } from "../components";

//Layout
import MainLayout from "../layout/MainLayout";

const SectionList = memo((props) => {
  const { data, title, onClick } = props;
  return (
    <div className="px-3 mt-3 text-xl">
      <h1>{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 lg:gap-5 gap-x-3 gap-y-3 mt-3">
        {data?.map(() => (
          <CardProduct onClick={onClick} />
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
        src="https://awsimages.detik.net.id/community/media/visual/2020/09/02/traktor-listrik-1_169.png?w=700&q=90"
        alt="jumbotron"
      />
    </div>
  );
});

const HomePages = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/product/1");
  };

  return (
    <MainLayout>
      <Container>
        <JumbotronSection />
        <SectionList
          title="Alat Berat"
          data={[1, 2, 3, 4, 5]}
          onClick={navigateTo}
        />

        <SectionList
          title="Alat Bantu"
          data={[1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1]}
          onClick={navigateTo}
        />
      </Container>
    </MainLayout>
  );
};

export default HomePages;

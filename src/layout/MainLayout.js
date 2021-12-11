import { memo } from "react";
import Navbar from "../components/Navbar";

//components
import { Container } from "../components";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main {...props}>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default memo(MainLayout);

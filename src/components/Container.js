import { memo } from "react";

const Container = memo(({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg w-screen">
        <div>{children}</div>
      </div>
    </div>
  );
});

export default Container;

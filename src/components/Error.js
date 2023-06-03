import { useRouteError } from "react-router-dom";

const Error = function () {
  const err = useRouteError();
  const { data } = err;
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong!</h2>
      <h2>{data}</h2>
    </div>
  );
};

export default Error;

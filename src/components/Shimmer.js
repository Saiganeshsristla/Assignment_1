const Shimmer = () => {
  return (
    <>
      <div className="h-9 w-48 bg-gray-300 m-4 ml-24">
        <div></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {Array(12)
          .fill("")
          .map(function (data, index) {
            return (
              <div className="h-72 w-52 bg-gray-300 m-3" key={index}></div>
            );
          })}
      </div>
    </>
  );
};

export default Shimmer;

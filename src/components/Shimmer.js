const Shimmer = () => {
  return (
    <>
      <div className="shimmer-head">
        <div></div>
      </div>
      <div className="shimmer-container">
        {Array(10)
          .fill("")
          .map(function (data, index) {
            return <div className="shimmer-card" key={index}></div>;
          })}
      </div>
    </>
  );
};

export default Shimmer;

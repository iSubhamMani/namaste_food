const Shimmer = () => {
  return (
    <div
      className="shimmer-container w-[70%] mx-auto max-w-screen-xl mt-4 grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
    >
      <div className="shimmer-card w-[100%] bg-zinc-200 h-[200px] overflow-hidden rounded-lg"></div>
      <div className="shimmer-card w-[100%] bg-zinc-200 h-[200px] overflow-hidden rounded-lg"></div>
      <div className="shimmer-card w-[100%] bg-zinc-200 h-[200px] overflow-hidden rounded-lg"></div>
      <div className="shimmer-card w-[100%] bg-zinc-200 h-[200px] overflow-hidden rounded-lg"></div>
    </div>
  );
};

export default Shimmer;

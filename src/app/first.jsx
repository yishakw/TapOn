import Second from "./second";

const first = () => {
  return (
    <section className="flex flex-col justify-center mt-5 mb-7 items-center">
      {" "}
      <h1 className="text-5xl align-center  leading-[1.2em]">Precious_Life</h1>
      <h2 className="text-[10px]">
        Welcome... to Your path to mental wellness.
      </h2>
      <h3 className="text-[10px] "> Explore, connect, and health</h3>
      {/* <button className="btn btn-outline mt-5 btn-accent">Get Started</button> */}
      <Second />
    </section>
  );
};

export default first;

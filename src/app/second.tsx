const Second = () => {
  return (
    <div className="mt-2">
      {/* The button to open modal */}
      <label htmlFor="my_modal_7" className="btn btn-outline btn-accent">
        Join Us
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box w-[60%]">
          {/* <h3 className="text-lg font-bold ">Hello!</h3> */}
          <p className="py-4 ">
            Congratulations! You are part of the family.💐💐
          </p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>{" "}
    </div>
  );
};

export default Second;

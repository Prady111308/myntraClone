import { Link } from "react-router-dom";

const EmptyBagMeesage = () => {
  return (
    < div className="empty-bag">
      {/* <div className="alert alert-warning" role="alert"> */}
        <h3>Oops! Your Cart is Empty.</h3>
      {/* </div> */}
      <Link to="/"><span className="btn-add-bag">Shopping Continue</span></Link>
    </div>
  );
};

export default EmptyBagMeesage;

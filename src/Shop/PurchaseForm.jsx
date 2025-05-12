import React, { useContext, useReducer, useState } from "react";
import logo from "../assets/Cloud Airplane Logo.jpg";
import Formselect from "./Formselect";
import Button from "../ui/Button";
import Error from "../ui/Error";
import Info from "../ui/Info";
import { MyContext } from "../Context/CustomContext";
import { useNavigate } from "react-router-dom";

//StringtoList();

const plans = [
  { amount: 200, plan: "500mb", airtime_amount: 200, bill_type: "school fees" },
  {
    amount: 400,
    plan: "1gb",
    airtime_amount: 400,
    bill_type: "electricity levy",
  },
  { amount: 500, plan: "2gb", airtime_amount: 500, bill_type: "fees" },
  { amount: 200, plan: "500mb", airtime_amount: 200, bill_type: "" },
  { amount: 200, plan: "500mb", airtime_amount: 200, bill_type: "" },
];
let initialstate = {
  number: 0,
  plan: "",
  states: false,
  iserror: false,
  service_choosed: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "number":
      return { ...state, number: action.payload };
    case "plan":
      return { ...state, plan: action.payload };
    case "purchase":
      return { ...state, states: action.payload };
    case "error":
      return { ...state, iserror: action.payload };
    default:
      return state;
  }
}

const PurchaseForm = ({ background, service }) => {
  const [refresh, setRefresh] = useState(true);
  const { setPurchased } = useContext(MyContext);
  const [state, dispatch] = useReducer(reducer, initialstate);

  const navigate = useNavigate();
  function submit() {
    dispatch({ type: "purchase", payload: true });

    if (state.states === true) {
      if (
        (!(state.iserror || state.plan === 0) &&
          ((state.plan !== "" && state.number !== 0) || "") &&
          service !== 0) ||
        ""
      ) {
        setPurchased({ ...state, service_choosed: service });
        navigate("/record");
      }
      console.log(state);
    }
    setRefresh(!refresh);
  }

  if (background > 1)
    return <div className="w-full text-center">page under construction</div>;
  return (
    <form className="w-[70%] m-auto text-center">
      <input
        data-user="stick"
        className="m-6 w-[70%] hover:ring-offset-2 ring-2 ring-offset-2 ring-black transition-all outline-none text-blue-950 bg-blue-100 border-none  rounded-xl hover:ring-2 hover:ring-fuchsia-700 p-3"
        type="number"
        placeholder="07067424246"
        onChange={(e) => {
          if (state.number.length > 10 || isNaN(Number(state.number))) {
            dispatch({ type: "error", payload: true });
          } else {
            dispatch({ type: "error", payload: false });
          }
          dispatch({ type: "number", payload: e.target.value });
        }}
      />
      {state.iserror === true ? (
        <Error>invalid number or number is too long🚩</Error>
      ) : (
        ""
      )}
      <Formselect background={background} plans={plans} dispatch={dispatch} />
      {state.plan === 0 ? <Error>enter a valid plan🚩</Error> : ""}
      {(state.iserror || state.plan === 0) && state.states ? (
        <Info state={state.states} time={2000} refresh={refresh}>
          handle errors in form♨♨
        </Info>
      ) : (
        ""
      )}
      <img
        data-user="stick"
        className="h-36 mix-blend-darken w-full"
        src={logo}
        alt="logo"
      />

      <Button datauser={"stick"} submit={submit}>
        Submit
      </Button>
      {/*console.log(state.iserror || state.plan === 0)*/}
    </form>
  );
};

export default PurchaseForm;

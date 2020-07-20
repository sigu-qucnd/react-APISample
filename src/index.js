import React from "react";
import ReactDOM from "react-dom";

// import Msg from "./components/Msg"
// import Button from "./components/button"
import MsgList from "./components/MsgList"

const App = () => {
  return (
    <>
      <h2>Reactハンズオン！</h2>
      {/* <Msg color="red" >test</Msg>
      <Msg color="green" >ABC</Msg>
      <Msg color="aqua" >123</Msg>
      <Button/> */}
      <MsgList />
    </>
  ); 
};
 
ReactDOM.render(<App />, document.getElementById("root"));
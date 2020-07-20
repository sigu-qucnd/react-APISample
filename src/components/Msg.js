import React from "react";
import { tsPropertySignature } from "@babel/types";

const Msg = props => {
    return <p style = 
    {{ color: props.color}}>{props.message}</p>;
};

export default Msg;
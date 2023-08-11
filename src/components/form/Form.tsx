import React from "react";
import Input from "../input/Input";

export default function Form() {
  return (
    <div className=" bg-formBg  rounded-xl">
      <Input label={"Name"} placeholder={"Cool Person"} type={"text"} />
      <Input label={"Email"} placeholder={"you@cool.site"} type={"email"} />
      <Input
        isTextarea
        label="Message"
        placeholder={"Say hi!"}
        type={"number"}
      />
      <div className="p-5">
        <button className=" w-full rounded-lg p-3 text-white bg-buttonBg">
          Send
        </button>
      </div>
    </div>
  );
}

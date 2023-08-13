import React from "react";
import Input from "../input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IFormValues } from "@/app/interface";

export default function Form() {
  const { register, handleSubmit } = useForm<IFormValues>();
  const mutation = useMutation({
    mutationFn: (data: IFormValues) => {
      return axios.post("/api/contact", data);
    },
  });
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" bg-formBg  rounded-xl">
      <Input
        registerFn={() => register("name")}
        label={"Name"}
        placeholder={"Cool Person"}
        type={"text"}
      />
      <Input
        registerFn={() => register("senderEmail")}
        label={"Email"}
        placeholder={"you@cool.site"}
        type={"email"}
      />
      <Input
        registerFn={() => register("message")}
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
    </form>
  );
}

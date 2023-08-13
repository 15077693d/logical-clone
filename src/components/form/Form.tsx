import React, { useEffect } from "react";
import Input from "../input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IFormInputId, IFormValues } from "@/app/interface";
import { REQUIRED_ERROR_MESSAGE } from "@/constants/form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<IFormValues>();
  const mutation = useMutation({
    mutationFn: (data: IFormValues) => {
      return axios.post("/api/contact", data);
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    mutation.mutate(data);
  };
  useEffect(() => {
    if (mutation.isSuccess) {
      reset();
    }
  }, [mutation.isSuccess, reset]);
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className=" bg-formBg  rounded-xl"
    >
      <Input
        registerFn={() =>
          register(IFormInputId.name, { required: REQUIRED_ERROR_MESSAGE })
        }
        label={"Name"}
        placeholder={"Cool Person"}
        type={"text"}
        error={errors[IFormInputId.name]?.message}
      />
      <Input
        registerFn={() =>
          register(IFormInputId.senderEmail, {
            required: REQUIRED_ERROR_MESSAGE,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address.",
            },
          })
        }
        label={"Email"}
        placeholder={"you@cool.site"}
        type={"email"}
        error={errors[IFormInputId.senderEmail]?.message}
        novalidate
      />
      <Input
        registerFn={() =>
          register(IFormInputId.message, { required: REQUIRED_ERROR_MESSAGE })
        }
        isTextarea
        label="Message"
        placeholder={"Say hi!"}
        type={"number"}
        error={errors[IFormInputId.message]?.message}
      />
      <div className="p-5">
        <button
          className=" w-full rounded-lg p-3 text-white bg-buttonBg"
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? "Sending..." : "Send"}
        </button>
        {mutation.isSuccess && !isDirty && (
          <span className=" block mt-2 text-center">
            Message sent successfully! 🎉
          </span>
        )}
      </div>
    </form>
  );
}

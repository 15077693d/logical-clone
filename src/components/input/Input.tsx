import clsx from "clsx";
import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
type Props = {
  registerFn?: (() => UseFormRegisterReturn) | undefined;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  isTextarea?: boolean;
  isBottomBorderRequired?: boolean;
  error?: string;
  novalidate?: boolean;
};
export default function Input({
  label,
  placeholder,
  type,
  isTextarea = false,
  isBottomBorderRequired = true,
  registerFn,
  error,
}: Props) {
  return (
    <div
      className={clsx(
        " border-inputBorder  p-5",
        isBottomBorderRequired && "border-b-[1px]"
      )}
    >
      <label className="text-sm">{label}</label>
      {isTextarea ? (
        <textarea
          {...registerFn?.()}
          placeholder={placeholder}
          className="mt-2 w-full transition-colors block p-2 bg-inputBg border-inputBorder border-[1px]  rounded-lg focus:border-black"
        />
      ) : (
        <input
          {...registerFn?.()}
          type={type}
          placeholder={placeholder}
          className="mt-2 w-full transition-colors block p-2 bg-inputBg border-inputBorder border-[1px]  rounded-lg focus:border-black"
        />
      )}
      {error && (
        <span className=" text-inputError text-xs mt-2 block">{error}</span>
      )}
    </div>
  );
}

import clsx from "clsx";
import React, { HTMLInputTypeAttribute } from "react";
type Props = {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  isTextarea?: boolean;
  isBottomBorderRequired?: boolean;
};
export default function Input({
  label,
  placeholder,
  type,
  isTextarea = false,
  isBottomBorderRequired = true,
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
          placeholder={placeholder}
          className="mt-2 w-full transition-colors block p-2 bg-inputBg border-inputBorder border-[1px]  rounded-lg focus:border-black"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="mt-2 w-full transition-colors block p-2 bg-inputBg border-inputBorder border-[1px]  rounded-lg focus:border-black"
        />
      )}
    </div>
  );
}

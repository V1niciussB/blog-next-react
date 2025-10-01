import clsx from "clsx";
import { useId } from "react";

type InputCheckboxProps = {
  labelText?: string;
  type?: "checkbox";
} & React.ComponentProps<"input">;

export function InputCheckbox({
  labelText = "",
  type = "checkbox",
  ...props
}: InputCheckboxProps) {
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <input
        className={clsx(
          "w-4 h-4",
          "outline-none",
          "focus:ring-1",
          "focus:blue-600",
          props.className
        )}
        id={id}
        type={type}
        {...props}
      />

      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
}

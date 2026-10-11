import type React from "react";
import { useFormStatus } from "react-dom";
import "./box-buttons-from.styles.scss";

export const BoxButtonsForm: React.FC = () => {
  const { pending, data, method, action } = useFormStatus();
  const name: FormDataEntryValue | null | undefined = data?.get("name");

  console.log("The typed name is:", name);
  console.log("method", method);
  console.log("action", action);

  return (
    <div className="rootBoxButtonsForm">
      <button type="submit" disabled={pending}>
        {pending ? "Loading..." : "Submit"}
      </button>
      <button type="reset">Reset</button>
    </div>
  );
};

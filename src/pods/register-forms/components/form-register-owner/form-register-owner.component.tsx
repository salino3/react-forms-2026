import React, { useActionState, useEffect, useState } from "react";
import {
  initialErrorRegisterOwnerState,
  initialStateFormRegisterOwner,
  registerOwnerEvent,
  type FormErrorRegisterForm,
} from "@/utils";
import "./form-register-owner.styles.scss";

export const FormRegisterOwner: React.FC = () => {
  const [state, formAction, isPending] = useActionState(
    registerOwnerEvent,
    initialStateFormRegisterOwner,
  );

  const [fieldErrors, setFieldErrors] = useState<FormErrorRegisterForm>(
    initialErrorRegisterOwnerState,
  );

  const handleInputChange = (fieldName: keyof FormErrorRegisterForm) => {
    setFieldErrors((prev) => ({ ...prev, [fieldName]: "" }));
  };

  useEffect(() => {
    if (state.fieldErrors) {
      setFieldErrors(state.fieldErrors);
    }
  }, [state.fieldErrors]);

  return (
    <form action={formAction} id="rootFormRegisterOwner">
      <fieldset disabled={isPending}>
        <div
          className={`boxInput boxInputName ${fieldErrors?.name ? "has-error" : ""}`}
        >
          <label htmlFor="nameID">Name</label>
          <input
            type="text"
            placeholder="Insert your name"
            name="name"
            id="nameID"
            defaultValue={state.formData?.name ?? ""}
            onChange={() => handleInputChange("name")}
          />
          {fieldErrors?.name && (
            <span className="error-message">{fieldErrors.name}</span>
          )}
        </div>
        <div
          className={`boxInput boxInputEmail ${fieldErrors?.email ? "has-error" : ""}`}
        >
          <label htmlFor="emailID">Email</label>
          <input
            type="email"
            placeholder="Insert your email"
            name="email"
            id="emailID"
            defaultValue={state.formData?.email ?? ""}
            onChange={() => handleInputChange("email")}
          />
          {fieldErrors?.email && (
            <span className="error-message">{fieldErrors.email}</span>
          )}
        </div>
        <div
          className={`boxInput boxInputPhone ${fieldErrors?.phone ? "has-error" : ""}`}
        >
          <label htmlFor="phoneID">Phone Number</label>
          <input
            type="text"
            placeholder="Insert your name"
            name="phone"
            id="phoneID"
            defaultValue={state.formData?.phone ?? ""}
            onChange={() => handleInputChange("phone")}
          />
          {fieldErrors?.phone && (
            <span className="error-message">{fieldErrors.phone}</span>
          )}
        </div>
        <div className="boxFormButtons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </fieldset>
    </form>
  );
};

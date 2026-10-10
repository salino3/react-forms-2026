import React, { useActionState } from "react";
import "./form-register-owner.styles.scss";
import {
  // initialErrorRegisterOwnerState,
  // initialFormDataRegisterOwner,
  initialStateFormRegisterOwner,
  registerOwnerEvent,
  // type FormErrorRegisterForm,
} from "@/utils";
// import type { CreateOwner } from "@/store/interface";

export const FormRegisterOwner: React.FC = () => {
  const [state, formAction, isPending] = useActionState(
    registerOwnerEvent,
    initialStateFormRegisterOwner,
  );

  // const [formData, setFormData] = useState<CreateOwner>(
  //   initialFormDataRegisterOwner,
  // );

  // const [formErrorata, setFormErrorData] = useState<FormErrorRegisterForm>(
  //   initialErrorRegisterOwnerState,
  // );

  return (
    <form action={formAction} id="rootFormRegisterOwner">
      <fieldset disabled={isPending}>
        <div
          className={`boxInput boxInputName ${state.fieldErrors?.name ? "has-error" : ""}`}
        >
          <label htmlFor="nameID">Name</label>
          <input
            type="text"
            placeholder="Insert your name"
            name="name"
            id="nameID"
            defaultValue={state.formData?.name ?? ""}
          />
          {state.fieldErrors?.name && (
            <span className="error-message">{state.fieldErrors.name}</span>
          )}
        </div>
        <div
          className={`boxInput boxInputEmail ${state.fieldErrors?.email ? "has-error" : ""}`}
        >
          <label htmlFor="emailID">Email</label>
          <input
            type="email"
            placeholder="Insert your email"
            name="email"
            id="emailID"
            defaultValue={state.formData?.email ?? ""}
          />
          {state.fieldErrors?.email && (
            <span className="error-message">{state.fieldErrors.email}</span>
          )}
        </div>
        <div
          className={`boxInput boxInputPhone ${state.fieldErrors?.phone ? "has-error" : ""}`}
        >
          <label htmlFor="phoneID">Phone Number</label>
          <input
            type="text"
            placeholder="Insert your name"
            name="phone"
            id="phoneID"
            defaultValue={state.formData?.phone ?? ""}
          />
          {state.fieldErrors?.phone && (
            <span className="error-message">{state.fieldErrors.phone}</span>
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

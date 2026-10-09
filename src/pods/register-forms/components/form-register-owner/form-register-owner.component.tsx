import React, { useActionState, useState } from "react";
import "./form-register-owner.styles.scss";
import {
  initialErrorRegisterOwnerState,
  initialFormDataRegisterOwner,
  initialStateFormRegisterOwner,
  registerOwnerEvent,
  type CreateOwner,
  type FormErrorRegisterForm,
} from "@/utils";

export const FormRegisterOwner: React.FC = () => {
  const [state, formAction, isPending] = useActionState(
    registerOwnerEvent,
    initialStateFormRegisterOwner,
  );

  const [formData, setFormData] = useState<CreateOwner>(
    initialFormDataRegisterOwner,
  );

  const [formErrorata, setFormErrorData] = useState<FormErrorRegisterForm>(
    initialErrorRegisterOwnerState,
  );

  return (
    <form action={formAction} id="rootFormRegisterOwner">
      <fieldset disabled={isPending}>
        <div className={`boxInput boxInputName`}>
          <label htmlFor="nameID">Name</label>
          <input
            type="text"
            placeholder="Insert your name"
            name="name"
            id="nameID"
          />
        </div>
        <div className={`boxInput boxInputEmail`}>
          <label htmlFor="emailID">Email</label>
          <input
            type="email"
            placeholder="Insert your email"
            name="email"
            id="emailID"
          />
        </div>
        <div className={`boxInput boxInputPhone`}>
          <label htmlFor="phoneID">Phone Number</label>
          <input
            type="text"
            placeholder="Insert your name"
            name="phone"
            id="phoneID"
          />
        </div>
        <div className="boxFormButtons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </fieldset>
    </form>
  );
};

import React, { useActionState, useState } from "react";
import {
  initialErrorRegisterOwnerState,
  initialFormDataRegisterOwner,
  initialStateFormRegisterOwner,
  registerOwnerEvent,
  type CreateOwner,
  type FormErrorRegisterForm,
} from "../../../../utils";
import "./form-register-owner.styles.scss";

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
    <form id="rootFormRegisterOwner">
      <fieldset disabled={isPending}></fieldset>
    </form>
  );
};

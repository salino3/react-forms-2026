import React, { useActionState } from "react";
import {
  initialStateFormRegisterOwner,
  registerOwnerEvent,
} from "../../../../utils";
import "./form-register-owner.styles.scss";

export const FormRegisterOwner: React.FC = () => {
  const [state, formAction, isPending] = useActionState(
    registerOwnerEvent,
    initialStateFormRegisterOwner,
  );

  <form id="rootFormRegisterOwner">
    <fieldset disabled={isPending}></fieldset>
  </form>;
};

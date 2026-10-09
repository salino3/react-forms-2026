import { FormRegisterOwner } from "./components";
import "./register-form.styles.scss";

export const RegisterForms: React.FC = () => {
  return (
    <div className="rootRegisterForms">
      <h1>RegisterFormLayout</h1>

      <FormRegisterOwner />
    </div>
  );
};

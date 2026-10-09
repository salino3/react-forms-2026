import type React from "react";
import { RegisterForms } from "../../pods";
import "./register-form.styles.scss";

const RegisterFormLayout: React.FC = () => {
  return (
    <div className="rootRegisterFormLayout">
      <RegisterForms />
    </div>
  );
};

export default RegisterFormLayout;

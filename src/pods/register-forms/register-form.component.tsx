import type React from "react";
import { HeaderApp } from "@/common-app";
import { FormRegisterOwner } from "./components";
import "./register-form.styles.scss";

export const RegisterForms: React.FC = () => {
  return (
    <div className="rootRegisterForms">
      <HeaderApp page="Register Form Layout" />
      <FormRegisterOwner />
    </div>
  );
};

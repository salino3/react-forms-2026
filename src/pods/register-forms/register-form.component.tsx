import type React from "react";
import { HeaderApp } from "@/common-app";
import { FormRegisterOwner, FormUpdateOwner } from "./components";
import "./register-form.styles.scss";

export const RegisterForms: React.FC = () => {
  return (
    <div className="rootRegisterForms">
      <HeaderApp page="Form Layout" />
      <FormRegisterOwner />
      <hr
        style={{
          width: "100%",
        }}
      />
      <FormUpdateOwner />
    </div>
  );
};

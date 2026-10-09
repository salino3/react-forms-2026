import type { OwnerProps } from "../../store/interface";

export interface StateRegisterOwner {
  success: false;
  error: string;
  fieldErrors: null;
  formData: CreateOwner | null;
  data: OwnerProps | null;
}

export interface CreateOwner extends Omit<OwnerProps, "id" | "created_at"> {}

export const initialStateFormRegisterOwner: StateRegisterOwner = {
  success: false,
  error: "",
  fieldErrors: null,
  formData: null,
  data: null,
};

export const initialErrorDataState: Record<string, string> = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
};

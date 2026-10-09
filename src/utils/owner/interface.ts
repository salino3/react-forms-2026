import type { OwnerProps } from "@/store/interface";

export interface StateRegisterOwner {
  success: false;
  error: string;
  fieldErrors: null;
  formData: CreateOwner | null;
  data: OwnerProps | null;
}

export interface CreateOwner extends Omit<OwnerProps, "id" | "created_at"> {}

export const initialFormDataRegisterOwner: CreateOwner = {
  name: "",
  email: "",
  phone: "",
};

export interface FormErrorRegisterForm extends CreateOwner {}

export const initialErrorRegisterOwnerState: FormErrorRegisterForm = {
  name: "",
  email: "",
  phone: "",
};

export const initialStateFormRegisterOwner: StateRegisterOwner = {
  success: false,
  error: "",
  fieldErrors: null,
  formData: null,
  data: null,
};

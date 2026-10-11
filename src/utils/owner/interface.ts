import type { CreateOwner, OwnerProps, UpdateOwner } from "@/store/interface";

export interface StateRegisterOwner {
  success: boolean;
  error: string;
  fieldErrors: null | FormErrorRegisterForm;
  formData: CreateOwner | null;
  data: OwnerProps | null;
}

export const initialFormDataOwner: CreateOwner | UpdateOwner = {
  name: "",
  email: "",
  phone: "",
};

export interface FormErrorRegisterForm extends CreateOwner {}

export interface FormErrorUpdateForm extends CreateOwner {}

export const initialErrorOwnerState:
  | FormErrorRegisterForm
  | FormErrorUpdateForm = {
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

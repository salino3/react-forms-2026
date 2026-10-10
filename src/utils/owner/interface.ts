import type { CreateOwner, OwnerProps } from "@/store/interface";

export interface StateRegisterOwner {
  success: boolean;
  error: string;
  fieldErrors: null | FormErrorRegisterForm;
  formData: CreateOwner | null;
  data: OwnerProps | null;
}

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

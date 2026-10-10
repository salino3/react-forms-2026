import type { CreateOwner, OwnerProps } from "@/store/interface";
import { ServiceApp } from "@/store";
import { regexCorrectEmail, regexCorrectPhone } from "../utilities-app";
import {
  initialErrorRegisterOwnerState,
  type FormErrorRegisterForm,
  type StateRegisterOwner,
} from "./interface";

const createInitialErrorState = (): FormErrorRegisterForm =>
  initialErrorRegisterOwnerState;

export async function registerOwnerEvent(
  prevState: StateRegisterOwner,
  formData: FormData,
): Promise<StateRegisterOwner> {
  let formErrorData: FormErrorRegisterForm = createInitialErrorState();
  const rawData: CreateOwner = Object.fromEntries(
    formData.entries(),
  ) as CreateOwner;
  const { email, name, phone } = rawData;

  try {
    if (!name) {
      formErrorData = {
        ...formErrorData,
        name: "Property name is mandatory",
      };
    } else if (!email) {
      formErrorData = {
        ...formErrorData,
        email: "Property name is mandatory",
      };
    } else if (email && !regexCorrectEmail.test(email)) {
      formErrorData = {
        ...formErrorData,
        email: "Invalid Email format",
      };
    } else if (phone && !regexCorrectPhone.test(phone)) {
      formErrorData = {
        ...formErrorData,
        email: "Invalid Phone format",
      };
    }

    console.log("rawData", rawData);

    const hasErrors: boolean = Object.values(rawData).some((msg) => msg !== "");

    if (hasErrors) {
      return {
        ...prevState,
        fieldErrors: formErrorData,
        formData: rawData,
        error: "Error",
        success: false,
      };
    } else {
      const result: OwnerProps | unknown =
        await ServiceApp.createOwnerSA(rawData);

      if (result && typeof result === "object" && "id" in result) {
        return {
          ...prevState,
          success: true,
          data: result as OwnerProps,
          formData: rawData,
        };
      }
    }
    return prevState;
  } catch (err: unknown) {
    return {
      ...prevState,
      error: err as string,
      formData: rawData,
    };
  }
}

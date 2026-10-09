import {
  initialStateFormRegisterOwner,
  type StateRegisterOwner,
} from "./interface";

export async function registerOwnerEvent(
  prevState: StateRegisterOwner,
  formData: FormData,
): Promise<StateRegisterOwner> {
  try {
    return initialStateFormRegisterOwner;
  } catch (error) {
    return initialStateFormRegisterOwner;
  }
}

import {
  initialErrorRegisterOwnerState,
  initialStateFormRegisterOwner,
  type CreateOwner,
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
  try {
    const rawData: CreateOwner = Object.fromEntries(
      formData.entries(),
    ) as CreateOwner;

    console.log("rawData", rawData);
    return initialStateFormRegisterOwner;
  } catch (error) {
    return initialStateFormRegisterOwner;
  }
}

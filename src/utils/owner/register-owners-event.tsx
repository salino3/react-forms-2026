import {
  initialErrorRegisterOwnerState,
  initialStateFormRegisterOwner,
  type CreateOwner,
  type StateRegisterOwner,
} from "./interface";

const createInitialErrorState = (): CreateOwner =>
  initialErrorRegisterOwnerState;

export async function registerOwnerEvent(
  prevState: StateRegisterOwner,
  formData: FormData,
): Promise<StateRegisterOwner> {
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

import type { CreateOwner, OwnerProps } from "./interface";
import { VITE_URL_BACK } from "@/constants";

export class ServiceApp {
  static async createOwnerSA(body: CreateOwner): Promise<OwnerProps | unknown> {
    const response = await fetch(`${VITE_URL_BACK}/owners`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).catch((err: unknown) => {
      console.error(err);
      return Promise.reject(err);
    });

    if (!response.ok) {
      throw new Error(`Registration failed with status: ${response.status}`);
    }
    const data: OwnerProps = await response.json();

    return data;
  }
}

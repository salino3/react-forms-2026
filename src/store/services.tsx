import type { CreateOwner, OwnerProps, UpdateOwner } from "./interface";
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

  static async updateOwnerDataSA(
    body: UpdateOwner,
  ): Promise<OwnerProps | unknown> {
    const { id, ...rest } = body;
    const response = await fetch(`${VITE_URL_BACK}/owners/${String(id)}`, {
      method: "PUT",
      body: JSON.stringify(rest),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).catch((err: unknown) => {
      console.error(err);
      return Promise.reject(err);
    });

    if (!response.ok) {
      throw new Error(`Updating data failed with status: ${response.status}`);
    }
    const data: OwnerProps = await response.json();

    return data;
  }

  //
  static async getOwnerByID(
    id: string | number,
    signal?: AbortSignal,
  ): Promise<UpdateOwner | null> {
    try {
      const res = await fetch(`${VITE_URL_BACK}/owners/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        signal,
      });

      return await res.json();
    } catch (error: unknown) {
      if (error instanceof Error && error.name === "AbortError") {
        console.log("Request successfully canceled");
      }

      console.error("Error while searching for owner by ID:", error);
      return null;
    }
  }
}

import { ServicesApp, type UpdateOwner } from "@/store";
import { BoxButtonsForm } from "@/common-app";
import { useEffect, useState } from "react";
import {
  initialErrorOwnerState,
  initialFormDataOwner,
  type FormErrorUpdateForm,
} from "@/utils";
import "./form-update-owner.styles.scss";

export const FormUpdateOwner: React.FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);

  const [formData, setFormData] = useState<UpdateOwner>(initialFormDataOwner);
  const [fieldErrors, setFieldErrors] = useState<FormErrorUpdateForm>(
    initialErrorOwnerState,
  );

  const handleChangeData =
    (key: keyof UpdateOwner) =>
    (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
      setFormData((prev: UpdateOwner) => ({
        ...prev,
        [key]: e.target.value,
      }));

      setFieldErrors((prev: FormErrorUpdateForm) => ({
        ...prev,
        [key]: "",
      }));
    };

  //
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsloading(true);

    ServicesApp.updateOwnerDataSA(formData).finally(() => setIsloading(false));
  }

  //
  function handleReset(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormData(initialFormDataOwner);
    setFieldErrors(initialErrorOwnerState);
  }

  //
  useEffect(() => {
    setIsloading(true);
    const controller = new AbortController();
    const mockID = 3;
    ServicesApp.getOwnerByID(mockID, controller.signal)
      .then((res) => res && setFormData(res))
      .finally(() => setIsloading(false));

    return () => {
      // If endpoint is done, automatically there is not execution for 'controller.abort'
      controller.abort();
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      id="rootFormUpdateOwner"
    >
      {isLoading ? (
        "Waiting.."
      ) : (
        <fieldset disabled={isLoading}>
          <legend>Update Form</legend>
          <div
            className={`boxInput boxInputName ${fieldErrors?.name ? "has-error" : ""}`}
          >
            <label htmlFor="nameID">Name</label>
            <input
              type="text"
              placeholder="Insert your name"
              name="name"
              id="nameID"
              value={formData.name ?? ""}
              onChange={handleChangeData("name")}
            />
            {fieldErrors?.name && (
              <span className="error-message">{fieldErrors.name}</span>
            )}
          </div>
          <div
            className={`boxInput boxInputEmail ${fieldErrors?.email ? "has-error" : ""}`}
          >
            <label htmlFor="emailID">Email</label>
            <input
              type="email"
              placeholder="Insert your email"
              name="email"
              id="emailID"
              value={formData.email ?? ""}
              onChange={handleChangeData("email")}
            />
            {fieldErrors?.email && (
              <span className="error-message">{fieldErrors.email}</span>
            )}
          </div>
          <div
            className={`boxInput boxInputPhone ${fieldErrors?.phone ? "has-error" : ""}`}
          >
            <label htmlFor="phoneID">Phone Number</label>
            <input
              type="text"
              placeholder="Insert your name"
              name="phone"
              id="phoneID"
              value={formData.phone ?? ""}
              onChange={handleChangeData("phone")}
            />
            {fieldErrors?.phone && (
              <span className="error-message">{fieldErrors.phone}</span>
            )}
          </div>
          <BoxButtonsForm />
        </fieldset>
      )}
    </form>
  );
};

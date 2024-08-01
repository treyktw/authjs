"use client";

import { SyncLoader } from "react-spinners";
import CardWrapper from "./card-wrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { NewVerification } from "@/actions/new-verification";

import { FormError } from "../form-error";
import FormSuccess from "../form-success";

export const NewVerficationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const router = useRouter();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing Token");
      return;
    }

    NewVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
        if (data.success) {
          router.push("/auth/login");
        }
      })
      .catch(() => {
        setError("Something Went Wrong");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming Your Verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="flex items-center w-full justify-center flex-col gap-y-8">
        {!success && !error && <SyncLoader />}

        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

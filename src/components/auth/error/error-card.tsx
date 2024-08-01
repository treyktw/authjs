import CardWrapper from "../card-wrapper";
import { TriangleAlert } from "lucide-react";

export const ErrorCard = () => {
  return (
    <CardWrapper headerLabel="Opps! Something went Wrong" backButtonHref="/auth/login" backButtonLabel="Back to Login">
      <div  className="flex justify-center w-full">
        <TriangleAlert className="w-10 h-10 text-destructive"/>
      </div>
    </CardWrapper>

  )
}

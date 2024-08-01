import React from "react";

type Props = {};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full flex items-center justify-center bg-gradient-to-tr from-violet-400 to bg-purple-500">{children}</div>;
};

export default AuthLayout;

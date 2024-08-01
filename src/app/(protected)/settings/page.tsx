import React from "react";
import { auth, signOut } from "@/auth";

type Props = {};

const SettingsPage = async (props: Props) => {
  const session = await auth();
  // session?.user.role
  // console.log(session)

  return (
    <>
      <div className="w-fit h-contain items-start justify-center flex-wrap flex bg-slate-600 rounded-md p-4 shadow-md m-2 text-white text-wrap">
        {JSON.stringify(session)}
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <form action={async () =>  {
          "use server"
           await signOut()
        }}>
          <button type="submit" className="p-4 bg-blue-400 rounded-lg text-white">
            Sign Out
          </button>
        </form>
      </div>
    </>
  );
};

export default SettingsPage;

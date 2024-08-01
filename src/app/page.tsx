import { LoginButton } from "@/components/auth/login/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-tr from-violet-400 to bg-purple-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-7xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔒 Auth
        </h1>
        <p className="text-white text-lg">Auth Practice</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size={"lg"} className="cursor-pointer">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

const InstructorLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth()

  if (!userId) {
    return redirect("/sign-in")
  }

  return (
    <div className="h-full flex flex-col">
      <TopBar />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default InstructorLayout;

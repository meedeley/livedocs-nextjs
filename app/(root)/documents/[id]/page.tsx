import CollaborativeRoom from "@/components/CollaborativeRoom";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Document = async () => {
    const clerkUser = await currentUser();
  
    if (!clerkUser) redirect("/sign-in");

  return (
    <main className="flex w-full flex-col">
      <CollaborativeRoom />
    </main >
  );
};

export default Document;

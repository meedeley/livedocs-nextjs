'use client'
import { ReactNode } from "react";
import {
  ClientSideSuspense,
  LiveblocksProvider,
} from "@liveblocks/react/suspense";
import Loader from "@/components/Loader";
const Provider = ({ children }: { children: ReactNode }) => {
  
  return (
    <LiveblocksProvider 
    authEndpoint={"/api/liveblocks-auth"}
    resolveUsers={async ({userIds}) => {
      // const users = await getClerkUser();
    }}
    >
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;

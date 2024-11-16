"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode, useState } from "react";
import { type State, WagmiProvider } from "wagmi";
import { getConfig } from "~/lib/constants/wagmiConfig";
import MiniKitProvider from "./minikit-provider";

export function Providers(props: {
  children: ReactNode;
  initialState?: State;
}) {
  const [config] = useState(() => getConfig());
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        <MiniKitProvider>
          {/* <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={base}

        > */}
          {props.children}
        </MiniKitProvider>
        {/* </OnchainKitProvider> */}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Providers;

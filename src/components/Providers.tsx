"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";
import { absoluteUrl } from "@/lib/utils";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient, setQueryClient] = useState(() => new QueryClient());
  const [trpcClient, setTrpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: absoluteUrl('/api/trpc'),
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
      {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default Providers;

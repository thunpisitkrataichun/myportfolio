// app/providers.tsx
"use client";

import { Provider } from 'react-redux';
import { store } from '@/lib/Store/store'; // Adjust the import path

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

import { createContext, type ReactNode } from "react";
import type { PaymentContextType } from "../types/ContextTypes";

export const PaymentContext = createContext<PaymentContextType>({
  cardInfo: {},
});

export default function PaymentInformationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const props = {
    cardInfo: {},
  };
  return (
    <PaymentContext.Provider value={props}>{children}</PaymentContext.Provider>
  );
}

import { FC, PropsWithChildren, useRef } from "react";
import { AppStore, store } from "@/app/providers/store/store";
import { Provider } from "react-redux";

const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export { StoreProvider };

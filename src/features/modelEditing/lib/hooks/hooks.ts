import { useAppDispatch } from "@/app/providers/store";
import { useCallback } from "react";
import { HandlerSet } from "@/features/modelEditing/types";

const useHandlerSet = () => {
  const dispatch = useAppDispatch();

  const handlerSet = useCallback<HandlerSet>((itemValue, reducer) => {
    dispatch(reducer(itemValue));
  }, []);

  return { handlerSet };
};

export { useHandlerSet };

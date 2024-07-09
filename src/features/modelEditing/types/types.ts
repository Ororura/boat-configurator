import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type HandlerSet = <T extends string>(itemValue: string, reducer: ActionCreatorWithPayload<string, T>) => void;

export type { HandlerSet };

import { AppDispatch } from "@/app/providers/store/store";
import { RootState } from "@/app/providers/store/reducers";
import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

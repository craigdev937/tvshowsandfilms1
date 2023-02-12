import type { TypedUseSelectorHook } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./Reducer";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector:
    TypedUseSelectorHook<RootState> = useSelector;


    
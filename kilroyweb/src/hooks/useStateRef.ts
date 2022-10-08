import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";

const isFunction = <S>(
  setStateAction: SetStateAction<S>
): setStateAction is (prevState: S) => S =>
  typeof setStateAction === "function";

type ReadOnlyRefObject<T> = {
  readonly current: T;
};

type UseStateRef<S> = [S, Dispatch<SetStateAction<S>>, ReadOnlyRefObject<S>];

export default function useStateRef<S>(
  initialState?: S | (() => S)
): UseStateRef<S> {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);

  const dispatch: typeof setState = useCallback((setStateAction: any) => {
    ref.current = isFunction(setStateAction)
      ? setStateAction(ref.current)
      : setStateAction;

    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
}

import { Loader } from "components/loaders/loader";
import { useEffect, useState } from "react";
import { Router } from "./router";
import { useAppDispatch } from "store/store";
import { AuthorizedThunk } from "store/thunks/user/authorization.thunk";

export const App = () => {
  const dispatch = useAppDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    dispatch(AuthorizedThunk()).finally(() => setIsReady(true));
  }, []);

  if (!isReady) return <Loader position="absolute" />;
  return <Router />;
};

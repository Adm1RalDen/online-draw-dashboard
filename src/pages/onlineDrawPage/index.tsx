import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "store/store";
import { Loader } from "components/loaders/loader";
import { checkUserInRoom } from "./const";
import { useSocket } from "hooks/useSocket";
import { userDataSelector } from "store/selectors/user.selector";

type ParamsProps = {
  roomId: string;
};

export const OnlineDrawPage: FC<any> = ({ children }) => {
  const user = useAppSelector(userDataSelector);
  const { roomId } = useParams<ParamsProps>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [access, setAccess] = useState(false);
  const { socket } = useSocket();

  useEffect(() => {
    checkUserInRoom({
      navigate,
      roomId,
      setIsLoading,
      userId: user.id,
      setAccess,
      socket,
    });
  }, []);

  if (isLoading) return <Loader position="absolute" />;
  if (!access) return null;

  return children;
};

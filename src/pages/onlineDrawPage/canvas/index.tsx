import { handleLeave } from "api/user/leave";
import { PaintContext } from "context/paintContext";
import { useCanvas } from "hooks/useCanvas/useCanvas.hook";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userDataSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";
import { Canvas } from "../../../components/canvas";
import { SettingsBar } from "../../../components/settings";
import { Toolbar } from "../../../components/toolbar";
import { RoomUsers } from "../roomUsers";
import { CanvasSection, Layout } from "./styles";

type ParamsProps = {
  roomId: string;
};

export const OnlineCanvas = () => {
  const data = useCanvas();
  const user = useAppSelector(userDataSelector);
  const { roomId } = useParams<ParamsProps>();

  useEffect(
    () => () => {
      handleLeave(user.id, roomId || "");
    },
    []
  );

  return (
    <CanvasSection>
      <PaintContext.Provider value={{ ...data }}>
        <Layout>
          <Toolbar />
          <SettingsBar />
          <Canvas />
          <RoomUsers />
        </Layout>
      </PaintContext.Provider>
    </CanvasSection>
  );
};

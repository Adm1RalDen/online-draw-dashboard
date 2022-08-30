import { Canvas } from "components/canvas";
import { SettingsBar } from "components/settings";
import { Toolbar } from "components/toolbar";
import { PaintContext } from "context/paintContext";
import { useCanvas } from "hooks/useCanvas/useCanvas.hook";
import { Layout } from "./styles";

export const LayoutComponent = () => {
  const data = useCanvas();
  return (
    <PaintContext.Provider value={{ ...data }}>
      <Layout>
        <Toolbar />
        <SettingsBar />
        <Canvas />
      </Layout>
    </PaintContext.Provider>
  );
};

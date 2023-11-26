import { RingLoader } from "react-spinners";
import { LoaderComponentWrapper } from "./LoaderComponentStyled";

function LoaderComponent({ style }: { style?: string }) {
  console.log(style);
  return (
    <LoaderComponentWrapper className={`flex-row ${style}`}>
      <RingLoader
        color="#008638"
        style={{ position: "absolute", top: "50%", left: "50%" }}
      />
    </LoaderComponentWrapper>
  );
}

export default LoaderComponent;

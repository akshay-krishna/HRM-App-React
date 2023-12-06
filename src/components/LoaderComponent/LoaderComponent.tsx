import { RingLoader } from "react-spinners";
import { LoaderComponentWrapper } from "./LoaderComponentStyled";

function LoaderComponent({ style }: { style?: string }) {
  return (
    <LoaderComponentWrapper className={`flex-row ${style}`}>
      <RingLoader
        color="#008638"
      />
    </LoaderComponentWrapper>
  );
}

export default LoaderComponent;

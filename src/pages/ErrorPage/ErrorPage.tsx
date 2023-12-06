import { useNavigate, useRouteError } from "react-router";
import {
  ErrorIconStyled,
  ErrorPageStyled,
  ErrorTextStyled,
} from "./ErrorPageStyled";
import ErrorIcon from "../../components/Icons/ErrorIcon";
import Button from "../../components/Button/Button";
import HomeIcon from "../../components/Icons/HomeIcon";

function ErrorPage() {
  const navigate = useNavigate();
  const error: any = useRouteError();

  return (
    <ErrorPageStyled className="flex-row">
      <ErrorIconStyled>
        <ErrorIcon />
      </ErrorIconStyled>
      <ErrorTextStyled className="flex-column">
        <h1>{error.status}</h1>
        <h2>Oops! Some Error Has Occurred</h2>
        <p>We're working to resolve the issue. Please try again later.</p>
        <Button
          className="primary back-home flex-row"
          onClick={() => navigate("/")}
        >
          <HomeIcon /> Back To Home
        </Button>
      </ErrorTextStyled>
    </ErrorPageStyled>
  );
}

export default ErrorPage;

import errorSvg from "../assets/images/error-file.svg";
import { Grid, Typography } from "@mui/material";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="bg-primary h-screen"
      direction={"column"}
      rowGap={3}
    >
      <Grid item>
        <img src={errorSvg} alt="logo" />
      </Grid>
      <Grid item>
        <Typography variant="h6" className="text-white font-open-sans">
          Error : 404 - page not found
        </Typography>
      </Grid>
      <Grid item sx={{ paddingTop: 2 }}>
        <Typography variant="subtitle2" className="text-white font-open-sans">
          The page you’re looking for has either expired or doesn’t exist.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          name="Take me back to homepage"
          rounded
          large
          onClick={() => navigate("/")}
        ></Button>
      </Grid>
    </Grid>
  );
};

export default Error;

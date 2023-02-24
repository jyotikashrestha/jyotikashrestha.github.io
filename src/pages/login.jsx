import {
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import TextField from "../components/TextField";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="h-screen bg-ternary"
      >
        <Grid item sx={{ minWidth: "40%" }}>
          <Paper
            elevation={3}
            sx={{
              px: isMobile ? "2rem" : "5rem",
              py: "4rem",
              borderRadius: "16px",
            }}
          >
            <Stack spacing={3}>
              <Typography
                variant="h4"
                align="left"
                sx={{ fontWeight: "700" }}
                className="font-jost text-primary"
              >
                SEP
              </Typography>
              <Typography
                variant="h3"
                align="left"
                sx={{ fontWeight: "700", paddingBottom: "4px" }}
                className="font-jost text-heading"
              >
                LOGIN
              </Typography>
              <TextField
                placeholder="Email"
                type="email"
                icon={<EmailOutlined />}
              />
              <TextField
                placeholder="Password"
                type="password"
                icon={<LockOutlined />}
              />
              <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Checkbox
                  small
                  sx={{ marginTop: 0, padding: 0 }}
                  label="Keep me logged in"
                />
                <Typography
                  variant="subtitle2"
                  align="right"
                  sx={{ fontWeight: 600 }}
                  className="font-open-sans text-subheading"
                >
                  <Link to={"/forget-password"}>Forgot Password?</Link>
                </Typography>
              </Stack>
              <Button name="Login"></Button>
              <Box>
                <Typography
                  variant="h6"
                  className="font-open-sans text-gray-500"
                  component="span"
                >
                  Dont have an account?
                </Typography>{" "}
                <Typography
                  variant="h6"
                  className="font-open-sans text-heading"
                  component="span"
                >
                  <Link to={"/register"}>Register</Link>
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

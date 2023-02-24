import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  EmailOutlined,
  FmdGoodOutlined,
  LocalPhoneOutlined,
  LockOutlined,
  PersonOutline,
  ShieldOutlined,
  TextSnippetOutlined,
} from "@mui/icons-material";
import Button from "../components/Button";
import RadioOptions from "../components/RadioOptions";
import TextField from "../components/TextField";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const radioOptions = [
  {
    label: "Clean Energy Consumer (I would like to benefit from solarenergy)",
    value: "1",
  },
  {
    label: "Clean Energy Producer (I have a solar system)",
    value: "2",
  },
];

const Register = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className="bg-ternary"
        sx={{ minHeight: "100vh" }}
      >
        <Grid
          item
          sx={{
            minWidth: "40%",
            maxWidth: isMobile ? "auto" : "70%",
            marginY: "2rem",
          }}
        >
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
                Create an account
              </Typography>
              <RadioOptions value="1" options={radioOptions}></RadioOptions>
              <Grid container rowGap={2} justifyContent="space-between">
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Full name"
                    type="text"
                    fullWidth
                    icon={<PersonOutline />}
                  />
                </Grid>
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Phone"
                    type="text"
                    fullWidth
                    icon={<LocalPhoneOutlined />}
                  />
                </Grid>
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Email"
                    type="email"
                    fullWidth
                    icon={<EmailOutlined />}
                  />
                </Grid>
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Address"
                    type="text"
                    fullWidth
                    icon={<FmdGoodOutlined />}
                  />
                </Grid>
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Password"
                    type="password"
                    fullWidth
                    icon={<LockOutlined />}
                  />
                </Grid>
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Confirm Password"
                    type="password"
                    fullWidth
                    icon={<LockOutlined />}
                  />
                </Grid>
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Utility zone"
                    type="text"
                    fullWidth
                    icon={<TextSnippetOutlined />}
                  />
                </Grid>
                <Grid item md={5.9} xs={12}>
                  <TextField
                    placeholder="Agreement code"
                    type="text"
                    fullWidth
                    icon={<ShieldOutlined />}
                  />
                </Grid>
              </Grid>
              <Stack justifyContent="center" alignItems="center">
                <Button name="Register my account" large></Button>
              </Stack>
              <Box>
                <Typography
                  variant="h6"
                  className="font-open-sans text-gray-500"
                  component="span"
                >
                  Already have an account?
                </Typography>{" "}
                <Typography
                  variant="h6"
                  className="font-open-sans text-heading"
                  component="span"
                >
                  <Link to={"/login"}>Login</Link>
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;

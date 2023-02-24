import { Grid, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { LockOutlined, DisabledByDefaultRounded } from "@mui/icons-material";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { useTheme } from "@mui/material/styles";

const ForgetPassword = () => {
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
                New Password
              </Typography>

              <TextField
                placeholder="New Password"
                type="password"
                icon={<LockOutlined />}
              />
              <TextField
                placeholder="Re-enter new password"
                type="password"
                icon={<LockOutlined />}
              />
              <Stack spacing={2}>
                <Typography
                  variant="body1"
                  align="left"
                  component="div"
                  className="font-open-sans text-subheading"
                >
                  <DisabledByDefaultRounded
                    fontSize="small"
                    className="text-red-500 mr-2"
                  />
                  At least 8 character
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  component="div"
                  className="font-open-sans text-subheading"
                >
                  <DisabledByDefaultRounded
                    fontSize="small"
                    className="text-red-500 mr-2"
                  />
                  Both uppercase and lowercase letters
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  component="div"
                  className="font-open-sans text-subheading"
                >
                  <DisabledByDefaultRounded
                    fontSize="small"
                    className="text-red-500 mr-2"
                  />
                  At least one number or symbol
                </Typography>
              </Stack>
              <Button name="Login"></Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgetPassword;

import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Divider from "../Divider";
import LeftImage from "../../assets/images/Rectangle7.png";
import RightImage from "../../assets/images/Rectangle8.png";

const Section1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box className="relative">
        <Grid
          container
          spacing={5}
          justifyContent="space-between"
          sx={{ paddingBottom: isMobile ? null : "350px" }}
        >
          <Grid
            item
            md={11}
            xs={12}
            className="bg-primary"
            data-aos="slide-right"
            sx={{ borderRadius: "16px" }}
          >
            <Stack
              spacing={5}
              sx={{
                paddingX: isMobile ? "1rem" : "11%",
                paddingTop: "2rem",
                paddingBottom: isMobile ? "4rem" : "14rem",
              }}
            >
              <Divider></Divider>
              <Box>
                <Typography
                  variant="h4"
                  className="font-jost text-white pt-1"
                  sx={{ fontWeight: "700", width: "70%", lineHeight: 1.5 }}
                  component="div"
                  align="left"
                >
                  Increase energy affordability in your neighborhood by reducing
                  electricity bills.
                </Typography>
              </Box>
              <Typography
                variant="body1"
                className="font-open-sans text-white"
                component="div"
                sx={{ lineHeight: 2, width: isMobile ? "100%" : "50%" }}
                align="left"
              >
                Resonant Energy, a local solar installer, has partnered with
                MySunBuddy, a software company, to build this platform for
                community campaigns in Massachusetts. This pilot has been made
                possible with support from the U.S. Department of Energy and the
                Massachusetts Clean Energy Center. If you are interested in
                setting up a donation campaign in your neighborhood, please
                reach us with email:
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Paper
          data-aos="fade-up"
          sx={{
            position: isMobile ? null : "absolute",
            bottom: 0,
            left: "10%",
            borderRadius: "30px",
            margin: isMobile ? "1rem" : null,
          }}
          elevation={5}
        >
          <img
            src={LeftImage}
            className="object-cover"
            alt="logo"
            width="635px"
            height="500px"
          />
        </Paper>
        <Paper
          data-aos="slide-left"
          sx={{
            position: isMobile ? null : "absolute",
            bottom: "15%",
            right: "15%",
            borderRadius: "30px",
            margin: isMobile ? "1rem" : null,
          }}
          elevation={5}
        >
          <img
            src={RightImage}
            className="object-cover"
            alt="logo"
            width="380px"
            height="500px"
          />
        </Paper>
      </Box>
    </>
  );
};
export default Section1;

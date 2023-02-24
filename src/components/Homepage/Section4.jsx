import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import SectionImage from "../../assets/images/Rectangle9.png";
import { useTheme } from "@mui/material/styles";
import { ArrowForward } from "@mui/icons-material";
import Button from "../Button";
import Divider from "../Divider";

const Section1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const paperContents = [
    {
      score: 2313,
      text: "variable",
    },
    {
      score: 2313,
      text: "variable",
    },
    {
      score: 2313,
      text: "variable",
    },
    {
      score: 2313,
      text: "variable",
    },
  ];
  return (
    <>
      <Container>
        <Box className="relative">
          <Grid
            container
            spacing={5}
            justifyContent="space-between"
            sx={{ paddingBottom: "5rem" }}
          >
            <Grid item md={6} xs={12} data-aos="fade-right">
              <img src={SectionImage} alt="logo" />
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <Stack spacing={5} sx={{ paddingX: isMobile ? null : "10%" }}>
                  <Divider></Divider>
                  <Box>
                    <Typography
                      variant="h4"
                      className="font-jost text-heading pt-1"
                      sx={{ fontWeight: "700", width: "60%", lineHeight: 1.5 }}
                      component="div"
                      align="left"
                    >
                      Do you want to work with us?
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    className="font-open-sans text-subheading"
                    component="div"
                    sx={{ lineHeight: 2 }}
                    align="left"
                  >
                    The Solar Equity Platform works with partners to facilitate
                    community-level campaigns to match Clean Energy Producers
                    and Consumers. We share the environmental and economic
                    impact of the collective effort with Clean Energy Producers
                    and Consumers in the campaign network and provide
                    enterprise-level controls for campaign hosts.
                  </Typography>
                  <Button
                    name={
                      <>
                        Register now
                        <ArrowForward
                          sx={{
                            height: "15px",
                            marginBottom: "4px",
                          }}
                        />
                      </>
                    }
                    padding="10px 14px"
                    width="12rem"
                    textVariant="body2"
                  ></Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: isMobile ? null : "absolute",
              bottom: 0,
              right: 0,
            }}
            data-aos="zoom-in"
          >
            <Paper elevation={5} sx={{ borderRadius: "16px" }}>
              <Grid container direction="row">
                {paperContents.map((item) => (
                  <>
                    <Grid
                      item
                      md={3}
                      xs={12}
                      sx={{ paddingY: "2rem", paddingX: "4rem" }}
                    >
                      <Stack>
                        <Typography
                          variant="h4"
                          className="font-jost text-heading"
                          sx={{ fontWeight: "700" }}
                          component="div"
                        >
                          {item.score}
                        </Typography>
                        <Typography
                          variant="body1"
                          className="font-open-sans text-subheading"
                          component="div"
                        >
                          {item.text}
                        </Typography>
                      </Stack>
                    </Grid>
                  </>
                ))}
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Section1;

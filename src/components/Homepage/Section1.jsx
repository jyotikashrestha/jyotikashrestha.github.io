import { EmailOutlined } from "@mui/icons-material";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment } from "react";
import RadioOptions from "../RadioOptions";
import LandingPageInputField from "./InputField";
import featureSvg from "../../assets/images/feature-icon.svg";
import Illustration from "../../assets/images/Illustration.png";
import { useTheme } from "@mui/material/styles";

const Section1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const TopPart = () => {
    const radioOptions = [
      {
        label: "I'm a clean energy producer",
        value: "1",
      },
      {
        label: "I'm a clean energy consumer",
        value: "2",
      },
    ];
    return (
      <>
        <Grid item md={6} xs={12}>
          <Stack spacing={4}>
            <Typography
              variant="h5"
              className="text-subheading font-jost"
              component="div"
              align="left"
            >
              Welcome to the Solar Equity Platform
            </Typography>
            <Typography
              variant="h2"
              className="font-jost pt-1 text-heading"
              sx={{ fontWeight: "700" }}
              component="div"
              align="left"
            >
              Donate utility bill credits within your community.
            </Typography>
            <Typography
              variant="body1"
              className="font-open-sans text-subheading pt-2"
              component="div"
              align="left"
            >
              Our platform connects with utility systems to enable peer-to-peer
              donations between our users. Your community gets to benefit from
              the clean energy transition while we take care of the leg work.
            </Typography>
            <RadioOptions value="1" options={radioOptions}></RadioOptions>
            <LandingPageInputField
              placeholder="Please enter your email address"
              type="email"
              icon={<EmailOutlined />}
            ></LandingPageInputField>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} align="right" data-aos="zoom-in">
          <img src={Illustration} alt="logo" />
        </Grid>
      </>
    );
  };
  const FeaturePart = () => {
    const data = [
      {
        title: "Feature 1",
        description:
          "Contrary to popular belief, Lor Ipsum is not simply random.",
      },
      {
        title: "Feature 2",
        description:
          "Contrary to popular belief, Lor Ipsum is not simply random.",
      },
      {
        title: "Feature 3",
        description:
          "Contrary to popular belief, Lor Ipsum is not simply random.",
      },
      {
        title: "Feature 4",
        description:
          "Contrary to popular belief, Lor Ipsum is not simply random.",
      },
    ];
    return data.map((item) => {
      return (
        <Fragment key={item.title}>
          <Grid item md={3} xs={12} className="pr-11 mr-8">
            <Stack spacing={1} sx={{ paddingLeft: isMobile ? "3rem" : null }}>
              <img
                src={featureSvg}
                alt="logo"
                className={isMobile ? "self-center" : "h-24 self-start"}
              />
              <Typography
                variant="h6"
                align={isMobile ? "center" : "left"}
                className="font-jost text-heading pt-5"
                sx={{ fontWeight: 600 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle2"
                align={isMobile ? "center" : "left"}
                className="text-subheading font-open-sans"
              >
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        </Fragment>
      );
    });
  };
  return (
    <>
      <Container>
        <Grid
          container
          spacing={3}
          rowGap={10}
          justifyContent="space-between"
          sx={{ marginTop: "4rem" }}
        >
          {TopPart()}
          {FeaturePart()}
        </Grid>
      </Container>
    </>
  );
};
export default Section1;

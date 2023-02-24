import { EmailOutlined } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import RadioOptions from "../RadioOptions";
import LandingPageInputField from "./InputField";
import Rectange1 from "../../assets/images/error-file.svg";

const Section1 = () => {

  const TopPart = () => {
    const radioOptions = [
      {
        label: "Ask for Resume",
        value: "1",
      },
      {
        label: "Offer me a job",
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
              Welcome to my world
            </Typography>
            <Typography
              variant="h2"
              className="font-jost pt-1 text-heading"
              sx={{ fontWeight: "700" }}
              component="div"
              align="left"
            >
              Future Architect in Making.
            </Typography>
            <Typography
              variant="body1"
              className="font-open-sans text-subheading pt-2"
              component="div"
              align="left"
            >
              This is my portfolio site where i will be sharing you all about the designs and concepts I have made during my university coursework.
            </Typography>
            <RadioOptions value="1" options={radioOptions}></RadioOptions>
            <LandingPageInputField
              placeholder="Please enter your email address"
              type="email"
              icon={<EmailOutlined />}
            ></LandingPageInputField>
          </Stack>
        </Grid>
        <Grid item md={6} xs={12} align="right" data-aos="slide-left">
          <img src={Rectange1} alt="logo" />
        </Grid>
      </>
    );
  };
  return (
    <>
      <Container>
        <Grid
          container
          spacing={3}
          rowGap={10}
          justifyContent="space-between"
          sx={{ marginTop: "4px" }}
        >
          {TopPart()}
        </Grid>
      </Container>
    </>
  );
};
export default Section1;

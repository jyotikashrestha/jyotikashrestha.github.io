import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Footer = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={4}
          rowGap={4}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ marginBottom: "2rem" }}
          className="text-primary"
        >
          <Grid item md={6} xs={12} className="pr-11 mr-8">
            <Stack spacing={3}>
              <Typography
                variant="h4"
                align="left"
                sx={{ fontWeight: "700" }}
                className="text-secondary font-jost"
              >
                SEP
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-jost text-subheading"
              >
                Donate utility bill credits within your
                <Typography>community.</Typography>
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-jost text-heading"
              >
                4140 Parker Rd. Allentown, New Mexico 31134
              </Typography>
              <Stack direction="row" gap={2}>
                <Facebook
                  sx={{
                    height: "20px",
                    color: "#757575",
                    "& :hover": {
                      color: "#45364b",
                    },
                  }}
                />
                <Instagram
                  sx={{
                    height: "20px",
                    color: "#757575",
                    "& :hover": {
                      color: "#45364b",
                    },
                  }}
                />
                <Twitter
                  sx={{
                    height: "20px",
                    color: "#757575",
                    "& :hover": {
                      color: "#45364b",
                    },
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={2} xs={12}>
            <Stack spacing={3}>
              <Typography
                variant="button"
                align="left"
                className="font-jost text-heading"
                sx={{ fontWeight: "600" }}
              >
                Company
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                About Us
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Career
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Blog
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={2} xs={12}>
            <Stack spacing={3}>
              <Typography
                variant="button"
                align="left"
                className="font-jost text-heading"
                sx={{ fontWeight: "600" }}
              >
                Helpful Links
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Privacy & Policy
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Terms & Conditions
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Service
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={2} xs={12}>
            <Stack spacing={3}>
              <Typography
                variant="button"
                align="left"
                className="font-jost text-heading"
                sx={{ fontWeight: "600" }}
              >
                Partnership
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Client Name
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Client Name
              </Typography>
              <Typography
                variant="subtitle2"
                align="left"
                className="font-open-sans text-subheading"
              >
                Client Name
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography
              variant="subtitle2"
              className="font-open-sans text-subheading"
            >
              SEP 2022. All rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Footer;

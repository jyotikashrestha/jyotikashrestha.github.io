import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Grid } from "@mui/material";
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
          <Grid item md={6} xs={12}>
            <span>Connect with me on: </span>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Footer;

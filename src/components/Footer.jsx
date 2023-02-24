import { Facebook, Instagram, GitHub } from "@mui/icons-material";
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
            <a href="https://www.facebook.com/jyotika.shrestha" target="_blank" rel="noreferrer">
              <Facebook
                sx={{
                  height: "20px",
                  color: "#757575",
                  "& :hover": {
                    color: "#45364b",
                  },
                }}
              />
            </a>
            <a href="https://www.instagram.com/jyotikashrestha_/" target="_blank" rel="noreferrer">
            <Instagram
              sx={{
                height: "20px",
                color: "#757575",
                "& :hover": {
                  color: "#45364b",
                },
              }}
            />
            </a>
            <a href="https://github.com/jyotikashrestha" target="_blank" rel="noreferrer">
            <GitHub
              sx={{
                height: "20px",
                color: "#757575",
                "& :hover": {
                  color: "#45364b",
                },
              }}
            />
            </a>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Footer;

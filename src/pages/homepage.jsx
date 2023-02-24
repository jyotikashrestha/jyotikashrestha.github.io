import { Grid } from "@mui/material";
import { Section1 } from "../components/Homepage/";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Grid container gap={7}>
        <Grid item md={12} sm={12}>
          <Section1></Section1>
        </Grid>
        <Grid item md={12} sm={12}>
          <Footer></Footer>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

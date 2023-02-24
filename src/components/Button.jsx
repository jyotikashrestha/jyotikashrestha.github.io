import { Typography, Button as Btn, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const CustomButton = styled(Btn)({
  textTransform: "none",
  lineHeight: 1.5,
  backgroundColor: "#f0a81a",
  "&:hover": {
    backgroundColor: "#f4a507",
  },
});

const Button = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <CustomButton
        variant="contained"
        sx={{
          borderRadius: props.rounded ? "33px" : "11px",
          width:
            props.large && !isMobile
              ? "24rem"
              : props.width
              ? props.width
              : "auto",
          padding: !props.padding ? "14px" : props.padding,
          margin: props.padding ? props.padding : null,
        }}
        onClick={props.onClick}
      >
        <Typography
          variant={!props.textVariant ? "subtitle1" : props.textVariant}
          className="font-jost text-primary"
        >
          {props.name}
        </Typography>
      </CustomButton>
    </>
  );
};

export default Button;

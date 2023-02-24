import { Typography, Checkbox as CheckBox } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomCheckbox = styled(CheckBox)({
  color: "#f0a81a",
  marginRight: "5px",
  "&.Mui-checked": {
    color: "#f0a81a",
  },
});

const Checkbox = (props) => {
  return (
    <>
      <Typography
        variant="subtitle2"
        align="left"
        className="text-subheading font-open-sans"
      >
        <CustomCheckbox size={props.small ? "small" : ""} sx={props.sx} />
        {props.label}
      </Typography>
    </>
  );
};

export default Checkbox;

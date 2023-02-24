import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow: "inset 0 0 0 1px #f0a81a",
  "input:hover ~ &": {
    backgroundColor: "#ffffff",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#f0a81a",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 0%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#f0a81a",
  },
});

function CustomRadio(props) {
  return (
    <Radio
      sx={{
        color: "#f0a81a",
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const RadioOptions = (props) => {
  return (
    <>
      <FormControl>
        <RadioGroup defaultValue={props.value}>
          {props.options.map((x) => (
            <Fragment key={x.value}>
              <FormControlLabel
                value={x.value}
                control={<CustomRadio />}
                label={x.label}
                className="text-heading font-open-sans"
              />
            </Fragment>
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default RadioOptions;

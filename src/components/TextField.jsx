import { TextField as Input, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(Input)({
  backgroundColor: "#F6F6F6",
  borderRadius: "16px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffffff",
    },
  },
});
const TextField = (props) => {
  return (
    <>
      <CustomTextField
        variant="outlined"
        type={props.type}
        placeholder={props.placeholder}
        fullWidth={props.fullWidth}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{props.icon}</InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default TextField;

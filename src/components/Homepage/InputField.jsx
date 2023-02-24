import { SendRounded } from "@mui/icons-material";
import {
  TextField as Input,
  InputAdornment,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(Input)({
  borderTopLeftRadius: "16px",
  borderBottomLeftRadius: "16px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#45364B",
      borderTopLeftRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
    input: {
      color: "#ffffff",
      "&::placeholder": {
        color: "#e1e1e1",
        opacity: 1,
      },
    },
    "&:hover fieldset": {
      borderColor: "#45364B",
      borderTopLeftRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#45364B",
      borderTopLeftRadius: "16px",
      borderBottomLeftRadius: "16px",
    },
  },
});

const CustomButton = styled(Button)({
  borderRadius: "0px",
  backgroundColor: "#f0a81a",
  color: "#000000",
  borderTopRightRadius: "16px",
  borderBottomRightRadius: "16px",
  "&:hover": {
    backgroundColor: "#f0a81a",
  },
});

const LandingPageInputField = (props) => {
  return (
    <>
      <Stack direction={"row"}>
        <CustomTextField
          variant="outlined"
          type={props.type}
          placeholder={props.placeholder}
          sx={{
            backgroundColor: "#45364B",
            width: "90%",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "#e1e1e1" }}>
                {props.icon}
              </InputAdornment>
            ),
          }}
        />
        <CustomButton size="small" sx={{ width: "10%" }}>
          <SendRounded />
        </CustomButton>
      </Stack>
    </>
  );
};

export default LandingPageInputField;

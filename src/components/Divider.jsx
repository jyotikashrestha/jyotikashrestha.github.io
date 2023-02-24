import { styled } from "@mui/material/styles";
import { Divider as Divder } from "@mui/material";

const CustomDivider = styled(Divder)({
  border: "3px solid #f0a81a",
  width: "5rem",
});

const Divider = (props) => {
  return (
    <>
      <CustomDivider></CustomDivider>
    </>
  );
};

export default Divider;

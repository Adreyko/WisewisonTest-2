import { Box, Container } from "@mui/material";
import City from "../City/City";
import Header from "../Header/Header";

const Panel: React.FC = () => {

  return (
    <Container maxWidth="md">
      <Box
        sx={{ width: "100%", color: "white" }}
        height="70vh"
        marginTop="50px"
        alignItems="center"
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Header />
        <City />
      </Box>
    </Container>
  );
};

export default Panel;

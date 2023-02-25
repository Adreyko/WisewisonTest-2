import { Box, Typography } from "@mui/material";
import Search from "./Search/Search";

const Header: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        marginRight="20px"
        variant="h4"
        component="h4"
        align="center"
        padding="10px"
      >
        Search city
      </Typography>
      <Search />
    </Box>
  );
};

export default Header;

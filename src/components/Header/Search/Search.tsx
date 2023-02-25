import { TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/redux-hooks/redux-hooks";
import { setCity } from "../../../redux/slices/CitySlice/CitySlice";
import { fetchCity } from "../../../redux/slices/CitySlice/thunk/FetchCity";
const Search: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput) {
      dispatch(fetchCity(searchInput));
    } else {
      dispatch(setCity(null));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const styles = {
    color: "white",
    "& .MuiInputLabelRoot": { color: "white" },
  };
  return (
    <TextField
      InputProps={{
        style: styles,
      }}
      InputLabelProps={{
        style: styles,
      }}
      id="standard-basic"
      label="Search..."
      variant="standard"
      value={searchInput}
      color="primary"
      onChange={handleInputChange}
    />
  );
};

export default Search;

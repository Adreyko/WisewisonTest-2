import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../redux/redux-hooks/redux-hooks";

const City: React.FC = () => {
  const city = useAppSelector((city) => city.city.city);
  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime);
  const temperature = city && Math.round(city.tempInfo?.temp - 273);

  if (!city) {
    return (
      <Box
        sx={{
          boxShadow: 50,
          border: "1px solid grey",
          width: "400px",
          height: "300px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Search city</Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        boxShadow: 50,
        border: "1px solid grey",
        width: "400px",
        height: "300px",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {city.name ? (
        <>
          <Typography variant="h2">{city.name}</Typography>
          <Typography variant="h6">{currentTime}</Typography>
          <Typography variant="h4">{temperature}°C</Typography>
          <Typography variant="h6">
            Sky: {city.weather[0].description}
          </Typography>
          <Typography variant="h6">Weather details:</Typography>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Wind: {city.wind.speed} km/h</Typography>
            <Typography variant="h6">
              Humidity: {city.tempInfo.humidity}%
            </Typography>
          </Box>
        </>
      ) : (
        <Typography variant="h3">No cities found</Typography>
      )}
    </Box>
  );
};

export default City;

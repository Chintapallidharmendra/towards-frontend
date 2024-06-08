import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const topLocations = [
  { label: "Bengaluru", value: 1 },
  { label: "Hyderabad", value: 2 },
  { label: "Chennai", value: 3 },
  { label: "Mumbai", value: 4 },
  { label: "Delhi", value: 5 },
  { label: "Kolkata", value: 6 },
];

const LocationSearch = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topLocations}
      sx={{ width: 300, color: "#efefef" }}
      renderInput={(params) => (
        <TextField {...params} placeholder="search destination here..." />
      )}
    />
  );
};

export default LocationSearch;

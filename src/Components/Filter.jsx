import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Filter = () => {
  return (
    <div className="bg-gray-50 px-4 py-2 border-b flex items-center justify-between">
      {/* Left Buttons */}
      <div className="space-x-4 flex">
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            backgroundColor: "#f8f9fa",
            borderColor: "#d1d5db",
            color: "#374151",
            fontWeight: "bold", // Bold text
            fontSize: "14px",
            padding: "4px 12px",
            minWidth: "90px",
            boxShadow: "0px 1px 2px rgba(229, 231, 235, 1)", // Gray-200 shadow
          }}
        >
          AY 2024-25 ▼
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            backgroundColor: "#f8f9fa",
            borderColor: "#d1d5db",
            color: "#374151",
            fontWeight: "bold", // Bold text
            fontSize: "14px",
            padding: "4px 12px",
            minWidth: "90px",
            boxShadow: "0px 1px 2px rgba(229, 231, 235, 1)", // Gray-200 shadow
          }}
        >
          CBSE 9 ▼
        </Button>
      </div>
      
      {/* Add Student Button */}
      <Button
        variant="outlined"
        size="small"
        startIcon={<AddIcon />}
        sx={{
          textTransform: "none",
          backgroundColor: "gray-100",
          borderColor: "#d1d5db",
          color: "#374151",
          fontWeight: "bold", // Bold text
          fontSize: "14px",
          padding: "4px 12px",
          boxShadow: "0px 1px 2px rgba(229, 231, 235, 1)", // Gray-200 shadow
        }}
      >
        Add new Student
      </Button>
    </div>
  );
};

export default Filter;
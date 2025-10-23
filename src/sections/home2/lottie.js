import React from "react";
import { Box } from "@mui/material";

const LottieAnimation = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)
          `,
          animation: "float 6s ease-in-out infinite",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "60px",
          height: "60px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          animation: "float 4s ease-in-out infinite reverse",
        },
        "@keyframes float": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(180deg)",
          },
        },
      }}
    >
      {/* Animated geometric shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          right: "20%",
          width: "40px",
          height: "40px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "8px",
          animation: "float 3s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          left: "15%",
          width: "30px",
          height: "30px",
          background: "rgba(255, 255, 255, 0.06)",
          borderRadius: "50%",
          animation: "float 5s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "30%",
          width: "50px",
          height: "50px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "12px",
          animation: "float 4.5s ease-in-out infinite",
          animationDelay: "0.5s",
        }}
      />
    </Box>
  );
};

export default LottieAnimation;

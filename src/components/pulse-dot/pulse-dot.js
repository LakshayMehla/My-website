import { Box, styled } from "@mui/material";

// ----------------------------------------------------------------------

const Circle = styled(Box)({
  width: 15,
  height: 15,
  backgroundColor: "#f00",
  borderRadius: "50%",
});

const RingRing = styled(Box)(({ theme }) => ({
  height: 30,
  width: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",

  border: "3px solid #f00",
  animation: "pulsate 1s ease-out infinite",
  "@keyframes pulsate": {
    "0%": {
      borderColor: "#ff000000",
    },
    "50%": {
      borderColor: "#ff0000ff",
    },
    "100%": {
      borderColor: "#ff000000",
    },
  },
}));

// ----------------------------------------------------------------------

export default function PulseDot() {
  return (
    <RingRing>
      <Circle />
    </RingRing>
  );
}

import { Typography } from "@mui/material";
import PropTypes from 'prop-types';

export default function HiddenH1({ text }) {
  return <Typography variant='h1' sx={{ position: 'absolute', color: '#00000001', zIndex: -1 }}>{text}</Typography>
}
HiddenH1.propTypes = {
  text: PropTypes.string,
}
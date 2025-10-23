import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// ----------------------------------------------------------------------

export function NavSectionVertical({ data, slotProps, sx, ...other }) {
  return (
    <Stack sx={sx} {...other}>
      {data?.map((item) => (
        <NavItemVertical key={item.title} item={item} slotProps={slotProps} />
      ))}
    </Stack>
  );
}

NavSectionVertical.propTypes = {
  data: PropTypes.array,
  slotProps: PropTypes.object,
  sx: PropTypes.object,
};

// ----------------------------------------------------------------------

function NavItemVertical({ item, slotProps }) {
  return (
    <ListItemButton
      component="a"
      href={item.path}
      target={item.path?.includes('http') ? '_blank' : undefined}
      rel={item.path?.includes('http') ? 'noopener noreferrer' : undefined}
      sx={{
        minHeight: 36,
        ...slotProps?.rootItem,
      }}
    >
      <ListItemText
        primary={item.title}
        primaryTypographyProps={{
          noWrap: true,
          typography: 'body2',
        }}
      />
    </ListItemButton>
  );
}

NavItemVertical.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    children: PropTypes.array,
  }),
  slotProps: PropTypes.object,
};

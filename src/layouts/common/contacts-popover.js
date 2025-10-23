import { m } from 'framer-motion';

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

// Simple time formatter
const fToNow = (date) => {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
};

// Mock contacts data
const _contacts = [
  {
    id: '1',
    name: 'John Doe',
    avatarUrl: '/assets/placeholder.svg',
    status: 'online',
    lastActivity: new Date(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatarUrl: '/assets/placeholder.svg',
    status: 'offline',
    lastActivity: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
  },
];

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function ContactsPopover() {
  const popover = usePopover();

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        color={popover.open ? 'inherit' : 'default'}
        onClick={popover.onOpen}
        sx={{
          ...(popover.open && {
            bgcolor: (theme) => theme.palette.action.selected,
          }),
        }}
      >
        <Iconify icon="solar:users-group-rounded-bold-duotone" width={24} />
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 320 }}>
        <Typography variant="h6" sx={{ p: 1.5 }}>
          Contacts <Typography component="span">({_contacts.length})</Typography>
        </Typography>

        <Scrollbar sx={{ height: 320 }}>
          {_contacts.map((contact) => (
            <MenuItem key={contact.id} sx={{ p: 1 }}>
              <Badge
                variant={contact.status}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{ mr: 2 }}
              >
                <Avatar alt={contact.name} src={contact.avatarUrl} />
              </Badge>

              <ListItemText
                primary={contact.name}
                secondary={contact.status === 'offline' ? fToNow(contact.lastActivity) : ''}
                primaryTypographyProps={{ typography: 'subtitle2' }}
                secondaryTypographyProps={{
                  typography: 'caption',
                  color: 'text.disabled',
                }}
              />
            </MenuItem>
          ))}
        </Scrollbar>
      </CustomPopover>
    </>
  );
}

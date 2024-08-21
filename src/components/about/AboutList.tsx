import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

interface AboutListProps {
  listItem: string[];
  title: string;
}
const AboutList = ({ listItem, title }: AboutListProps) => {
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{ paddingTop: '10px' }}
        fontWeight="bold"
      >
        {title}:
      </Typography>
      <List
        sx={{
          listStyle: 'disc',
          padding: '2rem',
          '& .MuiListItem-root': {
            padding: '10px 0',
          },
        }}
      >
        {listItem.map((item) => (
          <ListItem
            key={item}
            sx={{
              display: 'list-item',
              '&.MuiListItem-root::marker': {
                color: 'lightgrey',
              },
            }}
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AboutList;

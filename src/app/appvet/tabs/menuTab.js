import { Box, List, ListItem, ListItemIcon, ListItemText, Menu, Typography } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { format } from 'date-fns';

const MenuItems = [
  { label: 'Minha Agenda', icon: <EventNoteIcon /> },
  { label: 'Relatórios', icon: <AssessmentIcon /> },
  { label: 'Meu Estoque', icon: <Inventory2Icon /> },
  { label: 'Sair', icon: <CancelPresentationIcon /> },
];

export default function MenuTab(){
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <Box >
      <Box>
        <Typography>{currentDate}</Typography>
      </Box>
      
      <Typography>Menu</Typography>
      <List>        
        {MenuItems.map((item) => (
          <ListItem key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        ))

        }       
      </List>
    </Box>
  );
}
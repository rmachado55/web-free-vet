import styles from "./tab.module.css";
import { Box, Input,InputLabel, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchTab() {
  return (
    <Box>
      <Paper className={styles.paper}>
        <Box className={styles.searchBoxWrapper}>
        <SearchIcon/>
        <InputLabel>Busca</InputLabel>
        <Input />
        </Box>        
      </Paper>
      <Paper className={styles.paper}>
        <Typography>Resultados:</Typography>
      </Paper>
    </Box>
  );
}
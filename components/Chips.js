import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor:"whitesmoke",
    borderRadius:"5em",
    marginBottom:theme.spacing(6)
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Chips = function() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Grocery' },
    { key: 1, label: 'Technology' },
    { key: 2, label: 'Appliances' },
    { key: 3, label: 'Gaming' },
    // { key: 4, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <>
    <h2 style={{
      textAlign:"center",
      fontWeight:"400",
      fontSize:"1.8em",
      letterSpacing:".15em",
      marginBottom:".4em"
    }}>Choose At Least One Tag</h2>
    <Box component="ul" className={classes.root}>
      {chipData.map((data) => (
          <li key={data.key}>
            <Chip
              // icon={icon}
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </li>
      ))}
    </Box>
    </>
  );
}

export default Chips
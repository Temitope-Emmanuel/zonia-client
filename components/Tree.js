import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx"
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import {FaArrowCircleRight} from "react-icons/fa"
import {FaArrowCircleDown} from "react-icons/fa"
import {MdLocalGroceryStore} from 'react-icons/md'
import {FaShirtsinbulk} from "react-icons/fa"
import {GrTechnology} from "react-icons/gr"
import {RiHomeGearLine} from "react-icons/ri"
import {RiGameLine} from "react-icons/ri"
import {BsThreeDots} from "react-icons/bs"


const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    // color: theme.palette.text.secondary,
    '& > $content': {
        transition:"all .2s ease-in-out",
        overflow:"hidden",
        borderRadius:"0 0 !important",
        padding:"0 .2em"
    },
    '&:hover > $content': {
      backgroundColor: "white",
     },
    '&:focus > $content, &$selected > $content': {
    //   backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
    //   color: 'var(--tree-view-color)',
    //   backgroundColor:"white",
    //   borderRadius:"0 0 !important"
    },
    '& > $content $label, &:hover > $content $label, &$selected > $content $label': {
        transition:"all .3s linear",
        padding:".3em",
        margin:theme.spacing(.2,0)
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
        backgroundColor: 'white',
        borderRadius:"1.8em 0 1.8em 0",
        border:"1px solid rgba(0,0,0,.2)",
        color:"black"
    },
    color:"green"
  },
  content: {
    color: theme.palette.text.secondary,
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  selected: {},
  expanded: {
      backgroundColor:"white",
      border:"2px solid rgba(0,0,0,.05)",
      borderRadius:".3em"
  },
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
    fontSize:"2em"
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
    fontSize:"1.2em",
  },
  colorWhite:{
      backgroundColor:"white"
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const [isClicked,setIsClicked] = React.useState(false)

  const handleClick = () => {
      setIsClicked(!isClicked)
  }

  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
    onClick={handleClick}
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': "white",
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: "auto",
    // flexGrow: 1,
    maxWidth: "95%",
    margin:"0 .5em",
    display:"flex",
    flexDirection:"column",
    backgroundColor:"whitesmoke",
    borderRadius:".4em",
    paddingTop:".3em"
  }
});

const DefaultTreeView = function ({open}) {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
    //   defaultExpanded={['3']}
      defaultCollapseIcon={<FaArrowCircleDown />}
      defaultExpandIcon={<FaArrowCircleRight />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText={open && "Groceries"} labelIcon={MdLocalGroceryStore} />
      <StyledTreeItem nodeId="2" labelText={open && "Fashion"} labelIcon={FaShirtsinbulk}/>
      <StyledTreeItem nodeId="3" labelText={open && "Electronics"} labelIcon={GrTechnology}>
        <StyledTreeItem
          nodeId="5"
          labelText="Social"
          labelIcon={SupervisorAccountIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Updates"
          labelIcon={InfoIcon}
          labelInfo="2,294"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          labelInfo="3,566"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={LocalOfferIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText={open && "Home & Offices"} labelIcon={RiHomeGearLine} />
      <StyledTreeItem nodeId="5" labelText={open && "Gaming"} labelIcon={RiGameLine} />
      <StyledTreeItem nodeId="6" labelText={open && "Other categories"} labelIcon={BsThreeDots} />
    </TreeView>
  );
}


export default DefaultTreeView
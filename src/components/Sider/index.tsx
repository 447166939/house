import React, { useState, useCallback,Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import rootCategory from '../../data/rootCategories/rootCategory'
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  sider: {
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#f7f8fa",
    padding: "25px 21px 55px 21px",
    height:'600px',
    overflowY:'scroll',
  },
  serviceBtn: {
    color: "#2699FB",
    width: "278px",
    height: "44px",
    outline: "none",
    border: "none",
    boxShadow: "-4px -2px 4px 0px #fff,4px 2px 6px 0px #DFE4EA",
    borderRadius: "8px",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "25px"
  },
  active: {
    color: "#CBD5E5",
    "&:after": {
      content: "''",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      boxShadow: "2px 2px 2px 0px #DFE4EA inset, -2px -2px 2px 0px #fff inset",
      borderRadius: "8px"
    }
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  childNested: {
    paddingLeft: theme.spacing(8)
  }
}));
export interface ISiderProps {}
const Sider: React.FC<ISiderProps> = (props) => {
  const classes = useStyles();
  const [idx, setIdx] = useState();
  const [tech, setTech] = useState(false);
  const handleClick = useCallback((idx) => {
    setIdx(pre=>{
      if(pre==idx){
        return null
      }else{
        return idx;
      }
    });
  }, []);
  const handleClickTechSub = useCallback((index) => {
    setTech((pre) => {
      if(pre==index){
        return null;
      }else{
        return index;
      }
    });
  }, []);
  const servicesub=rootCategory[0].subCategories[0].subCategoriesSub
  const technologiessub=rootCategory[1].subCategories
  const solutionssub=rootCategory[2].subCategories[0].subCategoriesSub
  const blogAndNewsSub=rootCategory[3].subCategories[0].subCategoriesSub
  console.log('root',technologiessub)
  return (
    <List component={"nav"} className={classes.sider}>
      <ListItem
        onClick={handleClick.bind(null, 0)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 0 })}
        button>
        Services
      </ListItem>
      <Collapse in={idx==0} timeout="auto" unmountOnExit>
        <List disablePadding>
          {
           servicesub.map((item:any,index:any)=>{
             return (
                 <ListItem key={index} className={classes.nested} button>
                   <ListItemText>{item.text}</ListItemText>
                 </ListItem>
             )
           })
          }
        </List>
      </Collapse>
      <ListItem
        button
        onClick={handleClick.bind(null, 1)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 1 })}>
        Technologies
      </ListItem>
      <Collapse in={idx == 1} timeout="auto" unmountOnExit>
        <List disablePadding>
          {technologiessub.map((item:any,index:any)=>{
            return (
                <Fragment key={index}>
                <ListItem key={index} className={classes.nested} button onClick={handleClickTechSub.bind(null,index)}>
                  <ListItemText>{item.text}</ListItemText>
                  {index==tech ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={index==tech} timeout="auto" unmountOnExit>
            <List disablePadding>
              {item.subCategoriesSub.map((v:any,i:any)=>{
                return (
                    <ListItem key={i} className={classes.childNested}>{v.text}</ListItem>
                )
              })}
                </List>
                </Collapse>
                </Fragment>
            )
          })}
        </List>
      </Collapse>
      <ListItem
        button
        onClick={handleClick.bind(null, 2)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 2 })}>
        Solutions
      </ListItem>
      <Collapse in={idx==2} timeout="auto" unmountOnExit>
        <List disablePadding>
          {
            solutionssub.map((item:any,index:any)=>{
              return (
                  <ListItem key={index} className={classes.childNested}>{item.text}</ListItem>
              )
            })
          }
        </List>
      </Collapse>
      <ListItem
        button
        onClick={handleClick.bind(null, 3)}
        className={clsx(classes.serviceBtn, { [classes.active]: idx == 3 })}>
        Blog & News
      </ListItem>
      <Collapse in={idx==3} timeout="auto" unmountOnExit>
        <List disablePadding>
          {
            blogAndNewsSub.map((item:any,index:any)=>{
              return (
                  <ListItem key={index} className={classes.childNested}>{item.text}</ListItem>
              )
            })
          }
        </List>
      </Collapse>
    </List>
  );
};
export default Sider;

import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sidebarStyle from "assets/jss/material-dashboard-react/components/sidebarStyle.jsx";

// import InboxIcon from '@material-ui/icons/MoveToInbox';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const paddingNested = {
  paddingLeft: '40px',
}

class Sidebar extends Component {
  // verifies if routeName is the one active (in browser input)
  state = {
    open: false,
    collapseList: new Array(100).fill(false)
  }

  handleClick = (key) => {
    
    // this.setState(state => ({ open: !state.open }));
    let c = this.state.collapseList.slice();
    c[key] = !c[key]
    this.setState({ collapseList: c })
  };

  render() {
    const {...props} = this.props;
    function activeRoute(routeName) {
      return props.location.pathname.indexOf(routeName) > -1 ? true : false;
    }
    const { classes, color, logo, image, logoText, routes } = props;
    var links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.hide) return null;
          if (prop.slash) {
            return <div className={classes.slash} key={key}></div>;
          }
          if (prop.redirect) return null;
          if (prop.childLink) {
            const whiteFontClasses = classNames({
              [" " + classes.whiteFont]: activeRoute(prop.path)
            });
            return (
              <div key={key}>
                <ListItem button className={classes.itemLink + listItemClasses} onClick={() =>  this.handleClick(key)} key={key}>
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    {typeof prop.icon === "string" ? (
                      <Icon>{prop.icon}</Icon>
                    ) : (
                      <prop.icon />
                    )}
                  </ListItemIcon>
                <ListItemText inset primary={prop.sidebarName} className={classes.itemText + whiteFontClasses} disableTypography={true} />
                {this.state.collapseList[key] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.collapseList[key]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {
                    prop.childLink.map((childProp, childKey) => {
                        var listItemClasses;
                      listItemClasses = classNames({
                        [" " + classes[color]]: activeRoute(childProp.path)
                      });
                      const whiteFontClasses = classNames({
                        [" " + classes.whiteFont]: activeRoute(childProp.path)
                      });
                      return (<NavLink
                              to={childProp.path}
                              className={classes.item}
                              activeClassName="active"
                              key={"childNav" + childKey}
                            >
                            <ListItem button className={classes.itemLink + listItemClasses} style={paddingNested} key={"childListItem" + childKey}>
                              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                {typeof childProp.icon === "string" ? (
                                  <Icon>{childProp.icon}</Icon>
                                ) : (
                                  <childProp.icon />
                                )}
                              </ListItemIcon>
                              <ListItemText
                                primary={childProp.sidebarName}
                                className={classes.itemText + whiteFontClasses}
                                disableTypography={true}
                              />
                            </ListItem>
                          </NavLink>
                        )
                      }
                    )
                  }
                </List>
              </Collapse>
            </div>
            )
          } else {/////////////////////////////////////////////////////////////////////////////////////
            var listItemClasses;
            listItemClasses = classNames({
              [" " + classes[color]]: activeRoute(prop.path)
            });
            const whiteFontClasses = classNames({
              [" " + classes.whiteFont]: activeRoute(prop.path)
            });
            return (
              <NavLink
                to={prop.path}
                className={classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    {typeof prop.icon === "string" ? (
                      <Icon>{prop.icon}</Icon>
                    ) : (
                      <prop.icon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.sidebarName}
                    className={classes.itemText + whiteFontClasses}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
          }
        })}
      </List>
    );
    var brand = (
      <div className={classes.logo}>
        <a href="#" className={classes.logoLink}>
          <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img} />
          </div>
          {logoText}
        </a>
      </div>
    );
    
    return (
      <div>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              <HeaderLinks />
              {links}
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            anchor="left"
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);

/*eslint-disable*/
import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/" color="transparent" className={classes.navLink}>
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/leaderboard"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Leaderboard
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://docs.google.com/document/d/1lui1wNCVf4vHZNblJwijYa37QiefAWSMnuBY4GjAth4/edit?usp=sharing"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Instructions
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Notifications
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="/#TeamSection"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Contact Us
        </Button>
      </ListItem>
      <ListItem
        className={classes.listItem}
      >
        <NavDropdown
          align-left
          color="transparent"
          id="basic-nav-dropdown"
          title="Notifications"
          id="nav-drop"
        >
          {/* <NavDropdown.Item eventKey="Notification-Main" id="card"> */}
              <div id="date">Date : 17.01.2021</div>
              <p className="card_text">    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              laoreet mauris lorem, id bibendum neque sodales a. Nam eget
              euismod ligula. Nunc luctus ultrices dui, sed suscipit quam
              tincidunt non. Suspendisse sed eros nunc. Morbi sed diam vitae
              eros vehicula vehicula. Lorem ipsum dolor sit amet.
              </p>
          <NavDropdown.Divider />
          <div id="date">Date;17.01.2021</div>
              <p className="card_text">    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              laoreet mauris lorem, id bibendum neque sodales a. Nam eget
              euismod ligula. Nunc luctus ultrices dui, sed suscipit quam
              tincidunt non. Suspendisse sed eros nunc. Morbi sed diam vitae
              eros vehicula vehicula. Lorem ipsum dolor sit amet.
              </p>

              </NavDropdown>
        
      </ListItem>

    </List>
  );
}
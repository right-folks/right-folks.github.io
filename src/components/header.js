import React from "react"
import clsx from "clsx"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import {
  AppBar,
  ClickAwayListener,
  Collapse,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper
} from "@material-ui/core"
import Nav from "./nav"
import ElevationScroll from "./ElevationScroll"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import CloseRoundedIcon from "@material-ui/icons/CloseRounded"
import { useSiteNav } from "../hooks/use-site-nav"

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: theme.palette.background.default
    },
    burgerNav: {
      backgroundColor: theme.palette.background.default
    },
    header: {
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1440px"
      },
      [theme.breakpoints.down("xs")]: {
        padding: `0 1.75rem`
      },
      maxWidth: "960px",
      margin: `0 auto`,
      padding: `0 1.75rem`
    },
    menuButton: {
      color: theme.palette.primary.main,
      marginRight: "-12px"
    },
    hide: {
      display: "none"
    },
    link: {},
    burgerItem: {
      color: theme.palette.primary.main,
      textAlign: "center"
    }
  })
)

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const nav = useSiteNav()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (

    <ClickAwayListener
      onClickAway={() => alert(1)}
    >
    <ElevationScroll elevation={3}>
      <AppBar
        className={classes.appBar}
        position={"sticky"}
      >
          <header>
            <Grid
              className={classes.header}
              container
              justify={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <h2 className={classes.link}>
                  <Link
                    to="/"
                    underline={"none"}
                  >
                    {siteTitle}
                  </Link>
                </h2>
              </Grid>
              <Grid item>
                <Grid container>
                  <Nav/>
                  <Hidden mdUp>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={open
                        ? handleDrawerClose
                        : handleDrawerOpen
                      }
                      edge="start"
                      className={clsx(classes.menuButton)}
                    >
                      {
                        open
                          ? <CloseRoundedIcon fontSize={"large"}/>
                          : <MenuRoundedIcon fontSize={"large"}/>
                      }
                    </IconButton>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
            <Hidden smUp>
              <Collapse in={open}>
                <Paper
                  className={classes.burgerNav}
                  elevation={0}
                >
                  <List component="nav" aria-label="">
                    {
                      nav.map(navItem => (
                        <ListItem
                          key={navItem.title}
                          onClick={handleDrawerClose}
                          button
                          alignItems={"center"}
                          className={classes.burgerItem}
                        >
                          <ListItemText
                            primary={navItem.title}/>
                        </ListItem>
                      ))
                    }
                  </List>
                </Paper>
              </Collapse>
            </Hidden>
          </header>
      </AppBar>
    </ElevationScroll>
    </ClickAwayListener>

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

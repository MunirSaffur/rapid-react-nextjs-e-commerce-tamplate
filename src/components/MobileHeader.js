"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  List,
  Typography,
  SwipeableDrawer,
  AccordionDetails,
  Menu,
  ListItemIcon,
  MenuItem,
  ListItem,
  FormControl,
  Select,
} from "@mui/material";
import rapid_logo from '../asstes/images/rapid_logo.png'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import Image from "next/image";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { US, AE } from "country-flag-icons/react/3x2";
import MenuIcon from "@mui/icons-material/Menu";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  cart_data,
  handleRemoveItemFromCart,
  getCartItemsFromLocalStorage,
} from "../app/globalRedux/features/CartSlice";
import { categories } from "@/app/data";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";

export default function MobileHeader() {
  const [language, setLanguage] = useState("english");
  const [cartDrawer, setCartDrawer] = useState(false);
  const [menuDrawer, setMenuDrawer] = useState(false);
  const [userMenu, setUserMenu] = useState(null);
  const cart = useSelector(cart_data);
  const dispatch = useDispatch();

  const handleClickUser = (event) => {
    setUserMenu(event.currentTarget);
  };
  const handleCloseUser = () => {
    setUserMenu(null);
  };

  return (
    <div className="mobile-navbar-header block sm:hidden">
      <div className="mobile-header">
        <div className="flex items-center justify-between mobile-top-bar">
          <Typography className="" variant="body2" gutterBottom mb={0}>
            Free Shipping For orders under 100$
          </Typography>
          {/* language */}
          <FormControl
            sx={{ minWidth: 120 }}
            size="small"
            className="header-switcher"
          >
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={language}
              label="Age"
              onChange={(event) => {
                setLanguage(event.target.value);
              }}
            >
              <MenuItem value="english">
                <US title="United States" className="w-5 me-2" /> english
              </MenuItem>
              <MenuItem value="Arabic">
                <AE title="United States" className="w-5 me-2" /> Arabic
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex items-center justify-between container mobile-nav-header">
          {/* Menu Icon */}
          <div>
            <React.Fragment>
              <Button
                onClick={() => {
                  setMenuDrawer(true);
                }}
              >
                <MenuIcon />
              </Button>
              <SwipeableDrawer
              className="costum-sidebar"
                anchor="left"
                open={menuDrawer}
                onClose={() => {
                  setMenuDrawer(false);
                }}
                onOpen={() => {
                  setMenuDrawer(true);
                }}
              >
                <Box sx={{ width: 330 }} role="presentation">
                  <div className="flex items-center justify-between border-b p-3 mb-3">
                    <Link href='/'><Image src={rapid_logo} width={110}/></Link>
                    <CloseIcon
                      onClick={() => {
                        setMenuDrawer(false);
                      }}
                    />
                  </div>
                  <List className="mb-side-bar-menu">
                    {categories.map((category, index) => (
                      <ListItem disablePadding key={index}>
                        {category.children.length ? (
                          <Accordion className="mb-side-bar-menu-item">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography>{category.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              {category.children.map((child, index) => (
                                <p>
                                  <Link
                                    key={index}
                                    href={"/category/" + child.name}
                                    className=""
                                  >
                                    {child.name}{" "}
                                  </Link>{" "}
                                </p>
                              ))}
                            </AccordionDetails>
                          </Accordion>
                        ) : (
                          <Link
                            className="mb-single-menu-item"
                            href={"/category/" + category.name}
                          >
                            {category.name}{" "}
                          </Link>
                        )}
                      </ListItem>
                    ))}
                  </List>
                  <div className="social-icons">
                    <span>Follow us:</span>
                    <SubscriptionsTwoToneIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                  </div>
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          </div>
          <Link href='/'><Image src={rapid_logo} width={120}/></Link>
          {/* header Actions */}
          <div className="flex items-center justify-between mobile-header-actions me-2">
            <Link href="/profile">
              <PersonIcon />
            </Link>

            <Link href="/favorite">
              <FavoriteIcon />
            </Link>

            <React.Fragment>
               <div>
                <span className="cart-header">{cart.length}</span>
                <LocalMallIcon onClick={() => {
                  setCartDrawer(true);
                }} />
                </div>
              <SwipeableDrawer
               className="costum-sidebar"
                anchor="right"
                open={cartDrawer}
                onClose={() => {
                  setCartDrawer(false);
                }}
                onOpen={() => {
                  setCartDrawer(true);
                }}
              >
                <Box sx={{ width: 330 }} role="presentation">
                  <div className="flex items-center justify-between border-b p-3 mb-3">
                    <p className="m-0">My Cart</p>
                    <CloseIcon
                      onClick={() => {
                        setCartDrawer(false);
                      }}
                    />
                  </div>
                  <List className="side-cart-list">
                    {cart.length >= 1 ? (
                      cart.map((item, index) => (
                        <ListItem disablePadding key={index}>
                          <div className="flex items-center justify-between header-cart-item mb-3 px-3 w-100">
                            <div className="flex items-center header-cart-item-info">
                              <Image src={item.image} />
                              <div>
                                <p className="m-0">{item.title}</p>
                                <span>count: {item.count} -</span>
                                <span> color: Black</span>
                              </div>
                            </div>
                            <DeleteOutlineIcon
                              onClick={() => {
                                dispatch(handleRemoveItemFromCart(item));
                              }}
                            />
                          </div>
                        </ListItem>
                      ))
                    ) : (
                      <div className="cart-empty">
                        <ProductionQuantityLimitsIcon />
                        <p>Your cart is empty :(</p>
                      </div>
                    )}
                  </List>
                  {cart.length ? (
                    <div className=" pt-3 cart-actions">
                      <p className="px-3 mb-2 flex items-cetner justify-between">
                        Total: <strong>120$</strong>
                      </p>
                      <Button
                        onClick={() => {
                          setCartDrawer(false);
                        }}
                        className="go-to-cart-btn"
                      >
                        {" "}
                        <Link href="/cart">View Cart</Link>
                      </Button>
                      <Button
                        onClick={() => {
                          setCartDrawer(false);
                        }}
                        className="ms-2 go-to-checkout-btn"
                      >
                        {" "}
                        <Link href="/checkout">Continue to Checkout</Link>
                      </Button>
                    </div>
                  ) : null}
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}

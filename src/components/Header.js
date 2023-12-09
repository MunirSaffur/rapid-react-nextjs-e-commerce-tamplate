"use client";
import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  FormControl,
  InputLabel,
  Select,
  Box,
  Divider,
  List,
  SwipeableDrawer,
  ListItem,
} from "@mui/material";
import rapid_logo from '../asstes/images/rapid_logo.png'
import { categories } from "@/app/data";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LoginIcon from "@mui/icons-material/Login";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { US, AE } from "country-flag-icons/react/3x2";
import Image from "next/image";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  cart_data,
  handleRemoveItemFromCart,
  getCartItemsFromLocalStorage,
} from "../app/globalRedux/features/CartSlice";
import Link from "next/link";
import NavBarItem from "./navBarItem";

export default function Header() {
  const [language, setLanguage] = useState("English");
  const [userMenu, setUserMenu] = useState(null);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const cart = useSelector(cart_data);

  const handleClickUser = (event) => {
    setUserMenu(event.currentTarget);
  };
  const handleCloseUser = () => {
    setUserMenu(null);
  };

  useEffect(() => {
    dispatch(getCartItemsFromLocalStorage());
  }, []);

  const open = Boolean(anchorEl);
  const handleCategoriesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="main-header hidden sm:block">
      <div className="top-bar">
        <div className="container ">
          <div>
            <a href="#">+88012 3456 7894</a>
            <a href="#">support@ui-lib.com</a>
          </div>
          <div>
            <a href="#">Theme FAQ"s</a>
            <a href="#">Need Help?</a>
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
                onChange={(event) => {
                  setLanguage(event.target.value)
                }}
              >
                <MenuItem value="English">
                  <US title="United States" className="w-5 me-2" /> english
                </MenuItem>
                <MenuItem value="Arabic">
                  <AE title="United States" className="w-5 me-2" /> Arabic
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container d-flex aling-items-center justify-content-between py-3">
          {/* Logo */}
          <Typography variant="h4" gutterBottom mb={0}>
            <Link href="/"><Image src={rapid_logo} width={150}/></Link>
          </Typography>

          {/* Search */}
          <div className="search d-flex aling-items-center justify-content-between">
            <input placeholder="Search an item..." />
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleCategoriesClick}
              endIcon={<ExpandMoreIcon />}
            >
              Categories
            </Button>
            <Menu
              className="search-category-menu"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => {
                setAnchorEl(null);
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {categories.map((category, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    setAnchorEl(null);
                  }}
                >
                  {category.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="header-actions flex items-center justify-between">
            <div>
              <PersonIcon
                aria-controls={Boolean(userMenu) ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Boolean(userMenu) ? "true" : undefined}
                onClick={handleClickUser}
              />
              <Menu
                id="basic-menu"
                anchorEl={userMenu}
                open={Boolean(userMenu)}
                onClose={handleCloseUser}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseUser}>
                  <Link href="/profile">
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  My Account
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUser}>
                  <Link href="/">
                    <ListItemIcon>
                      <AddCircleOutlineIcon />
                    </ListItemIcon>
                    register
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUser}>
                  <Link href="/">
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    Login
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUser}>
                  <Link href="/">
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </div>
            <div>
              <Link href="/favorite">
                <FavoriteIcon />
              </Link>
            </div>
            <div>
              <React.Fragment>
                  <span className="cart-header">{cart.length}</span>
                    <LocalMallIcon onClick={()=>{setCartDrawer(true)}}/>
                  <SwipeableDrawer
                    anchor="right"
                    open={cartDrawer}
                    onClose={()=>{setCartDrawer(false)}}
                    onOpen={()=>{setCartDrawer(true)}}
                  >
                    <Box
                      sx={{ width: 330 }}
                      role="presentation"
                    >
                      <div className='flex items-center justify-between border-b p-3 mb-3'>
                        <p className="mb-0">My Cart</p>
                        <CloseIcon onClick={()=>{setCartDrawer(false)}}/>
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
                              <ProductionQuantityLimitsIcon/>
                              <p>Your cart is empty :(</p>
                            </div>
                          )}
                      </List>
                      { cart.length ? 
                      <div className=" pt-3 cart-actions">
                        <p className="px-3 mb-2 flex items-cetner justify-between">Total: <strong>120$</strong></p>
                        <div>
                        <Button onClick={()=>{setCartDrawer(false)}} className="go-to-cart-btn"> <Link href="/cart">View Cart</Link></Button>
                        <Button onClick={()=>{setCartDrawer(false)}} className="ms-2 go-to-checkout-btn"> <Link href="/checkout">Continue to Checkout</Link></Button>
                        </div>
                      </div> : null}
                    </Box>
                  </SwipeableDrawer>
                </React.Fragment>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navigation">
        <div className="container flex items-center justify-between">
          <ul className="d-flex m-0 p-0 aling-items-center">
            {categories.map((category, index) => (
              <li key={index}>
                {category.children.length ? (
                  <NavBarItem data={category}/>
                ) : (
                  <Link href={'/category/'+category.name}>{category.name} </Link>
                )} 
              </li>
            ))}
          </ul>
          <Typography
            className="header-free-shipping"
            variant="body2"
            gutterBottom
            mb={0}
          >
            <RocketLaunchIcon /> Free Shipping For orders under 100$
          </Typography>
        </div>
      </div>
    </div>
  );
}

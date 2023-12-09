"use client";
import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import avatar from "../../asstes/images/avatar.jpg";
import { styled } from "@mui/material/styles";
import { orders } from "../data";
import Image from "next/image";

export default function page() {
  const [tab, setTab] = useState("info");
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-3">
          <div className="account-sidebar">
            <p
              onClick={() => {
                setTab("info");
              }}
            >
              Account Info
            </p>
            <p
              onClick={() => {
                setTab("orders");
              }}
            >
              My Orders
            </p>
            <p>Saved Items</p>
            <p>Change Password</p>
            <p>Payment Methods</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-9">
          <div className="account-content">
            <h5>Account Information</h5>
            {tab === "info" ? (
              <div className="grid grid-cols-12 gap-4 pt-2">
                <div className="col-span-12">
                  <Avatar
                    alt="Remy Sharp"
                    src={avatar}
                    sx={{ width: 120, height: 120 }}
                  />
                  <Button component="label">
                    Change Image
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </div>
                <FormControl className="col-span-12 sm:col-span-6" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Full Name
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="start"
                        >
                          <AccountCircleIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Full Name"
                  />
                </FormControl>
                <FormControl className="col-span-12 sm:col-span-6" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    E-mail
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="start"
                        >
                          <EmailIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="E-mail"
                  />
                </FormControl>
                <FormControl className="col-span-12" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Address
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="start"
                        >
                          <MyLocationIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Address"
                  />
                </FormControl>
                <DatePicker
                  className="col-span-12 sm:col-span-6"
                  label="Date of birth"
                  slotProps={{
                    inputAdornment: {
                      position: "start",
                    },
                  }}
                />
                <FormControl className="col-span-12 sm:col-span-6" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Phone Number
                  </InputLabel>
                  <OutlinedInput
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="start"
                        >
                          <LocalPhoneIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Phone Number"
                  />
                </FormControl>
                <TextField
                  className="col-span-12"
                  label="About You"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </div>
            ) : 
              (
                <div className="my-orders">
                    <div className="my-order-item">
                        <h5 className="mb-0">#WU3746HGG12</h5>
                        <span>Aug 8, 2023 <strong className="text-sky-400/100">Delivered</strong></span>
                        <div className="my-order-item-content mt-2">
                            {
                                orders.map((item, index)=>(
                                    <div className="flex items-center justify-between mb-2" key={index}>
                                        <div className="flex items-center">
                                            <Image src={item.image.src} height={60} width={60} className="rounded"/>
                                            <div className="ms-3">
                                                <p className="mb-0">{item.title}</p>
                                                <span className="block text-xs ">{item.price} x {item.count}</span>
                                                <span className="text-xs ">{item.price * item.count}</span>
                                            </div>
                                        </div>
                                        <Button>Leave Review</Button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

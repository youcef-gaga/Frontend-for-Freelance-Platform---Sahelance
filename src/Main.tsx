/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  TriangleDownIcon,
  UnlockIcon,
} from "@chakra-ui/icons";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import InsertUpdateJob from "./components/job/InsertUpdateJob";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import JobOffersRequests from "./components/job/JobsList";
import AuthenticationService from "./service/AuthenticationService";
import ViewOfferRequest from "./components/job/ViewJob";
import UserService from "./service/UserService";
import JobConst from "./consts/JobConst";
import UserConst from "./consts/UserConst";
import Footer from "./components/Footer";
import Conversations from "./components/message/Conversations";
import JobInfoSidebar from "./components/message/JobInfoSidebar";
import JobService from "./service/JobService";
import { FaPenNib, FaSignInAlt } from "react-icons/fa";
import './amp'; 


const mainMenu = [
  { name: "Home", url: "/" },
  { name: "Offers", url: "/offers" },
  { name: "Requests", url: "/requests" },
];

const customLogoStyle = {
  height: "57px",
  maxHeight: "240px",
  maxWidth: "240px",
  width: "236px",
};
const myMenu = [
  { name: "My Offers", url: "/myOffers" },
  { name: "My Requests", url: "/myRequests" },
];

interface UserMenuItem {
  label: string;
  href: string;
}

const RIGHT_MENU: Map<string, Array<UserMenuItem>> = new Map([
  [
    "ADMIN",
    [
      { label: "User Offers", href: "/userOffers" },
      { label: "User Requests", href: "/userRequests" },
    ],
  ],
  [
    "USER",
    [
      { label: "My Offers", href: "/myOffers" },
      { label: "My Requests", href: "/myRequests" },
      { label: "Conversations", href: "/rooms" },
    ],
  ],
]);

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMenu, setSelectedMenu] = useState("/");
  const isAuthenticated = () => {
    return localStorage.getItem("access_token");
  };
  let navigate = useNavigate();
  const selectMenuAndNavigate = (link: { name: string; url: string }): void => {
    setSelectedMenu(link.url);
    navigate(link.url);
  };

  const switchColor = (): void => {
    const color = localStorage.getItem("chakra-ui-color-mode");
    localStorage.setItem(
      "chakra-ui-color-mode",
      color === "light" ? "dark" : "light"
    );
    window.location.reload();
  };

  return (
    <>
      <header id="masthead" className="vw-site-header">
        <div id="vw-header">
          <div id="vw-header-menu" className="py-2">
            <div className="header-wrap">
              <div className="vw-menubar" id="site-sticky-menu">
                <div className="container">
                  <div className="row menu">
                    <div className="col-lg-2 col-md-3 col-sm-9 col-9">
                      <div
                        className="vw-resume-logo"
                        id="site-sticky-menu1"
                        onClick={() => navigate("/")}
                      >
                        <a style={{ cursor: "pointer" }}>
                          <img
                            src="./sahelance_files/sahelance_s.png"
                            className="custom-logo"
                            alt="sahelance"
                            decoding="async"
                          />
                        </a>
                        <div className="logo-text"></div>
                      </div>
                    </div>
                    <div
                      className="col-lg-7 col-md-5 col-sm-3 col-3 my-mobile_icon mt-lg-3 mt-md-3 mt-sm-4 mt-4"
                      id="vw-main-menu"
                    >
                      <div className="text-lg-end">
                        <span className="vw-responsive-menu-title"> MENU </span>
                        <div id="vw-sticky-menu">
                          <div className="innermenubox">
                            <div className="toggle-nav mobile-menu">
                              <div
                                role="button"
                                // @ts-ignore: Ignorer temporairement l'erreur de typage
                                on="tap:sidebar1.toggle"
                                tabindex="0"
                                id="open_nav"
                              ></div>
                            </div>
                            <div className="main-header">
                              <div id="mySidenav" className="sidenav navbar">
                                <nav
                                  id="site-navigation"
                                  className="main-navigation"
                                >
                                  <div className="menu clearfix">
                                    <ul
                                      id="menu-primary"
                                      className="clearfix mobile_nav"
                                    >
                                      <li
                                        id="menu-item-322"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-322"
                                        onClick={() => navigate("/register")}
                                      >
                                        <Flex alignItems={"center"}>
                                          {!isAuthenticated() && (
                                            <>
                                              <a style={{ cursor: "pointer" }}>
                                                Register
                                              </a>
                                            </>
                                          )}
                                        </Flex>
                                      </li>
                                      <li
                                        id="menu-item-323"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-323"
                                        onClick={() =>
                                          navigate("/authenticate")
                                        }
                                      >
                                        <Flex alignItems={"center"}>
                                          {!isAuthenticated() && (
                                            <>
                                              <a style={{ cursor: "pointer" }}>
                                                LogIn
                                              </a>
                                            </>
                                          )}
                                        </Flex>
                                      </li>
                                      <li
                                        id="menu-item-325"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-325"
                                        onClick={() => navigate("/offers")}
                                      >
                                        <a style={{ cursor: "pointer" }}>
                                          Offers
                                        </a>
                                      </li>
                                      <li
                                        id="menu-item-327"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-327"
                                        onClick={() => navigate("/requests")}
                                      >
                                        <a style={{ cursor: "pointer" }}>
                                          Requests
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </nav>
                              </div>
                            </div>
                            <amp-sidebar
                              id="sidebar1"
                              layout="nodisplay"
                              side="right"
                            >
                              <div id="mySidenav" className="sidenav navbar">
                                <nav
                                  id="site-navigation"
                                  className="main-navigation"
                                >
                                  <div
                                    role="button"
                                    aria-label="close sidebar"
                                    // @ts-ignore: Ignorer temporairement l'erreur de typage
                                    on="tap:sidebar1.toggle"
                                    tabindex="0"
                                    class="close-sidebar"
                                    id="close_nav"
                                  ></div>
                                  <div className="menu clearfix">
                                    <ul
                                      id="menu-primary-1"
                                      className="clearfix mobile_nav"
                                    >
                                      <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-322"
                                        onClick={() => navigate("/register")}
                                      >
                                        <a style={{ cursor: "pointer" }}>
                                          Register
                                        </a>
                                      </li>
                                      <li
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-323"
                                        onClick={() =>
                                          navigate("/authenticate")
                                        }
                                      >
                                        <a style={{ cursor: "pointer" }}>
                                          LogIn
                                        </a>
                                      </li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-325">
                                        <a href="http://localhost/sahelance/#">
                                          Jobs
                                        </a>
                                        <ul className="sub-menu">
                                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-326">
                                            <a href="http://localhost/sahelance/#">
                                              services
                                            </a>
                                          </li>
                                          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-328">
                                            <a href="http://localhost/sahelance/#">
                                              gaga
                                            </a>
                                          </li>
                                        </ul>
                                      </li>
                                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-327">
                                        <a href="http://localhost/sahelance/#">
                                          request
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </nav>
                              </div>
                            </amp-sidebar>
                          </div>
                        </div>
                        <span id="vw-sticky-onoff"> yes </span>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12 text-sm-start text-md-end text-lg-center text-center header-button mt-lg-3 mt-md-3">
                      <Flex alignItems={"center"}>
                        {isAuthenticated() && (
                          <Button
                            className="poppins-family zoom-in-zoom-out font-weight-bold theme_button"
                            mr={4}
                            leftIcon={<AddIcon />}
                            display={UserService.isAdmin() ? "none" : ""}
                            onClick={() =>
                              navigate("/insertJob/" + JobConst.SCOPE_PRIVATE)
                            }
                          >
                            Add Job
                          </Button>
                        )}
                        {isAuthenticated() && (
                          <Menu>
                            <MenuButton
                              as={Button}
                              rounded={"full"}
                              variant={"link"}
                              cursor={"pointer"}
                              minW={0}
                              alignContent={"center"}
                            >
                              <Box>
                                {UserService.getRole() ===
                                  UserConst.ROLE_ADMIN && (
                                  <Icon
                                    as={UnlockIcon}
                                    w={"28px"}
                                    height={"28px"}
                                    color={"red"}
                                  />
                                )}

                                {UserService.getRole() ===
                                  UserConst.ROLE_USER && (
                                  <img
                                    src={JobService.getImageLink(
                                      UserService.getUserPicture()
                                    )}
                                    style={{
                                      borderRadius: "50%",
                                      margin: "auto",
                                      width: "32px",
                                      height: "32px",
                                    }}
                                  />
                                )}
                              </Box>
                              <Box
                                fontSize={"0.7em"}
                                color={
                                  UserService.getRole() === UserConst.ROLE_ADMIN
                                    ? "red"
                                    : ""
                                }
                              >
                                {UserService.getUsername()}
                                <Icon ml={1} as={TriangleDownIcon} />
                              </Box>
                            </MenuButton>
                            <MenuList>
                              {RIGHT_MENU.get(UserService.getRole())?.map(
                                (menuItem) => {
                                  return (
                                    <MenuItem
                                      key={menuItem.href}
                                      onClick={() => {
                                        setSelectedMenu("");
                                        navigate(menuItem.href);
                                      }}
                                    >
                                      {menuItem.label}
                                    </MenuItem>
                                  );
                                }
                              )}{" "}
                              <MenuDivider />
                              <MenuItem onClick={() => switchColor()}>
                                Switch theme
                              </MenuItem>
                              <MenuDivider />
                              <MenuItem
                                onClick={() =>
                                  AuthenticationService.logout(() =>
                                    navigate("/")
                                  )
                                }
                              >
                                Logout
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        )}
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Box px={0}>
        <Box minH={"100vh"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/offers"
              element={
                <JobOffersRequests
                  key={"offers"}
                  type={JobConst.TYPE_OFFER}
                  scope={JobConst.SCOPE_PUBLIC}
                  title="Offers"
                />
              }
            />
            <Route
              path="/requests"
              element={
                <JobOffersRequests
                  key={"requests"}
                  type={JobConst.TYPE_REQUEST}
                  scope={JobConst.SCOPE_PUBLIC}
                  title="Requests"
                />
              }
            />
            <Route path="/insertJob/:scope" element={<InsertUpdateJob />} />
            <Route
              path="/editJob/:scope/jobId/:id"
              element={<InsertUpdateJob />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/rooms" element={<Conversations />} />
            <Route path="/rooms/:roomId" element={<JobInfoSidebar />} />
            <Route path="/authenticate" element={<Login />} />
            <Route
              path="/view/:scope/jobId/:id"
              element={<ViewOfferRequest />}
            />
            <Route
              path="/view/:scope/status/:status/jobId/:id"
              element={<ViewOfferRequest />}
            />

            <Route
              path="/myOffers"
              element={
                <JobOffersRequests
                  key={"myOffers"}
                  type={JobConst.TYPE_OFFER}
                  scope={JobConst.SCOPE_PRIVATE}
                  title="My Offers"
                />
              }
            />
            <Route
              path="/myRequests"
              element={
                <JobOffersRequests
                  key={"myRequests"}
                  type={JobConst.TYPE_REQUEST}
                  scope={JobConst.SCOPE_PRIVATE}
                  title="My Requests"
                />
              }
            />

            <Route
              path="/userOffers"
              element={
                <JobOffersRequests
                  key={"userOffers"}
                  type={JobConst.TYPE_OFFER}
                  scope={JobConst.SCOPE_PRIVATE}
                  status={JobConst.STATUS_CREATED}
                  title="User Offers"
                />
              }
            />
            <Route
              path="/userRequests"
              element={
                <JobOffersRequests
                  key={"userRequests"}
                  type={JobConst.TYPE_REQUEST}
                  scope={JobConst.SCOPE_PRIVATE}
                  status={JobConst.STATUS_CREATED}
                  title="User Requests"
                />
              }
            />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

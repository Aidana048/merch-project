import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import shop from "./akar-icons_shopping-bag.png";
import { PiUserCircle, PiUserCircleCheck } from "react-icons/pi";
import { logOut } from "../../../store/userRegis";

const options = [
  { label: "НОВИНКИ", path: "/" },
  { label: "ПЛАТЬЯ", path: "/platya" },
  { label: "ВЕРХ", path: "/category" },
  { label: "НИЗ", path: "/bottomCloth" },
  { label: "КУРТКИ", path: "/jackets" },
  { label: "КОСТЮМЫ", path: "/costume" },
];

const ITEM_HEIGHT = 48;

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const shopList = useSelector((state) =>
    state.shopSlice.shop.reduce((acc, rec) => acc + rec.count, 0)
  );
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick("/shop")}>
          <img src={shop} alt="shop" style={{ marginRight: "10px" }} />
          Магазин
          <span className="header__shoplist" style={{ marginLeft: "auto" }}>
            {shopList}
          </span>
        </MenuItem>
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleMenuItemClick(option.path)}
          >
            {option.label}
          </MenuItem>
        ))}
        <MenuItem>
          <p>{user?.name}</p>

          <span className="header__user">
            {user.name ? (
              <PiUserCircleCheck />
            ) : (
              <Link to="/register">
                <PiUserCircle />
              </Link>
            )}
          </span>

          {user.name ? (
            <button onClick={() => dispatch(logOut())}>Выход</button>
          ) : (
            ""
          )}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default BurgerMenu;

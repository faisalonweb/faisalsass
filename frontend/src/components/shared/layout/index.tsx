// import PropTypes from "prop-types";
// import Topbar from "./Topbar";

// const Layout = (props) => {
//   const { children } = props;

//   return (
//     <div>
//       <Topbar />
//       <main>{children}</main>
//     </div>
//   );
// };

// Layout.propTypes = {
//   children: PropTypes.node,
// };

// export default Layout;
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import Sidebar from "@src/components/shared/layout/Sidebar";
import Topbar from "@src/components/shared/layout/Topbar";

const Layout = (props) => {
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar open={open} toggleDrawer={toggleDrawer} />
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />

        <main>{children}</main>
      </Box>
    </Box>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
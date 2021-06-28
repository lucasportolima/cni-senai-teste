import React from "react";

import {
  HeaderAppBar,
  HeaderLogo,
  HeaderTabs,
  HeaderTab,
} from "./Header.style";
import { Toolbar, Container } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderTabs textColor="primary" centered>
      <HeaderTab sx={{ bgcolor: 'red' }} label="Aula 1" />
      <HeaderTab sx={{ bgcolor: 'yellow' }} label="Aula 2" />
      <HeaderTab sx={{ bgcolor: 'green' }} label="Aula 3" />
      <HeaderTab sx={{ bgcolor: 'blue' }} label="Aula 4" />
    </HeaderTabs>
  );
};

export default Header;

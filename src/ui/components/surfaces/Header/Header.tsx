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
      <HeaderTab sx={{ bgcolor: '#EF91C5' }} label="Aula 1" />
      <HeaderTab sx={{ bgcolor: '#EC81B9' }} label="Aula 2" />
      <HeaderTab sx={{ bgcolor: '#BB457B' }} label="Aula 3" />
      <HeaderTab sx={{ bgcolor: '#A0365A' }} label="Aula 4" />
    </HeaderTabs>
  );
};

export default Header;

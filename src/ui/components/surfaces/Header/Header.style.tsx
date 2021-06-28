import { experimentalStyled as styled } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const HeaderTabs = styled(Tabs)`
  background-color: transparent;
`;
export const HeaderTab = styled(Tab)`
    background-color: transparent;
    font-family: "Catamaran", sans-serif;
    text-transform: capitalize;
    margin: 0 6px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    color: #f0f2ef;
    font-weight: bold;
    height: 30px;
    min-height: 30px;
    transition: all 200ms;
    
    &:hover {
        height: 45px;
        transition: all 200ms;
    }
`;

export const HeaderAppBar = styled(AppBar)`
  background-color: transparent;
  box-shadow: none;

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;
`;

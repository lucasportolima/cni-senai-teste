import { experimentalStyled as styled } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export const HeaderTabs = styled(Tabs)`
  background-color: transparent;
`;

export const HeaderTab = styled(Tab)`
    background-color: transparent;
    text-transform: capitalize;
    margin: 0 6px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    color: ${({ theme }) => theme.palette.secondary.light};
    font-weight: bold;
    height: 30px;
    min-height: 30px;
    transition: all 200ms;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    
    &:hover {
        height: 45px;
        transition: all 200ms;
    }
`;

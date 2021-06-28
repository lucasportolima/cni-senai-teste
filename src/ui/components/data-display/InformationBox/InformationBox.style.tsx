import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Container,
  CardMedia,
} from "@material-ui/core";

export const Box = styled(Container)`
  position: absolute;
  max-width: 1000px !important;
  width: 90%;
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-template-rows: repeat(1, auto);
  grid-template-areas: "icon text";
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(5)};
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    background-color: ${({ theme }) => theme.palette.primary.light} !important;
    position: initial !important;
    width: 100% !important;
  }
`;

export const BoxBackground = styled(CardMedia)`
  height: 450px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const BoxText = styled("div")`
  grid-area: text;
`;

export const BoxIcon = styled("img")`
  grid-area: icon;
  display: flex;
  justify-self: end;

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100px;
  }
`;

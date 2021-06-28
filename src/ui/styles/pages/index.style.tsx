import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Button, Container, Typography } from "@material-ui/core";

export const DefaultImage = styled("div")`
  max-width: 400px;
  width: 100%;
  height: 370px;
  background-color: ${({ theme }) => theme.palette.secondary.dark};

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
    margin: auto;
  }
`;

export const ImageFont = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.dark};
  font-size: 14px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

export const Title = styled("h1")`
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 60px !important;
  }
`;

export const SectionContainer = styled(Container)`
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100vw;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
  }
`;

export const Graphic = styled("img")`
  display: block;
  margin: auto;
`;

export const SectionContent = styled("div")`
  background-color: transparent;
  display: grid;
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;
  max-width: 100vw;
`;

export const NextModuleBtn = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  margin: ${({ theme }) => theme.spacing(10) + " 0px " + theme.spacing(20)};
  padding: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(11)};
  border-radius: 100px;
  font-size: 22px;
  color: ${({ theme }) => theme.palette.secondary.light};
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 18px;
  }
`;

export const MainContent = styled("main")`
  background-image: url("/bg.svg");
  background-color: transparent;
  background-position: top;
  background-clip: border-box;
  background-repeat: no-repeat;

  margin-top: ${({ theme }) => theme.spacing(-6)};
  padding-top: ${({ theme }) => theme.spacing(20)};

  h1,
  .subtitle {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

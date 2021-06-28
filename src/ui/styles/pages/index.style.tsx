import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Paper, Button, Container, Typography } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionaisPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(7)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
`;

export const DefaultImage = styled("div")`
  width: 400px;
  height: 370px;
  background-color: #707070;

  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
    margin: auto;
  }
`;

export const ImageFont = styled(Typography)`
  color: #707070;
  font-family: "Catamaran", sans-serif;
  font-size: 14px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    text-align: center;
  }
`;

export const Title = styled("h1")`
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 72px !important;
  }
`;

export const Subtitle = styled("h3")``;

export const SectionContainer = styled(Container)`
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};

    > :nth-of-type(odd) {
      background-color: transparent;
    }
  }
`;

export const SectionContent = styled("div")`
  background-color: transparent;
  display: grid;
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;
`;

export const NextModuleBtn = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  margin: 40px 0px 80px;
  padding: 4px 48px;
  border-radius: 100px;
  font-size: 22px;
  color: #f0f2ef;
  font-weight: 400;
  font-family: "Catamaran", sans-serif;
`;

export const MainContent = styled("main")`
  background-image: url("/bg.svg");
  background-color: transparent;
  background-position: top;
  background-clip: border-box;
  background-repeat: no-repeat;

  margin-top: ${({ theme }) => theme.spacing(-6)};
  padding-top: ${({ theme }) => theme.spacing(16)};

  h1,
  .subtitle {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

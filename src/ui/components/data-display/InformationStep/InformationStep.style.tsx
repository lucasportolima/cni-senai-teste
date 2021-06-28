import { experimentalStyled as styled } from "@material-ui/core/styles";

export const InformationStepContainer = styled("div")`
  display: grid;
  height: 200px;
  grid-template-columns: 215px 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: "avatar title" "avatar text";
  background-color: transparent;
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(3)};
  align-items: center;
`;

export const InformationStepTitle = styled("div")`
  grid-area: title;
  font-weight: bolder;
  align-self: self-end;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const InformationStepText = styled("div")`
  grid-area: text;
  align-self: self-start;
`;

export const IconInformationStep = styled('img')`
    grid-area: avatar;
    cursor: pointer;
`;

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5) + " " + 0};
  text-align: center;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + 0};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;

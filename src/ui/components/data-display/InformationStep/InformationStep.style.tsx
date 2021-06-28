import { experimentalStyled as styled } from "@material-ui/core/styles";

export const InformationStepContainer = styled("div")`
  display: grid;
  height: 200px;
  grid-template-columns: 215px 1fr;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: "icon title" "icon text";
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
    grid-area: icon;
    cursor: pointer;
`;

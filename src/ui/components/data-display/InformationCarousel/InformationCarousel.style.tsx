import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

export const IconStep = styled("img")`
  display: block;
  margin: auto;
  cursor: pointer;
`;

export const TextStep = styled(Typography)`
  text-align: center;
  min-height: 135px;
  font-size: 20px;
  line-height: 24px;
`;

export const DotsStep = styled("div")`
  margin: auto;
  width: fit-content;

  img {
    margin: 0 5px;
  }
`;

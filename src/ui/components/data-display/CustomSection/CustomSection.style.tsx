import { experimentalStyled as styled } from "@material-ui/core/styles";


export const DefaultImage = styled('div')`
  width: 100%;
  height: 100%;
  background-color: #707070;
`

export const ContainerCustomSection = styled('div')`
  height: 600px;
    overflow-y: auto;

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #464646;
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #A0365A;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}

    ${({ theme }) => theme.breakpoints.down("md")} {
      height: 100%;
      overflow-y: hidden;
  }
`
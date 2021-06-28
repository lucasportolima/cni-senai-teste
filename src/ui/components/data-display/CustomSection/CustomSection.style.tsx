import { experimentalStyled as styled } from "@material-ui/core/styles";


export const DefaultImage = styled('div')`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.dark}
`

export const ContainerCustomSection = styled('div')`
  height: 600px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.secondary.main};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.primary.dark};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.primary.dark}; 
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 100%;
    overflow-y: hidden;
  }
`
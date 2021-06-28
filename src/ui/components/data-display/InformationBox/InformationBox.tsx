import React from "react";

import { Box, BoxText, BoxIcon, BoxBackground } from "./InformationBox.style";

interface InformationBoxInterface {
  textsContent: string[];
}

const InformationBox: React.FC<InformationBoxInterface> = ({
  textsContent,
}) => {
  return (
    <>
      <BoxBackground image={"/Box.png"}></BoxBackground>
      <Box sx={{ mt: 8 }}>
        <BoxIcon src={"/icone_box.png"}></BoxIcon>
        <BoxText>
          {textsContent.map((text, index) => {
            return <p key={`box-${index}`} className={"text"}>{text}</p>;
          })}
        </BoxText>
      </Box>
    </>
  );
};

export default InformationBox;

import React from "react";

import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
  IconInformationStep,
  InformationStepTitle,
  InformationStepText,
  InformationStepContainer,
} from "./InformationStep.style";

interface PageTitleProps {
  title: string;
  text: string;
  visible: boolean;
  icon: string;
  onClick: any;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  text,
  visible,
  icon,
  onClick,
}) => {
  return (
    <InformationStepContainer>
      <IconInformationStep onClick={onClick} src={icon}></IconInformationStep>
      {visible && (
        <>
          <InformationStepTitle>
            <span className={"text"}>{title}</span>
          </InformationStepTitle>
          <InformationStepText>
            <span className={"text"}>{text}</span>
          </InformationStepText>
        </>
      )}
    </InformationStepContainer>
  );
};

export default PageTitle;

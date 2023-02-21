import React from "react"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro" //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage"

import HeaderComponent from "components/MainPageComponent/HeaderComponent"
import SocialMediaComponent from "components/MainPageComponent/SocialMediaComponent"
import AboutComponent from "components/MainPageComponent/AboutComponent"
import MemberComponent from "components/MainPageComponent/MemberComponent"
import ProjectComponent from "components/MainPageComponent/ProjectComponent"
import LearningQuestionComponent from "components/MainPageComponent/LearningQuestionComponent"
import FormRequestJoinComponent from "components/MainPageComponent/FormRequestJoinComponent"
import FooterComponent from "components/MainPageComponent/FooterComponent"
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg"

const mainPageStructure = () => (
  <AnimationRevealPage>
    <HeaderComponent />
    <AboutComponent />
    <SocialMediaComponent />
    <MemberComponent />
    <ProjectComponent />
    <LearningQuestionComponent
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          What have we <span tw="text-primary-500">learned </span>?.
        </>
      }
    />
    <FormRequestJoinComponent />
    <FooterComponent />
  </AnimationRevealPage>
)

export default mainPageStructure
import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { SectionHeading } from "components/misc/Headings"
import StatsIllustrationSrc from "images/stats-illustration.svg"
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`

const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
])

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Heading = tw (
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`

const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
])


const Component = (

  {
    heading = (
      <>
        Welcome to<span tw="text-primary-500"> RQ '21 </span>Software Engineering Club.
      </>
    ),
  
    description = "Where we are dedicated to advancing technology and fostering innovation in the engineering community. As a visitor to our tech organization, we hope you will find our projects and resources valuable in your own work. If you have any questions or feedback, please don't hesitate to reach out to us. We are here to support you and help you grow as a tech professional. We hope you will enjoy exploring our code repositories on GitHub and engaging with our community of engineers.",
    imageSrc = StatsIllustrationSrc,
    imageCss = null,
    imageContainerCss = null,
    imageDecoratorBlob = false,
    imageDecoratorBlobCss = null,
    imageInsideDiv = true,
    textOnLeft = false
  }

) => {

  return (
    <Container id="about-us">
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>

        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>

        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>

            <Heading>{heading}</Heading>
            <Description>{description}</Description>

          </TextContent>
        </TextColumn>

      </TwoColumn>
    </Container>
  )

}


export default Component
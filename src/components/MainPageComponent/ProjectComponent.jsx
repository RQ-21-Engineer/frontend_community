import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings"
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg"
import TeamIllustrationSrc from "images/prototype-illustration.svg"
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links"

const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }`

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`

const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
])

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw(SubheadingBase)`text-center md:text-left`

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`

const Component = (

  {
    subheading = "Our Projects",
    heading = (
      <>
        We've done some <span tw="text-primary-500">amazing projects.</span>
      </>
    ),
    urlRedirect = "https://github.com/orgs/RQ-21-Engineer/repositories",
    textOnLeft  = true
  }

) => {

  return (
    <Container id="projects">
      <TwoColumn>

        <ImageColumn>
          <Image imageSrc={TeamIllustrationSrc} />
        </ImageColumn>

        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>

            <Subheading>{subheading}</Subheading>
            
            <Heading>{heading}</Heading>

            <PrimaryLink href={urlRedirect}>
              View all projects <ArrowRightIcon />
            </PrimaryLink>

          </TextContent>
        </TextColumn>

      </TwoColumn>
    </Container>
  )

}

export default Component
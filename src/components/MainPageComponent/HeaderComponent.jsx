import React from "react"
import tw from "twin.macro"
import Typed from 'react-typed'
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
 
import Header, { NavLink, NavLinks, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light"
import bgimage from "../../images/hacker.jpg"

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }`

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("${bgimage}");`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`
const LeftColumn = tw.div`flex flex-col items-center lg:block`
// const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }`

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }`

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`

const Component = () => {

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#about-us">
        About Us
      </NavLink>

      <NavLink href="#social-media">
        Social Media
      </NavLink>

      <NavLink href="#members">
        Members
      </NavLink>

      <NavLink href="#projects">
        Projects
      </NavLink>

      <NavLink href="#learning-path">
        Learning Path
      </NavLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />

        <TwoColumn>
          <LeftColumn>

            <Heading>
              <SlantedBackground>
                <Typed
                    strings    = {["RQ '21"]}
                    typeSpeed  = {100}
                    showCursor = {false}
                />
              </SlantedBackground>

              <br />

              <SlantedBackground>
                <Typed
                    strings    = {["Software Engineering Club."]}
                    typeSpeed  = {100}
                    showCursor = {false}
                />
              </SlantedBackground>
            </Heading>

            <NavLink href="#join-with-us">
              <PrimaryAction>
                Join With Us!
              </PrimaryAction>
            </NavLink>

          </LeftColumn>
        </TwoColumn>

        <br /> <br /> <br />

      </HeroContainer>
    </Container>
  )
}


export default Component
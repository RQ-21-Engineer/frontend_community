import React from "react"
import tw from "twin.macro"
import {Container as ContainerBase } from "components/misc/Layouts"
import logo from "../../images/logo3.svg" 


const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoImg = tw.img`w-20`
const LogoText = tw.h6`text-center ml-2 text-2xl font-black tracking-wider`

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`


const Component = () => {

  return (
    <Container>
      <Content>

        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>

          <br />

          <LogoContainer>
            <LogoText>RQ '21 Software Engineering Club</LogoText>
          </LogoContainer>

          <LinksContainer>
            <Link href="#about-us">About Us</Link>
            <Link href="#social-media">Social Media</Link>
            <Link href="#members">Members</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#learning-path">Learning Path</Link>
          </LinksContainer>


          <CopyrightText>
            &copy; Copyright 2023, RQ '21 Software Engineering Club. All Rights Reserved.
          </CopyrightText>
        </Row>

      </Content>
    </Container>
  )

}


export default Component
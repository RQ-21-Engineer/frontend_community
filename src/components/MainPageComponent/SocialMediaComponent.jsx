import React from "react"
import tw from "twin.macro"
import Typed from 'react-typed'
import styled from "styled-components"
import { NavLink } from "../headers/light"
import { css } from "styled-components/macro" //eslint-disable-line
import { SectionHeading } from "components/misc/Headings"

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg"

import { FaInstagram, FaDiscord, FaYoutube, FaGithub } from "react-icons/fa"

const Container = tw.div`relative`

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}`

const Heading = tw(SectionHeading)`w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }`


const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}`


const Component = () => {

  const cards = [
    {
      imageSrc: FaInstagram,
      title: "Instagram",
      url : "https://instagram.com/rq.informatika.21"
    },
    {
      imageSrc: FaYoutube,
      title: "Youtube",
      url : "https://www.youtube.com/@rq.informatika.2113"
    },
    {
      imageSrc: FaDiscord,
      title: "Discord",
      url : "https://discord.gg/SJ5pXVAXw7"
    },
    {
      imageSrc: FaGithub,
      title: "Github",
      url : "https://github.com/RQ-21-Engineer"
    }
  ]


  return (

    <Container id="social-media">
      <ThreeColumnContainer>

        <Heading>
          Social<span tw="text-primary-500">Media</span>.
        </Heading>

        {cards.map((card, i) => (

          <Column key={i}>
            <NavLink href={card.url}>
              <Card>

                <span className="imageContainer">
                  <card.imageSrc size={45} color={"rgb(100, 21, 255)"}/>
                </span>

                <span className="textContainer">

                  <span className="title">
                    {card.title || "Fully Secure"}
                  </span>

                  <p className="description" style={{textAlign: "left"}}>

                    1001010 1001010 1001010 1001010
                    <br/>
                    100
                    <Typed
                      strings    = {["1010 1001010 1001010 1001010"]}
                      typeSpeed  = {80}
                      backSpeed  = {40}
                      showCursor = {false}
                      loop
                    />
                    <br/>
                    10
                    <Typed
                      strings    = {["01010 1001010 1001010 1001010"]}
                      typeSpeed  = {50}
                      backSpeed  = {50}
                      showCursor = {false}
                      loop
                    />
                    <br/>
                    100
                    <Typed
                      strings    = {["1010 1001010 1001010 1001010"]}
                      typeSpeed  = {80}
                      backSpeed  = {80}
                      showCursor = {false}
                      loop
                    />
                    <br/>
                    1001010 1001010 1001010 1001010

                  </p>

                </span>

              </Card>
            </NavLink>
          </Column>
        ))}

      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>

  )
}


export default Component
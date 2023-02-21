import { React, useState, useRef } from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { SectionHeading } from "components/misc/Headings"
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons"
import EmailIllustrationSrc from "images/design-illustration.svg"

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
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`


const Component = (

  {
    heading = (
      <>
        Feel free to <span tw="text-primary-500">join, learn, and contributing</span><wbr/> with us.
      </>
    ),
    
    submitButtonText = "Submit Request For Join",
    textOnLeft = true
  
  }

) => {

  const [response,setResponse] = useState('')
  const responseUseRef = useRef(undefined)

  const handleSubmit = async (event) => {

    event.preventDefault()

    const endpoint = "https://backend-community-rest.vercel.app/api/join"

    const responseResult = responseUseRef.current.value

    setResponse("Lagi ngirim, tunggu bentar ye!!.......")

    let res = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({github_username: responseResult})
    })

    let result = await res.json()
    setResponse(`${result.data.message}`)

    event.target.reset()

  }


  return (
    <Container>
      <TwoColumn>

        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>

        <TextColumn textOnLeft={textOnLeft} id="join-with-us">
          <TextContent>

            <Heading>{heading}</Heading>
            
            <Form onSubmit={handleSubmit}>
              <Input
                style={{borderColor: "rgb(100, 21, 255)"}}
                type="text"
                name="github_username"
                placeholder="Your Github Username..."
                ref={responseUseRef}
                required
              />

              <SubmitButton
                type="submit">
                  {submitButtonText}
              </SubmitButton>
            </Form>

            <br/>

            <h2 style={{fontWeight: "bold"}}>{response}</h2>

          </TextContent>
        </TextColumn>

      </TwoColumn>
    </Container>
    
  )

}


export default Component
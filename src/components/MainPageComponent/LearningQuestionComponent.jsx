import React, { useState } from "react"
import { motion } from "framer-motion"
import Typed from 'react-typed'
import tw from "twin.macro"
import styled from "styled-components"
import { css } from "styled-components/macro" //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings"
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg"
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg"

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`

const TwoColumn = tw.div`flex`
const Column = tw.div``

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-144 bg-center`
])

const FAQContent = tw.div`lg:ml-12`
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`
const Heading = tw(SectionHeading)`lg:text-left`

const FAQSContainer = tw.dl`mt-12`
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`
const Question = tw.dt`flex justify-between items-center`
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`

const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }`


const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`)


const Component = (

  {
    subheading = "",
    heading = "Questions",
    imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    imageContain = false,
    imageShadow = true,
    faqs = null
  
  }

) => {

  const defaultFaqs = [
    {
      question: "Fullstack Engineering.",
      answer:
        "A full-stack engineer is a high-level software engineer that works to design, test, and implement various software applications. They create software, applications, and scalable web services, while also providing leadership for coding teams."
    },

    {
      question: "Backend Engineering.",
      answer:
        "What is a Backend Engineer? A backend engineer is responsible for designing, building, and maintaining the server-side of web applications. In other words, a backend engineer's primary responsibility is to build the structure of a software application."
    },

    {
      question: "Frontend Engineering.",
      answer:
        "A frontend Engineer the term sometimes used interchangeably with “frontend developer” builds websites, designs applications and ensures overall user accessibility. In this article, we explain what a front-end engineer is, the skills they should have, common responsibilities and how to become one."
    },

    {
      question: "Blockchain Engineering.",
      answer:
        "Blockchain engineers are the expert minds behind the evolution of computer networks, data structures, and algorithms in their companies. These professionals work on executing and creating a digital blockchain for business solutions."
    },

    {
      question: "DevOps & Infrastructure.",
      answer:
        "A DevOps engineer is an IT generalist who should have a wide-ranging knowledge of both development and operations, including coding, infrastructure management, system administration, and DevOps toolchains."
    },

    {
      question: "Cyber Security, Digital Forensic, & Ethical Hacking",
      answer:
        "Cyber security is the protection of data systems. A cybersecurity engineer is the person who does this job, and oversees and protects the network. Cybersecurity engineers work to identify gaps across the network, develop solutions to protect the network, and control who can access the network data."
    },

    {
      question: "Machine Learning & Artificial Intelligence.",
      answer:
        "Machine learning act as critical members of the data science team. Their tasks involve researching, building, and designing the artificial intelligence responsible for machine learning and maintaining and improving existing artificial intelligence systems."
    }
  ]

  if (!faqs || faqs.length === 0) faqs = defaultFaqs

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null)

  const toggleQuestion = questionIndex => {
    
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null)
    else setActiveQuestionIndex(questionIndex)
  }

  return (

    <Container id="learning-path">
      <Content>

        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>

          <Column>
            <FAQContent>

              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>

              <FAQSContainer>
                
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >

                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>

                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {
                        activeQuestionIndex === index ? <Typed
                          strings    = {[faq.answer]}
                          typeSpeed  = {40}
                          showCursor = {false}
                        /> : ""
                      }
                    </Answer>
                    
                  </FAQ>
                ))}
              </FAQSContainer>

            </FAQContent>
          </Column>

        </TwoColumn>

      </Content>
    </Container>

  )

}


export default Component
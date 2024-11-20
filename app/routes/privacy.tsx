import { useEffect } from "react"
import type { MetaFunction } from "@vercel/remix"
import Navigation from "~/components/Navigation"
import Footer from "~/components/Footer"

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy - DBMS Graphics Solution" },
    {
      name: "description",
      content: "Privacy Policy for DBMS graphics services",
    },
  ]
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2
    style={{
      textAlign: "left",
      color: "palevioletred",
      letterSpacing: ".25rem",
    }}
  >
    {children}
  </h2>
)

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontSize: "1.3rem",
      fontWeight: "500",
      textDecoration: "underline",
    }}
  >
    {children}
  </p>
)

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>{children}</p>
)

const StarBackground = () => {
  useEffect(() => {
    const stars = document.querySelector(".stars")
    if (!stars) return

    const starSizes = [3, 4, 5, 6]
    const starDelays = [0.5, 1, 1.5, 2]

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div")
      star.className = "star"

      star.style.left = `${Math.random() * 100}vw`
      star.style.top = `${Math.random() * 100}vh`

      const size = starSizes[Math.floor(Math.random() * starSizes.length)]
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      const delay = starDelays[Math.floor(Math.random() * starDelays.length)]
      star.style.animationDelay = `${Math.random() * 10}s`
      star.style.setProperty("--twinkle-delay", `${delay}s`)

      stars.appendChild(star)
    }
  }, [])

  return <div className="stars" />
}

const PrivacyContent = () => (
  <div
    style={{
      textAlign: "justify",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    }}
  >
    <h1
      style={{
        color: "palevioletred",
        fontSize: "4rem",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: "2rem",
        letterSpacing: ".25rem",
      }}
    >
      Privacy Policy
    </h1>

    <SectionHeading>1. Data protection at a glance</SectionHeading>

    <SubHeading>General information</SubHeading>
    <Paragraph>
      The following information provides a simple overview of what happens to
      your personal data when you visit this website. Personal data is any data
      that can be used to identify you personally. Detailed information on the
      subject of data protection can be found in our data protection declaration
      listed below this text.
    </Paragraph>

    <SubHeading>Data collection on this website</SubHeading>
    <Paragraph>
      Who is responsible for data collection on this website?
    </Paragraph>
    <Paragraph>
      Data processing on this website is carried out by the website operator.
      You can find their contact details in the "Information on the controller"
      section of this privacy policy.
    </Paragraph>

    <SubHeading>How do we collect your data?</SubHeading>
    <Paragraph>
      On the one hand, your data is collected when you provide it to us. This
      may, for example, be data that you enter in a contact form. Other data is
      collected automatically or with your consent by our IT systems when you
      visit the website. This is primarily technical data (e.g. internet
      browser, operating system or time of page view). This data is collected
      automatically as soon as you enter this website.
    </Paragraph>

    <SubHeading>What do we use your data for?</SubHeading>
    <Paragraph>
      Some of the data is collected to ensure that the website is provided
      without errors. Other data may be used to analyze your user behavior.
    </Paragraph>

    <SubHeading>What rights do you have with regard to your data?</SubHeading>
    <Paragraph>
      You have the right to receive information about the origin, recipient and
      purpose of your stored personal data free of charge at any time. You also
      have the right to request the correction or deletion of this data. If you
      have given your consent to data processing, you can revoke this consent at
      any time for the future. You also have the right to request the
      restriction of the processing of your personal data under certain
      circumstances. You also have the right to lodge a complaint with the
      competent supervisory authority. You can contact us at any time if you
      have any further questions on the subject of data protection.
    </Paragraph>

    <SectionHeading>2. Hosting</SectionHeading>
    <Paragraph>
      We host the content of our website with the following provider:
    </Paragraph>
    <SubHeading>Amazon Web Services, Alibaba Cloud, and Dewaweb.</SubHeading>
    <Paragraph>
      The provider is Amazon Web Services, Inc., 410 Terry Avenue North,
      Seattle, WA 98109-5210, United States (hereinafter referred to as AWS).
    </Paragraph>
    <Paragraph>
      Details can be found in AWS's privacy policy:{" "}
      <a href="https://aws.amazon.com/privacy" style={{ display: "block", color: "blue" }}>
        https://aws.amazon.com/privacy
      </a>
    </Paragraph>
    <Paragraph>
      AWS services are used to ensure that our website and services are
      delivered reliably and efficiently. If consent has been requested, the
      processing is carried out based on user agreement which includes the
      storage of cookies or access to information in the user's device (e.g.
      device fingerprinting). Consent can be revoked at any time.
    </Paragraph>
    <Paragraph>
      The provider is Alibaba Cloud (Singapore) Private Limited, 8 Shenton Way,
      #45-01 AXA Tower, Singapore 068811 (hereinafter referred to as Alibaba
      Cloud).
    </Paragraph>
    <Paragraph>
      Details can be found in Alibaba Cloud's privacy policy:{" "}
      <a href="https://www.alibabacloud.com/privacy" style={{ display: "block", color: "blue" }}>
        https://www.alibabacloud.com/privacy
      </a>
    </Paragraph>
    <Paragraph>
      Alibaba Cloud services are used to ensure that our website and services
      are delivered reliably and efficiently. If consent has been requested, the
      processing is carried out based on user agreement which includes the
      storage of cookies or access to information in the user's device (e.g.
      device fingerprinting). Consent can be revoked at any time.
    </Paragraph>
    <Paragraph>
      The provider is PT Dewaweb, Cyber 2 Tower, 18th Floor, JL. HR. Rasuna Said
      Blok X-5 Kav. 13, Jakarta Selatan 12950, Indonesia (hereinafter referred
      to as Dewaweb).
    </Paragraph>
    <Paragraph>
      Details can be found in Dewaweb's privacy policy:{" "}
      <a href="https://www.dewaweb.com/privacy-policy" style={{ display: "block", color: "blue" }}>
        https://www.dewaweb.com/privacy-policy
      </a>
    </Paragraph>
    <Paragraph>
      Dewaweb services are used in compliance with Indonesian Government
      Regulation No. 71 of 2019 regarding Electronic System and Transaction
      Operations to ensure that our website and services are delivered reliably
      and efficiently. If consent has been requested, the processing is carried
      out based on user agreement which includes the storage of cookies or
      access to information in the user's device (e.g. device fingerprinting).
      Consent can be revoked at any time.
    </Paragraph>

    <SectionHeading>3. General notes and mandatory information</SectionHeading>
    <SubHeading>Data protection</SubHeading>
    <Paragraph>
      The operators of these pages take the protection of your personal data
      very seriously. We treat your personal data confidentially and in
      accordance with the statutory data protection regulations and this privacy
      policy.
    </Paragraph>
    
  </div>
)

export default function Privacy() {
  return (
    <>
      <Navigation />
      <main className="main">
        <StarBackground />
        <div
          className="content"
          style={{
            paddingLeft: "34rem",
            paddingRight: "34rem",
            paddingTop: "5rem",
          }}
        >
          <PrivacyContent />
        </div>
      </main>
      <Footer />
    </>
  )
}
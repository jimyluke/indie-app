import React from "react";
import { Header, Footer } from "../../components/template";
import "./style.scss";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { LeftOutlined } from "@ant-design/icons";
import background from "../../assets/images/homepage/background.webp";

const RenderPrivacy = () => {
  return (
    <div className="privacy-content">
      <div className="privacy-statement z-100">
        <div className="privacy-statement--title">Privacy Statement</div>
        <p className="text-content">
          This Privacy Statement explains our practices, including your choices,
          regarding the collection, use, and disclosure of certain information,
          including your personal information in connection with the Netflix
          service.
        </p>
        <div className="privacy-element">
          <div className="privacy-element--title">
            Collection of Information
          </div>
          <p className="text-content">
            We receive and store information about you such as:
          </p>
          <ul>
            <li className="text-content">
              <span className="color-white">
                Information you provide to us:&nbsp;
              </span>
              We collect information you provide to us which includes:
            </li>
            <ul>
              <li className="text-content">
                your name, email address, address or postal code, payment
                method(s), and telephone number. We collect this information in
                a number of ways, including when you enter it while using our
                service, interact with our customer service, or participate in
                surveys or marketing promotions;
              </li>
              <li className="text-content color-white">
                information when you choose to provide ratings, taste
                preferences, account settings (including preferences set in the
                "Account" section of our website), or otherwise provide
                information to us through our service or elsewhere.
              </li>
              <p className="text-content">
                <span className="color-white">
                  Information you provide to us:&nbsp;
                </span>
                We collect information about you and your use of our service,
                your interactions with us and our advertising, as well as
                information regarding your network, network devices, and your
                computer or other Netflix capable devices you might use to
                access our service (such as gaming systems, smart TVs, mobile
                devices, set top boxes, and other streaming media devices). This
                information includes:
              </p>
              <li className="text-content">
                your activity on the Netflix service, such as title selections,
                shows you have watched, and search queries;
              </li>
              <li className="text-content">
                your interactions with our emails and texts, and with our
                messages through push and online messaging channels;
              </li>
              <li className="text-content">
                details of your interactions with our customer service, such as
                the date, time and reason for contacting us, transcripts of any
                chat conversations, and if you call us, your phone number and
                call recordings;
              </li>
              <li className="text-content">
                device IDs or other unique identifiers, including for your
                network devices, and devices that are Netflix capable on your
                Wi-Fi network;
              </li>
              <li className="text-content">
                resettable device identifiers (also known as advertising
                identifiers), such as those on mobile devices, tablets, and
                streaming media devices that include such identifiers (see the
                "Cookies and Internet Advertising" section below for more
                information);
              </li>
              <li className="text-content">
                device and software characteristics (such as type and
                configuration), connection information including type (wifi,
                cellular), statistics on page views, referring source (for
                example, referral URLs), IP address (which may tell us your
                general location), browser and standard web server log
                information;
              </li>
              <li className="text-content">
                information collected via the use of cookies, web beacons and
                other technologies, including ad data (such as information on
                the availability and delivery of ads, the site URL, as well as
                the date and time). (See our "Cookies and Internet Advertising"
                section for more details.)
              </li>
            </ul>
          </ul>
          <p className="text-content text-bold">
            Our legal basis for collecting and using the personal information
            described in this Privacy Statement will depend on the personal
            information concerned and the specific context in which we collect
            and use it. We will normally collect personal information from you
            where we need the personal information to perform a contract with
            you (for example, to provide our services to you), where the
            processing is in our legitimate interests and not overridden by your
            data protection interests or fundamental rights and freedoms (for
            example, our direct marketing activities in accordance with your
            preferences), or where we have your consent to do so (for example,
            for you to participate in certain consumer insights activities like
            specific surveys and focus groups). In some cases, we may also have
            a legal obligation to collect personal information from you or may
            otherwise need the personal information to protect your vital
            interests or those of another person (for example, to prevent
            payment fraud or confirm your identity). For questions about our use
            of your personal information (including legal bases and transfer
            mechanisms we rely on), cookies or similar technologies, please
            contact our Data Protection Officer/Privacy Office by email at
            <span className="email-color"> privacy@indie.com. </span>Please
            visit our online help center at help.netflix.com for more
            information about these topics.
          </p>
        </div>
        <div className="privacy-element">
          <div className="privacy-element--title">
            Access to Account and Profiles
          </div>
          <ul>
            <li className="text-content">
              “Remember me” function: For ease of access to your account, you
              can use the "Remember me on this device" function when you log in
              to the website. This function uses technology that enables us to
              provide direct account access and to help administer the Netflix
              service without requiring reentry of any password or other user
              identification when your browser revisits the service.
            </li>
            <li className="text-content">
              Giving others access to your account: If you share or otherwise
              allow others to have access to your account, they will be able to
              see shows you have watched, ratings, and account information
              (including your email address or other information in the
              "Account" area of our website). This remains true even if you use
              our profiles feature. You might have the option to use seamless
              account login through the Netflix mobile app, which enables login
              to the Netflix app on smart TVs, set top boxes, and other
              streaming media devices on the Wi-Fi network to which you are
              connected. If you use that feature, those devices will remain
              signed into your account unless you later log out of those
              devices.
            </li>
          </ul>
        </div>
      </div>

      <div className="privacy-footer z-100">
        <p>
          Last Updated: <span>January 1, 2021</span>
        </p>
      </div>
      <div className="background-image">
        <img src={background} alt="background"></img>
      </div>
      <div className="bg-linear"></div>
    </div>
  );
};

const Privacy = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Header />
      <div className="privacy-wrapper">
        <div className="privacy-container">
          <Container>
            <Row>
              <div className="auth-breadcrumb">
                <Link to="/">
                  <LeftOutlined /> Back to homepage
                </Link>
              </div>
            </Row>
            <Row>
              <RenderPrivacy />
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

import React from "react";

function Terms(props) {
  return (
    <div className="term-content">
      <div className="term-infor">
        <div className="term-infor--title">Indie terms of use</div>
        <p className="text-content">
          <span className="pd-bt40">
            Indie provides a personalized subscription service that allows our
            members to access movies and TV shows ("Netflix content") streamed
            over the Internet to certain Internet-connected TVs, computers and
            other devices ("Netflix ready devices").
          </span>
          These Terms of Use govern your use of our service. As used in these
          Terms of Use, "Netflix service", "our service" or "the service" means
          the personalized service provided by Netflix for discovering and
          watching Netflix content, including all features and functionalities,
          recommendations and reviews, the website, and user interfaces, as well
          as all content and software associated with our service.
        </p>
        <ul className="term-element">
          <li className="term-element--title">1. Membership</li>
          <ul>
            <li className="text-content">
              1.1. Your Netflix membership will continue until terminated. To
              use the Netflix service you must have Internet access and a
              Netflix ready device, and provide us with one or more Payment
              Methods. "Payment Method" means a current, valid, accepted method
              of payment, as may be updated from time to time, and which may
              include payment through your account with a third party. Unless
              you cancel your membership before your billing date, you authorize
              us to charge the membership fee for the next billing cycle to your
              Payment Method (see "Cancellation" below).
            </li>
            <li className="text-content">
              1.2. We may offer a number of membership plans, including
              memberships offered by third parties in conjunction with the
              provision of their own products and services. Some membership
              plans may have differing conditions and limitations, which will be
              disclosed at your sign-up or in other communications made
              available to you. You can find specific details regarding your
              Netflix membership by visiting our website and clicking on the
              "Account" link available at the top of the pages under your
              profile name.
            </li>
          </ul>
          <li className="term-element--title">2. Promotional Offers</li>
          <p className="text-content">
            We may from time to time offer special promotional offers, plans or
            memberships (“Offers”). Offer eligibility is determined by Netflix
            at its sole discretion and we reserve the right to revoke an Offer
            and put your account on hold in the event that we determine you are
            not eligible. Members of households with an existing or recent
            Netflix membership may not be eligible for certain introductory
            Offers. We may use information such as device ID, method of payment
            or an account email address used with an existing or recent Netflix
            membership to determine Offer eligibility. The eligibility
            requirements and other limitations and conditions will be disclosed
            when you sign-up for the Offer or in other communications made
            available to you.
          </p>
          <li className="term-element--title">3. Billing and Cancellation</li>
          <ul>
            <li className="text-content">
              <span className="text-fw">3.1. Billing Cycle.</span> The
              membership fee for the Netflix service will be charged to your
              Payment Method on the specific payment date indicated on the
              "Account" page. The length of your billing cycle will depend on
              the type of subscription that you choose when you signed up for
              the service. In some cases your payment date may change, for
              example if your Payment Method has not successfully settled, when
              you change your subscription plan or if your paid membership began
              on a day not contained in a given month. Visit our website and
              click on the "Billing details" link on the "Account" page to see
              your next payment date. If you signed up for Netflix using your
              account with a third party as a Payment Method, you can find the
              billing information about your Netflix membership by visiting your
              account with the applicable third party.
              <li className="text-content">
                <span className="text-fw">3.2. Payment Methods.</span> To use
                the Netflix service you must provide one or more Payment
                Methods. You authorize us to charge any Payment Method
                associated to your account in case your primary Payment Method
                is declined or no longer available to us for payment of your
                subscription fee. You remain responsible for any uncollected
                amounts. If a payment is not successfully settled, due to
                expiration, insufficient funds, or otherwise, and you do not
                cancel your account, we may suspend your access to the service
                until we have successfully charged a valid Payment Method. For
                some Payment Methods, the issuer may charge you certain fees,
                such as foreign transaction fees or other fees relating to the
                processing of your Payment Method. Local tax charges may vary
                depending on the Payment Method used. Check with your Payment
                Method service provider for details.
              </li>
              <li className="text-content">
                <span className="text-fw">
                  3.3. Updating your Payment Methods.
                </span>
                You can update your Payment Methods by going to the "Account"
                page. We may also update your Payment Methods using information
                provided by the payment service providers. Following any update,
                you authorize us to continue to charge the applicable Payment
                Method(s).
              </li>
              <li className="text-content">
                <span className="text-fw"> 3.4. Cancellation.</span> You can
                cancel your Netflix membership at any time, and you will
                continue to have access to the Netflix service through the end
                of your billing period. Payments are non-refundable and we do
                not provide refunds or credits for any partial membership
                periods or unwatched Netflix content. To cancel, go to the
                "Account" page and follow the instructions for cancellation. If
                you cancel your membership, your account will automatically
                close at the end of your current billing period. To see when
                your account will close, click "Billing details" on the
                "Account" page. If you signed up for Netflix using your account
                with a third party as a Payment Method and wish to cancel your
                Netflix membership, you may need to do so through such third
                party, for example by visiting your account with the applicable
                third party and turning off auto-renew, or unsubscribing from
                the Netflix service through that third party.
              </li>
              <li className="text-content">
                <span className="text-fw">
                  3.5. Changes to the Price and Subscription Plans.
                </span>
                We may change our subscription plans and the price of our
                service from time to time; however, any price changes or changes
                to your subscription plans will apply no earlier than 30 days
                following notice to you.
              </li>
            </li>
          </ul>
        </ul>
      </div>

      <div className="privacy-footer">
        <p>
          Last Updated: <span>January 1, 2021</span>
        </p>
      </div>
    </div>
  );
}

export default Terms;

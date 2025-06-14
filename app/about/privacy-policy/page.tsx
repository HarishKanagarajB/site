import React from "react";
import Image from "next/image";

export default function Privacy() {
  return (
    <>
      <section className="title-block pt-32">
        <div className="text-center sm:pt-8 ">
          <h1
            className="sm:text-3xl text-lg m-0 font-bold relative pb-3 inline-block "
            style={{
              backgroundImage: "url('/images/icons/three-dot.png')",
              backgroundSize: "43px 9px",
              backgroundPosition: "50% 46px",
              backgroundRepeat: "no-repeat",
              padding: "0 0 30px 0",
            }}
          >
            PRIVACY POLICY
          </h1>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto bg-white shadow-md mb-14  w-11/12 sm:w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-base font-helveticaNeue leading-[30px] my-6 sm:px-4">
          <div className="col-span-1 md:col-span-12 sm:p-4 p-3 sm:ml-5 mb-6">
            <p className="my-5 sm:text-base text-xs sm:leading-7  leading-5">
              This privacy policy has been compiled to better serve those who
              are concerned with how their 'Personally Identifiable Information'
              (PII) is being used online. PII, as described in US privacy law
              and information security, is information that can be used on its
              own or with other information to identify, contact, or locate a
              single person, or to identify an individual in context. Please
              read our privacy policy carefully to get a clear understanding of
              how we collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </p>
            <br />
            <h3 className="text-xl mt-5 mb-2 font-base text-black">
              What personal information do we collect from the people that visit
              our blog, website or app?
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              When ordering or registering on our site, as appropriate, you may
              be asked to enter your name, email address, phone number or other
              details to help you with your experience.
            </p>
            <br />

            <h3 className="text-xl mt-5 mb-2 font-base">
              When do we collect information?
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We collect information from you when you register on our site,
              subscribe to a newsletter, fill out a form, Use Live Chat, Open a
              Support Ticket or enter information on our site.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Provide us with feedback on our products or services Apply for Job
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              How do we use your information?
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We may use the information we collect from you when you register,
              make a purchase, sign up for our newsletter, respond to a survey
              or marketing communication, surf the website, or use certain other
              site features in the following ways:
            </p>
            <ul className="list-disc sm:text-lg text-base text-black pl-4">
              <li>
                To personalize your experience and to allow us to deliver the
                type of content and product offerings in which you are most
                interested.
              </li>
              <li>To improve our website in order to better serve you.</li>
              <li>
                To allow us to better service you in responding to your customer
                service requests.
              </li>
              <li>To ask for ratings and reviews of services or products</li>
              <li>
                To follow up with them after correspondence (live chat, email or
                phone inquiries)
              </li>
            </ul>
            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              How do we protect your information?
            </h3>
            <ul className="list-disc sm:text-lg text-base text-black pl-4">
              <li>
                We do not use vulnerability scanning and/or scanning to PCI
                standards.
              </li>
              <li>
                We only provide articles and information. We never ask for
                credit card numbers.
              </li>
              <li>We do not use Malware Scanning.</li>
            </ul>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Your personal information is contained behind secured networks and
              is only accessible by a limited number of persons who have special
              access rights to such systems, and are required to keep the
              information confidential. In addition, all sensitive/credit
              information you supply is encrypted via Secure Socket Layer (SSL)
              technology.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We implement a variety of security measures when a user enters,
              submits, or accesses their information to maintain the safety of
              your personal information.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              All transactions are processed through a gateway provider and are
              not stored or processed on our servers.
            </p>
            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              Do we use 'cookies'?
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Yes. Cookies are small files that a site or its service provider
              transfers to your computer's hard drive through your Web browser
              (if you allow) that enables the site's or service provider's
              systems to recognize your browser and capture and remember certain
              information. For instance, we use cookies to help us remember and
              process the items in your shopping cart. They are also used to
              help us understand your preferences based on previous or current
              site activity, which enables us to provide you with improved
              services. We also use cookies to help us compile aggregate data
              about site traffic and site interaction so that we can offer
              better site experiences and tools in the future.
            </p>
            <h3 className="text-xl mt-5 mb-2 font-base">We use cookies to:</h3>
            <ul className="list-disc  text-base text-black pl-4">
              <li>Understand and save user's preferences for future visits.</li>
              <li>Keep track of advertisements.</li>
              <li>
                Compile aggregate data about site traffic and site interactions
                in order to offer better site experiences and tools in the
                future. We may also use trusted third-party services that track
                this information on our behalf.
              </li>
            </ul>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              You can choose to have your computer warn you each time a cookie
              is being sent, or you can choose to turn off all cookies. You do
              this through your browser settings. Since browser is a little
              different, look at your browser's Help Menu to learn the correct
              way to modify your cookies.
            </p>
            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              If users disable cookies in their browser:
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              If you turn cookies off, Some of the features that make your site
              experience more efficient may not function properly.Some of the
              features that make your site experience more efficient and may not
              function properly.
            </p>
            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              Third-party disclosure
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We do not sell, trade, or otherwise transfer to outside parties
              your Personally Identifiable Information unless we provide users
              with advance notice. This does not include website hosting
              partners and other parties who assist us in operating our website,
              conducting our business, or serving our users, so long as those
              parties agree to keep this information confidential. We may also
              release information when it's release is appropriate to comply
              with the law, enforce our site policies, or protect ours or
              others' rights, property or safety.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              However, non-personally identifiable visitor information may be
              provided to other parties for marketing, advertising, or other
              uses.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">Third-party links</h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Occasionally, at our discretion, we may include or offer
              third-party products or services on our website. These third-party
              sites have separate and independent privacy policies. We therefore
              have no responsibility or liability for the content and activities
              of these linked sites. Nonetheless, we seek to protect the
              integrity of our site and welcome any feedback about these sites.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">Google</h3>
            <p className="my-6 text-base leading-8 break-words">
              Google's advertising requirements can be summed up by Google's
              Advertising Principles.They are put in place to provide a positive
              experience for users.
              <a
                href="https://support.google.com/adwordspolicy/answer/1316548?hl=en"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
              .
            </p>

            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We use Google AdSense Advertising on our website.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Google, as a third-party vendor, uses cookies to serve ads on our
              site. Google's use of the DART cookie enables it to serve ads to
              our users based on previous visits to our site and other sites on
              the Internet. Users may opt-out of the use of the DART cookie by
              visiting the Google Ad and Content Network privacy policy.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              We have implemented the following:
            </h3>
            <ul className="list-disc sm:text-lg text-base text-black pl-4">
              <li>Remarketing with Google AdSense</li>
              <li>Google Display Network Impression Reporting</li>
              <li>Demographics and Interests Reporting</li>
            </ul>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We, along with third-party vendors such as Google use first-party
              cookies (such as the Google Analytics cookies) and third-party
              cookies (such as the DoubleClick cookie) or other third-party
              identifiers together to compile data regarding user interactions
              with ad impressions and other ad service functions as they relate
              to our website.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">Opting out:</h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Users can set preferences for how Google advertises to you using
              the Google Ad Settings page. Alternatively, you can opt out by
              visiting the Network Advertising Initiative Opt Out page or by
              using the Google Analytics Opt Out Browser add on.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              California Online Privacy Protection Act
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              CalOPPA is the first state law in the nation to require commercial
              websites and online services to post a privacy policy. The law's
              reach stretches well beyond California to require any person or
              company in the United States (and conceivably the world) that
              operates websites collecting Personally Identifiable Information
              from California consumers to post a conspicuous privacy policy on
              its website stating exactly the information being collected and
              those individuals or companies with whom it is being shared. - See
              more at:
              http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              According to CalOPPA, we agree to the following:
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Users can visit our site anonymously.
              <br />
              Once this privacy policy is created, we will add a link to it on
              our home page or as a minimum, on the first significant page after
              entering our website. Our Privacy Policy link includes the word
              'Privacy' and can easily be found on the page specified above.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              You will be notified of any Privacy Policy changes:
            </p>
            <ul className="list-disc sm:text-lg text-base text-black pl-4">
              <li>On our Privacy Policy Page</li>
            </ul>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Can change your personal information:
            </p>
            <ul className="list-disc sm:text-lg text-base text-black pl-4">
              <li>By emailing us</li>
              <li>By logging in to your account</li>
            </ul>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              How does our site handle Do Not Track signals?
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We honor Do Not Track signals and Do Not Track, plant cookies, or
              use advertising when a Do Not Track (DNT) browser mechanism is in
              place.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              Does our site allow third-party behavioral tracking?
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              It's also important to note that we allow third-party behavioral
              tracking
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              COPPA (Children Online Privacy Protection Act)
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              When it comes to the collection of personal information from
              children under the age of 13 years old, the Children's Online
              Privacy Protection Act (COPPA) puts parents in control. The
              Federal Trade Commission, United States' consumer protection
              agency, enforces the COPPA Rule, which spells out what operators
              of websites and online services must do to protect children's
              privacy and safety online.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We do not specifically market to children under the age of 13
              years old.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              Do we let third-parties, including ad networks or plug-ins collect
              PII from children under 13?
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              Fair Information Practices
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              The Fair Information Practices Principles form the backbone of
              privacy law in the United States and the concepts they include
              have played a significant role in the development of data
              protection laws around the globe. Understanding the Fair
              Information Practice Principles and how they should be implemented
              is critical to comply with the various privacy laws that protect
              personal information.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              In order to be in line with Fair Information Practices we will
              take the following responsive action, should a data breach occur:
            </h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We will notify you via email
            </p>
            <ul className="list-disc text-lg text-black pl-4">
              <li>Within 7 business days</li>
            </ul>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We will notify the users via in-site notification
            </p>
            <ul className="list-disc text-lg text-black pl-4">
              <li>Within 7 business days</li>
            </ul>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              We also agree to the Individual Redress Principle which requires
              that individuals have the right to legally pursue enforceable
              rights against data collectors and processors who fail to adhere
              to the law. This principle requires not only that individuals have
              enforceable rights against data users, but also that individuals
              have recourse to courts or government agencies to investigate
              and/or prosecute non-compliance by data processors.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">CAN SPAM Act</h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              The CAN-SPAM Act is a law that sets the rules for commercial
              email, establishes requirements for commercial messages, gives
              recipients the right to have emails stopped from being sent to
              them, and spells out tough penalties for violations.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              We collect your email address in order to:
            </h3>
            <ul className="list-disc sm:text-lg text-base text-black pl-4">
              <li>
                Send information, respond to inquiries, and/or other requests or
                questions
              </li>
              <li>
                Market to our mailing list or continue to send emails to our
                clients after the original transaction has occurred.
              </li>
            </ul>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              To be in accordance with CANSPAM, we agree to the following:
            </h3>
            <ul className="list-disc sm:text-lg text-base text-black pl-4">
              <li>Not use false or misleading subjects or email addresses.</li>
              <li>
                Identify the message as an advertisement in some reasonable way.
              </li>
              <li>
                Include the physical address of our business or site
                headquarters.
              </li>
              <li>
                Monitor third-party email marketing services for compliance, if
                one is used.
              </li>
              <li>Honor opt-out/unsubscribe requests quickly.</li>
              <li>
                Allow users to unsubscribe by using the link at the bottom of
                each email.
              </li>
            </ul>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">
              If at any time you would like to unsubscribe from receiving future
              emails, you can email us at
            </h3>
            <ul className="list-disc text-lg text-black pl-4">
              <li>Follow the instructions at the bottom of each email.</li>
            </ul>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              and we will promptly remove you from ALL correspondence.
            </p>

            <br />
            <h3 className="text-xl mt-5 mb-2 font-base">Contacting Us</h3>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              If there are any questions regarding this privacy policy, you may
              contact us using the information below.
            </p>
            <p className="my-5 sm:text-base text-xs sm:leading-8 leading-5">
              uSiS Technologies Private Limited
              <br />
              2nd Floor, Site, 30 & 31, <br />
              Thiru Senthil Nagar, NGGO Colony, <br />
              K. Vadamadurai,Coimbatore 641017,
              <br />
              Tamil Nadu,India
              <br />
              <a href="mailto:support@usistech.com">support@usistech.com</a>
              <br />
              <a href="tel:04222461790">04222461790</a>
            </p>
            <p className="my-2 sm:text-base text-xs leading-8">
              Last Edited on 2017-07-14
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

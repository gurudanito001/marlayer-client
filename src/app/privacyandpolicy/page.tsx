import NavBar from "../learning/home/navbar";
import Footer from "../(home)/footer";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy and Policy | Quales Consulting',
  description: "At Quales Consulting, we are deeply committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect the personal information you provide to us. By accessing our services, you agree to the terms outlined in this policy. We value your trust and are dedicated to safeguarding your privacy.",
};

const PrivacyAndPolicy = () =>{
  return(
    <main className="bg-white">
    <NavBar darkTheme />
    <section className="flex flex-col py-14 lg:py-24 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8">
      <div className="max-w-4xl">
        <h2 className="text-5xl lg:text-7xl font-semibold mb-3 p-0">Privacy Policy </h2>
        <p className="text-xl md:text-2xl font-light mt-5">Welcome to our Privacy Policy page! At Marlayer, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data as you engage with our platform.  </p>
        {/* <div className="mt-7">
          <button className=" btn md:btn-lg text-md bg-secondary text-white rounded-lg">Contact Support</button>
        </div> */}
      </div>
    </section>
    <section className="bg-white px-5 lg:px-28">
      <article className="flex flex-col gap-5 text-primary font-light pt-5 md:pt-8 pb-12">
        <div className="flex flex-col gap-1">
          <h5 className="font-550 text-lg">Introduction</h5>
          <p className="text-sm md:text-lg">At Quales Consulting, we are deeply committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect the personal information you provide to us. By accessing our services, you agree to the terms outlined in this policy. We value your trust and are dedicated to safeguarding your privacy.
          </p>
        </div>

        <h5 className="font-550 text-lg">1. Information We Collect</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">1.1 <strong>Personal Information:</strong> We collect the following personal information from you:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside">Full Name</li>
            <li className="list-inside">Address (physical and mailing)</li>
            <li className="list-inside">Email Address</li>
            <li className="list-inside">Phone Number</li>
            <li className="list-inside">Date of Birth</li>
            <li className="list-inside">Gender</li>
            <li className="list-inside">Employment history</li>
            <li className="list-inside">Education details</li>
            <li className="list-inside">Professional certifications</li>
            <li className="list-inside">Personal statements or essays</li>
            <li className="list-inside">Academic references</li>
          </ul>
        </div>


        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">1.2 <strong>Sensitive Information:</strong> We may collect sensitive information, which includes but is not limited to:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside">Financial information (e.g., bank details, scholarship-related financial data)</li>
            <li className="list-inside">Identification numbers (e.g., Social Security Number, Passport Number)</li>
            <li className="list-inside">Health information (only if necessary for specific services or accommodations)</li>
          </ul>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">1.3 <strong>Non-Personal Information:</strong> We automatically collect non-personal information when you interact with our website:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside">Browser type and version</li>
            <li className="list-inside">IP address</li>
            <li className="list-inside">Operating system</li>
            <li className="list-inside">Browsing history on our website</li>
            <li className="list-inside">Cookies and similar tracking technologies</li>
          </ul>
        </div>

        <h5 className="font-550 text-lg">2. How We Collect Information</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">We collect information through the following methods:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside">Directly from you when you fill out forms, submit applications, or provide information in person</li>
            <li className="list-inside">IP address</li>
            <li className="list-inside">Automatically as you navigate through our website using cookies and similar technologies</li>
            <li className="list-inside">From third parties, such as academic institutions, employers, and references</li>
            <li className="list-inside">Through surveys, feedback forms, and customer service interactions</li>
          </ul>
        </div>


        <h5 className="font-550 text-lg">3. How We Use Your Information</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">We use your personal information for the following purposes:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside"><strong>Application Processing:</strong> To process applications for scholarships, training programs, and job opportunities</li>
            <li className="list-inside"><strong>Communication:</strong> To communicate with you regarding your applications, inquiries, and our services</li>
            <li className="list-inside"><strong>Verification:</strong> To verify your identity, qualifications, and references
            </li>
            <li className="list-inside"><strong>Internal Operations:</strong> To manage our internal operations, including data analysis, audits, and fraud prevention</li>
            <li className="list-inside"><strong>Legal Compliance:</strong> To improve our website and services based on user feedback and interactions</li>
            <li className="list-inside"><strong>Service Improvement:</strong> To process applications for scholarships, training programs, and job opportunities</li>
            <li className="list-inside"><strong>Marketing:</strong> To send you promotional materials and updates about our services (you can opt-out at any time)</li>
          </ul>
        </div>

        <h5 className="font-550 text-lg">4. How We Share Your Information</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">We may share your information with:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside"><strong>Educational Institutions and Partners:</strong> For verifying qualifications and coordinating training programs</li>
            <li className="list-inside"><strong>Employers and Professional Bodies:</strong> To facilitate job placements and certifications</li>
            <li className="list-inside"><strong>Service Providers:</strong> Who assist us with our operations, such as IT services, data storage, and payment processing
            </li>
            <li className="list-inside"><strong>Legal Authorities:</strong> If required by law or to protect our rights and the safety of others</li>
            <li className="list-inside"><strong>Marketing Partners:</strong> With your consent, for joint marketing initiatives</li>
          </ul>
        </div>



        <h5 className="font-550 text-lg">5. Data Security</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">We implement a variety of security measures to maintain the safety of your personal information. These measures include:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside"><strong>Secure Servers:</strong> Using industry-standard encryption to protect data transmission</li>
            <li className="list-inside"><strong>Encrypted Databases:</strong> Ensuring data at rest is protected</li>
            <li className="list-inside"><strong>Regular Security Audits:</strong> Conducting audits and updates to our security protocols</li>
            <li className="list-inside"><strong>Access Controls:</strong> Implementing strict access controls and authentication procedures</li>
            <li className="list-inside"><strong>Employee Training:</strong> Training employees on data protection best practices and confidentiality agreements</li>
          </ul>
        </div>

        <h5 className="font-550 text-lg">6. Data Retention</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When your information is no longer needed, we will securely delete or anonymize it. The retention periods are determined based on the type of data and its purpose.
          </p>
        </div>


        <h5 className="font-550 text-lg">7. Your Rights</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">You have the following rights regarding your personal information:</p>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside"><strong>Access:</strong> You can request a copy of the personal information we hold about you</li>
            <li className="list-inside"><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
            <li className="list-inside"><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions</li>
            <li className="list-inside"><strong>Objection:</strong> You can object to the processing of your personal information under certain circumstances.</li>
            <li className="list-inside"><strong>Restriction:</strong> You can request that we restrict the processing of your personal information.</li>
            <li className="list-inside"><strong>Portability:</strong> You can request that we transfer your personal information to another organization.</li>
          </ul>

          <p className="text-sm md:text-lg">To exercise any of these rights, please contact us at [insert contact details]. We will respond to your request within a reasonable timeframe, and no longer than the legally required period.</p>
        </div>

        <h5 className="font-550 text-lg">8. Changes to This Privacy Policy</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website and updating the effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </div>

        <h5 className="font-550 text-lg">9. Contact Us</h5>

        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-lg">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>

          <p className="text-sm md:text-lg">
            Quales Consulting<br/>
            35 Kola Amodu crescent, Magodo GRA Phase 2, Lagos, Nigeria. <br/>
            info@quales.tech <br/>
            08036579077, 07060406267 <br/>
          </p>

          <p className="text-sm md:text-lg">
            By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and sharing of your information as described.
          </p>
        </div>


        <h5 className="font-550 text-lg">10. Cookies and Tracking Technologies</h5>

        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-lg">
            Our website uses cookies and similar tracking technologies to enhance your user experience. Cookies are small data files stored on your device that help us remember your preferences and improve site functionality. You can control the use of cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
          </p>

          <h5 className="font-550 text-lg">Types of Cookies We Use:</h5>

          <ul className="list-disc md:px-5 text-sm md:text-lg">
            <li className="list-inside"><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li className="list-inside"><strong>Performance Cookies:</strong>Collect information about how you use our website to improve its performance.</li>
            <li className="list-inside"><strong>Functional Cookies:</strong> Remember your preferences and personalize your experience.</li>
            <li className="list-inside"><strong>Marketing Cookies:</strong> Track your browsing habits to deliver targeted advertising.</li>
          </ul>

          <p className="text-sm md:text-lg">
            <strong>Managing Cookies:</strong> You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies. Refer to your browser&apos;s help section for instructions.
          </p>
        </div>

        <h5 className="font-550 text-lg">11. Third-Party Links</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit. Links to other websites do not constitute an endorsement or approval of those websites.
          </p>
        </div>

        <h5 className="font-550 text-lg">12. Children&apos;s Privacy</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information. If you believe that we might have any information from or about a child, please contact us.
          </p>
        </div>

        <h5 className="font-550 text-lg">13. International Data Transfers</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">Your personal information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. We ensure that any transfer of your personal information complies with applicable data protection laws and is subject to appropriate safeguards. Transfers are conducted in accordance with the relevant legal requirements, including the use of Standard Contractual Clauses or other approved transfer mechanisms.
          </p>
        </div>


        <h5 className="font-550 text-lg">14. Consent</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">By providing your personal information to us, you consent to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with this policy, please do not use our services. You may withdraw your consent at any time by contacting us at info@quales.tech, subject to legal or contractual restrictions.
          </p>
        </div>

        <h5 className="font-550 text-lg">15. Complaints</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">If you have any concerns or complaints about how we handle your personal information, please contact us first at info@quales.tech. If you are not satisfied with our response, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.
          </p>
        </div>

        <h5 className="font-550 text-lg">16. Updates to Your Information</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">It is important that the personal information we hold about you is accurate and current. Please keep us informed if your personal information changes during your relationship with us. You can update your information by contacting us at info@quales.tech.
          </p>
        </div>

        <h5 className="font-550 text-lg">17. Governing Law</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">This Privacy Policy is governed by and construed in accordance with the laws of The Nigerian Constitution, without regard to its conflict of law principles.
          </p>
        </div>

        <h5 className="font-550 text-lg">18. Acceptance of This Policy</h5>

        <div className="flex flex-col gap-1">
          <p className="text-sm md:text-lg">By using our services, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our services. Your continued use of the services following the posting of changes to this policy will be deemed your acceptance of those changes.
          </p>
        </div>

        <p className="text-sm md:text-lg">
          Thank you for choosing Quales Consulting. We value your trust and are committed to protecting your privacy.
        </p>

      </article>
    </section>
    <Footer />
    </main>
  )
}

export default PrivacyAndPolicy;
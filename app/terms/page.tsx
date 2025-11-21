import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Love, Violeta Rose",
  description: "Terms of service for Love, Violeta Rose wedding videography services.",
};

export default function TermsOfService() {
  return (
    <>
      <Header settled />
      <main className="bg-cream min-h-screen">
        <div className="container-narrow section-padding-lg">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
            Terms of Service
          </h1>
          <p className="text-espresso/60 mb-12">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Agreement to Terms</h2>
              <p className="text-espresso leading-relaxed mb-4">
                By accessing our website or booking our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Services Offered</h2>
              <p className="text-espresso leading-relaxed mb-4">
                Love, Violeta Rose provides professional wedding and couples videography services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Elopement and intimate gathering films</li>
                <li>Wedding day coverage and films</li>
                <li>Destination wedding videography</li>
                <li>Couples films and sessions</li>
                <li>Related videography services as agreed upon</li>
              </ul>
              <p className="text-espresso leading-relaxed mb-4">
                Specific services, deliverables, and timelines will be outlined in individual service agreements or contracts.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Booking and Consultation</h2>
              <p className="text-espresso leading-relaxed mb-4">
                Submitting a consultation request through our website does not guarantee availability or constitute a binding agreement. Services are confirmed only upon:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Receipt of a signed service agreement or contract</li>
                <li>Payment of the required retainer fee</li>
                <li>Written confirmation from Love, Violeta Rose</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Payment Terms</h2>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Non-Refundable Retainer</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Client understands and agrees that the retainer paid to Contractor is a non-refundable retainer fee that is not a deposit. This fee is paid solely to reserve Contractor's services and secure the event date. Upon payment, Contractor declines all other work for that date and begins pre-production planning. Because Contractor's availability is limited and time is reserved exclusively for Client, the retainer is earned immediately and is not refundable for any reason, including but not limited to cancellation, postponement, change of event plans, or Client's decision to no longer move forward.
              </p>
              <p className="text-espresso leading-relaxed mb-4">
                The retainer amount will be specified in your service agreement and is typically 30-50% of the total service fee.
              </p>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Final Payment</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Final payment is due according to the payment schedule outlined in your service agreement, typically before or on the event date. Failure to make timely payments may result in cancellation of services.
              </p>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Additional Fees</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Additional fees may apply for:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Travel beyond a specified radius from New York City</li>
                <li>Accommodations and transportation for destination events</li>
                <li>Additional hours beyond contracted coverage</li>
                <li>Rush delivery or expedited editing</li>
                <li>Additional copies or formats of final deliverables</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Cancellation and Refunds</h2>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Client Cancellation</h3>
              <p className="text-espresso leading-relaxed mb-4">
                If you cancel your booking:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>The retainer fee is non-refundable under all circumstances</li>
                <li>Cancellations made more than 90 days before the event date may receive a partial refund of additional payments made, minus the retainer</li>
                <li>Cancellations made within 90 days of the event date forfeit all payments made</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Postponement</h3>
              <p className="text-espresso leading-relaxed mb-4">
                If you need to postpone your event, we will make reasonable efforts to accommodate your new date. If we are unavailable for the new date, standard cancellation terms apply. Postponement fees may apply as outlined in your service agreement.
              </p>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Force Majeure</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Neither party shall be liable for failure to perform due to circumstances beyond their reasonable control, including but not limited to acts of God, natural disasters, government restrictions, or public health emergencies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Deliverables and Timeline</h2>
              <p className="text-espresso leading-relaxed mb-4">
                Final edited films are typically delivered within 6-8 weeks from the event date, unless otherwise specified in your service agreement. Rush delivery may be available for an additional fee.
              </p>
              <p className="text-espresso leading-relaxed mb-4">
                Deliverables will be provided via digital download or online gallery. Physical media (USB drives, etc.) may be available for an additional fee.
              </p>
              <p className="text-espresso leading-relaxed mb-4">
                We are not responsible for delays caused by circumstances beyond our control, including but not limited to equipment failure, data loss, or technical issues. We maintain backup systems to minimize such risks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Copyright and Usage Rights</h2>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Copyright Ownership</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Love, Violeta Rose retains full copyright ownership of all footage, photographs, and creative work produced. This includes raw footage, edited films, and all intermediate work products.
              </p>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Client Usage Rights</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Upon receipt of full payment, clients receive a personal, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>View and share the final film(s) for personal, non-commercial purposes</li>
                <li>Post the film on social media platforms with proper credit to Love, Violeta Rose</li>
                <li>Share the film with family and friends</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Prohibited Uses</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Clients may not:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Use the films for commercial purposes without written permission</li>
                <li>Sell, license, or distribute the films to third parties</li>
                <li>Edit, alter, or create derivative works from the films</li>
                <li>Remove watermarks or credits from the films</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Portfolio and Marketing Use</h3>
              <p className="text-espresso leading-relaxed mb-4">
                Love, Violeta Rose reserves the right to use excerpts from your film for portfolio, website, social media, advertising, and other marketing purposes, unless you explicitly opt out in writing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Client Responsibilities</h2>
              <p className="text-espresso leading-relaxed mb-4">
                To ensure optimal service delivery, clients agree to:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Provide accurate event details, timelines, and contact information</li>
                <li>Notify us of any special requests, restrictions, or important moments in advance</li>
                <li>Inform venue coordinators and other vendors of our presence and access requirements</li>
                <li>Ensure adequate lighting and access to key moments and locations</li>
                <li>Provide a designated point of contact on the event day</li>
                <li>Respect our equipment and working space during the event</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Limitation of Liability</h2>
              <p className="text-espresso leading-relaxed mb-4">
                While we take utmost care in providing our services, our liability is limited to the amount paid for our services. We are not liable for:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Events beyond our control that prevent or limit service delivery</li>
                <li>Venue restrictions that limit our ability to capture certain moments</li>
                <li>Technical failures or equipment malfunctions, despite our backup systems</li>
                <li>Missed moments due to timing issues or inadequate notice</li>
                <li>Quality issues resulting from poor lighting or venue conditions</li>
              </ul>
              <p className="text-espresso leading-relaxed mb-4">
                We maintain comprehensive backup equipment and systems to minimize risks, but cannot guarantee against all possible technical failures.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Backup Coverage</h2>
              <p className="text-espresso leading-relaxed mb-4">
                In the unlikely event that we are unable to perform services due to illness, emergency, or other unforeseen circumstances, we will make reasonable efforts to secure a qualified replacement videographer. If a suitable replacement cannot be found, our liability is limited to a full refund of all payments received.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">File Storage and Archival</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We maintain backup copies of your footage for a limited time after delivery, typically 90-180 days. After this period, we are not obligated to retain your files. Clients are responsible for downloading and backing up their final deliverables.
              </p>
              <p className="text-espresso leading-relaxed mb-4">
                Extended archival services may be available for an additional fee. Raw footage is not provided as part of standard packages unless explicitly agreed upon.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Conduct and Cooperation</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We expect all clients, guests, and family members to treat our team with respect and professionalism. We reserve the right to terminate services without refund if we or our team members are subjected to:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Harassment, threats, or abusive behavior</li>
                <li>Discrimination based on race, gender, sexual orientation, religion, or other protected characteristics</li>
                <li>Physical assault or threats to safety</li>
                <li>Intoxicated or otherwise dangerous behavior that compromises our safety</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Disputes and Complaints</h2>
              <p className="text-espresso leading-relaxed mb-4">
                If you have concerns about our services, please contact us within 30 days of receiving your final deliverables. We will work with you in good faith to address legitimate concerns.
              </p>
              <p className="text-espresso leading-relaxed mb-4">
                Revision requests beyond normal editing (e.g., color correction, music changes, sequence adjustments) may incur additional fees. Major re-edits are subject to availability and additional charges.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Governing Law</h2>
              <p className="text-espresso leading-relaxed mb-4">
                These Terms of Service are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any disputes arising from these terms or our services shall be resolved in the courts of New York.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Modifications to Terms</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective when posted on this page with an updated "Last updated" date. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
              <p className="text-espresso leading-relaxed mb-4">
                Individual service agreements take precedence over these general terms. In case of conflict, the signed service agreement governs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Severability</h2>
              <p className="text-espresso leading-relaxed mb-4">
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Entire Agreement</h2>
              <p className="text-espresso leading-relaxed mb-4">
                These Terms of Service, together with any signed service agreement or contract, constitute the entire agreement between you and Love, Violeta Rose regarding our services, superseding any prior agreements or understandings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Contact Information</h2>
              <p className="text-espresso leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-warm-sand/20 border border-coffee/10 rounded-lg p-6">
                <p className="text-espresso mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Michael.a@lovevioletarose.com" className="text-rose-wax-red hover:underline">
                    Michael.a@lovevioletarose.com
                  </a>
                </p>
                <p className="text-espresso">
                  <strong>Address:</strong> New York City, New York
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

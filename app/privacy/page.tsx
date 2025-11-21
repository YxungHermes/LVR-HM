import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Love, Violeta Rose",
  description: "Privacy policy for Love, Violeta Rose wedding videography services.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header settled />
      <main className="bg-cream min-h-screen">
        <div className="container-narrow section-padding-lg">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
            Privacy Policy
          </h1>
          <p className="text-espresso/60 mb-12">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Introduction</h2>
              <p className="text-espresso leading-relaxed mb-4">
                Love, Violeta Rose ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Information We Collect</h2>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Personal Information</h3>
              <p className="text-espresso leading-relaxed mb-4">
                When you submit a consultation request or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Names and pronouns</li>
                <li>Email address and phone number</li>
                <li>Wedding or event date and location</li>
                <li>Event details and preferences</li>
                <li>Budget range and deliverable preferences</li>
                <li>Any additional information you choose to provide</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-ink mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-espresso leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website or source</li>
                <li>Device type and operating system</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">How We Use Your Information</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Respond to your consultation requests and inquiries</li>
                <li>Provide information about our services</li>
                <li>Send you relevant updates, if you've opted in</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Information Sharing</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li><strong>Service Providers:</strong> Trusted partners who assist us in operating our website and conducting our business (e.g., email service providers, analytics tools)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Cookies and Tracking</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. These may include:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-espresso leading-relaxed mb-4">
                You can control cookies through your browser settings, but disabling them may affect site functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Data Security</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Data Retention</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Your Rights</h2>
              <p className="text-espresso leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-espresso space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to certain processing of your data</li>
              </ul>
              <p className="text-espresso leading-relaxed mb-4">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:Michael.a@lovevioletarose.com" className="text-rose-wax-red hover:underline">
                  Michael.a@lovevioletarose.com
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Third-Party Links</h2>
              <p className="text-espresso leading-relaxed mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Children's Privacy</h2>
              <p className="text-espresso leading-relaxed mb-4">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Changes to This Policy</h2>
              <p className="text-espresso leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Contact Us</h2>
              <p className="text-espresso leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
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

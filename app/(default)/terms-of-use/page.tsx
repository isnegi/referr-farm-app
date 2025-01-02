import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="flex flex-col lg:py-12">
      <h1 className="mb-2 text-4xl leading-tight text-dark-grey-900 lg:text-6xl">Terms of Use</h1>
      <p className="text-base font-medium leading-7 text-dark-grey-600">Welcome to ReferrFarm & Co.! By accessing or using our platform, you agree to these Terms of Use. Please read them carefully. If you do not agree, you may not use our services.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">I. Acceptance of Terms</h2>
      <ul className="list-decimal ml-8">
        <li><strong>By using ReferrFarm & Co., you agree to:</strong>
          <ul className="list-disc ml-8">
            <li>Comply with these terms and all applicable laws.</li>
            <li>Provide accurate and truthful information during registration or use of our services.</li>
          </ul>
        </li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">II. Use of Services</h2>
      <ul className="list-decimal ml-8">
        <li><strong>Permitted Use:</strong>
          <ul className="list-disc ml-8">
            <li>Use our platform to explore, post, and manage referrals.</li>
            <li>Engage respectfully with other users.</li>
          </ul>
        </li>
        <li><strong>Prohibited Use:</strong>
          <ul className="list-disc ml-8">
            <li>Misuse the platform to distribute harmful, illegal, or inappropriate content.</li>
            <li>Impersonate others or misrepresent your identity.</li>
            <li>Exploit our platform for unauthorized commercial activities.</li>
          </ul>
        </li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">III. Account Responsibility</h2>
      <ul className="list-decimal ml-8">
        <li>You are responsible for safeguarding your account credentials.</li>
        <li>Notify us immediately at <Link className="text-[#5AE3A9] font-bold" href="mailto:hello@referrfarm.com">hello@referrfarm.com</Link> if you suspect unauthorized access.</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">IV. Content</h2>
      <ul className="list-decimal ml-8">
        <li><strong>User Content:</strong>
          <ul className="list-disc ml-8">
            <li>You retain ownership of the content you post, but grant ReferrFarm & Co. a license to display it on our platform.</li>
            <li>Ensure your content does not infringe on the rights of others.</li>
          </ul>
        </li>
        <li><strong>Platform Content:</strong>
          <ul className="list-disc ml-8">
            <li>ReferrFarm & Co. owns all rights to platform content, branding, and features.</li>
            <li>Do not copy, distribute, or alter platform content without permission.</li>
          </ul>
        </li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">V. Payments</h2>
      <ul className="list-decimal ml-8">
        <li>Payment terms for services (if applicable) will be clearly communicated.</li>
        <li>Refunds or disputes must be addressed to us at <Link className="text-[#5AE3A9] font-bold" href="mailto:hello@referrfarm.com">hello@referrfarm.com</Link>.</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">VI. Liability</h2>
      <ul className="list-decimal ml-8">
        <li>ReferrFarm & Co. strives for accuracy and functionality but does not guarantee uninterrupted or error-free services.</li>
        <li>We are not liable for user-generated content or third-party actions on the platform.</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">VII. Termination</h2>
      <ul className="list-decimal ml-8">
        <li>We reserve the right to suspend or terminate your account if you violate these terms or engage in harmful activities.</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">VIII. Changes to Terms</h2>
      <p>We may update these terms occasionally. Continued use of the platform indicates acceptance of the updated terms.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">IX. Governing Law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">VIII. Contact Us</h2>
      <p>If you have any questions or need support, please contact us at:</p>
      <p className="mb-8">
        <strong>ReferrFarm & Co.</strong><br />
        Email: <Link className="text-[#5AE3A9] font-bold" href="mailto:hello@referrfarm.com">hello@referrfarm.com</Link><br />
        Country: <strong>India</strong>
      </p>
      <hr />
      <p className="text-base font-medium leading-7 text-dark-grey-600"><em>Thank you for trusting ReferrFarm & Co. to help you grow your opportunities!</em></p>
    </div>
  );
}

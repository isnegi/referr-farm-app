import Link from "next/link";

export default function PrivacyAndCookies() {
  return (
    <div className="flex flex-col lg:py-12">
      <h1 className="mb-2 text-4xl leading-tight text-dark-grey-900 lg:text-6xl">Privacy & Cookies Policy</h1>
      <p className="text-base font-medium leading-7 text-dark-grey-600">Welcome to ReferrFarm & Co.! Your privacy is important to us, and we are committed to protecting it. This policy explains how we handle your personal information and cookies while using our services.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">I. Information We Collect</h2>
      <ul className="list-decimal ml-8">
        <li><strong>Personal Information:</strong>
          <ul className="list-disc ml-8">
            <li>When you register, we collect your name, email address, and other necessary details.</li>
            <li>For transactions, we may collect payment details securely.</li>
          </ul>
        </li>
        <li><strong>Usage Information:</strong>
          <ul className="list-disc ml-8">
            <li>We collect data about how you interact with the platform (e.g., fields you explore, referrals you post).</li>
          </ul>
        </li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">II. How We Use Your Information</h2>
      <ul className="list-decimal ml-8">
        <li>To provide, improve, and personalize our services.</li>
        <li>To communicate with you about updates, new features, or support.</li>
        <li>To process payments and gratitude tokens securely.</li>
      </ul>
      <p>We will never sell or share your information with third parties without your consent, except as required by law.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">III. Cookies</h2>
      <ul className="list-decimal ml-8">
        <li><strong>What Are Cookies?</strong>
          <p>Small files stored on your device to improve your experience.</p>
        </li>
        <li><strong>How We Use Cookies:</strong>
          <ul>
            <li>To remember your preferences (e.g., language, filters).</li>
            <li>To analyze platform usage and improve functionality.</li>
          </ul>
        </li>
        <li><strong>Managing Cookies:</strong>
          <p>You can adjust your browser settings to refuse cookies. Note that some features may not work as intended without cookies.</p>
        </li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">IV. Data Retention</h2>
      <p>We keep your information for as long as necessary to provide our services or as required by law.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">V. Your Rights</h2>
      <ul className="list-decimal ml-8">
        <li>Access, correct, or delete your personal data.</li>
        <li>Opt-out of marketing communications by contacting us at <Link className="text-[#5AE3A9] font-bold" href="mailto:hello@referrfarm.com">hello@referrfarm.com</Link>.</li>
      </ul>

      <h2 className="mt-4 mb-2 text-xl font-bold">VI. Security</h2>
      <p>We use industry-standard measures to protect your data. However, no system is entirely foolproof. Please notify us immediately if you suspect unauthorized access to your account.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">VII. Updates to This Policy</h2>
      <p>We may update this policy occasionally. Any changes will be posted here with an updated date.</p>

      <h2 className="mt-4 mb-2 text-xl font-bold">VIII. Contact Us</h2>
      <p>If you have any questions or concerns about this policy, reach out to us at:</p>
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

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-background text-foreground py-16">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Fatafat Loans values your privacy. We only collect data needed to process your loan journey, verify identity, and
        improve service quality.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        We do not sell personal data. Information may be shared with regulated lending partners, KYC providers, and payment
        service providers solely for loan processing and legal compliance.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        For privacy requests, write to <a className="text-accent hover:underline" href="mailto:privacy@fatafatloans.in">privacy@fatafatloans.in</a>.
      </p>
    </div>
  </main>
);

export default PrivacyPolicy;

const TermsOfService = () => (
  <main className="min-h-screen bg-background text-foreground py-16">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground leading-relaxed mb-4">
        By using Fatafat Loans, you agree to provide accurate details and use the platform only for lawful borrowing and related
        financial services.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Loan approvals, rates, and disbursal timelines are subject to partner lender policies, eligibility checks, and regulatory
        requirements.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        For terms-related questions, contact <a className="text-accent hover:underline" href="mailto:legal@fatafatloans.in">legal@fatafatloans.in</a>.
      </p>
    </div>
  </main>
);

export default TermsOfService;

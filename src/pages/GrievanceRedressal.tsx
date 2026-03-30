import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const GrievanceRedressal = () => (
  <main className="min-h-screen bg-background py-10 md:py-14">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <div className="mt-6 mb-8 flex items-center justify-center">
        <div className="w-full max-w-md rounded-xl bg-[linear-gradient(180deg,hsl(228_78%_36%)_0%,hsl(221_58%_28%)_100%)] py-5 px-6 text-center shadow-sm">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white/95">
            GRIEVANCE REDRESSAL
          </p>
          <div className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20">
            <ShieldCheck size={18} className="text-white" />
          </div>
        </div>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">
        Welcome to Fatafat Loans Customer Services
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-4">
        We are committed to take all necessary steps to resolve your grievances and complaints (including for digital loans) within a reasonable time frame. You may make use of any of the options listed below to register your grievance or complaint. We would like to reassure you that we will work on resolving the same at the earliest.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-5">
        You may connect with us through any of the below channels. We will be glad to assist you:
      </p>

      <div className="mb-2 inline-flex rounded-md bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
        Grievance Officer
      </div>

      <div className="space-y-1.5">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Name:</span> Abhay Padoor
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Address:</span> 6th floor, Wing A, Let&rsquo;s Work, Corporate Centre, J.B Nagar, Chakala, Andheri East, Mumbai - 400059
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Email:</span> grievance@fatafatloans.in
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Contact:</span> +91 9240259585
        </p>
      </div>
    </div>
  </main>
);

export default GrievanceRedressal;

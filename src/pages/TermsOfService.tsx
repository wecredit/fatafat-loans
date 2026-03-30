import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import TERMS_TEXT_RAW from "./terms-of-service.txt?raw";

const TERMS_TEXT: string = TERMS_TEXT_RAW
  .trim()
  .replace(/QuantumX Global Private Limited/g, "Fatafat Loans")
  .replace(/care@wecredit\.co\.in/g, "legal@fatafatloans.com")
  .replace(/wecredit\.co\.in/g, "fatafatloans.com")
  .replace(/WECREDIT/g, "Fatafat Loans")
  .replace(/WeCredit/g, "Fatafat Loans")
  ;

const BRANDS_HEADING: string = "21. Our Brands";
const WE_CREDIT_URL: string = "https://wecredit.co.in/";
const LOANS_BAZAAR_URL: string = "https://loansbazaar.co/";

const TermsOfService = (): JSX.Element => (
  <main className="min-h-screen bg-background py-10 md:py-14">
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <div className="mt-6 mb-8 flex items-center justify-center">
        <div className="w-full max-w-md rounded-xl bg-[linear-gradient(180deg,hsl(228_78%_36%)_0%,hsl(221_58%_28%)_100%)] py-5 px-6 text-center shadow-sm">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white/95">TERMS OF USE</p>
          <div className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20">
            <FileText size={18} className="text-white" />
          </div>
        </div>
      </div>

      <div className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground break-words">
        {((): JSX.Element => {
          const brandsIndex: number = TERMS_TEXT.indexOf(BRANDS_HEADING);
          if (brandsIndex < 0) {
            return <span style={{ whiteSpace: "pre-wrap" }}>{TERMS_TEXT}</span>;
          }

          const beforeBrandsText: string = TERMS_TEXT.slice(0, brandsIndex).trimEnd();

          return (
            <>
              <span style={{ whiteSpace: "pre-wrap" }}>{beforeBrandsText}</span>
              <div className="mt-4 text-muted-foreground">
                <p className="font-semibold">{BRANDS_HEADING}</p>
                <div className="mt-2 flex flex-col gap-1">
                  <a
                    href={WE_CREDIT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-md px-2 py-1 text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    <span className="inline-flex items-center justify-center rounded bg-slate-900/15 px-1 py-0.5">
                      <img
                        src="/wecredit-brand.png"
                        alt="WeCredit logo"
                        className="h-6 w-auto max-w-[135px] object-contain drop-shadow"
                      />
                    </span>
                    <span className="text-sm font-medium">WeCredit</span>
                  </a>
                  <a
                    href={LOANS_BAZAAR_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-md px-2 py-1 text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    <img
                      src="/loansbazaar-brand.png"
                      alt="LoansBazaar logo"
                      className="h-6 w-auto max-w-[135px] object-contain"
                    />
                    <span className="text-sm font-medium">LoansBazaar.co</span>
                  </a>
                </div>
              </div>
            </>
          );
        })()}
      </div>
    </div>
  </main>
);

export default TermsOfService;

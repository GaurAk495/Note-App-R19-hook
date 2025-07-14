import { ZapIcon } from "lucide-react";

function RateLimit() {
  return (
    <div className="relative flex justify-center items-start h-[calc(100vh_-_72px)] bg-base-100 py-8 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,transparent_80%,var(--color-base-100)_90%,var(--color-primary))]" />

      <div className="p-4 rounded-xl flex items-center justify-start sm:justify-center bg-primary/10 border-primary/20 shadow-lg text-primary-content backdrop-blur-md border">
        <ZapIcon className="bg-info rounded-full p-2 shrink-0" size={40} />
        <div className="divider divider-horizontal divider-start"> </div>
        <div className="flex flex-col">
          <h3 className="text-xl">Rate Limit Exhausted</h3>
          <p className="text-base-content/70">
            You have made 5 requested witihin 10 second. please try again later
          </p>
        </div>
      </div>
    </div>
  );
}

export default RateLimit;

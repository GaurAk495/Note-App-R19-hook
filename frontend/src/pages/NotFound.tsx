// NotFound.tsx
export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh_-_72px)] bg-base-100 py-8 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,transparent_80%,var(--color-base-100)_90%,var(--color-primary))]" />
      <div>
        <div className="text-center text-warning-content relative">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl mt-4">Page Not Found</p>
        </div>
      </div>
    </div>
  );
}

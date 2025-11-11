export default function StagingBadge() {
  if (process.env.NEXT_PUBLIC_SITE_ENV !== "staging") return null;
  return (
    <div className="fixed z-[9999] bottom-3 left-3 rounded-full px-3 py-1 text-sm bg-amber-600/90 text-white shadow">
      Staging Preview
    </div>
  );
}

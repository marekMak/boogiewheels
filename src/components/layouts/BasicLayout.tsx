import Header from "../Header";

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-disco">
      <div className="px-4 md:px-20 py-10">{children}</div>
    </main>
  );
}

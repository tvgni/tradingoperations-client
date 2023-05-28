export default function Home({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-violet-900 to-fuchsia-100">
      {children}
    </section>
  );
}

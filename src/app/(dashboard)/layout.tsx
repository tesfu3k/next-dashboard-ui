export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] bg-red-200">Left</div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] bg-blue-200">Right</div>
    </div>
  );
}

import Sidebar from "@/components/shared/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-neutral-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}

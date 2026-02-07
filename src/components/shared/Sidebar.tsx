"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
  SquaresFour,
  Globe,
  Bell,
  Gear,
  Pulse,
  List,
} from "@phosphor-icons/react";
import { useState } from "react";
import clsx from "clsx";
import { useMobile } from "@/hooks/use-mobile";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: SquaresFour },
  { href: "/monitors", label: "Monitors", icon: Globe },
  { href: "/alerts", label: "Alerts", icon: Bell },
  { href: "/status", label: "Status", icon: Pulse },
  { href: "/settings", label: "Settings", icon: Gear },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useMobile();

  const [open, setOpen] = useState(true);

  const collapsed = isMobile ? true : !open;

  return (
    <aside
      className={clsx(
        "h-screen flex flex-col transition-all duration-300",
        "bg-background text-foreground border-r border-border",
        collapsed ? "w-16" : "w-56",
      )}
    >
      {/* ================= TOP ================= */}
      <div className="flex items-center justify-start p-3 border-b border-border">
        {!isMobile && (
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <List size={18} weight="bold" />
          </button>
        )}
      </div>

      {/* ================= NAV ================= */}
      <nav className="flex-1 p-2 space-y-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "group relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                active ? "bg-primary text-background" : "hover:bg-muted/60",
              )}
            >
              <Icon size={20} weight={active ? "fill" : "regular"} />

              {!collapsed && <span>{label}</span>}

              {/* tooltip when collapsed */}
              {collapsed && (
                <span className="absolute left-14 whitespace-nowrap rounded-md bg-muted text-foreground px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* ================= BOTTOM ================= */}
      <div className="px-5 py-3 border-t border-border flex items-center">
        <UserButton
          showName={!collapsed}
          appearance={{
            elements: {
              userButtonBox: "!flex-row-reverse text-nowrap",
            },
          }}
        />
      </div>
    </aside>
  );
}

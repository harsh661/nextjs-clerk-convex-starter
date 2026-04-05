import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const steps = [
  {
    title: "Queries",
    description:
      "Read live data from Convex in your components and let the UI update automatically when the backend changes.",
    href: "https://docs.convex.dev/functions/query-functions",
    cta: "Read queries",
    external: true,
  },
  {
    title: "Mutations",
    description:
      "Create, update, and delete data through Convex mutations to start shaping your app logic.",
    href: "https://docs.convex.dev/functions/mutation-functions",
    cta: "Read mutations",
    external: true,
  },
  {
    title: "Schema",
    description:
      "Extend your data model and evolve this starter into the app structure you actually need.",
    href: "https://docs.convex.dev/database/schemas",
    cta: "Read schema docs",
    external: true,
  },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress ?? "Signed in user";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--border) 1px, transparent 1px),
                linear-gradient(to bottom, var(--border) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(circle at center, black 35%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 35%, transparent 80%)",
            }}
          />
          <div
            className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl opacity-10"
            style={{ background: "var(--primary)" }}
          />
        </div>

        <div className="flex flex-col gap-12">
          <div className="max-w-5xl">
            <div
              className="mb-8 inline-flex items-center gap-2 border px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
              style={{
                borderColor: "var(--border)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: "var(--primary)" }}
              />
              Protected dashboard
            </div>

            <h1 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              You are inside the app.{" "}
              <span className="text-white/55">
                Auth is active and user sync is already in place.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              This route is protected with Clerk, and signed-in users are
              already created in Convex automatically. You can start building
              features right away without setting up the auth-to-database flow
              yourself.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="border p-5 sm:p-6"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
              }}
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Session
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                  Auth verified
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div
                  className="border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card)",
                  }}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                    Signed in as
                  </p>
                  <p className="mt-4 text-lg font-medium break-all">{email}</p>
                </div>

                <div
                  className="border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card)",
                  }}
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                    Convex user sync
                  </p>
                  <p className="mt-4 text-lg font-medium">Already configured</p>
                </div>
              </div>
            </div>

            <div
              className="border p-5 sm:p-6"
              style={{
                borderColor: "var(--border)",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
              }}
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Starter flow
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                  Recommended next step
                </p>
              </div>

              <div
                className="border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card)",
                }}
              >
                <p className="text-sm leading-6 text-white/55">
                  Start with a query for reading data, then add a mutation for
                  writes, and expand your schema as your app grows.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center border px-4 py-2 text-sm font-medium transition hover:opacity-90"
                    style={{
                      background: "var(--primary)",
                      color: "#101010",
                      borderColor: "var(--primary)",
                    }}
                  >
                    Back to home
                  </Link>

                  <a
                    href="https://docs.convex.dev/home"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center border px-4 py-2 text-sm font-medium transition hover:bg-white/5"
                    style={{ borderColor: "var(--border)" }}
                  >
                    Open docs
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="border p-4 sm:p-5"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
            }}
          >
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                Build from here
              </p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                Convex essentials
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {steps.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group"
                >
                  <div
                    className="flex h-full flex-col justify-between border p-4 transition hover:-translate-y-0.5"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--card)",
                    }}
                  >
                    <div>
                      <div className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/35">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h2 className="text-lg font-medium">{item.title}</h2>

                      <p className="mt-3 text-sm leading-6 text-white/50">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className="mt-8 flex items-center justify-between border px-3 py-2 text-[11px] uppercase tracking-[0.18em]"
                      style={{
                        borderColor: "var(--border)",
                        background:
                          index === 0
                            ? "var(--primary)"
                            : "rgba(255,255,255,0.02)",
                        color: index === 0 ? "#101010" : "var(--foreground)",
                      }}
                    >
                      <span>{item.cta}</span>
                      <span>↗</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

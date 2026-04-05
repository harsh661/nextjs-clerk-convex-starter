import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const guides = [
  {
    title: "Start with auth",
    description:
      "Sign in with Clerk, protect routes with middleware, and keep your app surface secure from day one.",
    href: "/sign-in",
    cta: "Open sign in",
  },
  {
    title: "Learn queries",
    description:
      "Use Convex queries to read live data in your UI. They re-render automatically when your backend data changes.",
    href: "https://docs.convex.dev/functions/query-functions",
    cta: "Read about queries",
    external: true,
  },
  {
    title: "Learn mutations",
    description:
      "Use mutations to create, update, and delete data. This starter is set up so you can add app logic quickly.",
    href: "https://docs.convex.dev/functions/mutation-functions",
    cta: "Read about mutations",
    external: true,
  },
];

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative mx-auto flex flex-col gap-28 min-h-screen w-full max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
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

        <div className="grid w-full items-end gap-12">
          <div className="">
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
              Next.js · Clerk · Convex Starter
            </div>

            <h1 className="max-w-5xl text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              Build authenticated apps faster with a clean starter for{" "}
              <span className="text-white/55">Next.js, Clerk, and Convex.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              This starter gives you protected routes, auth flows, Convex setup,
              and a clean base structure so you can focus on product logic
              instead of boilerplate. Start with sign-in, add your queries and
              mutations, and grow from there.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center border px-5 py-3 text-sm font-medium transition hover:opacity-90"
                style={{
                  background: "var(--primary)",
                  color: "#101010",
                  borderColor: "var(--primary)",
                }}
              >
                Get started
              </Link>

              <a
                href="https://docs.convex.dev/home"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/5"
                style={{ borderColor: "var(--border)" }}
              >
                Convex docs
              </a>
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
              Getting started
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
              Starter guide
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-medium leading-tight sm:text-3xl">
              Key things this starter helps you set up.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {guides.map((item, index) => {
              const content = (
                <div
                  className="group flex h-full flex-col justify-between border p-4 transition hover:-translate-y-0.5"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card)",
                  }}
                >
                  <div>
                    <div className="mb-6 text-[11px] uppercase tracking-[0.18em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-lg font-medium">{item.title}</h3>

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
              );

              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link key={item.title} href={item.href}>
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

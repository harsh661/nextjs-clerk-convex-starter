import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        layout: {
          socialButtonsPlacement: "top",
        },

        variables: {
          colorPrimary: "var(--primary)",
          borderRadius: "8px",
        },

        elements: {
          headerTitle: `!text-2xl`,
          cardBox: `!shadow-none`,
          card: `!bg-transparent !shadow-none !border-0 !p-4 !m-0`,

          rootBox: "w-full",

          button: `!py-2 !px-3 !text-sm`,

          socialButtonsBlockButtonText: `!text-sm`,

          input: `!py-2 !px-3 !text-sm !max-h-none !bg-[var(--card)]`,
          footer: `!bg-none`,
        },
      }}
    />
  );
}

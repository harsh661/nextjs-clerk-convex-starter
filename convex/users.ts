import { mutation } from "./_generated/server";

export const getOrCreateUser = mutation({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Not authenticated");

    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .unique();

    if (existing) return existing;

    const id = await ctx.db.insert("users", {
      clerkId: identity.subject,
      email: identity.email ?? "",

      plan: "free",
      monitorLimit: 5,

      createdAt: Date.now(),
    });

    return await ctx.db.get(id);
  },
});

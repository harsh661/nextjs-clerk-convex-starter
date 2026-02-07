import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),

    plan: v.string(),
    monitorLimit: v.number(),

    createdAt: v.number(),
  }).index("by_clerkId", ["clerkId"]),

  monitors: defineTable({
    userId: v.id("users"),

    url: v.string(),
    name: v.optional(v.string()),

    active: v.boolean(),

    intervalMinutes: v.number(),

    lastStatus: v.union(
      v.literal("checking"),
      v.literal("up"),
      v.literal("down"),
    ),
    lastCheckedAt: v.optional(v.number()),
    responseTimeMs: v.optional(v.number()),

    consecutiveFailures: v.number(),

    createdAt: v.number(),
  }).index("by_user", ["userId"]),

  checks: defineTable({
    monitorId: v.id("monitors"),

    status: v.union(v.literal("up"), v.literal("down")),

    responseTimeMs: v.optional(v.number()),

    checkedAt: v.number(),
  })
    .index("by_monitor", ["monitorId"])
    .index("by_monitor_time", ["monitorId", "checkedAt"])
    .index("by_time", ["checkedAt"]),

  dailyStats: defineTable({
    monitorId: v.id("monitors"),

    date: v.string(),

    totalChecks: v.number(),
    successChecks: v.number(),
    failureChecks: v.number(),

    uptimePercent: v.number(),

    avgResponseMs: v.optional(v.number()),
    maxResponseMs: v.optional(v.number()),

    totalDowntimeSeconds: v.optional(v.number()),
  })
    .index("by_monitor_date", ["monitorId", "date"])
    .index("by_date", ["date"]),

  alerts: defineTable({
    userId: v.id("users"),
    monitorId: v.id("monitors"),

    type: v.union(v.literal("email"), v.literal("webhook")),

    target: v.string(),

    failureThreshold: v.number(),
    recoveryAlert: v.boolean(),

    enabled: v.boolean(),

    createdAt: v.number(),
  })
    .index("by_monitor", ["monitorId"])
    .index("by_user", ["userId"]),

  alertEvents: defineTable({
    alertId: v.id("alerts"),
    monitorId: v.id("monitors"),

    type: v.union(v.literal("down"), v.literal("recovered")),

    triggeredAt: v.number(),
  })
    .index("by_monitor", ["monitorId"])
    .index("by_alert", ["alertId"]),
});

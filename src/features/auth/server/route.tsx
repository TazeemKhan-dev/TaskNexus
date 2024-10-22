import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { LoginSchema } from "../schemas";

const app = new Hono().post("/login", zValidator("json", LoginSchema), (c) => {
  return c.json({ success: "ok" });
});

export default app;

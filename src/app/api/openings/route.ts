import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/openings.json");
const ADMIN_PASSWORD = process.env.ADMIN_OPENINGS_PASSWORD!;

export async function GET() {
  const data = fs.readFileSync(DATA_PATH, "utf-8");
  return Response.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const { password, openings } = await req.json();

  if (password !== ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  fs.writeFileSync(DATA_PATH, JSON.stringify(openings, null, 2));

  return Response.json({ success: true });
}

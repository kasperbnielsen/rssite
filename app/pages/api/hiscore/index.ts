/*import { serialize, CookieSerializeOptions } from "cookie";
import { NextApiResponse } from "next";

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringvalue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if (typeof options.maxAge === "number") {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.setHeader("Set-Cookie", serialize(name, stringvalue, options));
};*/
import { NextApiResponse, NextApiRequest } from "next";
import hiscores from "osrs-json-hiscores";
import { RSN } from "@/app/Skills/page";

const rsn: RSN = {
  totalLevel: 25,
  name: "heyyy",
};

async function getLevels(user: string) {
  const stats = await hiscores.getStats(user);
  if (stats.main) return rsn;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RSN>
) {
  res.status(200).json(rsn);
}

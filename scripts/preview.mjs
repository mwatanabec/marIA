import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

// Local preview of the GitHub Pages export; supports the existing /marIA base
// path and extensionless page URLs without a production routing change.
const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".png": "image/png", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff": "font/woff", ".woff2": "font/woff2", ".ico": "image/x-icon" };
const server = createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) { response.writeHead(405, { Allow: "GET, HEAD" }); response.end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname); }
  catch { response.writeHead(400); response.end("Invalid URL"); return; }
  if (pathname === "/" || pathname === "/marIA") { response.writeHead(302, { Location: "/marIA/" }); response.end(); return; }
  if (!pathname.startsWith("/marIA/")) { response.writeHead(404); response.end("Not found"); return; }
  const target = resolve(root, pathname.slice("/marIA/".length));
  if (target !== root && !target.startsWith(root + sep)) { response.writeHead(403); response.end(); return; }
  const candidates = [target, target + ".html", resolve(target, "index.html")];
  for (const path of candidates) {
    try {
      if (!(await stat(path)).isFile()) continue;
      const data = await readFile(path);
      response.writeHead(200, { "Content-Type": types[extname(path)] || "application/octet-stream", "Cache-Control": "no-store", "Content-Length": data.length });
      response.end(request.method === "HEAD" ? undefined : data); return;
    } catch { /* Try the next static-export path. */ }
  }
  response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  try { response.end(request.method === "HEAD" ? undefined : await readFile(resolve(root, "404.html"))); }
  catch { response.end("Page not found. Run the production build first."); }
});
server.on("error", error => { console.error(error.message); process.exitCode = 1; });
server.listen(port, "127.0.0.1", () => console.log(`MarIA — prévia local: http://127.0.0.1:${port}/marIA/`));

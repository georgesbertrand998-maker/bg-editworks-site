import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const routes = [
  ["/", "Chaque image"],
  ["/services", "Vos rushes"],
  ["/devis", "première estimation"],
  ["/conditions-de-vente", "Conditions de"],
  ["/mentions-legales", "Mentions"],
  ["/politique-de-confidentialite", "confidentialité"],
];

for (const [pathname, expectedText] of routes) {
  test(`renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(await response.text(), new RegExp(expectedText, "i"));
  });
}

test("renders the branded not-found page", async () => {
  const response = await render("/page-inexistante");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /hors champ/i);
});

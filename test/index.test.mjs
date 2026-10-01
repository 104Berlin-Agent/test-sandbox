import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, "..", "index.html");
const html = readFileSync(indexPath, "utf8");

test("index.html declares the HTML5 doctype", () => {
  assert.match(html, /^<!DOCTYPE html>/i);
});

test("index.html sets a charset", () => {
  assert.match(html, /<meta\s+charset=["']?utf-8["']?/i);
});

test("index.html has the expected title", () => {
  assert.match(html, /<title>\s*Hello Paperclip\s*<\/title>/i);
});

test("index.html has a visible h1 heading", () => {
  const match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  assert.ok(match, "expected an <h1> element");
  assert.match(match[1], /Hello Paperclip/i);
});

# test-sandbox

Test repository for Paperclip agent sandbox checks.

## Hello Paperclip page

`index.html` is a single, self-contained static page with no external
dependencies (no CDN links, stylesheets or JS frameworks). Open it by
double-clicking the file in a browser, or serve it locally with any static
file server.

## Running the test

The test only uses Node.js built-ins (`node:test` and `node:assert`) and needs
no `npm install`:

```sh
node --test
```

Alternatively, via the `package.json` script:

```sh
npm test
```

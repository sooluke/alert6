# Security Policy

## Scope

Scam Alert is a static GitHub Pages website. The project intentionally avoids accounts, passwords, databases and server-side code.

## Reporting a security issue

Do not publish sensitive vulnerability details in a public issue. Contact the site owner through the project's private communication channel or repository security reporting mechanism if enabled.

Do not submit passwords, payment details, personal identity documents or other sensitive information through the scam-report form.

## Security principles

- No secrets or API keys in the public repository.
- Keep third-party scripts to a minimum.
- Treat all report-form input as untrusted.
- Keep CSP and output encoding enabled.
- Review dependencies and GitHub Actions before updating them.
- Keep GitHub Pages HTTPS enforcement enabled.

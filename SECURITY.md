# Security Policy

## Scope

This repository is public. Do not commit secrets, tokens, private keys, customer data, or internal infrastructure details.

## Reporting

If you find a security issue, report it privately to the maintainer instead of opening a public issue.

## Baseline Rules

- Store runtime configuration in Amplify environment variables, not in source control.
- Use least-privilege IAM roles for any AWS resource connected later.
- Keep preview and production environments logically separated.
- Review pull requests before merging to `main`.
- Rotate any credential immediately if it is exposed, even temporarily.

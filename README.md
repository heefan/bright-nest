
## Trobuleshoot


If husky does not work well, and give this error

✖ No valid configuration found.
husky - pre-commit script failed (code 1)


you need to install `pnpm insstall -D lint-staged`
and
git config --unset --local core.hookspath

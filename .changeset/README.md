# Changesets

Describe a change for the changelog with `pnpm changeset`, pick the packages and the kind of bump, and commit the file
it writes here. On `main`, the release workflow turns pending changesets into a "Version packages" pull request; merging
it publishes to npm. All packages share one version.

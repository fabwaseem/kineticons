# Changesets

Describe a change for the changelog with `pnpm changeset`, pick the packages and the kind of bump, and commit the file
it writes here. When it reaches `main`, the release workflow applies it (bumps the versions, writes the changelogs, commits that
back) and publishes the new versions to npm. All packages share one version.

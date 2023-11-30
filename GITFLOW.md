
# Git Workflow Documentation for Pokedex Project

## Overview
This document outlines the Git workflow adopted for our project development. This workflow is designed to enhance code management, facilitate code reviews, and maintain a clear, organized change history.

## Branches and Their Purpose

### `main` Branch
- **Purpose**: Represents the current state of the product in production.
- **Flow**: Updated only through Pull Requests (PRs) from the `develop` branch.
- **Management**: Direct commits to this branch are not permitted.

### `develop` Branch
- **Purpose**: Serves as an integration branch for features and fixes ready for testing.
- **Flow**: Updated via PRs from various development branches, preferably `task/` or `issue/`.
- **Management**: Direct commits to this branch are generally not permitted, except for updating the version in [package.json](package.json) as part of the release preparation process. This is the only circumstance under which direct commits are allowed on this branch.

### Development Branches (`task/`, `issue/`, etc.)
- **Purpose**:
  - `task/`: For general development tasks.
  - `issue/`: For working on specific issues or problems.
  - Other free-form names can be chosen as appropriate.
- **Flow**: Developers freely commit to these branches. Once complete, a PR is created towards `develop`.

## Workflow Process

### Starting a New Task or Issue
- Create a new branch from `develop`. Recommended prefixes are `task/` or `issue/`, but others can be chosen as needed.

### Development and Commits
- Regularly commit to your branch, ensuring each commit is atomic and follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines.

### Creating a Pull Request (PR)
- Once development on the branch is complete, create a PR towards `develop`.

### Updating `develop`
- Once approved, merge the PR into `develop`.
- **Automated Actions**: On opening or synchronizing a PR in `develop` or `main`, [pr-validation](.github/workflows/pr-validation.yml) workflow is triggered to ensure code integrity and standards.

### Preparing for Release
- Update the version in [package.json](package.json) in `develop` according to the upcoming release before creating a PR to `main`. Follow [Semantic Versioning guidelines](https://semver.org/) for version updates.
- Create a new PR from `develop` to `main`.

### Release and Tagging
- After merging `develop` into `main`, [create-draft-release](.github/workflows/create-draft-release.yml) workflow is triggered for PR closure in `main`.
- This action creates a draft release and tags the commit, using the version number from [package.json](package.json).

## Final Steps: Publishing the Release and Starting a New Cycle

### Publishing the Release
- Once the draft release is created and tagged, review the release notes and finalize any additional documentation or metadata.
- Manually publish the release from the draft state. This marks the official release of the new version to production.

### Starting a New Development Cycle
- After the release, developers should pull the latest changes from `main` into their local repositories and update or create new development branches (`task/`, `issue/`, etc.) from the updated `develop` branch.


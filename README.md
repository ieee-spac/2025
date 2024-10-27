<div align="center">
  <h1>
    <a href="https://ieeespac.ca">SPAC 2024 Website</a>
  </h1>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white" alt="Conventional Commits">
  </a>
  <a href="http://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen friendly">
  </a>
  <a href="https://semantic-release.gitbook.io/semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square" alt="Semantic Release">
  </a>
  <a href="https://github.com/antfu/eslint-config">
    <img src="https://antfu.me/badge-code-style.svg" alt="Code Style">
  </a>
  <a href="https://github.com/storybooks/storybook">
    <img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" alt="Storybook">
  </a>
  <img src="https://img.shields.io/github/repo-size/ieee-spac/2024" alt="Repo Size">
  <a href="https://github.com/tophat/getting-started/blob/master/scorecard.md">
    <img src="https://img.shields.io/badge/Maturity-Level%201%20--%20New%20Project-yellow.svg" alt="Maturity badge - level 1">
  </a>

</div>

  <hr/>

<div align="center">
  <a href="https://github.com/ieee-spac/2024">
    <img
      src="https://github.com/user-attachments/assets/137af3c0-f78b-478f-ba88-853562e26bba"
      alt="IEEE SPAC 2024 Platform"
    />
  </a>
</div>

<table align="center">
  <tr>
    <th align="center">
      <a
        href="https://main--665264891b6bc70eded9109a.chromatic.com"
        ><strong>Storybook</strong></a
      >
    </th>
    <th align="center">
      <a
        href="https://www.figma.com/community/file/1417704325784085062/ieee-spac-2024-twilight-design-system"
        ><strong>Figma</strong></a
      >
    </th>
    <th align="center">
      <a href="https://github.com/ieee-spac/2024"><strong>Source</strong></a>
    </th>
    <th align="center">
      <a href="https://github.com/orgs/ieee-spac/projects/4"
        ><strong>Project Board</strong></a
      >
    </th>
  </tr>
  <tr>
    <td align="center">
      <a
        href="https://main--665264891b6bc70eded9109a.chromatic.com"
      >
        <img
          src="https://github.com/user-attachments/assets/9a82999d-56aa-4117-ad5d-647a2252cefd"
          alt="Storybook"
        />
      </a>
    </td>
    <td align="center">
      <a
        href="https://www.figma.com/community/file/1417704325784085062/ieee-spac-2024-twilight-design-system"
      >
        <img
          src="https://github.com/user-attachments/assets/c6ec02bf-2512-48e3-ad71-fd6b70d9657b"
          alt="Figma"
        />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ieee-spac/2024">
        <img
          src="https://github.com/user-attachments/assets/734fc061-84bd-457f-b9fa-a0b7a078aded"
          alt="Source"
        />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/orgs/ieee-spac/projects/4">
        <img
          src="https://github.com/user-attachments/assets/86ed0680-d716-4e2f-b324-92efcb54a502"
          alt="Project Board"
        />
      </a>
    </td>
  </tr>
</table>

## Setup Guide

This [Next.js](https://nextjs.org) project uses [pnpm](https://pnpm.io/) for package management.

The UI is powered by the Twilight Design System, built upon the following libraries:

- [Aceternity UI](https://ui.aceternity.com)
- [Magic UI](https://magicui.design/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

UI/UX documentation is done in [Figma](https://figma.com) and [Storybook](https://storybook.js.org/).

The contact form is powered by [Resend](https://resend.com/).

The website is deployed on [Vercel](vercel.com/), and the Storybook app is deployed to [Chromatic](https://www.chromatic.com/).

All commands can be found in `package.json`.

### 1. Clone repo

```sh
git clone https://github.com/ieee-spac/2024
```

### 2. Install [Node.js](https://nodejs.org/en) V20+

### 3. Install [pnpm](https://pnpm.io/)

### 4. Install dependencies

```sh
### Navigate into directory first
cd 2024
### Install
pnpm i
```

### 4. Run servers

```sh
pnpm dev ### Website
```

```sh
pnpm sb ### Storybook
```

```sh
pnpm lint:inspect-open ### ESlint config inspector
```

### Optional

#### Use Commitizen CLI

```sh
pnpm cz
```

#### Generate static builds for deployments

Create `.env` file based on `.env.example` template.

```sh
cp .env.example .env
```

- Obtain [Resend](https://resend.com) API key to get contact form working
- Obtain [Chromatic](https://www.chromatic.com) API key to publish Storybook to Chromatic.

```sh
pnpm build ### Website
pnpm build-storybook ### Storybook
```

#### Serve static build

```sh
pnpm start
```

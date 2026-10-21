# Workbench — AI-assisted coding exercise

A small issue tracker built with React, TypeScript, and Vite. The app already displays twelve sample issues. Your task is to add search and status filtering.

## Start the app

Requires Node.js 22.12+ and npm. If you use nvm, run `nvm install` first.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No accounts, API keys, backend, or environment variables are needed.

## Your task

Add controls above the issue list so users can:

- Search issues by title using a case-insensitive substring match. Ignore leading and trailing whitespace; an empty search shows all titles.
- Filter by **All statuses**, **Open**, **In progress**, or **Done**. Default to all statuses.
- Combine search and status filtering: an issue must match both controls to appear.
- See a clear empty state when no issues match, with an easy way to reset the controls.
- See the number of matching issues out of the total.

Keep the controls labeled and usable with a keyboard. Preserve the sample data order. Search should update as the user types. Choose styling that fits the existing page; visual polish is secondary to working behavior.

Use AI as you normally would, including an editor assistant, agent, or chat tool. You can consult documentation and add dependencies if useful. Be prepared to explain the code you submit, how you checked it, and any AI output you corrected.

Aim to finish the core behavior within 30–35 minutes. We will reserve time to review the implementation together. If time runs short, explain what remains.

## Code map

- `src/App.tsx` — issue page and list rendering; start here.
- `src/issues.ts` — issue types, labels, and sample data.
- `src/styles.css` — existing styling and responsive layout.
- `src/main.tsx` — app entry point.

## Check your work

```sh
npm run typecheck
npm run build
```

Also check behavior in the browser. There is no preconfigured test runner; you may add tests if they help you demonstrate correctness.

You do not need to implement authentication, API calls, pagination, or issue editing. Ask the interviewer about any ambiguous requirements.

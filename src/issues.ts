export type IssueStatus = "open" | "in-progress" | "done";
export type IssuePriority = "low" | "medium" | "high";

export interface Issue {
  id: string;
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  assignee: string | null;
}

export const statusLabels: Record<IssueStatus, string> = {
  open: "Open",
  "in-progress": "In progress",
  done: "Done",
};

export const issues: Issue[] = [
  {
    id: "WB-101",
    title: "Fix login redirect on expired sessions",
    description: "Return people to their original page after they sign in again.",
    status: "open",
    priority: "high",
    assignee: "Maya Chen",
  },
  {
    id: "WB-102",
    title: "Add keyboard navigation to project menu",
    description: "Support arrow keys and Escape in the project switcher.",
    status: "in-progress",
    priority: "high",
    assignee: "Alex Rivera",
  },
  {
    id: "WB-103",
    title: "Update billing email copy",
    description: "Clarify when the next invoice will be sent.",
    status: "done",
    priority: "low",
    assignee: "Sam Patel",
  },
  {
    id: "WB-104",
    title: "Improve search performance for large projects",
    description: "Reduce the time needed to retrieve project records.",
    status: "open",
    priority: "medium",
    assignee: null,
  },
  {
    id: "WB-105",
    title: "Fix mobile layout on settings page",
    description: "Prevent account settings from overflowing on narrow screens.",
    status: "in-progress",
    priority: "medium",
    assignee: "Maya Chen",
  },
  {
    id: "WB-106",
    title: "Add CSV export for weekly reports",
    description: "Let workspace owners download a summary of team activity.",
    status: "open",
    priority: "medium",
    assignee: "Jordan Lee",
  },
  {
    id: "WB-107",
    title: "Show helpful message when upload fails",
    description: "Explain supported file formats and allow another attempt.",
    status: "done",
    priority: "medium",
    assignee: "Alex Rivera",
  },
  {
    id: "WB-108",
    title: "Fix LOGIN button contrast in dark mode",
    description: "Make the primary sign-in action easier to read.",
    status: "done",
    priority: "high",
    assignee: "Sam Patel",
  },
  {
    id: "WB-109",
    title: "Add project archive confirmation",
    description: "Explain the effect of archiving before a project is hidden.",
    status: "open",
    priority: "low",
    assignee: null,
  },
  {
    id: "WB-110",
    title: "Support longer workspace names",
    description: "Keep the sidebar readable when a workspace has a long name.",
    status: "in-progress",
    priority: "low",
    assignee: "Jordan Lee",
  },
  {
    id: "WB-111",
    title: "Fix duplicate notifications after reconnect",
    description: "Avoid showing the same activity twice after a connection is restored.",
    status: "open",
    priority: "high",
    assignee: "Alex Rivera",
  },
  {
    id: "WB-112",
    title: "Document the release checklist",
    description: "Add a login smoke check and rollback steps to the internal guide.",
    status: "done",
    priority: "low",
    assignee: "Maya Chen",
  },
];

import { issues, statusLabels } from "./issues";

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Workbench home">
          <span className="brand-mark" aria-hidden="true">
            w
          </span>
          Workbench
        </a>
        <span className="workspace-name">Product workspace</span>
      </header>

      <main>
        <div className="page-heading">
          <div>
            <p className="eyebrow">PROJECT / WORKBENCH</p>
            <h1>Issues</h1>
            <p className="subtitle">The little things that make a better product.</p>
          </div>
          <span className="total-count">{issues.length} issues</span>
        </div>

        {/* Add the search and status controls here. */}

        <section className="issue-panel" aria-label="Project issues">
          <div className="panel-heading">
            <h2>All issues</h2>
            <span>Product team</span>
          </div>
          <ul className="issue-list">
            {issues.map((issue) => (
              <li className="issue-row" key={issue.id}>
                <span className={`status-dot status-${issue.status}`} aria-hidden="true" />
                <div className="issue-content">
                  <div className="issue-title-line">
                    <span className="issue-id">{issue.id}</span>
                    <h3>{issue.title}</h3>
                  </div>
                  <p className="issue-description">{issue.description}</p>
                  <div className="issue-meta">
                    <span className={`status-label status-${issue.status}`}>
                      {statusLabels[issue.status]}
                    </span>
                    <span className="meta-divider" aria-hidden="true">
                      ·
                    </span>
                    <span>{issue.assignee ?? "Unassigned"}</span>
                  </div>
                </div>
                <span className={`priority priority-${issue.priority}`}>
                  {issue.priority} priority
                </span>
              </li>
            ))}
          </ul>
        </section>
        <footer className="page-footer">A small workspace for work in progress.</footer>
      </main>
    </div>
  );
}

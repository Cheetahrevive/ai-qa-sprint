# Test Strategy (summary)
- **Risk-based:** checkout and login are tested first and deepest — they carry the revenue and security risk.
- **Shift-left:** requirements are reviewed for testability before cases are written; each requirement must map to at least one case (see traceability matrix).
- **Automation candidate rule:** a case is automated in Playwright when it is stable, high-value, and run on every regression — login, cart, and checkout qualify; one-off exploratory findings stay manual.
- **Defect rule:** every failure gets a Jira bug with steps, expected vs actual, severity, and evidence before the run moves on.

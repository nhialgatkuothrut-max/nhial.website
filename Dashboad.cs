/* Base Variables & Reset */
:root {
  --bg-primary: #f4f6f9;
  --bg-surface: #ffffff;
  --text-main: #2b3674;
  --text-muted: #a3eed6;
  --accent-color: #4318ff;
  --border-radius: 12px;
  --transition-speed: 0.3s;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-main);
  height: 100vh;
  overflow: hidden;
}

/* Master Grid Structure */
.dashboard-container {
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 100vh;
  width: 100vw;
}

/* Sidebar Styling */
.sidebar {
  background-color: var(--bg-surface);
  border-right: 1px solid #e0e5f2;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 3rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #8f9bba;
  padding: 0.8rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: all var(--transition-speed);
}

.nav-links a:hover, .nav-links a.active {
  background-color: #f4f7fe;
  color: var(--accent-color);
}

/* Main Body & Flex Layout */
.main-body {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

/* Top Header Bar */
.header {
  background-color: var(--bg-surface);
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px solid #e0e5f2;
}

.search-bar input {
  padding: 0.6rem 1rem;
  border-radius: 20px;
  border: 1px solid #e0e5f2;
  background-color: var(--bg-primary);
  outline: none;
  width: 250px;
}

.user-name {
  font-weight: 600;
}

/* Main Workspace Padding */
.content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Summary Cards Grid layout */
.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: var(--bg-surface);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(112, 144, 176, 0.08);
}

.card h3 {
  font-size: 0.9rem;
  color: #8f9bba;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.trend {
  font-size: 0.8rem;
  font-weight: 600;
}

.trend.positive { color: #01b574; }
.trend.negative { color: #ee5d50; }

/* Complex Data Panel Layout Split */
.data-panels {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  min-height: 350px;
}

.panel {
  background-color: var(--bg-surface);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(112, 144, 176, 0.08);
}

.placeholder-graph {
  background: linear-gradient(180deg, #f4f7fe 0%, rgba(244, 247, 254, 0) 100%);
  height: calc(100% - 2rem);
  margin-top: 1rem;
  border-radius: 8px;
  border: 1px dashed #cbd5e1;
}

.activity-list {
  list-style: none;
  margin-top: 1rem;
}

.activity-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #f4f7fe;
  font-size: 0.9rem;
}

/* 3. Mobile Responsiveness */
@media (max-width: 992px) {
  .dashboard-container {
    grid-template-columns: 1fr; /* Stack sidebar and body */
  }

  .sidebar {
    display: none; /* Hide sidebar entirely or use JS toggle */
  }

  .data-panels {
    grid-template-columns: 1fr; /* Stack main panels vertically */
  }
}

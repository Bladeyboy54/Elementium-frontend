import React from "react";

interface GridWrapperProps {
  sidebar?: React.ReactNode; // Sidebar can be optional
  children: React.ReactNode; // Routed screen
}

const GridWrapper: React.FC<GridWrapperProps> = ({ sidebar, children }) => {
  return (
    <div style={styles.gridContainer}>
      {sidebar && <div style={styles.sidebar}>{sidebar}</div>}
      <div style={styles.mainContent}>{children}</div>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "minmax(250px, 250px) 1fr",
    height: "100vh",
  },
  sidebar: {
    borderRight: "1px solid #241F29",
    maxWidth: "200px",
    padding: "20px",
  },
  mainContent: {
    padding: "20px",
  },
};

export default GridWrapper;

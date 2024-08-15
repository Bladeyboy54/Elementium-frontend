import React from "react";

interface GridWrapperProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

const GridWrapper: React.FC<GridWrapperProps> = ({ sidebar, children }) => {
  return (
    <div style={styles?.gridContainer}>
      {sidebar && <div style={styles.sidebar}>{sidebar}</div>}
      <div style={styles?.body}>{children}</div>
    </div>
  );
};

const styles: {
  gridContainer: React.CSSProperties;
  sidebar: React.CSSProperties;
  body: React.CSSProperties;
} = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "minmax(250px, 250px) 1fr",
    height: "100vh",
  },
  sidebar: {
    borderRight: "1px solid #241F29",
    padding: "20px",
  },
  body: {
    padding: "20px",
    height: "-webkit-fill-available",
    overflowY: "clip",
  },
};

export default GridWrapper;

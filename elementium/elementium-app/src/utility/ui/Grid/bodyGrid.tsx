import React from "react";

interface BodyWrapperProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

const BodyGridWrapper: React.FC<BodyWrapperProps> = ({ sidebar, children }) => {
  return <div style={styles.bodyGridContainer}>{children}</div>;
};

const styles: { bodyGridContainer: React.CSSProperties } = {
  bodyGridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr minmax(450px, 450px)",
    height: "calc(100% - 28.8px)",
    columnGap: "20px",
    // overflowY: "auto",
  },
};

export default BodyGridWrapper;

import React, { useEffect } from "react";
import { useAuth } from "../../global/auth/authProvider";

interface GridWrapperProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

const GridWrapper: React.FC<GridWrapperProps> = ({ sidebar, children }) => {
  const { isAuthenticated } = useAuth();
  const viewportHeight = window.innerHeight;
  useEffect(() => {
    console.log("viewport: " + viewportHeight);
  }, []);
  return (
    <div className="app">
      {isAuthenticated ? (
        <div className="app-grid" style={styles?.gridContainer}>
          {sidebar && (
            <div className="app-grid-sidebar" style={styles.sidebar}>
              {sidebar}
            </div>
          )}
          <div
            className="app-grid-wrap"
            style={{ padding: "40px", overflowY: "scroll" }}
          >
            {/* <>{isAuthenticated}</> */}
            {children}
          </div>
        </div>
      ) : (
        <div className="app-no-grid">{children}</div>
      )}
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
    width: "100vw",
    overflow: "hidden",
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

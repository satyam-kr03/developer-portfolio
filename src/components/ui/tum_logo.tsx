import React from "react";

const TUMLogo = ({ fontSize = "inherit" }) => {
  const styles = {
    container: {
      display: "inline",
      fontSize: fontSize,
    },
    blue: { color: "#a9cee8" },
    red: { color: "#EA4335" },
    yellow: { color: "#FBBC05" },
    green: { color: "#34A853" },
  };

  return (
    <span style={styles.container}>
      <span style={styles.blue}> Technical University of Munich </span>
      {/* <span style={styles.blue}>U</span>
      <span style={styles.blue}>M</span> */}
    </span>
  );
};

export default TUMLogo;

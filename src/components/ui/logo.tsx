import React from "react";

const GoogleLogo = ({ fontSize = "inherit" }) => {
  const styles = {
    container: {
      display: "inline",
      fontSize: fontSize,
    },
    blue: { color: "#4285F4" },
    red: { color: "#EA4335" },
    yellow: { color: "#FBBC05" },
    green: { color: "#34A853" },
  };

  return (
    <span style={styles.container}>
      <span style={styles.blue}>G</span>
      <span style={styles.red}>o</span>
      <span style={styles.yellow}>o</span>
      <span style={styles.blue}>g</span>
      <span style={styles.green}>l</span>
      <span style={styles.red}>e</span>
    </span>
  );
};

export default GoogleLogo;

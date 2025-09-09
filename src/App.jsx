
import React from "react";
import image from "./assets/image.png";

export default function App() {
  const studentName = "Pedro Kelvin Pezarini do Valle";
  const course = "SISTEMAS DE INFORMAÇÃO";
  const expiry = "31/03/2026";
  // Consulta de data e hora atual de Brasília
  const consulted = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour12: false,
  });

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Validação da Carteirinha Estudantil</h1>

        <div style={styles.label}>Aluno(a)</div>
        <div style={styles.name}>{studentName}</div>

        <div style={styles.label}>Curso</div>
        <div style={styles.course}>{course}</div>

        <div style={styles.expiry}>{expiry}</div>

        <div style={{ marginTop: 28, marginBottom: 8, width: 120, display: "flex", justifyContent: "center" }}>
          <img
            src={image}
            alt="PUC Campinas logo"
            style={{ width: "100px", height: "auto", objectFit: "contain" }}
          />
        </div>

        <div style={styles.consult}>Consulta feita: {consulted}</div>
      </div>
      <div style={{ width: "100%", borderTop: "1px solid #e0e0e0" }} />
      <div style={styles.footer}>© - PUC Campinas</div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#222",
  },
  container: {
    maxWidth: 560,
    width: "100%",
    paddingTop: 28,
    paddingBottom: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 18px",
    marginBottom: 6,
    color: "#111",
  },
  time: { fontSize: 14 },
  signal: { fontSize: 14 },
  title: {
    fontSize: 22,
    margin: "12px 0 26px",
    fontWeight: 600,
  },
  label: {
    color: "#666",
    marginTop: 8,
    marginBottom: 6,
  },
  name: {
    textAlign: "center",
    color: "#082a9a",
    fontSize: 44,
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: 1.2,
    padding: "0 12px",
  },
  course: {
    fontSize: 18,
    fontWeight: 600,
    color: "#1f1f1f",
  },
  expiry: {
    marginTop: 12,
    fontSize: 16,
    color: "#222",
  },
  consult: {
    marginTop: 18,
    color: "#333",
    fontSize: 14,
  },
  footer: {
    marginTop: 32,
    color: "#8a8a8a",
    fontSize: 14,
  },
  browserBottom: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 8,
    display: "flex",
    justifyContent: "center",
  },
  urlBar: {
    width: 360,
    borderRadius: 14,
    background: "#ffffff",
    padding: "10px 14px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.09)",
    textAlign: "center",
    fontSize: 15,
    color: "#111",
  },
};

import Logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const [qrValue1, setQrValue1] = useState("https://doa.gov.tr");
  const [qrValue2, setQrValue2] = useState("https://doa.gov.tr");
  const [qrValue3, setQrValue3] = useState("fatih");
  return (
    <div className="App">
      <header
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        className="App-header"
      >
        {/* İlk QR Kod Alanı */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <QRCode level="H" value={qrValue1} size={200} />
          <img
            src={Logo}
            alt="Logo"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "50px",
              height: "50px",
              transform: "translate(-50%, -50%)",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          />
        </div>
        <textarea
          
          type="text"
          value={qrValue1}
          onChange={(e) => setQrValue1(e.target.value)}
          placeholder="QR kod içeriğini girin"
          style={{ padding: "10px", fontSize: "16px", width: "300px" }}
        />

        {/* İkinci QR Kod Alanı */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <QRCode value={qrValue2} size={200} />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "40px",
              height: "40px",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
            }}
          >
            <QRCode style={{ marginTop: 5 }} value={qrValue3} size={30} />
          </div>
        </div>
        <textarea

          type="text"
          value={qrValue2}
          onChange={(e) => setQrValue2(e.target.value)}
          placeholder="QR kod içeriğini girin"
          style={{ padding: "10px", fontSize: "16px", width: "300px" }}
        />

        <textarea
          type="text"
          value={qrValue3}
          onChange={(e) => setQrValue3(e.target.value)}
          placeholder="QR kod içeriğini girin"
          style={{ padding: "10px", fontSize: "16px", width: "300px" }}
        />
      </header>
    </div>
  );
}

export default App;

import Logo from "./logo.svg";
import "./App.css";
import QRCode from "react-qr-code";
import { useState } from "react";

function App() {
  const defaultText = `ÜBS Kodu: 355 T656 6M78 9784
Ticari Ürün Numarası : 8690105000382
Ürün Adı: Çaykur Rize Turist Çay 1.000 g
Üretici: Çay İşletmeleri Genel Müd.
İşletme Kayıt No: TR-53-K-000228
Ürün Sınıf Kodu: 289P78745

ÜBS Link: Web-Sitesi-Linki`;

  const [qrValue1, setQrValue1] = useState(defaultText);
  const [qrValue2, setQrValue2] = useState(defaultText);
  const [qrValue3, setQrValue3] = useState(
    "3ff08e0c-3c73-49fd-b3a8-fa92aad9658f"
  );

  const primaryColor = "black";
  const secondaryColor = "black";
  const lightGray = "#f8f9fa";
  const darkGray = "#495057";
  const white = "#ffffff";

  // Stil tanımlamaları
  const pageStyle = {
    backgroundColor: lightGray,
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    color: darkGray,
    padding: "40px 20px",
  };

  const headerStyle = {
    marginBottom: "40px",
    textAlign: "center",
  };

  const mainContainerStyle = {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyle = {
    flex: "1 1 450px",
    backgroundColor: white,
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s ease",
    margin: "10px",
    minWidth: "320px",
  };

  const cardTitleStyle = {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "20px",
    color: primaryColor,
  };

  const qrContainerStyle = {
    position: "relative",
    display: "inline-block",
    marginTop: "10px",
    marginBottom: "30px",
    padding: "25px",
    backgroundColor: white,
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
  };

  const labelStyle = {
    fontWeight: "500",
    fontSize: "14px",
    marginBottom: "8px",
    color: darkGray,
    alignSelf: "flex-start",
  };

  const textareaStyle = {
    padding: "12px 16px",
    fontSize: "14px",
    width: "94%",
    borderRadius: "8px",
    border: "1px solid #dee2e6",
    resize: "vertical",
    fontFamily: "inherit",
    marginBottom: "15px",
    transition: "border-color 0.2s ease",
    outline: "none",
  };

  const largeTextareaStyle = {
    ...textareaStyle,
    height: "180px",
  };

  const contentGroupStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "20px",
  };

  return (
    <div className="App" style={pageStyle}>
      <div style={mainContainerStyle}>
        {/* Regular QR Code Card */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Regular QR Code</div>
          <div style={qrContainerStyle}>
            <QRCode
              level="H"
              value={qrValue1}
              size={220}
              bgColor={white}
              fgColor={primaryColor}
            />
            <img
              src={Logo}
              alt="Logo"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "55px",
                height: "55px",
                transform: "translate(-50%, -50%)",
                borderRadius: "10px",
                backgroundColor: white,
                padding: "5px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <div style={contentGroupStyle}>
            <label style={labelStyle}>Content</label>
            <textarea
              value={qrValue1}
              onChange={(e) => setQrValue1(e.target.value)}
              placeholder="QR kod içeriğini girin"
              style={largeTextareaStyle}
            />
          </div>
        </div>

        {/* Secure QR Code Card */}
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Secure QR Code</div>
          <div style={qrContainerStyle}>
            <QRCode
              value={qrValue2}
              size={220}
              bgColor={white}
              fgColor={secondaryColor}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "48px",
                height: "48px",
                transform: "translate(-50%, -50%)",
                backgroundColor: white,
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <QRCode value={qrValue3} size={34} fgColor={secondaryColor} />
            </div>
          </div>

          <div style={contentGroupStyle}>
            <label style={labelStyle}>Content</label>
            <textarea
              value={qrValue2}
              onChange={(e) => setQrValue2(e.target.value)}
              placeholder="QR kod ana içeriğini girin"
              style={largeTextareaStyle}
            />
          </div>

          <div style={contentGroupStyle}>
            <label style={labelStyle}>Secure</label>
            <textarea
              value={qrValue3}
              onChange={(e) => setQrValue3(e.target.value)}
              placeholder="Güvenlik kodunu girin"
              style={{ ...textareaStyle, height: "60px" }}
            />
          </div>
        </div>
      </div>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "14px",
          color: "#6c757d",
        }}
      >
        © 2025 QR Kod Oluşturucu | Modern tasarım
      </footer>
    </div>
  );
}

export default App;

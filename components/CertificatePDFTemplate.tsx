import React from "react";
import { CertificateData } from "@/types/certificate";

interface CertificatePDFTemplateProps {
  certificate: CertificateData;
}

export const CertificatePDFTemplate: React.FC<CertificatePDFTemplateProps> = ({
  certificate,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "210mm",
        height: "297mm",
        background: "white",
        fontFamily: "'Times New Roman', serif",
        fontSize: "16px",
        lineHeight: 1.4,
      }}
    >
      {/* Geometric Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Top geometric shapes */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "320px",
            height: "320px",
            opacity: 0.2,
          }}
        >
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <polygon
              points="0,100 50,0 150,0 200,100 150,200 50,200"
              fill="#14B8A6"
            />
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "80px",
            width: "240px",
            height: "240px",
            opacity: 0.25,
          }}
        >
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <polygon
              points="100,0 200,50 200,150 100,200 0,150 0,50"
              fill="#F59E0B"
            />
          </svg>
        </div>

        {/* Bottom geometric shapes */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            opacity: 0.2,
          }}
        >
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <polygon
              points="0,100 50,0 150,0 200,100 150,200 50,200"
              fill="#14B8A6"
            />
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "80px",
            width: "240px",
            height: "240px",
            opacity: 0.25,
          }}
        >
          <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
            <polygon
              points="100,0 200,50 200,150 100,200 0,150 0,50"
              fill="#F59E0B"
            />
          </svg>
        </div>
      </div>

      {/* Main Border */}
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: "4px solid #F59E0B",
          background:
            "linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 50%, #F0FDFA 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "8px",
            border: "2px solid #14B8A6",
          }}
        >
          {/* Header Logos Area */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "32px",
              paddingBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
              {/* Left Logo */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#DCFCE7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #16A34A",
                }}
              >
                <span
                  style={{
                    color: "#16A34A",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  VC
                </span>
              </div>

              {/* Center Logo */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "96px",
                    height: "64px",
                    background: "#DC2626",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    2000
                  </span>
                </div>
              </div>

              {/* Right Logo */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "#FED7AA",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #EA580C",
                }}
              >
                <div style={{ color: "#EA580C", fontSize: "32px" }}>🔥</div>
              </div>
            </div>
          </div>

          {/* Certificate Title */}
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#991B1B",
                letterSpacing: "0.2em",
                marginBottom: "16px",
                fontFamily: "'Times New Roman', serif",
                margin: "0 0 16px 0",
              }}
            >
              GIẤY CHỨNG NHẬN
            </h1>

            {/* Banner */}
            <div
              style={{
                position: "relative",
                margin: "0 auto",
                width: "75%",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  background: "#14B8A6",
                  color: "white",
                  padding: "16px 32px",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    fontFamily: "'Times New Roman', serif",
                    margin: 0,
                  }}
                >
                  THAM GIA THIỆN NGUYỆN
                </h2>
                {/* Left banner edge */}
                <div
                  style={{
                    position: "absolute",
                    left: "-16px",
                    top: 0,
                    width: 0,
                    height: 0,
                    borderTop: "20px solid transparent",
                    borderBottom: "20px solid transparent",
                    borderRight: "16px solid #0F766E",
                  }}
                ></div>
                {/* Right banner edge */}
                <div
                  style={{
                    position: "absolute",
                    right: "-16px",
                    top: 0,
                    width: 0,
                    height: 0,
                    borderTop: "20px solid transparent",
                    borderBottom: "20px solid transparent",
                    borderLeft: "16px solid #0F766E",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: "0 64px", textAlign: "center" }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "32px",
                color: "#374151",
                fontFamily: "'Times New Roman', serif",
                margin: "0 0 32px 0",
              }}
            >
              DỰ ÁN NUÔI EM XÁC NHẬN:
            </p>

            {/* Name */}
            <h3
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "#991B1B",
                marginBottom: "24px",
                fontFamily: "'Times New Roman', serif",
                fontStyle: "italic",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                margin: "0 0 24px 0",
              }}
            >
              {certificate.name}
            </h3>

            {/* Date of Birth */}
            <p
              style={{
                fontSize: "20px",
                marginBottom: "48px",
                color: "#1F2937",
                fontFamily: "'Times New Roman', serif",
                margin: "0 0 48px 0",
              }}
            >
              Sinh ngày {certificate.dob}
            </p>

            {/* Participation Text */}
            <p
              style={{
                fontSize: "24px",
                color: "#B91C1C",
                marginBottom: "64px",
                lineHeight: 1.6,
                fontWeight: 600,
                fontFamily: "'Times New Roman', serif",
                fontStyle: "italic",
                margin: "0 0 64px 0",
              }}
            >
              Đã tham gia là tình nguyện viên hỗ trợ Dự án Nuôi Em
              <br />
              Từ tháng {certificate.time_join} đến tháng{" "}
              {certificate.time_leave}
            </p>
          </div>

          {/* Footer */}
          <div
            style={{
              position: "absolute",
              bottom: "32px",
              left: 0,
              right: 0,
              padding: "0 64px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              {/* Left side - Seal */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    background: "black",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <span
                    style={{
                      color: "#F59E0B",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    NL
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      color: "#F59E0B",
                      fontSize: "24px",
                      marginRight: "8px",
                    }}
                  >
                    🌿
                  </div>
                  <div
                    style={{
                      color: "#F59E0B",
                      fontSize: "24px",
                      marginLeft: "8px",
                    }}
                  >
                    🌿
                  </div>
                </div>
              </div>

              {/* Right side - Signature */}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "18px",
                    marginBottom: "8px",
                    fontFamily: "'Times New Roman', serif",
                    margin: "0 0 8px 0",
                  }}
                >
                  Hà Nội, ngày {certificate.issuedDate}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    marginBottom: "32px",
                    fontFamily: "'Times New Roman', serif",
                    margin: "0 0 32px 0",
                  }}
                >
                  {certificate.issuerName}
                </p>

                {/* Signature Box */}
                <div
                  style={{
                    width: "128px",
                    height: "64px",
                    border: "2px solid #DC2626",
                    marginBottom: "16px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#DC2626", fontSize: "12px" }}>
                    SIGNATURE
                  </span>
                </div>

                <div
                  style={{ borderTop: "2px solid black", paddingTop: "8px" }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      fontFamily: "'Times New Roman', serif",
                      margin: 0,
                    }}
                  >
                    Trưởng nhóm
                    <br />
                    {certificate.organizationName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

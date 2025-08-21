import React from "react";
import { CertificateData } from "@/types/certificate";

interface VietnameseCertificatePDFTemplateProps {
  data: CertificateData;
}

export const VietnameseCertificatePDFTemplate: React.FC<
  VietnameseCertificatePDFTemplateProps
> = ({ data }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "1400px",
        height: "990px",
        backgroundColor: "white",
        fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        overflow: "hidden",
        border: "2px solid #e5e7eb",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Background - simplified for PDF */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #fef3c7 0%, #ffffff 50%, #ecfdf5 100%)",
          opacity: 0.5,
        }}
      />

      {/* Decorative border */}
      <div
        style={{
          position: "absolute",
          inset: "20px",
          border: "4px solid #dc2626",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "12px",
            border: "2px solid #059669",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* Main Content Container */}
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "40px 60px",
            }}
          >
            {/* Header Section */}
            <div style={{ flexShrink: 0 }}>
              {/* Title Banner - text-based for PDF */}
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <div
                  style={{
                    background: "linear-gradient(45deg, #dc2626, #b91c1c)",
                    color: "white",
                    padding: "24px 48px",
                    borderRadius: "16px",
                    fontSize: "48px",
                    fontWeight: "bold",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    border: "3px solid #fbbf24",
                    margin: "0 auto",
                    maxWidth: "800px",
                  }}
                >
                  GIẤY CHỨNG NHẬN
                </div>
              </div>

              {/* Project Confirmation Text */}
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h2
                  style={{
                    color: "#dc2626",
                    fontWeight: 600,
                    fontSize: "32px",
                    margin: 0,
                    letterSpacing: "2px",
                  }}
                >
                  DỰ ÁN NUÔI EM XÁC NHẬN:
                </h2>
              </div>
            </div>

            {/* Main Content Section */}
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "0 40px",
              }}
            >
              {/* Name Section with decorative background */}
              <div style={{ marginBottom: "40px", position: "relative" }}>
                {/* Decorative background for name */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-20px",
                    background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
                    borderRadius: "20px",
                    opacity: 0.2,
                    transform: "rotate(-2deg)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "rgba(254, 215, 170, 0.8)",
                    padding: "24px 48px",
                    borderRadius: "16px",
                    border: "3px solid #dc2626",
                  }}
                >
                  <h1
                    style={{
                      color: "#dc2626",
                      fontFamily: "serif",
                      fontWeight: "bold",
                      fontSize: "72px",
                      margin: 0,
                      lineHeight: 1.1,
                      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                      wordBreak: "break-word",
                    }}
                  >
                    {data.name}
                  </h1>
                </div>
              </div>

              {/* Date of Birth */}
              <div style={{ marginBottom: "50px" }}>
                <p
                  style={{
                    color: "#000000",
                    fontSize: "28px",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  Sinh ngày {data.dob}
                </p>
              </div>

              {/* Participation Details */}
              <div style={{ marginBottom: "50px", maxWidth: "1000px" }}>
                <div
                  style={{
                    color: "#dc2626",
                    fontSize: "36px",
                    lineHeight: 1.5,
                    fontWeight: 600,
                    fontStyle: "italic",
                  }}
                >
                  <p style={{ margin: "0 0 16px 0" }}>
                    Đã tham gia là tình nguyện viên hỗ trợ Dự án Nuôi Em
                  </p>
                  <p style={{ margin: 0 }}>
                    Từ tháng {data.time_join} đến tháng {data.time_leave}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              {/* Left side - Decorative seal */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: "#dc2626",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "bold",
                    border: "4px solid #fbbf24",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                >
                  SEAL
                </div>
              </div>

              {/* Right side - Date, Organization and Signature */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                {/* Footer Banner - text-based */}
                <div
                  style={{
                    backgroundColor: "#059669",
                    color: "white",
                    padding: "12px 32px",
                    borderRadius: "25px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    border: "2px solid #fbbf24",
                  }}
                >
                  CHỨNG NHẬN CHÍNH THỨC
                </div>

                {/* Date and Organization */}
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "20px",
                      margin: "0 0 8px 0",
                      fontWeight: 500,
                    }}
                  >
                    Hà Nội, ngày {data.issuedDate || "10/02/2025"}
                  </p>
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "20px",
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {data.organizationName || "Nhóm tình nguyện Niềm Tin"}
                  </p>
                </div>

                {/* Signature placeholder */}
                <div
                  style={{
                    width: "150px",
                    height: "80px",
                    border: "3px solid #dc2626",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(254, 215, 170, 0.3)",
                    fontSize: "16px",
                    color: "#dc2626",
                    fontWeight: "bold",
                  }}
                >
                  CHỮ KÝ
                </div>

                {/* Organization line */}
                <div
                  style={{
                    borderTop: "2px solid #000000",
                    paddingTop: "8px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      margin: 0,
                      color: "#000000",
                    }}
                  >
                    Trưởng nhóm
                    <br />
                    {data.issuerName || "Nhóm tình nguyện Niềm Tin"}
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

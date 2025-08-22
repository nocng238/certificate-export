import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { renderToString } from "react-dom/server";
import React from "react";
import { CertificateData } from "@/types/certificate";
import VietnameseCertificateTemplate from "@/components/VietnameseCertificateTemplate";

export const exportToPDF = async (certificate: CertificateData) => {
  try {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });
    const imageData = await convertToImage(certificate);
    pdf.addImage(imageData, "PNG", 0, 0, 297, 210);

    // Save the PDF
    const filename = `certificate-${certificate.name
      .replace(/\s+/g, "-")
      .toLowerCase()}.pdf`;
    pdf.save(filename);
  } catch (error) {
    console.error("Error exporting PDF:", error);
    throw new Error("Failed to export PDF. Please try again.");
  }
};

export const exportAllToPDF = async (certificates: CertificateData[]) => {
  try {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    for (let i = 0; i < certificates.length; i++) {
      const certificate = certificates[i];

      const imgData = await convertToImage(certificate);

      if (i > 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
    }

    const filename = `all-certificates-${Date.now()}.pdf`;
    pdf.save(filename);
  } catch (error) {
    console.error("Error exporting all PDFs:", error);
    throw new Error("Failed to export all PDFs. Please try again.");
  }
};

const convertToImage = async (certificate: CertificateData) => {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "-10000px";
  container.style.left = "-10000px";
  container.style.backgroundColor = "white";
  container.style.fontFamily = "Times New Roman, serif";

  const certificateHTML = renderToString(
    React.createElement(VietnameseCertificateTemplate, { data: certificate })
  );

  container.innerHTML = certificateHTML;

  document.body.appendChild(container);

  const canvas = await html2canvas(container, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    width: container.getBoundingClientRect().width,
    height: container.getBoundingClientRect().height,
  });

  document.body.removeChild(container);

  return canvas.toDataURL("image/png");
};

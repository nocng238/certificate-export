import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { renderToString } from "react-dom/server";
import React from "react";
import { CertificateData } from "@/types/certificate";
import VolunteerCertificate from "@/components/volunteer-cert";
import ThankYouLetterDonnor from "@/components/thank-you-letter-dornor";
import { ThankYouData } from "@/components/ThankYouLetterStandaloneEditor";

export const exportToPDF = async (certificate: CertificateData) => {
  try {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });
    const certificateHTML = renderToString(
      React.createElement(VolunteerCertificate, { data: certificate })
    );

    const imageData = await convertToImage(certificateHTML);
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
      const certificateHTML = renderToString(
        React.createElement(VolunteerCertificate, {
          data: certificate,
        })
      );

      const imgData = await convertToImage(certificateHTML);

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

const convertToImage = async (htmlString: string) => {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "-10000px";
  container.style.left = "-10000px";
  container.style.backgroundColor = "white";
  container.style.fontFamily = "Times New Roman, serif";

  container.innerHTML = htmlString;

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

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word characters
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};
export const exportThankYouLetterToPDF = async (data: ThankYouData) => {
  try {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const letterHTML = renderToString(
      React.createElement(ThankYouLetterDonnor, { ...data })
    );

    const imgData = await convertToImage(letterHTML);

    pdf.addImage(imgData, "PNG", 0, 0, 297, 210);

    const filename = `thank-you-letter-${slugify(data.name)}.pdf`;
    pdf.save(filename);
  } catch (error) {
    console.error("Error exporting thank you letter PDF:", error);
    throw new Error("Failed to export thank you letter PDF. Please try again.");
  }
};

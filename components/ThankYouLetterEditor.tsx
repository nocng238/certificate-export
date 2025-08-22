"use client";

import { useState } from "react";
import { CertificateData } from "@/types/certificate";
import ThankYouLetterTemplate from "@/components/ThankYouLetterTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Download, Edit3, Eye, EyeOff } from "lucide-react";
import { exportToPDF } from "@/lib/pdf-export";

interface ThankYouLetterEditorProps {
  certificates: CertificateData[];
  onUpdateCertificate: (id: string, updates: Partial<CertificateData>) => void;
}

export default function ThankYouLetterEditor({
  certificates,
  onUpdateCertificate,
}: ThankYouLetterEditorProps) {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateData | null>(certificates[0] || null);
  const [isPreviewMode, setIsPreviewMode] = useState(true);
  const [isExporting, setIsExporting] = useState(false);

  const handleFieldUpdate = (field: keyof CertificateData, value: string) => {
    if (selectedCertificate) {
      onUpdateCertificate(selectedCertificate.id, { [field]: value });
    }
  };

  const handleExportPDF = async () => {
    if (!selectedCertificate) return;

    setIsExporting(true);
    try {
      await exportToPDF(selectedCertificate);
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportAllPDFs = async () => {
    setIsExporting(true);
    try {
      // Export all certificates one by one
      for (const cert of certificates) {
        await exportToPDF(cert);
        // Add small delay between exports
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error("Export all failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  if (!selectedCertificate) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No certificates available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Button
            variant={isPreviewMode ? "default" : "outline"}
            onClick={() => setIsPreviewMode(true)}
            className="flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </Button>
          <Button
            variant={!isPreviewMode ? "default" : "outline"}
            onClick={() => setIsPreviewMode(false)}
            className="flex items-center space-x-2"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit</span>
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center space-x-2 bg-rose-600 hover:bg-rose-700"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? "Exporting..." : "Export PDF"}</span>
          </Button>

          {certificates.length > 1 && (
            <Button
              onClick={handleExportAllPDFs}
              disabled={isExporting}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Export All ({certificates.length})</span>
            </Button>
          )}
        </div>
      </div>

      {/* Certificate Selection */}
      {certificates.length > 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Select Thank-You Letter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {certificates.map((cert) => (
                <Button
                  key={cert.id}
                  variant={
                    selectedCertificate.id === cert.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCertificate(cert)}
                  className="justify-start h-auto p-3"
                >
                  <div className="text-left">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm opacity-75">
                      {cert.donationAmount || "Amount not set"}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Edit Form */}
        {!isPreviewMode && (
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Edit3 className="w-5 h-5" />
                <span>Edit Letter</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Donor Name</Label>
                <Input
                  id="name"
                  value={selectedCertificate.name}
                  onChange={(e) => handleFieldUpdate("name", e.target.value)}
                  placeholder="Enter donor name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="donationAmount">Donation Amount</Label>
                <Input
                  id="donationAmount"
                  value={selectedCertificate.donationAmount || ""}
                  onChange={(e) =>
                    handleFieldUpdate("donationAmount", e.target.value)
                  }
                  placeholder="e.g., 4.000.000 VND"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description1">Description 1</Label>
                <Textarea
                  id="description1"
                  value={selectedCertificate.description1 || ""}
                  onChange={(e) =>
                    handleFieldUpdate("description1", e.target.value)
                  }
                  placeholder="First description paragraph"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description2">Description 2</Label>
                <Textarea
                  id="description2"
                  value={selectedCertificate.description2 || ""}
                  onChange={(e) =>
                    handleFieldUpdate("description2", e.target.value)
                  }
                  placeholder="Second description paragraph"
                  rows={3}
                />
              </div>

              <div className="pt-4">
                <Button
                  onClick={() => setIsPreviewMode(true)}
                  className="w-full"
                >
                  Preview Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview */}
        <div className={`${isPreviewMode ? "lg:col-span-3" : "lg:col-span-2"}`}>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Thank-You Letter Preview</span>
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-rose-100 text-rose-800"
                >
                  {selectedCertificate.name}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg overflow-auto">
                <ThankYouLetterTemplate data={selectedCertificate} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

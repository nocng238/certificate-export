"use client";

import { useState } from "react";
import { CertificateData } from "@/types/certificate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit3, Download, Eye, Users } from "lucide-react";
import VietnameseCertificateTemplate from "./VietnameseCertificateTemplate";
import { exportToPDF, exportAllToPDF } from "@/lib/pdf-export";

interface CertificateEditorProps {
  certificates: CertificateData[];
  onUpdateCertificate: (id: string, data: Partial<CertificateData>) => void;
}

export default function CertificateEditor({
  certificates,
  onUpdateCertificate,
}: CertificateEditorProps) {
  const [selectedId, setSelectedId] = useState<string>(
    certificates[0]?.id || ""
  );
  const [isExporting, setIsExporting] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isExportingAll, setIsExportingAll] = useState(false);
  const [templateType, setTemplateType] = useState<"standard" | "vietnamese">(
    "vietnamese"
  );

  const selectedCertificate = certificates.find(
    (cert) => cert.id === selectedId
  );

  const handleInputChange = (field: keyof CertificateData, value: string) => {
    if (selectedCertificate) {
      onUpdateCertificate(selectedId, { [field]: value });
    }
  };

  const handleExportSingle = async (certificate: CertificateData) => {
    setIsExporting((prev) => ({ ...prev, [certificate.id]: true }));
    try {
      await exportToPDF(certificate);
    } finally {
      setIsExporting((prev) => ({ ...prev, [certificate.id]: false }));
    }
  };

  const handleExportAll = async () => {
    setIsExportingAll(true);
    try {
      await exportAllToPDF(certificates);
    } finally {
      setIsExportingAll(false);
    }
  };

  if (certificates.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="py-12 text-center">
          <Users className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No certificates loaded
          </h3>
          <p className="text-gray-500">
            Upload a CSV file to start generating certificates.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Header with bulk actions */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                Certificate Editor
              </CardTitle>
              <p className="text-sm text-gray-500 mt-1">
                {certificates.length} certificate
                {certificates.length !== 1 ? "s" : ""} loaded
              </p>
            </div>
            <Button
              onClick={handleExportAll}
              disabled={isExportingAll}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {isExportingAll ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <Download className="w-4 h-4 mr-2" />
              )}
              Export All PDFs
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 gap-6">
        {/* Certificate List & Editor */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Certificates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 max-h-96 overflow-y-auto">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedId === cert.id
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedId(cert.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {cert.name}
                      </p>
                      <p className="text-sm text-gray-500">DOB: {cert.dob}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExportSingle(cert);
                      }}
                      disabled={isExporting[cert.id]}
                      className="ml-2"
                    >
                      {isExporting[cert.id] ? (
                        <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Download className="w-3 h-3" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Edit Form */}
          {selectedCertificate && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Edit Certificate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={selectedCertificate.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input
                    id="dob"
                    value={selectedCertificate.dob}
                    onChange={(e) => handleInputChange("dob", e.target.value)}
                    placeholder="DD/MM/YYYY"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="time_join">Join Time</Label>
                    <Input
                      id="time_join"
                      value={selectedCertificate.time_join}
                      onChange={(e) =>
                        handleInputChange("time_join", e.target.value)
                      }
                      placeholder="MM/YYYY"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time_leave">Leave Time</Label>
                    <Input
                      id="time_leave"
                      value={selectedCertificate.time_leave}
                      onChange={(e) =>
                        handleInputChange("time_leave", e.target.value)
                      }
                      placeholder="MM/YYYY"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Certificate Preview */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Live Preview
                </CardTitle>

                {selectedCertificate && (
                  <Button
                    onClick={() => handleExportSingle(selectedCertificate)}
                    disabled={isExporting[selectedCertificate.id]}
                    variant="outline"
                  >
                    {isExporting[selectedCertificate.id] ? (
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Download className="w-4 h-4 mr-2" />
                    )}
                    Export PDF
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {selectedCertificate ? (
                <div className="border rounded-lg overflow-hidden bg-white p-4">
                  <div className="w-full overflow-x-auto">
                    <VietnameseCertificateTemplate
                      data={selectedCertificate}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ) : (
                <div className="h-96 flex items-center justify-center text-gray-500">
                  Select a certificate to preview
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

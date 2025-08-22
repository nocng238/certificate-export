"use client";

import { useState } from "react";
import { CertificateData } from "@/types/certificate";
import CsvUploader from "@/components/CsvUploader";
import CertificateEditor from "@/components/CertificateEditor";
import ThankYouLetterEditor from "@/components/ThankYouLetterEditor";
import ThankYouLetterStandaloneEditor from "@/components/ThankYouLetterStandaloneEditor";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ArrowLeft, FileText, Mail } from "lucide-react";

enum AppState {
  UPLOAD,
  EDIT,
}

export default function CharityPage() {
  const [appState, setAppState] = useState<AppState>(AppState.UPLOAD);
  const [certificates, setCertificates] = useState<CertificateData[]>([]);

  const handleDataLoaded = (data: CertificateData[]) => {
    setCertificates(data);
    if (data.length > 0) {
      setAppState(AppState.EDIT);
    }
  };

  const handleUpdateCertificate = (
    id: string,
    updates: Partial<CertificateData>
  ) => {
    setCertificates((prev) =>
      prev.map((cert) => (cert.id === id ? { ...cert, ...updates } : cert))
    );
  };

  const resetApp = () => {
    setAppState(AppState.UPLOAD);
    setCertificates([]);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  Charity Certificates
                </h1>
              </div>
            </div>

            {/* {appState === AppState.EDIT && (
              <Button
                variant="outline"
                onClick={resetApp}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>New Upload</span>
              </Button>
            )} */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ThankYouLetterStandaloneEditor />
        {/* <Tabs defaultValue="thankyou" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger
              value="thankyou"
              className="flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Thank-You Letters</span>
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Certificates</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="thankyou" className="space-y-6">
            <ThankYouLetterStandaloneEditor />
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            {appState === AppState.UPLOAD ? (
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Charity Certificate Generator
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Generate certificates for charity event participants and
                    contributors. Upload a CSV file with participant data to
                    automatically generate personalized certificates.
                  </p>
                </div>

                <CsvUploader onDataLoaded={handleDataLoaded} />
              </div>
            ) : (
              <CertificateEditor
                certificates={certificates}
                onUpdateCertificate={handleUpdateCertificate}
              />
            )}
          </TabsContent>
        </Tabs> */}
      </main>
    </>
  );
}

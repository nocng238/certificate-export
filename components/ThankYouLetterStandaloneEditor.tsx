"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThankYouLetterDonnor from "@/components/thank-you-letter-dornor";
import { Download, Edit3, Eye } from "lucide-react";
import { exportThankYouLetterToPDF } from "@/lib/pdf-export";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export interface ThankYouData {
  name: string;
  description: string;
}

export default function ThankYouLetterStandaloneEditor() {
  const [isEditing, setIsEditing] = useState(true);
  const [thankYouData, setThankYouData] = useState<ThankYouData>({
    name: "Easy Trip",
    description: `<p>Đã tham gia đóng góp tài trợ <strong>4.000.000 VND</strong> xây dựng Điểm trường Huổi Meo 2 (Pú Vang)- Tiểu học số 2 Mường Mươn, huyện Mường Chà, tỉnh Điện Biên vào ngày 04/08/2025.</p><p>Sự đồng hành của Bạn đã chung tay góp sức dựng trường đưa em tới lớp, mở đường ước mơ cho các em học sinh dân tộc thiểu số khó khăn.</p>`,
  });

  const handleInputChange = (field: keyof ThankYouData, value: string) => {
    setThankYouData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleExportPDF = () => {
    exportThankYouLetterToPDF(thankYouData);
  };

  // Quill toolbar configuration
  const quillModules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }], // Font size
      ["bold", "italic", "underline"], // Bold, italic, underline
      [{ color: [] }, { background: [] }], // Text color and background color
      [{ align: [] }], // Text alignment
      ["clean"], // Remove formatting
    ],
  };

  const quillFormats = ["size", "bold", "italic", "underline", "color"];

  return (
    <div className="space-y-6">
      <style jsx global>{`
        .ql-editor {
          min-height: 200px;
          font-family: inherit;
        }
        .ql-toolbar {
          border-top: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-radius: 0.375rem 0.375rem 0 0;
        }
        .ql-container {
          border-bottom: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-radius: 0 0 0.375rem 0.375rem;
        }
        .rich-text-content p {
          margin-bottom: 1rem;
        }
        .rich-text-content p:last-child {
          margin-bottom: 0;
        }
      `}</style>
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Thank-You Letter Editor
          </h2>
          <p className="text-gray-600">
            Edit the donor thank-you letter template
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={() => setIsEditing(true)}
            className="flex items-center space-x-2"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit</span>
          </Button>
          <Button
            variant={!isEditing ? "default" : "outline"}
            onClick={() => setIsEditing(false)}
            className="flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Full Preview</span>
          </Button>
          <Button
            onClick={handleExportPDF}
            className="flex items-center space-x-2 bg-rose-600 hover:bg-rose-700"
          >
            <Download className="w-4 h-4" />
            <span>Export PDF</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Editor Panel */}
        {isEditing && (
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Edit3 className="w-5 h-5" />
                <span>Edit Content</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Donor Name
                </Label>
                <Input
                  id="name"
                  value={thankYouData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter donor name"
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <div className="border rounded-md">
                  <ReactQuill
                    theme="snow"
                    value={thankYouData.description}
                    onChange={(value) =>
                      handleInputChange("description", value)
                    }
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Enter the thank you message..."
                    style={{ minHeight: "200px" }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className={isEditing ? "lg:col-span-3" : "lg:col-span-4"}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Live Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <ThankYouLetterDonnor
                  name={thankYouData.name}
                  description={thankYouData.description}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

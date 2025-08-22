"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ThankYouLetterDonnor from "@/components/thank-you-letter-dornor";
import { Download, Edit3, Eye } from "lucide-react";
import { exportThankYouLetterToPDF } from "@/lib/pdf-export";

export interface ThankYouData {
  name: string;
  description1: string;
  description2: string;
}

export default function ThankYouLetterStandaloneEditor() {
  const [isEditing, setIsEditing] = useState(true);
  const [thankYouData, setThankYouData] = useState<ThankYouData>({
    name: "Easy Trip",
    description1:
      "Đã tham gia đóng góp tài trợ 4.000.000 VND xây dựng Điểm trường Huổi Meo 2 (Pú Vang)- Tiểu học số 2 Mường Mươn, huyện Mường Chà, tỉnh Điện Biên vào ngày 04/08/2025.",
    description2:
      "Sự đồng hành của Bạn đã chung tay góp sức dựng trường đưa em tới lớp, mở đường ước mơ cho các em học sinh dân tộc thiểu số khó khăn.",
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

  return (
    <div className="space-y-6">
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
            <span>Preview</span>
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
                <Label htmlFor="description1" className="text-sm font-medium">
                  Description 1
                </Label>
                <Textarea
                  id="description1"
                  value={thankYouData.description1}
                  onChange={(e) =>
                    handleInputChange("description1", e.target.value)
                  }
                  placeholder="Enter first description"
                  rows={4}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description2" className="text-sm font-medium">
                  Description 2
                </Label>
                <Textarea
                  id="description2"
                  value={thankYouData.description2}
                  onChange={(e) =>
                    handleInputChange("description2", e.target.value)
                  }
                  placeholder="Enter second description"
                  rows={4}
                  className="resize-none"
                />
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
                  description1={thankYouData.description1}
                  description2={thankYouData.description2}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

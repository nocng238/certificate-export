'use client';

import { CertificateData } from '@/types/certificate';
import { forwardRef } from 'react';

interface CertificateTemplateProps {
  data: CertificateData;
  className?: string;
}

const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ data, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative w-[210mm] h-[297mm] mx-auto bg-white certificate-template ${className}`}
        style={{
          fontFamily: 'Times New Roman, serif',
          fontSize: '16px',
          lineHeight: '1.4',
        }}
      >
        {/* Geometric Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top geometric shapes */}
          <div className="absolute -top-20 -left-20 w-80 h-80 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon points="0,100 50,0 150,0 200,100 150,200 50,200" fill="#14B8A6" />
            </svg>
          </div>
          <div className="absolute -top-10 right-20 w-60 h-60 opacity-25">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon points="100,0 200,50 200,150 100,200 0,150 0,50" fill="#F59E0B" />
            </svg>
          </div>
          
          {/* Bottom geometric shapes */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon points="0,100 50,0 150,0 200,100 150,200 50,200" fill="#14B8A6" />
            </svg>
          </div>
          <div className="absolute -bottom-10 left-20 w-60 h-60 opacity-25">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon points="100,0 200,50 200,150 100,200 0,150 0,50" fill="#F59E0B" />
            </svg>
          </div>
        </div>

        {/* Main Border */}
        <div className="absolute inset-6 border-4 border-yellow-500 bg-gradient-to-br from-yellow-50 via-white to-teal-50">
          <div className="absolute inset-2 border-2 border-teal-500">
            
            {/* Header Logos Area */}
            <div className="flex justify-center items-center pt-8 pb-4">
              <div className="flex items-center space-x-8">
                {/* Left Logo Placeholder */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-600">
                  <span className="text-green-600 font-bold text-xl">VC</span>
                </div>
                
                {/* Center Logo */}
                <div className="text-center">
                  <div className="w-24 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-sm">2000</span>
                  </div>
                </div>
                
                {/* Right Logo Placeholder */}
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-600">
                  <div className="text-orange-600 text-2xl">🔥</div>
                </div>
              </div>
            </div>

            {/* Certificate Title */}
            <div className="text-center mb-6">
              <h1 
                className="text-4xl font-bold text-red-800 tracking-widest mb-4"
                style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.2em' }}
              >
                GIẤY CHỨNG NHẬN
              </h1>
              
              {/* Banner */}
              <div className="relative mx-auto w-3/4 mb-8">
                <div className="bg-teal-500 text-white py-4 px-8 relative">
                  <h2 
                    className="text-2xl font-bold text-center tracking-wide"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                  >
                    THAM GIA THIỆN NGUYỆN
                  </h2>
                  {/* Banner decorative edges */}
                  <div className="absolute -left-4 top-0 w-0 h-0 border-t-[2.5rem] border-b-[2.5rem] border-r-4 border-t-transparent border-b-transparent border-r-teal-600"></div>
                  <div className="absolute -right-4 top-0 w-0 h-0 border-t-[2.5rem] border-b-[2.5rem] border-l-4 border-t-transparent border-b-transparent border-l-teal-600"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-16 text-center">
              <p className="text-lg mb-8 text-gray-700" style={{ fontFamily: 'Times New Roman, serif' }}>
                DỰ ÁN NUÔI EM XÁC NHẬN:
              </p>
              
              {/* Name */}
              <h3 
                className="text-5xl font-bold text-red-800 mb-6"
                style={{ 
                  fontFamily: 'Times New Roman, serif',
                  fontStyle: 'italic',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                {data.name}
              </h3>
              
              {/* Date of Birth */}
              <p className="text-xl mb-12 text-gray-800" style={{ fontFamily: 'Times New Roman, serif' }}>
                Sinh ngày {data.dob}
              </p>
              
              {/* Participation Text */}
              <p 
                className="text-2xl text-red-700 mb-16 leading-relaxed font-semibold"
                style={{ 
                  fontFamily: 'Times New Roman, serif',
                  fontStyle: 'italic'
                }}
              >
                Đã tham gia là tình nguyện viên hỗ trợ Dự án Nuôi Em<br />
                Từ tháng {data.time_join} đến tháng {data.time_leave}
              </p>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-0 right-0 px-16">
              <div className="flex justify-between items-end">
                {/* Left side - Seal */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-yellow-500 font-bold text-lg">NL</span>
                  </div>
                  <div className="flex">
                    <div className="text-yellow-500 text-2xl mr-2">🌿</div>
                    <div className="text-yellow-500 text-2xl ml-2">🌿</div>
                  </div>
                </div>

                {/* Right side - Signature */}
                <div className="text-center">
                  <p className="text-lg mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Hà Nội, ngày {data.issuedDate}
                  </p>
                  <p className="text-lg mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
                    {data.issuerName}
                  </p>
                  
                  {/* Signature Box */}
                  <div className="w-32 h-16 border-2 border-red-600 mb-4 mx-auto flex items-center justify-center">
                    <span className="text-red-600 text-xs">SIGNATURE</span>
                  </div>
                  
                  <div className="border-t-2 border-black pt-2">
                    <p className="text-lg font-semibold" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Trưởng nhóm<br />
                      {data.organizationName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = 'CertificateTemplate';

export default CertificateTemplate;
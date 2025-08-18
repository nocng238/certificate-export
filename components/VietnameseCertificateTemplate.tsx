'use client';

import { CertificateData } from '@/types/certificate';
import { forwardRef } from 'react';

interface VietnameseCertificateTemplateProps {
  data: CertificateData;
  className?: string;
}

const VietnameseCertificateTemplate = forwardRef<HTMLDivElement, VietnameseCertificateTemplateProps>(
  ({ data, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative w-full max-w-4xl mx-auto overflow-hidden bg-white certificate-template ${className}`}
        style={{
          backgroundColor: '#ffffff',
          aspectRatio: '5097/3600',
          minHeight: '300px',
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/5b9fa339d0dd98006b7b8dc9e274b161d7cc64b3?width=10194)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Title Banner Image */}
        <div
          className="absolute"
          style={{
            width: '67.7%',
            height: '23.1%',
            left: '16.1%',
            top: '9.3%',
            backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/50fd2b3cb5c2ce822ea32fd8efa007c157d74015?width=6902)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />

        {/* Seal/Logo Image */}
        <div
          className="absolute"
          style={{
            width: '15.7%',
            height: '15.7%',
            left: '42.2%',
            top: '73%',
            backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/67610b2887512ad923f8bea54ad3110a5010026d?width=1374)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />

        {/* Footer Banner Image */}
        <div
          className="absolute"
          style={{
            width: '19%',
            height: '5.3%',
            left: '62.3%',
            top: '85.7%',
            backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/47fe24d2ebc53dffa2b2178ddef127c5b8d7fbb5?width=1938)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />

        {/* Certificate Background Banner */}
        <div
          className="absolute"
          style={{
            width: '52%',
            height: '10.6%',
            left: '24%',
            top: '39.4%',
            backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/ca1a70895f6ec3be3045de0558d72fe60a1fcdad?width=5300)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />

        {/* Name */}
        <div
          className="absolute text-center flex items-center justify-center px-2"
          style={{
            width: '49%',
            height: '9.7%',
            left: '25.4%',
            top: '41.5%',
            color: '#923137',
            fontFamily: 'Nova Cut, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: 'clamp(1.5rem, 5.5vw, 8rem)',
            fontWeight: '400',
            lineHeight: '1.2',
          }}
        >
          {data.name}
        </div>

        {/* Date of Birth */}
        <div
          className="absolute text-center flex items-center justify-center px-2"
          style={{
            width: '20.8%',
            height: '1.4%',
            left: '40.8%',
            top: '51.7%',
            color: '#000000',
            fontFamily: 'Source Sans Pro, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: 'clamp(0.8rem, 1.8vw, 2.2rem)',
            fontWeight: '400',
            lineHeight: '1.2',
          }}
        >
          Sinh ngày {data.dob}
        </div>

        {/* Project Confirmation Text */}
        <div
          className="absolute text-center flex items-center justify-center px-2"
          style={{
            width: '22.2%',
            height: '1.7%',
            left: '37.9%',
            top: '34.2%',
            color: '#923137',
            fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: 'clamp(0.8rem, 2vw, 2.5rem)',
            fontWeight: '400',
            lineHeight: '1.2',
          }}
        >
          DỰ ÁN NUÔI EM XÁC NHẬN:
        </div>

        {/* Participation Details */}
        <div
          className="absolute text-center flex flex-col items-center justify-center px-2"
          style={{
            width: '54.5%',
            height: '8.8%',
            left: '22.9%',
            top: '58.5%',
            color: '#923137',
            fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 3.2rem)',
            fontWeight: '400',
            lineHeight: '1.4',
          }}
        >
          <div className="mb-2">Đã tham gia là tình nguyện viên hỗ trợ Dự án Nuôi Em</div>
          <div>Từ tháng {data.time_join} đến tháng {data.time_leave}</div>
        </div>

        {/* Date and Organization */}
        <div
          className="absolute text-center flex flex-col items-center justify-center px-1"
          style={{
            width: '17.8%',
            height: '5.3%',
            left: '62.9%',
            top: '70.5%',
            color: '#000000',
            fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: 'clamp(0.6rem, 1.6vw, 2rem)',
            fontWeight: '400',
            lineHeight: '1.3',
          }}
        >
          <div>Hà Nội, ngày {data.issuedDate || '10/02/2025'}</div>
          <div>Nhóm tình nguyện Niềm Tin</div>
        </div>

        {/* Signature Image */}
        <div
          className="absolute"
          style={{
            width: '13.5%',
            height: '9.6%',
            left: '65.9%',
            top: '76.1%',
            backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/67610b2887512ad923f8bea54ad3110a5010026d?width=1374)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
      </div>
    );
  }
);

VietnameseCertificateTemplate.displayName = 'VietnameseCertificateTemplate';

export default VietnameseCertificateTemplate;

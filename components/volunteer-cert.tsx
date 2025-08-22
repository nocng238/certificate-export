import { CertificateData } from "@/types/certificate";
import { forwardRef } from "react";
import BackgroundImage from "@/assets/background.png"; // Adjust the path as necessary
import Image from "next/image";
import LeaderSign from "@/assets/sign.png";
import Leader from "@/assets/leader.png";
import Banner from "@/assets/banner.png";
import LogoBottom from "@/assets/img-bottom.svg";
import { Pinyon_Script, Oleo_Script_Swash_Caps } from "next/font/google";
import { cn } from "@/lib/utils";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const oleoScriptSwashCaps = Oleo_Script_Swash_Caps({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "700",
});

interface VolunteerCertificateTemplateProps {
  data: CertificateData;
  className?: string;
}

const VolunteerCertificateTemplate = forwardRef<
  HTMLDivElement,
  VolunteerCertificateTemplateProps
>(({ data }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative w-[1100px] h-[750px] mx-auto overflow-hidden bg-white certificate-template shadow-lg border border-gray-200"
      )}
      style={{
        aspectRatio: "5097/3600",
        minHeight: "clamp(400px, 60vw, 800px)",
        maxHeight: "90vh",
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-full relative overflow-auto flex flex-col px-16 py-4">
        <div className="flex-shrink-0">
          <div className="w-full mx-auto">
            <Image
              src={Banner.src}
              alt="Banner"
              className="w-full object-cover"
              width={200}
              height={100}
            />
          </div>

          <div className="text-center mb-2">
            <h2 className="text-red-700 font-medium text-sm sm:text-base md:text-lg lg:text-xl">
              DỰ ÁN NUÔI EM XÁC NHẬN:
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center px-4 mb-4">
          <p
            className={cn(
              oleoScriptSwashCaps.className,
              "text-[#923137] bg-orange-100 px-4"
            )}
            style={{
              fontSize: "4rem",
            }}
          >
            {data.name}
          </p>

          <div className="mb-2">
            <p
              className="text-black text-xl mt-2"
              style={{
                fontFamily:
                  "Source Sans Pro, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Sinh ngày {data.dob}
            </p>
          </div>

          <div className="mb-4">
            <div
              className={cn(
                "text-[#923137] text-3xl space-y-2",
                pinyonScript.className
              )}
            >
              <p>Đã tham gia là tình nguyện viên hỗ trợ Dự án Nuôi Em</p>
              <p>
                Từ tháng {data.time_join} đến tháng {data.time_leave}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 relative">
          <Image
            alt="logo-bottom"
            src={LogoBottom.src}
            width={200}
            height={200}
          />
          <div className="flex flex-col items-center absolute bottom-4 left-3/4 transform -translate-x-1/2">
            <div className="text-center">
              <p className="text-black text-xs sm:text-sm md:text-base mb-1">
                Hà Nội, ngày {data.issuedDate || "10/02/2025"}
              </p>
              <p
                className="text-black text-xs sm:text-sm md:text-base"
                style={{
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Nhóm tình nguyện Niềm Tin
              </p>
            </div>
            <Image src={LeaderSign.src} alt="Seal" width={140} height={100} />
            <Image
              className=" mt-2"
              src={Leader.src}
              alt="Leader"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

VolunteerCertificateTemplate.displayName = "VolunteerCertificateTemplate";

export default VolunteerCertificateTemplate;

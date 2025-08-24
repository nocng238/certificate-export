import Image from "next/image";
import Background from "@/assets/donnor-letter/charity-bg.webp";
import FooterRight from "@/assets/donnor-letter/footer-right.png";
import LeaderSign from "@/assets/sign.png";
import FireLogo from "@/assets/donnor-letter/fire-logo.webp";
import SmLogo from "@/assets/donnor-letter/sm-logo.webp";
import { cn } from "@/lib/utils";
import { Montserrat, Baloo_2 } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const baloo = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

interface ThankYouLetterDonnorProps {
  name?: string;
  description1?: string;
  description2?: string;
}

const ThankYouLetterDonnor = ({
  name = "Easy Trip",
  description1 = "Đã tham gia đóng góp tài trợ 4.000.000 VND xây dựng Điểm trường Huổi Meo 2 (Pú Vang)- Tiểu học số 2 Mường Mươn, huyện Mường Chà, tỉnh Điện Biên vào ngày 04/08/2025.",
  description2 = "Sự đồng hành của Bạn đã chung tay góp sức dựng trường đưa em tới lớp, mở đường ước mơ cho các em học sinh dân tộc thiểu số khó khăn.",
}: ThankYouLetterDonnorProps) => {
  return (
    <div
      className={`relative w-[1100px]  mx-auto overflow-hidden bg-white certificate-template 
        shadow-lg border border-gray-200`}
      style={{
        aspectRatio: "5097/3600",
        minHeight: "clamp(400px, 60vw, 800px)",
        maxHeight: "90vh",
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-full relative overflow-auto flex flex-col gap-6">
        <div className="flex-shrink-0">
          <div className="mx-auto flex justify-center items-center">
            <Image
              src={SmLogo.src}
              alt="sm-logo"
              className="object-cover"
              width={120}
              height={120}
            />
            <Image
              src={FireLogo.src}
              alt="Fire Logo"
              className="object-cover h-20"
              width={80}
              height={80}
            />
          </div>

          <div className={cn("text-center mb-2 space-y-2")}>
            <h2
              className={cn(
                "text-[#ff1616] font-bold text-3xl",
                montserrat.className
              )}
            >
              DỰ ÁN NUÔI EM - DỰ ÁN SỨC MẠNH 2000
            </h2>
            <h1
              className={cn(
                "text-[#436089] font-bold text-4xl",
                baloo.className
              )}
            >
              TRÂN TRỌNG CẢM ƠN
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center px-4">
          {/* name */}
          <p
            className={cn("px-4 text-6xl font-bold mb-8", montserrat.className)}
          >
            {name}
          </p>

          <div
            className={cn(
              "space-y-2 max-w-4xl mb-4 text-xl",
              montserrat.className
            )}
          >
            {/* description 1 */}
            <p>{description1}</p>
            {/* description 2 */}
            <p>{description2}</p>
          </div>
        </div>

        <div
          className={cn(
            "flex-grow flex justify-end items-end mb-5 font-bold mr-2",
            montserrat.className
          )}
        >
          <div className="flex flex-col items-center text-base">
            <div className="text-center">
              <p>TM. Dự án Nuôi Em - Dự án Sức mạnh 2000</p>
              <p>Chủ nhiệm</p>
            </div>
            <Image src={LeaderSign.src} alt="Seal" width={140} height={100} />
            <p className=" mt-2">Hoàng Hoa Trung</p>
          </div>
          <Image
            alt="footer-right-bottom"
            className="mt-5"
            src={FooterRight.src}
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYouLetterDonnor;

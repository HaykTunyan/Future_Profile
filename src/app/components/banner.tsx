import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Banner() {
  return (
    <div className="flex  bg-white shadow-lg rounded-lg  w-full">
      <div className="flex flex-col md:flex-row  w-full px-4 py-6">
        <div className="flex justify-center  md:mr-5">
          <Image
            src="/images/profile.jpg"
            width={132}
            height={44}
            alt="SAYNIN-LOGO-LARG"
            className="cursor-pointer flex-shrink-0 rounded-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex items-center flex-col  md:flex-row md:justify-between">
            <h3 className="text-2xl font-semibold text-gray-900 mt-2 md:mt-0">
              Hayk Tunyan
            </h3>
            <p className="text-gray-700 font-semibold text-2xl mt-2 md:mt-0">
              Front End Engineer
            </p>
          </div>
          <div className="mt-5 flex  flex-col sm:flex-row items-center">
            {/* Location */}
            <div className="flex mt-2  sm:mt-0 sm:mr-4">
              <Image
                src={"location.svg"}
                width={24}
                height={24}
                className="cursor-pointer flex-shrink-0 rounded-full object-cover"
                alt="Linkedin"
              />
              <p className="text-gray-700 text-md ">Yerevan, Armenia</p>
            </div>
            {/* Linkedin */}
            <div className="flex mt-2  sm:mt-0 sm:mr-4 text-gray-700  ">
              <Link
                href={"https://www.linkedin.com/in/hayk-tunyan/"}
                target="_blank"
                className="rounded-full hover:shadow-md hover:drop-shadow-2xl shadow-gray-500 shadow-2xl"
              >
                <Image
                  src={
                    "https://d1m1s6un1a8qgj.cloudfront.net/media/external_site_image/i_fKtFoc3.svg"
                  }
                  width={24}
                  height={24}
                  className="cursor-pointer flex-shrink-0 rounded-full object-cover"
                  alt="Linkedin"
                />
              </Link>
            </div>
            {/* GitHub */}
            <div className="flex mt-2  sm:mt-0 sm:mr-4 text-gray-700  ">
              <Link
                href={"https://github.com/HaykTunyan"}
                target="_blank"
                className="rounded-full hover:shadow-md hover:drop-shadow-2xl"
              >
                <Image
                  src={
                    "https://d1m1s6un1a8qgj.cloudfront.net/media/external_site_image/i_sPU7AMm.svg"
                  }
                  width={24}
                  height={24}
                  className="cursor-pointer flex-shrink-0 rounded-full object-cover"
                  alt="GitHub"
                />
              </Link>
            </div>
            {/* Twitter */}
            <div className="flex mt-2  sm:mt-0 sm:mr-4 text-gray-700 ">
              <Link
                href={"https://twitter.com/TunyanHayk"}
                target="_blank"
                className="rounded-full hover:shadow-md hover:drop-shadow-2xl"
              >
                <Image
                  src={
                    "https://d1m1s6un1a8qgj.cloudfront.net/media/external_site_image/i_8ubVE2d.svg"
                  }
                  width={24}
                  height={24}
                  className="cursor-pointer flex-shrink-0 rounded-full object-cover"
                  alt="Twitter"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

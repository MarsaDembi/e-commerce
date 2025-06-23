import CardProduct from "@/components/CardProduct";
import Filter from "@/components/Filter";
import { GuestLayout } from "@/layouts/GuestLayout";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <GuestLayout>
      <div className="container relative my-30">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="md:col-span-5">
            <div className="relative">
              <Image
                src="/assets/images/marsa-dembi.webp"
                className="rounded-xl shadow-md"
                alt=""
                width={800}
                height={600}
              />
            </div>
          </div>
          {/*end col*/}
          <div className="md:col-span-7">
            <div className="lg:ms-4">
              <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">
                Welcome to My Website
              </h4>
              <p className="text-slate-400 max-w-xl">
                This website is a simple e-commerce website built with Next.js. For further information, please click on the link below. 
              </p>
              <div className="mt-4">
                <Link
                  href="/product"
                  className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3"
                >
                  See More{" "}
                </Link>
              </div>
            </div>
          </div>
          {/*end col*/}
        </div>
      </div>
    </GuestLayout>
  );
}
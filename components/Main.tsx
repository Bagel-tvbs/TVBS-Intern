import Carousel from "./Carousel";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Main() {
  const Showimages = [
    "/images/7-9.webp",
    "/images/8-9.webp",
    "/images/9-3.webp",
    "/images/10-2.webp",
    "/images/11-4.webp",
    "/images/12-12.webp",
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-[#09327c] font-mono ">
            2023 TVBS
          </h1>
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-[#09327c] font-mono">
            3T人才實習計畫
          </h1>
          <p className="mb-4 xl:w-3/4  text-lg text-[#09327c]">
            3T人才實習計畫，為培養具有 真實
            <span className="font-extrabold">(Truth)</span>
            、信賴<span className="font-extrabold">(Trust)</span>、科技
            <span className="font-extrabold">(Technology)</span> 科技人
            數位開發中心擁有強大的軟體開發團隊
            讓你在有限的時間內，開通各項技術棧。
          </p>
          <div className="flex justify-center hover:scale-105">
            <Link
              className=" inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg "
              href="https://www.104.com.tw/job/7go5r?jobsource=company_job"
            >
              <span className=" justify-center text-blue-950">加入我們！</span>
            </Link>
          </div>
          <div className="flex">
            <Image
              src="/images/3T人才培訓計畫_Poster (1).png"
              alt=""
              className=""
              width={200}
              height={200}
            />
            <Image
              src="/images/3T人才培訓計畫_Poster.png"
              alt=""
              className=""
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="">
          <iframe
            className=" mb-10 g327 border rounded-lg shadow-md "
            width="600"
            height="337.5"
            src="/videos/tvbs實習影片.mp4"
          ></iframe>
        </div>
      </div>

      <section className="h-[500px] flex justify-center items-center  m-14">
        <Image
          src="/images/plan.png"
          alt=""
          className="ml-[50px]"
          width={600}
          height={600}
        />
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center mt-14">
        <h1 className="mb-8 text-4xl Avenir font-semibold text-[#09327c]">
          這是你想像的數位開發嗎？
        </h1>

        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <iframe
            className=" w-3/4 mb-10 g327 border rounded-lg shadow-md "
            width="900"
            height="500"
            src="/videos/我們以為的數開_Video.mp4"
          ></iframe>
          {/* className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md" */}
        </div>
      </div>
      <section className="text-center">
        <h1 className="mt-8 text-4xl Avenir font-semibold text-[#09327c] ">
          加入你喜歡的節目吧！
        </h1>
        <Carousel images={Showimages}></Carousel>
      </section>
      <section className="h-[500px] flex justify-center items-center  mt-14 ">
        <div className="h-[400px]  w-4/5 flex">
          <div className=" w-1/2">
            <Image
              src="/images/job-b.png"
              alt=""
              className="ml-[50px]"
              width={400}
              height={400}
            />
          </div>

          <div className="w-1/2">
            <Image
              src="/images/job-a.png"
              alt=""
              className="ml-[50px]"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* <div className="grr max-w-7xl pt-20 mx-auto text-center mt-14">
        <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
          希望透過計畫 協助更多人探索產業跟職涯目標 開拓更好 更遠的願景
        </h1>
        <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
          我們團隊使用現代敏捷開發模式，帶你探索新型態的軟體開發
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
          <iframe
            className=" w-3/4 mb-10 g327 border rounded-lg shadow-md "
            width="900"
            height="500"
            src="/videos/tvbs實習影片.mp4"
          ></iframe>
          {/* className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md" */}
      {/* </div>
      </div> */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-24 md:py-36">
            <h1 className=" text-4xl Avenir font-semibold text-[#09327c]">
              輸入你的電子信箱以得到最新資訊
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-[#09327c]">
              我們將會寄送相關資訊給您
            </h1>
            <div className=" flex  items-center">
              <div>
                <input
                  placeholder="jack@example.com"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="border border-gray-600  pr-2 pl-2 py-3  w-[400px]  rounded-md text-gray-800 font-semibold hover:border-gray-900"
                ></input>{" "}
                <Link
                  className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                  href="/"
                >
                  <span className="justify-center text-black">送出</span>
                </Link>
              </div>
              <div>
                <Image
                  src="/images/DrawKit Vector Illustration Fun & Playful Finn Character (5).png"
                  alt=""
                  className="ml-[50px]"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

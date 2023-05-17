import Carousel from "./Carousel";
import Link from "next/link";
export default function Main() {
  const images = [
    "/images/7-9.webp",
    "/images/8-9.webp",
    "/images/9-3.webp",
    "/images/10-2.webp",
    "/images/11-4.webp",
    "/images/12-12.webp",
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900  ">
            TVBS 聯立媒體
          </h1>
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900  ">
            2023實習生計畫
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            TVBS開發團隊對於軟體的品質有最高的要求。
            我們致力於以穩定的開發速率，持續地交付有價值的軟體來滿足客戶需求，並以全局為考量穩定改善團隊及消除多餘的浪費。我們深信最佳的架構與設計來自於能自我組織的團隊，歡迎有相同信念的朋友一起加入！
          </p>
          <div className="flex justify-center hover:scale-105">
            <Link
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900 "
              href="https://www.104.com.tw/job/7go5r?jobsource=company_job"
            >
              <span className=" justify-center  text-rose-500">加入我們！</span>
            </Link>
          </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10 bg">
          <img
            className="w-[700px] md:ml-1 ml-24"
            alt="hug"
            src="/images/3d-casual-life-young-boys-and-young-girl-jumping.png"
          ></img>
        </div>
      </div>

      <section className="flex">
        <Carousel images={images}></Carousel>
      </section>
      <section className="mx-auto flex ">
        <div className="container px-5 mx-auto lg:px-24  ">
          <img
            className="w-90 md:ml-1 ml-24"
            alt="hug"
            src="/images/business-3d-joyful-young-black-man-jumping.png"
          ></img>
        </div>
        <div className="flex flex-col w-full  lg:text-center  mt-[200px]">
          <h1 className="mb-8 text-8xl Avenir font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-blue-900 hover:from-red-800 hover:to-green-700 hover:ease-in duration-300  ">
            多個節目 多個IP 由你探索
          </h1>
        </div>
      </section>
      <div className="grr max-w-7xl pt-20 mx-auto text-center">
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
            src="https://drive.google.com/file/d/1UVfWrE1HKZ4y-uv-7EBL-hZblbdSysjz/preview"
          ></iframe>
          {/* className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md" */}
        </div>
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-24 md:py-36">
            <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
              輸入你的電子信箱以得到最新資訊
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-600">
              我們將會寄送相關資訊給您
            </h1>
            <div className=" flex  items-center">
              <div>
                <input
                  placeholder="jack@example.com"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="border border-gray-600  pr-2 pl-2 py-3  w-[300px]  rounded-md text-gray-800 font-semibold hover:border-gray-900"
                ></input>{" "}
                <Link
                  className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
                  href="/"
                >
                  <span className="justify-center text-black">送出</span>
                </Link>
              </div>
              <div>
                <img
                  src="/images/3d-business-guy-working-on-a-computer-and-shopping-online-1.png"
                  alt=""
                  className="ml-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

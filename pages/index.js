import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/2.png";
import code from "../public/backend.png";
import design from "../public/frontend.png";
import consulting from "../public/database.jpg";
import Image from "next/image";
import web1 from "../public/ChatGPTclone.png";
import web2 from "../public/reactadmindash.png";
import web3 from "../public/crowdfundingpic.png";
import web4 from "../public/weatherapp.png";
import web5 from "../public/imagegen.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbykreso</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Krešimir Krunić
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-End Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Self taught front-end developer with skills in HTML, CSS, Javascript, React, Tailwind CSS, Bootstrap, Node.js, MySQL, MongoDB, GIT, Python, C, C++, Java, Go and Kotlin.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/kresimir-krunic/" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-gray-400">
              <AiFillLinkedin />
            </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Front-End Development
              </h3>
              <p className="py-2">
              Creating responsive and dynamic user interfaces using the latest web technologies and frameworks, with a keen eye for design and attention to detail.

              </p>
              <p className="text-teal-600 pt-8 pb-1">HTML</p>
              <p className="text-teal-600 py-1">CSS</p>
              <p className="text-teal-600 py-1">Javascript</p>
              <p className="text-teal-600 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Back-End Development
              </h3>
              <p className="py-2">
              Building robust, scalable and secure server-side applications with proficiency in various backend technologies, APIs and databases
              </p>
              <p className="text-teal-600 pt-8 pb-1">Node.js</p>
              <p className="text-teal-600 py-1">Python</p>
              <p className="text-teal-600 py-1">Java</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} className="mx-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Database</h3>
              <p className="py-2">
              Designing and optimizing databases, ensuring efficient data storage, retrieval and manipulation for a variety of applications and use cases

              </p>
              <p className="text-teal-600 pt-8 pb-1">MySQL</p>
              <p className="text-teal-600 py-1">MongoDB</p>
              <p className="text-teal-600 py-1">PostgreSQL</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className="font-medium"> ChatGPT clone </span> - AI application built with HTML, CSS, Javascript, Node.js, Vite and OpenAI - <a href="https://aicodex-topaz.vercel.app/" className="text-teal-600">https://aicodex-topaz.vercel.app/</a> 
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className="font-medium"> React admin dashboard </span> - fully mobile responsive and customizable, you can choose between 6 theme colors as well as toggle betweeen light and darkmode. Admin padle includes one dashboard, 3 pages, 4 apps and 7 fully functional charts - <a href="https://react-admin-dashboard-project.netlify.app" className="text-teal-600">https://react-admin-dashboard-project.netlify.app</a>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className="font-medium"> Web3 Blockchain Crowdfunding Platform </span> - create, view and donate to crowdfunding campaigns directly through the blockchain - <a href="https://blockchain-crowdfunding.netlify.app" className="text-teal-600">https://blockchain-crowdfunding.netlify.app</a>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className="font-medium"> Weather App </span>- built with Javascript <a href="https://showweather-app.vercel.app/" className="text-teal-600">https://showweather-app.vercel.app/</a>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            <span className="font-medium"> AI Image Generator </span> - built with Node.js and OpenAI - <a href="https://imggenclient.onrender.com/" className="text-teal-600">https://imggenclient.onrender.com/</a> 
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
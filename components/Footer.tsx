"use client";
import { useLanguageContext } from "@/context/LanguageContext";


export function Footer() {
  const { language } = useLanguageContext();

  return (
    <footer
      className="bg-zinc-200 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <h6
              className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start font-josefin">
              NIAGARA STUDIOS
            </h6>
            <p>
              {
                language === "pt-br" ?
                  `Estúdio especializado em desenvolvimento de projetos 3D Unreal` :
                  `Studio specialized in 3D Unreal projects`
              }
            </p>
          </div>
          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {
                language === "pt-br" ?
                  `Soluções` :
                  `Solutions`
              }
            </h6>
            <p className="mb-4">
              <a href="#!" className="hover:text-orange-600">
                {
                  language === "pt-br" ?
                    "Realidade Virtual" :
                    "Virtual Reality"
                }
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="hover:text-orange-600">
                {
                  language === "pt-br" ?
                    "Realidade Aumentada" :
                    "Augmented Reality"
                }
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="hover:text-orange-600">
                {
                  language === "pt-br" ?
                    "Estúdios Virtuais" :
                    "Virtual Studios"
                }
              </a>
            </p>
            <p>
              <a href="#!" className="hover:text-orange-600">
                Renders
              </a>
            </p>
          </div>

          <div>
            <h6
              className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              {
                language === "pt-br" ?
                  `Contato` :
                  `Contact`
              }
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start hover:text-orange-600">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              comercial@niagarastudios.com.br
            </p>

            <div className="flex flex-col  w-full justify-center gap-4">

              <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 flex gap-4 items-center hover:text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
                X - Twitter
              </a>


              <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 flex gap-4 items-center hover:text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                Instagram
              </a>
              <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 flex gap-4 items-center hover:text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
                LinkedIn
              </a>

            </div>
            {/* <p className="mb-4 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              + 01 234 567 88
            </p> */}
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-6 text-center">
        <span>
          {
            language === "pt-br" ?
              `© 
              ${new Date().getFullYear()} 
              Direitos autorais - ` :
              `© 
              ${new Date().getFullYear()}
              Copyright -
              `
          }
        </span>
        <a className="font-semibold font-josefin text-sm" href="/"
        >NIAGARA STUDIOS
        </a>
      </div>
    </footer>
  );
}
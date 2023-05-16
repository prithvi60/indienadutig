import React from "react";

export default function Header({
  videoRef,
  eventRef,
  campaignRef,
  contactRef,
}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  return (
    <header class="fixed top-0 w-full clearNav z-50 bg-white  animate-fade-in  w-screen ">
      <div class="max-w-2xl md:max-w-5xl mx-auto flex flex-wrap p-2 md:p-3 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between md:p-2 md:p-1">
          {/* <a
            href="/"
            class="flex text-3xl text-white-100 font-medium mb-4 md:mb-0 md:animate-bounce"
          >
            TIG
          </a> */}
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,255.99904,255.99904"
              width="48px"
              height="48px"
              fill-rule="nonzero"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="none"
                stroke-linecap="none"
                stroke-linejoin="none"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                // style="mix-blend-mode: normal"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path
                    d="M43,11h-29c-1.1,0 -2,0.9 -2,2v3c0,1.1 0.9,2 2,2h29c1.1,0 2,-0.9 2,-2v-3c0,-1.1 -0.9,-2 -2,-2z"
                    fill="#b3bce9"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                  />
                  <path
                    d="M43,24h-29c-1.1,0 -2,0.9 -2,2v3c0,1.1 0.9,2 2,2h29c1.1,0 2,-0.9 2,-2v-3c0,-1.1 -0.9,-2 -2,-2z"
                    fill="#b3bce9"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                  />
                  <path
                    d="M43,37h-29c-1.1,0 -2,0.9 -2,2v3c0,1.1 0.9,2 2,2h29c1.1,0 2,-0.9 2,-2v-3c0,-1.1 -0.9,-2 -2,-2z"
                    fill="#b3bce9"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                  />
                  <path
                    d="M36.1,7.5h2.4c1.1,0 2,0.9 2,2v3c0,1.1 -0.9,2 -2,2h-20.5"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13,14.5h-3.5c-1.1,0 -2,-0.9 -2,-2v-3c0,-1.1 0.9,-2 2,-2h21.3"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.3,27.5h-3.8c-1.1,0 -2,-0.9 -2,-2v-3c0,-1.1 0.9,-2 2,-2h20"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35,20.5h3.5c1.1,0 2,0.9 2,2v3c0,1.1 -0.9,2 -2,2h-20"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5,40.5h-4c-1.1,0 -2,-0.9 -2,-2v-3c0,-1.1 0.9,-2 2,-2h19.6"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.2,33.5h4.3c1.1,0 2,0.9 2,2v3c0,1.1 -0.9,2 -2,2h-20"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <ul
              onClick={() =>
                videoRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
            >
              Nav1
            </ul>
            <div className="relative">
              <button
                type="button"
                className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                // onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
              >
                <span
                  className="tr04"
                  onClick={() =>
                    eventRef.current.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Nav2
                </span>
              </button>
              {/* <div
                onMouseLeave={() => setFlyer(false)}
                className={
                  flyer
                    ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                }
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #1
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          First Template
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #2
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Navond Template
                        </p>
                      </div>
                    </a>
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                    >
                      <div className="ml-4">
                        <p className="text-base font-medium text-white">
                          NINE4 TEMPLATE #3
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Third Template
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            <ul
              onClick={() =>
                campaignRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
            >
              Nav3
            </ul>
            <ul
              onClick={() =>
                contactRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
            >
              Nav4
            </ul>
          </div>
          {/* <a
            href="https://www.instagram.com/theintgen/?hl=en"
            rel="noopener noreferrer"
            target="_blank"
            className="invisible md:visible"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#f48fb1"
                d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"
              />
              <path
                fill="none"
                stroke="#18193f"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"
              />
              <path
                fill="none"
                stroke="#18193f"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"
              />
              <path
                fill="none"
                stroke="#18193f"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"
              />
              <path
                fill="#18193f"
                d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"
              />
            </svg>
          </a>
          <a
            data-v-54e46119=""
            href="https://www.youtube.com/channel/UCVk9sWJLFs3xTEBRtLTVXkQ/videos?view=0"
            rel="noopener noreferrer"
            target="_blank"
            className="pl-7 invisible md:visible animation-wiggle
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,255.99904,255.99904"
              width="48px"
              height="48px"
              fill-rule="nonzero"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="none"
                stroke-linecap="none"
                stroke-linejoin="none"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                // style="mix-blend-mode: normal"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path
                    d="M27.86,14c-6.144,0 -11.916,0.469 -14.989,1.125c-2.048,0.469 -3.817,1.875 -4.19,4.031c-0.371,2.25 -0.744,5.125 -0.744,9.344c0,4.219 0.373,7 0.838,9.344c0.373,2.063 2.141,3.563 4.19,4.031c3.258,0.656 8.844,1.125 14.988,1.125c6.144,0 11.73,-0.469 14.989,-1.125c2.048,-0.469 3.817,-1.875 4.19,-4.031c0.373,-2.344 0.838,-5.219 0.931,-9.438c0,-4.219 -0.466,-7.094 -0.931,-9.438c-0.373,-2.063 -2.141,-3.563 -4.19,-4.031c-3.258,-0.468 -8.937,-0.937 -15.082,-0.937z"
                    fill="#f54610"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                  />
                  <path
                    d="M28.79,10.093c-1.584,-0.059 -3.241,-0.093 -4.933,-0.093v0c-6.278,0 -12.176,0.469 -15.316,1.125c-2.093,0.469 -3.9,1.875 -4.281,4.031c-0.379,2.25 -0.76,5.125 -0.76,9.344c0,4.219 0.381,7 0.856,9.344c0.381,2.063 2.188,3.563 4.281,4.031c1.085,0.214 2.423,0.408 3.951,0.572"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5,38.881c1.733,0.077 3.567,0.119 5.452,0.119c6.278,0 11.986,-0.469 15.316,-1.125c2.093,-0.469 3.9,-1.875 4.281,-4.031c0.381,-2.344 0.856,-5.219 0.951,-9.438c0,-4.219 -0.476,-7.094 -0.951,-9.438c-0.381,-2.063 -2.188,-3.563 -4.281,-4.031c-0.888,-0.125 -1.952,-0.25 -3.154,-0.366"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.5,24v4.514c0,1.522 1.663,2.476 3,1.721l7.99,-4.514c1.347,-0.761 1.347,-2.682 0,-3.443l-7.99,-4.514c-1.337,-0.755 -3,0.199 -3,1.721"
                    fill="none"
                    stroke="#18193f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </a> */}
        </div>
      </div>
    </header>
  );
}

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
    <nav
      class=" dark:bg-gray-900 fixed w-full z-20 top-0 left-0 shadow-md dark:border-gray-600 animate-fade-in 
    animated-bg"
      style={{
        borderBottomLeftRadius: "12%",
        // borderBottomRightRadius: "5%",
      }}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 font-carter">
        <a href="/" class="flex items-center">
          <img
            src="/indielogo.jpg"
            class="h-9 mr-1"
            alt="IndieNadu Logo"
            style={{ borderRadius: "14%" }}
          />
          {/* <span class="self-center text-lg font-bold whitespace-nowrap text-white-100 font-poppins">
            IndieNadu
          </span> */}
        </a>
        <div class="flex md:order-2">
          {/* <button
            type="button"
            class="text-white-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 text-md text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class={
            "items-center justify-center w-full md:flex md:w-auto md:order-1 " +
            (navbarOpen ? " flex" : " hidden")
          }
          id="navbar-sticky"
        >
          <ul
            class={
              "flex flex-col p-4 md:p-0 mt-4 w-full font-medium border border-gray-100 rounded-lg bg-gray md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" +
              (navbarOpen ? "bg-red-700" : "bg-transparent")
            }
          >
            <li
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={() => {
                videoRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
              }}
            >
              <a
                class="block py-2 pl-3 pr-4  rounded md:bg-transparent  md:p-0 md:dark:text-blue-500"
                aria-current="page"
                style={{ cursor: "pointer" }}
              >
                Home
              </a>
            </li>
            <li class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <a
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                onClick={() => {
                  eventRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                  setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
                }}
                style={{ cursor: "pointer" }}
              >
                About
              </a>
            </li>
            <li
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={() => {
                campaignRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
              }}
            >
              <a
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                style={{ cursor: "pointer" }}
              >
                Artists
              </a>
            </li>
            <li
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={() => {
                contactRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setTimeout(() => setNavbarOpen(!navbarOpen), [1000]);
              }}
            >
              <a
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-100 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                style={{ cursor: "pointer" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

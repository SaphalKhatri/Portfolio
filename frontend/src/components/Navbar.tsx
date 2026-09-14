import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onScrolledChange?: (scrolled: boolean) => void;
}

const Navbar = ({ onScrolledChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;

      setIsScrolled(scrolled);
      onScrolledChange?.(scrolled);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScrolledChange]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`
        fixed
        z-50
        bg-zinc-900
        backdrop-blur-xl
        transition-all
        duration-500
        ease-in-out

        ${
          isScrolled
            ? `
              left-4
              top-6
              bottom-6
              w-64
              rounded-2xl
              border
              border-white/40
              shadow-xl
              shadow-blue-200/60
            `
            : `
              top-4
              left-4
              right-4
              w-auto
              rounded-2xl
              border
              border-white/40
              shadow-[0_0_25px_rgba(0,0,0,1)]
            `
        }
      `}
    >
      <div
        className={`
          transition-all
          duration-500
          ease-in-out

          ${
            isScrolled
              ? `
                h-full
                flex
                flex-col
                p-4
              `
              : `
                max-w-7xl
                mx-auto
                px-6
                h-16
                flex
                items-center
                justify-between
              `
          }
        `}
      >
        {/* =====================================================
            BRAND / PROFILE
            ===================================================== */}

        <div
          className={`
            transition-all
            duration-500

            ${
              isScrolled
                ? `
                  flex
                  flex-col
                  items-center
                  text-center
                  w-full
                `
                : `
                  flex
                  items-center
                `
            }
          `}
        >
          {/* NAME */}

          <Link
            to="/"
            className={`
              font-bold
              text-white
              hover:text-blue-600
              transition-colors
              duration-300

              ${
                isScrolled
                  ? "text-lg"
                  : "text-xl sm:text-2xl"
              }
            `}
          >
            Saphal Kumar Khatri
          </Link>

          {/* =================================================
              PROFILE IMAGE
              ================================================= */}

          <div
            className={`
              transition-all
              duration-500
              overflow-hidden

              ${
                isScrolled
                  ? "max-h-52 opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }
            `}
          >
            <div className="relative flex justify-center">
              <img
                src="/portfolio.png"
                alt="Saphal Kumar Khatri"
                className={`
                  object-cover
                  rounded-full
                  border-2
                  border-blue-500
                  shadow-lg
                  shadow-blue-100
                  ring-4
                  ring-blue-50
                  transition-all
                  duration-500

                  ${
                    collapsed
                      ? "w-10 h-10"
                      : "w-24 h-24"
                  }
                `}
              />

              {/* Online indicator */}

              <span
                className="
                  absolute
                  bottom-1
                  right-1
                  w-4
                  h-4
                  bg-emerald-500
                  rounded-full
                  border-2
                  border-white
                "
              />
            </div>

            {/* Developer badge */}

            {!collapsed && (
              <div className="mt-3 text-center">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    px-3
                    py-1
                    rounded-full
                    bg-blue-50
                    border
                    border-blue-100
                    text-blue-600
                    text-[11px]
                    font-semibold
                  "
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Full Stack Developer
                </span>
              </div>
            )}
          </div>
        </div>

        {/* =====================================================
            NAVIGATION
            ===================================================== */}

        <div
          className={`
            transition-all
            duration-500

            ${
              isScrolled
                ? `
                  flex
                  flex-col
                  flex-1
                  w-full
                `
                : `
                  flex
                  items-center
                  gap-6
                `
            }
          `}
        >
          <div
            className={`
              transition-all
              duration-500

              ${
                isScrolled
                  ? `
                    flex
                    flex-col
                    gap-2
                    my-auto
                    w-full
                  `
                  : `
                    flex
                    items-center
                    gap-1
                  `
              }
            `}
          >
            {/* HOME */}

            <Link
              to="/"
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                font-medium
                transition-all
                duration-300

                ${
                  isScrolled
                    ? `
                      px-3
                      py-3
                      w-full
                      bg-gray-50
                      border
                      border-gray-100
                      text-gray-700
                      shadow-sm
                      hover:bg-blue-50
                      hover:border-blue-100
                      hover:text-blue-600
                      hover:shadow-md
                    `
                    : `
                      px-3
                      py-2
                      text-sm
                      text-gray-600
                      hover:text-blue-600
                      hover:bg-blue-50
                    `
                }

                ${collapsed && isScrolled ? "justify-center" : ""}
              `}
            >
             

              {(!collapsed || !isScrolled) && (
                <span>Home</span>
              )}
            </Link>

            {/* PROJECTS */}

            <Link
              to="/projects"
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                font-medium
                transition-all
                duration-300

                ${
                  isScrolled
                    ? `
                      px-3
                      py-3
                      w-full
                      bg-gray-50
                      border
                      border-gray-100
                      text-gray-700
                      shadow-sm
                      hover:bg-blue-50
                      hover:border-blue-100
                      hover:text-blue-600
                      hover:shadow-md
                    `
                    : `
                      px-3
                      py-2
                      text-sm
                      text-gray-600
                      hover:text-blue-600
                      hover:bg-blue-50
                    `
                }

                ${collapsed && isScrolled ? "justify-center" : ""}
              `}
            >
            

              {(!collapsed || !isScrolled) && (
                <span>Projects</span>
              )}
            </Link>

            {/* CONTACT */}

            <Link
              to="/contact"
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                font-medium
                transition-all
                duration-300

                ${
                  isScrolled
                    ? `
                      px-3
                      py-3
                      w-full
                      bg-gray-50
                      border
                      border-gray-100
                      text-gray-700
                      shadow-sm
                      hover:bg-blue-50
                      hover:border-blue-100
                      hover:text-blue-600
                      hover:shadow-md
                    `
                    : `
                      px-3
                      py-2
                      text-sm
                      text-gray-600
                      hover:text-blue-600
                      hover:bg-blue-50
                    `
                }

                ${collapsed && isScrolled ? "justify-center" : ""}
              `}
            >
             

              {(!collapsed || !isScrolled) && (
                <span>Contact</span>
              )}
            </Link>
          </div>

          {/* =================================================
              ADMIN BUTTON
              ================================================= */}

          <Link
            to="/admin/login"
            className={`
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              transition-all
              duration-300
              shadow-md
              shadow-blue-200

              ${
                isScrolled
                  ? `
                    w-full
                    px-3
                    py-3
                    rounded-xl
                    text-xs
                  `
                  : `
                    px-5
                    py-2
                    rounded-lg
                    text-sm
                  `
              }
            `}
          >
            <span>🛡️</span>

            {(!collapsed || !isScrolled) && (
              <span>
                {isScrolled
                  ? "Admin Dashboard"
                  : "Admin"}
              </span>
            )}
          </Link>
        </div>

        {/* =====================================================
            SIDEBAR FOOTER
            ===================================================== */}

        <div
          className={`
            transition-all
            duration-500
            overflow-hidden

            ${
              isScrolled
                ? "max-h-32 opacity-100 mt-4"
                : "max-h-0 opacity-0 mt-0"
            }
          `}
        >
          {!collapsed && (
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                {/* SOCIAL */}

                <div className="flex gap-1">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-2
                      py-1
                      text-xs
                      text-gray-500
                      hover:text-gray-900
                      hover:bg-gray-100
                      rounded-md
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      px-2
                      py-1
                      text-xs
                      text-gray-500
                      hover:text-gray-900
                      hover:bg-gray-100
                      rounded-md
                      transition
                    "
                  >
                    LinkedIn
                  </a>
                </div>

                {/* TOP */}

                <button
                  type="button"
                  onClick={scrollToTop}
                  className="
                    text-xs
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  ↑ Top
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          COLLAPSE BUTTON
          ===================================================== */}

      {isScrolled && (
        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          className="
            absolute
            -right-3
            top-7
            w-6
            h-6
            rounded-full
            bg-white
            border
            border-gray-200
            text-gray-600
            text-xs
            flex
            items-center
            justify-center
            hover:bg-blue-50
            hover:text-blue-600
            transition
            shadow-md
          "
        >
          {collapsed ? ">" : "<"}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
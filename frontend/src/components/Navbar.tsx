import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  onScrolledChange?: (scrolled: boolean) => void;
}

const Navbar = ({ onScrolledChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change or when screen resizes to desktop
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

        /* MOBILE VIEW (fixed at top at all times, with flexbox) */
        top-3
        left-3
        right-3
        w-auto
        rounded-2xl
        border
        border-white/40
        shadow-[0_0_25px_rgba(0,0,0,0.8)]

        /* DESKTOP VIEW (preserved exactly as before) */
        ${
          isScrolled
            ? `
              md:left-4
              md:top-6
              md:bottom-6
              md:right-auto
              ${collapsed ? "md:w-20" : "md:w-64"}
              md:rounded-2xl
              md:border
              md:border-white/40
              md:shadow-xl
              md:shadow-blue-200/60
            `
            : `
              md:top-4
              md:left-4
              md:right-4
              md:bottom-auto
              md:w-auto
              md:rounded-2xl
              md:border
              md:border-white/40
              md:shadow-[0_0_25px_rgba(0,0,0,1)]
            `
        }
      `}
    >
      <div
        className={`
          transition-all
          duration-500
          ease-in-out

          /* Mobile view container using flexbox */
          flex
          flex-col
          p-3.5
          sm:p-4

          /* Desktop view container (unchanged) */
          ${
            isScrolled
              ? `
                md:h-full
                md:flex
                md:flex-col
                md:p-4
              `
              : `
                md:max-w-7xl
                md:mx-auto
                md:px-6
                md:h-16
                md:flex
                md:flex-row
                md:items-center
                md:justify-between
                md:p-0
              `
          }
        `}
      >
        {/* =====================================================
            TOP BAR HEADER (Brand + Mobile Hamburger / Desktop Profile)
            ===================================================== */}
        <div
          className={`
            w-full
            flex
            items-center
            justify-between
            transition-all
            duration-500

            ${
              isScrolled
                ? `
                  md:flex-col
                  md:items-center
                  md:text-center
                  md:w-full
                `
                : `
                  md:flex-row
                  md:items-center
                  md:w-auto
                `
            }
          `}
        >
          {/* BRAND / NAME */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`
              font-bold
              text-white
              hover:text-blue-500
              transition-colors
              duration-300
              truncate
              max-w-[220px]
              sm:max-w-none

              ${
                isScrolled
                  ? "text-base sm:text-lg md:text-lg"
                  : "text-lg sm:text-xl md:text-2xl"
              }
            `}
          >
            Saphal Kumar Khatri
          </Link>

          {/* =================================================
              MOBILE HAMBURGER BUTTON (Mobile only, uses CSS flexbox)
              ================================================= */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="
              flex
              md:hidden
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              border
              border-white/20
              bg-white/5
              hover:bg-white/15
              active:scale-95
              text-white
              transition-all
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/50
            "
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* =================================================
              DESKTOP PROFILE IMAGE (Only shown on Desktop when scrolled)
              ================================================= */}
          <div
            className={`
              hidden
              md:block
              transition-all
              duration-500
              overflow-hidden

              ${
                isScrolled
                  ? "max-h-52 opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0 pointer-events-none"
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
                onError={(e) => {
                  // Fallback avatar if local image not found
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
                }}
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
            MOBILE DROPDOWN MENU (Opens when hamburger is clicked)
            Uses responsive CSS flexbox layout
            ===================================================== */}
        <div
          className={`
            md:hidden
            flex-col
            w-full
            overflow-hidden
            transition-all
            duration-300
            ease-in-out

            ${
              mobileMenuOpen
                ? "flex max-h-96 opacity-100 pt-3 mt-3 border-t border-white/15"
                : "max-h-0 opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="flex flex-col gap-1.5 w-full">
            {/* MOBILE HOME */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                px-4
                py-2.5
                rounded-xl
                font-medium
                text-sm
                text-zinc-200
                hover:text-white
                hover:bg-white/10
                active:bg-white/15
                transition-all
                duration-200
              "
            >
              <div className="flex items-center gap-3">
               
                <span>Home</span>
              </div>
              <span className="text-xs text-zinc-400">→</span>
            </Link>

            {/* MOBILE PROJECTS */}
            <Link
              to="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                px-4
                py-2.5
                rounded-xl
                font-medium
                text-sm
                text-zinc-200
                hover:text-white
                hover:bg-white/10
                active:bg-white/15
                transition-all
                duration-200
              "
            >
              <div className="flex items-center gap-3">
              
                <span>Projects</span>
              </div>
              <span className="text-xs text-zinc-400">→</span>
            </Link>

            {/* MOBILE CONTACT */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                px-4
                py-2.5
                rounded-xl
                font-medium
                text-sm
                text-zinc-200
                hover:text-white
                hover:bg-white/10
                active:bg-white/15
                transition-all
                duration-200
              "
            >
              <div className="flex items-center gap-3">
              
                <span>Contact</span>
              </div>
              <span className="text-xs text-zinc-400">→</span>
            </Link>

            {/* MOBILE ADMIN BUTTON */}
            <Link
              to="/admin/login"
              onClick={() => setMobileMenuOpen(false)}
              className="
                mt-1.5
                flex
                items-center
                justify-center
                gap-2
                w-full
                px-4
                py-2.5
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                active:bg-blue-800
                text-white
                font-semibold
                text-sm
                shadow-md
                shadow-blue-900/40
                transition-all
                duration-200
              "
            >
              <span>🛡️</span>
              <span>Admin Dashboard</span>
            </Link>

            {/* MOBILE SOCIAL QUICK LINKS */}
            <div className="flex items-center justify-between pt-2 px-1 border-t border-white/10 mt-1">
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/5"
                >
                  LinkedIn
                </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP NAVIGATION (Hidden on mobile, preserved as-is)
            ===================================================== */}
        <div
          className={`
            hidden
            md:flex
            transition-all
            duration-500

            ${
              isScrolled
                ? `
                  flex-col
                  flex-1
                  w-full
                `
                : `
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
                      text-gray-200
                      hover:text-blue-400
                      hover:bg-white/10
                    `
                }

                ${collapsed && isScrolled ? "justify-center" : ""}
              `}
            >
              {(!collapsed || !isScrolled) && <span>Home</span>}
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
                      text-gray-200
                      hover:text-blue-400
                      hover:bg-white/10
                    `
                }

                ${collapsed && isScrolled ? "justify-center" : ""}
              `}
            >
              {(!collapsed || !isScrolled) && <span>Projects</span>}
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
                      text-gray-200
                      hover:text-blue-400
                      hover:bg-white/10
                    `
                }

                ${collapsed && isScrolled ? "justify-center" : ""}
              `}
            >
              {(!collapsed || !isScrolled) && <span>Contact</span>}
            </Link>
          </div>

          {/* =================================================
              DESKTOP ADMIN BUTTON
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
              <span>{isScrolled ? "Admin Dashboard" : "Admin"}</span>
            )}
          </Link>
        </div>

        {/* =====================================================
            DESKTOP SIDEBAR FOOTER (Scrolled Desktop Only)
            ===================================================== */}
        <div
          className={`
            hidden
            md:block
            transition-all
            duration-500
            overflow-hidden

            ${
              isScrolled
                ? "max-h-32 opacity-100 mt-4"
                : "max-h-0 opacity-0 mt-0 pointer-events-none"
            }
          `}
        >
          {!collapsed && (
            <div className="border-t border-gray-200/30 pt-4">
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
                      text-gray-400
                      hover:text-white
                      hover:bg-white/10
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
                      text-gray-400
                      hover:text-white
                      hover:bg-white/10
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
                    text-gray-400
                    hover:text-blue-400
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
          DESKTOP COLLAPSE BUTTON (Only visible on Desktop when scrolled)
          ===================================================== */}
      {isScrolled && (
        <button
          type="button"
          onClick={() => setCollapsed((prev) => !prev)}
          className="
            hidden
            md:flex
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

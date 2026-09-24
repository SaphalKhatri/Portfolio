import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [backendMessage, setBackendMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("http://localhost:8000/pro")
            .then((response) => response.json())
            .then((data) => {
                setBackendMessage(data.message);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setBackendMessage("Failed to connect");
                setLoading(false);
            });
    }, []);

    return (
        <div className="px-2 md:px-4 pt-20 md:pt-24">

            {/* ================= HERO VIDEO ================= */}
            <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden rounded-3xl">

                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/portfolio-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Backend Status */}
<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10">
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-xl">

        <h2 className="text-lg md:text-xl font-bold text-blue-400 mb-1">
            Backend Status
        </h2>

        {loading ? (
            <p className="text-base md:text-lg text-yellow-300">
                Loading...
            </p>
        ) : (
            <p className="text-base md:text-lg text-green-400 font-semibold">
                {backendMessage}
            </p>
        )}

    </div>
</div>


                {/* Center Hero Text */}
                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                            Welcome,
                        </h1>

                        <h2 className="mt-2 text-4xl md:text-6xl font-semibold text-blue-400">
                            Explore Me
                        </h2>

                        <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
                            Discover my projects, skills, and journey.
                        </p>
                    </div>
                </div>

            </section>

            {/* PRofile*/}
            {/* ================= PROFILE SECTION ================= */}
<section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

            {/* Section Title */}
            <div>
                <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">
                    About Me
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Profile
                </h2>

                <div className="w-16 h-1 bg-blue-600 mt-5 rounded-full" />
            </div>

            {/* Profile Content */}
            <div className="md:col-span-2">
            

                <p className="mt-5 text-lg text-gray-600 leading-8">
                    My expertise lies in full-stack web development using
                    <span className="font-semibold text-gray-800">
                        {" "}React, Django, Django REST Framework, and FastAPI
                    </span>.
                    I enjoy building RESTful APIs, implementing authentication
                    and role-based access control, and developing responsive,
                    user-friendly front-end interfaces.
                </p>

                <p className="mt-5 text-lg text-gray-600 leading-8">
                    I am passionate about applying my skills in a professional
                    environment through an internship or full-time opportunity.
                    I am always eager to learn, solve real-world problems, and
                    continue growing as a software developer.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-7">
                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        React
                    </span>

                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        Django
                    </span>

                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        Django REST Framework
                    </span>

                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        FastAPI
                    </span>

                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        REST APIs
                    </span>

                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                        Role-Based Access Control
                    </span>
                </div>
            </div>

        </div>
    </div>
</section>

{/*techincal skills */}
<section className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm">
                What I Work With
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                Skills & Technologies
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Technologies and tools I use to build modern,
                scalable and user-friendly applications.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Frontend */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-5">
                    Frontend
                </h3>

                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                        React
                    </span>

                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                        TypeScript
                    </span>

                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full">
                        Tailwind CSS
                    </span>
                </div>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-5">
                    Backend
                </h3>

                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full">
                        FastAPI
                    </span>

                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full">
                        Django
                    </span>

                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full">
                        Django REST
                    </span>
                </div>
            </div>

            {/* Database & Tools */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-5">
                    Database & Tools
                </h3>

                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                        PostgreSQL
                    </span>

                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                        Supabase
                    </span>

                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                        Git
                    </span>

                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full">
                        Docker
                    </span>
                </div>
            </div>

        </div>
    </div>
</section>

{/* ================= WHAT I CAN DO ================= */}
<section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-12">
            <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm">
                My Expertise
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                What I Can Do
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
                I enjoy turning ideas into functional, reliable, and
                user-friendly applications using modern web technologies.
            </p>
        </div>


        {/* Skills / Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Full Stack Development */}
            <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-2xl mb-5">
                    💻
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Full-Stack Development
                </h3>

                <p className="text-gray-600 leading-7">
                    Building complete web applications with modern
                    frontend and backend technologies, from user
                    interfaces to server-side logic.
                </p>
            </div>


            {/* REST API Development */}
            <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 text-2xl mb-5">
                    🔗
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    REST API Development
                </h3>

                <p className="text-gray-600 leading-7">
                    Designing and developing RESTful APIs using FastAPI
                    and Django REST Framework with clean and structured
                    backend architecture.
                </p>
            </div>


            {/* Authentication */}
            <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-2xl mb-5">
                    🔐
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Authentication & RBAC
                </h3>

                <p className="text-gray-600 leading-7">
                    Implementing secure authentication systems,
                    authorization, and role-based access control
                    for web applications.
                </p>
            </div>


            {/* Frontend Development */}
            <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 text-2xl mb-5">
                    🎨
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Responsive UI
                </h3>

                <p className="text-gray-600 leading-7">
                    Creating responsive and user-friendly interfaces
                    that work smoothly across desktop, tablet, and
                    mobile devices.
                </p>
            </div>


            {/* Database Integration */}
            <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-100 text-red-600 text-2xl mb-5">
                    🗄️
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Database Integration
                </h3>

                <p className="text-gray-600 leading-7">
                    Working with PostgreSQL and Supabase to design,
                    manage, and integrate databases with backend
                    applications.
                </p>
            </div>


            {/* Docker & Deployment */}
            <div className="group bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 text-2xl mb-5">
                    🐳
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Docker & Deployment
                </h3>

                <p className="text-gray-600 leading-7">
                    Containerizing applications with Docker and
                    preparing full-stack projects for reliable
                    deployment.
                </p>
            </div>

        </div>
    </div>
</section>


            {/* ================= PROJECTS SECTION ================= */}
            <section className="py-20 md:py-28">
                <div className="max-w-5xl mx-auto text-center px-6">

                    <p className="text-blue-500 font-semibold uppercase tracking-widest text-sm mb-3">
                        My Work
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Explore My Projects
                    </h2>

                    <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
                        Take a look at the projects I've built, the technologies
                        I've worked with, and the ideas I've turned into real
                        applications.
                    </p>

                    {/* Project Button */}
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                        Explore My Projects

                        <span className="text-xl">
                            →
                        </span>
                    </Link>

                </div>
            </section>

        </div>
    );
};

export default HomePage;
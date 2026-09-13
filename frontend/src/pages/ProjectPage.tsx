import React from "react";

interface Project {
  name: string;
  description: string[];
  github: string;
}

const projects: Project[] = [
  {
    name: "Movie-Recommendation API",
    description: [
      "Developed a movie recommendation API using Python, FastAPI, and scikit-learn.",
      "Implemented a content-based recommendation system using movie descriptions.",
      "Used TF-IDF to convert movie descriptions into numerical vectors.",
      "Applied Cosine Similarity** to identify and recommend movies with similar content.",
      "Built a machine learning-based movie recommendation API using TF-IDF and Cosine Similarity, gaining practical experience in integrating AI techniques into real-world applications.",
    ],
    github: "https://github.com/SaphalKhatri/movie-recommendation-api",
  },
  {
    name: "Coffee_Recipe_gemini-API",
    description: [
      "Developed a coffee recipe REST API using FastAPI, PostgreSQL, and Google Gemini AI",
      "Implemented database-first recipe searching to check whether a drink recipe already exists.",
      "Integrated Gemini AI to generate new recipes when they are not found in the database.",
      "Stored generated recipes in PostgreSQL for future reuse and to reduce unnecessary AI requests.",
      "Built API endpoints for creating, retrieving, and managing coffee recipes.",
    ],
    github: "https://github.com/SaphalKhatri/coffee_recipe-gemini-api",
  },
  {
    name: "Portfolio Website",
    description: [
      "Designed a personal portfolio using React and Tailwind CSS.",
      "Added sections for skills, projects, and contact information.",
      "Created a responsive layout for mobile and desktop.",
    ],
    github: "https://github.com/yourusername/portfolio",
  },
];
const ProjectPage = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 px-5 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Projects
          </h1>

          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex min-h-[320px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-sky-500/10"
            >
              <h2 className="mb-5 text-2xl font-semibold text-sky-400">
                {project.name}
              </h2>

              <ul className="mb-6 list-disc space-y-3 pl-5 text-slate-300">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-semibold text-slate-950 transition-colors duration-200 hover:bg-sky-400"
              >
                GitHub
                <span>↗</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectPage;



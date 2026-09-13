import { useState } from "react";

interface ProjectCreate {
  name: string;
  description: string;
  github_link: string;
}

const initialProject: ProjectCreate = {
  name: "",
  description: "",
  github_link: "",
};

function CreateProject() {
  const [project, setProject] = useState<ProjectCreate>(initialProject);
  const [adminPass, setAdminPass] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!adminPass) {
      alert("Please enter the admin password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8000/api/projects/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "admin-pass": adminPass,
          },
          body: JSON.stringify(project),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.detail || "Failed to create project");
        return;
      }

      alert("Project created successfully!");

      setProject(initialProject);
      setAdminPass("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">
          cCreate Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Project Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Project Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter project name"
              value={project.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              placeholder="Enter project description"
              value={project.description}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border rounded-lg px-4 py-2 resize-none"
            />
          </div>

          {/* GitHub Link */}
          <div>
            <label
              htmlFor="github_link"
              className="block text-sm font-medium mb-2"
            >
              GitHub URL
            </label>

            <input
              id="github_link"
              name="github_link"
              type="url"
              placeholder="https://github.com/username/project"
              value={project.github_link}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Admin Password */}
          <div>
            <label
              htmlFor="adminPass"
              className="block text-sm font-medium mb-2"
            >
              Admin Password
            </label>

            <input
              id="adminPass"
              type="password"
              placeholder="Enter admin password"
              value={adminPass}
              onChange={(e) => setAdminPass(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-lg py-2.5 font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;

import { GetStaticPaths, GetStaticProps } from 'next';
import { projects } from '../../data/projects';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((proj) => ({
    params: { slug: proj.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  return { props: { project } };
};

export default function ProjectDetail({ project }: any) {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <a href="/" className="text-blue-400 hover:underline">← Back to Home</a>
      <div className="max-w-3xl mx-auto mt-6">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-6 w-full"
        />
        <p className="text-lg text-gray-300 mb-6">{project.longDescription}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tools Used:</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string, i: number) => (
              <span key={i} className="bg-blue-600 text-sm px-2 py-1 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="space-x-4 mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            View Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

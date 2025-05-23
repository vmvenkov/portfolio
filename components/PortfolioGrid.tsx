'use client';
import { useState } from 'react';
import { projects } from '../data/projects';
import Link from 'next/link';

const categories = ['All', 'GIS', 'Dashboards'];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="text-white">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      {/* Dropdown filter */}
      <div className="mb-6">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <Link key={project.slug} href={`/portfolio/${project.slug}`}>
            <div className="p-4 bg-gray-900 rounded hover:bg-gray-800 cursor-pointer transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-700 text-white px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

import PortfolioGrid from '../components/PortfolioGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <header className="mb-10">
        <h1 className="text-4xl font-bold">🚀 My Data Portfolio</h1>
        <p className="text-gray-400">Projects in GIS, Dashboards, ETL & more</p>
      </header>

      <PortfolioGrid />
    </main>
  );
}

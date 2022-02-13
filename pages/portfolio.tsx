import Link from "next/link";
import Layout from "../components/Layout";
import Project from "../components/sections/sub-section/Project";

const PortfolioPage = () => {
  return (
    <Layout title="My Projects">
      <h1>Portfolio</h1>
      <p>Details of my projects</p>
      <div className="p-20">
        <Project
          title="Skyrim"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          snapshotUrl="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1401&q=80"
          techStack={[]}
        />
      </div>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default PortfolioPage;

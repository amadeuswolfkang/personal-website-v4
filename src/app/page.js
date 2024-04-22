import Image from 'next/image';
import Personal from './Personal';
import Resume from './Resume';
import Layout from './layout'; // adjust the path based on your project structure
// import Projects from './Projects';

export default function Home() {
  return (
    <Layout>
      <main>

        <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start mb-2 pt-12 md:space-x-48 mx-8">
        <Personal />
          <Resume />
          {/* <Projects/> */}
        </div>
      </main>
    </Layout>
  );
}

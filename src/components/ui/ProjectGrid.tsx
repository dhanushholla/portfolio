const projects = [
  {
    title: 'CodeArena',
    description: 'Custom built online IDE using react,judge0 and monaco',
    link: 'https://code-arena-mu.vercel.app/',
  },
  {
    title: 'SignMotion',
    description: 'React app that enables you to create Custom handwriting style animated svg Loader',
    link: 'https://signmotion.vercel.app/',
  },
  {
    title: 'CraftQR',
    description: 'React app that enables you to create your own QRcode',
    link: 'https://craftqr-kappa.vercel.app/',
  },
  {
    title: 'ScopeSmith',
    description: 'Vs code extension related to scope limiting and scope search',
    link: 'https://github.com/dhanushholla/scopeSmith',
  },
  {
    title: 'CartPractice',
    description: 'Basic cart app - CRUD features, search, sort, filter etc',
    link: 'https://cart-practice-app.vercel.app/',
  },
  {
    title: 'SaveNotes',
    description: 'ToDo list with CRUD, task prioritization and localstorage',
    link: 'https://save-notes-app.vercel.app/',
  },
  {
    title: 'VoxWarner',
    description: 'Vs code extension that plays audio when you try to save file with errors ',
    link: 'https://github.com/dhanushholla/voxWarner',
  },  
  {
    title: 'Choke the CheckBox ',
    description: 'socket io based checkbox selection practice app ',
    link: 'https://github.com/dhanushholla/socketPractice'
  },
  {
    title: 'PassForge',
    description: 'Password and Slug generator',
    link: 'https://pass-forge.vercel.app/',
  },
  {
    title: 'Table Practice app',
    description: 'Table practice react app with sort and CRUD',
    link: 'https://react-table-practice-ten.vercel.app/',
  },
  {
    title: 'Instagram Feed clone',
    description: 'Basic React class component based Insta feed',
    link: 'https://insta-ui-clone-gj7s.onrender.com/',
  },
  {
    title: 'Netflix UI clone',
    description: 'React Hooks practice - Basic Netflix clone App CRUD,search, play trailer',
    link: 'https://netflix-ui-clone.onrender.com/',
  },
];

const ProjectGrid = () => {
  return (
    <div className="container mx-auto p-4">
        <span className='text-xl'>Projects 🪄🎨:</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div data-aos="flip-down"
          data-aos-offset="2"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-black border-2 border-orangered rounded-lg font-semibold transition-all duration-300 ease-in-out hover:text-orangered hover:border-red-400 hover:shadow-lg"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;

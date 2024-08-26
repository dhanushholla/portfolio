import { FaEnvelope, FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { IconCloudDemo } from './IconCloudDemo';
import HyperText from './HyperText';
const resumeLink = "https://drive.google.com/uc?export=download&id=1LgcQgkOEdIfyUlpWNIjqzcnhhggXUxH6";

const ProfileHead = () => {

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };


  return (
    <div className="h-screen w-full flex flex-col items-center justify-center container px-4 py-6 mx-auto lg:py-16 lg:px-0">
      <section className="h-full w-full grid grid-cols-12 gap-4 ">
        <div className="sm:col-span-7 col-span-12 flex flex-col justify-center text-justify">
          <div className="text-2xl">
            Hey there <span className='wave'>👋</span>, I'm <div className="text-4xl font-bold ">
              <HyperText
              text="Dhanush Holla"
            /></div>
          </div>
          <div className="text-xl mt-2">
            Ex- SDE @ Kriyadocs |  ASE @ Tekion | Software Engineer (PI) @ EmbedUR Systems
          </div>
          <div className="text-lg mt-4">
            Experienced Frontend Developer adept in agile environments, delivering user-centric, responsive designs with React, Redux, and JavaScript. Advocating for test-driven development, CI/CD actions, and Dockerization. Keen interest in problem-solving and turning interesting ideas into POCs.
          </div>
          <div className='mt-6 '>
            <a
              href={resumeLink}
              download="Dhanush_Holla_Resume.pdf"
              className="px-4 py-2 text-black border-2 border-orangered rounded-lg font-semibold transition-all duration-300 ease-in-out hover:text-orangered hover:border-red-400 hover:shadow-lg "
            >
              Download Resume
            </a>

          </div>
          <div className="flex mt-6 space-x-4">
            <p className='text-xl'>Contact @ </p>
            <a href="https://github.com/dhanushholla" target="_blank" rel="noopener noreferrer">
              <FaGithub size={36} />
            </a>
            <a href="https://www.linkedin.com/in/dhanushholla" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={36} />
            </a>
            <a href="mailto:dhanushholla.mdh@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={36} />
            </a>
          </div>
        </div>
        <div className="sm:col-span-5 col-span-12 flex items-center justify-center">
          <IconCloudDemo />
        </div>
      </section>
      <button
        onClick={scrollToNextSection}
        className="hidden lg:flex items-center justify-center text-orangered border-2 border-orangered rounded-full w-10 h-10 absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:border-red-400"
      >
        <FaArrowDown size={20} />
      </button>
    </div>
  )
}

export default ProfileHead
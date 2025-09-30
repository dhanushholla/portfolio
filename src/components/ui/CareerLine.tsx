import { Timeline } from './timeline';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { t1,t2,t3,t4,k1,k2,k3,k4 } from '../../assets/images';
export function CareerLine() {
  useEffect(() => {
    AOS.init();
  }, []);

  const data = [
        {
      title: 'Koolio.ai',
      content: (
        <div data-aos="flip-down"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-normal mb-2">
            Lead Engineer -  (Aug 2025 - Present) - (California, United States - Remote)
          </p>
          <div  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 border border-orange-500">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Implementing exciting AI driven future-proof features for Koolio Kreators.
            </div>
          </div>
        </div>
      ),
    },
        {
      title: 'Koolio.ai',
      content: (
        <div data-aos="flip-down"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-normal mb-2">
            Senior Frontend Developer -  (May 2025 - Aug 2025) - (California, United States - Remote)
          </p>
          <div  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 border border-orange-500">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Implemented real-time collaboration for audio content editing using a robust socket.io utility module.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Revamped frontend autonomy in audio editing by persisting audioData with IndexedDB, indices, and cache/memoization strategies.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Integrated OAuth & SSO providers (Google, Facebook, Apple) for seamless one-click signup, boosting user conversion rates.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Led and mentored a team of 2 frontend developers, driving sprint planning, architectural decisions, and scalable design practices.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Established a baseline Redux setup with optimized slice structures, while scoping redundant data using a custom `localContext` provider HOC.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Developed a sharedAudioContext leveraging WebAudio API and Wavesurfer.js, enabling playback, track management, downloads, pagination, and filtering across hundreds of audio entries.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Delivered key workflows: EditingFlow (upload & edit), AIFlow (AI generate & audio editing), PublishFlow (third-party publishing & RSS feeds), and RecordFlow (record & edit - single user).
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Actively contributing to 'Koolio 2.0', with new design, new architecture and loads of new feature.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Koolio.ai',
      content: (
        <div data-aos="flip-down"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-normal mb-2">
            Software Engineer -  (Nov 2024 - May 2025) - (California, United States - Remote)
          </p>
          <div  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 border border-orange-500">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Integrated a sync layer between backend and frontend via localIndexedDB, ensuring zero missed operations during network outages, powering collaborative editing rooms for podcasters.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Built a history restore system (similar to Time Machine) to navigate audio versions with edit previews.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Engineered frontend audio buffer manipulation and instant multi-format downloads (WAV, FLAC, AIFF, MP3 via ffmpeg).
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Implemented an Express middleware proxy service between React frontend and API Gateway, handling auth, response shaping, and securing API keys/credentials.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Contributed to auth/session utilities, POCs, and backend migration from AWS to GCP.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Also experimenting on Dockerizing app, GCP CI build configs and alerts, logs, telemetry etc.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 revamping audio to transcript operation logics like fade, record, insert, version preview and relay ops among collaborators etc.. with respect to koolio v1.0 architecture
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Kriyadocs',
      content: (
        <div data-aos="flip-down"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-sm font-normal mb-2">
            Software Development Engineer - (Oct 2023 - Aug 2024) - (Chennai, India)
          </p>
          <div  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 border border-orange-500 cursor-auto">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Improved submission page UI and input validations, ensuring a smoother user experience.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Integrated ElasticSearch DB metadata into articles dashboard flyouts, enriching user insights.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Developed features like comment bifurcations and article signoff emails, enhancing platform functionality.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Implemented real-time dashboard updates using socket.io and Redis, notifying users dynamically for article signoff and metadata change events.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Revamped auto email updates and reminders logic in microservices that are responsible for article updates.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">

              🚀 Spearheaded the creation of automated scripts and endpoints, empowering L2 support teams to efficiently tackle redundant tasks. Reduced inbound requests and saved valuable time, demonstrating proficiency in streamlining support operations.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Engineered intricate CI/CD pipelines utilizing GitLab CI runner, meticulously configuring rulesets and job conditions. Achieved an impressive 80% boost in code movement efficiency, showcasing adeptness in accelerating development-to-live deployment processes.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Advocated and engaged in Dockerizing efforts of multiple repositories, ensuring seamless deployment and management across diverse environments. Skillfully mitigated platform dependency issues for support teams, highlighting expertise in enhancing system stability and scalability.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Implemented metrics monitoring and service observability mechanisms using Kibana. Conducted successful proof of concepts for automated service downtime notifications and restarts, demonstrating proactive issue resolution capabilities.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Architected a sophisticated Git-based feature branching ticketing workflow, optimizing feature progression and minimizing development overheads. Displayed proficiency in fostering a collaborative environment and driving efficiency improvements in development processes.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀  Implemented a microservice responsible for parsing inbound articles in latex form to internal format.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm flex-wrap mt-4">
              <span className='border border-slate-700 p-1 rounded-xl'>ReactJs</span><span className='border border-slate-700 p-1 rounded-xl '>Javascript</span> <span className='border border-slate-700 p-1 rounded-xl '>JQuery</span> <span className='border border-slate-700 p-1 rounded-xl '>NodeJs</span> <span className='border border-slate-700 p-1 rounded-xl '>Docker</span> <span className='border border-slate-700 p-1 rounded-xl '>ElasticSearch</span> <span className='border border-slate-700 p-1 rounded-xl '>Redis</span> <span className='border border-slate-700 p-1 rounded-xl '>Socket.io</span> <span className='border border-slate-700 p-1 rounded-xl '>Latex</span> <span className='border border-slate-700 p-1 rounded-xl '>Express</span> <span className='border border-slate-700 p-1 rounded-xl '>Gitlab CI/CD</span>
            </div>
          </div>
          <div  className="grid grid-cols-2 gap-4 ">
            <img
              src={k1}
              alt="hackathon runner up image"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={k2}
              alt="Taking seminar"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={k3}
              alt="Torch bearer Feb'24"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={k4}
              alt="Torch bearer Feb'24"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Tekion',
      content: (
        <div data-aos="flip-down"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-normal mb-2">
            Associate Software Engineer - (Aug 2022 - Oct 2023) - (Chennai, India)
          </p>
          <div  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 border border-orange-500">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 key developer in Tekion Automation platform’s (TAP) indigenously systemized one-stop support solution similar to Jira, Twilio and Asana to reduce third-party dependencies.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Modernized the testing suite framework on Jest and RTL for modules like Support portal, Support
              agent, Rule Engine and improved the code coverage percentage of legacy codebase by 10%.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Advocated for Test-Driven-Development and implemented SonarQube pipeline on local dev
              environments and was committed to avoid code smells and other ambiguous code logics with time
              constraint by making use of pre-commit hooks and reduced debugging time by 13%.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Architected new workflow structure along with the product team ensuring seamless ticket resolution
              lifecycle and enhanced the existing macro-system that improved multi-tickets update concurrently,Performed MUMT (multi-user-multi-ticket) update push banner notification within the portal for
              concurrent users with the help of Pusher that assured transparency in ticket updates
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Developed a higher order component for multi-language support system and made it reusable for the whole TAP and made interesting proof-of-concepts for ensuring secret key detection whitelisting for pre commit hooks and also deployed bash script that helps to create necessary code-setup for a developer onboarding regardless of the project
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Enacted in developing features on modules Macros, Triggers, workflow, chat logs that improved
              CSAT score and solved critical node-module based blockers for CRM sprint and did some bug fixes.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm flex-wrap mt-4">
              <span className='border border-slate-700 p-1 rounded-xl'>ReactJs</span><span className='border border-slate-700 p-1 rounded-xl '>Javascript</span> <span className='border border-slate-700 p-1 rounded-xl '>Jest</span> <span className='border border-slate-700 p-1 rounded-xl '>NodeJs</span> <span className='border border-slate-700 p-1 rounded-xl '>Bash</span> <span className='border border-slate-700 p-1 rounded-xl '>Redux</span> <span className='border border-slate-700 p-1 rounded-xl '>RTL</span> <span className='border border-slate-700 p-1 rounded-xl '>Pusher</span> <span className='border border-slate-700 p-1 rounded-xl '>SonarQube</span> <span className='border border-slate-700 p-1 rounded-xl '>MjML</span> <span className='border border-slate-700 p-1 rounded-xl '>AntDesign</span>
            </div>
          </div>
          <div  className="grid grid-cols-2 gap-4">
            <img
              src={t1}
              alt="Mentor Appreciation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={t2}
              alt="swag challenge winner"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={t3}
              alt="TAP FE team"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={t4}
              alt="Brain storming"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'EmbedUR systems',
      content: (
        <div data-aos="flip-down"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-normal mb-2">
            Software Engineer (PI) -  (Jan 2022 - July 2022) - (Chennai, India)
          </p>
          <div  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 border border-orange-500">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Revamped bootloader QSPI (execute in place-POC) and custom firmware CLI menu with necessary board-based API mapping, enhancing diagnostic and troubleshooting capabilities by two-fold rate.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Restructured interval-based board behavior with peripherals like jumper cable, Segger RTT, LED and power junction usage, enabling on-board issue debugging and reducing context switch by half-time.
              Performed codebase migration from infineon WICED SDK to Renesas E2 SDK.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Enhanced existing Cisco sec-ops product – firepower, which involves the snort IDs engine to act like a cloud firewall - improving system security posture monitoring.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Spearheaded OAUTH based proof of concept called APPA - application peer protocol authentication to improve role-based access and authentication for anyconnect, BEE, cisco sec-ops PX grid.
              Assisted in developing auth daemon in go as a docker container and deployed in AWS EKS(inter-cisco-bay-testbed) through kubectl.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm flex-wrap mt-4">
              <span className='border border-slate-700 p-1 rounded-xl '>C</span> <span className='border border-slate-700 p-1 rounded-xl '>C++</span> <span className='border border-slate-700 p-1 rounded-xl '>Docker</span> <span className='border border-slate-700 p-1 rounded-xl '>Regex Engine</span> <span className='border border-slate-700 p-1 rounded-xl '>EC2</span> <span className='border border-slate-700 p-1 rounded-xl '>AWS EKS</span> <span className='border border-slate-700 p-1 rounded-xl '>MQTT</span> <span className='border border-slate-700 p-1 rounded-xl '>Infineon SDK</span> <span className='border border-slate-700 p-1 rounded-xl '>Snort Engine</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Mepco Schlenk',
      content: (
        <div data-aos="flip-down"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-sm font-normal mb-2">
            B.E CSE Student (8.32)CGPA -  (Jun 2018 - Jun 2022) - (Chennai, India)
          </p>
          <div  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 border border-orange-500">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <p>
                  <strong> 🚀 M. Dhanush Holla</strong> et al.,&nbsp;
                &ldquo;Link Failure Handling in SDN via Source Path Routing,&rdquo;&nbsp;
                <em>Wireless Networks</em>, Vol. 30, Issue 2, Feb 2024.{' '}
                <a href="https://doi.org/10.1007/s11276-024-03660-1" target="_blank" rel="noopener noreferrer">
                  DOI
                </a>
              </p>
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Project was selected as the “best project” in CSE by Mepco Schlenk Engineering college out of 68 teams(128 students) projects by industry experts, for the academic year 2021-2022. The Team will receive cash award of Rs.10,000 in Feb,2023
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 I have organized 16+ technical talks, 4 hands-on workshops, 2 DIY-Bootcamps on topics related to computer science and trends like cybersecurity, cloud computing, networking, DSA-real world usages.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🚀 Winner - Ideathon on theme : "waste Management", Google Developers Club MSEC Chapter,
              Winner on intercollegiate event on website-security, web crawling strategies and crypt-analysis,
              Runner - Techno-Innovate MSEC 2021,
              Cleared IIT BOMBAY AAKAAR'20 Regional Level selection
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (<>
    <Timeline
      data={data}
    />
  </>
  );
}

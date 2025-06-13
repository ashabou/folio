import { FaCode, FaServer, FaTools, FaPython, FaJs, FaJava, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt, FaGit } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiKubernetes, SiTypescript, SiDjango } from "react-icons/si";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
const SkillsAndProjects = () => {
  return (
    <>
      <section className="min-h-[90vh] flex items-center bg-gray-900 text-white px-4 py-12 md:py-0">
        <div className="responsive-container-card">
          <motion.div 
            className="content-card-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title */}
            <motion.h1 
              className="skills-row"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Skills & Projects
            </motion.h1>

            {/* Single Column with 3 Rows */}
            <div className="skills-row">
              <motion.div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                  <FaCode className="mr-2" /> Languages & Frameworks
                </h2>
                <div className="flex justify-center">
                  <div className="flex items-center flex-wrap gap-10 px-14 py-12 bg-gray-200 rounded-lg">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" style={{ width: "45px", height: "64px" }}/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" style={{ width: "45px", height: "64px" }} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ width: "45px", height: "64px" }}/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" style={{ width: "45px", height: "64px" }}/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" style={{ width: "45px", height: "64px" }} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"style={{ width: "45px", height: "64px" }} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" style={{ width: "45px", height: "64px" }}/>
                  </div>
                </div>
              </motion.div>

              {/* Row 2: Database & Infrastructure */}
              <motion.div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                  <FaServer className="mr-2" /> Database & Infrastructure
                </h2>
                <div className="flex flex-wrap gap-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg">
                    {/*<SiPostgresql className="text-2xl text-blue-600" style={{ width: "45px", height: "64px" }}/>*/}
                    
                     <SiMongodb className="text-4xl text-green-500" style={{ width: "45px", height: "64px" }}/>
                    
                    {/*<FaAws className="text-2xl text-yellow-500" style={{ width: "45px", height: "64px" }}/>*/}
                    
                    {/*<FaDocker className="text-2xl text-blue-400" style={{ width: "45px", height: "64px" }}/>*/}
                    
                    {/*<SiKubernetes className="text-2xl text-blue-400" style={{ width: "45px", height: "64px" }}/>*/}
                    
                  </div>
                </div>
              </motion.div>

              {/* Row 3: Development Tools */}
              <motion.div className="w-full md:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-blue-300 flex items-center">
                  <FaTools className="mr-2" /> Development Tools
                </h2>
                <div className="flex flex-wrap gap-10">
                  <div className="flex items-center gap-3 px-4 py-2 bg-gray-700 rounded-lg">

                    
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" style={{ width: "45px", height: "64px" }}/> 
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" style={{ width: "45px", height: "64px" }} />
                    <FaGithub className="text-2xl text-gray-400" style={{ width: "45px", height: "64px" }}/>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="responsive-container-card">
        <div className="curriculum-box">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
          >

            <ImageCard
              description="With increasing security requirements and more and more cases of data misuse, it is
              important to handle sensitive data securely. Various security features can help protect
              the data. This project aims to develop a module on the TinyRISC-V Processor that combines some of these security
              features into a Secure Memory Unit module. The module provides a memory area that
              is protected from attacks and errors, specifically caused by Fault injections using various algorithms. 
              <br /> Used Technologies: C++, SystemC, C, Assembly, RISC-V, VHDL, logiSim."
              title="Secure Memory Unit"
              imageUrl="/assets/smu.svg"
            />
            <ImageCard
              description="I presented an hour long talk about the Causal Transfer for Imitation Learning and Decision Making under
              Sensor-Shift. Highlighting the problem under Action-Effect Learning and Imitation Learning. The talk was based on the work of Prof- Jalal Etesami and Dr. Philipp Geiger."
              title="Seminar : Causal Reasoning"
              imageUrl="/assets/seminar.svg"
            />
            <ImageCard
              description="Path Velocity Decomposition (PVD) is a widely used
              approach for motion planning in autonomous driving, which is
              based on the independent optimization of spatial and temporal
              components of a trajectory. In this work, an PVD-based motion
              planner for the CommonRoad benchmark suite is implemented
              and evaluated. This approach integrates optimization-based path
              planning with sampling-based techniques for lane changes. This
              ensures smooth and collision-free trajectories in complex multi-
              lane scenarios. We systematically evaluate our method on all
              feasible CommonRoad scenarios, successfully solving 95% of
              them and further custom built static obstacle arrangements.
              The results demonstrate the effectiveness of our approach in
              structured environments, highlighting its potential for further
              integration into autonomous driving frameworks."
              title="Motion Planning for Autonomous Vehicles"
              imageUrl="/assets/edgar.svg"
            />
            <ImageCard	
              description="A hands on Project to build a Rock Paper Scissors game with a 
              live AI referee. The game allows users to play against an AI that can detect 
              the user's hand gesture in real-time using computer vision techniques. The AI 
              referee ensures fair play by accurately recognizing the gestures and determining 
              the winner of each round. This project combines elements of game development, 
              computer vision, and machine learning to create an interactive and engaging experience.
              <br /> Used Technologies: Python, OpenCV, Pytorch, Roboflow Framework."
              title="Rock Paper Scissors Game Live AI Referee"
              imageUrl="/assets/rps.svg"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

type ImageCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

function ImageCard({ imageUrl, title, description }: ImageCardProps) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="cardImage" />
      <div className="cardContent">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
}

export default SkillsAndProjects;
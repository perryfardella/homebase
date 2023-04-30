import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Particles from "react-particles";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import ProjectCard from "@/components/projectCard";

//TODO: Drop all margins on mobile to half, ie. 2rem instead of 4

export const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <main>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#ffffff",
            },
          },
          fpsLimit: 144,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#0d47a1",
            },
            links: {
              color: "#0d47a1",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "line",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="flex flex-col min-h-screen min-w-screen mb-4">
        <div className="flex flex-col m-8 md:flex-row items-center md:items-flex-start gap-8 justify-center relative z-1">
          <div className="avatar">
            <div className="w-40">
              <Image
                src="/images/perry.png"
                alt="an image of Perry"
                height="400"
                width="400"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <h1 className="text-2xl">Perry Fardella</h1>
            <h2>📍 Perth, Western Australia</h2>
            <div className="flex gap-4">
              <SocialIcon
                url="https://twitter.com/perryfardella"
                style={{ height: 36, width: 36 }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/perry-fardella/"
                style={{ height: 36, width: 36 }}
              />
              <SocialIcon
                url="https://github.com/perryfardella"
                style={{ height: 36, width: 36 }}
              />
              <SocialIcon
                url="https://www.instagram.com/pfardella/"
                style={{ height: 36, width: 36 }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col self-center relative z-1 ml-8 mr-8 mt-8 max-w-5xl gap-4">
          <p className="text-2xl">Total MRR: $0</p>
          <p>
            Hey, I'm a CPA and Software Engineer trying to dive into the world
            of Indie Hacking. On this page you'll find a collection of all the
            projects I've worked on over the years.
          </p>
        </div>
        <div className="flex self-center w-full relative z-1 divider ml-8 mr-8 max-w-5xl" />
        <div className="flex flex-col items-center gap-4 ml-8 mr-8">
          <ProjectCard
            title="Twitter Follow Groups"
            description="A tool that allows tdtctfvyby fyuftyfht tyhtyufbtuf tfutyfu tfntuftugu tuntufu  fnyt you to create groups of Twitter users and follow them all with one click."
            link="https://google.com" // placeholder for now
            icon="icon"
            mrr={0}
            status="In Development"
          />
          <ProjectCard
            title="Twitter Follow Groups"
            description="A tool that allows you to create groups of Twitter users and follow them all with one click."
            link="https://google.com" // placeholder for now
            icon="icon"
            mrr={0}
            status="In Development"
          />
          <ProjectCard
            title="Twitter Follow Groups"
            description="A tool that allows you to create groups of Twitter users and follow them all with one click."
            link="https://google.com" // placeholder for now
            icon="icon"
            mrr={0}
            status="In Development"
          />
          <ProjectCard
            title="Twitter Follow Groups"
            description="A tool that allows you to create groups of Twitter users and follow them all with one click."
            link="https://google.com" // placeholder for now
            icon="icon"
            mrr={0}
            status="In Development"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;

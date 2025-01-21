import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          <div className="text-center md:text-left">
            <div className="mb-20 md:mb-24"/>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Chisheng Chen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
             A CTF player who's good at Crypto, Pwn and Reverse.
             Used to be a Competitve Programmer.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg uppercase flex items-center gap-2 text-accent border-accent bg-primary hover:bg-accent hover:text-primary"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button> 
                  if needed */}
                <div className="mb-8 md:mb-0">
                  <Social containerStyles="flex gap-6" 
                    iconStyles={
                      "w-9 h-9 border border-accent rounded-full flex \
                      justify-center items-center text-accent text-base \
                      hover:shadow-[0_0_10px_4px_theme('colors.accent.DEFAULT')] \
                      hover:text-primary hover:bg-accent hover:scale-125 hover:translate-y-[-4px] hover:transition-all \
                      duration-500 ease-in-out"
                    }
                  />
                </div>
            </div>
          </div>
          {/* <div>photo</div>  if has photo */}
        </div> 
      </div>
    </section>
  );
};

export default Home;

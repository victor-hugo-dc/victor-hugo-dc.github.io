import React from 'react';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box sx={{ width: "650px", margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    Hey, I&apos;m Victor Hugo
                </h1>
                <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
                    <p>
                        I&apos;m a software engineer from Peru, based in Northern Virginia. I specialize in backend development and occasionally dabble into full-stack. Currently, I'm working on transforming the tech stack at <a target="_blank" rel="noreferrer" href="https://www.aroundtownmovers.com/">Around Town Movers</a> and building websites at <a target="_blank" rel="noreferrer" href="https://javiwebdesign.com/">Javi Web Design</a>.
                        <br /><br />
                        I&apos;ve had the opportunity to intern at companies like <a target="_blank" rel="noreferrer" href="https://www.microsoft.com/en-us/">Microsoft</a> and <a target="_blank" rel="noreferrer" href="https://www.snapchat.com/">Snap, Inc.</a>, and I&apos;ve also been part of the Yale Interactive Machines group.
                        <br /><br />
                        When I&apos;m not coding or contributing to open-source projects, you&apos;ll find me outdoors camping, fishing, or practicing martial arts. I also enjoy tinkering with tech, playing chess, and exploring my creative side through charcoal drawing.
                    </p>
                </div>
                <hr className="hr" />
            </div>
        </Box>
    )
}


export default Home;
import React from 'react';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box sx={{ width: "650px", margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    Hey, I&apos;m Victor Hugo
                </h1>
                <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
                    <p>
                        I&apos;m a software engineer from Peru, based in Northern Virginia. I'm a language-agnostic backend developer who occasionally ventures into the world of full-stack. Currently, I'm modernizing tech infrastructure at <a target="_blank" rel="noreferrer" href="https://www.aroundtownmovers.com/">Around Town Movers</a> and building websites at <a target="_blank" rel="noreferrer" href="https://javiwebdesign.com/">Javi Web Design</a>.
                        <br /><br />
                        As a former QuestBridge Scholar at Yale University, I&apos;ve had the opportunity to intern at companies like <a target="_blank" rel="noreferrer" href="https://www.microsoft.com/en-us/">Microsoft</a> and <a target="_blank" rel="noreferrer" href="https://www.snapchat.com/">Snap, Inc.</a>, as well as contribute to research at the <a target="_blank" rel='noreferrer' href='https://interactive-machines.com/'>Interactive Machines group</a>.
                        <br /><br />
                        Beyond the keyboard, I chase adventure: winter glamping in snow-draped forests, casting lines into the Potomac&apos;s currents, and the disciplined pursuit of Muay Thai—now tempered with Jiu-Jitsu. I document memories through a DSLR lens and my dad&apos;s retro Palmcorder, and lose hours to charcoal&apos;s bold strokes.
                        <br /><br />
                        Learn a bit more <a target="_self" rel="noreferrer" href="/about">about me</a>.
                    </p>
                </div>
                <hr className="hr" />
            </div>
        </Box>
    )
}


export default Home;
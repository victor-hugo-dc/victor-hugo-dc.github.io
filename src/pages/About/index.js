import React from 'react';
import { Box } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ width: "650px", margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    About Me
                </h1>
                <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
                    <p>
                        Hey, I&apos;m Vic. I&apos;m a developer, martial artist, outdoor enthusiast and just a naturally curious person in life.
                        I&apos;m currently based in the Washington, D.C. area, where I work at Around Town Movers as a SWE working on product integration.
                        On the side, I run Javi Web Design, a small venture where I help local businesses create sleek, functional websites that stand out in the digital world.
                    </p>
                    <p>
                        I have previously had the pleasure of working at Microsoft and Snap, Inc.
                        Having come a long way from being an undergraduate researchers at the Yale Interactive Machines Group, I am deeply interested in AI, Robotics, and HCI.
                        I&apos;ve also had the chance to contribute to open-source projects, such as PandasAI.
                    </p>
                    <p>
                        Every step of the way, I&apos;ve been driven by curiosity and a love for solving complex problems.
                    </p>
                    {/* <p>
                        When I&apos;m not glued to my laptop, you&apos;ll find me:
                        <div>
                            <ul>
                                <li>On the Potomac on the prowl for snakehead.</li>
                                <li>Deep in thought, contemplating my next chess move.</li>
                                <li>Tinkering with my home server.</li>
                                <li>Rooting against Dagestanis in the UFC.</li>
                                <li>Sketching with charcoal while Jimi Hendrix soundtracks my descent into artistic madness.</li>
                            </ul>
                        </div>
                    </p> */}
                </div>
            </div>
        </Box>
    )
}


export default About;
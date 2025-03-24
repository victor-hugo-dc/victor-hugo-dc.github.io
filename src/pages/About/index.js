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
                        Hey, I&apos;m Vic. I&apos;m a software developer, martial artist, and outdoor enthusiast.
                        I&apos;m currently based in Northern Virginia, where I work at Around Town Movers as a SWE working on automating their workflows.
                        On the side, I run Javi Web Design, a small venture where my long-time friend and I help local businesses create modern, functional websites that stand out in the digital world.
                    </p>
                    <p>
                        My path has wound through internships at tech titans like Microsoft and Snap, Inc., and formative years at Yale University, where I contributed to AI and robotics research at the Interactive Machines Group and a brief stint at the Efficient Computing Lab.
                        Though I paused my degree due to mental health concerns, I will be resuming my academic journey this fall at James Madison University, with an anticipated graduation date of May 2026.
                    </p>
                    <p>
                        Currently, I&apos;m working on the following:
                        <div>
                            <ul>
                                <li>Installing Pi-Hole and WireGuard on my home server.</li>
                                <li>Planning out a fishing trip to OBX, where I intend to use my new kayak.</li>
                                <li>Studying for the AWS Cloud Architect Exam.</li>
                            </ul>
                        </div>
                    </p>
                </div>
            </div>
        </Box>
    )
}


export default About;
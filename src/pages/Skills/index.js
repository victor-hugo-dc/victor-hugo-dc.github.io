import React from 'react';
import { Box } from '@mui/material';
import { skills } from '../../constants/data/skills';
import InfiniteSkill from './InfiniteSkill';
import ProjectLink from './ProjectLink';

const Skills = () => {
    return (
        <Box sx={{ width: "650px", maxWidth: '80%', margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    My Skillset
                </h1>
                <InfiniteSkill skills={skills} />
            </div>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    My Projects
                </h1>
                <ProjectLink
                    title="Contributions to PandasAI"
                    link="https://github.com/sinaptik-ai/pandas-ai"
                >
                    Made early contributions to the repository by developing a command-line interface (CLI) tool and introducing support for handling multiple dataframes.
                </ProjectLink>
                <ProjectLink
                    title="Components for Microsoft's Platform for Situated Intelligence"
                    link="https://github.com/victor-hugo-dc/TBD.Psi.Components"
                >
                    Developed deserializers to convert ROS Bags containing Azure Kinect Body Tracking, PointCloud, and MarkerArray data into Psi-compatible stores, enabling visualization and analysis in Psi Studio.
                </ProjectLink>
                <ProjectLink
                    title="Computational Intelligence for Connect Four"
                    link="https://github.com/victor-hugo-dc/connectfour-ai"
                >
                    Developed a Monte Carlo Tree Search (MCTS) algorithm and a Deep Q-Network (DQN) to play Connect Four as part of a final project for the Computational Intelligence for Games course.
                </ProjectLink>
            </div>
        </Box>
    )
}

export default Skills;
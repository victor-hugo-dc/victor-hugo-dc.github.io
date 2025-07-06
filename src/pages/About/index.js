import { Box } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ width: "650px", maxWidth: '80%', margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    About Me
                </h1>
                <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
                    <p>
                        Hey, I&apos;m Vic—a software developer, martial artist, and outdoor enthusiast based in Northern Virginia.
                        I work as a software engineer at Around Town Movers, where I focus on automating workflows and modernizing systems for scalability.
                        On the side, I run Javi Web Design, a small venture I co-founded with a longtime friend to help local businesses build modern, functional websites that stand out in the digital world.
                    </p>
                    <p>
                        My journey has taken me through internships at Microsoft and Snap, Inc., as well as research roles at Yale&apos;s Interactive Machines Group and a brief stint at the Efficient Computing Lab.
                        Though I stepped away from my degree for mental health reasons, I&apos;ll be resuming my academic journey this fall at James Madison University, with an anticipated graduation date of May 2026.
                    </p>
                    <p>
                        Outside of tech, I&apos;m an avid outdoorsman. I camp often with friends, dabble in fishing, and am still getting the hang of snowboarding.
                        At home, I love tinkering with my self-hosted server, setting up services like Seafile, WordPress, a Minecraft server, and a custom Discord bot for music.
                        Martial arts is another big part of my life—I&apos;ve been training in Muay Thai for a few years and recently started Jiu-Jitsu.
                        I&apos;m also passionate about photography and art.
                    </p>
                    <p>
                        Currently, I&apos;m working on the following projects:
                    </p>
                    <ul>
                        <li><p>Experimenting with Open WebUI on Google Cloud.</p></li>
                        <li><p>Starting a small flower garden in my backyard.</p></li>
                        <li><p>Digitizing cassettes from my dad&apos;s Palmcorder that had been collecting dust.</p></li>
                        <li><p>Preparing for technical interviews.</p></li>
                    </ul>
                </div>
            </div>
        </Box>
    )
}


export default About;
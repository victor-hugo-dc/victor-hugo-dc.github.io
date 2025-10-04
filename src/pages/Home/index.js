import { Box, Stack } from '@mui/material';

const Home = () => {
    return (
        <Box sx={{ width: "650px", maxWidth: '80%', margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    <Stack direction="row" gap={2}>
                        Hey, I&apos;m Victor Hugo
                        <Box
                            sx={{
                                backgroundImage: "url('assets/me.png')",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: '36px',
                                width: '36px',
                            }}
                        >
                        </Box>

                    </Stack>
                </h1>
                <div className="mb-8 prose leading-6 text-justify text-gray-600 dark:text-gray-400">
                    <p>
                        I&apos;m a Peruvian-American software engineer based in Northern Virginia. I prefer backend work, specializing in cloud systems. Currently, I&apos;m building <a target="_blank" rel="noreferrer" href="https://javiwebdesign.com">Capitol Creative Collective</a>. Check out my latest projects for <a target="_blank" rel="noreferrer" href="https://www.instagram.com/atlanticsuncontrol_inc/">Atlantic Sun Control, Inc.</a> and <a target="_blank" rel="noreferrer" href="https://allenporterlandscaping.com/">Allen Porter Landscape Services</a>.
                        <br /><br />
                        As a former QuestBridge Scholar at Yale University, I&apos;ve had the opportunity to intern at companies like <a target="_blank" rel="noreferrer" href="https://www.microsoft.com/en-us/">Microsoft</a> and <a target="_blank" rel="noreferrer" href="https://www.snapchat.com/">Snap, Inc.</a>, as well as contribute to research at the <a target="_blank" rel='noreferrer' href='https://interactive-machines.com/'>Interactive Machines group</a>. I&apos;ve since transferred to James Madison University, where I expect to graduate in May 2026.
                        <br /><br />
                        AFK, I enjoy the outdoors: camping, hiking, fishing. I&apos;ve recently picked up tennis and have previously trained Muay Thai. Creatively, I like to express myself with cameras and charcoal. I recently fixed up my dad&apos;s retro Palmcorder and have been collecting memories on cassette tapes.
                        <br /><br />
                        Check out my <a href='assets/victor-hugo-dc.pdf'>r&eacute;sum&eacute;</a>.
                    </p>
                </div>
                <hr className="hr" />
            </div>
        </Box>
    )
}


export default Home;
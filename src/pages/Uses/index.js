import React from 'react';
import { Box } from '@mui/material';

const Uses = () => {
    return (
        <Box sx={{ width: "650px", maxWidth: '80%', margin: "auto" }}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ml-3 relative font-bold text-3xl dots text-title">
                    My Gear
                </h1>
                <div className="prose leading-6 text-justify text-gray-600 dark:text-gray-400">
                    <p>
                        Inspired by <a target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-300" href="https://usesthis.com/">Uses This</a>. These are just some of the the tools and gadgets I use to get things done. This is still a WIP.
                    </p>
                </div>
                <div className="prose leading-6 text-justify">
                    <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white font-bold text-xl text-title">
                        Hardware
                    </h2>
                    <ul className='mb-16'>
                        <li><a href="https://support.apple.com/en-us/111883" target="_blank" rel="noreferrer">13" M1 MacBook Air (2020)</a>: Personal Laptop.</li>
                        <li><a href="https://support.apple.com/en-us/112443" target="_blank" rel="noreferrer">Apple Magic Keyboard</a>: Perfect low-profile companion for my PC setup.</li>
                        <li><a href="https://support.logi.com/hc/en-gb/articles/360023459853-MX-MASTER-2S-WIRELESS-MOUSE" target="_blank" rel="noreferrer">Logitech MX Master 2S</a>: Greatest mouse of all time.</li>
                        <li><a href="https://www.dell.com/support/home/en-us/product-support/product/poweredge-t320/docs" target="_blank" rel="noreferrer">Dell PowerEdge T320</a>: Home server.</li>
                        <li><a href="https://support.apple.com/en-us/111829" target="_blank" rel="noreferrer">iPhone 15 Pro</a>: Primary phone.</li>
                        <li><a href="https://support.apple.com/en-us/111858" target="_blank" rel="noreferrer">AirPods Max</a>: Double as my gym and gaming headphones.</li>
                        {/* <li><a href="https://www.apple.com/apple-watch-se/" target="_blank" rel="noreferrer">Apple Watch SE (2nd Gen)</a>: Fitness tracking and notification management companion.</li> */}
                        <li><a href="https://www.seagate.com/products/portable-hard-drives/portable/" target="_blank" rel="noreferrer">Seagate Portable 1TB HDD</a>: Data backup solution.</li>
                        <li><a href="https://www.usa.canon.com/support/p/eos-rebel-sl2" target="_blank" rel="noreferrer">Canon EOS Rebel SL2</a>: How I document my travels.</li>
                        <li><a href="https://www.manualslib.com/manual/247250/Panasonic-Pv-Dv100.html" target="_blank" rel="noreferrer">Panasonic Palmcorder MiniDV</a>: How I record my fishing trips now.</li>
                    </ul>
                    <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white font-bold text-xl text-title">
                        Software
                    </h2>
                    <h3 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white font-bold text-lg text-title">
                        On Laptop
                    </h3>
                    <ul>
                        <li>Editor: <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> &amp; <a href="https://neovim.io/" target="_blank" rel="noreferrer">Neovim</a></li>
                        <li><a href="https://iterm2.com/" target="_blank" rel="noreferrer">iTerm2</a> + <a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">Oh My Zsh</a>: Powerline-themed terminal setup.</li>
                        <li><a href="https://www.seafile.com/en/home/" target="_blank" rel="noreferrer">Seafile</a>: Self-hosted Dropbox-style file sync.</li>
                    </ul>
                    <h3 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white font-bold text-lg text-title">
                        On Phone
                    </h3>
                    <ul>
                        <li><a href="https://www.hipcamp.com/" target="_blank" rel="noreferrer">Hipcamp</a>: For discovering offbeat camping spots and cabins.</li>
                        <li><a href="https://www.waze.com/" target="_blank" rel="noreferrer">Waze</a>: Community-powered navigation for road trips.</li>
                        <li><a href="https://phantom.com/" target="_blank" rel="noreferrer">Phantom Wallet</a>: Managing my Solana-based assets.</li>
                    </ul>
                </div>
            </div>
        </Box>
    )
}


export default Uses;
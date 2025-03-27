import React from "react";

const ExternalLink = ({ href, children }) => (
    <a
        className="hover:text-gray-600 text-3xl transition"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
    >
        {children}
    </a>
);

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className="w-footer max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-4 text-center">
                <div className="flex flex-col space-y-4">
                    <ExternalLink href="https://www.instagram.com/victordelcarpio/">
                        <i className="fa-brands fa-instagram"></i>
                    </ExternalLink>
                </div>
                <div className="flex flex-col space-y-4">
                    <ExternalLink href="https://github.com/victor-hugo-dc">
                        <i className="fa-brands fa-github"></i>
                    </ExternalLink>
                </div>
                <div className="flex flex-col space-y-4">
                    <ExternalLink href="https://www.linkedin.com/in/victor-hugo-dc/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </ExternalLink>
                </div>
                <div className="flex flex-col space-y-4">
                    <ExternalLink href="https://open.spotify.com/user/viducco?si=bb57c4a4c3c945a7">
                        <i className="fa-brands fa-spotify"></i>
                    </ExternalLink>
                </div>
            </div>
        </footer>
    );
}
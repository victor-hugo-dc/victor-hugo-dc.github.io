import React from 'react';

const ProjectLink = ({ title, link, children }) => (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-6">
        <h3 className="font-bold text-3xl md:text-5xl tracking-tight text-black">
            <a
                className="flex items-center prose text-lg"
                target="_blank"
                rel="noopener noreferrer"
                href={link}
            >
                {title}
                <div>
                    <svg
                        className="h-4 w-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </div>
            </a>
        </h3>
        <p className='prose'>{children}</p>
    </div>
);

export default ProjectLink;
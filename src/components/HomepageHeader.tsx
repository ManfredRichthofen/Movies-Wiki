import React from 'react';

export default function HomepageHeader() {
    return (
        <header className="py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-center w-full">
                    Your Entertainment Hub
                </h1>
                <div className="w-full max-w-2xl">
                    <p className="text-xl text-base-content/80 leading-relaxed text-center">
                        Discover the best streaming apps, media servers, and AI tools to enhance your digital entertainment experience.
                    </p>
                </div>
                <div className="mt-10 flex justify-center gap-4">
                    <a href="#features" className="btn btn-primary btn-lg">
                        Explore Features
                    </a>
                    <a href="#apps" className="btn btn-outline btn-lg">
                        View Apps
                    </a>
                </div>
            </div>
        </header>
    );
} 
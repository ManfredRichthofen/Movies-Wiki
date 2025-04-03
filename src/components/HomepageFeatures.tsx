import React from 'react';
import { FaFilm, FaServer, FaRobot } from 'react-icons/fa';

// Feature Item Type
export type FeatureItem = {
    title: string;
    description: JSX.Element;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
};

// Feature List Data
const FeatureList: FeatureItem[] = [
    {
        title: 'Watch Movies',
        description: (
            <>
                Quick access to an almost unlimited number of movies, including an automated request system.
            </>
        ),
        icon: FaFilm,
        color: 'text-blue-500',
    },
    {
        title: 'Host Game Servers',
        description: (
            <>
                Simple server panel for hosting game servers.
            </>
        ),
        icon: FaServer,
        color: 'text-purple-500',
    },
    {
        title: 'Discord Bots',
        description: (
            <>
                Leverage AI-powered tools for content creation, automation, and enhanced productivity.
            </>
        ),
        icon: FaRobot,
        color: 'text-green-500',
    },
];

// Feature Card Component
function Feature({ title, description, icon: Icon, color }: FeatureItem) {
    return (
        <div className="card bg-base-200 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 hover:border-primary/30 transform hover:-translate-y-1">
            <div className="card-body items-center text-center">
                <div className="flex justify-center">
                    <div className={`${color} mb-4 p-3 rounded-lg bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
                        <Icon className="w-12 h-12" />
                    </div>
                </div>
                <h3 className="card-title text-2xl font-bold text-base-content text-center">{title}</h3>
                <p className="text-base-content/80 leading-relaxed text-center">{description}</p>
            </div>
        </div>
    );
}

// Features Section Component
export default function HomepageFeatures() {
    return (
        <section id="features" className="py-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="container">
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-center w-full">
                        Powerful Features
                    </h2>
                    <div className="w-full max-w-2xl">
                        <p className="text-lg text-base-content/70 leading-relaxed text-center">
                            Everything you need to enhance your digital entertainment experience
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
} 
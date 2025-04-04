import React, { useState, useEffect } from 'react';
import { useLatestAPKReleaseInfo } from '../utils/github';

export default function Youtube() {
    const downloadURLs = useLatestAPKReleaseInfo();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (downloadURLs.youtube || downloadURLs.youtubeMusic || downloadURLs.microg) {
            setIsLoading(false);
        }
    }, [downloadURLs]);

    return (
        <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="container mx-auto px-4">
                <div className="card bg-base-200 shadow-2xl border border-base-300 max-w-5xl mx-auto backdrop-blur-sm bg-opacity-95">
                    <div className="card-body p-8">
                        <h2 className="text-4xl font-bold text-center text-base-content mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Ad-Free YouTube and Youtube Music Experience
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                                <div className="relative flex justify-center">
                                    <img
                                        src={require('@site/static/img/youtube.jpg').default}
                                        className="w-64 lg:w-80 h-auto rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
                                        loading="lazy"
                                        alt="YouTube"
                                    />
                                </div>
                            </div>
                            <div className="space-y-6 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-base-content">
                                    ReVanced
                                    <span className="text-primary">.</span>
                                </h3>
                                <p className="text-lg text-base-content/80">
                                    Experience YouTube and Youtube Music without interruptions with these premium features:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content/80">
                                    <li className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Ad blocking</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>SponsorBlock</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Background playback</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Picture-in-picture</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Custom themes</span>
                                    </li>
                                </ul>
                                <div className="pt-4 space-y-4">
                                    {isLoading ? (
                                        <button className="btn btn-primary btn-lg w-full sm:w-auto" disabled>
                                            <span className="loading loading-spinner"></span>
                                            Loading...
                                        </button>
                                    ) : (
                                        <>
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                {downloadURLs.youtube && (
                                                    <a href={downloadURLs.youtube} target="_blank" rel="noopener noreferrer" className="inline-block flex-1">
                                                        <button className="btn btn-primary btn-lg w-full transform transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                            </svg>
                                                            YouTube
                                                        </button>
                                                    </a>
                                                )}
                                                {downloadURLs.youtubeMusic && (
                                                    <a href={downloadURLs.youtubeMusic} target="_blank" rel="noopener noreferrer" className="inline-block flex-1">
                                                        <button className="btn btn-secondary btn-lg w-full transform transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                                                            </svg>
                                                            Music
                                                        </button>
                                                    </a>
                                                )}
                                            </div>
                                            {downloadURLs.microg && (
                                                <div className="mt-4">
                                                    <a href={downloadURLs.microg} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                                                        <button className="btn btn-accent btn-lg w-full transform transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                                            </svg>
                                                            MicroG (Required)
                                                        </button>
                                                    </a>
                                                    <p className="text-sm text-base-content/70 mt-2 text-center">
                                                        MicroG is required for YouTube and YouTube Music to work properly
                                                    </p>
                                                </div>
                                            )}
                                            <div className="mt-6">
                                                <a href="/docs/installation" className="inline-block w-full">
                                                    <button className="btn btn-outline btn-lg w-full transform transition duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center">
                                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                                        </svg>
                                                        Installation Guide
                                                    </button>
                                                </a>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

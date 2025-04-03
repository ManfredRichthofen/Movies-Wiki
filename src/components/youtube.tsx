import React, { useState, useEffect } from 'react';
import { useLatestAPKReleaseInfo } from '../utils/github';

export default function Youtube() {
    const downloadURL = useLatestAPKReleaseInfo();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (downloadURL) {
            setIsLoading(false);
        }
    }, [downloadURL]);

    return (
        <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
            <div className="container mx-auto px-4">
                <div className="card bg-base-200 shadow-2xl border border-base-300 max-w-5xl mx-auto backdrop-blur-sm bg-opacity-95">
                    <div className="card-body p-8">
                        <h2 className="text-4xl font-bold text-center text-base-content mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Ad-Free YouTube Experience
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
                                    Experience YouTube without interruptions with these premium features:
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
                                <div className="pt-4">
                                    {isLoading ? (
                                        <button className="btn btn-primary btn-lg w-full sm:w-auto" disabled>
                                            <span className="loading loading-spinner"></span>
                                            Loading...
                                        </button>
                                    ) : downloadURL ? (
                                        <a href={downloadURL} target="_blank" rel="noopener noreferrer" className="inline-block">
                                            <button className="btn btn-primary btn-lg w-full sm:w-auto transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                                Download Now
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                                </svg>
                                            </button>
                                        </a>
                                    ) : (
                                        <button className="btn btn-primary btn-lg w-full sm:w-auto" disabled>
                                            Download Unavailable
                                        </button>
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

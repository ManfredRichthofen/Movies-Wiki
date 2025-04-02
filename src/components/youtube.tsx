import React from 'react';
import { GetLatestAPKReleaseInfo } from '../utils/github';

export default function Youtube() {
    const downloadURL = GetLatestAPKReleaseInfo();
    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="card bg-base-200 shadow-xl border border-base-300 max-w-4xl mx-auto">
                    <div className="card-body">
                        <h2 className="text-4xl font-bold text-center text-base-content mb-8">Ad-Free YouTube</h2>
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="flex-shrink-0">
                                <img
                                    src={require('@site/static/img/youtube.jpg').default}
                                    className="w-80 h-auto rounded-lg shadow-lg"
                                    loading="lazy"
                                    alt="YouTube"
                                />
                            </div>
                            <div className="flex-grow text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-base-content mb-4">ReVanced</h3>
                                <p className="text-lg text-base-content/80 mb-6">
                                    An alternative to YouTube on Android with built-in features like:
                                </p>
                                <ul className="text-base-content/80 mb-6 space-y-2">
                                    <li>• Ad blocking</li>
                                    <li>• SponsorBlock integration</li>
                                    <li>• Background playback</li>
                                    <li>• Picture-in-picture mode</li>
                                    <li>• Custom themes</li>
                                </ul>
                                <div className="flex justify-center lg:justify-start">
                                    <a href={downloadURL}>
                                        <button className="btn btn-primary btn-lg">Download Now</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

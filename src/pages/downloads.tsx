import React from 'react';
import Layout from '@theme/Layout';
import { FaWindows, FaAndroid, FaApple, FaTv, FaGlobe } from 'react-icons/fa';

export default function DownloadPage(): JSX.Element {
    return (
        <Layout title="Download Jellyfin Apps" description="Download Jellyfin for your devices.">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center w-full max-w-4xl mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-6xl font-bold text-base-content mb-6">Download Jellyfin Apps</h1>
                        <p className="text-xl text-base-content/80 mb-12 max-w-2xl">
                            Choose your platform and get started with Jellyfin. Access your media library from any device.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            <a href="https://jellyfin.org/client-windows" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="card-body items-center text-center">
                                    <FaWindows size={48} className="text-primary mb-4" />
                                    <h2 className="card-title text-xl font-bold text-base-content">Windows</h2>
                                    <p className="text-base-content/80">Desktop client for Windows</p>
                                </div>
                            </a>
                            <a href="https://jellyfin.org/client-android" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="card-body items-center text-center">
                                    <FaAndroid size={48} className="text-primary mb-4" />
                                    <h2 className="card-title text-xl font-bold text-base-content">Android</h2>
                                    <p className="text-base-content/80">Mobile app for Android</p>
                                </div>
                            </a>
                            <a href="https://jellyfin.org/client-ios" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="card-body items-center text-center">
                                    <FaApple size={48} className="text-primary mb-4" />
                                    <h2 className="card-title text-xl font-bold text-base-content">iOS</h2>
                                    <p className="text-base-content/80">Mobile app for iOS</p>
                                </div>
                            </a>
                            <a href="https://jellyfin.org/client-android-tv" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="card-body items-center text-center">
                                    <FaTv size={48} className="text-primary mb-4" />
                                    <h2 className="card-title text-xl font-bold text-base-content">Android TV</h2>
                                    <p className="text-base-content/80">TV app for Android TV</p>
                                </div>
                            </a>
                            <a href="https://jellyfin.org/client-lg" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="card-body items-center text-center">
                                    <FaTv size={48} className="text-primary mb-4" />
                                    <h2 className="card-title text-xl font-bold text-base-content">LG OS</h2>
                                    <p className="text-base-content/80">TV app for LG Smart TVs</p>
                                </div>
                            </a>
                            <a href="https://jfapp.xyz" className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="card-body items-center text-center">
                                    <FaGlobe size={48} className="text-primary mb-4" />
                                    <h2 className="card-title text-xl font-bold text-base-content">Web</h2>
                                    <p className="text-base-content/80">Access via web browser</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

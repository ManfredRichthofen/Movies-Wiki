import React from 'react';
import Layout from '@theme/Layout';
import { Button } from 'flowbite-react';
import { FaWindows, FaAndroid, FaApple, FaTv, FaGlobe } from 'react-icons/fa'; // Importing icons from react-icons

export default function DownloadPage(): JSX.Element {
    return (
        <Layout title="Download Jellyfin Apps" description="Download Jellyfin for your devices.">
            <div className="container mx-auto py-16 text-center bg-white dark:bg-gray-900">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">Download Jellyfin Apps</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
                    Choose your platform and get started with Jellyfin.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                    <Button color="primary" outline href="https://jellyfin.org/client-windows" gradientMonochrome="info">
                        <FaWindows className="mr-2" /> Windows
                    </Button>
                    <Button color="primary" outline href="https://jellyfin.org/client-android" gradientMonochrome="info">
                        <FaAndroid className="mr-2" /> Android
                    </Button>
                    <Button color="primary" outline href="https://jellyfin.org/client-ios" gradientMonochrome="info">
                        <FaApple className="mr-2" /> iOS
                    </Button>
                    <Button color="primary" outline href="https://jellyfin.org/client-android-tv" gradientMonochrome="info">
                        <FaTv className="mr-2" /> Android TV
                    </Button>
                    <Button color="primary" outline href="https://jellyfin.org/client-lg" gradientMonochrome="info">
                        <FaTv className="mr-2" /> LG OS
                    </Button>
                    <Button color="primary" outline href="https://jfapp.xyz" gradientMonochrome="info">
                        <FaGlobe className="mr-2" /> Web
                    </Button>
                </div>
            </div>
        </Layout>
    );
}


import React, { useState, useEffect } from 'react';
import { Card, Button } from 'flowbite-react';

function GetLatestAPKReleaseInfo() {
    const [downloadURL, setDownloadURL] = useState('');

    useEffect(() => {
        const fetchLatestRelease = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/ManfredRichthofen/build-apps/releases/latest');
                const release = await response.json();
                const assets = release.assets;
                const desiredAPK = assets.find((asset) => asset.name.startsWith('youtube-revanced'));
                if (desiredAPK) {
                    setDownloadURL(desiredAPK.browser_download_url);
                } else {
                    console.error('Desired APK release not found.');
                }
            } catch (error) {
                console.error('Error fetching latest APK release:', error);
            }
        };

        fetchLatestRelease();
    }, []);

    return downloadURL;
}

export default function Youtube() {
    const downloadURL = GetLatestAPKReleaseInfo();
    return (
        <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
                <div className="flex justify-center items-center">
                    <img
                        src={require('@site/static/img/youtube.jpg').default}
                        className="w-80 h-auto rounded-lg"
                        loading="lazy"
                        alt="YouTube"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Card className="max-w-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        <h1 className="text-3xl font-bold mb-2">ReVanced</h1>
                        <h2 className="text-2xl font-semibold mb-3">Ad-Free YouTube for Android</h2>
                        <p className="mb-4">
                            An alternative to YouTube on Android with built-in features like Ad blocking, SponsorBlock, background play, and more.
                        </p>
                        <div className="flex justify-center">
                            <a href={downloadURL}>
                                <Button color="primary" outline gradientMonochrome="info">Download</Button>
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

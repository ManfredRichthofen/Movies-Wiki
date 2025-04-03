import { useState, useEffect } from 'react';

export function useLatestAPKReleaseInfo(): string {
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
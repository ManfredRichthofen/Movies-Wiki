import { useEffect, useState } from 'react';

interface APKDownloadURLs {
  youtube: string;
  youtubeMusic: string;
  microg: string;
}

export function useLatestAPKReleaseInfo(): APKDownloadURLs {
  const [downloadURLs, setDownloadURLs] = useState<APKDownloadURLs>({
    youtube: '',
    youtubeMusic: '',
    microg: '',
  });

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/ManfredRichthofen/Vanced-Builder/releases/latest');
        const release = await response.json();
        const assets = release.assets;

        const youtubeAPK = assets.find((asset) => asset.name.startsWith('Reyoutube-Version'));
        const youtubeMusicAPK = assets.find((asset) => asset.name.startsWith('Reyoutube_music-Version'));
        const microgAPK = assets.find((asset) => asset.name === 'Revanced-Microg-output.apk');

        setDownloadURLs({
          youtube: youtubeAPK ? youtubeAPK.browser_download_url : '',
          youtubeMusic: youtubeMusicAPK ? youtubeMusicAPK.browser_download_url : '',
          microg: microgAPK ? microgAPK.browser_download_url : '',
        });

        if (!youtubeAPK || !youtubeMusicAPK || !microgAPK) {
          console.error('One or more desired APK releases not found.');
        }
      } catch (error) {
        console.error('Error fetching latest APK releases:', error);
      }
    };

    fetchLatestRelease();
  }, []);

  return downloadURLs;
}

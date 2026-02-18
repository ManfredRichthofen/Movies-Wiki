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
        const morpheResponse = await fetch('https://api.github.com/repos/ManfredRichthofen/morphe-builder/releases/latest');
        const morpheRelease = await morpheResponse.json();
        const morpheAssets = morpheRelease.assets;

        const youtubeAPK = morpheAssets.find((asset) => asset.name.startsWith('youtube-morphe-'));
        const youtubeMusicAPK = morpheAssets.find((asset) => asset.name.startsWith('music-morphe-'));

        const microgResponse = await fetch('https://api.github.com/repos/MorpheApp/MicroG-RE/releases/latest');
        const microgRelease = await microgResponse.json();
        const microgAssets = microgRelease.assets;

        const microgAPK = microgAssets.find((asset) => asset.name.startsWith('microg-') && asset.name.endsWith('.apk'));

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

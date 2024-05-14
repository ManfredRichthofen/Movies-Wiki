import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
} from "flowbite-react";

function GetLatestAPKReleaseInfo() {
  const [downloadURL, setDownloadURL] = useState('');

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/ManfredRichthofen/py-revanced/releases/latest");
        const release = await response.json();
        const assets = release.assets;
        const desiredAPK = assets.find(asset => asset.name.startsWith("Re-youtube"));
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
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-2 gap-4 px-5 py-5">
        <div className="flex justify-center items-center">
          <img
            src={require("@site/static/img/youtube.jpg").default}
            className="w-80 h-auto rounded-lg"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
          <Card variant="outlined" className="max-w-[400px]">
            <h1 className="text-3xl">ReVanced</h1>
            <h2 className="text-2xl mb-0.5">Ad Free Youtube for Android</h2>
            <p>
              An alternative to YouTube on android with built-in features like
              Ad blocking, SponsorBlock (Allows you to automatically skip
              in-video sponsors.), background play, Picture-in-picture, Amoled
              dark theme, and restore dislikes count.
            </p>
            <div className="flex justify-center items-center">
              <a href={downloadURL}>
                <Button>Download</Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

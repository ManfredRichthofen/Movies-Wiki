import React, { useState, useEffect } from "react";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";

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
    <Grid
      container
      spacing={2}
      sx={{ flexGrow: 1, p: 5 }}
      justifyContent="space-evenly"
      alignItems="center"
      style={{
        position: "relative",
        top: 0,
        bottom: -30,
      }}
    >
        <Grid>
          <Card>
            <CardOverflow sx={{ minWidth: 270, minHeight: 534.5}}>
              <AspectRatio ratio="540/1069">
                <img
                  src={require("@site/static/img/youtube.jpg").default}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
          </Card>
        </Grid>
      <Grid>
        <Card variant="outlined" sx={{ maxWidth: 400 }}>
          <Typography level="h1">ReVanced</Typography>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            Ad Free Youtube for Android
          </Typography>
          <Typography>
            An alternative to YouTube on android with built-in features like Ad
            blocking, SponsorBlock (Allows you to automatically skip in-video
            sponsors.), background play, Picture-in-picture, Amoled dark theme,
            and restore dislikes count.
          </Typography>
          <Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link href="{downloadURL}">
                <Button>Download</Button>
              </Link>
            </Box>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

import React from "react";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";

export default function Youtube() {
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
              <Link href="https://github.com/ManfredRichthofen/py-revanced/releases/latest/download/Re-youtube-output.apk">
                <Button>Download</Button>
              </Link>
            </Box>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

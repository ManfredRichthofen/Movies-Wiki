import React from "react";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export default function Youtube() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ flexGrow: 1, p: 5 }}
      justifyContent="space-around"
      alignItems="center"
      style={{
        position: "relative",
        top: 0,
        bottom: -30,
      }}
    >
      <Grid>
        <Card
          variant="plain"
          sx={{
            height: 800,
            width: 360,
          }}
          style={{
            position: "relative",
            top: 0,
            bottom: 60,
            left: 100,
          }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <img
                src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
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
            An alternative to YouTube on android with in-built features like Ad
            blocking, SponsorBlock (Allows you to automatically skip in-video
            sponsors.), background play, Picture-in-picture, Amoled dark theme,
            and restore dislikes count.
          </Typography>
          <Typography align="center">
            <Button>Download</Button>
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

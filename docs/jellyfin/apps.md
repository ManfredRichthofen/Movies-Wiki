---
sidebar_label: 'Apps & common issues'
sidebar_position: 2
title: 'Jellyfin Apps & Common Issues'
description: Install Jellyfin clients on every platform and fix the most common playback problems.
tags:
  - Jellyfin
  - Apps
  - Clients
  - FAQ
---

# Jellyfin Apps & Common Issues

Stream from any device using the official Jellyfin clients. The server address is always **`jfapp.xyz`**.

:::info
Need an account first? See [Accounts](accounts.md). Want something that is not in the library? See [Requesting content](request.md) — search in Jellyfin or Seerr and tap **Request**.
:::

---

## Web browser

The fastest way to watch — no install required.

- **Main player:** [jfapp.xyz](https://jfapp.xyz)
- **Beta player:** [beta.jfapp.xyz](https://beta.jfapp.xyz) (newer UI, may be less stable)

### Common issues

**Page won't load or looks broken**

- Hard-refresh with `Ctrl + F5` (Windows/Linux) or `Cmd + Shift + R` (Mac).
- If that fixes it, clear site cookies for `jfapp.xyz` in your browser settings.

**Playback stutters or buffers constantly**

- Lower the stream quality in the player settings (gear icon during playback).
- Try a wired connection or move closer to your router.

---

## Android phones & tablets

### Setup

1. Install [Jellyfin for Android](https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin) from Google Play.
2. Tap **Add Server** and enter `jfapp.xyz`.
3. Log in with your Jellyfin username and password.

### Common issues

**"Server not found"**

- Use `jfapp.xyz` only — no `https://` prefix.
- Disable VPN temporarily and retry.

**Video plays but no sound**

- Toggle **Direct play** off in client settings, or switch to a lower quality stream.

### Downloads

[Google Play — Jellyfin](https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin)

---

## iOS, iPhone, iPad & Apple TV

Swiftfin is the recommended native client for Apple devices.

### Setup

1. Install [Swiftfin from the App Store](https://apps.apple.com/us/app/swiftfin/id1604098728).
2. Add server `jfapp.xyz` and sign in.

### Common issues

**Cannot connect on cellular data**

- Some carriers block non-standard ports. Try Wi‑Fi, or use the web player at [jfapp.xyz](https://jfapp.xyz).

**AirPlay not working**

- Start playback in Swiftfin first, then open Control Center and select your Apple TV or speaker.

### Downloads

[App Store — Swiftfin](https://apps.apple.com/us/app/swiftfin/id1604098728)

---

## Android TV & Fire TV

### Setup

1. Install Jellyfin from the [Play Store](https://play.google.com/store/apps/details?id=org.jellyfin.androidtv) or [Amazon Appstore](https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725).
2. Launch the app and select **Add Server**.
3. Enter `jfapp.xyz` and tap **Next**.
4. Log in with your Jellyfin credentials.
5. Browse your library and start streaming.

### Common issues

**Remote navigation feels sluggish**

- Restart the app from the device settings. Fire TV sticks with low storage benefit from a full reboot.

**4K content stutters**

- Your device may not hardware-decode every codec. Drop quality to 1080p in playback settings.

### Downloads

- [Android TV — Google Play](https://play.google.com/store/apps/details?id=org.jellyfin.androidtv)
- [Fire TV — Amazon](https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725)

---

## Desktop — Windows, Mac & Linux

[Jellyfin Media Player](https://jellyfin.org/downloads) is the official desktop client with an embedded MPV player. It supports HDR, 4K, audio passthrough, and tonemapping.

### Setup

1. Download the installer for your OS from [jellyfin.org/downloads](https://jellyfin.org/downloads).
2. Open the app, add server `https://jfapp.xyz`, and sign in.

### Common issues

#### Green or purple video artifacts

Hardware decoding works for most users but can glitch on some GPUs. To disable it:

1. Click the **user icon** (top right).
2. Open **Client Settings**.
3. Under **Video**, set **Hardware decoding** to **Disabled**.

This fixes color corruption but may increase CPU usage.

#### Audio out of sync

- Toggle hardware decoding off (see above).
- Update your graphics drivers and Jellyfin Media Player to the latest release.

### Downloads

Get the latest build for your platform from the [Downloads](/Downloads) page.

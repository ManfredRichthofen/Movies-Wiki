---
title: Watch on any device
description: Install a player on your phone, TV, or computer — then connect to jfapp.xyz.
sidebar:
  label: Watch anywhere
  order: 4
---

Pick your screen, install the app, and enter **`jfapp.xyz`**. That is the server address for every device.

:::info
Need an account first? See [Set up your account](/docs/jellyfin/set-up-account/). Missing a movie? [Ask for it](/docs/jellyfin/request-titles/). Buffering or can’t connect? See [Fix common problems](/docs/jellyfin/troubleshooting/).
:::

## Phone

### Android

1. Install [Jellyfin for Android](https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin) from Google Play.
2. Tap **Add Server** and enter `jfapp.xyz` (no `https://`).
3. Sign in with your username and password.

**If it breaks**

- “Server not found” — use exactly `jfapp.xyz`, and try without a VPN.
- Video but no sound — turn **Direct play** off in settings, or lower the quality.

### iPhone, iPad & Apple TV

1. Install [Swiftfin](https://apps.apple.com/us/app/swiftfin/id1604098728) from the App Store.
2. Tap **Connect to Server** and enter `jfapp.xyz`.
3. Sign in with your username and password.

Full walkthrough: [Watch on iPhone](/docs/jellyfin/watch-on-iphone/).

**If it breaks**

- Won’t connect on mobile data — try Wi‑Fi, or open [jfapp.xyz](https://jfapp.xyz) in a browser.
- AirPlay — start playback in Swiftfin first, then pick your speaker or Apple TV in Control Center.

## TV

### Android TV & Google TV

1. Install **[Wholphin](https://play.google.com/store/apps/details?id=com.github.damontecres.wholphin)** from the Play Store (recommended). If you prefer, the [official Jellyfin TV app](https://play.google.com/store/apps/details?id=org.jellyfin.androidtv) works as a backup.
2. Open the app → **Add Server** → enter `jfapp.xyz`.
3. Sign in and start watching.

### Fire TV

1. Install **[Wholphin](https://www.amazon.com/gp/product/B0G8RQQR9T/ref=mas_pm_wholphin)** from the Amazon Appstore (recommended). Backup: [official Jellyfin for Fire TV](https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725).
2. **Add Server** → `jfapp.xyz` → sign in.

**If it breaks**

- Sluggish remote — restart the app, or reboot the stick if storage is low.
- 4K stutters — drop quality to 1080p in playback settings.

More TV apps (Roku, LG, and others) are listed on the [Downloads](/Downloads/) page.

## Computer

### Web browser (fastest)

Open [jfapp.xyz](https://jfapp.xyz) — nothing to install.

**If it breaks**

- Page looks broken — hard-refresh (`Ctrl + F5` or `Cmd + Shift + R`). Clear cookies for `jfapp.xyz` if needed.
- Constant buffering — lower quality (gear icon while playing). On a slow connection, [turn off extra sources](/docs/jellyfin/remote-stream/) (globe icon next to Search), or follow the [troubleshooting checklist](/docs/jellyfin/troubleshooting/).

### Windows, Mac & Linux app

1. Download [Jellyfin Media Player](https://jellyfin.org/downloads) for your OS.
2. Add server `https://jfapp.xyz` and sign in.

**If it breaks**

- Green or purple colors — user icon → **Client Settings** → **Video** → set **Hardware decoding** to **Disabled**.
- Audio out of sync — turn hardware decoding off, then update your graphics drivers and the app.

Also see the [Downloads](/Downloads/) page for every install link in one place, or [Fix common problems](/docs/jellyfin/troubleshooting/) if something still isn’t working.

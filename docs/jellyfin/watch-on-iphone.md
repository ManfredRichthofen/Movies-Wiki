---
sidebar_label: Watch on iPhone
sidebar_position: 2
title: Watch on iPhone with Swiftfin
description: Step-by-step guide to install Swiftfin and connect to jfapp on an iPhone.
tags:
  - Jellyfin
  - Swiftfin
  - iOS
  - iPhone
---

# Watch on iPhone with Swiftfin

**Swiftfin** is the official Jellyfin app for iPhone. This guide covers installing it from the App Store and connecting to the jfapp server.

:::info What you need
- An **iPhone** running **iOS 16.6** or later
- A [Jellyfin account](set-up-account.md) (invite completed, username and password ready)
- A few minutes and an App Store connection
:::

The server address is always **`jfapp.xyz`**.

---

## Step 1 — Install Swiftfin

1. Open the **App Store** on your iPhone.
2. Search for **Swiftfin**.
3. Tap **Get** (the app is free).
4. When install finishes, tap **Open**, or find **Swiftfin** on your Home Screen.

You can also install from this link on your phone: [Swiftfin on the App Store](https://apps.apple.com/us/app/swiftfin/id1604098728).

---

## Step 2 — Add the jfapp server

1. Open **Swiftfin**.
2. Tap **Connect to Server** (or **Add Server**).
3. Enter the server address:

   ```
   jfapp.xyz
   ```

4. Tap **Connect**.

:::tip Server address format
Use `jfapp.xyz` only — do **not** add `https://`, `http://`, or a port number. If connection fails, try `https://jfapp.xyz` instead.
:::

Your iPhone will not find jfapp under **Discovered Servers** unless you are on the same local network as the server. Always add it manually with the address above.

---

## Step 3 — Sign in

1. Enter your **Jellyfin username** and **password** (the ones from your [invite setup](set-up-account.md)).
2. Tap **Sign In**.
3. Your library should load — browse movies and shows and tap one to play.

:::warning Sign-in fails?
Make sure you finished the invite link first. Until that is done, username/password login will not work. See [Set up your account](set-up-account.md).
:::

---

## Step 4 — Optional settings

After you are signed in:

- **Quality** — During playback, open the player controls and lower quality if you buffer on cellular or slow Wi‑Fi.
- **Downloads** — Some titles support offline download from the item screen (availability depends on the title and your account).
- **AirPlay** — Start playing in Swiftfin, open **Control Center**, then choose your Apple TV or speaker.

To request missing titles from your phone, use [Seerr](request-titles.md) at [requests.jfapp.xyz](https://requests.jfapp.xyz/) with the same login, or request from search inside Jellyfin when the **Request** option appears.

---

## Something went wrong?

| What you see | What to try |
| --- | --- |
| Cannot find / connect to server | Use exactly `jfapp.xyz`. Turn off VPN. Try Wi‑Fi instead of cellular (or the reverse). Check [status.jfapp.xyz](https://status.jfapp.xyz). |
| Invalid username or password | Confirm you completed the invite link and are using that password. Caps lock / autocorrect often cause this. |
| Works on Wi‑Fi but not cellular | Some carriers filter traffic. Stay on Wi‑Fi, or use Safari at [jfapp.xyz](https://jfapp.xyz). |
| Playback buffers or stalls | Lower stream quality in the player. Move closer to your router. |
| AirPlay missing or fails | Start playback in Swiftfin first, then pick the AirPlay device from Control Center. |
| App looks stuck after an update | Force-quit Swiftfin, reopen it, or remove the server and add `jfapp.xyz` again. |

Still stuck? See [Watch on any device](watch-anywhere.md) or try the web player at [jfapp.xyz](https://jfapp.xyz).

---

## Downloads

- [Swiftfin — App Store](https://apps.apple.com/us/app/swiftfin/id1604098728)
- [All Jellyfin clients](/Downloads)

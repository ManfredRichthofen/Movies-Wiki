---
sidebar_label: 'Accounts'
sidebar_position: 1
title: 'Jellyfin Accounts'
description: How to accept your invite, set up your account, and sign in on any device.
tags:
  - Jellyfin
  - Accounts
---

# Jellyfin Accounts

jfapp runs a private Jellyfin server for the community. You need an account before you can stream or request new titles.

## Getting access

There is no public sign-up page. When your account is ready, the admin will send you an **invite link**.

1. Open the **invite link** you were sent.
2. Follow the on-screen steps to **choose a username** (if asked) and **set your password**.
3. When setup finishes, you are connected to the jfapp server — sign in at [jfapp.xyz](https://jfapp.xyz).

:::info Need an account?
Contact the jfapp admin to request access. Once your account is created, you will receive an invite link to complete setup.
:::

:::tip
Your Jellyfin login is also used for [Seerr requests](request.md). Use the same username and password on [requests.jfapp.xyz](https://requests.jfapp.xyz).
:::

## First sign-in

After you finish the invite link setup:

1. Open [jfapp.xyz](https://jfapp.xyz) in a browser, or launch a Jellyfin client and add the server **`jfapp.xyz`**.
2. Enter the **username and password** you chose during setup.
3. Optional — change your password anytime from your profile:
   - Click your **profile icon** (top right).
   - Open **Profile** → **Password**.

:::warning Invite link not used yet?
If sign-in fails and you never opened your invite link, go back to the link you were sent and complete setup first. Manual login will not work until the invite is finished.
:::

## Signing in on other devices

The server address is always **`jfapp.xyz`** (no `https://` prefix in most apps).

| Platform | What to enter |
| --- | --- |
| Web browser | [jfapp.xyz](https://jfapp.xyz) |
| Android / iOS | Server: `jfapp.xyz`, then your username and password |
| Android TV / Fire TV | **Add Server** → `jfapp.xyz` |
| Desktop app | Server URL: `https://jfapp.xyz` |

See [Apps & common issues](apps.md) for platform-specific setup and troubleshooting.

## Common issues

### Invite link expired or already used

- Contact the admin for a new invite link.

### "Invalid username or password"

- Double-check caps lock and spelling.
- Make sure you completed the invite link setup and are using the password you set there.
- If you just finished setup, wait a minute and try again.
- Contact the admin to reset your password if you are locked out.

### "Unable to connect to server"

- Confirm the server address is exactly `jfapp.xyz`.
- Check [status.jfapp.xyz](https://status.jfapp.xyz) for outages.
- On mobile data, try Wi‑Fi (or vice versa) in case of carrier filtering.

### Account works on web but not in the app

- Remove the saved server and add it again with `jfapp.xyz`.
- Update the Jellyfin app to the latest version from the store or [jellyfin.org/downloads](https://jellyfin.org/downloads).

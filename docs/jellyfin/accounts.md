---
sidebar_label: 'Accounts'
sidebar_position: 1
title: 'Jellyfin Accounts'
description: How to get access to the jfapp Jellyfin server and sign in on any device.
tags:
  - Jellyfin
  - Accounts
---

# Jellyfin Accounts

jfapp runs a private Jellyfin server for the community. You need an account before you can stream or request new titles.

## Getting access

Accounts are created by the server admin — there is no public sign-up page. To request access:

1. Reach out to the jfapp community (Discord or your usual contact channel).
2. Provide the username you would like to use.
3. Wait for confirmation — you will receive a username and temporary password.

:::tip
Your Jellyfin login is also used for [Seerr requests](request.md). Use the same username and password on [requests.jfapp.xyz](https://requests.jfapp.xyz).
:::

## First sign-in

1. Open [jfapp.xyz](https://jfapp.xyz) in a browser, or launch a Jellyfin client and add the server **`jfapp.xyz`**.
2. Enter the username and password you were given.
3. Change your password after the first login:
   - Click your **profile icon** (top right).
   - Open **Profile** → **Password**.
   - Enter your current password, then choose a new one.

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

### "Invalid username or password"

- Double-check caps lock and spelling.
- If you just received your account, wait a minute and try again — provisioning can take a moment.
- Contact an admin to reset your password if you are locked out.

### "Unable to connect to server"

- Confirm the server address is exactly `jfapp.xyz`.
- Check [status.jfapp.xyz](https://status.jfapp.xyz) for outages.
- On mobile data, try Wi‑Fi (or vice versa) in case of carrier filtering.

### Account works on web but not in the app

- Remove the saved server and add it again with `jfapp.xyz`.
- Update the Jellyfin app to the latest version from the store or [jellyfin.org/downloads](https://jellyfin.org/downloads).

---
sidebar_label: 'Requesting content'
sidebar_position: 3
title: 'Requesting Movies & TV Shows'
description: How to request new movies and series through Overseerr so they appear in Jellyfin.
tags:
  - Jellyfin
  - Overseerr
  - Requests
---

# Requesting Movies & TV Shows

New titles are added to the library through **Overseerr**, a request portal connected to our Jellyfin server. Search for what you want, submit a request, and it is downloaded automatically once approved.

## Before you start

- You need a [Jellyfin account](accounts.md) — Overseerr uses the **same username and password**.
- Requests are processed automatically; popular titles usually appear within a few hours.

## Step-by-step

### 1. Open the request portal

Go to [requests.jfapp.xyz](https://requests.jfapp.xyz) in any web browser.

### 2. Log in

Enter your Jellyfin username and password, then click **Login**.

If this is your first visit and login fails, your account may not be linked yet — contact an admin.

### 3. Find a title

Use the navigation bar to open **Movies** or **TV Shows**, then search for the title you want.

### 4. Submit a request

1. Click the movie or show in the search results to open its details page.
2. Click **Request**.
3. For TV shows, choose the seasons or episodes you want (if prompted).
4. Confirm the request.

### 5. Track progress

Open the **Requests** tab to see status:

| Status | Meaning |
| --- | --- |
| **Pending** | Waiting for approval or download to start |
| **Approved** | Download in progress |
| **Available** | Ready to watch in Jellyfin |

When a request shows **Available**, open [jfapp.xyz](https://jfapp.xyz) and search your library — the title should be there.

## Tips

- Request the **English** release when multiple versions exist, unless you need a specific language.
- For ongoing TV series, request the latest season you are missing — earlier seasons are often pulled in automatically.
- Duplicate requests for titles already in the library are usually rejected; search Jellyfin first.

## Troubleshooting

### Cannot log in to Overseerr

- Verify your Jellyfin credentials at [jfapp.xyz](https://jfapp.xyz) first.
- Password changes on Jellyfin apply to Overseerr immediately — use your current password.

### Request stuck on Pending

- New or obscure titles may take longer to source.
- Check back after a few hours; if it has been more than 24 hours, ask in the community channel.

### Title shows Available but not in Jellyfin

- Refresh your Jellyfin library (pull down on mobile, or reload the browser).
- Log out and back in if the title still does not appear.

---
sidebar_label: 'Requesting content'
sidebar_position: 3
title: 'Requesting Movies & TV Shows'
description: How to search for and request new movies and series with Seerr on Jellyfin.
tags:
  - Jellyfin
  - Seerr
  - Requests
---

# Requesting Movies & TV Shows

**Request site:** [https://requests.jfapp.xyz/](https://requests.jfapp.xyz/)

Our Jellyfin server is connected to **Seerr** — a request system that lets you search for movies and TV shows, ask for what is missing, and have it added to the library automatically.

:::info In short
Search for a title → tap **Request** → wait until it shows **Available** → watch it in Jellyfin.
:::

## Before you start

- You need a [Jellyfin account](accounts.md). Seerr uses the **same username and password**.
- You can request from **Jellyfin** (while searching) or from the **Seerr website** — both go to the same place.
- Popular titles usually show up within a few hours. New or rare titles can take longer.

## Request from Jellyfin (easiest)

Seerr is linked to our server, so you can request while you browse:

1. Open [jfapp.xyz](https://jfapp.xyz) and sign in.
2. Use the **Search** bar at the top and type the movie or show you want.
3. If it is **not in the library yet**, you should see a **Request** option on the title.
4. Tap **Request** and confirm (pick seasons for TV shows if asked).
5. When the download finishes, the title appears in your Jellyfin library — search for it again or check your home screen.

:::tip
Already in the library? Jellyfin will show **Play** instead of **Request**. No need to request twice.
:::

## Request from the Seerr website

You can also use the dedicated request site:

### 1. Open Seerr

Go to **[requests.jfapp.xyz](https://requests.jfapp.xyz/)** in any web browser.

### 2. Log in

Enter your **Jellyfin username and password**, then click **Sign in**.

If login fails on your first visit, make sure you have [finished your invite link setup](accounts.md) first. If it still fails, contact the admin.

### 3. Search for a title

Use **Movies** or **Series** in the top menu, then search for what you want — just like browsing a streaming service.

### 4. Submit the request

1. Click the movie or show in the results.
2. Click **Request**.
3. For TV shows, choose the seasons you need (if prompted).
4. Confirm.

### 5. Track your request

Open the **Requests** page in Seerr to see progress:

| Status | Meaning |
| --- | --- |
| **Pending** | Waiting to start |
| **Approved** | Download in progress |
| **Available** | Ready to watch in Jellyfin |

When a request is **Available**, open [jfapp.xyz](https://jfapp.xyz) and search for the title — it should be there.

## Tips

- Search Jellyfin first before requesting — the title might already be available.
- Request the **English** release when several versions exist, unless you need another language.
- For ongoing TV series, request the latest season you are missing — earlier seasons are often added automatically.
- Duplicate requests for titles already in the library are usually rejected.

## Troubleshooting

### I searched in Jellyfin but don't see Request

- Make sure you are signed in and searched for the exact title.
- Try the [request site](https://requests.jfapp.xyz/) instead — search there and request from the results page.
- Refresh Jellyfin or sign out and back in.

### Cannot log in to Seerr

- Verify your Jellyfin login works at [jfapp.xyz](https://jfapp.xyz) first.
- Use your **current** Jellyfin password — changes on Jellyfin apply to Seerr right away.

### Request stuck on Pending

- New or obscure titles can take longer to find.
- Check back after a few hours. If it has been more than 24 hours, ask in the community channel.

### Title shows Available but not in Jellyfin

- Pull down to refresh on mobile, or reload the browser.
- Sign out of Jellyfin and sign back in if the title still does not appear.

---
title: Ask for a movie or show
description: Search for something missing, tap Request, and watch it when it shows up.
sidebar:
  label: Request titles
  order: 5
---

**Request site:** [requests.jfapp.xyz](https://requests.jfapp.xyz/)

Can’t find a movie or show? Ask for it. Search, tap **Request**, wait until it says **Available**, then watch it like anything else in the library.

:::info[In short]
Search → tap **Request** → wait for **Available** → play in Jellyfin.
:::

(The request site is powered by Seerr and uses the same login as Jellyfin.)

## Before you start

- You need a [Jellyfin account](/docs/jellyfin/set-up-account/). Use the **same username and password** on the request site.
- You can ask from **Jellyfin** (easiest) or from the **request website**.
- Popular titles often show up within a few hours. New or rare titles can take longer.

## Ask from Jellyfin (easiest)

1. Open [jfapp.xyz](https://jfapp.xyz) and sign in.
2. Use the **Search** bar and type the movie or show you want.
3. If it is not in the library yet, you should see **Request**.
4. Tap **Request** and confirm (pick seasons for TV shows if asked).
5. When it is ready, search again or check your home screen.

:::tip
Already in the library? You will see **Play** instead of **Request**.
:::

## Ask from the website

### 1. Open the request site

Go to **[requests.jfapp.xyz](https://requests.jfapp.xyz/)** in any browser.

### 2. Sign in

Use your **Jellyfin username and password**.

If login fails, finish your [invite link setup](/docs/jellyfin/set-up-account/) first. Still stuck? Contact the admin.

### 3. Search and request

1. Choose **Movies** or **Series**, then search.
2. Open the title → click **Request**.
3. For TV shows, pick the seasons you need if asked.
4. Confirm.

### 4. Track progress

Open **Requests** on the site:

| Status | Meaning |
| --- | --- |
| **Pending** | Waiting to start |
| **Approved** | Download in progress |
| **Available** | Ready to watch |

When it is **Available**, open [jfapp.xyz](https://jfapp.xyz) and search for the title.

## Tips

- Search Jellyfin first — it might already be there.
- Prefer the **English** release unless you need another language.
- For ongoing series, request the latest season you are missing.
- Asking twice for something already in the library usually gets rejected.

## Troubleshooting

### I don’t see Request in Jellyfin

- Make sure you are signed in and searched the exact title.
- Try the [request site](https://requests.jfapp.xyz/) instead.
- Refresh Jellyfin, or sign out and back in.

### Cannot log in on the request site

- Check that your login works at [jfapp.xyz](https://jfapp.xyz) first.
- Use your **current** Jellyfin password.

### Stuck on Pending

- Rare titles can take longer. Check again after a few hours.
- After more than 24 hours, ask in the community channel.

### Says Available but not in Jellyfin

- Refresh the page or pull to refresh on mobile.
- Sign out and back in if it still doesn’t appear.

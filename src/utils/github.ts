import { useEffect, useState } from 'react';

const MORPHE_REPO = 'ManfredRichthofen/morphe-builder';
const MICROG_REPO = 'MorpheApp/MicroG-RE';

export const MORPHE_RELEASES_PAGE = 'https://github.com/ManfredRichthofen/morphe-builder/releases';
export const MICROG_RELEASES_PAGE = 'https://github.com/MorpheApp/MicroG-RE/releases';

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name?: string;
  body?: string;
  assets?: GitHubAsset[];
}

export interface APKReleaseInfo {
  youtube: string;
  youtubeMusic: string;
  microg: string;
  youtubeVersion: string | null;
  youtubeMusicVersion: string | null;
  microgVersion: string | null;
  loading: boolean;
}

const EMPTY_RELEASE_INFO: APKReleaseInfo = {
  youtube: '',
  youtubeMusic: '',
  microg: '',
  youtubeVersion: null,
  youtubeMusicVersion: null,
  microgVersion: null,
  loading: true,
};

function parseMorpheVersions(body?: string) {
  return {
    music: body?.match(/Music:\s*v?([\d.]+)/i)?.[1] ?? null,
    youtube: body?.match(/You\s?tube:\s*v?([\d.]+)/i)?.[1] ?? null,
  };
}

function parseVersionFromApkName(name: string): string | null {
  const match = name.match(/-v([\d.]+)(?:-|\.apk)/i);
  return match?.[1] ?? null;
}

function normalizeTag(tag?: string): string | null {
  if (!tag) return null;
  const normalized = tag.replace(/^v/i, '').trim();
  return normalized || null;
}

function findApk(assets: GitHubAsset[], prefix: string) {
  return assets.find(
    (asset) =>
      asset.name.startsWith(prefix) &&
      asset.name.endsWith('.apk') &&
      !asset.name.includes('-module-'),
  );
}

async function fetchLatestRelease(repo: string): Promise<GitHubRelease> {
  const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'jfapp-docs',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} for ${repo}`);
  }

  return response.json();
}

async function fetchLatestAPKReleaseInfo(): Promise<Omit<APKReleaseInfo, 'loading'>> {
  const [morpheRelease, microgRelease] = await Promise.all([
    fetchLatestRelease(MORPHE_REPO),
    fetchLatestRelease(MICROG_REPO),
  ]);

  const morpheAssets = morpheRelease.assets ?? [];
  const microgAssets = microgRelease.assets ?? [];

  const youtubeApk = findApk(morpheAssets, 'youtube-morphe-');
  const musicApk = findApk(morpheAssets, 'music-morphe-');
  const microgApk = microgAssets.find(
    (asset) => asset.name.startsWith('microg-') && asset.name.endsWith('.apk'),
  );
  const bodyVersions = parseMorpheVersions(morpheRelease.body);

  const youtubeVersion =
    parseVersionFromApkName(youtubeApk?.name ?? '') ??
    bodyVersions.youtube ??
    null;
  const youtubeMusicVersion =
    parseVersionFromApkName(musicApk?.name ?? '') ??
    bodyVersions.music ??
    null;
  const microgVersion =
    normalizeTag(microgRelease.tag_name) ??
    microgApk?.name?.match(/microg-([\d.]+)\.apk/)?.[1] ??
    null;

  return {
    youtube: youtubeApk?.browser_download_url ?? '',
    youtubeMusic: musicApk?.browser_download_url ?? '',
    microg: microgApk?.browser_download_url ?? '',
    youtubeVersion,
    youtubeMusicVersion,
    microgVersion,
  };
}

export function useLatestAPKReleaseInfo(): APKReleaseInfo {
  const [info, setInfo] = useState<APKReleaseInfo>(EMPTY_RELEASE_INFO);

  useEffect(() => {
    let cancelled = false;

    fetchLatestAPKReleaseInfo()
      .then((data) => {
        if (!cancelled) {
          setInfo({ ...data, loading: false });
        }
      })
      .catch((error) => {
        console.error('Error fetching latest APK releases:', error);
        if (!cancelled) {
          setInfo((prev) => ({ ...prev, loading: false }));
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return info;
}

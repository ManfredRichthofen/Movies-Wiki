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
    music: body?.match(/Music:\s*([\d.]+)/i)?.[1] ?? null,
    youtube: body?.match(/Youtube:\s*([\d.]+)/i)?.[1] ?? null,
  };
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
    headers: { Accept: 'application/vnd.github+json' },
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
  const versions = parseMorpheVersions(morpheRelease.body);

  const youtubeApk = findApk(morpheAssets, 'youtube-morphe-');
  const musicApk = findApk(morpheAssets, 'music-morphe-');
  const microgApk = microgAssets.find(
    (asset) => asset.name.startsWith('microg-') && asset.name.endsWith('.apk'),
  );
  const microgVersion =
    microgApk?.name?.match(/microg-([\d.]+)\.apk/)?.[1] ??
    microgRelease.tag_name?.replace(/^v/i, '') ??
    null;

  return {
    youtube: youtubeApk?.browser_download_url ?? '',
    youtubeMusic: musicApk?.browser_download_url ?? '',
    microg: microgApk?.browser_download_url ?? '',
    youtubeVersion: versions.youtube,
    youtubeMusicVersion: versions.music,
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

export const MICROG_RELEASES_PAGE = 'https://github.com/MorpheApp/MicroG-RE/releases';
export const POTHELPER_RELEASES_PAGE = 'https://github.com/MorpheApp/PotHelper/releases';

const MORPHE_REPO = 'ManfredRichthofen/morphe-builder';
const MICROG_REPO = 'MorpheApp/MicroG-RE';
const POTHELPER_REPO = 'MorpheApp/PotHelper';

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name?: string;
  body?: string;
  published_at?: string;
  assets?: GitHubAsset[];
}

export interface APKReleaseInfo {
  youtube: string;
  youtubeMusic: string;
  microg: string;
  pothelper: string;
  youtubeVersion: string | null;
  youtubeMusicVersion: string | null;
  microgVersion: string | null;
  pothelperVersion: string | null;
}

export const EMPTY_RELEASE_INFO: APKReleaseInfo = {
  youtube: '',
  youtubeMusic: '',
  microg: '',
  pothelper: '',
  youtubeVersion: null,
  youtubeMusicVersion: null,
  microgVersion: null,
  pothelperVersion: null,
};

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'jfapp-docs',
  };

  const token =
    typeof process !== 'undefined'
      ? process.env.GITHUB_TOKEN || process.env.GH_TOKEN
      : undefined;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

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

/** Match release assets like youtube-morphe-v21.30.216-all.apk / music-morphe-v9.20.53-arm64-v8a.apk */
function findMorpheApk(assets: GitHubAsset[], kind: 'youtube' | 'music'): GitHubAsset | undefined {
  const prefix = kind === 'youtube' ? 'youtube-morphe-' : 'music-morphe-';
  const candidates = assets.filter(
    (asset) => asset.name.startsWith(prefix) && asset.name.endsWith('.apk') && !asset.name.includes('-module-'),
  );

  if (candidates.length === 0) return undefined;

  if (kind === 'youtube') {
    return candidates.find((asset) => /-all\.apk$/i.test(asset.name)) ?? candidates[0];
  }

  return candidates.find((asset) => /arm64-v8a\.apk$/i.test(asset.name)) ?? candidates[0];
}

function findMicrogApk(assets: GitHubAsset[]): GitHubAsset | undefined {
  const apks = assets.filter((asset) => asset.name.startsWith('microg-') && asset.name.endsWith('.apk'));
  if (apks.length === 0) return undefined;

  return (
    apks.find((asset) => /^microg-[\d.]+\.apk$/i.test(asset.name)) ??
    apks.find((asset) => /arm64-v8a\.apk$/i.test(asset.name) && !asset.name.includes('-noicon-')) ??
    apks[0]
  );
}

async function fetchLatestRelease(repo: string): Promise<GitHubRelease> {
  const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: githubHeaders(),
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} for ${repo}/releases/latest`);
  }

  return response.json();
}

async function fetchRecentReleases(repo: string, perPage = 30): Promise<GitHubRelease[]> {
  const response = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=${perPage}`, {
    headers: githubHeaders(),
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${response.status} for ${repo}/releases`);
  }

  return response.json();
}

/**
 * Newest release does not always ship both APKs (e.g. YouTube-only builds).
 * Walk recent releases and take the first matching asset for each app.
 */
function pickLatestMorpheApks(releases: GitHubRelease[]) {
  let youtubeApk: GitHubAsset | undefined;
  let musicApk: GitHubAsset | undefined;
  let youtubeBody: string | undefined;
  let musicBody: string | undefined;

  for (const release of releases) {
    const assets = release.assets ?? [];

    if (!youtubeApk) {
      const match = findMorpheApk(assets, 'youtube');
      if (match) {
        youtubeApk = match;
        youtubeBody = release.body;
      }
    }

    if (!musicApk) {
      const match = findMorpheApk(assets, 'music');
      if (match) {
        musicApk = match;
        musicBody = release.body;
      }
    }

    if (youtubeApk && musicApk) break;
  }

  return { youtubeApk, musicApk, youtubeBody, musicBody };
}

function settledValue<T>(result: PromiseSettledResult<T>): T | null {
  return result.status === 'fulfilled' ? result.value : null;
}

async function fetchLatestAPKReleaseInfo(): Promise<APKReleaseInfo> {
  const [morpheResult, microgResult, pothelperResult] = await Promise.allSettled([
    fetchRecentReleases(MORPHE_REPO),
    fetchLatestRelease(MICROG_REPO),
    fetchLatestRelease(POTHELPER_REPO),
  ]);

  const morpheReleases = settledValue(morpheResult) ?? [];
  const microgRelease = settledValue(microgResult);
  const pothelperRelease = settledValue(pothelperResult);

  if (morpheResult.status === 'rejected') {
    console.error('Error fetching Morphe releases:', morpheResult.reason);
  }
  if (microgResult.status === 'rejected') {
    console.error('Error fetching MicroG release:', microgResult.reason);
  }
  if (pothelperResult.status === 'rejected') {
    console.error('Error fetching PotHelper release:', pothelperResult.reason);
  }

  const { youtubeApk, musicApk, youtubeBody, musicBody } = pickLatestMorpheApks(morpheReleases);
  const microgApk = findMicrogApk(microgRelease?.assets ?? []);
  const pothelperApk = (pothelperRelease?.assets ?? []).find(
    (asset) => asset.name.toLowerCase().includes('pot-helper') && asset.name.endsWith('.apk'),
  );

  const youtubeVersions = parseMorpheVersions(youtubeBody);
  const musicVersions = parseMorpheVersions(musicBody);

  return {
    youtube: youtubeApk?.browser_download_url ?? '',
    youtubeMusic: musicApk?.browser_download_url ?? '',
    microg: microgApk?.browser_download_url ?? '',
    pothelper: pothelperApk?.browser_download_url ?? '',
    youtubeVersion: parseVersionFromApkName(youtubeApk?.name ?? '') ?? youtubeVersions.youtube ?? null,
    youtubeMusicVersion: parseVersionFromApkName(musicApk?.name ?? '') ?? musicVersions.music ?? null,
    microgVersion: normalizeTag(microgRelease?.tag_name) ?? microgApk?.name?.match(/microg-([\d.]+)/)?.[1] ?? null,
    pothelperVersion:
      normalizeTag(pothelperRelease?.tag_name) ?? pothelperApk?.name?.match(/pot-helper-([\d.]+)\.apk/i)?.[1] ?? null,
  };
}

/** Build-time / browser fetch with a safe empty fallback for CI rate limits. */
export async function getLatestAPKReleaseInfo(): Promise<APKReleaseInfo> {
  try {
    return await fetchLatestAPKReleaseInfo();
  } catch (error) {
    console.error('Error fetching latest APK releases:', error);
    return EMPTY_RELEASE_INFO;
  }
}

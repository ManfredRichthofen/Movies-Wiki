---
title: 모든 기기에서 시청
description: 휴대폰, TV, 컴퓨터에 플레이어를 설치한 뒤 jfapp.xyz에 연결하세요.
sidebar:
  label: 어디서나 시청
  order: 4
---

화면을 고르고 앱을 설치한 뒤 **`jfapp.xyz`**를 입력하세요. 모든 기기의 서버 주소입니다.

:::info
계정이 먼저 필요하신가요? [계정 설정](/ko/docs/jellyfin/set-up-account/)을 참고하세요. 없는 영화가 있나요? [요청하기](/ko/docs/jellyfin/request-titles/)를 참고하세요. 버퍼링이나 연결 문제인가요? [문제 해결](/ko/docs/jellyfin/troubleshooting/)을 참고하세요.
:::

## 휴대폰

### Android

1. Google Play에서 [Android용 Jellyfin](https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin)을 설치합니다.
2. **서버 추가**를 탭하고 `jfapp.xyz`를 입력합니다 (`https://` 없음).
3. 사용자 이름과 비밀번호로 로그인합니다.

**문제가 생기면**

- “서버를 찾을 수 없음” — `jfapp.xyz`만 쓰고, VPN을 끈 뒤 다시 시도하세요.
- 영상만 나오고 소리 없음 — 설정에서 **Direct play**를 끄거나 화질을 낮추세요.

### iPhone, iPad & Apple TV

1. App Store에서 [Swiftfin](https://apps.apple.com/us/app/swiftfin/id1604098728)을 설치합니다.
2. **서버에 연결**을 탭하고 `jfapp.xyz`를 입력합니다.
3. 사용자 이름과 비밀번호로 로그인합니다.

자세한 안내: [iPhone에서 시청](/ko/docs/jellyfin/watch-on-iphone/).

**문제가 생기면**

- 셀룰러에서 연결 안 됨 — Wi‑Fi를 쓰거나 브라우저에서 [jfapp.xyz](https://jfapp.xyz)를 여세요.
- AirPlay — Swiftfin에서 먼저 재생한 뒤, 제어 센터에서 스피커나 Apple TV를 선택하세요.

## TV

### Android TV & Google TV

1. Play Store에서 **[Wholphin](https://play.google.com/store/apps/details?id=com.github.damontecres.wholphin)**을 설치합니다 (권장). 대안으로 [공식 Jellyfin TV 앱](https://play.google.com/store/apps/details?id=org.jellyfin.androidtv)도 사용할 수 있습니다.
2. 앱 실행 → **서버 추가** → `jfapp.xyz` 입력.
3. 로그인 후 시청을 시작하세요.

### Fire TV

1. Amazon Appstore에서 **[Wholphin](https://www.amazon.com/gp/product/B0G8RQQR9T/ref=mas_pm_wholphin)**을 설치합니다 (권장). 대안: [공식 Jellyfin for Fire TV](https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725).
2. **서버 추가** → `jfapp.xyz` → 로그인.

**문제가 생기면**

- 리모컨이 느림 — 앱을 다시 시작하거나, 저장 공간이 적으면 스틱을 재부팅하세요.
- 4K가 끊김 — 재생 설정에서 화질을 1080p로 낮추세요.

Roku, LG 등 다른 TV 앱은 [다운로드](/Downloads/) 페이지에 있습니다.

## 컴퓨터

### 웹 브라우저 (가장 빠름)

[jfapp.xyz](https://jfapp.xyz)를 여세요 — 설치가 필요 없습니다.

**문제가 생기면**

- 페이지가 깨짐 — 강력 새로고침 (`Ctrl + F5` 또는 `Cmd + Shift + R`). 필요하면 `jfapp.xyz` 쿠키를 지우세요.
- 계속 버퍼링 — 재생 중 톱니바퀴에서 화질을 낮추세요. 연결이 느리면 [추가 소스(지구본)를 끄세요](/ko/docs/jellyfin/remote-stream/), 또는 [문제 해결 체크리스트](/ko/docs/jellyfin/troubleshooting/)를 따르세요.

### Windows, Mac & Linux 앱

1. OS에 맞는 [Jellyfin Media Player](https://jellyfin.org/downloads)를 다운로드합니다.
2. 서버 `https://jfapp.xyz`를 추가하고 로그인합니다.

**문제가 생기면**

- 초록·보라색으로 깨짐 — 사용자 아이콘 → **클라이언트 설정** → **비디오** → **하드웨어 디코딩**을 **사용 안 함**.
- 소리와 영상이 어긋남 — 하드웨어 디코딩을 끈 뒤, 그래픽 드라이버와 앱을 최신으로 업데이트하세요.

설치 링크를 한곳에서 보려면 [다운로드](/Downloads/) 페이지를 참고하세요. 그래도 안 되면 [문제 해결](/ko/docs/jellyfin/troubleshooting/)을 확인하세요.

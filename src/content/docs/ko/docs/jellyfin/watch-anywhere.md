---
title: 모든 기기에서 시청
description: 모든 플랫폼에 Jellyfin 클라이언트를 설치하고 가장 흔한 재생 문제를 해결하세요.
sidebar:
  label: 어디서나 시청
  order: 4
---

공식 Jellyfin 클라이언트로 어떤 기기에서든 스트리밍하세요. 서버 주소는 항상 **`jfapp.xyz`**입니다.

:::info
계정이 먼저 필요하신가요? [계정 설정](/ko/docs/jellyfin/set-up-account/)을 참고하세요. 라이브러리에 없는 작품이 있나요? [영화·프로그램 요청](/ko/docs/jellyfin/request-titles/)을 참고하세요 — Jellyfin이나 Seerr에서 검색한 뒤 **요청**을 탭하세요.
:::

## 웹 브라우저

가장 빠른 시청 방법 — 설치가 필요 없습니다.

- **메인 플레이어:** [jfapp.xyz](https://jfapp.xyz)
- **베타 플레이어:** [beta.jfapp.xyz](https://beta.jfapp.xyz) (새 UI, 안정성이 다소 떨어질 수 있음)

### 자주 발생하는 문제

**페이지가 로드되지 않거나 깨져 보임**

- Windows/Linux는 `Ctrl + F5`, Mac은 `Cmd + Shift + R`로 강력 새로고침하세요.
- 해결되면 브라우저 설정에서 `jfapp.xyz` 사이트 쿠키를 지우세요.

**재생이 끊기거나 계속 버퍼링됨**

- 재생 중 톱니바퀴 아이콘에서 화질을 낮추세요.
- 유선 연결을 쓰거나 라우터에 더 가까이 이동하세요.

## Android 휴대폰 & 태블릿

### 설정

1. Google Play에서 [Android용 Jellyfin](https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin)을 설치합니다.
2. **서버 추가**를 탭하고 `jfapp.xyz`를 입력합니다.
3. Jellyfin 사용자 이름과 비밀번호로 로그인합니다.

### 자주 발생하는 문제

**"서버를 찾을 수 없음"**

- `jfapp.xyz`만 사용하세요 — `https://` 접두사 없음.
- VPN을 잠시 끄고 다시 시도하세요.

**영상은 나오는데 소리가 없음**

- 클라이언트 설정에서 **Direct play**를 끄거나 더 낮은 화질로 전환하세요.

### 다운로드

[Google Play — Jellyfin](https://play.google.com/store/apps/details?id=dev.jdtech.jellyfin)

## iOS, iPhone, iPad & Apple TV

Apple 기기에는 Swiftfin을 권장합니다.

:::tip[iPhone 전체 안내]
설치와 로그인 단계별 가이드는 **[iPhone에서 시청](/ko/docs/jellyfin/watch-on-iphone/)**을 참고하세요.
:::

### 설정

1. [App Store에서 Swiftfin](https://apps.apple.com/us/app/swiftfin/id1604098728)을 설치합니다.
2. **서버에 연결**을 탭하고 `jfapp.xyz`를 입력합니다 (`https://` 접두사 없음).
3. Jellyfin 사용자 이름과 비밀번호로 로그인합니다.

같은 단계는 **iPad**와 **Apple TV**(해당 기기의 App Store에서 Swiftfin 설치)에서도 동일합니다.

### 자주 발생하는 문제

**셀룰러 데이터에서 연결 불가**

- 일부 통신사는 비표준 포트를 차단합니다. Wi‑Fi를 사용하거나 [jfapp.xyz](https://jfapp.xyz) 웹 플레이어를 사용하세요.

**AirPlay가 작동하지 않음**

- Swiftfin에서 먼저 재생을 시작한 뒤, 제어 센터를 열고 Apple TV 또는 스피커를 선택하세요.

### 다운로드

[App Store — Swiftfin](https://apps.apple.com/us/app/swiftfin/id1604098728)

## Android TV & Fire TV

### 설정

1. [Play Store](https://play.google.com/store/apps/details?id=org.jellyfin.androidtv) 또는 [Amazon Appstore](https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725)에서 Jellyfin을 설치합니다.
2. 앱을 실행하고 **서버 추가**를 선택합니다.
3. `jfapp.xyz`를 입력하고 **다음**을 탭합니다.
4. Jellyfin 자격 증명으로 로그인합니다.
5. 라이브러리를 둘러보고 스트리밍을 시작하세요.

### 자주 발생하는 문제

**리모컨 조작이 느림**

- 기기 설정에서 앱을 다시 시작하세요. 저장 공간이 적은 Fire TV 스틱은 전체 재부팅이 도움이 됩니다.

**4K 콘텐츠가 끊김**

- 기기가 모든 코덱을 하드웨어 디코딩하지 못할 수 있습니다. 재생 설정에서 화질을 1080p로 낮추세요.

### 다운로드

- [Android TV — Google Play](https://play.google.com/store/apps/details?id=org.jellyfin.androidtv)
- [Fire TV — Amazon](https://www.amazon.com/Jellyfin-for-Fire-TV/dp/B07TX7Z725)

## 데스크톱 — Windows, Mac & Linux

[Jellyfin Media Player](https://jellyfin.org/downloads)는 MPV 플레이어가 내장된 공식 데스크톱 클라이언트입니다. HDR, 4K, 오디오 패스스루, 톤매핑을 지원합니다.

### 설정

1. [jellyfin.org/downloads](https://jellyfin.org/downloads)에서 OS용 설치 파일을 다운로드합니다.
2. 앱을 열고 서버 `https://jfapp.xyz`를 추가한 뒤 로그인합니다.

### 자주 발생하는 문제

#### 초록색 또는 보라색 영상 아티팩트

하드웨어 디코딩은 대부분 잘 되지만 일부 GPU에서 깨질 수 있습니다. 끄려면:

1. (오른쪽 위) **사용자 아이콘**을 클릭합니다.
2. **클라이언트 설정**을 엽니다.
3. **비디오**에서 **하드웨어 디코딩**을 **사용 안 함**으로 설정합니다.

색상 깨짐은 해결되지만 CPU 사용량이 늘어날 수 있습니다.

#### 오디오 싱크 불일치

- 위와 같이 하드웨어 디코딩을 끄세요.
- 그래픽 드라이버와 Jellyfin Media Player를 최신으로 업데이트하세요.

### 다운로드

[다운로드](/Downloads/) 페이지에서 플랫폼용 최신 빌드를 받으세요.

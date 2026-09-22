---
title: Swiftfin으로 iPhone에서 시청
description: iPhone에 Swiftfin을 설치하고 jfapp에 연결하는 단계별 가이드입니다.
sidebar:
  label: iPhone에서 시청
  order: 3
---

**Swiftfin**은 iPhone용 공식 Jellyfin 앱입니다. App Store에서 설치하고 jfapp 서버에 연결하는 방법을 안내합니다.

:::info[필요한 것]
- **iOS 16.6** 이상인 **iPhone**
- [Jellyfin 계정](/ko/docs/jellyfin/set-up-account/) (초대 완료, 사용자 이름·비밀번호 준비)
- 몇 분과 App Store 연결
:::

서버 주소는 항상 **`jfapp.xyz`**입니다.

## 1단계 — Swiftfin 설치

1. iPhone에서 **App Store**를 엽니다.
2. **Swiftfin**을 검색합니다.
3. **받기**를 탭합니다 (무료 앱).
4. 설치가 끝나면 **열기**를 탭하거나 홈 화면에서 **Swiftfin**을 찾습니다.

휴대폰에서 이 링크로도 설치할 수 있습니다: [App Store의 Swiftfin](https://apps.apple.com/us/app/swiftfin/id1604098728).

## 2단계 — jfapp 서버 추가

1. **Swiftfin**을 엽니다.
2. **서버에 연결**(또는 **서버 추가**)을 탭합니다.
3. 서버 주소를 입력합니다:

   ```
   jfapp.xyz
   ```

4. **연결**을 탭합니다.

:::tip[서버 주소 형식]
`jfapp.xyz`만 사용하세요 — `https://`, `http://`, 포트 번호를 **넣지 마세요**. 연결에 실패하면 `https://jfapp.xyz`를 시도하세요.
:::

서버와 같은 로컬 네트워크에 있지 않으면 **검색된 서버**에 jfapp가 나타나지 않습니다. 위 주소로 항상 수동 추가하세요.

## 3단계 — 로그인

1. [초대 설정](/ko/docs/jellyfin/set-up-account/)에서 만든 **Jellyfin 사용자 이름**과 **비밀번호**를 입력합니다.
2. **로그인**을 탭합니다.
3. 라이브러리가 로드되면 영화·프로그램을 둘러보고 재생을 탭하세요.

:::warning[로그인이 실패하나요?]
초대 링크를 먼저 완료했는지 확인하세요. 그전에는 사용자 이름/비밀번호 로그인이 작동하지 않습니다. [계정 설정](/ko/docs/jellyfin/set-up-account/)을 참고하세요.
:::

## 4단계 — 선택 설정

로그인한 뒤:

- **화질** — 재생 중 플레이어 컨트롤에서, 셀룰러나 느린 Wi‑Fi에서 버퍼링되면 화질을 낮추세요.
- **다운로드** — 일부 작품은 항목 화면에서 오프라인 다운로드를 지원합니다 (작품·계정에 따라 다름).
- **AirPlay** — Swiftfin에서 재생을 시작한 뒤 **제어 센터**를 열고 Apple TV 또는 스피커를 선택하세요.

휴대폰에서 없는 작품을 요청하려면 같은 로그인으로 [requests.jfapp.xyz](https://requests.jfapp.xyz/)의 [Seerr](/ko/docs/jellyfin/request-titles/)를 사용하거나, Jellyfin 검색에서 **요청**이 보이면 그걸로 요청하세요.

## 문제가 생겼나요?

| 증상 | 시도할 방법 |
| --- | --- |
| 서버를 찾거나 연결할 수 없음 | 정확히 `jfapp.xyz`를 사용하세요. VPN을 끄세요. 셀룰러 대신 Wi‑Fi를(또는 그 반대로) 시도하세요. [status.jfapp.xyz](https://status.jfapp.xyz)를 확인하세요. |
| 잘못된 사용자 이름 또는 비밀번호 | 초대 링크를 완료했는지, 그 비밀번호를 쓰는지 확인하세요. Caps Lock / 자동 수정이 흔한 원인입니다. |
| Wi‑Fi에서는 되는데 셀룰러에서는 안 됨 | 일부 통신사가 트래픽을 필터링합니다. Wi‑Fi를 쓰거나 Safari에서 [jfapp.xyz](https://jfapp.xyz)를 사용하세요. |
| 재생이 버퍼링되거나 끊김 | 플레이어에서 화질을 낮추세요. 라우터에 더 가까이 이동하세요. |
| AirPlay가 없거나 실패 | Swiftfin에서 먼저 재생을 시작한 뒤, 제어 센터에서 AirPlay 기기를 선택하세요. |
| 업데이트 후 앱이 멈춘 것처럼 보임 | Swiftfin을 강제 종료 후 다시 열거나, 서버를 삭제한 뒤 `jfapp.xyz`를 다시 추가하세요. |

여전히 막혔나요? [모든 기기에서 시청](/ko/docs/jellyfin/watch-anywhere/)을 보거나 [jfapp.xyz](https://jfapp.xyz) 웹 플레이어를 사용하세요.

## 다운로드

- [Swiftfin — App Store](https://apps.apple.com/us/app/swiftfin/id1604098728)
- [모든 Jellyfin 클라이언트](/Downloads/)

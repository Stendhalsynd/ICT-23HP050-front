# AutomateX front

# 기존 Github 프로젝트에서 Gitlab 프로젝트로 remote 이전방법

1. git remote rm origin
- 프로젝트 로컬 디렉토리에서 입력

2. git remote -v 
- 입력시 아무것도 뜨지 않으면 remote 를 삭제한 것

3. git remote add origin https://lab.hanium.or.kr/23_HP050/23_HP050.git
- 깃랩 원격 저장소 추가

4. git remote -v
- 원격 저장소 확인

```plain-text
origin  https://lab.hanium.or.kr/23_HP050/23_HP050.git (fetch)
origin  https://lab.hanium.or.kr/23_HP050/23_HP050.git (push)
```

5. git push -u -origin --all
- 로컬에 있는 프로젝트를 원격 저장소에 push
- 이때 뜨는 username, password 는 gitlab 의 username, password 와 동일 (github 혹은 git config의 username, password 가 아님)

# raccoon

멋쟁이 사자처럼 7기 너구리굴

## 커밋 컨벤션

파일 생성 혹은 과제 시작

[ADD] 한글 / 영어

[키워드] `띄어쓰기한칸` 한글로 내용 적기

키워드

- [ADD] 새로운 기능(과제)이 생겼을 때 / 파일을 생성
- [BUG] 버튼 누르면 색깔 안바뀌는 버그 / 내가 못 고쳤다 - 이슈 생성
- [MODIFY] 코드 내용을 바꿨는데 전체적으로 큰 영향 없을 때
- [FIX] 에러가 났을 때 내가 고쳤다 - 이슈 닫기
- [UPDATE] 코드 내용이 바뀌었는데 매우 큰 영향이 있을 때
- [RENAME] 파일 생성 및 경로 변경
- [REFACTOR] 코드 리팩토링
- [CHORE] setting과 관련한 문제
- [REVIEW] 코드 리뷰 키워드

## 내 브랜치에 merge된(main) branch 가져오기

1. git switch /merge된 branch(main)/
2. git pull /repo이름/ /merge된 branch(main)/
3. git switch /작업할 branch(내 branch)/
4. git rebase /merge된 branch(main)/

# Refactor (TODO)

추후 리팩토링을 위한 파일입니다. 배포 전 프로젝트와 관련된 리드미로 변경될 예정입니다. 
develop 브랜치에서 pull 받은 후 작업하면서 추가로 리팩토링 되어야 하는 부분들을 아래에 적어주세요!

## feature/1013

 - express-validator : req.body validation을 배열 형식이 아닌 다른 방식으로 업데이트 
 - 특이 에러 케이스에 대해서 다시 한번 에러 핸들링 체크 필요(mongoDB error)
 - services >> memoroom.getAllMemoRoom flatMap으로 리팩토링 혹은 별도 함수를 따로 만들어 관리

## feature/1020

 - aws s3 error handling : 관련 조사 추가 필요
 - services/memoRoom.js : forEach & deleteObject가 아닌 "deleteObjects"으로 다시 구현할 것 [관련 공식 문서](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#deleteObjects-property)
 
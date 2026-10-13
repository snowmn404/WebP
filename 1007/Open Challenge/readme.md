<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>별 문자 출력하기</title>
    <script>
        function printStar(numStr) {
            // 입력받은 문자열을 정수로 변환합니다.
            let num = parseInt(numStr);
            
            // 1. isNaN(num): 숫자가 아닌 문자열이 입력되었는지 확인 ("hello" 등)
            // 2. num <= 0: 0이나 음수가 입력되었는지 확인
            // 3. num != numStr: 실수(예: 3.14)가 입력되었는지 확인 (parseInt 결과와 원본 문자열 비교)
            if (isNaN(num) || num <= 0 || num != numStr) {
                document.write("입력 오류 입니다.");
            } else {
                // 정상적인 양의 정수일 경우, 이중 for문을 이용해 별을 출력합니다.
                for (let i = 1; i <= num; i++) {
                    for (let j = 1; j <= i; j++) {
                        document.write("*");
                    }
                    document.write("<br>"); // 한 줄이 끝날 때마다 줄바꿈
                }
            }
        }
    </script>
</head>
<body>
    <h3>별 문자 출력하기</h3>
    <hr>
    <script>
        // 페이지가 로드될 때 prompt를 띄워 입력을 받습니다.
        let input = prompt("정수를 입력하세요", "");
        
        // 입력받은 값을 printStar 함수로 전달합니다.
        printStar(input);
    </script>
</body>
</html>

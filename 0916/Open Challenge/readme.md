<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>컴퓨터 기술 소개</title>
</head>
<body>
    <header>
    <h1>스마트폰</h1>
    <p>
    스마트폰은 컴퓨터를 결합한 무선 휴대전화기이다. 
    PC에서 실행되는 운영체제보다 작게 만든 모바일 운영체제를 탑재하여
    인터넷 검색, 전자우편, 간단한 문서 편집, 카메라, 오디오 및 비디오 재생 등 
    PC의 기능을 거의 모두 갖추고 있다.
    </p>
    </header>
    <nav>
    <p>
    <h2>목차</h2>
    <ul>
        <li><a href="#사이먼">역사</a></li>
        <li><a href="#안드로이드폰">안드로이드폰</a></li>
        <li><a href="#아이폰">아이폰</a></li>
        <li><a href="#샘플">샘플</a></li>
    </ul>
    </p>
    </nav>
    <section>
        <article id="Simon">
            <p>
            <h2 id="사이먼"><ins><a href="https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0">역사</a></ins></h2>
            </p>
            <p>
            최초의 스마트폰은 사이먼(Simon)으로 추청된다. 1992년 미국의
            라스베이거스에서 열린 컴덱스에서 컨셉제품으로 처음 공개되었다.
            </p>
        </article>
        <article id="Android">
            <p>
            <h2 id="안드로이드"><ins><a href="https://ko.wikipedia.org/wiki/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C_(%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C)">안드로이드</a></ins></h2>
            </p>
            <p>
            안드로이드(영어: Android)는 휴대 전화를 비롯한 휴대용장치를 위한 운영 체제와 미들웨어, 사용자 인터페이스
            그리고 표준 응용 프로그램(웹 브라우저, 이메일 클라이언트, 단문 메시지 서비스(SMS),
            멀티미디어 메시지 서비스(MMS)등)을 포함하고 있는 소프트웨어 집합이다.
            </p>
        </article>
        <article id="iphone">
    <p>
    <h2 id="아이폰"><ins><a href="https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%ED%8F%B0">아이폰</a></ins></h2>
    </p>
    <p>
    아이폰(영어: iphone)은 2007년 1월 9일, 애플이 발표한 휴대 전화 시리즈이다.
    미국 샌프란시스코에서 열린 맥월드 2007에서 애플의 창업자 중 한명인 스티브 잡스가 발표했다.
    </p>
    <p>
    <h2 id="샘플">샘플</h2>
    </p>
    </article>
    <article id="sample">
<table>
    <caption>스마트폰샘플</caption>
    <tbody>
        <tr>
            <td><img src="iphone img.jpeg"></td>
            <td><img src="samsung img.jpeg"></td>
        </tr>
    </tbody>
</table>
</section>
</article>
<footer>
<p>
    <h3><ins><a href="survey3.html" onclick="window.open
    (this.href, 'surveyPopup', 'width=400,height=500'); return false;">설문조사</a></ins></h3>
</p>
<p>Copyright 2022 by Kitae</p>
</footer>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>소프트웨어 기술 선호에 관한 설문</title>
</head>
<body>
    <header>
    <h1>설문지</h1>
    소프트웨어 기술에 대한 의견을 듣습니다. 많은 참여 부탁드립니다.
    <hr>
    </header>
    <section>
    <form>
        학년
        <input type="radio" name="grade" value="1">1학년
        <input type="radio" name="grade" value="2">2학년
        <input type="radio" name="grade" value="3">3학년
        <input type="radio" name="grade" value="4">4학년<br><br>
        성별
        <input type="radio" name="gender" value="1">남
        <input type="radio" name="gender" value="2">여<br><br>
        관심 분야 <select name="software">
            <option value="1"selected>모바일 소프트웨어</option>
            <option value="2">웹 소프트웨어</option>
            <option value="3">게임 소프트웨어</option>
            </select><br><br>
        진로
        <input type="checkbox" value="1">개발
        <input type="checkbox" value="2">기획
        <input type="checkbox" value="3">영업
        <input type="checkbox" value="4">창업<br><br>
        남기고 싶은 말<br>
        <textarea cols="20" rows="5">
글을 남겨주세요
        </textarea><br>
    </section>
    <footer>
    <p>Copyright 2022 by Kitae</p>
    </form>
    </footer>
</body>
</html>

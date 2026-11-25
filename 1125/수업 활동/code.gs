
const SPREADSHEET_ID = '여기에_스프레드시트_ID_입력';
const SHEET_NAME = '시트1';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('11월 25일 저녁 신청 받기')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function submitApplication(data) {
  const name = String(data.name || '').trim();
  const food = String(data.food || '').trim();
  const message = String(data.message || '').trim();

  if (!name || !food) {
    throw new Error('이름과 음식은 필수 입력 항목입니다.');
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('시트 이름을 확인해 주세요.');
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['이름', '음식', '하고 싶은 말']);
    }

    const headers = sheet.getRange(1, 1, 1, 3).getDisplayValues()[0];

    if (headers.join(',') !== '이름,음식,하고 싶은 말') {
      throw new Error('스프레드시트 헤더를 확인해 주세요.');
    }

    const safe = value =>
      /^[=+\-@]/.test(value) ? "'" + value : value;

    sheet.appendRow([
      safe(name),
      safe(food),
      safe(message)
    ]);

    return { success: true };

  } finally {
    lock.releaseLock();
  }
}

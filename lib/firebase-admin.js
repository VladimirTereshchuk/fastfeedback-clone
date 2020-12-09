import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCugTh/0EKKjwj5\njGDiNg47IQsygMS3gf5385hkjG7ShV8tesj0wtegDByFS0T3mIX+R2KpWHEWjnuV\npo61MKK+nxGOXNqPEajEGAdzQeSN8It0rK4wMkgXVG2ITTUNxNXBFYBkWCYOSNqU\njynn6WqTLUcUbiO8Aa6MLtHlaa52cVCgSjKKI6aK7zDFfcHXyLQuBXuHXOs6Tdni\nQH4fDM6U3MYJz8thVad/tY5nTCNnhj4XsL+BwaQzwItS/1OoDF0ij++bp9Swsml8\nB+MXhLwz3l8N5Inq25EPfyVUZvPG30u+8NDVyyUBlDJ9qarpgDTXAaoWI6ShzzHl\njRVWPyVnAgMBAAECggEAFq6gL+jbhVQTOBCZlT2uetwQLwfSygGBGIlWsRcZ3o5M\ncUZo8XuT+G8qk97VP5OZMxSHS/i9dk+d27VTDlUcikd1yjnihL8oXxi6ey5A7Xwr\nPEanu4cFnNayCAn1D+2aVScc0a4tgCTTGIVFTqol2qyDdTHdvjW/wOPjD309mpJn\n57FW52Vqf1TR+rmNkSPOYe5nBMZxkpXIrO7BraO2NE4/mzeVRn0erOKYLEkAmf5m\nKkffnBXlc0RdhxjSZUnrp72nz9SkJkjzvFl9k2zkXiLso+Xr/jCZsMCt5vehzCS7\n7PXfq8E34yaqNHolhihNJc78Qx1pS2+pvfMP/wp1GQKBgQDk+GwBUABzyeWec0j9\nOCxJwxkKQKJe6EC/98IckowEvPk44WbNKwQYo2nSqIe9Ncqbjof/laj0B6StlPZI\nrYn2xU2Yu5556cSayXVNjpwmOKJbWbhJnYpdQ9S6vPMh8vwFYioyVa5SPBEJz+7P\nycqXlqxmO/EGIZuOT96zC3XLSQKBgQDDGtNPe4018nqS3Fcb54eiRxPnD4n1TqEp\nKTb5PZqu4syb8dCF8OLTXU1PMzq34Fn5smebdIDc+av1MwDPDRJ405hz1LVQaUh5\ncf+hg11ntxEyXYAVzgczyPMrDoiMN+ps2n2LDYL/Jch6jTudX1XUH5ZPnWG+Z+QG\nd9w3Gp07LwKBgClXdWDTShGd/ZibZi1aTBzRXh8MxoRuWOqQWHsCNsfQOwt7Hy2i\nO64bK0s+5KtUIA3wMTwDkKrnCmPRBprewo9M1pLiJV4LyFTOVSC4xBbemOn3jB+2\nkzn9ulYxMZEKp1htfgLyl3P/pm/oHE1mOO8f5GbdIcqinMyYPTSEuDMJAoGBAIMN\n499CCMqyBC/eHg06attQj0foIi1LEepKKwkknmDXK8Wcmws9kb+UrreCm/CjnQyj\nEAFWMrE8bIuaJPLvvva2e3Ni8CABeJNLRgFB8l4WlFCWidEbwa7BTsYfTw2RCcDw\nyt+6xcGJqa7Ya7D8NvTz+s2j0+JIetz1alEBaZg1AoGAWkZCF2mHcE2n8u+WYW7x\n5P+XAeeqr/r3xZe1TK4xC6q4VpzGVbJ3gNaOHF7tYiWXPlyq6/1mLp/hceqincgA\n69/gAyCDbnNDE2E5c9qQU92H/FsUOENRPgtu7VdF9Any0ePAzP9KPiqADrz59dm4\nYBVKBGqnA2V9gzajM/3ADPg=\n-----END PRIVATE KEY-----\n",
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: "fast-feedback-clone-241aa.firebaseapp.com",
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };

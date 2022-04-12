import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';
import youtube from './assets/youtube.png';
import './App.css';

function App() {
  const [staticPage, setStaticPage] = useState(true);

  useEffect(() => {
    if (document.location.pathname === '/saltedge') {
      setStaticPage(false);
    }
  }, []);

  return (
    <>
      {staticPage ?
        <div>
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <hr />
            <div style={{ paddingTop: "5px" }}>
              <div className="Mini-header">הפלטפורמה שתעזור לכם</div>
              <div className="Mini-header">להגדיל את ההון שלכם</div>
            </div>
            <div style={{ paddingTop: "40px" }}></div>
            <div className="Explanation">
              <div>האפליקציה תאסוף בצורה אוטומטית את כל המידע הפיננסי למקום אחד</div>
              <div>ותציג שכבה של תובנות על מנת לקבל החלטות כלכליות טובות יותר</div>
              <div>כך, נאפשר לכל אדם ללא ניסיון קודם</div>
              <div>ולהגדיל את הצמיחה הכלכלית שלו</div>
            </div>
            <div style={{ paddingTop: "35px" }}></div>
            <div className="Explanation">
              <div>מזמינים אתכם להצטרף ולגלות כמה אתם באמת שווים</div>
              <div>ללא התחייבות וללא עלות</div>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <div className="Mini-header">👇🏼בואו נתחיל👇🏼</div>
            </div>
            <div className="mcnButtonContentContainer">
              <a className="mcButton" title="למעבר לאפליקציה" href="https://app.moneytor.co.il/" target="_blank" rel="noreferrer noopener">למעבר לאפליקציה</a>
            </div>
            <div style={{ paddingTop: "60px" }}></div>
            <hr />
            <div className="Mini-Explanation">
              <div>מזמינים אתכם להישאר מעודכנים ולעקוב אחר הפעילות שלנו</div>
              <div>🤩אירועים מרגשים מאוד בדרך</div>
              <div>👇🏼וכמובן, אנחנו מפרסמים בכל הפלטפורמות וזמינים לכל שאלה</div>
            </div>
          </div>
          <div className="Footer">
            <a href="https://www.facebook.com/Moneytor.it" target="_blank" rel="noreferrer noopener">
              <img src={facebook} className="Footer-Link" alt="logo" />
            </a>
            <a href="https://www.instagram.com/moneytor__/" target="_blank" rel="noreferrer noopener">
              <img src={instagram} className="Footer-Link" alt="logo" />
            </a>
            <a href="mailto:office@moneytor.co.il" target="_blank" rel="noreferrer noopener">
              <img src={email} className="Footer-Link" alt="logo" />
            </a>
            <a href="https://www.linkedin.com/company/42886970/admin/" target="_blank" rel="noreferrer noopener">
              <img src={linkedin} className="Footer-Link" alt="logo" />
            </a>
            <a href="https://www.youtube.com/channel/UCQ81p5Urolc7J60OO_juzZQ" target="_blank" rel="noreferrer noopener">
              <img src={youtube} className="Footer-Link" alt="logo" />
            </a>
          </div>
        </div> : <div className="Saltedge">
          <h3>.ניתן לסגור את החלון עכשיו</h3>
        </div>}
    </>
  );
}

export default App;
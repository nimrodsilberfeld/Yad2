import React from "react"
import google_play from "../img/google-play2.png"

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer_text not_mobile">מחפשים דירות למכירה ? בלוח נכסים למכירה של יד2 תמצאו בקלות ובמהירות. מאגר הנכסים למכירה הענק והעדכני שלנו עומד לרשותכם - כל שעליכם לעשות הוא להקליד את פרטי הנכס שמעניין אתכם (מחוז, אזור, ישוב, סוג נכס, מספר חדרים וכו') ומנוע החיפוש שלנו יסנן עבורכם את המודעות הרלוונטיות ביותר. מחפשים דירה למכירה באזור ספציפי? לחצו על "הצג על גבי מפה" ובחרו באזור הגיאוגרפי שבו אתם מעוניינים למצוא דירה למכירה. המערכת תסמן עבורכם את מיקומי הדירות הזמינות, ותוכלו להקליק על כל סימון כדי לצפות במודעה ובפרטי ההתקשרות עם המוכר.</p>
            <div className="category_links">
                <section>
                    <span className="title_section">נדל"ן</span>
                    <ul className="not_mobile">
                        <li className="sub_cut_link">מכירה</li>
                        <li className="sub_cut_link">השכרה</li>
                        <li className="sub_cut_link">שותפים</li>
                        <li className="sub_cut_link">כונס נכסים</li>
                        <li className="sub_cut_link">מדד הנדל"ן</li>
                        <li className="sub_cut_link">דירות חדשות</li>
                        <li className="sub_cut_link">Yzer- בונים החלטות חכמות</li>
                        <li className="sub_cut_link">Yadata- הערכת שווי נכס</li>
                    </ul>
                </section>
                <section className="two_cols">
                    <span className="title_section">רכב</span>
                    <ul className="not_mobile">
                        <li className="sub_cut_link">פרטי</li>
                        <li className="sub_cut_link">מסחרי</li>
                        <li className="sub_cut_link">ג'יפים</li>
                        <li className="sub_cut_link">משאיות</li>
                        <li className="sub_cut_link">אופנועים</li>
                        <li className="sub_cut_link">קטנועים</li>
                        <li className="sub_cut_link">כלי שייט</li>
                        <li className="sub_cut_link">מיוחדים</li>
                        <li className="sub_cut_link">אביזרים</li>
                        <li className="sub_cut_link">מכרזים וכינוס</li>
                        <li className="sub_cut_link">מחירון רכב</li>
                        <li className="sub_cut_link">מימון רכב</li>
                    </ul>
                </section>
                <section>
                    <span className="title_section">יד שנייה</span>
                    <ul className="not_mobile">
                        <li className="sub_cut_link">לכל המוצרים</li>
                        <li className="sub_cut_link">ריהוט</li>
                        <li className="sub_cut_link">סלולר</li>
                        <li className="sub_cut_link">הכל בחינם</li>
                        <li className="sub_cut_link">בזאר יד שנייה</li>
                    </ul>
                </section>
                <section className="not_mobile">
                    <span className="title_section">חיות מחמד</span>
                    <ul className="not_mobile">
                        <li className="sub_cut_link">כללי</li>
                        <li className="sub_cut_link">כלבים</li>
                        <li className="sub_cut_link">חתולים</li>
                        <li className="sub_cut_link">תוכים ובעלי כנף</li>
                        <li className="sub_cut_link">דגים</li>
                        <li className="sub_cut_link">זוחלים</li>
                    </ul>
                </section>
                <section className="not_mobile">
                    <span className="title_section">נותני שירות</span>
                    <ul className="not_mobile">
                        <li className="sub_cut_link">מורים פרטיים</li>
                        <li className="sub_cut_link">תיירות ונופש</li>
                    </ul>
                </section>
                <section>
                <span className="title_section mobile_only">דרושים IL</span> 
                </section>
            </div>
            <div className="social_links">
                <div className="footer_black">
                    <i className="fab fa-apple"></i>
                </div>
                <div className=" footer_black">
                    <img alt="" src={google_play} />
                </div>
                <div className=" footer_black">
                    <i className="fab fa-facebook-f facebook_i"></i>
                </div>
                <div className=" footer_black">
                    <i className="fab fa-youtube facebook_i"></i>
                </div>
            </div>
            <p className="copyrignts_text">
                זכויות שמורות לנמרוד זילברפלד
            </p>
            <hr className="footer_hr" />
            <nav className="footer_menu">
                <span>תקנון</span>
                <span>הצהרת נגישות</span>
                <span>מדיניות פרטיות</span>
                <span>מפת האתר</span>
                <span>צור קשר</span>
            </nav>
        </div>
    )
}

export default Footer
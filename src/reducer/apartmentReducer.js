// export const initialApartmentState = [
//     {
//         id: 1,
//         owner: {
//             name: "צביקה",
//             phone: 5211223344,
//             plan: 0,
//             //0=רגיל אפור
//             //1=מודגש וורוד
//             //2=vip צהוב
//         },
//         type: "מכירה",
//         location: {
//             city: "תל אביב",
//             street: "עזריאלי",
//             number: 13,
//             neighborhood: "דרך מנחם בגין"
//         },
//         propertyType: {
//             type: "דירות",
//             subType: "דירה"
//         },
//         propertyInfo: {
//             rooms: 1,
//             floor: 5,
//             building_floor: 10,
//             price: 10002000,
//             size: 160,
//             state: "חדש מקבלן",
//             //חדש מקבלן\חדש\משופץ\במצב שמור\דרוש שיפוץ
//             entryDate: 1623628800000, //  14/6/21
//             parking: 1, //  0/1/2/3
//             balcony: 0, //  0/1/2/3

//         },
//         propertyFeatures: ["מחסן", "גישה לנכים", "מיזוג אוויר", "מזגן תדיראן", 'ממ"ד'],
//         //מיזוג,ממ"ד,מחסן,דלתות פנדור
//         //ריהוט,גישה לנכים,מעלית,מזגן תדיראו
//         //משופצת,מטבח כשר,דוד שמש,סורגים
//         description:
//             "ללא תיווך. דירה למכירה בת 4 חדרים, כחדשה ברחוב חלמיש, רמת אלמוגי.שדרוגים רבים בדירה מעבר למפרט הרגיל של קבלן. דירה על שטח של 109 מטר ובנוסף מרפסת 10 מטר עם נוף ירוק פתוח ,עד ראש הנקרה. יש חניה פרטית, מחסן גדול, מזגן מרכזי. תאריך כניסה גמיש. מתווכים נא לא להתקשר"
//         ,
//         images: [
//             "https://static.budgetplaces.com/establishment/89/38/13889/1.jpg",
//             "https://st.hzcdn.com/simgs/pictures/salles-de-sejour/apartment-duplex-suresnes-design-2l-img~3bb19ef604e1c02c_4-6577-1-81c4332.jpg",
//             "https://q-xx.bstatic.com/xdata/images/hotel/840x460/158320574.jpg?k=ec4a3ee03180991a0844a2e6a354e98a050cd92e832e43067cc2c68d982be36b&o=",
//             "https://q-xx.bstatic.com/xdata/images/hotel/840x460/133741576.jpg?k=4c91ba5195fa77e0ca4b06196ff7197c6c0dd263320a5c7b1ff7685287842c75&o="
//         ]
//     },
//     {
//         id: 2,
//         owner: {
//             name: "תמיר",
//             phone: 5211223344,
//             plan: 2,
//             //0=רגיל אפור
//             //1=מודגש וורוד
//             //2=vip צהוב
//         },
//         type: "מכירה",
//         location: {
//             city: "ירושלים",
//             street: "דוד המלך",
//             number: 90,
//             neighborhood: "רחביה"
//         },
//         propertyType: {
//             type: "דירות",
//             subType: "דירת גן"
//         },
//         propertyInfo: {
//             rooms: 2,
//             floor: 3,
//             building_floor: 10,
//             price: 20005000,
//             size: 140,
//             state: "חדש מקבלן",
//             //חדש מקבלן\חדש\משופץ\במצב שמור\דרוש שיפוץ
//             entryDate: "1/3/21",
//             parking: 2, //  0/1/2/3
//             balcony: 1, //  0/1/2/3
//         },
//         propertyFeatures: ["מיזוג אוויר", "מטבח כשר", "מעלית"],
//         //מיזוג,ממ"ד,מחסן,דלתות פנדור
//         //ריהוט,גישה לנכים,מעלית,מזגן תדיראו
//         //משופצת,מטבח כשר,דוד שמש,סורגים
//         description: "  גרעקרקרעק ק'רקרעקרעקרע  קרע  קרע  ק רע קר ע ראי  דכ אי דראכ יד רכא יד רכא חדאר ח דדכדקכדק דרדרעדרעגרעדרע דרעדרעדרעד גכע ג ע דג ע דג יד גאי דכג אי ד  כ י  עקבלה בלה בל הבלה ב גכנ כא כא ארכאי א י ",
//         images: [
//             "https://www.weekend-family.co.il/images/customerimages/26268/gallery/image_26268_ea911003feba40e5bc6917c55bee5aaf.jpg?w=700&h=400&mode=crop",
//             "https://www.weekend-family.co.il/images/customerimages/26268/gallery/image_26268_ea911003feba40e5bc6917c55bee5aaf.jpg?w=700&h=400&mode=crop"
//         ]
//     },
//     {
//         id: 3,
//         owner: {
//             name: "תמיר",
//             phone: 5211223344,
//             plan: 2,
//             //0=רגיל אפור
//             //1=מודגש וורוד
//             //2=vip צהוב
//         },
//         type: "השכרה",
//         location: {
//             city: "פתח תקווה",
//             street: "דגל ראובן",
//             number: 60,
//             neighborhood: "כפר גנים"
//         },
//         propertyType: {
//             type: "דירות",
//             subType: "גג/פנטהאוז"
//         },
//         propertyInfo: {
//             rooms: 3,
//             floor: 7,
//             building_floor: 10,
//             price: 40005000,
//             size: 180,
//             state: "חדש מקבלן",
//             //חדש מקבלן\חדש\משופץ\במצב שמור\דרוש שיפוץ
//             entryDate: "1/21/20",
//             parking: 0, //  0/1/2/3
//             balcony: 1, //  0/1/2/3
//         },
//         propertyFeatures: ["מיזוג אוויר", "מטבח כשר", "מעלית"],
//         //מיזוג,ממ"ד,מחסן,דלתות פנדור
//         //ריהוט,גישה לנכים,מעלית,מזגן תדיראו
//         //משופצת,מטבח כשר,דוד שמש,סורגים
//         description:
//             "דירה מושקעת מאוד לאחר שיפוץ מלא הכולל: ריצוף 60×60,מקלחת מאובזרת ומערכת עיסוי,שרותים כפולים,,מטבח מאובזר רגבה ,דלתות חמדיה , דלת פלדת עם מצלמה ומסך, תקשורת וחשמל פנים הדירה,חלונות ורשתות ורשת יונים,חדר שינה גדול 14 מר, מזגנים, סוככים, חזית, נוף פתוח צופה על שכונת וילות, מרפסונת גינה, צמוד לפרק עופר הכולל מתקנים לילדים ומתקני ספורט, בקרבת בתי ספר, גני ילדים, בתי כנסת קופת חולים, תחבורה ציבורית, ועוד"
//         ,
//         images: [
//             "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
//             "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg?crop=1.00xw:0.752xh;0,0.120xh&resize=1200:*",
//         ]
//     },
//     {
//         id: 4,
//         owner: {
//             name: "צביקה",
//             phone: 5211223344,
//             plan: 0,
//             //0=רגיל אפור
//             //1=מודגש וורוד
//             //2=vip צהוב
//         },
//         type: "השכרה",
//         location: {
//             city: "תל אביב",
//             street: "עזריאלי",
//             number: 13,
//             neighborhood: "דרך מנחם בגין"
//         },
//         propertyType: {
//             type: "דירות",
//             subType: "דירה"
//         },
//         propertyInfo: {
//             rooms: 4,
//             floor: 5,
//             building_floor: 10,
//             price: 10002000,
//             size: 160,
//             state: "חדש מקבלן",
//             //חדש מקבלן\חדש\משופץ\במצב שמור\דרוש שיפוץ
//             entryDate: "1/21/20",
//             parking: 3, //  0/1/2/3
//             balcony: 1, //  0/1/2/3
//         },
//         propertyFeatures: ["מיזוג אוויר", "מחסן", "מעלית"],
//         //מיזוג,ממ"ד,מחסן,דלתות פנדור
//         //ריהוט,גישה לנכים,מעלית,מזגן תדיראו
//         //משופצת,מטבח כשר,דוד שמש,סורגים
//         description:
//             "ללא תיווך. דירה למכירה בת 4 חדרים, כחדשה ברחוב חלמיש, רמת אלמוגי.שדרוגים רבים בדירה מעבר למפרט הרגיל של קבלן. דירה על שטח של 109 מטר ובנוסף מרפסת 10 מטר עם נוף ירוק פתוח ,עד ראש הנקרה. יש חניה פרטית, מחסן גדול, מזגן מרכזי. תאריך כניסה גמיש. מתווכים נא לא להתקשר"
//         ,
//         images: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jt_t5wJ0gCQtR-DkbdSuFCbFKQH2yFaEUA&usqp=CAU",
//             "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         ]
//     }
//     ,
//     {
//         id: 5,
//         owner: {
//             name: "תמיר",
//             phone: 5211223344,
//             plan: 2,
//             //0=רגיל אפור
//             //1=מודגש וורוד
//             //2=vip צהוב
//         },
//         type: "השכרה",
//         location: {
//             city: "ירושלים",
//             street: "דוד המלך",
//             number: 90,
//             neighborhood: "רחביה"
//         },
//         propertyType: {
//             type: "בתים",
//             subType: "דו משפחתי"
//         },
//         propertyInfo: {
//             rooms: 5,
//             floor: 3,
//             building_floor: 10,
//             price: 20005000,
//             size: 140,
//             state: "חדש מקבלן",
//             //חדש מקבלן\חדש\משופץ\במצב שמור\דרוש שיפוץ
//             entryDate: "1/21/20",
//             parking: 0, //  0/1/2/3
//             balcony: 3, //  0/1/2/3
//         },
//         propertyFeatures: ["מיזוג אוויר", "מטבח כשר", "מעלית"],
//         //מיזוג,ממ"ד,מחסן,דלתות פנדור
//         //ריהוט,גישה לנכים,מעלית,מזגן תדיראו
//         //משופצת,מטבח כשר,דוד שמש,סורגים
//         description: "בלה בלה בל הבלה ב גכנ כא כא ארכאי א י ",
//         // description:
//         //     "דירה מושקעת מאוד לאחר שיפוץ מלא הכולל: ריצוף 60×60,מקלחת מאובזרת ומערכת עיסוי,שרותים כפולים,,מטבח מאובזר רגבה ,דלתות חמדיה , דלת פלדת עם מצלמה ומסך, תקשורת וחשמל פנים הדירה,חלונות ורשתות ורשת יונים,חדר שינה גדול 14 מר, מזגנים, סוככים, חזית, נוף פתוח צופה על שכונת וילות, מרפסונת גינה, צמוד לפרק עופר הכולל מתקנים לילדים ומתקני ספורט, בקרבת בתי ספר, גני ילדים, בתי כנסת קופת חולים, תחבורה ציבורית, ועוד"
//         // ,
//         images: [
//             "https://www.weekend-family.co.il/images/customerimages/26268/gallery/image_26268_ea911003feba40e5bc6917c55bee5aaf.jpg?w=700&h=400&mode=crop",
//             "https://www.weekend-family.co.il/images/customerimages/26268/gallery/image_26268_ea911003feba40e5bc6917c55bee5aaf.jpg?w=700&h=400&mode=crop"
//         ]
//     }
//     ,
//     {
//         id: 6,
//         owner: {
//             name: "ירון",
//             phone: 5211223344,
//             plan: 2,
//             //0=רגיל אפור
//             //1=מודגש וורוד
//             //2=vip צהוב
//         },
//         type: "השכרה",
//         location: {
//             city: "הרצליה",
//             street: "הוברמן",
//             number: 90,
//             neighborhood: "פיתוח"
//         },
//         propertyType: {
//             type: "סוגים נוספים",
//             subType: "מחסן"
//         },
//         propertyInfo: {
//             rooms: 5,
//             floor: 3,
//             building_floor: 10,
//             price: 20005000,
//             size: 140,
//             state: "חדש מקבלן",
//             //חדש מקבלן\חדש\משופץ\במצב שמור\דרוש שיפוץ
//             entryDate: "1/21/20",
//             parking: 0, //  0/1/2/3
//             balcony: 3, //  0/1/2/3
//         },
//         propertyFeatures: ["מיזוג אוויר", "מטבח כשר", "מעלית"],
//         //מיזוג,ממ"ד,מחסן,דלתות פנדור
//         //ריהוט,גישה לנכים,מעלית,מזגן תדיראו
//         //משופצת,מטבח כשר,דוד שמש,סורגים
//         description: "בלה בלה בל הבלה ב גכנ כא כא ארכאי א י ",
//         // description:
//         //     "דירה מושקעת מאוד לאחר שיפוץ מלא הכולל: ריצוף 60×60,מקלחת מאובזרת ומערכת עיסוי,שרותים כפולים,,מטבח מאובזר רגבה ,דלתות חמדיה , דלת פלדת עם מצלמה ומסך, תקשורת וחשמל פנים הדירה,חלונות ורשתות ורשת יונים,חדר שינה גדול 14 מר, מזגנים, סוככים, חזית, נוף פתוח צופה על שכונת וילות, מרפסונת גינה, צמוד לפרק עופר הכולל מתקנים לילדים ומתקני ספורט, בקרבת בתי ספר, גני ילדים, בתי כנסת קופת חולים, תחבורה ציבורית, ועוד"
//         // ,
//         images: [
//             "https://www.weekend-family.co.il/images/customerimages/26268/gallery/image_26268_ea911003feba40e5bc6917c55bee5aaf.jpg?w=700&h=400&mode=crop",
//             "https://www.weekend-family.co.il/images/customerimages/26268/gallery/image_26268_ea911003feba40e5bc6917c55bee5aaf.jpg?w=700&h=400&mode=crop"
//         ]
//     }
// ]
export const initialApartmentState = []
const apartmentsReducer = (apartments, action) => {
    switch (action.type) {
        case "SET_APPARTEMENT":
            console.log("setting new")
            return apartments.concat(action.apartments)
        // return [...action.apartments]
        case "ADD_APARTMENT":
            return apartments.concat(action.apartment)
        default:
            return [...apartments]
    }
}

export default apartmentsReducer
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wheat, 
  Hand, 
  Heart, 
  Sprout, 
  Coins, 
  ArrowLeft, 
  ChevronDown,
  Info,
  ExternalLink
} from 'lucide-react';
import { useState, useEffect } from 'react';

import { CONFIG } from './config';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const PAYBOX_LINK = "https://payboxapp.page.link/fundraising"; // Placeholder for the actual link

export default function App() {
  // All images for the gallery from config
  const galleryImages = CONFIG.GALLERY;

  // Full Yiftach Text Segments - EXACTLY AS PROVIDED, with images mapped from config
  const yiftachSegments = [
    {
      title: "מעבר להווה. מזרע ללחם.",
      content: [
        "חיטות מורשת הן חיטות שעברו מאב לבן משך דורות, חיטות שהיו הבסיס התזונתי והקיומי. מותאמות לאזור ואתגריו. כל טיפוס חיטה ותכונותיו, עיצב את המסורת הקולינרית היחודית של מגדליו. מקום חיטה אדם היוו רצף פיזי אחד יחודי.",
        "חיטות המורשת הן בעלות עמידות טבעית גבוהה לתנאי סביבה ומזיקים. בעלות ערכים בריאותים ותזונתיים המתבטאים בעושר של ויטמינים מינרלים, נוגדי חמצון וכו' העמילנים בעלי ערך גליקמי נמוך ורמת החלבון גבוהה בחלקן כמו עדשים!",
        "למרות רמת החלבון הגבוהה, תכולת הגלוטן נמוכה ומבנה הגלוטן בחיטות אלו שונה, פשוט יותר. צורה זו של הגלוטן מוכרת למערכת העיכול שלנו דורות רבים ומתפרקת ונספגת בגוף בקלות נעימה. הגלוטן המועט והפשוט, יוצר לחמים בעלי מרקם דחוס וכיכרות שטוחים",
        "קמחי המורשת מצטיינים בגוון בצבעים, בטעמים ובמרקמים. עולם מופלא נפלא, עולם שהיה פה תמיד ולא ידענו על קיומו. לכל זן חיטת מורשת טעם יחודי משלו. מופלא קסום ומרתק. קמחים בטעמים, או קמחים פונקציונליים, זה לא פיתוח עתידי, זה גילוי העבר השורשים"
      ],
      imageUrl: CONFIG.IMAGES.SEGMENT_0
    },
    {
      title: "התעוררות הזרעים",
      content: [
        "בזמננו המקור לזרעי מורשת אלו אוספים בוטניים וגנטיים. חלקן נקברו בפריזר במשך עשורים. וחלקן לא גודלו לשימוש עשרות שנים. אין אפשרות להזמין מחברת זרעים זרעים לשדה, כמו בגידול רגיל. כל זן אותו אני מגדל, החל בחופן קטן של זרעים אותו גידלתי והגדלתי בהדרגה לחלקות שדה קטנות ומניבות.",
        "משך התהליך מקבלת זן חיטת מורשת \"חדשה\" (שגם זה לא תמיד דבר פשוט להשגה) ועד שאפשר לטעום ממנה כיכר, להכיר מעט בכדי להעריך יכול להמשך 3-6 שנים ושנה עד שנתיים נוספות עד שהחיטה יכולה להגיע למאפיה ולפחות עוד שנה אחת נוספת להגיע אל מדף הקמחים שאני מציע למכירה.",
        "זרעי המורשת המתעוררים לחיים מתעוררים לעולם שונה מאוד מהעולם בו צמחו ושגשגו הוריהן. האדמה, האוויר, הגשם, מזיקים שהגיעו עם גידולים חדשים, מחלות וחרקים שהתחסנו משך דורות בפני חומרי הדברה מתחזקים והולכים. חלקן מתעוררות בסביבה שונה ממנה באו (גם חיטות מורשת מקומיות מקורן עשוי להיות מצפון סוריה או מזרח ירדן). מתוך הזרעים שהתעוררו לחיים, יש לברור את אלו שהצליחו לעבור את מכשולי הזמן והמקום ולשגשג."
      ],
      imageUrl: CONFIG.IMAGES.SEGMENT_1
    },
    {
      title: "הפוטנציאל והאדמה",
      content: [
        "לחיטות המורשת, יש את הפוטנציאל להיות מזון על אולטימתיבי. לא די בהשגת זרעים כאלו וליצור כמות מספקת לגידול על מנת להבטיח שפוטנציאל זה אכן יתממש. על מנת שביבול החיטה יהיה עושר של חומרי מזון, יסודות אלו חייבים להימצא בקרקע, בכמות, מבנה וזמינות מתאימים.",
        "אך גם המצאותם אינה מספקת, שכן אם לא ימצאו עבורם המיקרואורגניזמים המתווכים, כמו גם בגופנו אנו, לא יוכלו להיספג אל גופו של הצמח להזינו ולהזיננו. עם התפתחות השדה החלה לצמוח ולהתפתח שיטת הגידול בהיו ויטלי.",
        "שיטה המבוססת על מסורות חקלאיות ישנות וידע, כלים ותובנות חדשות. חלקת השדה והחיטות המגודלות בה מקבלים טיפולים חוזרים, מהכנות השדה לקראת זריעה, בזריעה ובמהלך עונת הגידול. הטיפולים מבוססים תכשירים מצמחי מרפא ומיצוים, התנסות פרוביוטיות, הומאופתיה, מינרלים טבעיים ותכשירים ביו דינמים. כל אלו על מנת לתמוך בצמיחה, באדמה ובחיותה, ליצירת מארג חיים רציף וחיוני, מגוון ועשיר."
      ],
      imageUrl: CONFIG.IMAGES.SEGMENT_2
    },
    {
      title: "מסע הדיוק",
      content: [
        "כאשר נבחר זן לטיפוח לשימוש (אחרי 3-2 שנות גידול ראשוני והכרות שדה) מחל מסע של \"דיוק\" הזרע. הכפריים, בזמנו, בכל מקום, אכלו את מה שהיה להם, כי ברירה לא היתה להם... אמצעי הדיש והניקוי שהיו להם, היו כפי שהיו וכך עוצב רף ההרגלים שלהם לגבי חומר הגלם והרגלי השימוש והאכילה. אנחנו כבר נולדנו לעולם אחר, רגילים למבחר ולשפע ורף האיכות שלנו גבוה מאוד.",
        "בכדי לעמוד ברף זה, מתוך החיטות שהצליחו לשגשג יש לבחור ידנית את השיבולים הגדולות והזקופות, אלו שהראו עמידות וחוסן, מתוכן את הזרעים הגדולים שמתקלפים היטב ללא שאריות גלומה. חיטות שיכולות לשגשג כאן ועכשיו וליצור מזון אולטימטיבי ולעמוד ברף הגבוה ביותר של סטנדרטים סביבתיים, בריאותיים וקולינרים של קהל מנוסה ומודע מאוד.",
        "חיטות מורשת מעסיקות כיום אנשים רבים מתחומים שונים אקולוגיה, בוטניקה, חקלאות, מזון מחקרים העוסקים בעמידות ושרידות. כל אלו מצביעים על חשיבותה ועוצמתה של החיטה"
      ],
      imageUrl: CONFIG.IMAGES.SEGMENT_3
    },
    {
      title: "שלמות התהליך",
      content: [
        "האיכות היחודית והנדירה שנוצרת היא פרי השלמות הרציפה והקוהורנטית של התהליך מסביבת הגידול כל הדרך אל הכיכר המושלם. מברירת הזנים דרך טיפוח הזרעים מהזנים שנבחרו כבר בשלב מוקדם זה מתוך התכוונות לכיכר הסופי. ברירה מתוך מודעות מכוונת. הכנת השדה לקבלת הגידול. הכנה של חומרי הטיפול לשדה למשך העונה. הטיפולים שהשדה מקבל עוד טרם זריעה ולאורך עונת הגידול המשפרים את עמידות הצמחים ושגשוגם ואיכויות שאינן מעורכות במערכות התגמול החקלאי /מסחרי כמו ערכים תזונתיים גבוהים במנעד עשיר... קציר סלקטיבי ומובחן המאפשר הפרדה וניקיון בין זנים שונים. ואז- ניקוי, אריזה, אכסון, מיון זרעים לזריעה. הזרעים נשמרים בקרוב ובכול פעם נטחנת נגלה טריים של קמחים לשימוש. וסופו של התהליך באפיה היחודית המורכבת ממגוון מרגש של חיטות שונות המציגות את האיכויות היחודית שלהן",
        "בתהליך ממושך ומורכב כל כך נוצרות בעיות וקשיים בכל שלב ותמיד יש הפתעות ואתגרים. הודות לאחידות התהליך הרציף, ההתייחסות וההתמודדות הן כאלו המשרתות את התהליך כולו ותובנות מכל שלב יכולות לקבל מענה משורש הקושי, כמו שבעיה המתגלה בקמח, יכולה לקבל מענה כבר משלב ברירת הזרעים לעתיד"
      ],
      imageUrl: CONFIG.IMAGES.SEGMENT_4
    },
    {
      title: "טעם השדה",
      content: [
        "אחרי שנים רבות של אפיה בקמחים מסחריים, האיכותיים ביותר שניתן למצוא, עם המעבר לקמחים מחיטות המורשת שאני מגדל, נגלתה לי אמת ידועה וברורה מאליה. אמת שנשכחה מכולנו, לא רק שלחיטות יש טעם! אלא שלשדה יש טעם, יש טרואר יחודי לכל חלקה, לכל שנת גידול. כל כך מובן מאיליו, כל כך ברור, אך המוצר הכי יומיומי שלנו, שעשוי מתערובת חיטות מארצות ואזורי גידול שונים ערוב שדות ומינים, איכויות אלו נבלעות ומטושטשות לכדי אחידות גנרית צפויה וחסרת identity. מעולם לא נתנה לנו ההזדמנות לפגוש טעם של שדה לטעום זהות של מקום.",
        "לשדה יש טעם, לשנה יש טעם. את הטעם הזה הגוף מזהה ומכיר, כל תא מזהה ומוכיר. זה הטעם לכל ההשתדלות הזו. אחרי שנים שהשדה ועבודת השדה הושקעו כולן בפיתוח ויצירת מלאי זרעים מותאמים כעת מתחיל להתייצב היחס בין החלק המגודל לשימוש לחלק המיועד לטיפוח איקלום ויצירת זרעים. בשלב זה עדין לפחות 40% משטח הגידול משמש לפיתוח האיכויות של החיטות אותן אנו כבר אוכלים וחיטות חדשות בשלבים שונים של ברירה, טיפוח וריבוי. תצפו להפתעות מדהימות בשנים הקרובות, לאט לאט...😉"
      ],
      imageUrl: null // Gallery follows this
    },
    {
      title: "החוליה המקשרת",
      content: [
        "מאוד נדיר בעידן שלנו להיות יכולים להגיע למוצר מזון שהוא פרי של תהליך שלם ואחיד שיש מי שמלווה אותו מההתחלה אל הסוף. מזון שהוא רצף פיזי ממשי מהאדמה לשולחן ללא כל תיווך.",
        "תהליך גילוי וטיפוח איכויות הוא אומנות והפוך במהותו לתהליכים תעשייתיים של צמצום, יעול ומיקוד. איכות מתפתחת מתשומת לב והשקעה בגיוון וביופי. זה לא הכרחי, לא קיומי. אבל אם לא נדאג לקיים את האיכויות האלו נמצא עצמנו חיים במדבר חומרי ותרבותי של מוצרי צריכה ירודים חסרי טעם וערך שנבדלים זה מזה רק באריזה. אם אנחנו רוצים שהאיכויות האלו יתקיימו, שנוכל להנות מהן, לא מספיקה הערכתנו לעשיה, אלא צריך לתמוך בהן על מנת שיתקימו. זו החוליה"
      ],
      imageUrl: CONFIG.IMAGES.SEGMENT_6
    }
  ];

  const [scrolled, setScrolled] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const nextImage = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-nature-500 selection:text-white overflow-x-hidden bg-base-bg">
      {/* Navigation (Sticky CTA) */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 ${scrolled ? 'glass py-2' : ''}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wheat className="text-nature-600 h-6 w-6" />
            <span className="font-display font-bold text-earth-800 text-lg hidden sm:block">השדה בהרדוף</span>
          </div>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={PAYBOX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nature-600 text-white px-5 py-2 rounded-full font-display font-bold text-sm shadow-lg shadow-nature-600/20 flex items-center gap-2"
          >
            אני רוצה לתמוך
            <ArrowLeft className="h-4 w-4" />
          </motion.a>
        </div>
      </nav>

      {/* Frame 1: Hero / The Hook */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-earth-900">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CONFIG.IMAGES.HERO_BG} 
            alt="Hero background - Heritage wheat field" 
            className="w-full h-full object-cover opacity-60 scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?auto=format&fit=crop&q=80&w=2000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight text-balance">
              {CONFIG.TEXTS.HERO_TITLE}
            </h1>
            <p className="text-lg md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed text-balance">
              {CONFIG.TEXTS.HERO_DESCRIPTION}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CONFIG.PAYBOX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-nature-600 hover:bg-nature-500 text-white px-10 py-5 rounded-full font-display font-black text-xl shadow-2xl transition-all"
              >
                אני רוצה לתמוך בשדה
              </motion.a>
              <button 
                onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/80 hover:text-white flex items-center gap-2 py-3 px-6 transition-colors"
              >
                לצפות בסרטון
                <ChevronDown className="animate-bounce h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-24 px-6 bg-base-200">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-black text-earth-900 mb-4 italic">הסיפור של השדה</h2>
            <p className="text-earth-700 max-w-xl mx-auto">צפו ב-30 שניות של חיבור בין אדם, זרע ואדמה בשדה שבהרדוף.</p>
          </motion.div>
          
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-white">
            <img 
              src={CONFIG.IMAGES.YIFTACH_PROFILE} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Video thumbnail"
            />
            <div className="absolute inset-0 bg-earth-900/30 flex items-center justify-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={CONFIG.VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-24 w-24 bg-nature-600 text-white rounded-full flex items-center justify-center shadow-2xl relative z-10"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent mr-[-4px]" />
              </motion.a>
              <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 to-transparent" />
              <div className="absolute bottom-8 right-8 text-white">
                <p className="font-display font-bold text-xl uppercase tracking-tighter">צפו בסרטון המיוחד</p>
                <p className="text-sm opacity-80 italic">״לשדה יש טעם״</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Narrative Story */}
      <section id="narrative" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-32">
          {yiftachSegments.map((segment, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
               {/* Numerical indicator */}
               <div className="absolute -right-12 top-0 text-[10rem] font-display font-black text-base-200 pointer-events-none select-none opacity-50 z-0 hidden md:block">
                 0{idx + 1}
               </div>

               <div className="relative z-10">
                 <h2 className="font-display text-3xl md:text-5xl font-black text-earth-900 mb-10 border-r-8 border-nature-600 pr-6">
                   {segment.title}
                 </h2>
                 <div className="space-y-8 mb-16">
                   {segment.content.map((p, pIdx) => (
                     <p key={pIdx} className="text-xl md:text-2xl text-earth-800/90 font-light leading-relaxed text-balance">
                       {p}
                     </p>
                   ))}
                 </div>

                  {/* Integrated Image from imageUrl property if it exists */}
                  {segment.imageUrl ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="rounded-[3rem] overflow-hidden shadow-xl aspect-video border-4 border-base-200 mt-12 bg-base-200"
                    >
                      <img 
                        src={segment.imageUrl} 
                        alt={segment.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?auto=format&fit=crop&q=80&w=800&q=50&text=${encodeURIComponent(segment.title)}`;
                        }}
                      />
                    </motion.div>
                  ) : idx === 5 ? (
                    <div className="mt-8 text-center bg-nature-50 p-8 rounded-3xl border-2 border-dashed border-nature-200">
                      <p className="text-nature-700 italic font-medium">הגלריה מציגה את רגעי הקסם של טעם השדה...</p>
                    </div>
                  ) : null}
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Carousel */}
      <section className="py-24 px-6 bg-earth-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-black text-white mb-4">אלבום מהשדה</h2>
            <p className="text-white/60">רגעים של טבע, אדמה ועשייה</p>
          </div>

          <div className="relative group">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGalleryIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={galleryImages[currentGalleryIndex].url}
                    alt={galleryImages[currentGalleryIndex].title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&q=80&w=1200&text=${encodeURIComponent(galleryImages[currentGalleryIndex].title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 right-10 text-white">
                    <p className="font-display font-bold text-2xl">{galleryImages[currentGalleryIndex].title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white text-white hover:text-earth-900 rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20"
            >
              <ArrowLeft className="h-6 w-6 rotate-180" />
            </button>
            <button
              onClick={nextImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/10 hover:bg-white text-white hover:text-earth-900 rounded-full flex items-center justify-center backdrop-blur-md transition-all z-20"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentGalleryIndex(idx)}
                  className={`h-2 rounded-full transition-all ${currentGalleryIndex === idx ? 'w-8 bg-wheat-500' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={CONFIG.ALBUM_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-wheat-500 hover:text-white transition-colors"
            >
              צפו בכל התמונות באלבום המלא
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA / The Need */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* The Need Stats - integrated here briefly */}
            <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
               <div className="bg-base-200 p-6 rounded-3xl border border-base-300">
                 <p className="text-earth-700 text-sm mb-1 opacity-70">אחזקה שנתית</p>
                 <p className="font-mono font-bold text-earth-900 text-xl">₪60,000</p>
               </div>
               <div className="bg-base-200 p-6 rounded-3xl border border-base-300">
                 <p className="text-earth-700 text-sm mb-1 opacity-70">קומביין</p>
                 <p className="font-mono font-bold text-earth-900 text-xl">₪35,000</p>
               </div>
               <div className="bg-base-200 p-6 rounded-3xl border border-base-300">
                 <p className="text-earth-700 text-sm mb-1 opacity-70">שטח פיתוח</p>
                 <p className="font-mono font-bold text-earth-900 text-xl">40% מהשדה</p>
               </div>
            </div>

            <div className="mb-12 relative inline-block group">
              <div className="absolute inset-0 bg-nature-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <img 
                src={CONFIG.IMAGES.YIFTACH_PROFILE} 
                alt="Yiftach Barakat in the field" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-2xl relative z-10 mx-auto"
              />
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl font-black text-earth-900 mb-8 [text-shadow:_0_4px_12px_rgba(0,0,0,0.1)]">
              להחזיר את טעם השדה לאדמה.
            </h2>

            <div className="mb-8 text-earth-700/80 bg-base-200 p-4 rounded-2xl max-w-lg mx-auto text-sm italic">
               התמונות והסרטון מוצגים כרגע בקישורים חיצוניים. <br />
               <a href={CONFIG.VIDEO_URL} target="_blank" rel="noreferrer" className="text-nature-600 underline font-bold">צפו בסרטון באלבום התמונות</a> | <a href={CONFIG.ALBUM_URL} target="_blank" rel="noreferrer" className="text-nature-600 underline font-bold">צפו באלבום המלא</a>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CONFIG.PAYBOX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-nature-600 hover:bg-nature-500 text-white px-12 py-6 rounded-full font-display font-black text-2xl shadow-2xl shadow-nature-600/30 transition-all w-full max-w-md"
            >
              לתרומה מאובטחת בפייבוקס
              <ExternalLink className="h-6 w-6" />
            </motion.a>
            
            <p className="mt-8 text-earth-700/60 font-medium">
              תודה על התמיכה בלב האדמה.
            </p>
          </motion.div>
        </div>
        
        {/* Subtle wheat decorative elements */}
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none -translate-x-10 translate-y-10 group">
          <Wheat className="h-64 w-64 text-wheat-500" />
        </div>
        <div className="absolute top-20 left-0 opacity-10 pointer-events-none translate-x-10 -translate-y-10 group">
          <Wheat className="h-48 w-48 text-wheat-500 rotate-180" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-earth-900/10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Wheat className="text-nature-600 h-8 w-8" />
            <div className="text-right">
              <p className="font-display font-bold text-earth-900">השדה בהרדוף</p>
              <p className="text-sm text-earth-700">פרויקט שימור חיטות מורשת</p>
            </div>
          </div>
          
          <div className="flex gap-6">
             <a href="#" className="text-earth-700 hover:text-earth-900 transition-colors py-2">אודות הרדוף</a>
             <a href="#" className="text-earth-700 hover:text-earth-900 transition-colors py-2">יצירת קשר</a>
          </div>

          <div className="text-xs text-earth-700/40 font-mono">
            &copy; 2026 יפתח ברקת (יפתח לחם). כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}

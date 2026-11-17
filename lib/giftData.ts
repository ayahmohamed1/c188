// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Happy Birthday to the man who holds such a special place in my heart.
I wish I could put into words how much you mean to me, but sometimes words are simply not enough to describe what the heart feels.
You are more than just someone I love. You are the person I want to share my happiest moments with, the one I want beside me through every challenge, and the one I wish to keep choosing, every single day.
I hope life gives you all the happiness you deserve, all the success you've dreamed of, and all the beautiful things your heart has ever wished for.
If I could make one wish for us, it would be to create a lifetime of memories together, to grow together, to overcome everything together, and to never stop finding reasons to smile beside each other.
Thank you for being you, for being a beautiful part of my life, and for giving my heart someone so special to love.
No matter how many birthdays come and go, I hope I get to celebrate every single one of them by your side.
I love you more than words could ever say.
Forever my favorite person. ❤️
انتِ عمــــــريِ❤️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;
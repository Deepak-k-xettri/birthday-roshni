/*
 * ============================================================================
 * PERSONALIZATION GUIDE — ROSHNI'S 18TH BIRTHDAY SCRAPBOOK
 * ============================================================================
 * Edit ANY text, Nepali wish, poem, reason, or media filename below.
 *
 * HOW TO ADD YOUR OWN PHOTOS & MUSIC:
 * 1. Photos: Place your images inside `public/images/` as:
 *      portrait.jpg, photo1.jpg ... photo7.jpg
 *    (Photos display purely in scrapbook & Polaroid frames without captions.)
 * 2. Music:  Place your song inside `public/music/birthday-music.mp3`
 *    (If no MP3 is uploaded yet, the player plays a built-in soft romantic
 *     piano & music-box instrumental automatically.)
 * ============================================================================
 */

export type StickerKind =
  | 'heart'
  | 'bow'
  | 'butterfly'
  | 'flower'
  | 'daisy'
  | 'teddy'
  | 'star'
  | 'letter'
  | 'cloud'
  | 'cake'
  | 'doodle'
  | 'gift'
  | 'balloons';

export interface PhotoMemory {
  id: string;
  src: string;
  fallbackSrc?: string;
  fallbackPalette: 'pink' | 'lavender' | 'peach' | 'cream' | 'blue';
  fallbackMotif: StickerKind;
  alt: string;
  category: 'Moments' | 'Sunsets' | 'Celebrations';
  frameStyle: 'polaroid' | 'rounded' | 'scrapbook';
  tapeStyle: 'pink' | 'blue' | 'lavender' | 'peach';
  tiltDeg: number;
}

export interface PoemEntry {
  id: string;
  title: string;
  nepaliSubtitle?: string;
  lines: string[];
  isNepali?: boolean;
  footnote: string;
  layout: 'featured' | 'stanza' | 'note';
}

export interface ReasonCard {
  number: number;
  title: string;
  message: string;
  sticker: StickerKind;
  tint: 'pink' | 'lavender' | 'peach' | 'cream' | 'blue';
}

export interface SurpriseBoxItem {
  id: string;
  hint: string;
  label: string;
  kind: 'Birthday Wish' | 'Nepali Note' | 'Sweet Note' | 'Little Envelope';
  title: string;
  message: string;
  sticker: StickerKind;
  tint: 'pink' | 'blue' | 'lavender' | 'peach';
}

export interface StoryChapter {
  id: string;
  badge: string;
  title: string;
  text: string;
  sticker: StickerKind;
  tint: 'pink' | 'lavender' | 'peach';
}

export interface BirthdayConfig {
  recipientName: string;
  birthdayDate: string;
  brandTitle: string;
  intro: {
    eyebrow: string;
    nepaliGreeting: string;
    headline: string;
    subtext: string;
    buttonLabel: string;
    revealTitle: string;
    revealMessage: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
    nepaliGreeting: string;
    supportingText: string;
    portraitSrc: string;
    portraitFallback: string;
  };
  ourStory: {
    sectionTitle: string;
    sectionSubtitle: string;
    mainParagraphs: string[];
    chapters: StoryChapter[];
    floatingNotes: string[];
  };
  loveLetter: {
    sectionTitle: string;
    sectionSubtitle: string;
    dateLabel: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };
  poems: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: PoemEntry[];
    shortLoveNotes: string[];
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    photos: PhotoMemory[];
  };
  reasons: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ReasonCard[];
  };
  surprises: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: SurpriseBoxItem[];
  };
  celebration: {
    number: string;
    eyebrow: string;
    idleHeadline: string;
    buttonLabel: string;
    revealHeadline: string;
    nepaliWish: string;
    wishText: string;
  };
  music: {
    audioSrc: string;
    trackTitle: string;
  };
  sweetLoveNotes: string[];
  finalWish: {
    eyebrow: string;
    nepaliBlessing: string;
    headline: string;
    salutation: string;
    paragraphs: string[];
    signOff: string;
    replayLabel: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  recipientName: 'Roshni',
  birthdayDate: '18th Birthday',
  brandTitle: 'For Roshni ♡',

  intro: {
    eyebrow: 'Made Just For You, Roshni',
    nepaliGreeting: 'रोश्नी, तिमी सधैँ मुस्कुराइरहनू है ♡',
    headline: 'My favourite person just turned 18...',
    subtext: 'Tap the heart seal to open the little birthday scrapbook I made for you, Roshni.',
    buttonLabel: 'Open Your Surprise, Roshni 💗',
    revealTitle: 'Happy 18th Birthday, Roshni! ♡',
    revealMessage:
      'आजको दिन तिम्रो हो, त्यसैले आज धेरैभन्दा धेरै मुस्कुराउनू। Made with lots of love, just for you.',
  },

  hero: {
    kicker: 'Class 10 देखि Class 12 सम्मको हाम्रो सानो र प्यारो यात्रा ♡',
    headline: 'Happy 18th Birthday, Roshni! ♡',
    subtitle: 'To my favourite person, my Roshni. 🌷',
    nepaliGreeting: 'रोश्नी, तिमी सधैँ यसरी नै मुस्कुराइरहनू है। ❤️',
    supportingText:
      'You make even normal days feel special, and I hope you smile a little extra today. I made every part of this little scrapbook just to celebrate you.',
    portraitSrc: '/images/portrait.jpg',
    portraitFallback: '/src/assets/images/hero_birthday_portrait_1794833742876.jpg',
  },

  ourStory: {
    sectionTitle: 'Our Little Story (Class 10 → Class 12)',
    sectionSubtitle: 'From how we started back in Class 10 to right here in the middle of Class 12.',
    mainParagraphs: [
      "From those Class 10 days to where we are now in Class 12, look how far we've come. There have been so many little moments, silly conversations, smiles, and memories that I never want to forget.",
      "हाम्रो सानो यात्राका अझै धेरै सुन्दर सम्झनाहरू बन्न बाँकी छन्। And honestly, I'm really happy that you're a part of my story, Roshni. ♡",
    ],
    chapters: [
      {
        id: 'class-10',
        badge: 'Class 10',
        title: 'Where We Started',
        text: 'Back in Class 10 when everything started—I did not know then just how important you were going to become to me.',
        sticker: 'flower',
        tint: 'pink',
      },
      {
        id: 'in-between',
        badge: 'Every Day',
        title: 'Little Moments & Talks',
        text: 'All the silly conversations, laughs, small texts, and ordinary days that somehow became my favourite memories.',
        sticker: 'butterfly',
        tint: 'lavender',
      },
      {
        id: 'class-12',
        badge: 'Class 12 · Now',
        title: 'Turning 18 Together',
        text: 'Now we are right in the middle of Class 12, and you are still the person I smile at my phone for. Still my favourite person, Roshni.',
        sticker: 'heart',
        tint: 'peach',
      },
    ],
    floatingNotes: [
      "You're honestly my favourite notification.",
      'You make even normal days feel special.',
      "Just a little reminder that you're really important to me.",
      "I'm really lucky to have you in my life.",
    ],
  },

  loveLetter: {
    sectionTitle: 'A Little Letter For You, Roshni',
    sectionSubtitle: 'Tap the envelope to unfold a simple note from my heart.',
    dateLabel: 'Class 10 → Class 12 · 18th Birthday',
    salutation: 'मेरो प्यारो Roshni,',
    paragraphs: [
      'Happy 18th Birthday! आजको दिन तिम्रो हो, त्यसैले आज धेरैभन्दा धेरै मुस्कुराउनू।',
      "You're honestly my favourite notification. No matter how boring or tiring a normal day is, just talking to you or seeing you smile makes everything feel lighter and better.",
      'तिमी मेरो जीवनको एउटा धेरै प्यारो हिस्सा हौ। तिम्रो खुसी मेरो लागि धेरै महत्त्वपूर्ण छ। Being with you since Class 10 and growing through Class 12 together has given me so many small memories I genuinely treasure.',
      "Never stop being the cute, funny, and wonderful person you are. I hope this year gives you everything you've been wishing for—good days, big laughs, and all your dreams coming true.",
    ],
    closing: 'सधैँ तिम्रै खुसी चाहने,',
    signature: 'Yours ♡',
  },

  poems: {
    sectionTitle: 'Little Poems For Roshni',
    sectionSubtitle: 'Sweet, simple Nepali and English lines written just for you.',
    items: [
      {
        id: 'poem-nepali-moments',
        title: 'साना-साना पलहरू',
        nepaliSubtitle: 'For my favourite person',
        isNepali: true,
        lines: [
          'कहिलेकाहीँ सोच्ने गर्छु,',
          'कति राम्रा हुन्छन् साना-साना पलहरू।',
          'अनि सम्झिन्छु तिमीलाई,',
          'जसले ती पलहरूलाई अझै प्यारो बनाउँछ। ♡',
        ],
        footnote: 'For every ordinary day you make special',
        layout: 'featured',
      },
      {
        id: 'poem-roshni-light',
        title: 'मेरो प्यारो मान्छे',
        isNepali: true,
        lines: [
          'नाम तिम्रो रोश्नी,',
          'अनि मेरो दिनको सानो उज्यालो।',
          'सधैँ खुसी रहनू है,',
          'मेरो प्यारो मान्छे। 🌷',
        ],
        footnote: 'तिमी सधैँ यसरी नै मुस्कुराइरहनू है',
        layout: 'stanza',
      },
      {
        id: 'poem-class-10-to-12',
        title: 'Since Class 10',
        lines: [
          "Maybe it's the way you laugh,",
          'or how one small message from you',
          'fixes a whole boring day.',
          'All I know is since Class 10,',
          'you have been my favourite part of every day. ♡',
        ],
        footnote: 'Simple feelings, honestly written',
        layout: 'stanza',
      },
    ],
    shortLoveNotes: [
      'I hope you smile a little extra today, Roshni. ❤️',
      'Your smile is one of my favourite things.',
      'तिम्रो खुसी मेरो लागि धेरै महत्त्वपूर्ण छ। 🌸',
      "Never stop being the cute, funny, and wonderful person you are.",
    ],
  },

  gallery: {
    sectionTitle: 'Our Little Photo Scrapbook',
    sectionSubtitle:
      'Tap any photograph to view it up close. Add your own pictures inside public/images/.',
    photos: [
      {
        id: 'photo-1',
        src: '/images/photo1.jpg',
        fallbackSrc: '/src/assets/images/memory_birthday_cake_1794833744599.jpg',
        fallbackPalette: 'pink',
        fallbackMotif: 'cake',
        alt: 'Roshni memory photograph 1',
        category: 'Celebrations',
        frameStyle: 'polaroid',
        tapeStyle: 'pink',
        tiltDeg: -1.6,
      },
      {
        id: 'photo-2',
        src: '/images/photo2.jpg',
        fallbackSrc: '/src/assets/images/memory_golden_hour_1794833744645.jpg',
        fallbackPalette: 'peach',
        fallbackMotif: 'daisy',
        alt: 'Roshni memory photograph 2',
        category: 'Moments',
        frameStyle: 'scrapbook',
        tapeStyle: 'peach',
        tiltDeg: 1.4,
      },
      {
        id: 'photo-3',
        src: '/images/photo3.jpg',
        fallbackSrc: '/src/assets/images/memory_sunset_walk_1794833743235.jpg',
        fallbackPalette: 'blue',
        fallbackMotif: 'butterfly',
        alt: 'Roshni memory photograph 3',
        category: 'Sunsets',
        frameStyle: 'polaroid',
        tapeStyle: 'blue',
        tiltDeg: 0,
      },
      {
        id: 'photo-4',
        src: '/images/photo4.jpg',
        fallbackSrc: '/src/assets/images/memory_sparkler_night_1794833745019.jpg',
        fallbackPalette: 'lavender',
        fallbackMotif: 'star',
        alt: 'Roshni memory photograph 4',
        category: 'Celebrations',
        frameStyle: 'polaroid',
        tapeStyle: 'lavender',
        tiltDeg: 1.7,
      },
      {
        id: 'photo-5',
        src: '/images/photo5.jpg',
        fallbackSrc: '/src/assets/images/hero_birthday_portrait_1794833742876.jpg',
        fallbackPalette: 'cream',
        fallbackMotif: 'letter',
        alt: 'Roshni memory photograph 5',
        category: 'Moments',
        frameStyle: 'scrapbook',
        tapeStyle: 'pink',
        tiltDeg: -1.3,
      },
      {
        id: 'photo-6',
        src: '/images/photo6.jpg',
        fallbackPalette: 'pink',
        fallbackMotif: 'teddy',
        alt: 'Roshni memory photograph 6',
        category: 'Moments',
        frameStyle: 'polaroid',
        tapeStyle: 'blue',
        tiltDeg: 1.2,
      },
      {
        id: 'photo-7',
        src: '/images/photo7.jpg',
        fallbackPalette: 'blue',
        fallbackMotif: 'cloud',
        alt: 'Roshni memory photograph 7',
        category: 'Sunsets',
        frameStyle: 'rounded',
        tapeStyle: 'lavender',
        tiltDeg: 0,
      },
    ],
  },

  reasons: {
    sectionTitle: '18 Little Reasons Why I Adore You, Roshni ♡',
    sectionSubtitle: 'Tap any scrapbook card to flip it open and read a small compliment.',
    items: [
      {
        number: 1,
        title: 'Your Beautiful Smile',
        message: 'Your smile is honestly one of my favourite things. When you smile, everything feels okay.',
        sticker: 'heart',
        tint: 'pink',
      },
      {
        number: 2,
        title: 'The Way You Laugh',
        message: 'Hearing you laugh properly always makes me smile too—even when I try to act cool.',
        sticker: 'daisy',
        tint: 'peach',
      },
      {
        number: 3,
        title: 'Your Kind Heart',
        message: 'You are genuinely sweet and caring to the people around you, and I really admire that about you.',
        sticker: 'flower',
        tint: 'cream',
      },
      {
        number: 4,
        title: 'My Favourite Notification',
        message: 'Every time my phone lights up with your name, my mood immediately gets better.',
        sticker: 'letter',
        tint: 'blue',
      },
      {
        number: 5,
        title: 'Your Cute Little Habits',
        message: 'All your tiny expressions and cute little habits make you so uniquely Roshni.',
        sticker: 'bow',
        tint: 'pink',
      },
      {
        number: 6,
        title: 'Your Cute Personality',
        message: 'You are funny, sweet, a little silly sometimes, and honestly just so easy to love.',
        sticker: 'butterfly',
        tint: 'lavender',
      },
      {
        number: 7,
        title: 'Your Dreams',
        message: 'I love hearing about your goals and dreams. I am always cheering for you to achieve every single one.',
        sticker: 'star',
        tint: 'peach',
      },
      {
        number: 8,
        title: 'You Make Me Smile',
        message: 'Even on boring or stressful days, you somehow find a way to make me smile.',
        sticker: 'teddy',
        tint: 'cream',
      },
      {
        number: 9,
        title: 'Having You In My Life',
        message: 'Just having you around makes normal days feel a whole lot nicer and brighter.',
        sticker: 'doodle',
        tint: 'blue',
      },
      {
        number: 10,
        title: 'Class 10 To Class 12',
        message: 'Growing from Class 10 to Class 12 with you by my side feels really special to me.',
        sticker: 'heart',
        tint: 'pink',
      },
      {
        number: 11,
        title: 'Silly Conversations',
        message: 'Even our random, pointless chats are my favourite part of the day.',
        sticker: 'cloud',
        tint: 'peach',
      },
      {
        number: 12,
        title: 'You Actually Listen',
        message: 'Thank you for always listening to whatever random things I tell you.',
        sticker: 'daisy',
        tint: 'cream',
      },
      {
        number: 13,
        title: 'तिम्रो मीठो बोली',
        message: 'Just hearing your voice or reading a sweet text from you makes my day.',
        sticker: 'butterfly',
        tint: 'lavender',
      },
      {
        number: 14,
        title: 'You Look Pretty Always',
        message: 'Honestly, even when you think you look simple, I still think you are super cute.',
        sticker: 'bow',
        tint: 'blue',
      },
      {
        number: 15,
        title: 'Being Comfortable With You',
        message: 'Around you, I never have to pretend—I can just be completely myself.',
        sticker: 'teddy',
        tint: 'cream',
      },
      {
        number: 16,
        title: 'तिम्रो खुसी',
        message: 'तिम्रो खुसी मेरो लागि धेरै महत्त्वपूर्ण छ। Seeing you happy genuinely makes me happy.',
        sticker: 'cake',
        tint: 'pink',
      },
      {
        number: 17,
        title: 'Really Lucky To Have You',
        message: "I don't say it enough maybe, but I'm really lucky to have you in my life, Roshni.",
        sticker: 'star',
        tint: 'lavender',
      },
      {
        number: 18,
        title: 'Just Being Roshni',
        message: 'तिमी मेरो जीवनको एउटा धेरै प्यारो हिस्सा हौ। Never change who you are. ♡',
        sticker: 'heart',
        tint: 'blue',
      },
    ],
  },

  surprises: {
    sectionTitle: 'Little Envelopes For Roshni',
    sectionSubtitle: 'Tap each little envelope to unwrap a sweet reminder from me.',
    items: [
      {
        id: 'box-1',
        hint: 'Open this first ♡',
        label: 'Envelope 01',
        kind: 'Sweet Note',
        title: 'For Today',
        message:
          "I hope you smile a little extra today, Roshni. आजको दिन तिम्रो हो, त्यसैले आज धेरैभन्दा धेरै मुस्कुराउनू। ❤️",
        sticker: 'cake',
        tint: 'pink',
      },
      {
        id: 'box-2',
        hint: 'Tiny reminder inside!',
        label: 'Envelope 02',
        kind: 'Little Envelope',
        title: 'Just So You Know',
        message:
          "Just a little reminder that you're really important to me—and you're honestly my favourite notification every day.",
        sticker: 'letter',
        tint: 'blue',
      },
      {
        id: 'box-3',
        hint: 'Nepali note for you 🌷',
        label: 'Envelope 03',
        kind: 'Nepali Note',
        title: 'मेरो प्यारो रोश्नी',
        message:
          'रोश्नी, तिमी सधैँ यसरी नै मुस्कुराइरहनू है। ❤️ हाम्रो सानो यात्राका अझै धेरै सुन्दर सम्झनाहरू बन्न बाँकी छन्।',
        sticker: 'daisy',
        tint: 'peach',
      },
      {
        id: 'box-4',
        hint: 'My birthday wish for you',
        label: 'Envelope 04',
        kind: 'Birthday Wish',
        title: 'For Your 18th Year',
        message:
          "I hope this year gives you everything you've been wishing for. I'm really lucky to have you in my life, Roshni.",
        sticker: 'teddy',
        tint: 'lavender',
      },
    ],
  },

  celebration: {
    number: '18',
    eyebrow: 'Birthday Wish Time, Roshni',
    idleHeadline: 'Ready to celebrate turning 18, Roshni?',
    buttonLabel: 'Celebrate 18 Years, Roshni ♡',
    revealHeadline: 'HAPPY 18TH BIRTHDAY, ROSHNI! ♡',
    nepaliWish: 'रोश्नी, तिमी सधैँ यसरी नै मुस्कुराइरहनू है। ❤️',
    wishText:
      "I hope this year gives you everything you've been wishing for, lots of good laughs, and every reason to keep smiling.",
  },

  music: {
    audioSrc: '/music/birthday-music.mp3',
    trackTitle: 'For Roshni',
  },

  sweetLoveNotes: [
    "You're honestly my favourite notification. ♡",
    'I hope you smile a little extra today, Roshni. ❤️',
    'You make even normal days feel special. 🌷',
    "Just a little reminder that you're really important to me.",
    'Your smile is one of my favourite things. ♡',
    "I'm really lucky to have you in my life, Roshni.",
    'रोश्नी, तिमी सधैँ यसरी नै मुस्कुराइरहनू है। ❤️',
    'तिम्रो खुसी मेरो लागि धेरै महत्त्वपूर्ण छ। 🌸',
  ],

  finalWish: {
    eyebrow: 'Final Birthday Letter For You',
    nepaliBlessing: 'तिमी मेरो जीवनको एउटा धेरै प्यारो हिस्सा हौ।',
    headline: 'Happy 18th Birthday, Roshni! ❤️',
    salutation: 'Dear Roshni,',
    paragraphs: [
      'Happy 18th Birthday! ❤️',
      "I don't know if I can put everything I feel into words, but I just want you to know how special you are to me.",
      "From Class 10 to Class 12, we've shared a little journey together, and I'm really happy to have you in my life.",
      'I hope you achieve everything you dream about. I hope you laugh a lot, enjoy every little moment, and never lose that beautiful smile of yours.',
      'Thank you for being you and for making so many ordinary moments feel special.',
      'Keep smiling, keep dreaming, and keep being my favourite person.',
    ],
    signOff: 'Once again, happy birthday, Roshni. I love you! ♡',
    replayLabel: 'Open Envelope Again ✨',
  },
};

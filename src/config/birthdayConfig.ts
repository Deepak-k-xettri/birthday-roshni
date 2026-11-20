/*
 * ============================================================================
 * PERSONALIZATION GUIDE — ROSHNI'S 18TH BIRTHDAY SCRAPBOOK
 * ============================================================================
 * Edit ANY text, Nepali wish, poem, reason, or media filename below.
 *
 * HOW TO ADD YOUR OWN PHOTOS & MUSIC:
 * 1. Photos: Place your images inside `public/images/` as:
 *      portrait.jpg, photo1.webp ... photo5.webp, photo6.jpg, photo7.jpg
 *    (Photos display purely in scrapbook & Polaroid frames without captions.)
 * 2. Music:  Place your MP3 at `public/music/birthday-music.mp3`.
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
  originalLines?: string[];
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
    eyebrow: 'A small envelope of our memories',
    nepaliGreeting: 'रोश्नी, जन्मदिनको धेरै धेरै शुभकामना ♡',
    headline: 'There is a little something inside...',
    subtext: 'A few pages from our story, saved for your birthday.',
    buttonLabel: 'Break the seal ♡',
    revealTitle: 'Happy 18th Birthday, Roshni! ♡',
    revealMessage: 'आजको दिन तिम्रो हो। Made with love, and a few memories only we know.',
  },

  hero: {
    kicker: 'Class 10 देखि Class 12 सम्मका सम्झनाहरू ♡',
    headline: 'Happy 18th Birthday, Roshni! ♡',
    subtitle: 'For the girl who makes a rare familiar bus ride feel worth keeping.',
    nepaliGreeting: 'रोश्नी, जन्मदिनको धेरै धेरै शुभकामना। ❤️',
    supportingText: 'From shared homework and foggy mornings to the rare school-bus journey we get to share now, this little scrapbook holds some of our story.',
    portraitSrc: '/images/portrait.jpg',
    portraitFallback: '/src/assets/images/hero_birthday_portrait_1794833742876.webp',
  },

  ourStory: {
    sectionTitle: 'Our Little Story (Class 10 → Class 12)',
    sectionSubtitle: 'The little scenes I would choose to keep.',
    mainParagraphs: [
      'Some parts of a story are easy to point to; others only make sense because they are ours. These are a few scenes from Class 10 to Class 12 that I still carry with me.',
      'The years did not stay arranged the same way, but we kept finding moments to share. I’m glad these chapters belong to us. ♡',
    ],
    chapters: [
      { id: 'class-10', badge: 'Class 10', title: 'Homework, Then More', text: 'Homework gave us a reason to talk, and soon we had plenty to say. Your “I love you” reel left me guessing; when I finally spoke, nerves made lunch almost impossible.', sticker: 'flower', tint: 'pink' },
      { id: 'foggy-mornings', badge: 'Cold Tuition Mornings', title: 'The Morning I Keep', text: 'Fog covered the way to tuition. On the first morning we went together, you brought me a gift. I still adore it. Our first hug came with its own nerves; I said “fine, let’s go” before I could take in the moment.', sticker: 'gift', tint: 'lavender' },
      { id: 'class-11', badge: 'Class 11', title: 'Between Bardaghat & Butwal', text: 'The bus gave us time to talk, and sometimes we took evening walks. There were lovely days and difficult ones; both are part of the year we shared.', sticker: 'heart', tint: 'peach' },
      { id: 'class-12', badge: 'Class 12 · Now', title: 'A Different Route', text: 'You moved into a hostel in Butwal, so our routines changed. You only rarely get the school bus home; when we can travel together, that time to talk feels especially precious.', sticker: 'cloud', tint: 'pink' },
    ],
    floatingNotes: ['Some pages are best kept between us.', 'The school years went by; the memories stayed.', 'Not every day needs to be perfect to belong.', 'There are still new chapters ahead.'],
  },

  loveLetter: {
    sectionTitle: 'A Letter Across These School Years',
    sectionSubtitle: 'A note about the person I’m still getting to know.',
    dateLabel: 'Class 10 → Class 12 · Your 18th Birthday',
    salutation: 'Dear Roshni,',
    paragraphs: [
      'Happy 18th birthday, Roshni. I wanted to write you something that sounds like me, so here it is: I’m grateful for the person you are and for the trust and care we keep building between us.',
      'I like that there is always more to learn about you. I hope you keep making choices that feel like your own, and that you know I’m in your corner as you do.',
      'Thank you for letting me be part of your life. I don’t take that lightly, and I’m glad we get to keep growing through all the changes around us.',
      'Have a beautiful birthday. I hope 18 feels open, kind, and full of possibilities.',
    ],
    closing: 'With all my affection,', signature: 'Yours, always glad to share the ride ♡',
  },

  poems: {
    sectionTitle: 'Things I Remember in Lines',
    sectionSubtitle: 'Three small poems, and one that began in my own words.',
    items: [
      { id: 'foggy-mornings', title: 'The Mornings We Didn’t Notice', nepaliSubtitle: 'A foggy tuition morning', lines: ['The morning was cold.', 'The road disappeared into fog.', 'We went toward tuition', 'with the day still quiet around us.', 'I did not know then', 'how clearly I would remember', 'that little stretch of morning.'], footnote: 'A quiet beginning to the day', layout: 'featured' },
      { id: 'between-stops', title: 'Between Two Stops', lines: ['Bardaghat to Butwal.', 'A familiar road,', 'and time that belonged to conversation.', 'We did not need a special place to arrive at.', 'For a while, the journey itself was enough.'], footnote: 'Class 11, somewhere along the way', layout: 'stanza' },
      { id: 'the-way-home', title: 'A Seat Beside You', lines: ['Not every ride is ours to share.', 'Then one comes along,', 'and the talk begins where it left off.', 'Outside, the same road passes.', 'Inside, for a little while,', 'there is nowhere else to be.'], footnote: 'For the journeys we happen to share', layout: 'stanza' },
      { id: 'my-poem', title: 'A Poem I Wrote for You', nepaliSubtitle: 'My original words, with a little polish', lines: ['You are like a red, red rose,', 'always bright in your own way.', 'Seeing you makes me feel right.', 'Your fragrance makes me feel so good,', 'I could fall in love with you again and again.', 'You are so perfect that I want to be good for you.', 'You are kind and gentle,', 'and that makes me want to care for you.', 'Everything ends someday;', 'I hope what we have keeps its meaning.'], originalLines: ['You are like a red red rose, always red and bright,', 'your sight always makes me feel right.', 'Your smell makes me feel so good,', 'that I want to fall in love with you in a loop.', 'You are so perfect, that all I want is to be good for you.', 'You look so kind and soft, that I want to protect you.', 'At the end everything ends but not the eternal love with you.'], footnote: 'My words, still carrying the same feeling', layout: 'note' },
    ],
    shortLoveNotes: ['You are like a red, red rose: bright in your own way.', 'Seeing you makes something in me feel right.', 'I still remember your fragrance, and how good it made me feel.', 'Your gentleness makes me want to be kinder and better for you.'],
  },

  gallery: {
    sectionTitle: 'Our Little Photo Scrapbook',
    sectionSubtitle:
      'Tap any photograph to view it up close. Add your own pictures inside public/images/.',
    photos: [
      {
        id: 'photo-1',
        src: '/images/photo1.webp',
        fallbackSrc: '/src/assets/images/memory_birthday_cake_1794833744599.webp',
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
        src: '/images/photo2.webp',
        fallbackSrc: '/src/assets/images/memory_golden_hour_1794833744645.webp',
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
        src: '/images/photo3.webp',
        fallbackSrc: '/src/assets/images/memory_sunset_walk_1794833743235.webp',
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
        src: '/images/photo4.webp',
        fallbackSrc: '/src/assets/images/memory_sparkler_night_1794833745019.webp',
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
        src: '/images/photo5.webp',
        fallbackSrc: '/src/assets/images/hero_birthday_portrait_1794833742876.webp',
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
    sectionTitle: '18 Things I Appreciate About You ♡',
    sectionSubtitle: 'Eighteen small notes, each for a different reason.',
    items: [
      { number: 1, title: 'Your Own Kind of Roshni', message: 'You never feel like a copy of anyone. I like the things that are simply, unmistakably you.', sticker: 'butterfly', tint: 'pink' },
      { number: 2, title: 'तिम्रो बोली', message: 'तिमीले बोल्ने आफ्नै मिठास छ, त्यसैले तिम्रो कुरा सुन्दा सधैँ राम्रो लाग्छ।', sticker: 'cloud', tint: 'blue' },
      { number: 3, title: 'The Little Details', message: 'The tiny habits you may not notice are often the details I find myself remembering.', sticker: 'bow', tint: 'peach' },
      { number: 4, title: 'Words That Stay', message: 'You have your own way of explaining things; sometimes one simple line from you stays with me.', sticker: 'letter', tint: 'cream' },
      { number: 5, title: 'तिम्रो हाँसो', message: 'तिम्रो हाँसोले कुनै पनि कुराकानीलाई अझ रमाइलो बनाइदिन्छ।', sticker: 'daisy', tint: 'peach' },
      { number: 6, title: 'Your Gentle Side', message: 'I notice the care you give to people and things. It makes me want to meet the world more gently too.', sticker: 'flower', tint: 'pink' },
      { number: 7, title: 'तिम्रो सोच्ने तरिका', message: 'तिमीले कुनै कुरा हेर्ने आफ्नै दृष्टिकोणले मलाई पनि नयाँ तरिकाले सोच्न सिकाउँछ।', sticker: 'star', tint: 'lavender' },
      { number: 8, title: 'A Laugh in the Middle', message: 'I like that even a plain conversation can turn funny when we least expect it.', sticker: 'daisy', tint: 'cream' },
      { number: 9, title: 'Your Hopes', message: 'The future is yours to shape, and I hope you always have room to follow what matters to you.', sticker: 'star', tint: 'blue' },
      { number: 10, title: 'तिमीसँगको सहजता', message: 'तिमीसँगै हुँदा चुपचाप बसे पनि अप्ठ्यारो लाग्दैन, अनि कुरा गर्दा समय बितेको थाहै हुँदैन।', sticker: 'heart', tint: 'pink' },
      { number: 11, title: 'No Topic Needed', message: 'We do not need a grand subject. A little conversation with you is enough to make time pass gently.', sticker: 'teddy', tint: 'lavender' },
      { number: 12, title: 'Room for Real Days', message: 'I value the honest days too, even when they are not polished or especially happy.', sticker: 'cloud', tint: 'cream' },
      { number: 13, title: 'तिम्रा भावहरू', message: 'तिम्रा अनुहारका साना भावले कहिलेकाहीँ शब्दभन्दा धेरै कुरा भनिदिन्छन्।', sticker: 'doodle', tint: 'peach' },
      { number: 14, title: 'A Voice I Know', message: 'Your voice has become familiar to me in the nicest way; I like hearing what is on your mind.', sticker: 'letter', tint: 'blue' },
      { number: 15, title: 'Your Own Pace', message: 'I respect that you get to find your way through things at a pace that feels right to you.', sticker: 'butterfly', tint: 'lavender' },
      { number: 16, title: 'हाम्रा गफ', message: 'तिमीसँग कुरा गर्दा सानो कुराले पनि लामो गफको रूप लिन्छ, अनि समय बितेको पत्तै हुँदैन।', sticker: 'letter', tint: 'cream' },
      { number: 17, title: 'An Easy Honesty', message: 'I am grateful for the trust between us and for how honestly we can speak with each other.', sticker: 'star', tint: 'peach' },
      { number: 18, title: 'तिम्रो दयालु मन', message: 'तिम्रो दयालु व्यवहारले मलाई पनि अरूप्रति अझै कोमल हुन सिकाउँछ।', sticker: 'flower', tint: 'pink' },
    ],
  },

  surprises: {
    sectionTitle: 'Four Little Letters, Sealed for You',
    sectionSubtitle: 'Pick one by its note on the outside; there is a different thought tucked inside each.',
    items: [
      { id: 'box-1', hint: 'A birthday note with a tiny tease', label: 'Envelope 01', kind: 'A little teasing', title: 'Eighteen, Really?', message: 'Happy 18th, Roshni! You are now officially allowed to call yourself the sensible one. I will try to remember that for at least today. Have the loveliest birthday, you deserve a little fuss. ♡', sticker: 'cake', tint: 'pink' },
      { id: 'box-2', hint: 'A moment I still keep close', label: 'Envelope 02', kind: 'Something I never forget', title: 'That First Kiss', message: 'When we used to meet before going to tuition, we shared our first kiss. I was so nervous I could hardly take in the moment. It was small and quiet, but it has stayed with me ever since.', sticker: 'heart', tint: 'blue' },
      { id: 'box-3', hint: 'एउटा चिठी, आफ्नै भाषामा', label: 'Envelope 03', kind: 'एउटा सानो नेपाली चिठी', title: 'रोश्नीका लागि', message: 'रोश्नी, तिमी मेरो मनको धेरै नजिक छौ। तिमीसँग हुँदा साना कुरामा पनि अपनत्व भेट्छु। तिमी जहाँ भए पनि मन खुसी राख्नू, आफ्नो बाटोमा निर्धक्क अघि बढ्नू। तिमीलाई आज धेरै माया र शुभकामना।', sticker: 'daisy', tint: 'peach' },
      { id: 'box-4', hint: 'A note for the road ahead', label: 'Envelope 04', kind: 'Something for what comes next', title: 'Room for What’s Next', message: 'I hope hostel life in Butwal brings new friends, good stories, and the freedom to find your own rhythm. Keep making space for the dreams that matter to you. There are so many good things still ahead, and I’ll be cheering you on.', sticker: 'star', tint: 'lavender' },
    ],
  },

  celebration: {
    number: '18',
    eyebrow: 'A little pause for your birthday',
    idleHeadline: 'Shall we make a little birthday noise?',
    buttonLabel: 'Celebrate your 18th ♡',
    revealHeadline: 'HAPPY 18TH BIRTHDAY, ROSHNI! ♡',
    nepaliWish: 'रोश्नी, तिम्रो नयाँ वर्ष खुसी र मायाले भरियोस्। ❤️',
    wishText: 'May eighteen bring good people, brave plans, plenty of laughter, and days that feel like yours.',
  },

  music: {
    audioSrc: '/music/birthday-music.mp3',
    trackTitle: 'Your Love',
  },

  sweetLoveNotes: [
    'You deserve a whole page for every new thing you try.',
    'I like how you can make a small thought sound like yours alone.',
    'Your birthday gets a page of its own. No homework on this one.',
    'There is always something new I like learning about you.',
    'I hope today gives you time to enjoy being celebrated.',
    'Some words are easier to write when they are meant for you.',
    'तिमीसँगका साधारण पलहरू पनि मलाई धेरै प्रिय छन्।',
    'आज तिम्रो १८औँ जन्मदिन—मनभरि रमाइलो गर है।',
  ],

  finalWish: {
    eyebrow: 'One Last Note for Your 18th',
    nepaliBlessing: 'जन्मदिनको धेरै धेरै शुभकामना, Roshni।',
    headline: 'Happy 18th Birthday, Roshni! ❤️',
    salutation: 'Dear Roshni,',
    paragraphs: [
      'We have grown through a few school years and a lot of changes. I do not need to gather every memory onto this last page; I only want you to know how glad I am that our story is ours.',
      'I hope your eighteenth year gives you room to learn, to choose what feels right, and to find good things in the life you are making for yourself.',
      'Have a wonderful birthday, Roshni. I’m cheering for you in all the chapters ahead.',
    ],
    signOff: 'Here’s to the next ordinary day worth remembering. ♡',
    replayLabel: 'Open the First Envelope Again ✨',
  },

};

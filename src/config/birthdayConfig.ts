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
    subtitle: 'For the girl who made a familiar bus ride worth waiting for.',
    nepaliGreeting: 'रोश्नी, जन्मदिनको धेरै धेरै शुभकामना। ❤️',
    supportingText: 'From shared homework and foggy mornings to the ride home we still look forward to, this little scrapbook holds some of our story.',
    portraitSrc: '/images/portrait.jpg',
    portraitFallback: '/src/assets/images/hero_birthday_portrait_1794833742876.jpg',
  },

  ourStory: {
    sectionTitle: 'Our Little Story (Class 10 → Class 12)',
    sectionSubtitle: 'A few ordinary moments that stayed with me.',
    mainParagraphs: [
      'In Class 10, homework gave us a reason to share things; then the conversations started taking up more room. One day you sent me a reel with “I love you” in it. I could not tell if you meant it or were teasing me. When I finally told you how I felt, I was so nervous my lunch barely got touched.',
      'The foggy tuition mornings still feel warm when I remember them. The first time we went together, you brought me a gift. I still adore it; holding on to that small thing somehow keeps the whole morning close. Our first hug was another moment I was too nervous to handle smoothly. I said, “Fine, let’s go,” which was not at all what my heart was saying.',
      'Class 10 left us with so much time together and photographs from near the end of the year. Photos keep how we looked; memory keeps how it felt. Class 11 brought the Bardaghat to Butwal bus rides, our talks, and a few evening walks. Some days were difficult too, and they belong to the story as honestly as the good ones.',
      'Now, in Class 12, I wait for you to return from college so we can talk on the bus. It is a simple routine, but knowing we will get that time together can make an ordinary day feel complete. अझै यस्तै सम्झनाहरू बन्न बाँकी छन्। ♡',
    ],
    chapters: [
      { id: 'class-10', badge: 'Class 10', title: 'Homework, Then More', text: 'Sharing homework became longer conversations. A reel left me wondering, and telling you how I felt left me too nervous to enjoy lunch.', sticker: 'flower', tint: 'pink' },
      { id: 'foggy-mornings', badge: 'Cold Tuition Mornings', title: 'A Gift in the Fog', text: 'The first time we went to tuition together, you brought me a gift. I still adore it, and the morning it brings back.', sticker: 'gift', tint: 'lavender' },
      { id: 'class-11-12', badge: 'Class 11 → 12', title: 'The Ride Home', text: 'Bardaghat to Butwal, evening walks, and now waiting for you after college so we can talk on the bus again.', sticker: 'heart', tint: 'peach' },
    ],
    floatingNotes: ['That first gift still brings back the whole foggy morning.', '“Fine, let’s go” was not what I was feeling at all.', 'Some bus rides are good because of who is beside you.', 'A familiar conversation is a good thing to wait for.'],
  },

  loveLetter: {
    sectionTitle: 'A Letter Across These School Years',
    sectionSubtitle: 'For the ordinary moments I still carry with me.',
    dateLabel: 'Class 10 → Class 12 · Your 18th Birthday',
    salutation: 'Dear Roshni,',
    paragraphs: [
      'Happy 18th birthday. I keep thinking about how quietly our story began: sharing homework in Class 10, then finding more and more to talk about.',
      'Then you sent that reel saying “I love you.” I could not tell if you meant it or were teasing me, and I carried that question around until I finally told you how I felt. I was so nervous my lunch might as well have been sitting untouched in front of me.',
      'I still remember those cold tuition mornings with fog everywhere. The first time we went together, you brought me a gift. I still adore it—not for what it was worth, but for the morning it brings back. And our first hug: I was so nervous that I said, “Fine, let’s go.” A very calm sentence for someone whose heart was not calm at all.',
      'Class 10 gave us so much time together, and the photographs from near the end hold one little part of it. They show how we looked; the memories bring back how it felt. In Class 11, our Bardaghat to Butwal bus rides gave us time to talk, and some evening walks gave ordinary days a little more room. Not every day was easy, but those days are part of what was real.',
      'Now you are in college, and I often wait for you to come back so we can share the bus ride home. I like that our story still has ordinary chapters: a familiar route, a conversation, and being glad we got that time.',
      'I hope eighteen brings you kind days, good surprises, and room to become everything you want to be. जन्मदिनको धेरै धेरै शुभकामना, Roshni. I’m glad I get to keep making memories with you.',
    ],
    closing: 'With all my affection,', signature: 'Yours, always glad to share the ride ♡',
  },

  poems: {
    sectionTitle: 'Things I Remember in Lines',
    sectionSubtitle: 'Three small poems, and one that began in my own words.',
    items: [
      { id: 'foggy-mornings', title: 'The Mornings We Didn’t Notice', nepaliSubtitle: 'A foggy tuition morning', lines: ['The morning was cold.', 'Fog softened the road ahead.', 'The first time we went to tuition together,', 'you brought me a gift.', 'I still adore it.', 'Somehow, it has kept that morning too—', 'the cold outside,', 'and the warmth I only noticed later.'], footnote: 'A small thing that kept a whole morning', layout: 'featured' },
      { id: 'between-stops', title: 'Between Two Stops', lines: ['Bardaghat to Butwal.', 'A familiar road,', 'and time that belonged to conversation.', 'We did not need a special place to arrive at.', 'For a while, the journey itself was enough.'], footnote: 'Class 11, somewhere along the way', layout: 'stanza' },
      { id: 'the-way-home', title: 'The Way Home', lines: ['You shifted to college.', 'I wait for you to come back,', 'then we find our seats on the bus.', 'The ride home is ordinary.', 'The conversation is familiar.', 'Still, some days are better', 'because I knew I would get that time with you.'], footnote: 'Class 12, lately', layout: 'stanza' },
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
        src: '/images/photo1.png',
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
        src: '/images/photo2.png',
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
        src: '/images/photo3.png',
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
        src: '/images/photo4.png',
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
        src: '/images/photo5.png',
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
    sectionTitle: '12 Things I Appreciate About You ♡',
    sectionSubtitle: 'A dozen small notes, each for a different reason.',
    items: [
      { number: 1, title: 'Your Little Habits', message: 'The small things you do without thinking are part of what makes you unmistakably you.', sticker: 'bow', tint: 'pink' },
      { number: 2, title: 'Your Humour', message: 'You can make a conversation lighter without trying too hard.', sticker: 'daisy', tint: 'peach' },
      { number: 3, title: 'The Way You Talk', message: 'I like how our conversations find their own path, even when we start with something ordinary.', sticker: 'letter', tint: 'cream' },
      { number: 4, title: 'Easy Conversation', message: 'With you, a bus ride has enough to fill it without needing a plan.', sticker: 'cloud', tint: 'blue' },
      { number: 5, title: 'Simply Your Own', message: 'You have your own way of being, and I would not want to edit it into anyone else’s.', sticker: 'butterfly', tint: 'lavender' },
      { number: 6, title: 'Your Kindness', message: 'Your gentle way with people makes me want to bring more kindness into the world too.', sticker: 'flower', tint: 'pink' },
      { number: 7, title: 'How You Meet Things', message: 'I admire the care you bring to the things that matter to you.', sticker: 'star', tint: 'peach' },
      { number: 8, title: 'Our Shared Pages', message: 'Homework, fog, photographs, and journeys: I’m glad these memories are ours.', sticker: 'doodle', tint: 'cream' },
      { number: 9, title: 'The Ordinary You', message: 'You do not need a special occasion to make a day feel worth remembering.', sticker: 'heart', tint: 'blue' },
      { number: 10, title: 'Our Bus Rides', message: 'The route is familiar; the time beside you never feels wasted.', sticker: 'teddy', tint: 'lavender' },
      { number: 11, title: 'Feeling Understood', message: 'It means a lot to have someone I can talk with and feel heard by.', sticker: 'gift', tint: 'peach' },
      { number: 12, title: 'Just Being Roshni', message: 'No list can explain it better than this: I’m glad the person you are is you.', sticker: 'heart', tint: 'pink' },
    ],
  },

  surprises: {
    sectionTitle: 'Four Notes to Open in Your Own Time',
    sectionSubtitle: 'Each envelope has its own little reason for being here.',
    items: [
      { id: 'box-1', hint: 'A birthday-sized secret', label: 'Envelope 01', kind: 'Birthday Wish', title: 'Today Has Your Name On It', message: 'Eighteen candles, one very deserving birthday girl. Hope there is cake, laughter, and absolutely no homework today. जन्मदिनको धेरै शुभकामना!', sticker: 'cake', tint: 'pink' },
      { id: 'box-2', hint: 'A quiet little note', label: 'Envelope 02', kind: 'Sweet Note', title: 'Just Something I Notice', message: 'I appreciate how easy it is to talk with you. Even a small conversation can stay with me long after the bus ride ends.', sticker: 'letter', tint: 'blue' },
      { id: 'box-3', hint: 'एउटा सानो नेपाली कुरा', label: 'Envelope 03', kind: 'Nepali Note', title: 'मेरो प्यारो रोश्नी', message: 'तिमीसँग बिताएका साधारण पलहरू पनि मलाई धेरै प्रिय छन्। सधैँ खुसी रहनू, अनि आफ्नो मन पर्ने बाटोमा अघि बढिरहनू।', sticker: 'daisy', tint: 'peach' },
      { id: 'box-4', hint: 'For the year ahead', label: 'Envelope 04', kind: 'Little Envelope', title: 'Room for Your Dreams', message: 'I hope this next year gives you space to try what excites you, confidence for the hard parts, and people who cheer you on. I’ll be cheering too.', sticker: 'star', tint: 'lavender' },
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
    'Cold outside, warm memory. I still adore that first gift. ♡',
    'I meant “fine, let’s go.” My heart had other plans.',
    'Bardaghat to Butwal became a favourite route because we could talk.',
    'Some evening walks were just walks, and that was enough.',
    'The photographs kept the faces; I kept how those days felt.',
    'A bus ride home is a very nice thing to look forward to.',
    'तिमीसँगका साधारण पलहरू पनि मलाई धेरै प्रिय छन्।',
    'आज तिम्रो १८औँ जन्मदिन—मनभरि रमाइलो गर है।',
  ],

  finalWish: {
    eyebrow: 'One Last Note for Your 18th',
    nepaliBlessing: 'जन्मदिनको धेरै धेरै शुभकामना, Roshni।',
    headline: 'Happy 18th Birthday, Roshni! ❤️',
    salutation: 'Dear Roshni,',
    paragraphs: [
      'Class 10 began with shared homework and conversations that kept growing. I still remember the reel that made me wonder, and the lunch I could barely touch when I finally told you how I felt.',
      'Class 11 gave us the Bardaghat to Butwal journeys, talks on the bus, evening walks, and days that were not always easy. They all became part of our memories.',
      'Now, in Class 12, I wait for you to return from college and look forward to talking on the familiar ride home. I hope the days ahead bring us more ordinary moments that, later, we will be glad we kept.',
      'Have a wonderful 18th birthday. I’m glad the road from then to now has included you.',
    ],
    signOff: 'Here’s to the next ordinary day worth remembering. ♡',
    replayLabel: 'Open the First Envelope Again ✨',
  },

};

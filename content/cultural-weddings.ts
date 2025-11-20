// Cultural and religious wedding content

// Type definitions for cultural wedding content
interface QuickFacts {
  duration: string;
  venue: string;
  dressCode: string;
  guestCount: string;
  musicStyle: string;
}

interface GlossaryTerm {
  term: string;
  pronunciation: string;
  definition: string;
}

interface GuestEtiquette {
  heading: string;
  points: string[];
}

interface KeyMoment {
  title: string;
  duration?: string;
  description: string;
}

interface FullDayTimelineSegment {
  time: string;
  title: string;
  description: string;
  whatIllBeDoing?: string;
  hasDetails?: boolean;
}

interface CulturalConsiderations {
  heading: string;
  points: string[];
}

interface CommonQuestion {
  q: string;
  a: string;
}

interface CulturalWeddingContent {
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroImage?: string; // Optional - will use gradient fallback if not provided
  introHeading: string;
  introBody: string;
  quickFacts?: QuickFacts;
  glossary?: GlossaryTerm[];
  guestEtiquette?: GuestEtiquette;
  keyMoments: KeyMoment[];
  fullDayTimeline?: FullDayTimelineSegment[];
  culturalConsiderations: CulturalConsiderations;
  commonQuestions: CommonQuestion[];
}

export const culturalWeddings: Record<string, CulturalWeddingContent> = {
  "catholic": {
    title: "Catholic Wedding Traditions",
    seoTitle: "Catholic Wedding Ceremony Guide | Understanding Catholic Wedding Traditions",
    seoDescription: "Learn about Catholic wedding ceremony structure, the Mass, sacraments, and sacred traditions. Complete guide to understanding the flow and significance of Catholic weddings.",
    heroImage: "/weddings/catholic-wedding.jpg",

    introHeading: "Understanding the sacred traditions of a Catholic wedding ceremony.",
    introBody: "A Catholic wedding is more than a ceremony. It's a sacred Mass, a sacrament, and a covenant witnessed by your community. The ceremony follows a rich liturgical structure with deep spiritual significance, typically lasting 60-90 minutes for a full Nuptial Mass or 30-45 minutes for a ceremony without Mass.",

    quickFacts: {
      duration: "60-90 minutes (with Mass), 30-45 minutes (ceremony only)",
      venue: "Catholic church or chapel (rarely granted permission for outdoor)",
      dressCode: "Formal or semi-formal; modest attire appreciated (covered shoulders for church)",
      guestCount: "Varies from intimate to 300+ depending on church capacity",
      musicStyle: "Sacred hymns, classical, organ music, Catholic liturgical songs"
    },

    glossary: [
      { term: "Nuptial Mass", pronunciation: "", definition: "Full Catholic wedding ceremony including Mass and Communion" },
      { term: "Pre-Cana", pronunciation: "pree-KAH-nah", definition: "Required marriage preparation program for Catholic couples" },
      { term: "Sacrament", pronunciation: "", definition: "Sacred rite recognized as a channel of divine grace in Catholic faith" },
      { term: "Liturgy of the Eucharist", pronunciation: "", definition: "The part of Mass including consecration and Holy Communion" },
      { term: "Homily", pronunciation: "", definition: "The priest's sermon or reflection on scripture and marriage" },
      { term: "Consecration", pronunciation: "", definition: "The blessing of bread and wine, transforming them into the body and blood of Christ" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Dress modestly and respectfully. Women should cover shoulders in church (bring a shawl if needed)",
        "Arrive 15-20 minutes early. Catholic ceremonies start promptly and seating may be reserved",
        "Silence phones and refrain from talking once the ceremony begins",
        "Only baptized Catholics in a state of grace should receive Communion. Others may remain seated or go forward for a blessing (cross arms over chest)",
        "Stand, sit, and kneel when the congregation does. Follow along with the program if you're unfamiliar",
        "Photography may be restricted during the consecration and Communion. Respect church rules",
        "The ceremony may be 60-90 minutes if it includes full Mass. Plan accordingly",
        "Do not leave during Mass. Wait until the recessional (couple's exit) to leave if absolutely necessary"
      ]
    },

    keyMoments: [
      {
        title: "The Procession",
        description: "Entrance of the wedding party, parents, and bride, often accompanied by sacred music or hymns."
      },
      {
        title: "Opening Prayer & Readings",
        description: "Scripture readings (Old Testament, Psalm, New Testament) chosen by the couple, followed by the Gospel."
      },
      {
        title: "Homily",
        description: "The priest's reflection on marriage, faith, and the couple's journey together."
      },
      {
        title: "Exchange of Vows",
        description: "The couple declares their consent before God and the Church. 'I do' or personalized vows if permitted."
      },
      {
        title: "Blessing and Exchange of Rings",
        description: "Rings are blessed and exchanged as symbols of unending love and fidelity."
      },
      {
        title: "Nuptial Blessing",
        description: "A special blessing invoking God's grace upon the marriage."
      },
      {
        title: "The Mass (if included)",
        description: "Liturgy of the Eucharist: Offertory, Consecration, and Holy Communion (60-90 min total with full Mass)."
      },
      {
        title: "Final Blessing & Recessional",
        description: "The priest's blessing, kiss, and the couple's exit down the aisle as husband and wife."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into attire. This is when I capture detail shots (rings, dress, shoes, invitations) and candid moments of you getting ready.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, so we capture both of you getting ready simultaneously. I'll film detail shots in natural light (rings, dress, shoes, invitations), candid emotions, and any special moments like letter readings or gift exchanges. For letters, I'll ask if you'd like audio recorded - it's always a plus for the final film, but I respect your wishes either way. If there's anything meaningful happening during prep, we're there for it."
      },
      {
        time: "1 hour before",
        title: "First Look (Optional)",
        description: "Many couples choose a private first look before the ceremony to ease nerves and get portraits done early. This moment is just for you two. If you skip the first look, family formals happen after the ceremony instead.",
        whatIllBeDoing: "If you're doing a first look, my other shooter and I will capture the reveal and your reactions from multiple angles. This gives us 30-45 minutes of couple portraits before the ceremony starts, which takes pressure off the post-ceremony timeline. Your planner and I will coordinate to keep things flowing smoothly."
      },
      {
        time: "30 min before",
        title: "Guests Arrive & Pre-Ceremony",
        description: "Guests arrive and are seated by ushers. Mothers are seated last, signaling the ceremony is about to begin. The priest and wedding party gather in the preparation area.",
        whatIllBeDoing: "I'll be setting up ceremony audio - wireless mics on the priest and groom, plus connecting to the church's audio system if possible to capture everything clearly. The team positions ourselves strategically out of the way, ready for the processional. Final tech checks and we're set."
      },
      {
        time: "60-90 min",
        title: "Ceremony",
        description: "The Catholic wedding ceremony includes the processional, readings, vows, ring exchange, and recessional. If you're having a full Nuptial Mass, it also includes the Liturgy of the Eucharist.",
        whatIllBeDoing: "My other shooter and I capture multiple angles throughout the ceremony - your processional, the emotions of your families, your faces during vows, and all the sacred moments. We position ourselves discreetly to respect the sanctity of the Mass while ensuring every important moment is documented. Audio quality is critical, so I'm monitoring levels the entire time.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits are taken either at the church or at the reception venue. Wedding party photos happen here too.",
        whatIllBeDoing: "I work with the photo team to film family formals and couple portraits efficiently but naturally. We'll have a shot list prepared with your planner to stay on schedule. I aim for 30-45 minutes max for all group coverage so you're not exhausted before the reception."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy drinks and appetizers while you finish portraits. Musicians or DJ provide background music. Many couples have signature cocktails that reflect their story.",
        whatIllBeDoing: "I'm capturing candid guest interactions, décor details, and the overall atmosphere. You might make a brief appearance during cocktail hour. If timing works with sunset, your planner and I will coordinate to grab those golden hour couple portraits."
      },
      {
        time: "3-4 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, and dancing. This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every key moment - from your grand entrance and first dances to toasts, cake cutting, and dance floor energy. We position ourselves to get multiple angles for important moments and roam for candid interactions. We're always watching for genuine emotions and authentic reactions throughout the celebration.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Last Dance & Sendoff",
        description: "Farewell songs, last dance, sparkler or ribbon exit if you've planned one. You depart in a decorated car or head to your suite.",
        whatIllBeDoing: "I'll coordinate the exit timing with your planner to make sure everything's ready. I'll set up lighting for sparkler or exit shots and capture both wide and tight shots of the sendoff, your final waves, and the car pulling away. Before I leave, I always find you to say my goodbyes, give hugs, and share my thanks and blessings."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Many churches restrict movement and photography during the consecration and Eucharist",
        "Couples must typically complete Pre-Cana (marriage preparation) classes",
        "The ceremony may include full Mass with Communion or just the ceremony of the word",
        "Interfaith couples may have a ceremony without Mass, which is shorter",
        "Music selections are often limited to approved sacred music or hymns",
        "The ceremony structure is deeply rooted in centuries of Catholic liturgical tradition"
      ]
    },

    commonQuestions: [
      {
        q: "How long does a Catholic wedding ceremony typically last?",
        a: "A full Catholic wedding Mass typically runs 60-90 minutes, including the Liturgy of the Word and Liturgy of the Eucharist. A ceremony without Mass (ceremony of the word) is usually 30-45 minutes and is often used for interfaith marriages."
      },
      {
        q: "What is Pre-Cana and is it required?",
        a: "Pre-Cana is the Catholic Church's marriage preparation program that engaged couples must complete before their wedding. It typically involves classes or a retreat covering topics like communication, finances, faith, and family planning. Requirements vary by diocese but usually involve 6-8 months of preparation."
      },
      {
        q: "Can couples write their own vows in a Catholic wedding?",
        a: "While couples must exchange the traditional consent ('I do' or the longer form), many priests allow couples to include personal vows or promises after the official exchange. The traditional vows are non-negotiable as they constitute the sacrament, but personalization is often welcomed in addition."
      },
      {
        q: "What's the difference between a Nuptial Mass and a ceremony without Mass?",
        a: "A Nuptial Mass includes the full Catholic Mass with Communion and typically lasts 60-90 minutes. A ceremony without Mass (also called a ceremony of the word) includes readings, vows, and blessings but no Eucharist, lasting 30-45 minutes. This shorter version is common for interfaith marriages or when one partner is not Catholic."
      },
      {
        q: "Are Catholic weddings always held in a church?",
        a: "Traditionally, yes. The Catholic Church requires weddings to take place in a Catholic church or chapel, as marriage is considered a sacrament. However, some dioceses may grant permission for outdoor or alternative venue weddings in special circumstances, though this is rare and requires bishop approval."
      }
    ]
  },

  "jewish": {
    title: "Jewish Wedding Traditions",
    seoTitle: "Jewish Wedding Ceremony Guide | Understanding Jewish Wedding Traditions & Customs",
    seoDescription: "Complete guide to Jewish wedding traditions including the chuppah, ketubah signing, breaking of the glass, and hora. Learn the meaning and flow of Jewish wedding ceremonies.",
    heroImage: "/weddings/jewish-wedding.jpg",

    introHeading: "From the ketubah to the glass—understanding Jewish wedding traditions.",
    introBody: "Jewish weddings are rich with meaning, ritual, and joy. From the bedeken and ketubah signing to the seven blessings under the chuppah and the exuberant hora, each tradition carries deep significance rooted in Jewish law and centuries of cultural practice. The ceremony itself typically lasts 30-45 minutes, with pre-ceremony rituals and a celebratory reception following.",

    quickFacts: {
      duration: "30-45 minutes (ceremony) + pre-ceremony rituals",
      venue: "Synagogue, hotel, outdoor venue, or private home",
      dressCode: "Formal or semi-formal; modest attire appreciated (covered shoulders/knees for Orthodox)",
      guestCount: "Varies widely—from intimate gatherings to 200+ guests",
      musicStyle: "Traditional klezmer, Israeli folk songs, contemporary Jewish music, live band"
    },

    glossary: [
      { term: "Chuppah", pronunciation: "KHOO-pah", definition: "Wedding canopy symbolizing the couple's new home" },
      { term: "Ketubah", pronunciation: "ke-TOO-bah", definition: "Jewish marriage contract outlining obligations" },
      { term: "Bedeken", pronunciation: "be-DEK-en", definition: "Veiling ceremony where groom covers bride's face" },
      { term: "Yichud", pronunciation: "yee-KHUD", definition: "Private alone time for newlyweds immediately after ceremony" },
      { term: "Hora", pronunciation: "HOR-ah", definition: "Traditional circle dance celebrating the couple" },
      { term: "Mazel Tov", pronunciation: "MAH-zel tov", definition: "Congratulations! (literally 'good luck')" },
      { term: "Sheva Brachot", pronunciation: "SHEH-vah brah-KHOT", definition: "Seven wedding blessings recited during ceremony" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Men may be asked to wear a kippah (yarmulke/head covering)—they're usually provided at the entrance",
        "Arrive on time; Jewish weddings often start promptly and pre-ceremony rituals may be open to guests",
        "The ceremony is relatively short (30-45 min), but expect a lively, long reception with lots of dancing",
        "At Orthodox weddings, men and women may be seated separately during the ceremony and dance separately",
        "When the glass breaks, shout 'Mazel Tov!' enthusiastically—it's a joyful, participatory moment",
        "Cash gifts or checks are traditional (often in multiples of 18, a lucky number in Judaism)",
        "The hora is your chance to join the celebration—don't be shy, everyone dances!",
        "Photography may be restricted on Shabbat (Friday evening/Saturday) if observed"
      ]
    },

    keyMoments: [
      {
        title: "Ketubah Signing",
        description: "The bride, groom, and witnesses sign the Jewish marriage contract, often before the ceremony in a private room."
      },
      {
        title: "Bedeken (Veiling Ceremony)",
        description: "The groom veils the bride, referencing the biblical story of Jacob and Rachel. An intimate, emotional pre-ceremony tradition."
      },
      {
        title: "Processional",
        description: "The groom, parents, wedding party, and bride walk down the aisle to the chuppah, often accompanied by live music."
      },
      {
        title: "The Chuppah",
        description: "The wedding canopy symbolizing the couple's new home together. The ceremony takes place underneath with family and the rabbi."
      },
      {
        title: "Seven Blessings (Sheva Brachot)",
        description: "Seven blessings recited over wine, celebrating creation, joy, and the sanctity of marriage."
      },
      {
        title: "Ring Exchange",
        description: "The groom (and sometimes bride) places the ring and recites the traditional declaration: 'Behold, you are consecrated to me...'"
      },
      {
        title: "Breaking of the Glass",
        description: "The groom steps on a glass wrapped in cloth, symbolizing the destruction of the Temple and the fragility of relationships. The crowd shouts 'Mazel Tov!'"
      },
      {
        title: "Yichud",
        description: "The newlyweds spend their first moments alone together in a private room. A deeply personal tradition."
      },
      {
        title: "The Hora",
        description: "The exuberant circle dance where the couple is lifted on chairs. One of the most joyful moments of the reception."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into attire. This is when I capture detail shots (rings, ketubah, dress, shoes) and candid moments of you getting ready.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, so we capture both of you getting ready simultaneously. I'll film detail shots in natural light (rings, ketubah artwork, dress, shoes, invitations), candid emotions, and any special moments like letter readings or gift exchanges. For letters, I'll ask if you'd like audio recorded - it's always a plus for the final film, but I respect your wishes either way."
      },
      {
        time: "1 hour before",
        title: "Ketubah Signing & Bedeken",
        description: "Pre-ceremony rituals where the ketubah is signed by witnesses and the groom veils the bride. These are intimate, emotional moments often shared with close family.",
        whatIllBeDoing: "I'll capture the ketubah signing ceremony with close-ups of the artwork, signatures, and emotions. The bedeken is one of the most beautiful moments - the groom approaching the bride surrounded by singing and dancing family. I'll position myself to capture both your faces and the joy of those around you."
      },
      {
        time: "30 min before",
        title: "Guests Arrive & Pre-Ceremony",
        description: "Guests arrive and are seated. Kippahs are distributed at the entrance. The chuppah is prepared and the processional is about to begin.",
        whatIllBeDoing: "I'll be setting up ceremony audio - wireless mics on the rabbi and groom to capture vows and blessings clearly. My team positions ourselves strategically for the processional and ceremony coverage. Final tech checks and we're ready."
      },
      {
        time: "30-45 min",
        title: "Ceremony",
        description: "The wedding ceremony under the chuppah includes the processional, seven blessings, ring exchange, and breaking of the glass. Everyone shouts 'Mazel Tov!' when the glass breaks.",
        whatIllBeDoing: "My other shooter and I capture multiple angles throughout the ceremony - the processional as both of you walk down with your parents, emotions during the seven blessings, the ring exchange, and of course the breaking of the glass with everyone's joyful reactions. We position ourselves to respect the sacred space while documenting every meaningful moment.",
        hasDetails: true
      },
      {
        time: "15-20 min",
        title: "Yichud",
        description: "The newlyweds spend their first private moments together alone in a room. This deeply personal tradition gives you time to breathe and be together.",
        whatIllBeDoing: "This is your private time - we don't film yichud. My team and I use this time to capture guest reactions, atmosphere, and décor details while you have your moment together."
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits with both sides of the family, plus wedding party photos. We work through the shot list efficiently.",
        whatIllBeDoing: "I work with the photo team to film family formals and couple portraits efficiently but naturally. We'll have a shot list prepared with your planner to stay on schedule. I aim for 30-45 minutes max for all group coverage so you're not exhausted before the party begins."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy drinks and appetizers while you finish portraits. Live music or DJ provides atmosphere. This is when everyone mingles and the energy builds.",
        whatIllBeDoing: "I'm capturing candid guest interactions, décor details, and the overall atmosphere. You might make a brief appearance during cocktail hour. If timing works with sunset, your planner and I will coordinate to grab those golden hour couple portraits."
      },
      {
        time: "3-4 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, the exuberant hora, and dancing. This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every key moment - from your grand entrance to the hora (one of the most joyful moments we'll film). We position ourselves to get multiple angles when you're lifted on chairs. We'll capture toasts, cake cutting, and all the dance floor energy. The hora alone requires strategic positioning to get both wide celebration shots and your reactions up on the chairs.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Last Dance & Sendoff",
        description: "Final songs, last dance, and your exit. Whether it's a sparkler sendoff or something else, this is your grand goodbye.",
        whatIllBeDoing: "I'll coordinate the exit timing with your planner to make sure everything's ready. I'll set up lighting for sparkler or exit shots and capture both wide and tight shots of the sendoff, your final waves, and the car pulling away. Before I leave, I always find you to say my goodbyes, give hugs, and share my thanks and blessings."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Orthodox, Conservative, and Reform weddings have varying levels of formality and tradition observance",
        "Weddings typically cannot take place on Shabbat (Friday evening to Saturday evening) or major Jewish holidays",
        "The ketubah is a legally binding contract written in Aramaic outlining marital obligations",
        "Breaking the glass represents the destruction of the Temple in Jerusalem and life's fragility",
        "Music often includes traditional Israeli folk songs, klezmer, or contemporary Jewish artists",
        "Interfaith weddings may blend Jewish traditions with other cultural or religious customs"
      ]
    },

    commonQuestions: [
      {
        q: "What is the significance of the ketubah?",
        a: "The ketubah is a Jewish marriage contract that has been used for over 2,000 years. Written in Aramaic, it outlines the husband's obligations to his wife including food, clothing, and conjugal rights. Today, many couples use egalitarian ketubot (plural) with modern language and beautiful artistic designs. It's signed before the ceremony by the couple and two witnesses."
      },
      {
        q: "Why do Jewish weddings take place under a chuppah?",
        a: "The chuppah (wedding canopy) symbolizes the home the couple will build together. It's open on all sides, representing hospitality and welcoming guests, and is often decorated with flowers or a tallit (prayer shawl). The openness also recalls Abraham's tent, which was open on all four sides to welcome travelers."
      },
      {
        q: "What does breaking the glass symbolize?",
        a: "Breaking the glass has multiple meanings: it commemorates the destruction of the Temple in Jerusalem (a reminder that even in joy, we remember sorrow), represents the fragility of human relationships (requiring constant care), and serves as a reminder that marriage will have both joyous and challenging moments. When the groom steps on the glass, guests shout 'Mazel Tov!' (congratulations)."
      },
      {
        q: "What is the hora and why is it danced?",
        a: "The hora is a traditional circle dance performed at Jewish celebrations. During weddings, guests dance in circles around the couple, who are often lifted on chairs while holding a handkerchief or napkin between them. It's a joyous celebration of the new marriage and represents the community's support for the couple."
      },
      {
        q: "What's the difference between Orthodox, Conservative, and Reform Jewish weddings?",
        a: "Orthodox weddings are the most traditional, with men and women often separated during the ceremony and reception. Conservative weddings blend tradition with modernity, typically allowing mixed seating. Reform weddings are the most flexible, often incorporating personalized elements and modern interpretations. All three include core traditions like the chuppah, ketubah, and breaking of the glass, but vary in strictness of observance."
      }
    ]
  },

  "hindu": {
    title: "Hindu & Indian Wedding Traditions",
    seoTitle: "Hindu Indian Wedding Ceremony Guide | Understanding Indian Wedding Traditions & Customs",
    seoDescription: "Complete guide to Hindu and Indian wedding traditions including Mehendi, Sangeet, Baraat, ceremony rituals, and multi-day celebrations. Learn the meaning behind each tradition.",
    heroImage: "/weddings/hindu-wedding.jpg",

    introHeading: "Multi-day celebrations rich with meaning and tradition.",
    introBody: "Hindu and Indian weddings are vibrant, multi-day celebrations rich with color, ritual, music, and family. From the Mehendi and Sangeet to the Baraat procession and sacred ceremony, each event carries deep cultural and spiritual significance. The main wedding ceremony typically lasts 2-4 hours and is presided over by a pandit (priest), with pre-wedding events spanning 2-3 days.",

    quickFacts: {
      duration: "2-4 hours (main ceremony), 2-3 days total with pre-wedding events",
      venue: "Banquet hall, hotel ballroom, outdoor venue, or temple",
      dressCode: "Colorful formal attire encouraged; avoid white/black (mourning colors). Sari, lehenga, or sherwani",
      guestCount: "200-500+ guests (extended family and community)",
      musicStyle: "Bollywood songs, traditional bhangra, dhol drums, live DJ, Indian classical"
    },

    glossary: [
      { term: "Saat Phere", pronunciation: "saht FEH-ray", definition: "Seven circles around the sacred fire representing seven vows" },
      { term: "Mandap", pronunciation: "MUN-dup", definition: "Decorated canopy or platform where the ceremony takes place" },
      { term: "Pandit", pronunciation: "PUN-dit", definition: "Hindu priest who presides over the wedding ceremony" },
      { term: "Kanyadaan", pronunciation: "KAHN-yah-dahn", definition: "Ritual where bride's father gives her hand to the groom" },
      { term: "Baraat", pronunciation: "buh-RAHT", definition: "Groom's wedding procession with dancing and music" },
      { term: "Mehendi", pronunciation: "may-HEN-dee", definition: "Henna designs applied to bride's hands and feet" },
      { term: "Sangeet", pronunciation: "sun-GEET", definition: "Pre-wedding celebration with music, dancing, and performances" },
      { term: "Mangalsutra", pronunciation: "mun-gul-SOO-truh", definition: "Sacred necklace tied by groom, symbolizing marriage" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Wear vibrant colors! Red, pink, gold, green are all encouraged. Avoid white and black (colors of mourning)",
        "Weddings often span 2-3 days. Check which events you're invited to (Mehendi, Sangeet, ceremony, reception)",
        "Arrive on time for the ceremony. The muhurat (auspicious time) is calculated precisely and cannot be delayed",
        "Remove shoes before entering the mandap (ceremony area) if requested",
        "The ceremony is long (2-4 hours) with continuous Sanskrit mantras. It's okay to step out quietly if needed",
        "Bring cash gifts in amounts ending in '1' (e.g., $101, $501) for good luck. Place in decorative envelope",
        "Join the dancing at Sangeet and reception! Bollywood and bhangra dancing is expected and encouraged",
        "Vegetarian food is common. Respect dietary customs and don't bring outside food or alcohol unless permitted"
      ]
    },

    keyMoments: [
      {
        title: "Mehendi (Henna) Ceremony",
        description: "The bride's hands and feet are adorned with intricate henna designs, surrounded by female family and friends, often the night before the wedding."
      },
      {
        title: "Sangeet",
        description: "A night of music, dancing, and performances by family and friends. Think Bollywood-style choreography, DJ, and celebration."
      },
      {
        title: "Haldi Ceremony",
        description: "Turmeric paste is applied to the bride and groom by family for blessings, purification, and radiant skin."
      },
      {
        title: "Baraat (Groom's Procession)",
        description: "The groom arrives on horseback (or luxury car) with his family dancing through the streets to dhol drums. Pure energy and spectacle."
      },
      {
        title: "Milni (Meeting of Families)",
        description: "The bride's and groom's families formally meet and exchange garlands, symbolizing the union of two families."
      },
      {
        title: "Jai Mala (Garland Exchange)",
        description: "The bride and groom exchange floral garlands on stage, often with playful moments as families lift them up."
      },
      {
        title: "Kanyadaan",
        description: "The bride's father gives her hand in marriage. One of the most emotional moments of the ceremony."
      },
      {
        title: "Agni Puja & Saat Phere (Seven Circles)",
        description: "The couple circles the sacred fire seven times, taking vows for their life together."
      },
      {
        title: "Sindoor & Mangalsutra",
        description: "The groom applies vermillion to the bride's hair parting and ties the sacred necklace, marking her as married."
      },
      {
        title: "Bidaai (Bride's Farewell)",
        description: "The bride throws rice over her shoulder and says goodbye to her family. An emotional, tear-filled moment."
      },
      {
        title: "Reception",
        description: "Evening celebration with speeches, cake cutting, first dance, and often Bollywood DJ and dancing."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into elaborate attire. For the bride, this includes draping the sari or lehenga and jewelry. This is when I capture detail shots of your vibrant attire, jewelry, and mehendi designs.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots of your stunning attire, jewelry, mehendi designs, and any emotional moments with family. The colors and details of Indian weddings are incredible - I make sure to capture all of it in beautiful natural light."
      },
      {
        time: "30-45 min",
        title: "Baraat (Groom's Procession)",
        description: "The groom arrives on horseback or in a luxury car, accompanied by his family and friends dancing to dhol drums. Pure celebration and spectacle - one of the most energetic moments of the day.",
        whatIllBeDoing: "The Baraat is pure energy and joy. I position myself to capture the procession arriving, the dancing family members, the dhol drummers, and the groom's entrance. This requires mobile coverage - I'm moving with the procession to get dynamic shots of the celebration. The music, colors, and energy are incredible to film."
      },
      {
        time: "15-20 min",
        title: "Milni & Jai Mala",
        description: "The families meet and exchange garlands, followed by the bride and groom's garland exchange on stage. Often playful as families lift the couple to make it challenging.",
        whatIllBeDoing: "I'll capture the formal meeting of families and then the fun, playful moments of the Jai Mala. The families often lift you both up, making you reach for the garlands - these moments are joyful and full of laughter. I position myself to get both your reactions and the energy of your families."
      },
      {
        time: "2-4 hours",
        title: "Ceremony",
        description: "The Hindu wedding ceremony under the mandap includes sacred rituals guided by the pandit - Kanyadaan, circling the sacred fire seven times (Saat Phere), and the tying of the Mangalsutra. Each ritual carries deep spiritual significance.",
        whatIllBeDoing: "My other shooter and I capture the ceremony from multiple angles - the sacred fire, your faces during the Saat Phere, the emotional Kanyadaan when your father gives you away, and the Mangalsutra tying. We work respectfully around the mandap, capturing both wide shots of the rituals and close-ups of your emotions. The ceremony is long, but every moment matters.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits with both sides of the family. With large Indian families, this requires organization and patience.",
        whatIllBeDoing: "I work with the photo team to film family formals efficiently. Indian weddings often have large families and many groupings to capture. We'll have a shot list ready and work through it systematically so you can get to the reception. I aim for 30-45 minutes max."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy appetizers and drinks while you finish portraits or rest after the long ceremony. Music sets the tone for the evening celebration ahead.",
        whatIllBeDoing: "I'm capturing the vibrant décor, guest interactions, and the overall atmosphere. Indian wedding décor is always stunning - flowers, colors, lighting - and I make sure to document it all. If there's time, your planner and I will coordinate couple portraits during golden hour."
      },
      {
        time: "3-4 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, and dancing to Bollywood music. This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every key moment - your grand entrance, first dance (often choreographed!), speeches and toasts, cake cutting, and all the Bollywood dance floor energy. Indian receptions are incredibly fun to film - the music, dancing, and joy are infectious. We position ourselves to capture both the scheduled moments and spontaneous celebration.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Bidaai (Bride's Farewell)",
        description: "The emotional farewell as the bride leaves her family. She throws rice over her shoulder, symbolizing prosperity for her family. One of the most tear-filled moments of the day.",
        whatIllBeDoing: "The Bidaai is incredibly emotional - I position myself to capture both the bride's tears and her family's reactions. This moment requires sensitivity and closeness. I'll film the rice throwing, the hugs, and the departure. It's a beautiful, bittersweet moment that families treasure in the final film."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Hindu weddings typically span 2-4 days with multiple pre-wedding ceremonies and events",
        "The main ceremony can last 2-4 hours with continuous Sanskrit mantras and Vedic rituals",
        "Auspicious timing (muhurat) is determined by astrological calculations and is very important",
        "Regional variations exist—Punjabi, Gujarati, South Indian, and Bengali weddings have unique customs",
        "Vibrant colors are encouraged; red is traditional for brides, while white is avoided as it symbolizes mourning",
        "Guest lists are often large (200-500+) as extended family and community are central to celebrations"
      ]
    },

    commonQuestions: [
      {
        q: "What is the significance of the Saat Phere (seven circles)?",
        a: "The Saat Phere (seven circles around the sacred fire) are the core of a Hindu wedding ceremony. Each circle represents a vow for married life: nourishment, strength, prosperity, happiness, progeny, longevity, and harmony. The Agni (fire) serves as a divine witness to these promises. This ritual is considered the moment the couple is officially married."
      },
      {
        q: "What is Kanyadaan and why is it emotional?",
        a: "Kanyadaan literally means 'giving away the daughter' and is one of the most emotional moments of an Indian wedding. The bride's father (or parents) places her hand in the groom's, symbolizing the transfer of responsibility and blessing for the new union. It represents the parents entrusting their daughter to her new family and is often accompanied by tears and deep emotion."
      },
      {
        q: "What happens during the Baraat?",
        a: "The Baraat is the groom's wedding procession to the ceremony venue. Traditionally, the groom arrives on a decorated horse (though cars and elephants are also used) accompanied by family and friends dancing to dhol drums and music. This celebratory procession announces the groom's arrival and is greeted by the bride's family with the Milni ceremony, where both families formally meet and exchange garlands."
      },
      {
        q: "Why do Hindu weddings last so long?",
        a: "Hindu wedding ceremonies are long (2-4 hours) because they consist of numerous Vedic rituals, each with specific meaning and Sanskrit mantras. The pandit (priest) guides the couple through rituals like Ganesh Puja (removing obstacles), Kanyadaan (giving away the bride), Saat Phere (seven circles), and applying Sindoor and Mangalsutra. Each ritual cannot be rushed and must be performed at auspicious times."
      },
      {
        q: "What are the main differences between regional Indian weddings?",
        a: "Indian weddings vary significantly by region and community. North Indian (Punjabi/Hindi) weddings feature the Baraat and often more elaborate sangeet celebrations. South Indian weddings may include rituals like tying the Thali (sacred thread). Gujarati weddings have unique customs like the Garba dance. Bengali weddings involve rituals with a betel leaf. Despite differences, most include core elements like sacred fire, seven vows, and multi-day celebrations."
      }
    ]
  },

  "muslim": {
    title: "Muslim & Islamic Wedding Traditions",
    seoTitle: "Muslim Islamic Wedding Ceremony Guide | Understanding Islamic Wedding Traditions & Nikah",
    seoDescription: "Complete guide to Muslim and Islamic wedding traditions including the Nikah ceremony, Mahr, Walima, and cultural customs. Learn about Islamic marriage rituals and celebrations.",
    heroImage: "/weddings/muslim-wedding.jpg",

    introHeading: "Understanding the sacred Islamic marriage ceremony and celebrations.",
    introBody: "Muslim weddings center around the Nikah, a sacred marriage contract performed according to Islamic law (Sharia). While the Nikah ceremony itself is simple and often brief (20-30 minutes), celebrations can span multiple days with events like the Mehndi, Nikah, and Walima. Customs vary widely across cultures, from Pakistani and Bangladeshi to Arab, Turkish, and African Muslim traditions.",

    quickFacts: {
      duration: "20-30 minutes (Nikah ceremony), 2-3 days total with celebrations",
      venue: "Mosque, banquet hall, home, or outdoor venue",
      dressCode: "Modest formal attire; women often wear hijab, colorful shalwar kameez, or abaya. Men wear suits or kurta",
      guestCount: "50-500+ depending on culture and family size",
      musicStyle: "Nasheeds (Islamic songs), cultural music (varies by region), no instruments in strict traditional ceremonies"
    },

    glossary: [
      { term: "Nikah", pronunciation: "nih-KAH", definition: "Islamic marriage contract ceremony that legally and religiously binds the couple" },
      { term: "Mahr", pronunciation: "MAH-her", definition: "Mandatory gift from groom to bride, specified in marriage contract" },
      { term: "Walima", pronunciation: "wah-LEE-mah", definition: "Wedding banquet hosted by groom's family after the Nikah" },
      { term: "Qubool Hai", pronunciation: "kuh-BOOL high", definition: "'I accept' - the phrase spoken by bride and groom during Nikah" },
      { term: "Imam", pronunciation: "ih-MAHM", definition: "Islamic religious leader who often officiates the Nikah ceremony" },
      { term: "Rukhsati", pronunciation: "rook-suh-TEE", definition: "Bride's emotional farewell to her family" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Dress modestly. Women should cover shoulders, chest, and knees. Headscarf may be required in mosque or traditional settings",
        "Men and women may be seated separately during ceremony and reception. Respect this custom if present",
        "No alcohol will be served. This is a strict Islamic prohibition",
        "Remove shoes before entering a mosque or prayer area",
        "The Nikah ceremony is brief (20-30 minutes). Celebrations may be several hours or span multiple days",
        "Cash gifts are traditional and appreciated. Place in decorative envelope",
        "Photography may be restricted during the Nikah ceremony. Ask before taking photos",
        "Be respectful during prayers (dua). Remain quiet even if you don't participate"
      ]
    },

    keyMoments: [
      {
        title: "Istikhara (Prayer for Guidance)",
        description: "Before the engagement, families may perform this special prayer asking Allah for guidance about the union."
      },
      {
        title: "Mangni/Engagement",
        description: "Formal engagement where families meet, exchange gifts, and may present rings. The couple is considered engaged but not yet married."
      },
      {
        title: "Mehndi/Henna Night",
        description: "Pre-wedding celebration (often the night before) where the bride's hands and feet are decorated with intricate henna designs, surrounded by female family and friends with music and dancing."
      },
      {
        title: "Nikah Ceremony",
        description: "The Islamic marriage contract. An Imam or religious officiant leads the ceremony, which includes recitation of Quranic verses, the marriage proposal and acceptance, and signing of the Nikah Nama (marriage contract)."
      },
      {
        title: "Mahr (Dowry)",
        description: "A mandatory gift from the groom to the bride, specified in the Nikah contract. It can be money, property, or valuables and belongs solely to the bride."
      },
      {
        title: "Ijab-e-Qubool (Acceptance)",
        description: "The groom proposes marriage ('Qubool Hai', I accept) and the bride accepts, typically saying 'Qubool Hai' three times. This mutual consent is witnessed by two male witnesses or equivalent."
      },
      {
        title: "Dua (Prayer)",
        description: "Prayers for the couple's happiness, prosperity, and blessings are recited by the Imam and congregation."
      },
      {
        title: "Signing the Nikah Nama",
        description: "The bride and groom sign the official Islamic marriage contract in the presence of witnesses, making the marriage legally and religiously binding."
      },
      {
        title: "Walima (Reception)",
        description: "The wedding banquet hosted by the groom's family, traditionally held within three days after the Nikah. This is considered a Sunnah (practice of the Prophet Muhammad) and announces the marriage publicly."
      },
      {
        title: "Rukhsati (Bride's Departure)",
        description: "An emotional farewell as the bride leaves her family home to begin her new life with her husband. Often accompanied by Quran recitation and duas for protection."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into attire - whether that's a colorful shalwar kameez, lehenga, or traditional dress from your cultural background. This is when I capture detail shots of your attire, jewelry, and mehendi designs.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots in natural light - your attire, jewelry, mehendi designs if you have them, and the Nikah Nama document. I also capture candid emotional moments with family as you prepare for this sacred commitment."
      },
      {
        time: "30 min before",
        title: "Guests Arrive & Pre-Ceremony",
        description: "Guests arrive and are seated. In traditional ceremonies, men and women may be seated separately. The Imam prepares, and family gathers for the Nikah ceremony to begin.",
        whatIllBeDoing: "I'll be setting up ceremony audio - wireless mics on the Imam and groom to capture the vows, Mahr discussion, and Qubool Hai clearly. If there's gender separation, my team positions ourselves to respect those boundaries while ensuring both sides are documented. Final tech checks and we're ready."
      },
      {
        time: "20-30 min",
        title: "Nikah Ceremony",
        description: "The Islamic marriage contract ceremony. The Imam leads recitation of Quranic verses, the Mahr is specified, and both bride and groom say 'Qubool Hai' (I accept) to formalize the marriage. The Nikah Nama is signed by the couple and witnesses.",
        whatIllBeDoing: "The Nikah is brief but sacred. My other shooter and I capture the Imam's recitation, your faces during the vows, the moment you both say 'Qubool Hai,' and the signing of the Nikah Nama. We work respectfully, especially in mosque settings, to document this meaningful ceremony without being intrusive. Audio is critical to capture the vows and prayers clearly.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits with both sides of the family. Wedding party photos happen here too. We work efficiently to get you to the celebration.",
        whatIllBeDoing: "I work with the photo team to film family formals efficiently. We'll have a shot list prepared with your planner and work through it systematically. In traditional weddings with gender separation, we coordinate respectfully to capture family groupings. I aim for 30-45 minutes max so you can enjoy the Walima."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour (or Pre-Reception Gathering)",
        description: "Guests enjoy mocktails and appetizers while you finish portraits. No alcohol is served, in accordance with Islamic tradition. Music or nasheeds provide atmosphere.",
        whatIllBeDoing: "I'm capturing candid guest interactions, the beautiful décor, and the overall atmosphere. Muslim weddings often have stunning décor with rich colors and elegant details. If there's time and light permits, your planner and I will coordinate for golden hour couple portraits."
      },
      {
        time: "3-4 hours",
        title: "Walima (Reception)",
        description: "The wedding banquet celebration includes your grand entrance, speeches and duas, dinner service, cake cutting, and dancing (if part of your cultural tradition). This is where the community celebrates your marriage and offers blessings.",
        whatIllBeDoing: "My team and I capture every key moment of the Walima - your grand entrance, duas and blessings from family and the Imam, speeches, cake cutting, and any cultural dances or performances. We position ourselves respectfully, especially if there's gender separation, to document both the formal moments and candid joy throughout the celebration.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Rukhsati (Bride's Farewell)",
        description: "The emotional farewell as the bride leaves her family. Quran recitation and duas are offered for protection and blessings. One of the most tear-filled moments of the day.",
        whatIllBeDoing: "The Rukhsati is incredibly emotional - I position myself to capture both the bride's tears and her family's reactions as she departs. I'll film the Quran being held over her head, the hugs with family, and the departure. This moment requires sensitivity and closeness to capture the raw emotion that families treasure in the final film."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "The Nikah ceremony is the actual Islamic marriage contract and is required; all other events are cultural celebrations",
        "Men and women are often separated during the Nikah and celebrations in more traditional ceremonies",
        "Alcohol is prohibited in Islamic tradition and typically not served at Muslim weddings",
        "Modest dress is expected; women often wear hijabs and both genders dress conservatively",
        "Cultural practices vary widely—Pakistani/South Asian, Arab, Turkish, Persian, and African Muslim weddings each have unique customs",
        "The Mahr (bride's gift) is a religious requirement and represents the groom's commitment and the bride's financial security"
      ]
    },

    commonQuestions: [
      {
        q: "What is the Nikah ceremony?",
        a: "The Nikah is the Islamic marriage contract and the most important part of a Muslim wedding. Led by an Imam, it includes the marriage proposal (Ijab), acceptance (Qubool) by both parties, specification of the Mahr (bride's gift), recitation of Quranic verses, and signing of the marriage contract. The ceremony is relatively brief (20-30 minutes) but is the religious and legal binding of the marriage in Islam."
      },
      {
        q: "What is Mahr and why is it important?",
        a: "Mahr is a mandatory gift from the groom to the bride, specified in the Islamic marriage contract. It can be money, jewelry, property, or anything of value. The Mahr belongs exclusively to the bride and represents her financial security and the groom's commitment. The amount is agreed upon before the Nikah and can be given immediately or deferred. It's a religious obligation, not optional."
      },
      {
        q: "Why are men and women sometimes separated at Muslim weddings?",
        a: "In more traditional or conservative Muslim communities, gender separation during celebrations honors Islamic principles of modesty (hijab). The level of separation varies by culture and family—some weddings have completely separate halls, others have divided sections, and more liberal celebrations may be mixed. The Nikah ceremony itself may be mixed or separated depending on cultural tradition."
      },
      {
        q: "What is the Walima and is it required?",
        a: "The Walima is the wedding banquet or reception traditionally hosted by the groom's family after the Nikah. It's considered a Sunnah (recommended practice following the Prophet Muhammad's example) and serves to publicly announce the marriage to the community. While not religiously mandatory like the Nikah, it's highly encouraged and is an important part of Islamic wedding tradition."
      },
      {
        q: "How do Muslim weddings differ across cultures?",
        a: "While the Nikah ceremony follows Islamic law, cultural practices vary significantly. South Asian Muslim weddings (Pakistani, Indian, Bangladeshi) often include elaborate multi-day celebrations with Mehndi, Baraat, and colorful attire. Arab weddings may feature traditional dabke dancing and zaffe (grand entrance). Turkish weddings include the henna night and flag ceremony. Persian weddings feature the sofreh aghd (ceremonial spread). Despite cultural differences, all include the essential Nikah ceremony."
      }
    ]
  },

  "greek-orthodox": {
    title: "Greek Orthodox Wedding Traditions",
    seoTitle: "Greek Orthodox Wedding Ceremony Guide | Understanding Greek Wedding Traditions & Customs",
    seoDescription: "Complete guide to Greek Orthodox wedding traditions including the Stefana crowning, Koufeta, and Greek wedding customs. Learn about the sacred ceremony and celebrations.",
    heroImage: "/weddings/greek-wedding.jpg",

    introHeading: "Ancient traditions meet sacred ceremony in Greek Orthodox weddings.",
    introBody: "Greek Orthodox weddings are deeply rooted in Byzantine Christian tradition and rich with symbolism. The ceremony, called the Sacrament of Holy Matrimony, typically lasts 45-60 minutes and includes ancient rituals like the crowning of the couple, the common cup, and the ceremonial walk. Greek weddings are known for their vibrant celebrations, traditional music, dancing, and the famous 'Opa!' spirit.",

    quickFacts: {
      duration: "45-60 minutes for the ceremony, plus 3-5 hours for the reception",
      venue: "Greek Orthodox church (ceremony must be in an Orthodox church)",
      dressCode: "Formal or cocktail attire; women should have shoulders covered in church",
      guestCount: "Typically 100-300 guests; Greek weddings are known for large, festive celebrations",
      musicStyle: "Byzantine hymns during ceremony, traditional Greek music (bouzouki, clarinet) and dancing at reception"
    },

    glossary: [
      { term: "Stefana", pronunciation: "steh-FAH-nah", definition: "Wedding crowns joined by ribbon, placed on couple's heads symbolizing glory and honor" },
      { term: "Koumbaro/Koumbara", pronunciation: "koom-BAH-roh / koom-BAH-rah", definition: "Male/female sponsor (like best man/maid of honor) who becomes couple's lifelong spiritual advisor" },
      { term: "Koufeta", pronunciation: "koo-FEH-tah", definition: "Sugar-coated almonds given to guests in odd numbers, symbolizing life's bittersweet moments" },
      { term: "Sacrament of Holy Matrimony", pronunciation: "", definition: "The official name for the Greek Orthodox wedding ceremony" },
      { term: "Isaiah Dance", pronunciation: "", definition: "Three ceremonial walks around the altar led by the priest, symbolizing the couple's eternal journey" },
      { term: "Kalamatiano", pronunciation: "kah-lah-mah-tee-AH-no", definition: "Traditional Greek circle dance performed at weddings and celebrations" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Arrive 15-20 minutes early. Greek Orthodox ceremonies are punctual and seating may fill quickly",
        "Dress modestly for church. Women should cover shoulders; bring a shawl or cardigan if needed",
        "The ceremony is in Greek and English. Follow along with the program and stand/sit when others do",
        "Photography may be restricted during certain sacred moments. Respect church policies",
        "If you're not Orthodox, you may remain seated during Communion or go forward for a blessing",
        "The ceremony is long (45-60 minutes). Avoid leaving early out of respect",
        "At the reception, expect traditional Greek music, dancing, plate smashing, and lots of 'Opa!' Join in the fun",
        "Bring a monetary gift in a card or give a check. Red envelopes are not traditional for Greek weddings"
      ]
    },

    keyMoments: [
      {
        title: "Betrothal/Engagement Ceremony",
        description: "The first part of the wedding where rings are blessed and exchanged three times between the bride and groom by the Koumbaro/Koumbara (sponsor), symbolizing the Holy Trinity."
      },
      {
        title: "The Blessing of the Rings",
        description: "The priest blesses the wedding rings on the altar, and the best man (Koumbaro) exchanges them three times over the couple's heads before placing them on their right hands."
      },
      {
        title: "The Sacrament of Marriage",
        description: "The main ceremony begins with readings from the Epistles and Gospel, followed by prayers for the couple. This is when the marriage is officially blessed by the Church."
      },
      {
        title: "The Crowning (Stefana)",
        description: "The most iconic moment—two crowns (stefana) connected by a ribbon are placed on the couple's heads, representing glory, honor, and the crowns of martyrdom for the sacrifices marriage requires. The Koumbaro exchanges them three times over the couple's heads."
      },
      {
        title: "The Common Cup",
        description: "The couple shares wine from a common cup three times, symbolizing the sharing of life's joys and sorrows. The wine represents the Blood of Christ and the couple's union."
      },
      {
        title: "The Isaiah Dance (Dance of Isaiah)",
        description: "The priest leads the newly crowned couple in three circular walks around the altar table while the congregation sings. This represents the beginning of their eternal journey together and the dance of Isaiah around the altar."
      },
      {
        title: "Removal of the Crowns",
        description: "The priest removes the stefana and offers blessings, praying that the couple's marriage will be as strong as the martyrs and saints who have been crowned in heaven."
      },
      {
        title: "The Benediction",
        description: "Final prayers and blessings are offered, and the couple receives the priest's blessing before being presented as husband and wife."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into attire. This is when I capture detail shots (rings, stefana crowns, dress, shoes, koufeta) and candid moments of you getting ready.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, so we capture both of you getting ready simultaneously. I'll film detail shots in natural light - the wedding rings, the stefana crowns (which are beautiful and ornate), your dress, shoes, and any special family heirlooms. The stefana are particularly important to document artistically given their significance."
      },
      {
        time: "1 hour before",
        title: "First Look (Optional)",
        description: "Many couples choose a private first look before the ceremony to ease nerves and get portraits done early. This moment is just for you two.",
        whatIllBeDoing: "If you're doing a first look, my other shooter and I will capture the reveal and your reactions from multiple angles. This gives us 30-45 minutes of couple portraits before the ceremony starts, which takes pressure off the post-ceremony timeline. Your planner and I will coordinate to keep things flowing smoothly."
      },
      {
        time: "30 min before",
        title: "Guests Arrive & Pre-Ceremony",
        description: "Guests arrive and are seated. The church fills with anticipation. The priest and Koumbaro/Koumbara prepare for the ceremony to begin.",
        whatIllBeDoing: "I'll be setting up ceremony audio - wireless mics on the priest and groom to capture the bilingual ceremony (Greek and English), vows, and blessings clearly. My team positions ourselves strategically in the church, respecting the sacred space while ensuring we capture every important moment. Final tech checks and we're ready."
      },
      {
        time: "45-60 min",
        title: "Ceremony",
        description: "The Sacrament of Holy Matrimony includes the betrothal, blessing of rings, the iconic crowning with stefana, sharing the common cup, and the Isaiah Dance around the altar. Rich with Byzantine Christian symbolism and tradition.",
        whatIllBeDoing: "My other shooter and I capture multiple angles throughout the ceremony - the ring exchange by the Koumbaro/Koumbara, the crowning with stefana (one of the most iconic moments), the common cup, and the Isaiah Dance as you walk around the altar three times. We position ourselves to respect the sacred nature of the Orthodox ceremony while documenting every meaningful ritual. The bilingual nature requires excellent audio capture.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits at the church or venue. The stefana often stay on for some portraits. Wedding party and family photos are taken efficiently.",
        whatIllBeDoing: "I work with the photo team to film family formals and couple portraits efficiently. Greek families are often large and close-knit, so we'll have an organized shot list. Some couples keep the stefana on for portraits, which makes for beautiful images. I aim for 30-45 minutes max for all group coverage."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy drinks, appetizers, and ouzo while you finish portraits. Greek music may play as everyone mingles and the celebration energy builds.",
        whatIllBeDoing: "I'm capturing candid guest interactions, Greek décor details, and the overall atmosphere. Greek weddings have beautiful aesthetic details - from the blue and white color schemes to traditional decorations. If timing works with sunset, your planner and I will coordinate to grab those golden hour couple portraits."
      },
      {
        time: "3-4 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, traditional Greek dancing (Kalamatiano, Hasapiko), plate smashing, and lots of 'Opa!' This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every key moment - from your grand entrance to the traditional Greek dances. Greek receptions are incredibly energetic and joyful - the circle dances, plate smashing, and 'Opa!' moments are pure celebration. We position ourselves to get both the organized moments (first dance, toasts, cake cutting) and the spontaneous joy of Greek dancing and celebration throughout the night.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Last Dance & Sendoff",
        description: "Final songs, last dance, and your exit. Whether it's sparklers or a traditional Greek sendoff, this is your grand goodbye.",
        whatIllBeDoing: "I'll coordinate the exit timing with your planner to make sure everything's ready. I'll set up lighting for sparkler or exit shots and capture both wide and tight shots of the sendoff, your final waves, and the car pulling away. Before I leave, I always find you to say my goodbyes, give hugs, and share my thanks and blessings."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "The Koumbaro/Koumbara (male/female sponsor, like a best man/maid of honor) plays a crucial role and becomes the couple's spiritual sponsor for life",
        "The wedding crowns (stefana) are often kept as family heirlooms and displayed in the couple's home",
        "Greek Orthodox weddings typically cannot take place during Lent or on certain holy days",
        "Both bride and groom must be baptized Orthodox Christian, or one must convert before the wedding",
        "The reception often features traditional Greek music, the Kalamatiano dance, plate breaking/smashing, and shouting 'Opa!'",
        "Koufeta (sugar-coated almonds) are given to guests in odd numbers (usually 5 or 7) symbolizing wishes for the couple"
      ]
    },

    commonQuestions: [
      {
        q: "What is the significance of the Stefana (crowns)?",
        a: "The Stefana are ceremonial crowns joined by a ribbon, representing the glory and honor bestowed upon the couple as they become king and queen of their own domestic church. They also symbolize the martyrdom of marriage—the sacrifices spouses make for each other. The crowns are a visible sign of God's blessing and the couple's new roles. Many couples preserve their stefana as precious family heirlooms."
      },
      {
        q: "What role does the Koumbaro/Koumbara play?",
        a: "The Koumbaro (male) or Koumbara (female) is more than a best man or maid of honor—they're a spiritual sponsor who participates actively in the ceremony. They exchange the rings and crowns three times over the couple's heads, assist throughout the ceremony, and become lifelong spiritual advisors to the couple and often godparents to their children. This is a sacred, lifelong bond of responsibility."
      },
      {
        q: "Why do the couple walk around the altar three times?",
        a: "The Isaiah Dance (also called the Dance of Isaiah) involves the priest leading the couple in three circular walks around the altar table. This represents their first steps as a married couple on their eternal journey together. The three circles honor the Holy Trinity, and the circular motion symbolizes the eternity of their marriage bond with no beginning and no end."
      },
      {
        q: "What are Koufeta and why are they given in odd numbers?",
        a: "Koufeta are sugar-coated almonds traditionally given to wedding guests in odd numbers (5 or 7 pieces). Each almond in a set of five represents a wish: health, wealth, happiness, fertility, and long life. Odd numbers are indivisible, symbolizing that the couple will remain undivided. The bitter almond coated in sweet sugar represents life's bitter and sweet moments that the couple will share."
      },
      {
        q: "Can non-Orthodox people have a Greek Orthodox wedding?",
        a: "For a valid Greek Orthodox wedding, at least one partner must be a baptized member of the Orthodox Church. If one partner is not Orthodox, they may need to convert before the wedding, though requirements vary by jurisdiction. The Church typically does not perform interfaith marriages, though some exceptions may be made. Couples should consult with their parish priest well in advance."
      }
    ]
  },

  "chinese": {
    title: "Chinese Wedding Traditions",
    seoTitle: "Chinese Wedding Ceremony Guide | Understanding Traditional Chinese Wedding Customs & Tea Ceremony",
    seoDescription: "Complete guide to Chinese wedding traditions including the tea ceremony, door games, red envelopes, and traditional customs. Learn about modern and traditional Chinese weddings.",
    heroImage: "/weddings/chinese-wedding.jpg",

    introHeading: "Ancient customs blended with modern celebrations.",
    introBody: "Chinese weddings beautifully blend thousands of years of tradition with contemporary celebrations. From the symbolic tea ceremony and elaborate door games to the vibrant red color symbolizing luck and prosperity, Chinese weddings are rich with meaning. Modern Chinese weddings often combine traditional Chinese customs with Western elements, creating unique multi-cultural celebrations that honor heritage while embracing modernity.",

    quickFacts: {
      duration: "Full day event (4-8 hours) with morning pickup, tea ceremony, and evening banquet",
      venue: "Hotel banquet hall, restaurant, or outdoor venue; tea ceremony often at family homes",
      dressCode: "Formal attire; avoid white, black, or red (reserved for bride). Guests often wear bright, festive colors",
      guestCount: "100-400 guests; Chinese weddings tend to be large with extended family and family friends",
      musicStyle: "Traditional Chinese instruments (erhu, guzheng) for ceremony; mix of pop and traditional at reception"
    },

    glossary: [
      { term: "Jing Cha", pronunciation: "jing chah", definition: "Tea ceremony where couple serves tea to elders, receiving blessings and red envelopes" },
      { term: "Hongbao", pronunciation: "hong-bow", definition: "Red envelopes containing money, given as wedding gifts in even amounts (avoiding 4)" },
      { term: "Qipao/Cheongsam", pronunciation: "chee-pow / chong-sahm", definition: "Traditional Chinese dress, typically red, worn by the bride" },
      { term: "Guo Da Li", pronunciation: "gwoh dah lee", definition: "Door games where groom and groomsmen complete challenges to 'earn' the bride" },
      { term: "San Bai", pronunciation: "sahn bye", definition: "Three bows performed in traditional ceremonies to heaven/earth, parents, and each other" },
      { term: "Shang Tou", pronunciation: "shahng toh", definition: "Hair combing ceremony performed the night before wedding for good fortune" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Never wear white, black, or red. White and black symbolize mourning; red is reserved for the bride",
        "Bring a red envelope (hongbao) with money as a gift. Use new bills in even amounts (avoid number 4)",
        "Arrive on time. Chinese banquets often start promptly with many courses planned",
        "The bride may change outfits 3-4 times throughout the day. This is normal and expected",
        "Expect a long, elaborate banquet (8-10 courses). Pace yourself and enjoy each dish",
        "The couple will visit each table to toast. Have your drink ready and stand to toast back",
        "Games and activities may happen during the banquet. Participate with enthusiasm",
        "Don't gift clocks, scissors, umbrellas, or anything in sets of 4. These are considered bad luck"
      ]
    },

    keyMoments: [
      {
        title: "Hair Combing Ceremony (Shang Tou)",
        description: "The night before the wedding, the bride's hair is combed four times by a woman of good fortune while blessings are recited. Each stroke represents a blessing: a long-lasting marriage, harmony, children, and good fortune."
      },
      {
        title: "Door Games (Guo Da Li)",
        description: "The groom and groomsmen must pass playful challenges set by the bridesmaids before 'earning' access to the bride. Games may include push-ups, trivia about the bride, karaoke, or eating spicy/sour foods. Red envelopes (hongbao) are often used to bribe their way through."
      },
      {
        title: "Bride Pickup and Procession",
        description: "The groom arrives at the bride's home to formally collect her. The bride may playfully refuse to leave, and the groom must persuade her (sometimes with gifts or promises). Her family sees her off with tears and well wishes."
      },
      {
        title: "Tea Ceremony (Jing Cha)",
        description: "One of the most important traditions—the couple serves tea to their elders (parents, grandparents, aunts, uncles) in order of seniority, kneeling or bowing respectfully. In return, elders offer red envelopes with money and jewelry, officially welcoming them into the family."
      },
      {
        title: "The Wedding Ceremony",
        description: "Modern Chinese weddings may have a Western-style ceremony with vows and ring exchange, a traditional Chinese ceremony, or both. The bride often wears a white Western gown for the ceremony."
      },
      {
        title: "Three Bows (San Bai)",
        description: "In traditional ceremonies, the couple bows three times: first to heaven and earth, second to their parents, and third to each other, symbolizing respect and commitment."
      },
      {
        title: "Costume Changes",
        description: "The bride typically changes into multiple outfits throughout the day—often starting with a white Western gown, then changing into a traditional red qipao or cheongsam, and sometimes a third glamorous evening gown."
      },
      {
        title: "The Banquet",
        description: "An elaborate multi-course dinner (often 8-10 courses, as 8 is a lucky number) where the couple toasts each table of guests. Speeches, games, and entertainment are common. The number of dishes is always even, symbolizing good fortune for the couple."
      },
      {
        title: "Gate Crashing/Reception Entrance",
        description: "The couple makes a grand entrance to the banquet, sometimes with special effects, music, and choreography. They move from table to table, toasting guests and receiving red envelopes."
      },
      {
        title: "Wedding Night Traditions",
        description: "Traditional customs include having children jump on the marriage bed for fertility, eating sweet desserts like tangyuan (glutinous rice balls) for harmony, and the bride entering the groom's home stepping over a saddle and charcoal for safety."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into the first outfit (often Western attire). This is when I capture detail shots of your dress, jewelry, red envelopes, and any traditional items.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots - your attire (especially the red qipao/cheongsam if you're wearing it), jewelry, tea ceremony set, red envelopes, and any family heirlooms. The vibrant red and gold colors are beautiful to capture."
      },
      {
        time: "1-2 hours",
        title: "Door Games & Bride Pickup",
        description: "The groom and groomsmen arrive at the bride's home to complete playful challenges set by the bridesmaids before they can 'collect' the bride. Red envelopes and lots of laughter are involved.",
        whatIllBeDoing: "The door games are so much fun to film - pure energy and laughter. I'll capture the challenges, the negotiation, the red envelope bribes, and everyone's reactions. This is one of the most entertaining parts of a Chinese wedding. I position myself to get both the groomsmen's struggle and the bridesmaids' mischievous joy."
      },
      {
        time: "45-60 min",
        title: "Tea Ceremony (Jing Cha)",
        description: "One of the most sacred moments - the couple serves tea to elders in order of seniority, kneeling or bowing respectfully. Elders offer blessings and red envelopes, officially welcoming the couple into the family.",
        whatIllBeDoing: "The tea ceremony is incredibly meaningful and emotional. I'll capture each elder being served tea, the couple kneeling, the exchanges of red envelopes, and the emotions on everyone's faces. This requires sensitivity and respect - I position myself to document without intruding on these intimate family moments."
      },
      {
        time: "30-45 min",
        title: "Ceremony",
        description: "The wedding ceremony, which may be Western-style with vows and rings, traditional Chinese with San Bai (three bows), or a combination of both.",
        whatIllBeDoing: "My other shooter and I capture multiple angles of the ceremony - whether it's Western vows, traditional bowing, or both. Chinese weddings often blend traditions beautifully, and we document it all. If you're doing costume changes between ceremony and reception, I'll capture those transitions as well.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits with both sides of the family. Chinese families are often large, so this requires organization and efficiency.",
        whatIllBeDoing: "I work with the photo team to film family formals efficiently. Chinese weddings often have large extended families with many groupings to capture. We'll have a shot list ready and work through it systematically. I aim for 30-45 minutes max so you can prepare for the banquet."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour (or Interlude)",
        description: "Guests enjoy appetizers and drinks while you finish portraits or change into your next outfit. The bride may change from Western gown to traditional red qipao.",
        whatIllBeDoing: "I'll capture you changing into the traditional red qipao if that's part of your plan - these moments of transformation are beautiful. Meanwhile, I'm also documenting the décor (red and gold details are always stunning), guest interactions, and building anticipation for the banquet."
      },
      {
        time: "3-4 hours",
        title: "Reception (Banquet)",
        description: "The evening celebration includes your grand entrance, the elaborate multi-course dinner (8-10 courses), table-to-table toasts with guests, speeches, games, and possibly more costume changes. This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every moment of the banquet - your grand entrance (often elaborate with special effects), each table toast as you move through the room, the beautiful food presentation, speeches, games, and your costume changes if you have more. Chinese banquets are long and filled with tradition - we pace ourselves to stay energized throughout and capture both the formal moments and candid joy.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Farewell & Sendoff",
        description: "Final toasts, farewells to family, and your departure. Traditional couples may have additional customs as the bride enters her new home.",
        whatIllBeDoing: "I'll capture your final moments with guests, the emotional farewells with family, and your departure. If you're incorporating traditional customs at the groom's home (stepping over saddle, entering the home), we can coordinate coverage of those moments as well."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Red is the primary wedding color symbolizing luck, joy, and prosperity—never wear white or black to a Chinese wedding as they symbolize mourning",
        "The number 8 is extremely lucky (sounds like 'prosperity'), while 4 is unlucky (sounds like 'death')—this affects dates, guest counts, and gift amounts",
        "Red envelopes (hongbao) with money are traditional gifts; amounts should be even numbers (except 4) and given in new bills",
        "Many couples have two ceremonies—one traditional Chinese and one Western-style—and the bride may change outfits 3-4 times",
        "The tea ceremony is one of the most important moments and deeply symbolic of family unity and respect",
        "Gifts of clocks, scissors, or umbrellas are considered bad luck and should never be given"
      ]
    },

    commonQuestions: [
      {
        q: "Why is red so important in Chinese weddings?",
        a: "Red is the most auspicious color in Chinese culture, symbolizing luck, joy, happiness, and prosperity. The bride traditionally wears a red qipao or cheongsam, decorations are predominantly red and gold, and even invitations may be red. Red is believed to ward off evil spirits and bring good fortune to the marriage. This is why guests should never wear red to a Chinese wedding—it's reserved for the bride."
      },
      {
        q: "What is the tea ceremony and why is it so important?",
        a: "The tea ceremony (Jing Cha) is when the couple serves tea to their elders and family members in order of seniority, often kneeling or bowing as a sign of respect. It's a formal way of introducing the bride and groom to each side of the family and symbolizes the joining of two families. Elders give red envelopes and jewelry in return, officially welcoming the couple. This ritual is considered one of the most meaningful Chinese wedding traditions."
      },
      {
        q: "What are the door games and why do they happen?",
        a: "Door games are playful challenges the groom and groomsmen must complete before the groom can see and collect his bride. Set up by the bridesmaids, they may include physical challenges, answering questions about the bride, eating spicy food, or singing songs. The groom typically offers red envelopes (bribes) to pass through. This tradition symbolizes that the bride is precious and the groom must prove his worth and dedication."
      },
      {
        q: "Why do brides change outfits multiple times?",
        a: "Multiple outfit changes showcase different aspects of the bride and honor both traditional and modern customs. Typically, she wears a white Western gown for the ceremony, a traditional red qipao/cheongsam (often heavily embroidered with gold) for the tea ceremony and formal photos, and sometimes a glamorous evening gown for the reception. Each outfit represents a different cultural influence and moment of the celebration."
      },
      {
        q: "What should I give as a wedding gift at a Chinese wedding?",
        a: "Red envelopes (hongbao) with money are the traditional and most appreciated gift. Give amounts in even numbers (except 4, which is unlucky), preferably containing the lucky number 8. Use new, crisp bills and never give coins. The amount should cover your meal cost plus a gift amount. Physical gifts like clocks (symbolize death), scissors/knives (cutting ties), or umbrellas (breaking up) should be avoided."
      }
    ]
  },

  "nigerian": {
    title: "Nigerian Wedding Traditions",
    seoTitle: "Nigerian Wedding Ceremony Guide | Understanding Nigerian & West African Wedding Traditions",
    seoDescription: "Complete guide to Nigerian wedding traditions including traditional engagement, bride price, cultural attire, and vibrant celebrations across Yoruba, Igbo, and Hausa cultures.",
    heroImage: "/weddings/nigerian-wedding.jpg",

    introHeading: "Vibrant celebrations honoring family, culture, and unity.",
    introBody: "Nigerian weddings are spectacular multi-day celebrations filled with color, music, dancing, and rich cultural traditions. Nigeria has over 250 ethnic groups, with Yoruba, Igbo, and Hausa being the largest, each with unique wedding customs. Most Nigerian weddings include a traditional ceremony (with cultural attire and rituals), a white wedding (Western-style church ceremony), and an elaborate reception with entertainment, food, and dancing.",

    quickFacts: {
      duration: "Multiple events over 2-3 days; traditional ceremony 3-5 hours, reception 4-6 hours",
      venue: "Family compound or event hall for traditional ceremony; church for white wedding; hotel for reception",
      dressCode: "Aso ebi (matching family fabric) or formal Nigerian attire for traditional; formal Western for white wedding",
      guestCount: "300-1000+ guests; Nigerian weddings emphasize large family and community gatherings",
      musicStyle: "Live drummers, highlife, Afrobeats, juju music, traditional folk songs, and contemporary Nigerian pop"
    },

    glossary: [
      { term: "Aso Ebi", pronunciation: "ah-SHOH eh-BEE", definition: "Matching fabric worn by family groups to show unity; often elaborate lace or ankara" },
      { term: "Igba Nkwu", pronunciation: "ee-gbah n-KWOO", definition: "Traditional Igbo engagement/wine carrying ceremony" },
      { term: "Lobola", pronunciation: "loh-BOH-lah", definition: "Bride price; gifts and money presented by groom's family to bride's family" },
      { term: "Gele", pronunciation: "geh-LEH", definition: "Elaborate head wrap worn by women, tied in intricate styles" },
      { term: "Ankara", pronunciation: "ahn-KAH-rah", definition: "Colorful African wax print fabric with vibrant patterns" },
      { term: "Alaga", pronunciation: "ah-LAH-gah", definition: "Traditional Yoruba MC/coordinator who guides the ceremony proceedings" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Purchase and wear aso ebi if invited to do so. It shows respect and solidarity with the family",
        "Bring a monetary gift. Cash in an envelope or bank transfer is customary and appreciated",
        "Arrive on time for the traditional ceremony, but expect the event to start late (Nigerian time is flexible)",
        "Expect long, multi-part celebrations. Bring energy for dancing and celebrating",
        "Participate in money spraying during dancing. Bring small bills to throw or place on the couple",
        "The bride will change outfits multiple times. Each entrance is a celebration in itself",
        "Food will be plentiful. Expect traditional Nigerian dishes like jollof rice, pounded yam, and pepper soup",
        "Respect elders. Stand when they enter, greet them properly, and show deference throughout"
      ]
    },

    keyMoments: [
      {
        title: "Introduction Ceremony (Ikutu Aka/Knocking on the Door)",
        description: "The groom's family formally visits the bride's family to express their son's intention to marry. This is the official first step, where both families meet and discuss the union."
      },
      {
        title: "Bride Price Negotiation (Lobola/Wine Carrying)",
        description: "A significant tradition where the groom's family presents gifts, money, and items requested by the bride's family. This is not 'buying' the bride but honoring her family and showing the groom's commitment and ability to provide."
      },
      {
        title: "Traditional Engagement (Igba Nkwu/Idana)",
        description: "An elaborate ceremony with both families dressed in traditional attire (aso ebi). The bride is 'presented' to guests, prayers are offered, and the bride price is formally accepted. This is often the most colorful and cultural-rich ceremony."
      },
      {
        title: "Bride's Grand Entrance",
        description: "The bride makes multiple grand entrances in different traditional outfits, often accompanied by bridesmaids and female family members dancing to traditional music. Her face may be veiled until a specific moment."
      },
      {
        title: "Wine Carrying/Searching for the Groom",
        description: "A playful tradition where the bride is given a cup of palm wine and must find her groom among the guests while blindfolded or with her face covered. When she finds him, she offers him the wine, and he drinks to accept her."
      },
      {
        title: "Kola Nut Breaking",
        description: "In Igbo tradition, the breaking and sharing of kola nuts symbolizes hospitality, good fortune, and the joining of families. The eldest person typically breaks the kola nut while prayers are said."
      },
      {
        title: "Prayer and Blessings",
        description: "Elders from both families offer prayers and blessings for the couple's marriage, fertility, prosperity, and happiness. This is a deeply respected moment."
      },
      {
        title: "White Wedding Ceremony",
        description: "Many Nigerian couples also have a Western-style church wedding (Christian) or Islamic Nikah ceremony. The bride wears a white gown, and the ceremony follows traditional Western or Islamic customs."
      },
      {
        title: "The Reception",
        description: "An extravagant celebration with live music, DJs, traditional drummers, elaborate meals, and energetic dancing. Guests 'spray' money on the dancing couple by throwing cash or placing bills on their foreheads—a sign of blessing and celebration."
      },
      {
        title: "Cake Cutting and First Dance",
        description: "Western-influenced traditions incorporated into modern Nigerian weddings, often with elaborate multi-tiered cakes and choreographed dances."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into elaborate traditional attire - aso ebi, gele (head wrap), and stunning African fabrics. This is when I capture detail shots of your vibrant attire, jewelry, and traditional items.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots - the gorgeous aso ebi fabrics, the intricate gele tying process, jewelry, traditional accessories, and any ceremonial items. Nigerian weddings have incredible colors and textures that are stunning on film."
      },
      {
        time: "1 hour before",
        title: "Traditional Ceremony Begins",
        description: "The traditional engagement ceremony starts with both families arriving in coordinated aso ebi. Prayers are offered, and the celebration begins with music and dancing.",
        whatIllBeDoing: "I'll capture the arrival of both families in their beautiful matching aso ebi, the setup of the traditional ceremony space, and the energy as guests arrive. The colors, fabrics, and sense of community are incredible to document. I position myself to capture both wide shots of the gathering and intimate family moments."
      },
      {
        time: "2-3 hours",
        title: "Traditional Ceremony (Igba Nkwu/Traditional Engagement)",
        description: "The cultural ceremony includes the bride's grand entrances in multiple traditional outfits, wine carrying tradition (searching for the groom), bride price presentation, kola nut breaking, prayers, and blessings from elders.",
        whatIllBeDoing: "My other shooter and I capture every element of the traditional ceremony - the bride's multiple grand entrances with her entourage dancing, the wine carrying as she searches for you, the bride price presentation, kola nut breaking, and elder blessings. Nigerian traditional ceremonies are incredibly vibrant and energetic - we position ourselves to capture the pageantry, colors, dancing, and emotional moments. Each outfit change is an event in itself.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits with both sides of the family in their traditional attire. Nigerian families are large, so this requires organization.",
        whatIllBeDoing: "I work with the photo team to film family formals efficiently. The aso ebi creates stunning unified looks for group photos. With large Nigerian families, we'll have an organized shot list and work through it systematically. The vibrant colors make for beautiful portraits."
      },
      {
        time: "1 hour",
        title: "Interlude / Preparation for Reception",
        description: "Break between traditional ceremony and reception. The couple may rest or change into reception attire. Guests continue celebrating, eating traditional Nigerian food, and socializing.",
        whatIllBeDoing: "I'll capture candid guest interactions, the incredible traditional Nigerian food spread (jollof rice, pounded yam, pepper soup), décor details, and the continued celebration. If you're changing outfits again, I'll document that transformation."
      },
      {
        time: "4-5 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance (possibly in new outfits), first dances, dinner service, cake cutting, money spraying, and energetic dancing to Afrobeats and highlife music. This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every moment of the reception - your grand entrance, first dance, speeches, cake cutting, and the incredible money spraying tradition. Nigerian receptions are some of the most energetic celebrations we film - the dancing, money spraying, live drummers, and pure joy are infectious. We position ourselves to capture both the scheduled moments and the spontaneous celebration throughout the night.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Final Dance & Sendoff",
        description: "Last songs, final money spraying, and your departure. Guests shower you with blessings and celebration.",
        whatIllBeDoing: "I'll capture the final moments of celebration, any last money spraying, farewells with family, and your departure. Nigerian sendoffs are joyful and loud - we document all the energy and love as you leave as husband and wife."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Nigerian weddings typically have two separate ceremonies—a traditional/cultural ceremony and a white wedding (church) or Islamic ceremony",
        "Aso ebi (matching family/group fabric) is worn by different groups to show unity—often elaborate lace, ankara, or gele (head wraps)",
        "The bride changes into multiple traditional outfits throughout the day, showcasing different cultural attire",
        "Money spraying during dancing is customary—guests throw money at the couple or attach bills to their clothing as blessings",
        "Guest lists are large (often 300-1000+ people) as extended family and community are central to celebrations",
        "Each ethnic group (Yoruba, Igbo, Hausa) has distinct traditions, languages, foods, and customs during ceremonies"
      ]
    },

    commonQuestions: [
      {
        q: "What is the bride price and what does it include?",
        a: "The bride price (also called lobola or wine carrying) is a cultural tradition where the groom's family presents gifts and money to the bride's family. It's not 'buying' the bride but demonstrating respect, gratitude, and the groom's ability to care for her. Items may include cash, kola nuts, palm wine, yams, fabric, livestock, or jewelry—depending on the ethnic group and family. The bride's family creates a list, and negotiations are part of the tradition."
      },
      {
        q: "What is Aso Ebi and who wears it?",
        a: "Aso ebi means 'family cloth' and refers to matching fabric worn by different groups at the wedding—bride's family, groom's family, friends, age groups, etc. It shows solidarity and creates a stunning visual unity. Aso ebi is typically elaborate lace, ankara (African print), or other fine fabrics in coordinated colors. Guests purchase the fabric in advance and have it tailored into traditional outfits. It's a significant part of Nigerian wedding culture."
      },
      {
        q: "What is money spraying and why do people do it?",
        a: "Money spraying is a joyful tradition where guests throw money at the dancing couple, place bills on their foreheads, or 'make it rain' cash during the reception. It's a way of blessing the couple with prosperity, showing generosity, and celebrating their union. The money belongs to the couple. In modern weddings, professional 'money sprayers' with currency machines create spectacular cash showers while the DJ hypes up the moment."
      },
      {
        q: "Why do brides change into multiple outfits?",
        a: "Nigerian brides typically wear 3-5 different outfits throughout the wedding celebrations to showcase their beauty and honor different cultural traditions. She may wear traditional Yoruba iro and buba, Igbo George wrapper, a white wedding gown for the church ceremony, and glamorous reception gowns. Each outfit change is an event in itself, often with choreographed entrances, dancing, and celebration."
      },
      {
        q: "What's the difference between Yoruba, Igbo, and Hausa weddings?",
        a: "Each Nigerian ethnic group has distinct traditions. Yoruba weddings feature aso oke fabric, alaga (MC/coordinator), and elaborate prayers. Igbo weddings include the Igba Nkwu ceremony, kola nut breaking, and wine carrying tradition. Hausa weddings (typically Islamic) include the Kunshi (henna), Nikah ceremony, and may feature more conservative celebrations. Despite differences, all emphasize family, community, colorful attire, music, dancing, and generous celebrations."
      }
    ]
  },

  "korean": {
    title: "Korean Wedding Traditions",
    seoTitle: "Korean Wedding Ceremony Guide | Understanding Traditional Korean Wedding Customs & Pyebaek",
    seoDescription: "Complete guide to Korean wedding traditions including the Pyebaek ceremony, Hanbok attire, Paebaek, and modern Korean-American wedding customs.",
    heroImage: "/weddings/korean-wedding.jpg",

    introHeading: "Honoring family and tradition through elegant ceremonies.",
    introBody: "Korean weddings beautifully blend Confucian values of family and respect with modern celebrations. While contemporary Korean-American weddings often follow Western ceremony formats, many couples incorporate traditional elements like the Pyebaek (family ceremony), wearing Hanbok (traditional Korean dress), and honoring parents. Traditional Korean weddings emphasize the union of two families, filial piety, and respect for elders through meaningful rituals.",

    quickFacts: {
      duration: "Western ceremony 30-45 minutes; Pyebaek (private family ceremony) 30-60 minutes",
      venue: "Wedding hall, hotel ballroom, or church for Western ceremony; private room for Pyebaek",
      dressCode: "Formal Western attire for ceremony; Hanbok worn by couple and sometimes family during Pyebaek",
      guestCount: "100-300 guests; smaller than other Asian weddings, focused on close family and friends",
      musicStyle: "Mix of Western ceremony music, K-pop, and traditional Korean instruments during Pyebaek"
    },

    glossary: [
      { term: "Pyebaek", pronunciation: "pyeh-BECK", definition: "Private family ceremony where couple bows to parents and receives blessings" },
      { term: "Hanbok", pronunciation: "hahn-BOK", definition: "Traditional Korean dress; women wear jeogori (jacket) and chima (skirt)" },
      { term: "Hahm", pronunciation: "hahm", definition: "Wedding box containing gifts sent from groom's family to bride's family before wedding" },
      { term: "Kunbere", pronunciation: "koon-BEH-reh", definition: "Deep formal bows performed by couple to show respect and commitment" },
      { term: "Jujube", pronunciation: "JOO-joob", definition: "Red dates thrown to couple during Pyebaek, symbolizing children and fertility" },
      { term: "Saju", pronunciation: "sah-JOO", definition: "Traditional exchange of birthdates for astrological compatibility matching" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Bring a monetary gift in a white envelope. Cash is preferred and practical",
        "Arrive on time. Korean ceremonies are punctual and efficient, often 30-45 minutes",
        "The Pyebaek is a private family ceremony. Unless invited, guests attend only the main ceremony",
        "Dress formally but not in white (reserved for bride). Conservative, respectful attire is appreciated",
        "The ceremony will likely be short. Reception or dinner may follow immediately after",
        "Parents and elders are highly respected. Stand and greet them with a bow if introduced",
        "Food at the reception may include Korean dishes like bulgogi, japchae, and kimchi alongside Western options",
        "Photos during the ceremony may be restricted. Follow venue rules and be respectful"
      ]
    },

    keyMoments: [
      {
        title: "Engagement (Yak-hon)",
        description: "Traditionally, families exchange gifts and formal letters (Saju) containing the bride and groom's birth dates and times for astrological compatibility. Modern engagements are more casual but may still include family gift exchanges."
      },
      {
        title: "Ham Delivery (Hahm)",
        description: "The night before or days before the wedding, the groom's family sends a wedding box (hahm) to the bride's home containing gifts like silk, jewelry, and traditional items. Friends of the groom playfully 'sell' the box for money or food before delivering it."
      },
      {
        title: "Modern Wedding Ceremony (Ye-shik)",
        description: "Most Korean-American couples have a Western-style ceremony with a white dress, tuxedo, vows, and rings. This takes place in a wedding hall, hotel, or church and typically lasts 20-30 minutes."
      },
      {
        title: "Processional",
        description: "The groom enters first, sometimes with his mother carrying a white goose (or wooden goose)—symbolizing fidelity since geese mate for life. The bride then enters, often escorted by both parents."
      },
      {
        title: "Kunbere (Big Bows)",
        description: "In traditional ceremonies, the couple performs deep formal bows to each other and to their parents, showing respect and commitment. This is less common in modern ceremonies but may be incorporated."
      },
      {
        title: "Drinking from the Gourd",
        description: "A traditional ritual where the couple drinks wine or liquor from cups made from two halves of a gourd tied together with red thread, symbolizing their union and the joining of two families into one."
      },
      {
        title: "Pyebaek/Paebaek (Family Ceremony)",
        description: "The most important traditional element—a private ceremony after the main wedding where the couple, dressed in Hanbok, bows to the groom's family elders. Parents sit at a table with food offerings (jujubes, chestnuts) and the couple performs formal deep bows."
      },
      {
        title: "Throwing Dates and Chestnuts",
        description: "During Pyebaek, parents throw jujubes (dates) and chestnuts at the bride as she tries to catch them in her skirt. The number caught symbolizes how many children she'll have. Dates represent daughters, chestnuts represent sons."
      },
      {
        title: "Reception and Photo Time",
        description: "Elaborate receptions with speeches, toasts, and formal photos with family. Korean weddings often include a 'food buffet' for guests and multiple outfit changes for photos in traditional Hanbok."
      },
      {
        title: "Duck or Geese Gifts",
        description: "Wooden ducks or geese are often given as wedding gifts or used as ceremony décor, symbolizing a faithful marriage as these birds mate for life."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into Western wedding attire (you'll change into Hanbok later for Pyebaek). This is when I capture detail shots of your dress, suit, rings, and any Korean traditional items.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots - your Western wedding attire, rings, Hanbok waiting for later, wooden geese/ducks if you have them, and any family heirlooms. I also capture candid moments as you prepare for this meaningful day."
      },
      {
        time: "1 hour before",
        title: "First Look (Optional)",
        description: "Many couples choose a private first look before the ceremony to ease nerves and get portraits done early. This moment is just for you two.",
        whatIllBeDoing: "If you're doing a first look, my other shooter and I will capture the reveal and your reactions from multiple angles. This gives us 30-45 minutes of couple portraits before the ceremony starts, which takes pressure off the post-ceremony timeline. Your planner and I will coordinate to keep things flowing smoothly."
      },
      {
        time: "30 min before",
        title: "Guests Arrive & Pre-Ceremony",
        description: "Guests arrive and are seated. Korean wedding ceremonies are efficient and punctual, often starting exactly on time.",
        whatIllBeDoing: "I'll be setting up ceremony audio - wireless mics to capture vows and any Korean elements clearly. My team positions ourselves strategically for the processional. If you're incorporating the wooden goose procession, we'll be ready to capture that traditional element. Final tech checks and we're set."
      },
      {
        time: "30-45 min",
        title: "Ceremony",
        description: "The wedding ceremony, typically Western-style with vows and rings. Some couples incorporate traditional Korean elements like the kunbere (formal bows) or drinking from the gourd.",
        whatIllBeDoing: "My other shooter and I capture multiple angles throughout the ceremony - your processional (including the wooden goose if you have that tradition), vows, ring exchange, and any Korean customs you're incorporating. We work efficiently as Korean ceremonies are often shorter and more structured than other traditions.",
        hasDetails: true
      },
      {
        time: "45-60 min",
        title: "Pyebaek (Private Family Ceremony)",
        description: "The traditional Korean family ceremony where you change into Hanbok and perform formal bows to the groom's family elders. Parents throw jujubes and chestnuts for you to catch, symbolizing future children.",
        whatIllBeDoing: "The Pyebaek is one of the most meaningful moments we film. I'll capture you changing into the beautiful Hanbok, the setup of the traditional table with food offerings, your formal deep bows to family elders, the joyful jujube and chestnut throwing, and the emotions on everyone's faces. This ceremony is often intimate and private - I work respectfully to document it without intruding on these sacred family moments."
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits, often in both Western attire and Hanbok. Korean families value formal portraits highly.",
        whatIllBeDoing: "I work with the photo team to film family formals efficiently in both your Western wedding attire and Hanbok if desired. Korean families often want organized, formal portraits with various groupings. We'll have a shot list ready and work through it systematically. The Hanbok creates stunning portraits."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy appetizers and drinks while you finish portraits. Food may include Korean dishes alongside Western options.",
        whatIllBeDoing: "I'm capturing candid guest interactions, décor details including any wooden geese or traditional Korean elements, and the overall atmosphere. If there's time and light permits, your planner and I will coordinate for golden hour couple portraits."
      },
      {
        time: "3-4 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, and dancing. This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every key moment - from your grand entrance and first dances to toasts, cake cutting, and dance floor energy. We position ourselves to get multiple angles for important moments and roam for candid interactions. We're always watching for genuine emotions and authentic reactions throughout the celebration.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Last Dance & Sendoff",
        description: "Final songs, last dance, and your exit. Whether it's sparklers or a traditional sendoff, this is your grand goodbye.",
        whatIllBeDoing: "I'll coordinate the exit timing with your planner to make sure everything's ready. I'll set up lighting for sparkler or exit shots and capture both wide and tight shots of the sendoff, your final waves, and the car pulling away. Before I leave, I always find you to say my goodbyes, give hugs, and share my thanks and blessings."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Most Korean-American weddings combine Western ceremony style with traditional Korean elements like Pyebaek",
        "The Pyebaek ceremony is often private (family only) and held after the main ceremony in a separate room",
        "Hanbok (traditional Korean dress) is worn during Pyebaek—bride in colorful jeogori and chima, groom in baji and jeogori",
        "Bowing is central to Korean tradition and shows deep respect to elders—the depth and formality of bows have specific meanings",
        "Money gifts are customary—brought in white envelopes (not red like Chinese weddings) with new bills",
        "Korean wedding halls are efficient and may host multiple weddings per day with structured time slots"
      ]
    },

    commonQuestions: [
      {
        q: "What is the Pyebaek ceremony and why is it important?",
        a: "Pyebaek (also spelled Paebaek) is a traditional Korean family ceremony where the newlyweds, dressed in Hanbok, formally greet and bow to the groom's family elders for the first time as a married couple. The couple performs deep formal bows (called 'big bows' or kunbere) while elders sit at a low table with symbolic foods. This private ceremony is deeply meaningful, representing respect, family unity, and the bride's official welcome into the groom's family."
      },
      {
        q: "What is the significance of dates and chestnuts in Korean weddings?",
        a: "Jujubes (Korean dates) and chestnuts are symbolic foods representing fertility and prosperity. During Pyebaek, parents throw them at the bride, who tries to catch them in her skirt. Folklore says the number she catches predicts how many children she'll have—dates represent daughters and chestnuts represent sons. These foods also appear on the ceremonial table, symbolizing good fortune and healthy offspring."
      },
      {
        q: "What should I wear to a Korean wedding?",
        a: "Guests typically wear semi-formal or formal Western attire—suits for men, cocktail dresses or dressy outfits for women. Avoid wearing white (reserved for the bride) or black (traditionally associated with funerals, though becoming more accepted). If attending a traditional ceremony or Pyebaek, modest, respectful attire is appreciated. Only family members wear Hanbok unless specifically requested."
      },
      {
        q: "What is appropriate as a wedding gift?",
        a: "Money is the standard wedding gift in Korean culture, given in a white envelope (not red). Use crisp, new bills in even amounts. The amount depends on your relationship to the couple—closer relationships warrant more generous gifts. Cash is practical and appreciated as Korean couples often use wedding gifts to offset ceremony costs. Some couples have registry items for non-Korean guests."
      },
      {
        q: "Why are there wooden ducks at Korean weddings?",
        a: "Wooden ducks (or geese) called 'wedding ducks' symbolize faithfulness and a harmonious marriage because these birds mate for life. Traditionally, the groom carried a live goose to the bride's family at the wedding, but today decorative wooden ducks are used as ceremony décor and popular wedding gifts. They're often displayed in the couple's home as a symbol of their commitment."
      }
    ]
  },

  "filipino": {
    title: "Filipino Wedding Traditions",
    seoTitle: "Filipino Wedding Ceremony Guide | Understanding Filipino Catholic Wedding Traditions & Customs",
    seoDescription: "Complete guide to Filipino wedding traditions including the Veil, Cord, Coins ceremony, Arras, and cultural customs. Learn about Filipino Catholic wedding rituals.",
    heroImage: "/weddings/filipino-wedding.jpg",

    introHeading: "Blending Catholic faith with vibrant Filipino cultural traditions.",
    introBody: "Filipino weddings beautifully merge Catholic ceremony traditions with unique Filipino customs that symbolize unity, prosperity, and family bonds. While the ceremony follows Catholic Mass structure, Filipino weddings are distinguished by the symbolic Veil, Cord, and Coins (Arras) ceremonies, traditional attire like the Barong Tagalog and Filipiniana dress, and vibrant receptions with cultural dances and customs.",

    quickFacts: {
      duration: "60-90 minutes for Catholic Mass wedding; reception 4-6 hours",
      venue: "Catholic church for ceremony; hotel ballroom or event hall for reception",
      dressCode: "Formal; traditional Barong Tagalog for men, Filipiniana or terno for women (optional for guests)",
      guestCount: "200-400 guests; Filipino weddings are large, family-centered celebrations",
      musicStyle: "Catholic hymns during ceremony; mix of Filipino love songs, kundiman, and contemporary pop at reception"
    },

    glossary: [
      { term: "Arras", pronunciation: "ah-RAHS", definition: "13 coins given by groom to bride, symbolizing commitment to provide and shared prosperity" },
      { term: "Barong Tagalog", pronunciation: "bah-RONG tah-GAH-log", definition: "Traditional Filipino embroidered formal shirt worn by groom and male guests" },
      { term: "Filipiniana", pronunciation: "fee-lee-pee-nee-AH-nah", definition: "Traditional Filipino dress for women with butterfly sleeves and elegant embroidery" },
      { term: "Ninong/Ninang", pronunciation: "nee-NONG / nee-NAHNG", definition: "Principal sponsors (godparents) who support the couple and participate in ceremonies" },
      { term: "Yugal", pronunciation: "yoo-GAHL", definition: "Decorative cord or lasso placed around couple in figure-eight, symbolizing eternal unity" },
      { term: "Pamamanhikan", pronunciation: "pah-mah-mahn-HEE-kahn", definition: "Formal meeting where groom's family asks bride's family for her hand in marriage" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Arrive 15-20 minutes early. Filipino Catholic ceremonies start on time and may fill quickly",
        "Dress modestly for church. Women should cover shoulders; men wear suits or Barong Tagalog if desired",
        "The ceremony will be long (60-90 minutes) with full Catholic Mass. Plan accordingly",
        "Bring a monetary gift in an envelope. Cash gifts are traditional and preferred",
        "Participate in the money dance at the reception. Bring small bills to pin on the couple while dancing",
        "Expect abundant Filipino food: lechon (roast pig), lumpia, pancit, adobo, and more",
        "Family and elders are highly respected. Greet them with 'po' and 'opo' (yes, sir/ma'am)",
        "The reception will be lively with music, dancing, speeches, and games. Join in the celebration"
      ]
    },

    keyMoments: [
      {
        title: "Catholic Ceremony",
        description: "Most Filipino weddings are Catholic Masses following traditional liturgy with readings, vows, ring exchange, and communion. The ceremony incorporates unique Filipino traditions."
      },
      {
        title: "Veil Ceremony (Pamamanhikan)",
        description: "Sponsors (typically godparents or close family) drape a white veil over the bride's head and groom's shoulders in a figure-eight pattern, symbolizing unity as one. The veil represents being clothed as one in God."
      },
      {
        title: "Cord Ceremony (Lasso/Yugal)",
        description: "A decorative silk cord or floral garland is placed around the couple's shoulders in a figure-eight or infinity loop, symbolizing their eternal bond and unity. It's removed only after the final blessing."
      },
      {
        title: "Coins Ceremony (Arras/Arrhae)",
        description: "The groom presents 13 gold or silver coins to the bride, symbolizing his commitment to provide for the family and share his earthly possessions. The bride accepts them, showing her trust and commitment to managing their home."
      },
      {
        title: "Candle Lighting",
        description: "The couple's mothers light candles, then the bride and groom use these to light a unity candle together, symbolizing two families becoming one and Christ as the light of their marriage."
      },
      {
        title: "Ring Blessing and Exchange",
        description: "Wedding rings are blessed and exchanged with traditional Catholic vows, often with the priest invoking God's blessing on the symbols of their commitment."
      },
      {
        title: "Sign of Peace (Kiss)",
        description: "After receiving the priest's blessing, the couple shares their first kiss as husband and wife, followed by the congregation's sign of peace."
      },
      {
        title: "Money Dance (Salu-Salo/Dollar Dance)",
        description: "During the reception, guests pin money on the couple's clothing while dancing with them. This helps the newlyweds financially and is a joyful, interactive tradition."
      },
      {
        title: "Rice Tossing",
        description: "Guests shower the couple with rice (or flower petals) as they exit the church, symbolizing wishes for prosperity, fertility, and good fortune."
      },
      {
        title: "Release of Doves or Butterflies",
        description: "Some couples release white doves or butterflies after the ceremony, symbolizing peace, love, and the beginning of their new life together."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into attire - whether Western wedding dress or traditional Filipiniana and Barong Tagalog. This is when I capture detail shots of your dress, rings, Arras coins, veil, and cord.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots - your attire (especially the beautiful Barong Tagalog embroidery or Filipiniana dress), rings, the Arras coins, ceremonial veil and cord, and any family heirlooms. I also capture candid moments with family as you prepare."
      },
      {
        time: "1 hour before",
        title: "First Look (Optional)",
        description: "Many couples choose a private first look before the ceremony to ease nerves and get portraits done early. This moment is just for you two.",
        whatIllBeDoing: "If you're doing a first look, my other shooter and I will capture the reveal and your reactions from multiple angles. This gives us 30-45 minutes of couple portraits before the ceremony starts, which takes pressure off the post-ceremony timeline. Your planner and I will coordinate to keep things flowing smoothly."
      },
      {
        time: "30 min before",
        title: "Guests Arrive & Pre-Ceremony",
        description: "Guests arrive at the church. Principal sponsors (Ninong/Ninang) and the wedding party prepare for the processional. Filipino Catholic ceremonies are known for their punctuality.",
        whatIllBeDoing: "I'll be setting up ceremony audio - wireless mics on the priest and groom to capture the Catholic Mass, vows, and Filipino ceremony elements clearly. My team positions ourselves strategically in the church, ready to capture the processional with your many sponsors and entourage. Final tech checks and we're set."
      },
      {
        time: "60-90 min",
        title: "Ceremony",
        description: "The Catholic wedding Mass includes readings, homily, vows, ring exchange, and Communion. The unique Filipino traditions - Veil, Cord, and Coins ceremonies - are incorporated during the Mass, performed by your principal sponsors.",
        whatIllBeDoing: "My other shooter and I capture multiple angles throughout the ceremony - your processional with all the principal sponsors, the Veil ceremony as sponsors drape the veil over both of you, the Cord ceremony creating the infinity symbol, the Arras coins presentation, candle lighting, and all the sacred moments of the Mass. We position ourselves respectfully in the church while documenting these meaningful Filipino-Catholic traditions.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits at the church or venue, including photos with all the principal sponsors. Filipino weddings often have large wedding parties and many sponsor groupings.",
        whatIllBeDoing: "I work with the photo team to film family formals efficiently. Filipino weddings have many principal sponsors and large families, so we'll have an organized shot list. The traditional Barong Tagalog and Filipiniana attire create beautiful, cohesive portraits. I aim for 30-45 minutes max for all group coverage."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy appetizers and drinks while you finish portraits. Filipino appetizers like lumpia and pork skewers may be served.",
        whatIllBeDoing: "I'm capturing candid guest interactions, Filipino décor details, and the overall atmosphere. If there's time and light permits, your planner and I will coordinate for golden hour couple portraits."
      },
      {
        time: "4-5 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, the money dance tradition, and dancing. Filipino receptions are known for abundant food (lechon, pancit, adobo), energetic music, and warm hospitality.",
        whatIllBeDoing: "My team and I capture every key moment - from your grand entrance and first dances to toasts, cake cutting, and the money dance where guests pin bills on you while dancing. Filipino receptions are joyful and family-centered - we document the traditional foods, cultural performances if you have them, and all the warmth and celebration. We position ourselves to capture both scheduled moments and spontaneous joy.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Last Dance & Sendoff",
        description: "Final songs, last dance, and your exit. Whether it's rice tossing, doves, or sparklers, this is your grand goodbye.",
        whatIllBeDoing: "I'll coordinate the exit timing with your planner to make sure everything's ready. I'll capture the rice tossing, dove release if you have it, or sparkler exit - along with both wide and tight shots of the sendoff, your final waves, and the car pulling away. Before I leave, I always find you to say my goodbyes, give hugs, and share my thanks and blessings."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Filipino weddings blend Catholic tradition with Spanish colonial influences and indigenous Filipino customs",
        "The ceremony includes both Catholic sacramental elements and unique Filipino symbolic rituals (veil, cord, coins)",
        "Traditional attire: men wear Barong Tagalog (embroidered formal shirt), women wear Filipiniana dresses or terno",
        "Principal sponsors (Ninong/Ninang) play important roles—like godparents who witness and support the marriage",
        "Receptions often feature lechon (roast pig), lumpia, pancit, and traditional Filipino foods",
        "Family is central—extended family involvement is significant, and weddings are often large (200-400 guests)"
      ]
    },

    commonQuestions: [
      {
        q: "What are the Veil, Cord, and Coins ceremonies?",
        a: "These are the three unique Filipino wedding traditions performed during the Catholic ceremony. The Veil ceremony involves sponsors draping a white veil over the couple, symbolizing unity. The Cord (or Lasso) is a decorative loop placed around them in a figure-eight, representing their eternal bond. The Coins (Arras) are 13 coins given by the groom to the bride, symbolizing his promise to provide and their shared commitment to prosperity. These rituals are performed after the vows and before communion."
      },
      {
        q: "What is a Barong Tagalog and when is it worn?",
        a: "The Barong Tagalog is a traditional Filipino formal shirt made of lightweight fabric (often piña or jusi) with intricate embroidery. It's worn untucked and is the formal attire for Filipino grooms and male guests at weddings. The Barong represents Filipino cultural pride and elegance. Women wear the Filipiniana dress or terno, which features butterfly sleeves and elegant embroidery."
      },
      {
        q: "Who are the principal sponsors and what do they do?",
        a: "Principal sponsors (Ninong and Ninang) are like godparents for the marriage—respected elders chosen by the couple to guide and support them throughout their married life. They participate in the ceremony by performing the Veil and Cord rituals and signing as official witnesses. Having many sponsors is common, showing the community's support for the marriage."
      },
      {
        q: "What is the money dance and why do guests pin money?",
        a: "The money dance (also called Salu-Salo or Dollar Dance) is a reception tradition where guests take turns dancing with the bride and groom while pinning paper money on their clothing. It's a fun, interactive way to celebrate and help the newlyweds start their married life with financial blessings. The money belongs to the couple and helps offset wedding costs or honeymoon expenses."
      },
      {
        q: "Are Filipino weddings always Catholic?",
        a: "The majority of Filipino weddings are Catholic due to the Philippines' strong Catholic heritage (over 80% of Filipinos are Catholic). However, there are Protestant, Iglesia ni Cristo, and Muslim Filipino weddings as well. Even secular Filipino weddings often incorporate cultural elements like the veil, cord, and coins ceremonies adapted for non-religious contexts."
      }
    ]
  },

  "sikh": {
    title: "Sikh Wedding Traditions",
    seoTitle: "Sikh Wedding Ceremony Guide | Understanding Anand Karaj & Sikh Wedding Traditions",
    seoDescription: "Complete guide to Sikh wedding traditions including the Anand Karaj ceremony, Four Lavaan, Gurdwara customs, and Punjabi Sikh wedding rituals. Learn the sacred traditions.",
    heroImage: "/weddings/sikh-wedding.jpg",

    introHeading: "Sacred union before the Guru Granth Sahib.",
    introBody: "Sikh weddings center around the Anand Karaj (literally 'blissful union'), a spiritual ceremony performed in a Gurdwara (Sikh temple) before the Guru Granth Sahib (holy scripture). The ceremony emphasizes equality, with both bride and groom walking around the Guru Granth Sahib four times while the Lavaan (wedding hymns) are recited. Sikh weddings blend profound spiritual significance with vibrant Punjabi cultural celebrations.",

    quickFacts: {
      duration: "Anand Karaj ceremony 60-90 minutes; multi-day celebrations with Sangeet, Mehndi, and reception",
      venue: "Gurdwara (Sikh temple) for Anand Karaj; banquet hall for reception and pre-wedding events",
      dressCode: "Modest attire; head covering required in Gurdwara for all guests. Traditional Punjabi suits or lehenga common",
      guestCount: "200-500 guests; Sikh weddings are large community celebrations with Langar (free meal) for all",
      musicStyle: "Kirtan (devotional hymns) at Gurdwara; Bhangra, Punjabi folk, and Bollywood music at reception"
    },

    glossary: [
      { term: "Anand Karaj", pronunciation: "ah-NAHND kah-RAHJ", definition: "Blissful union; the Sikh wedding ceremony performed before Guru Granth Sahib" },
      { term: "Lavaan", pronunciation: "lah-VAHN", definition: "Four wedding hymns recited during ceremony as couple circles Guru Granth Sahib" },
      { term: "Guru Granth Sahib", pronunciation: "goo-ROO grahnth sah-HEEB", definition: "Sikh holy scripture; central spiritual authority present at wedding" },
      { term: "Gurdwara", pronunciation: "goor-DWAH-rah", definition: "Sikh place of worship where Anand Karaj ceremony takes place" },
      { term: "Chooda", pronunciation: "CHOO-dah", definition: "Red and white bangles worn by bride, blessed and gifted by maternal uncle" },
      { term: "Langar", pronunciation: "LAHN-gahr", definition: "Free communal meal served to all guests at Gurdwara after ceremony" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Cover your head before entering the Gurdwara. Scarves are usually provided at the entrance",
        "Remove your shoes before entering. Socks are fine; shoes are stored in designated areas",
        "Sit on the floor during the ceremony (cushions provided). Men and women typically sit on opposite sides",
        "Dress modestly. Shoulders and knees should be covered; avoid low-cut or revealing clothing",
        "Do not turn your back to the Guru Granth Sahib. Show respect to the holy scripture",
        "Langar (free meal) will be served to all guests after the ceremony. Everyone eats together regardless of status",
        "Alcohol and tobacco are strictly prohibited at Gurdwara and often at Sikh wedding receptions",
        "The reception will be lively with Bhangra dancing. Join in the celebration and dancing"
      ]
    },

    keyMoments: [
      {
        title: "Roka & Thaka",
        description: "The engagement ceremony where families formally agree to the marriage. The couple exchanges rings and receives blessings from elders with dried dates and coconuts."
      },
      {
        title: "Kurmai (Engagement Party)",
        description: "Formal engagement celebration where families exchange gifts, sweets, and the couple may exchange rings if not done during Roka."
      },
      {
        title: "Sangeet & Mehndi",
        description: "Pre-wedding celebrations with music, dancing, Punjabi folk songs, and henna application for the bride and female guests. High-energy Bhangra and Giddha dancing."
      },
      {
        title: "Chooda Ceremony",
        description: "The bride's maternal uncle presents her with a set of red and white bangles (chooda) that she will wear for the first 40 days or longer of marriage. They're blessed and washed with milk before wearing."
      },
      {
        title: "Jaggo/Jaggo",
        description: "A late-night celebration the night before the wedding where female family members dance through the streets with a decorated pot (jaggo) carrying oil lamps, singing traditional songs."
      },
      {
        title: "Baraat (Groom's Procession)",
        description: "The groom arrives on horseback accompanied by family and friends dancing to dhol drums. The bride's family greets them with Milni (meeting of families) where both sides exchange garlands and gifts."
      },
      {
        title: "Anand Karaj Ceremony",
        description: "The sacred wedding ceremony in the Gurdwara. The couple sits before the Guru Granth Sahib while the Granthi (priest) reads from scripture and explains the marriage's spiritual significance."
      },
      {
        title: "Four Lavaan (Circles)",
        description: "The core of the ceremony—the couple walks clockwise around the Guru Granth Sahib four times while the Lavaan (wedding hymns by Guru Ram Das) are sung. Each round represents a stage of married life and spiritual union."
      },
      {
        title: "Ardas (Prayer)",
        description: "The congregation stands for the final prayer seeking blessings for the couple's married life. This is followed by distribution of Karah Prasad (sacred sweet offering)."
      },
      {
        title: "Doli (Bride's Farewell)",
        description: "An emotional moment when the bride leaves her family home. Rice is thrown over her head as she departs, symbolizing prosperity and her family's blessings."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into traditional Punjabi attire - lehenga and dupatta for the bride, sherwani or suit for the groom. This is when I capture detail shots of your vibrant attire, chooda bangles, jewelry, and details.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots - your colorful Punjabi attire, the bride's chooda (red and white bangles), jewelry, dupatta, and any family heirlooms. I also capture the chooda ceremony if it happens this morning, as it's a meaningful tradition."
      },
      {
        time: "30-45 min",
        title: "Baraat (Groom's Procession)",
        description: "The groom arrives on horseback accompanied by his family and friends dancing to dhol drums. Pure celebration and spectacle - one of the most energetic moments of a Sikh wedding.",
        whatIllBeDoing: "The Baraat is incredible energy. I position myself to capture the procession arriving, the dhol drummers, family dancing (Bhangra!), and the groom on horseback. This requires mobile coverage - I'm moving with the procession to get dynamic shots. The colors, music, and energy are amazing to film."
      },
      {
        time: "15-20 min",
        title: "Milni (Meeting of Families)",
        description: "The bride's and groom's families formally meet and exchange garlands and gifts, symbolizing the union of two families.",
        whatIllBeDoing: "I'll capture the formal meeting of families and the exchange of garlands and embraces. This is a warm, welcoming moment that sets the tone for the sacred ceremony to come. I position myself to get both the exchanges and the emotions on everyone's faces."
      },
      {
        time: "30 min before",
        title: "Guests Arrive at Gurdwara",
        description: "Guests remove shoes, cover their heads with scarves or turbans, and enter the Gurdwara to sit on the floor. The Guru Granth Sahib is placed at the front, and everyone shows respect by not turning their backs to it.",
        whatIllBeDoing: "I'll be setting up ceremony audio and positioning myself respectfully in the Gurdwara. We cover our heads, remove our shoes, and position ourselves to capture the ceremony without intruding on the sacred space. My team prepares to film the Anand Karaj with deep respect for the spiritual significance."
      },
      {
        time: "60-90 min",
        title: "Anand Karaj Ceremony",
        description: "The sacred wedding ceremony before the Guru Granth Sahib. The couple sits as the Granthi reads scripture, then walks around the Guru Granth Sahib four times while the Lavaan (wedding hymns) are sung. Each circle represents a stage of spiritual union.",
        whatIllBeDoing: "My other shooter and I capture the Anand Karaj with reverence - the couple sitting before the Guru Granth Sahib, the Granthi's readings, and each of the four Lavaan as you circle the holy scripture. We position ourselves to document this sacred ceremony respectfully, capturing your emotions, the kirtan (hymns), and the spiritual atmosphere. The Lavaan are the heart of the ceremony - we ensure every circle is beautifully filmed.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Langar & Family Portraits",
        description: "After the ceremony, everyone partakes in Langar (free communal meal) served at the Gurdwara. Family portraits are taken, often both at the Gurdwara and later at the reception venue.",
        whatIllBeDoing: "I'll capture the Langar service - everyone sitting together on the floor, being served the communal meal. This equality and community aspect is beautiful. Then I work with the photo team for family formals, which we do efficiently to stay on schedule. I aim for 30-45 minutes max."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy appetizers and mocktails (no alcohol at Sikh weddings) while you finish portraits. Traditional Punjabi snacks may be served.",
        whatIllBeDoing: "I'm capturing candid guest interactions, the vibrant décor, and the overall atmosphere. Sikh weddings have beautiful colorful decorations and details. If there's time and light permits, your planner and I will coordinate for golden hour couple portraits."
      },
      {
        time: "3-4 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, and energetic Bhangra dancing. This is where the party really begins and your community celebrates with you.",
        whatIllBeDoing: "My team and I capture every key moment - from your grand entrance to the Bhangra dancing (which is absolutely incredible to film). We'll capture toasts, cake cutting, and all the dance floor energy. Punjabi receptions are some of the most energetic celebrations - the dhol, the dancing, the joy. We position ourselves to capture both the formal moments and the spontaneous celebration.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Doli (Bride's Farewell)",
        description: "The emotional farewell as the bride leaves her family. Rice is thrown over her head as she departs, symbolizing prosperity and blessings.",
        whatIllBeDoing: "The Doli is incredibly emotional - I position myself to capture both the bride's tears and her family's reactions. I'll film the rice throwing, the hugs, the final moments with her parents, and the departure. This is a deeply moving moment that requires sensitivity and closeness to capture authentically."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "All Sikh weddings must take place in a Gurdwara before the Guru Granth Sahib to be religiously valid",
        "Both bride and groom must cover their heads in the Gurdwara (women wear dupattas, men wear turbans or head coverings)",
        "Shoes must be removed before entering the Gurdwara, and guests should sit on the floor during the ceremony",
        "The ceremony emphasizes equality—the bride leads in the first three Lavaan, the groom in the fourth",
        "Alcohol and meat are not served at Sikh weddings as Gurdwaras are alcohol-free and many Sikhs are vegetarian",
        "Langar (free community meal) is often served to all guests after the ceremony, sitting together on the floor"
      ]
    },

    commonQuestions: [
      {
        q: "What is the Anand Karaj and what does it mean?",
        a: "Anand Karaj means 'blissful union' in Punjabi and is the Sikh wedding ceremony. It's a sacred spiritual union performed before the Guru Granth Sahib (Sikh holy scripture) in a Gurdwara. The ceremony emphasizes that marriage is a spiritual partnership where two souls become one, joining in devotion to God. Unlike other traditions, it's not just a social contract but a path to spiritual enlightenment together."
      },
      {
        q: "What are the Four Lavaan and what do they represent?",
        a: "The Four Lavaan are wedding hymns written by Guru Ram Das, the fourth Sikh Guru. During the ceremony, the couple walks around the Guru Granth Sahib four times while these hymns are sung. Each Lavan represents a stage: 1) Emphasis on duty and worldly life, 2) Meeting the True Guru and beginning spiritual journey, 3) Detachment from worldly attractions and love for God, 4) Achievement of spiritual union and bliss. Walking together symbolizes their journey through married life toward enlightenment."
      },
      {
        q: "Why must Sikh weddings take place in a Gurdwara?",
        a: "Sikh weddings must occur in a Gurdwara before the Guru Granth Sahib because the Guru is the central witness to the marriage. The Guru Granth Sahib represents the eternal Guru for Sikhs, and the marriage vows are made in its presence, not just between two people. Having the ceremony anywhere else would not be considered a valid Anand Karaj according to Sikh religious law."
      },
      {
        q: "What should I wear and what is the etiquette in a Gurdwara?",
        a: "Cover your head (women with a scarf/dupatta, men with a handkerchief or turban), remove shoes before entering, and dress modestly (shoulders and legs covered). Avoid alcohol before attending. Sit cross-legged or with legs folded on the floor during the ceremony—never point your feet toward the Guru Granth Sahib. Participate respectfully in the Ardas (prayer) by standing, and accept Karah Prasad (sweet offering) with both hands as a blessing."
      },
      {
        q: "How is a Sikh wedding different from a Hindu wedding?",
        a: "While both may share Punjabi cultural elements (Sangeet, Mehndi, Baraat), Sikh weddings are religiously distinct. Sikh ceremonies occur in a Gurdwara before the Guru Granth Sahib with Four Lavaan, while Hindu weddings occur around a sacred fire with Saat Phere (seven circles). Sikh weddings emphasize spiritual equality and partnership, while Hindu ceremonies involve more elaborate rituals and a pandit. Sikh weddings are typically shorter (30-45 minutes) and alcohol-free."
      }
    ]
  },

  "mexican": {
    title: "Mexican Wedding Traditions",
    seoTitle: "Mexican Wedding Ceremony Guide | Understanding Mexican Catholic Wedding Traditions & Customs",
    seoDescription: "Complete guide to Mexican wedding traditions including the Lazo, Arras, Las Madrinas, and vibrant celebrations. Learn about Mexican Catholic wedding rituals and customs.",
    heroImage: "/weddings/mexican-wedding.jpg",

    introHeading: "Vibrant celebrations honoring faith, family, and cultural heritage.",
    introBody: "Mexican weddings beautifully blend Catholic traditions with indigenous Mexican customs, creating colorful, festive celebrations centered on family and faith. From the symbolic Lazo (lasso) and Arras (coins) ceremonies to the vibrant Mariachi music and traditional dances, Mexican weddings are rich with meaning and joy. These celebrations often involve the entire community, with godparents (padrinos and madrinas) playing essential roles.",

    quickFacts: {
      duration: "60-90 minutes for Catholic Mass ceremony; reception 5-8 hours (often into late night)",
      venue: "Catholic church for ceremony; banquet hall, hacienda, or outdoor venue for reception",
      dressCode: "Formal or semi-formal; vibrant colors encouraged. White is reserved for bride",
      guestCount: "150-400 guests; Mexican weddings emphasize large family and community celebrations",
      musicStyle: "Catholic hymns during ceremony; Mariachi, banda, norteño, cumbia, and regional Mexican music at reception"
    },

    glossary: [
      { term: "Las Arras", pronunciation: "lahs AH-rahs", definition: "13 gold coins given by groom to bride, symbolizing commitment to provide and share" },
      { term: "El Lazo", pronunciation: "el LAH-soh", definition: "Lasso or cord placed in figure-eight around couple, symbolizing unity and eternal bond" },
      { term: "Padrinos/Madrinas", pronunciation: "pah-DREE-nohs / mah-DREE-nahs", definition: "Godparents who sponsor wedding elements and provide lifelong spiritual guidance" },
      { term: "La Vibora de la Mar", pronunciation: "lah vee-BOH-rah deh lah mahr", definition: "Sea snake dance where guests form a chain trying to bring down the standing couple" },
      { term: "Papel Picado", pronunciation: "pah-PEL pee-KAH-doh", definition: "Decorative perforated paper banners hung at ceremonies and receptions" },
      { term: "Mariachi", pronunciation: "mah-ree-AH-chee", definition: "Traditional Mexican musical ensemble with violins, trumpets, guitars, and traditional dress" },
    ],

    guestEtiquette: {
      heading: "What to Expect as a Guest",
      points: [
        "Arrive on time for the church ceremony. Mexican Catholic ceremonies are punctual and follow Mass structure",
        "Dress modestly for church. Women should cover shoulders; men wear suits or guayaberas",
        "Bring a monetary gift or physical gift from the registry. Cash in an envelope is traditional and appreciated",
        "The reception will start later than stated. 'Mexican time' is relaxed; arrive within 30-60 minutes of start time",
        "Participate in the money dance. Bring small bills to pin on the couple while dancing",
        "Join in La Vibora de la Mar when invited. It's a fun, inclusive tradition for all single guests",
        "Expect abundant food and drink. Traditional Mexican dishes, tequila, and festive toasts are common",
        "Be prepared to stay late. Mexican weddings often go until midnight or later with continuous dancing and celebration"
      ]
    },

    keyMoments: [
      {
        title: "Las Arras (Wedding Coins)",
        description: "The groom gives the bride 13 gold coins, blessed by the priest, symbolizing his commitment to support the family and share his worldly goods. The bride accepts them in her hands, showing her trust and commitment to the household."
      },
      {
        title: "El Lazo (The Lasso)",
        description: "A large floral garland, rosary, or silk cord is placed in a figure-eight around the couple's shoulders after vows, symbolizing their unity and eternal bond. Los padrinos de lazo (godparents of the lasso) perform this ritual."
      },
      {
        title: "Las Madrinas & Los Padrinos (Godparents)",
        description: "Multiple sets of godparents sponsor different aspects of the wedding—rings, flowers, Bible, Lazo, Arras. They provide financial support, spiritual guidance, and mentorship to the couple."
      },
      {
        title: "La Marcha (Processional)",
        description: "The bride enters with both parents (or father), symbolizing both families blessing the union. The groom also enters with his parents, emphasizing family involvement."
      },
      {
        title: "Veil & Bible Presentation",
        description: "The bride may carry a white Bible and rosary, gifts from godparents. A veil is sometimes placed over the bride, blessed by the priest, symbolizing purity and protection."
      },
      {
        title: "Catholic Mass",
        description: "Full Catholic ceremony with readings, Gospel, vows, ring exchange, and communion. The ceremony emphasizes the sacrament of marriage before God and the Church."
      },
      {
        title: "Mariachi Serenade",
        description: "Live Mariachi band performs traditional songs during the ceremony or reception. The groom may serenade the bride with 'Las Mañanitas' or romantic ballads."
      },
      {
        title: "La Vibora de la Mar (Sea Snake Dance)",
        description: "A festive reception tradition where guests form a human chain and try to bring down the bride and groom standing on chairs. It's playful, energetic, and involves everyone."
      },
      {
        title: "El Baile del Dólar (Money Dance)",
        description: "Guests pin money on the couple's clothing while dancing with them, providing financial help and blessings for their future together."
      },
      {
        title: "Tequila & Horchata Toasts",
        description: "Traditional drinks are served—tequila for toasts, horchata (sweet rice drink), and Mexican hot chocolate. Champagne is also common for modern celebrations."
      }
    ],

    fullDayTimeline: [
      {
        time: "2-3 hours before",
        title: "Getting Ready & Details",
        description: "Bride and groom preparation in separate locations. Hair, makeup, getting into attire. This is when I capture detail shots of your dress, rings, Las Arras coins, El Lazo, and any traditional Mexican items.",
        whatIllBeDoing: "My other shooter and I split coverage between the bride and groom, capturing both of you getting ready simultaneously. I'll film detail shots - your dress, suit, rings, the Arras coins, El Lazo, the white Bible and rosary if you have them, and any family heirlooms. I also capture candid moments with family as you prepare for this sacred day."
      },
      {
        time: "1 hour before",
        title: "First Look (Optional)",
        description: "Many couples choose a private first look before the ceremony to ease nerves and get portraits done early. This moment is just for you two.",
        whatIllBeDoing: "If you're doing a first look, my other shooter and I will capture the reveal and your reactions from multiple angles. This gives us 30-45 minutes of couple portraits before the ceremony starts, which takes pressure off the post-ceremony timeline. Your planner and I will coordinate to keep things flowing smoothly."
      },
      {
        time: "30 min before",
        title: "Guests Arrive & Pre-Ceremony",
        description: "Guests arrive at the church. The padrinos and madrinas prepare for their roles. Mariachi band may play as guests are seated.",
        whatIllBeDoing: "I'll be setting up ceremony audio - wireless mics on the priest and groom to capture the Catholic Mass, vows, and Mexican ceremony elements clearly. If there's a Mariachi band, I'll position myself to capture them as well. My team gets ready for the processional with both sets of parents. Final tech checks and we're set."
      },
      {
        time: "60-90 min",
        title: "Ceremony",
        description: "The Catholic wedding Mass includes readings, homily, vows, ring exchange, and Communion. The unique Mexican traditions - Las Arras coins ceremony and El Lazo - are incorporated during the Mass, performed by the padrinos and madrinas.",
        whatIllBeDoing: "My other shooter and I capture multiple angles throughout the ceremony - your processional with both sets of parents, the Arras coins presentation and blessing, El Lazo being placed in the figure-eight around you by the padrinos, and all the sacred moments of the Mass. We position ourselves respectfully in the church while documenting these meaningful Mexican-Catholic traditions. If there's a Mariachi serenade, we capture that too.",
        hasDetails: true
      },
      {
        time: "30-45 min",
        title: "Family Portraits",
        description: "Family formal portraits at the church or venue, including photos with all the padrinos and madrinas. Mexican families are often large and close-knit.",
        whatIllBeDoing: "I work with the photo team to film family formals efficiently. Mexican weddings have many padrinos/madrinas and large families, so we'll have an organized shot list. The vibrant colors and family groupings create beautiful portraits. I aim for 30-45 minutes max for all group coverage."
      },
      {
        time: "1 hour",
        title: "Cocktail Hour",
        description: "Guests enjoy appetizers, drinks, and perhaps tequila or margaritas while you finish portraits. Mexican appetizers and festive atmosphere set the tone for the celebration.",
        whatIllBeDoing: "I'm capturing candid guest interactions, Mexican décor details (papel picado, marigolds, vibrant colors), and the overall atmosphere. If there's time and light permits, your planner and I will coordinate for golden hour couple portraits."
      },
      {
        time: "5-6 hours",
        title: "Reception",
        description: "The evening celebration includes your grand entrance, first dances, dinner service with toasts, cake cutting, money dance, La Vibora de la Mar, and dancing to Mariachi, banda, or cumbia music. Mexican receptions are known for lasting late into the night with continuous celebration.",
        whatIllBeDoing: "My team and I capture every key moment - from your grand entrance and first dances to toasts, cake cutting, the money dance, and the incredible La Vibora de la Mar where guests form a human chain. Mexican receptions are vibrant and energetic - the Mariachi music, traditional dances, family joy, and celebration that goes late into the night. We position ourselves to capture both the scheduled moments and the spontaneous cultural celebrations throughout.",
        hasDetails: true
      },
      {
        time: "15-30 min",
        title: "Last Dance & Sendoff",
        description: "Final songs, last dance, and your exit. The celebration may continue, but this is your grand goodbye to officially depart.",
        whatIllBeDoing: "I'll coordinate the exit timing with your planner to make sure everything's ready. I'll set up lighting for your sendoff and capture both wide and tight shots of the exit, your final waves, and the car pulling away. Before I leave, I always find you to say my goodbyes, give hugs, and share my thanks and blessings."
      }
    ],

    culturalConsiderations: {
      heading: "Important Things to Know",
      points: [
        "Most Mexican weddings are Catholic ceremonies, often with full Mass including communion",
        "Family involvement is central—parents walk the couple down the aisle, godparents sponsor various elements",
        "Colors are vibrant—bold jewel tones, embroidered dresses, and festive decorations are common",
        "Papel picado (decorative paper banners) and marigolds are traditional decorations",
        "Receptions feature traditional foods like mole, tamales, pozole, and tres leches cake",
        "Regional variations exist—Northern vs Southern Mexican traditions, indigenous influences vary by region"
      ]
    },

    commonQuestions: [
      {
        q: "What is the Lazo ceremony and who performs it?",
        a: "El Lazo is a lasso or cord (often a large rosary, silk rope, or floral garland) placed over the couple's shoulders in a figure-eight after they exchange vows. It symbolizes their unity as one and their eternal bond. Los padrinos de lazo (godparents of the lasso) are chosen to place it on the couple during the ceremony. The Lazo remains on them through communion and is removed only at the end, symbolizing that they are bound together."
      },
      {
        q: "What are Las Arras and what do the 13 coins represent?",
        a: "Las Arras are 13 gold or silver coins presented by the groom to the bride during the ceremony. The 13 coins represent Jesus and his 12 apostles. They symbolize the groom's promise to provide for the family and share his earthly possessions, while the bride's acceptance shows her trust and commitment to managing their household wisely. The coins are often kept as family heirlooms."
      },
      {
        q: "What role do padrinos and madrinas play in Mexican weddings?",
        a: "Padrinos (godfathers) and madrinas (godmothers) are sponsors who provide financial, spiritual, and emotional support to the couple. Different padrinos sponsor specific items: rings, Lazo, Arras, Bible, flowers, or even the entire reception. Being asked to be a padrino/madrina is a great honor and creates a lifelong bond with the couple. They're like godparents for the marriage, offering guidance and support."
      },
      {
        q: "What is La Vibora de la Mar?",
        a: "La Vibora de la Mar ('The Sea Snake') is a fun reception tradition where all the single guests form a conga line/chain and dance around while the bride and groom stand on chairs. The 'snake' of guests tries to bring the couple down by moving closer and creating waves. It's playful, energetic, and gets everyone involved in the celebration."
      },
      {
        q: "What should I expect at a Mexican wedding reception?",
        a: "Mexican wedding receptions are lively, colorful celebrations with live Mariachi music, traditional dancing, and abundant food. Expect traditional dishes like mole, tamales, carnitas, and tres leches cake. There will be tequila toasts, the money dance, and La Vibora de la Mar. Celebrations often last late into the night with continuous music and dancing. Family and community participation is central, making everyone feel welcome."
      }
    ]
  }
};

export type CulturalWeddingKey = keyof typeof culturalWeddings;

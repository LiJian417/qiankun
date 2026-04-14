export type Lang = "zh" | "en" | "fr";

export interface MultiQuestion {
  id: number;
  text: Record<Lang, string>;
  options: { label: Record<Lang, string>; energy: number }[];
  encouragement: Record<Lang, string>;
}

export const mlQuestions: MultiQuestion[] = [
  {
    id: 1,
    text: {
      zh: "此刻，如果你是一棵树，你更希望自己是：",
      en: "If you were a tree right now, which would you want to be:",
      fr: "Si vous étiez un arbre en ce moment, lequel aimeriez-vous être :",
    },
    options: [
      { label: { zh: "山顶上孤独迎风的老松", en: "An old pine on a mountaintop, standing alone against the wind", fr: "Un vieux pin solitaire au sommet d'une montagne, défiant le vent" }, energy: 1 },
      { label: { zh: "院子里被细心照料的小盆栽", en: "A small potted plant cared for with love in a courtyard", fr: "Une petite plante en pot soignée avec amour dans une cour" }, energy: 0 },
      { label: { zh: "森林里默默扎根的大榕树", en: "A grand banyan tree silently rooting deep in a forest", fr: "Un grand banian enraciné silencieusement dans une forêt" }, energy: 2 },
      { label: { zh: "河边随风摇摆的垂柳", en: "A weeping willow swaying gently by a riverbank", fr: "Un saule pleureur se balançant doucement au bord d'une rivière" }, energy: 1 },
    ],
    encouragement: {
      zh: "你渴望的，正是你正在寻找的。",
      en: "What you long for is exactly what you're searching for.",
      fr: "Ce que vous désirez ardemment est précisément ce que vous cherchez.",
    },
  },
  {
    id: 2,
    text: {
      zh: "深夜独处时，你更常感受到的是：",
      en: "When you're alone late at night, what do you most often feel?",
      fr: "La nuit tard, quand vous êtes seul(e), que ressentez-vous le plus souvent ?",
    },
    options: [
      { label: { zh: "宁静与自在，像鱼回到深海", en: "Peace and freedom, like a fish returning to deep water", fr: "La paix et la liberté, comme un poisson retournant dans les profondeurs" }, energy: 2 },
      { label: { zh: "偶尔的空虚，但可以接受", en: "Occasional emptiness, but bearable", fr: "Un vide occasionnel, mais supportable" }, energy: 1 },
      { label: { zh: "一种难以言说的迷茫感", en: "An unspeakable sense of confusion", fr: "Un sentiment indicible de confusion" }, energy: 0 },
      { label: { zh: "焦虑，总觉得有什么事没做完", en: "Anxiety, always feeling something is left undone", fr: "De l'anxiété, l'impression constante qu'il reste quelque chose à faire" }, energy: -1 },
    ],
    encouragement: {
      zh: "能感知迷茫的人，往往走在觉醒的路上。",
      en: "Those who can feel confusion are often on the path to awakening.",
      fr: "Ceux qui peuvent percevoir la confusion marchent souvent sur le chemin de l'éveil.",
    },
  },
  {
    id: 3,
    text: {
      zh: "你更愿意为什么样的故事落泪？",
      en: "What kind of story would make you cry?",
      fr: "Pour quel genre d'histoire seriez-vous prêt(e) à pleurer ?",
    },
    options: [
      { label: { zh: "平凡人逆风翻盘的真实故事", en: "True stories of ordinary people turning the tide against adversity", fr: "Des histoires vraies de personnes ordinaires renversant le cours des choses" }, energy: 2 },
      { label: { zh: "一个人终于与自己和解的瞬间", en: "The moment when someone finally reconciles with themselves", fr: "L'instant où quelqu'un se réconcilie enfin avec lui-même" }, energy: 2 },
      { label: { zh: "悲剧结尾，遗憾的美感", en: "Tragic endings, the beauty of遗憾", fr: "Des fins tragiques, la beauté du regret" }, energy: 1 },
      { label: { zh: "不太会为故事哭，太不真实了", en: "Rarely cry for stories — they feel too unreal", fr: "Rarement pleurer pour des histoires — elles semblent trop irréelles" }, energy: 0 },
    ],
    encouragement: {
      zh: "能被故事打动的人，心是柔软的，也是强大的。",
      en: "Those moved by stories have a heart that is soft — and strong.",
      fr: "Ceux qui sont émus par les histoires ont un cœur à la fois tendre et fort.",
    },
  },
  {
    id: 4,
    text: {
      zh: "如果旅行只能带一样东西，你会带：",
      en: "If you could only take one thing on a journey, it would be:",
      fr: "Si vous ne pouviez emporter qu'une seule chose en voyage, ce serait :",
    },
    options: [
      { label: { zh: "一本想读很久但没时间读的书", en: "A book you've wanted to read but never had time for", fr: "Un livre que vous vouliez lire depuis longtemps mais que vous n'avez jamais eu le temps de lire" }, energy: 1 },
      { label: { zh: "一部能随时拍照的相机", en: "A camera to capture moments anywhere", fr: "Un appareil photo pour saisir des instants à tout moment" }, energy: 1 },
      { label: { zh: "一颗愿意迷路的心", en: "A heart willing to get lost", fr: "Un cœur prêt à se perdre" }, energy: 2 },
      { label: { zh: "什么都不带，轻装上阵", en: "Nothing — travel light", fr: "Rien — voyager sans rien" }, energy: 2 },
    ],
    encouragement: {
      zh: "你越放下执念，世界就越向你敞开。",
      en: "The more you release your grip, the more the world opens up to you.",
      fr: "Plus vous vous libérez de vos attachements, plus le monde s'ouvre à vous.",
    },
  },
  {
    id: 5,
    text: {
      zh: "你发现自己最常对谁说「没事，我很好」？",
      en: "To whom do you most often say 'I'm fine, it's nothing'?",
      fr: "À qui dites-vous le plus souvent « Ça va, tout va bien » ?",
    },
    options: [
      { label: { zh: "父母或家人", en: "My parents or family", fr: "Mes parents ou ma famille" }, energy: -1 },
      { label: { zh: "朋友或同事", en: "Friends or colleagues", fr: "Des amis ou des collègues" }, energy: 0 },
      { label: { zh: "几乎不说，真的好的时候会说实话", en: "I rarely say it — when I'm fine, I tell the truth", fr: "Je le dis rarement — quand ça va bien, je dis la vérité" }, energy: 2 },
      { label: { zh: "自己，对自己说", en: "To myself, saying it to myself", fr: "À moi-même, en me le disant à moi-même" }, energy: -2 },
    ],
    encouragement: {
      zh: "学会说「我不太好」的那一天，你就已经好了一半。",
      en: "The day you learn to say 'I'm not okay' is the day you're already half-way better.",
      fr: "Le jour où vous saurez dire « Je ne vais pas bien », vous serez déjà à moitié rétabli(e).",
    },
  },
  {
    id: 6,
    text: {
      zh: "你更相信一个人的什么？",
      en: "What do you most trust about a person?",
      fr: "En quoi faites-vous le plus confiance chez quelqu'un ?",
    },
    options: [
      { label: { zh: "他说过的话——言出必行", en: "Their words — they do what they say", fr: "Leurs paroles — ils tiennent leurs promesses" }, energy: 1 },
      { label: { zh: "他做事的方式——行动胜于雄辩", en: "How they act — actions speak louder than words", fr: "Leur façon d'agir — les actes valent plus que les mots" }, energy: 2 },
      { label: { zh: "他沉默时的态度——细节见真心", en: "Their silence — the details reveal the truth", fr: "Leur silence — les détails révèlent la vérité" }, energy: 2 },
      { label: { zh: "直觉，我也说不清为什么", en: "My intuition — I can't explain why", fr: "Mon intuition — je ne peux pas expliquer pourquoi" }, energy: 1 },
    ],
    encouragement: {
      zh: "你的直觉，是你所有经历沉淀出的智慧。",
      en: "Your intuition is the wisdom distilled from all your experiences.",
      fr: "Votre intuition est la sagesseissue de toutes vos expériences.",
    },
  },
  {
    id: 7,
    text: {
      zh: "以下哪种感觉，你最近体验得最多？",
      en: "Which of the following feelings have you experienced most recently?",
      fr: "Laquelle de ces sensations avez-vous vécue le plus récemment ?",
    },
    options: [
      { label: { zh: "完成一件事后的满足感", en: "The satisfaction of completing something", fr: "La satisfaction d'accomplir quelque chose" }, energy: 2 },
      { label: { zh: "等待结果的忐忑", en: "The anxiety of waiting for results", fr: "L'anxiété d'attendre des résultats" }, energy: 0 },
      { label: { zh: "被困住的无力感", en: "The helplessness of feeling trapped", fr: "Le sentiment d'impuissance d'être bloqué(e)" }, energy: -1 },
      { label: { zh: "平静，什么都淡淡的", en: "Calm — everything feels muted", fr: "Du calme — tout semble adouci" }, energy: 1 },
    ],
    encouragement: {
      zh: "平静不是麻木，平静是风暴之后的珍贵礼物。",
      en: "Calm is not numbness — calm is the precious gift after the storm.",
      fr: "Le calme n'est pas l'engourdissement — le calme est le précieux cadeau après la tempête.",
    },
  },
  {
    id: 8,
    text: {
      zh: "如果你的生活是一部电影，它现在最像哪种类型？",
      en: "If your life were a movie, what genre would it be right now?",
      fr: "Si votre vie était un film, quel genre serait-elle en ce moment ?",
    },
    options: [
      { label: { zh: "治愈系——温暖但有点平淡", en: "A healing drama — warm but a little flat", fr: "Un drame chaleureux — tendre mais un peu terni" }, energy: 1 },
      { label: { zh: "悬疑片——不知道下一秒发生什么", en: "A mystery — you never know what happens next", fr: "Un thriller — on ne sait jamais ce qui va se passer" }, energy: 1 },
      { label: { zh: "公路片——在路上的感觉", en: "A road movie — always on the move", fr: "Un film de route — toujours en mouvement" }, energy: 2 },
      { label: { zh: "文艺片——别人觉得无聊，但我懂", en: "An arthouse film — others find it boring, but I understand", fr: "Un film d'auteur — les autres le trouvent ennuyeux, mais je comprends" }, energy: 2 },
    ],
    encouragement: {
      zh: "无论哪种类型，你都是这部戏唯一的主角。",
      en: "Whatever the genre, you're the only protagonist of this story.",
      fr: "Quel que soit le genre, vous êtes le/la seul(e) protagoniste de cette histoire.",
    },
  },
  {
    id: 9,
    text: {
      zh: "你更倾向于用什么方式消化负面情绪？",
      en: "How do you prefer to process negative emotions?",
      fr: "Comment préférez-vous digérer les émotions négatives ?",
    },
    options: [
      { label: { zh: "写下来，文字是出口", en: "Writing them down — words are an outlet", fr: "Les écrire — les mots sont une soupape" }, energy: 2 },
      { label: { zh: "找朋友聊聊，哪怕只是发消息", en: "Talking to a friend, even just a message", fr: "En parler à un ami, même juste un message" }, energy: 1 },
      { label: { zh: "一个人待着，慢慢消化", en: "Being alone and letting time do its work", fr: "Rester seul(e) et laisser le temps faire son œuvre" }, energy: 1 },
      { label: { zh: "睡觉，睡醒就不记得了", en: "Sleeping it off — wake up and forget", fr: "Dormir — au réveil on oublie" }, energy: 0 },
    ],
    encouragement: {
      zh: "愿意面对情绪的人，比逃避的人勇敢一百倍。",
      en: "Those who face their emotions are a hundred times braver than those who flee them.",
      fr: "Ceux qui font face à leurs émotions sont cent fois plus courageux que ceux qui les fuient.",
    },
  },
  {
    id: 10,
    text: {
      zh: "你最近一次真诚地夸奖别人是什么时候？",
      en: "When was the last time you genuinely complimented someone?",
      fr: "Quand avez-vous sincèrement complimenté quelqu'un pour la dernière fois ?",
    },
    options: [
      { label: { zh: "今天或昨天，很自然", en: "Today or yesterday, quite naturally", fr: "Aujourd'hui ou hier, très naturellement" }, energy: 2 },
      { label: { zh: "这一周内", en: "Within this past week", fr: "Au cours de cette semaine" }, energy: 1 },
      { label: { zh: "想不起来了，会觉得有点尴尬", en: "Can't remember — it feels a bit awkward", fr: "Je ne m'en souviens pas — ça me semble un peu gênant" }, energy: 0 },
      { label: { zh: "经常，但对方好像不太在意", en: "Often, but they don't seem to care", fr: "Souvent, mais l'autre ne semble pas y prêter attention" }, energy: 0 },
    ],
    encouragement: {
      zh: "真心的赞美，是这个世界上最稀缺的光。",
      en: "A sincere compliment is the rarest light in the world.",
      fr: "Un compliment sincère est la lumière la plus rare au monde.",
    },
  },
  {
    id: 11,
    text: {
      zh: "你更羡慕哪一种人？",
      en: "Which type of person do you admire most?",
      fr: "Quel type de personne admirez-vous le plus ?",
    },
    options: [
      { label: { zh: "知道自己要什么，并一直在追求的人", en: "Those who know what they want and pursue it", fr: "Ceux qui savent ce qu'ils veulent et le poursuivent" }, energy: 2 },
      { label: { zh: "没太多追求，但活得很快乐的人", en: "Those with few ambitions but who are genuinely happy", fr: "Ceux qui ont peu d'ambitions mais qui sont vraiment heureux" }, energy: 2 },
      { label: { zh: "经历过大风大浪，却依然温柔的人", en: "Those who've been through storms yet remain gentle", fr: "Ceux qui ont traversé des tempêtes tout en restant doux" }, energy: 2 },
      { label: { zh: "不羡慕任何人，包括自己", en: "Those who envy no one, including themselves", fr: "Ceux qui n'envient personne, eux-mêmes inclus" }, energy: 1 },
    ],
    encouragement: {
      zh: "你羡慕的，正是你内心渴望成为的样子。",
      en: "What you admire in others is exactly who your heart longs to become.",
      fr: "Ce que vous admirez chez les autres est exactement ce que votre cœur désire devenir.",
    },
  },
  {
    id: 12,
    text: {
      zh: "如果可以改变过去的一件事，你会改变吗？",
      en: "If you could change one thing from your past, would you?",
      fr: "Si vous pouviez changer une chose dans votre passé, le feriez-vous ?",
    },
    options: [
      { label: { zh: "不会，每一步都塑造了现在的我", en: "No — every step shaped who I am today", fr: "Non — chaque étape a façonné ce que je suis aujourd'hui" }, energy: 2 },
      { label: { zh: "想改变，但不确定会不会更好", en: "I'd like to, but I'm not sure it would be better", fr: "J'aimerais bien, mais je ne suis pas sûr(e) que ce serait mieux" }, energy: 0 },
      { label: { zh: "会的，那个遗憾太重了", en: "Yes — that regret is too heavy to carry", fr: "Oui — ce regret est trop lourd à porter" }, energy: -1 },
      { label: { zh: "从没想过这个问题", en: "Never thought about it", fr: "Je n'y ai jamais pensé" }, energy: 1 },
    ],
    encouragement: {
      zh: "过去无法重写，但今天你可以写一个新章节。",
      en: "The past cannot be rewritten, but today you can write a new chapter.",
      fr: "Le passé ne peut pas être réécrit, mais aujourd'hui vous pouvez écrire un nouveau chapitre.",
    },
  },
  {
    id: 13,
    text: {
      zh: "你更喜欢自己独处时的一面，还是和朋友在一起时的一面？",
      en: "Do you prefer who you are when you're alone, or with friends?",
      fr: "Préférez-vous ce que vous êtes quand vous êtes seul(e) ou avec des amis ?",
    },
    options: [
      { label: { zh: "独处时——那是更真实的自己", en: "Alone — that's my truest self", fr: "Seul(e) — c'est mon moi le plus authentique" }, energy: 2 },
      { label: { zh: "和朋友在一起时——那是我更喜欢的自己", en: "With friends — that's the version of me I like more", fr: "Avec des amis — c'est la version de moi que je préfère" }, energy: 1 },
      { label: { zh: "一样喜欢，都是我", en: "I like both equally — they're both me", fr: "J'aime les deux同样 — ce sont tous deux moi" }, energy: 2 },
      { label: { zh: "都不喜欢，总觉得自己不够好", en: "I don't like either version — always feeling not good enough", fr: "Je n'aime aucune des deux — j'ai toujours l'impression de ne pas être assez bien" }, energy: -1 },
    ],
    encouragement: {
      zh: "能接纳两个自己的人，才是完整的。",
      en: "Those who can embrace both sides of themselves are whole.",
      fr: "Ceux qui peuvent accepter leurs deux côtés sont des êtres entiers.",
    },
  },
  {
    id: 14,
    text: {
      zh: "以下哪个词，最接近你现在的状态？",
      en: "Which word best describes your current state?",
      fr: "Lequel de ces mots correspond le mieux à votre état actuel ?",
    },
    options: [
      { label: { zh: "生长中", en: "Growing", fr: "En croissance" }, energy: 2 },
      { label: { zh: "迷茫中", en: "Lost", fr: "Perdu(e)" }, energy: 0 },
      { label: { zh: "疗愈中", en: "Healing", fr: "En guérison" }, energy: 1 },
      { label: { zh: "摆烂中", en: "Letting go", fr: "Lâchant prise" }, energy: 0 },
    ],
    encouragement: {
      zh: "无论是哪种状态，你都还活着，还在感受。这就够了。",
      en: "Whatever the state, you're alive and still feeling. That's enough.",
      fr: "Quel que soit l'état, vous êtes vivant(e) et vous ressentez encore. C'est suffisant.",
    },
  },
  {
    id: 15,
    text: {
      zh: "你更愿意把时间花在什么事情上？",
      en: "What would you rather spend your time on?",
      fr: "Sur quoi préféreriez-vous passer votre temps ?",
    },
    options: [
      { label: { zh: "学习新东西，让自己在变强", en: "Learning new things and growing stronger", fr: "Apprendre de nouvelles choses et devenir plus fort(e)" }, energy: 2 },
      { label: { zh: "和喜欢的人待在一起", en: "Being with people I love", fr: "Être avec les gens que j'aime" }, energy: 1 },
      { label: { zh: "发呆、散步、看云，什么都不做", en: "Daydreaming, walking, watching clouds — doing nothing", fr: "Rêver, marcher, regarder les nuages — ne rien faire" }, energy: 2 },
      { label: { zh: "工作或赚钱，实用最重要", en: "Working or making money — practicality first", fr: "Travailler ou gagner de l'argent — le pratique d'abord" }, energy: 0 },
    ],
    encouragement: {
      zh: "愿意发呆的人，往往是最有深度的人。",
      en: "Those willing to simply exist are often the most profound.",
      fr: "Ceux qui acceptent de ne rien faire sont souvent les plus profonds.",
    },
  },
  {
    id: 16,
    text: {
      zh: "当有人说「你变了」，你的第一反应是：",
      en: "When someone says 'You've changed,' your first reaction is:",
      fr: "Quand quelqu'un dit « Tu as changé », votre première réaction est :",
    },
    options: [
      { label: { zh: "是吗？我没意识到", en: "Have I? I didn't notice", fr: "Vraiment ? Je ne m'en étais pas rendu(e) compte" }, energy: 0 },
      { label: { zh: "成长了啊，难道是坏事吗", en: "Growing up — is that a bad thing?", fr: "Une croissance — est-ce une mauvaise chose ?" }, energy: 2 },
      { label: { zh: "有点受伤，我哪里变了", en: "A little hurt — in what way did I change?", fr: "Un peu blessé(e) — en quoi ai-je changé ?" }, energy: -1 },
      { label: { zh: "无所谓，我不是为了别人活的", en: "Whatever — I don't live for others' opinions", fr: "Peu importe — je ne vis pas pour les opinions des autres" }, energy: 2 },
    ],
    encouragement: {
      zh: "改变不是背叛，改变是生命最诚实的语言。",
      en: "Change isn't betrayal — change is life's most honest language.",
      fr: "Le changement n'est pas une trahison — le changement est le langage le plus honnête de la vie.",
    },
  },
  {
    id: 17,
    text: {
      zh: "你觉得自己最宝贵的品质是什么？",
      en: "What do you consider your most valuable quality?",
      fr: "Quelle qualité estimez-vous la plus précieuse ?",
    },
    options: [
      { label: { zh: "善良，愿意相信人", en: "Kindness — willing to trust people", fr: "La gentillesse — prêt(e) à faire confiance aux gens" }, energy: 1 },
      { label: { zh: "坚韧，打不垮", en: "Resilience — I don't break", fr: "La résilience — je ne cède pas" }, energy: 2 },
      { label: { zh: "敏感，能感知别人感受", en: "Sensitivity — able to feel what others feel", fr: "La sensibilité — capable de ressentir ce que les autres ressentent" }, energy: 1 },
      { label: { zh: "理性，不会冲动", en: "Rationality — I don't act on impulse", fr: "La rationalité — je n'agis pas sur un coup de tête" }, energy: 0 },
    ],
    encouragement: {
      zh: "你的品质，是世界少你一份就会黯淡的那种。",
      en: "Your quality is the kind the world grows dimmer without.",
      fr: "Votre qualité est de celles dont le monde se priverait en s'assombrissant.",
    },
  },
  {
    id: 18,
    text: {
      zh: "以下哪种痛苦，你最能感同身受？",
      en: "Which kind of suffering do you feel most deeply?",
      fr: "Quelle sorte de souffrance ressentez-vous le plus profondément ?",
    },
    options: [
      { label: { zh: "不被理解的孤独", en: "The loneliness of being misunderstood", fr: "La solitude de ne pas être compris(e)" }, energy: 1 },
      { label: { zh: "对自己感到失望的无力", en: "The helplessness of being disappointed in yourself", fr: "L'impuissance d'être déçu(e) par soi-même" }, energy: 0 },
      { label: { zh: "爱而不得的遗憾", en: "The regret of loving without having", fr: "Le regret d'aimer sans obtenir" }, energy: 0 },
      { label: { zh: "想要前进却不知道方向在哪", en: "Wanting to move forward but not knowing where", fr: "Vouloir avancer sans savoir où aller" }, energy: 1 },
    ],
    encouragement: {
      zh: "能感受痛苦的人，才有疗愈他人的可能。",
      en: "Those who can feel pain are capable of healing others.",
      fr: "Ceux qui peuvent ressentir la douleur sont capables de guérir les autres.",
    },
  },
  {
    id: 19,
    text: {
      zh: "你最害怕失去什么？",
      en: "What do you fear losing most?",
      fr: "Que craignez-vous le plus de perdre ?",
    },
    options: [
      { label: { zh: "家人或挚爱之人", en: "Family or loved ones", fr: "La famille ou les êtres chers" }, energy: 0 },
      { label: { zh: "对生活的热情和好奇心", en: "My passion for life and curiosity", fr: "Ma passion pour la vie et ma curiosité" }, energy: 2 },
      { label: { zh: "自我认同感——我是谁", en: "My sense of identity — who I am", fr: "Mon sens de l'identité — qui je suis" }, energy: 0 },
      { label: { zh: "健康或精力", en: "Health or energy", fr: "La santé ou l'énergie" }, energy: 0 },
    ],
    encouragement: {
      zh: "只要热情还在，一切都可以重来。",
      en: "As long as your passion remains, everything can be rebuilt.",
      fr: "Tant que la passion demeure, tout peut être reconstruit.",
    },
  },
  {
    id: 20,
    text: {
      zh: "你更喜欢听什么样的歌？",
      en: "What kind of music do you most enjoy?",
      fr: "Quel genre de musique préférez-vous écouter ?",
    },
    options: [
      { label: { zh: "能让我哭出来的歌", en: "Songs that make me cry", fr: "Des chansons qui me font pleurer" }, energy: 2 },
      { label: { zh: "节奏感强，能让我振奋的歌", en: "High-energy songs that lift me up", fr: "Des chansons énergiques qui me remontent" }, energy: 1 },
      { label: { zh: "安静的、让人平静的歌", en: "Quiet, calming songs", fr: "Des chansons calmes et apaisantes" }, energy: 2 },
      { label: { zh: "经典老歌，承载记忆的那种", en: "Classic old songs that carry memories", fr: "De vieux classiques qui portent des souvenirs" }, energy: 1 },
    ],
    encouragement: {
      zh: "音乐是你灵魂的避难所，也是你的力量源泉。",
      en: "Music is your soul's sanctuary and the source of your strength.",
      fr: "La musique est le sanctuaire de votre âme et la source de votre force.",
    },
  },
  {
    id: 21,
    text: {
      zh: "如果明天是你人生最后一天，你最可能做什么？",
      en: "If tomorrow were your last day, what would you most likely do?",
      fr: "Si demain était votre dernier jour, que feriez-vous probablement ?",
    },
    options: [
      { label: { zh: "和最爱的人待在一起，不说话也好", en: "Be with the person I love most, even in silence", fr: "Être avec ceux que j'aime le plus, même en silence" }, energy: 2 },
      { label: { zh: "一个人安静地回顾这一生", en: "Quietly reflect on my life, alone", fr: "Réfléchir calmement à ma vie, seul(e)" }, energy: 1 },
      { label: { zh: "还有很多事没做，不敢想", en: "Too many things left undone — can't even think about it", fr: "Trop de choses non faites — je n'ose même pas y penser" }, energy: -1 },
      { label: { zh: "照常过这一天，每一天都一样重要", en: "Live it normally — every day matters equally", fr: "Le vivre normalement — chaque jour compte également" }, energy: 2 },
    ],
    encouragement: {
      zh: "今天醒来，就是上天给你的礼物。",
      en: "Waking up today is a gift you were given by the universe.",
      fr: "Vous réveiller aujourd'hui est un cadeau que l'univers vous a fait.",
    },
  },
  {
    id: 22,
    text: {
      zh: "你更倾向于用什么词形容自己的人生？",
      en: "What word would you use to describe your life?",
      fr: "Quel mot qualifierait le mieux votre vie ?",
    },
    options: [
      { label: { zh: "正在攀登一座山", en: "Climbing a mountain", fr: "En train de gravir une montagne" }, energy: 1 },
      { label: { zh: "在一片大海里漂流", en: "Drifting in an ocean", fr: "À la dérive dans un océan" }, energy: 0 },
      { label: { zh: "四季更替，有起有落，但总体在生长", en: "Seasons changing — ups and downs, but overall growing", fr: "Des saisons changeantes — des hauts et des bas, mais une croissance globale" }, energy: 2 },
      { label: { zh: "还在序章，还没真正开始", en: "Still in the prologue — hasn't truly begun", fr: "Encore dans le prologue — ça n'a pas vraiment commencé" }, energy: 0 },
    ],
    encouragement: {
      zh: "无论现在在哪个章节，都还有无数页等待书写。",
      en: "Whatever chapter you're in, countless pages remain to be written.",
      fr: "Quel que soit le chapitre où vous en êtes, d'innombrables pages restent à écrire.",
    },
  },
  {
    id: 23,
    text: {
      zh: "你更认同以下哪句话？",
      en: "Which of the following do you most agree with?",
      fr: "Laquelle de ces affirmations résonne-t-elle le plus en vous ?",
    },
    options: [
      { label: { zh: "「苦难是化了妆的祝福」", en: "Suffering is a blessing in disguise", fr: "La souffrance est une bénédiction déguisée" }, energy: 1 },
      { label: { zh: "「所有的经历都是有意义的」", en: "All experiences are meaningful", fr: "Toutes les expériences ont un sens" }, energy: 2 },
      { label: { zh: "「活在当下比追问意义更重要」", en: "Living in the moment matters more than searching for meaning", fr: "Vivre l'instant présent compte plus que de chercher un sens" }, energy: 2 },
      { label: { zh: "「意义是人自己赋予的」", en: "Meaning is something we create ourselves", fr: "Le sens est quelque chose que l'on crée soi-même" }, energy: 2 },
    ],
    encouragement: {
      zh: "你的信念，正在塑造你的世界。",
      en: "Your beliefs are shaping your world right now.",
      fr: "Vos croyances façonnent votre monde en ce moment même.",
    },
  },
  {
    id: 24,
    text: {
      zh: "以下哪种场景最让你感到安心？",
      en: "Which scene makes you feel the most at peace?",
      fr: "Quelle scène vous met le plus en paix ?",
    },
    options: [
      { label: { zh: "大雨天，窝在家里，什么都不用想", en: "Rainy day, cozy at home, nothing to worry about", fr: "Jour de pluie, bien au chaud chez soi, rien à craindre" }, energy: 2 },
      { label: { zh: "深夜的便利店，只有你和店员", en: "A late-night convenience store — just you and the clerk", fr: "Un便利店 de nuit — juste vous et le/la vendeur(se)" }, energy: 1 },
      { label: { zh: "图书馆里，周围都是书和安静的人", en: "In a library, surrounded by books and quiet people", fr: "Dans une bibliothèque, entouré(e) de livres et de gens silencieux" }, energy: 2 },
      { label: { zh: "山顶或海边，大到可以放下所有心事的地方", en: "On a mountaintop or by the sea — vast enough to release all worries", fr: "En haut d'une montagne ou au bord de la mer — assez vaste pour lâcher tous les souci" }, energy: 1 },
    ],
    encouragement: {
      zh: "能给自己创造安全感的人，是真正的自由者。",
      en: "Those who can create their own sense of safety are truly free.",
      fr: "Ceux qui peuvent créer leur propre sentiment de sécurité sont vraiment libres.",
    },
  },
  {
    id: 25,
    text: {
      zh: "你觉得自己最难说出口的一句话是什么？",
      en: "What do you find hardest to say out loud?",
      fr: "Qu'avez-vous le plus de mal à dire à voix haute ?",
    },
    options: [
      { label: { zh: "「我需要你」", en: "I need you", fr: "J'ai besoin de toi" }, energy: -1 },
      { label: { zh: "「对不起，我错了」", en: "I'm sorry, I was wrong", fr: "Je suis désolé(e), j'avais tort" }, energy: 0 },
      { label: { zh: "「我爱你」（对父母或重要的人）", en: "I love you (to parents or someone important)", fr: "Je t'aime (à ses parents ou à quelqu'un d'important)" }, energy: 0 },
      { label: { zh: "「我做不到」", en: "I can't do it", fr: "Je n'y arrive pas" }, energy: -1 },
    ],
    encouragement: {
      zh: "那些最难说出口的话，往往是最需要说的话。",
      en: "The words hardest to say are often the ones that need to be said most.",
      fr: "Les mots les plus difficiles à prononcer sont souvent ceux qui ont le plus besoin de l'être.",
    },
  },
  {
    id: 26,
    text: {
      zh: "当你回望过去，你更常感到的是：",
      en: "When you look back at the past, what do you most often feel?",
      fr: "Quand vous regardez en arrière, que ressentez-vous le plus souvent ?",
    },
    options: [
      { label: { zh: "感恩，谢谢那些经历塑造了现在的我", en: "Gratitude — those experiences shaped who I am", fr: "De la gratitude — ces expériences m'ont façonné(e)" }, energy: 2 },
      { label: { zh: "遗憾，有些事如果当时做得更好", en: "Regret — wishing I'd done some things better", fr: "Du regret — wishing j'aurais fait certaines choses mieux" }, energy: 0 },
      { label: { zh: "平静，过去已经过去了", en: "Calm — the past is the past", fr: "Du calme — le passé est le passé" }, energy: 1 },
      { label: { zh: "复杂，说不清楚什么感觉", en: "Complicated — hard to name the feeling", fr: "Complicité — difficile de nommer le sentiment" }, energy: 1 },
    ],
    encouragement: {
      zh: "能带着感恩回望的人，才能轻装前行。",
      en: "Only those who look back with gratitude can move forward unburdened.",
      fr: "Seuls ceux qui regardent en arrière avec gratitude peuvent avancer allégé(e)s.",
    },
  },
  {
    id: 27,
    text: {
      zh: "你理想中的「成功的一天」是什么样的？",
      en: "What does your ideal 'successful day' look like?",
      fr: "À quoi ressemble votre « journée réussie » idéale ?",
    },
    options: [
      { label: { zh: "完成了很多任务，很有成就感", en: "Accomplishing lots of tasks with a sense of achievement", fr: "Accomplir beaucoup de tâches avec un sentiment d'accomplissement" }, energy: 1 },
      { label: { zh: "什么也没做，但内心很平静很满足", en: "Doing nothing, yet feeling calm and content inside", fr: "Ne rien faire, tout en se sentant calme et satisfait(e)" }, energy: 2 },
      { label: { zh: "和喜欢的人在一起，很开心", en: "Spending time with loved ones, feeling joyful", fr: "Passer du temps avec ceux qu'on aime, se sentir heureux" }, energy: 2 },
      { label: { zh: "有所突破，比昨天进步了一点", en: "Making a breakthrough — a little better than yesterday", fr: "Faire une percée — un peu mieux qu'hier" }, energy: 2 },
    ],
    encouragement: {
      zh: "成功的定义，从来都在你自己手里。",
      en: "The definition of success has always been in your hands.",
      fr: "La définition du succès a toujours été entre vos mains.",
    },
  },
  {
    id: 28,
    text: {
      zh: "以下哪种关系，你目前最需要？",
      en: "What kind of connection do you need most right now?",
      fr: "Quel type de relation avez-vous le plus besoin en ce moment ?",
    },
    options: [
      { label: { zh: "一个愿意认真听我说话的人", en: "Someone who truly listens to me", fr: "Quelqu'un qui m'écoute vraiment" }, energy: 1 },
      { label: { zh: "一个和我并肩作战的同行者", en: "A companion who walks the path alongside me", fr: "Un/une compagnon(ne) qui marche à mes côtés" }, energy: 1 },
      { label: { zh: "一个不需要说话也能在一起的人", en: "Someone I can just be with in silence", fr: "Quelqu'un avec qui je peux être ensemble sans parler" }, energy: 2 },
      { label: { zh: "不需要关系，我自己就很好", en: "No relationship needed — I'm fine on my own", fr: "Pas besoin de relation — je vais bien seul(e)" }, energy: 1 },
    ],
    encouragement: {
      zh: "能独处的人有力量，需要他人的人有温度。",
      en: "Those who can be alone have strength. Those who need others have warmth.",
      fr: "Ceux qui peuvent être seuls ont de la force. Ceux qui ont besoin des autres ont de la chaleur.",
    },
  },
  {
    id: 29,
    text: {
      zh: "你最想对自己说的一句话（如果可以对自己说）是什么？",
      en: "If you could say one thing to yourself, what would it be?",
      fr: "Si vous pouviez vous dire une chose à vous-même, quelle serait-elle ?",
    },
    options: [
      { label: { zh: "「你已经很努力了，真的」", en: "You've worked so hard, really", fr: "Tu as tellement essayé, vraiment" }, energy: 2 },
      { label: { zh: "「别怕，继续往前走」", en: "Don't be afraid, keep moving forward", fr: "N'aie pas peur, continue d'avancer" }, energy: 1 },
      { label: { zh: "「我为你骄傲」", en: "I'm proud of you", fr: "Je suis fier/fière de toi" }, energy: 2 },
      { label: { zh: "「对不起，让你受委屈了」", en: "I'm sorry — I've let you down", fr: "Je suis désolé(e) — je t'ai déçu(e)" }, energy: 1 },
    ],
    encouragement: {
      zh: "请对自己说一句你很少说出口的温柔话。",
      en: "Say something gentle to yourself — something you rarely voice.",
      fr: "Dites-vous quelque chose de gentil — quelque chose que vous dites rarement.",
    },
  },
  {
    id: 30,
    text: {
      zh: "你更相信时间会带走什么？",
      en: "What do you believe time will take away?",
      fr: "Que croyez-vous que le temps emportera ?",
    },
    options: [
      { label: { zh: "伤痛，一切都会好起来的", en: "The pain — everything will get better", fr: "La douleur — tout ira mieux" }, energy: 2 },
      { label: { zh: "执念，那些当初觉得天大的事", en: "The obsession — things that once seemed monumental", fr: "L'obsession — ces choses qui semblaient autrefois vitales" }, energy: 2 },
      { label: { zh: "遗憾，最终会和解", en: "The regret — eventually we'll make peace with it", fr: "Le regret —Eventually, nous nous réconcilierons avec" }, energy: 1 },
      { label: { zh: "记忆，有些东西时间也带不走", en: "Memories — some things time can't erase", fr: "Les souvenirs — certaines choses que le temps ne peut effacer" }, energy: 0 },
    ],
    encouragement: {
      zh: "时间不一定是解药，但经历和时间加在一起一定是。",
      en: "Time alone isn't the cure — but experience plus time always is.",
      fr: "Le temps seul n'est pas le remède — mais l'expérience plus le temps, oui.",
    },
  },
  {
    id: 31,
    text: {
      zh: "以下哪种「放弃」，你觉得最需要勇气？",
      en: "Which kind of 'letting go' do you think takes the most courage?",
      fr: "Quel genre de « lâcher-prise » pensez-vous demander le plus de courage ?",
    },
    options: [
      { label: { zh: "放弃一个深爱的人", en: "Letting go of someone you deeply love", fr: "Lâcher quelqu'un qu'on aime profondément" }, energy: 0 },
      { label: { zh: "放弃一个坚持了很久的梦想", en: "Abandoning a long-held dream", fr: "Abandonner un rêve longtemps choyé" }, energy: 1 },
      { label: { zh: "放弃在别人眼中的形象，做真实的自己", en: "Dropping the image others have of you to be your true self", fr: "Renoncer à l'image que les autres ont de vous pour être authentique" }, energy: 2 },
      { label: { zh: "放弃对「应该」活成什么样的执念", en: "Releasing the obsession with how you 'should' live", fr: "Libérer l'obsession de comment on « devrait » vivre" }, energy: 2 },
    ],
    encouragement: {
      zh: "有勇气放弃的人，才有勇气选择真正想要的。",
      en: "Those with the courage to let go have the courage to choose what they truly want.",
      fr: "Ceux qui ont le courage de lâcher ont le courage de choisir ce qu'ils veulent vraiment.",
    },
  },
  {
    id: 32,
    text: {
      zh: "你觉得自己最需要学会的一课是什么？",
      en: "What do you feel you most need to learn?",
      fr: "Qu'avez-vous le sentiment de devoir apprendre le plus ?",
    },
    options: [
      { label: { zh: "接受——接受不完美的自己", en: "Acceptance — accepting your imperfect self", fr: "L'acceptation — accepter son moi imparfait" }, energy: 2 },
      { label: { zh: "放下——放下对结果的执念", en: "Letting go — releasing attachment to results", fr: "Lâcher prise — se libérer de l'attachement aux résultats" }, energy: 2 },
      { label: { zh: "信任——相信好事会发生", en: "Trust — believing good things will happen", fr: "La confiance — croire que de bonnes choses arriveront" }, energy: 1 },
      { label: { zh: "表达——把心里话说出来", en: "Expression — saying what's in your heart", fr: "L'expression — dire ce qui est dans votre cœur" }, energy: 1 },
    ],
    encouragement: {
      zh: "你缺的这一课，也是大多数人缺的那一课。",
      en: "The lesson you need most is the same one most people need.",
      fr: "La leçon dont vous avez le plus besoin est celle dont la plupart des gens ont besoin.",
    },
  },
  {
    id: 33,
    text: {
      zh: "在你心里，什么是「被爱」的感觉？",
      en: "In your heart, what does 'being loved' feel like?",
      fr: "Dans votre cœur, à quoi ressemble le fait d'être aimé(e) ?",
    },
    options: [
      { label: { zh: "有人记得我喜欢吃什么，会特意准备", en: "Someone remembers what I like to eat and prepares it for me", fr: "Quelqu'un se souvient de ce que j'aime manger et me le prépare" }, energy: 1 },
      { label: { zh: "我最低落的时候，有人还在身边", en: "When I'm at my lowest, someone is still there", fr: "Quand je suis au plus bas, quelqu'un est encore là" }, energy: 2 },
      { label: { zh: "不需要理由，被无条件地接纳", en: "Being unconditionally accepted for no reason", fr: "Être accepté(e) sans condition et sans raison" }, energy: 2 },
      { label: { zh: "被看见，被理解，而不只是被关心", en: "Being truly seen and understood, not just cared for", fr: "Être vu(e) et compris(e), pas seulement pris(e) en charge" }, energy: 2 },
    ],
    encouragement: {
      zh: "你值得被爱，不需要任何条件。",
      en: "You deserve to be loved — no conditions attached.",
      fr: "Vous méritez d'être aimé(e) — sans condition.",
    },
  },
  {
    id: 34,
    text: {
      zh: "如果让你给自己现在的状态打一个比喻，你最像什么？",
      en: "If you had to compare your current state to something, what would it be?",
      fr: "Si vous deviez comparer votre état actuel à quelque chose, à quoi ressemblerait-il ?",
    },
    options: [
      { label: { zh: "一片正在积蓄能量的土地，春天就要来了", en: "Soil gathering energy — spring is coming", fr: "Une terre accumulant de l'énergie — le printemps arrive" }, energy: 2 },
      { label: { zh: "一台充满电但还没开机的手机", en: "A fully charged phone that hasn't been switched on yet", fr: "Un téléphone entièrement chargé mais pas encore allumé" }, energy: 1 },
      { label: { zh: "一颗在深海里慢慢发光的珍珠", en: "A pearl slowly glowing in the deep ocean", fr: "Une perle qui brille lentement dans les profondeurs de l'océan" }, energy: 2 },
      { label: { zh: "一只刚刚破壳的小鸟，还在学飞", en: "A newborn bird just out of its shell, still learning to fly", fr: "Un oisillon juste sorti de sa coquille, apprenant encore à voler" }, energy: 1 },
    ],
    encouragement: {
      zh: "无论你现在像什么，你都在走向你想成为的样子。",
      en: "Whatever you're like right now, you're moving toward who you want to become.",
      fr: "Quel que soit votre état actuel, vous avancez vers ce que vous voulez devenir.",
    },
  },
  {
    id: 35,
    text: {
      zh: "如果「乾坤」只能送你一句话，你会选择带走哪一句？",
      en: "If Qian Kun could give you just one message, which would you choose to take with you?",
      fr: "Si Qian Kun ne pouvait vous donner qu'un seul message, lequel choisiriez-vous d'emporter ?",
    },
    options: [
      { label: { zh: "「你比自己想象的更强大」", en: "You are stronger than you think", fr: "Tu es plus fort(e) que tu ne le penses" }, energy: 2 },
      { label: { zh: "「一切都刚刚好，包括你的不完美」", en: "Everything is just right — including your imperfections", fr: "Tout est juste comme il faut — y compris vos imperfections" }, energy: 2 },
      { label: { zh: "「你值得被这个世界温柔对待」", en: "You deserve to be treated gently by this world", fr: "Vous méritez d'être traité(e) avec douceur par ce monde" }, energy: 2 },
      { label: { zh: "「无论你在哪里，此刻就是你最好的起点」", en: "Wherever you are, this moment is your best starting point", fr: "Où que vous soyez, cet instant est votre meilleur point de départ" }, energy: 2 },
    ],
    encouragement: {
      zh: "记住这句话，在你需要的时刻，它会在你心里响起。",
      en: "Hold onto this — it will echo in your heart when you need it most.",
      fr: "Gardez ces mots — ils résonneront dans votre cœur quand vous en aurez le plus besoin.",
    },
  },
];

export type ResultLevel = "star" | "spring" | "cloud" | "dawn";

const RESULT_TEXTS: Record<ResultLevel, Record<Lang, { level: string; title: string; subtitle: string; message: string }>> = {
  star: {
    zh: {
      level: "明朗如星",
      title: "你的内心，光芒万丈",
      subtitle: "心理能量：充沛",
      message: "你内心有一种很珍贵的力量——不是那种张扬的、炫耀的力量，而是一种温柔的、稳定的、自洽的光芒。你不需要外界的认可来证明自己，因为你已经和自己和解了。\n\n继续保持这份状态，你的存在本身就在影响和治愈着身边的人。偶尔也允许自己脆弱一下，这不会让你失去光芒，反而会让你更有层次、更有温度。",
    },
    en: {
      level: "Bright as a Star",
      title: "Your Inner Light Shines Bright",
      subtitle: "Energy: Abundant",
      message: "You possess a rare and precious inner strength — not the loud, showy kind, but a gentle, steady, self-harmonizing glow. You don't need external validation because you've already made peace with yourself.\n\nKeep nurturing this state. Your very existence uplifts and heals those around you. Occasionally allowing yourself to be vulnerable won't diminish your light — it will make you more layered and more human.",
    },
    fr: {
      level: "Lumineux comme une Étoile",
      title: "Votre Lumière Intérieure Brille Fort",
      subtitle: "Énergie : Abondante",
      message: "Vous possédez une force intérieure rare et précieuse — pas du genre bruyant ou tapageur, mais une lueur douce, stable et en harmonie avec vous-même. Vous n'avez pas besoin de validation externe parce que vous vous êtes réconcilié(e) avec vous-même.\n\nContinuez à cultiver cet état. Votre existence même inspire et guérit ceux qui vous entourent. Vous permettre parfois d'être vulnérable ne diminuera pas votre lumière — elle vous rendra plus profond(e) et plus humain(e).",
    },
  },
  spring: {
    zh: {
      level: "春风初度",
      title: "你在发光，只是还没察觉",
      subtitle: "心理能量：回升中",
      message: "你正处于一个很特别的阶段——旧的壳正在裂开，新的光正在渗入。也许你还没完全意识到自己的成长，但改变确实在发生了。\n\n这个阶段的你，最需要做的是：给自己时间，不要急。你已经走了很远，你值得一个温柔的拥抱，包括来自你自己的。",
    },
    en: {
      level: "Early Spring",
      title: "You're Glowing, You Just Haven't Noticed",
      subtitle: "Energy: Recovering",
      message: "You're in a remarkable phase — the old shell is cracking, new light is seeping in. Perhaps you haven't fully recognized your growth yet, but change is genuinely happening.\n\nWhat you need most right now is patience with yourself. You've come a long way. You deserve a gentle embrace, especially from yourself.",
    },
    fr: {
      level: "Premier Printemps",
      title: "Vous Brillez, Vous ne l'avez Pas Encore Remarqué",
      subtitle: "Énergie : en Reprise",
      message: "Vous traversez une phase remarquable — l'ancienne coquille se fissure, une nouvelle lumière s'infiltre. Vous n'avez peut-être pas encore pleinement pris conscience de votre croissance, mais le changement est bien réel.\n\nCe dont vous avez le plus besoin en ce moment, c'est de la patience envers vous-même. Vous avez parcouru un long chemin. Vous méritez une étreinte douce, surtout de votre propre part.",
    },
  },
  cloud: {
    zh: {
      level: "云中微光",
      title: "黑暗中，你仍在发光",
      subtitle: "心理能量：需要滋养",
      message: "你现在的状态可能不太好，但你没有放弃，这就够了。你能走到今天，本身就是一种了不起的力量。\n\n请记住：你不需要时刻坚强，偶尔的疲惫和脆弱是人之常情。给自己一些时间和空间，去做一些让自己感到活着的事情，哪怕只是听一首歌、散一次步。你很重要，你的感受很重要。",
    },
    en: {
      level: "Light Through Clouds",
      title: "Even in Darkness, You Still Shine",
      subtitle: "Energy: Needs Nourishment",
      message: "Your current state may be challenging, but you haven't given up — and that's everything. Making it this far is already a remarkable feat of strength.\n\nRemember: you don't need to be strong all the time. Occasional exhaustion and vulnerability are perfectly human. Give yourself space to do things that make you feel alive, even if it's just listening to a song or taking a walk. You matter. Your feelings matter.",
    },
    fr: {
      level: "Lumière à travers les Nuages",
      title: "Même dans l'Obscurité, Vous Continuez de Briller",
      subtitle: "Énergie : à Nourrir",
      message: "Votre état actuel peut être difficile, mais vous n'avez pas abandonné — et c'est l'essentiel. Arriver jusqu'ici est déjà une force remarquable.\n\nSouvenez-vous : vous n'avez pas besoin d'être fort(e) en permanence. La fatigue et la vulnérabilité occasionnelles sont parfaitement humaines. Accordez-vous de l'espace pour faire des choses qui vous font sentir vivant(e), même si ce n'est qu'écouter une chanson ou vous promener. Vous comptez. Vos sentiments comptent.",
    },
  },
  dawn: {
    zh: {
      level: "静待破晓",
      title: "夜最深的时候，黎明就不远了",
      subtitle: "心理能量：低谷期",
      message: "如果你正处于人生中比较艰难的时期，我想告诉你：你不是一个人。每一个穿过黑夜的人，都曾经以为自己走不出去。\n\n但他们走出来了，你也可以。\n\n今天的你愿意来做这个测试，本身就说明你还在寻找光，寻找答案。这份渴望，就是你最强的力量。\n\n给自己一个拥抱吧，哪怕只是心里默默抱一下。你已经很努力了。",
    },
    en: {
      level: "Waiting for Dawn",
      title: "The Deepest Night Precedes the Dawn",
      subtitle: "Energy: Low Point",
      message: "If you're going through a difficult time, I want you to know: you are not alone. Every person who has walked through darkness once felt they couldn't make it through.\n\nBut they did. And so can you.\n\nThe fact that you're taking this test today means you're still seeking light, still seeking answers. That very desire is your greatest strength.\n\nGive yourself a hug — even if only in your heart. You've been working so hard.",
    },
    fr: {
      level: "En Attendant l'Aube",
      title: "La Nuit la Plus Profonde Précède l'Aube",
      subtitle: "Énergie : Point Bas",
      message: "Si vous traversez une période difficile, je veux que vous sachiez : vous n'êtes pas seul(e). Chaque personne qui a traversé l'obscurité a un jour pensé ne pas pouvoir s'en sortir.\n\nMais ils s'en sont sortis. Et vous le pouvez aussi.\n\nLe fait que vous fassiez ce test aujourd'hui signifie que vous cherchez encore la lumière, encore des réponses. Ce désir même est votre plus grande force.\n\nFaites-vous un câlin — même si ce n'est que dans votre cœur. Vous avez tellement essayé.",
    },
  },
};

export function generateMLResult(
  totalEnergy: number,
  maxEnergy: number,
  lang: Lang
): { level: string; title: string; subtitle: string; message: string } {
  const ratio = totalEnergy / maxEnergy;
  let resultKey: ResultLevel;
  if (ratio >= 0.75) resultKey = "star";
  else if (ratio >= 0.5) resultKey = "spring";
  else if (ratio >= 0.25) resultKey = "cloud";
  else resultKey = "dawn";
  const t = RESULT_TEXTS[resultKey][lang];
  return { ...t, level: t.level };
}

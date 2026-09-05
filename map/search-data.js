// 検索対象の文言データ（外付けデータ）
const searchData = [
  {
    title: "美術科",
    url: "https://example.com/kintetsu",
    // ★引っかけるための登録文言（別名、ひらがななど）
    keywords: ["美術科", "びじゅつか","①"]
  },
  {
    title: "技術科",
    url: "map.html",
    keywords: ["技術科", "ぎじゅつか", "②"]
  },
  {
    title: "学発本部",
    url: "schedule.html",
    keywords: ["学発本部", "がくはつほんぶ", "③"]
  },
  {
    title: "生徒会の部屋",
    url: "schedule.html",
    keywords: ["生徒会の部屋", "せいとかいのへや", "④"]
  },
  {
    title: "競技かるた同好会",
    url: "schedule.html",
    keywords: ["競技かるた同好会", "きょうぎかるたどうこうかい", "⑤"]
  },
  {
    title: "美術研究会",
    url: "schedule.html",
    keywords: ["美術研究会", "びじゅつけんきゅうかい", "⑥", "美研"]
  },
  {
    title: "イラスト研究会",
    url: "schedule.html",
    keywords: ["イラスト研究会", "いらすとけんきゅうかい", "⑦", "イラ研"]
  },
  {
    title: "鉄道研究会",
    url: "schedule.html",
    keywords: ["鉄道研究会", "てつどうけんきゅうかい", "⑧", "鉄研"]
  },
  {
    title: "電子電脳技術研究会",
    url: "schedule.html",
    keywords: ["電子電脳技術研究会", "でんしでんのうぎじゅつけんきゅうかい", "⑨", "電電"]
  },
  {
    title: "保健委員会",
    url: "schedule.html",
    keywords: ["保健委員会", "ほけんいいんかい", "⑩"]
  },
  {
    title: "化学研究会",
    url: "schedule.html",
    keywords: ["化学研究会","科学研究会", "かがくけんきゅうかい", "⑪", "化研", "科研"]
  },
  {
    title: "理科",
    url: "schedule.html",
    keywords: ["理科", "りか", "⑫"]
  },
  {
    title: "天文研究会",
    url: "schedule.html",
    keywords: ["天文研究会", "てんもんけんきゅうかい", "⑬"]
  },
  {
    title: "2年1組",
    url: "schedule.html",
    keywords: ["2年1組", "にねんいちくみ", "⑭", "2-1",]
  },
  {
    title: "2年2組",
    url: "schedule.html",
    keywords: ["2年2組", "にねんにくみ", "⑮", "2-2",]
  },
  {
    title: "2年3組",
    url: "schedule.html",
    keywords: ["2年3組", "にねんさんくみ", "⑯", "2-3",]
  },
  {
    title: "2年4組",
    url: "schedule.html",
    keywords: ["2年4組", "にねんよんくみ","2-4",]
  },
  {
    title: "英語科",
    url: "schedule.html",
    keywords: ["英語科", "えいごか","⑰",]
  },
  {
    title: "2年5組",
    url: "schedule.html",
    keywords: ["2年5組", "にねんごくみ", "⑱", "2-5",]
  },
  {
    title: "3年1組",
    url: "schedule.html",
    keywords: ["3年1組", "さんねんいちくみ", "3-1",]
  },
  {
    title: "3年2組",
    url: "schedule.html",
    keywords: ["3年2組", "さんねんにくみ", "3-2",]
  },
  {
    title: "3年3組",
    url: "schedule.html",
    keywords: ["3年3組", "さんねんいちくみ", "3-3",]
  },
  {
    title: "3年4組",
    url: "schedule.html",
    keywords: ["3年4組", "さんねんよんくみ", "3-4",]
  },
  {
    title: "3年5組",
    url: "schedule.html",
    keywords: ["3年5組", "さんねんごくみ", "3-5",]
  },
  {
    title: "囲碁将棋同好会",
    url: "schedule.html",
    keywords: ["囲碁将棋同好会", "いごしょうぎどうこうかい", "⑲",]
  },
  {
    title: "バトルフィールド実行委員会",
    url: "schedule.html",
    keywords: ["バトルフィールド実行委員会", "ばとるふぃーるどじっこういいんかい", "⑳","しきがみ","式神",]
  },
  {
    title: "家庭科研究会",
    url: "schedule.html",
    keywords: ["家庭科研究会", "かていかけんきゅうかい", "㉑","かてけん","家庭研",]
  },
  {
    title: "家庭科",
    url: "schedule.html",
    keywords: ["家庭科", "かていか", "㉒",]
  },
  {
    title: "黒姫委員会",
    url: "schedule.html",
    keywords: ["黒姫委員会", "くろひめいいんかい", "㉓",]
  },
  {
    title: "富浦委員会",
    url: "schedule.html",
    keywords: ["冨浦委員会", "とみうらいいんかい", "㉔",]
  },
  {
    title: "記録係",
    url: "schedule.html",
    keywords: ["記録係", "きろくがかり", "㉕",]
  },
  {
    title: "アメリカ短期留学",
    url: "schedule.html",
    keywords: ["アメリカ短期留学", "アメリカ留学", "あめりかたんきりゅうがく","㉖", "アメ留"]
  },
  {
    title: "文藝研究会",
    url: "schedule.html",
    keywords: ["文藝研究会", "文芸研究会", "ぶんげいけんきゅうかい","㉗",]
  },
  {
    title: "国語科",
    url: "schedule.html",
    keywords: ["国語科", "こくごか","㉙",]
  },
  {
    title: "数学科",
    url: "schedule.html",
    keywords: ["国語科", "こくごか","㉚",]
  },
  {
    title: "社会科",
    url: "schedule.html",
    keywords: ["社会科", "しゃかいか","㉛",]
  },
  {
    title: "アジアの子どもの会",
    url: "schedule.html",
    keywords: ["アジアの子どもの会", "アジアの子供の会", "しゃかいか","㉜","アジっ子",]
  },
  {
    title: "",
    url: "schedule.html",
    keywords: ["図書委員会", "としょいいんかい","㉝",]
  },
];
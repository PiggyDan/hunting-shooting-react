import React, { useState } from "react";
import {
  ArrowRight,
  Binoculars,
  CalendarDays,
  Camera,
  Car,
  Compass,
  Fish,
  MapPin,
  Menu,
  Mountain,
  Phone,
  ShieldCheck,
  Tent,
  Utensils,
  X,
} from "lucide-react";

import programImage from "./assets/brochure-program.jpg";
import mapImage from "./assets/brochure-cover-map.jpg";

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {
  en: {
    languageName: "EN",

    nav: {
      about: "About",
      activities: "Activities",
      program: "Program",
      location: "Location",
      book: "Book a Trip",
    },

    hero: {
      eyebrow: "ULAANBAATAR • MONGOLIA",
      title1: "Target Shooting",
      title2: "in the Wild",
      description:
        "A countryside day trip combining supervised target shooting, Mongolian culture, horse riding and outdoor adventure.",
      plan: "Plan Your Trip",
      view: "View Program",

      distance: "110–150 km",
      distanceSub: "from Ulaanbaatar",

      duration: "Full Day",
      durationSub: "customizable program",

      guided: "Guided",
      guidedSub: "outdoor experience",
    },

    about: {
      eyebrow: "ABOUT THE EXPERIENCE",
      title: "More than a shooting range.",
      description:
        "Designed as a complete outdoor experience, the trip combines sporting target shooting with scenery, wildlife, local food and Mongolian nomadic culture.",

      features: [
        {
          title: "Outdoor Escape",
          text: "A quiet countryside experience away from the city.",
        },
        {
          title: "Safety First",
          text: "Clear range rules, controlled sessions and guided activities.",
        },
        {
          title: "Local Culture",
          text: "Meet local families and experience traditional Mongolian hospitality.",
        },
        {
          title: "Flexible Trips",
          text: "Day trips and custom programs for small groups or companies.",
        },
      ],
    },

    activities: {
      eyebrow: "WHAT YOU CAN DO",
      title: "Outdoor Activities",
      description:
        "Choose a standard day trip or build a custom program for your group.",

      items: [
        {
          title: "Pickup & Drop-off",
          text: "Transport from Ulaanbaatar to the camp and back.",
        },
        {
          title: "Target Shooting",
          text: "Supervised target-shooting sessions with safety briefing.",
        },
        {
          title: "Camp Experience",
          text: "Relax at a countryside camp surrounded by open landscape.",
        },
        {
          title: "Horse Riding",
          text: "Explore the Mongolian countryside on horseback.",
        },
        {
          title: "Fishing Tour",
          text: "Optional seasonal fishing activities and countryside travel.",
        },
        {
          title: "Camp Food",
          text: "Traditional meals and local dairy products during your visit.",
        },
      ],
    },

    program: {
      eyebrow: "SAMPLE ITINERARY",
      title: "A full day outside the city.",
      description:
        "The exact order can change depending on weather, season and your group.",

      items: [
        "Arrival and safety introduction",
        "Introduction to sporting firearms and range rules",
        "Supervised target-shooting session",
        "Traditional lunch and camp experience",
        "Horse riding or countryside walk",
        "Wildlife photography and bird watching",
        "Nomadic family visit and cultural experience",
        "Return transport to Ulaanbaatar",
      ],
    },

    quote:
      "Wide open landscapes, fresh air and a practical outdoor experience just outside Ulaanbaatar.",

    location: {
      eyebrow: "LOCATION",
      title: "Easy escape from Ulaanbaatar.",
      description:
        "The camp is reached by a mix of paved and countryside roads. Transport can be arranged from Ulaanbaatar.",

      paved: "via paved-road route",
      countryside: "via countryside route",
      nature: "Nature, wildlife and open steppe scenery",

      transport: "Ask About Transport",
    },

    contact: {
      eyebrow: "BOOKING & INFORMATION",
      title: "Ready for a day in the Mongolian countryside?",
      description:
        "Contact us for available dates, group pricing, transport options and custom programs.",

      name: "Name",
      namePlaceholder: "Your name",

      group: "Group size",
      date: "Preferred date",

      message: "Message",
      messagePlaceholder: "Tell us what kind of trip you want...",

      send: "Send Inquiry",
      advance: "Advance booking recommended",
    },

    footer: "All rights reserved.",
  },

  /* =========================================================
     MONGOLIAN
     ========================================================= */

  mn: {
    languageName: "MN",

    nav: {
      about: "Бидний тухай",
      activities: "Үйл ажиллагаа",
      program: "Хөтөлбөр",
      location: "Байршил",
      book: "Аялал захиалах",
    },

    hero: {
      eyebrow: "УЛААНБААТАР • МОНГОЛ",
      title1: "Бай буудлагын",
      title2: "аялал",
      description:
        "Бай буудлага, Монгол ахуй соёл, морин аялал болон байгалийн адал явдлыг хослуулсан нэг өдрийн аялал.",

      plan: "Аялал захиалах",
      view: "Хөтөлбөр үзэх",

      distance: "110–150 км",
      distanceSub: "Улаанбаатараас",

      duration: "Бүтэн өдөр",
      durationSub: "уян хатан хөтөлбөр",

      guided: "Хөтөчтэй",
      guidedSub: "байгалийн аялал",
    },

    about: {
      eyebrow: "АЯЛЛЫН ТУХАЙ",
      title: "Зөвхөн буудлагын талбай биш.",
      description:
        "Бай буудлагаас гадна Монголын үзэсгэлэнт байгаль, зэрлэг амьтан, үндэсний хоол болон нүүдэлчин ахуй соёлыг мэдрэх бүрэн хэмжээний аялал.",

      features: [
        {
          title: "Байгалийн аялал",
          text: "Хотын чимээнээс хол тайван хөдөө орон нутгийн аялал.",
        },
        {
          title: "Аюулгүй ажиллагаа",
          text: "Буудлагын аюулгүй ажиллагааны зааварчилгаа болон хяналттай үйл ажиллагаа.",
        },
        {
          title: "Монгол ахуй",
          text: "Нутгийн айл өрхөөр зочлон Монголын уламжлалт ахуй соёлтой танилцана.",
        },
        {
          title: "Уян хатан хөтөлбөр",
          text: "Хувь хүн, найз нөхөд болон байгууллагад зориулсан аяллын хөтөлбөр.",
        },
      ],
    },

    activities: {
      eyebrow: "ЮУ ХИЙХ БОЛОМЖТОЙ",
      title: "Аяллын үйл ажиллагаа",
      description:
        "Стандарт нэг өдрийн аяллыг сонгох эсвэл өөрийн багт зориулсан тусгай хөтөлбөр гаргах боломжтой.",

      items: [
        {
          title: "Тосох & Хүргэх",
          text: "Улаанбаатараас кемп хүртэл болон буцах тээвэр.",
        },
        {
          title: "Бай буудлага",
          text: "Аюулгүй ажиллагааны зааварчилгаатай, хяналттай бай буудлагын үйл ажиллагаа.",
        },
        {
          title: "Кемп",
          text: "Байгалийн үзэсгэлэнт орчинд амарч, хөдөөний тайван орчныг мэдрээрэй.",
        },
        {
          title: "Морин аялал",
          text: "Монголын хөдөө нутгаар морьтой аялна.",
        },
        {
          title: "Загасчлал",
          text: "Улирлын онцлогоос хамаарсан загасчлал болон байгалийн аялал.",
        },
        {
          title: "Монгол хоол",
          text: "Монгол үндэсний хоол болон уламжлалт цагаан идээ амтлах боломжтой.",
        },
      ],
    },

    program: {
      eyebrow: "АЯЛЛЫН ХӨТӨЛБӨР",
      title: "Хотын гаднах бүтэн өдрийн аялал.",
      description:
        "Цаг агаар, улирал болон багийн хүсэлтээс хамааран хөтөлбөрийн дараалал өөрчлөгдөж болно.",

      items: [
        "Кемпэд хүрэлцэн ирэх, аюулгүй ажиллагааны танилцуулга",
        "Спорт буудлага болон талбайн дүрмийн танилцуулга",
        "Хяналттай бай буудлага",
        "Монгол үндэсний хоол болон кемпийн амралт",
        "Морин аялал эсвэл байгалийн алхалт",
        "Зэрлэг амьтны зураг авалт болон шувуу ажиглалт",
        "Нүүдэлчин айлд зочилж Монгол ахуйтай танилцах",
        "Улаанбаатар хот руу буцах",
      ],
    },

    quote:
      "Уудам тал нутаг, цэвэр агаар, Монголын байгальд өнгөрүүлэх мартагдашгүй нэг өдөр.",

    location: {
      eyebrow: "БАЙРШИЛ",
      title: "Улаанбаатараас холгүй байгалийн аялал.",
      description:
        "Кемп рүү засмал болон хөдөөний замаар хүрэх боломжтой. Улаанбаатар хотоос тээвэр зохион байгуулна.",

      paved: "засмал замаар",
      countryside: "хөдөөний замаар",
      nature: "Байгаль, зэрлэг амьтан, уудам тал нутаг",

      transport: "Тээврийн мэдээлэл авах",
    },

    contact: {
      eyebrow: "ЗАХИАЛГА & МЭДЭЭЛЭЛ",
      title: "Монголын байгальд нэг өдрийг өнгөрүүлэхэд бэлэн үү?",
      description:
        "Аяллын боломжит өдөр, багийн үнэ, тээвэр болон тусгай хөтөлбөрийн талаар бидэнтэй холбогдоорой.",

      name: "Нэр",
      namePlaceholder: "Таны нэр",

      group: "Хүний тоо",
      date: "Аяллын өдөр",

      message: "Нэмэлт мэдээлэл",
      messagePlaceholder: "Ямар төрлийн аялал сонирхож байгаагаа бичнэ үү...",

      send: "Хүсэлт илгээх",
      advance: "Урьдчилан захиалахыг зөвлөж байна",
    },

    footer: "Бүх эрх хуулиар хамгаалагдсан.",
  },

  /* =========================================================
     KOREAN
     ========================================================= */

  ko: {
    languageName: "한국어",

    nav: {
      about: "소개",
      activities: "체험",
      program: "프로그램",
      location: "위치",
      book: "예약하기",
    },

    hero: {
      eyebrow: "울란바토르 • 몽골",
      title1: "몽골 야외",
      title2: "사격 체험",
      description:
        "안전한 표적 사격, 몽골 전통문화, 승마와 자연 체험을 함께 즐기는 특별한 당일 여행입니다.",

      plan: "여행 예약",
      view: "프로그램 보기",

      distance: "110–150 km",
      distanceSub: "울란바토르에서",

      duration: "하루 일정",
      durationSub: "맞춤형 프로그램",

      guided: "가이드 동행",
      guidedSub: "야외 체험",
    },

    about: {
      eyebrow: "체험 소개",
      title: "단순한 사격장 그 이상.",
      description:
        "표적 사격과 함께 몽골의 자연, 야생동물, 전통 음식과 유목민 문화를 경험할 수 있습니다.",

      features: [
        {
          title: "자연 속 휴식",
          text: "도시를 벗어나 몽골의 평화로운 자연을 경험하세요.",
        },
        {
          title: "안전 우선",
          text: "안전 수칙 안내와 관리되는 체험 프로그램을 제공합니다.",
        },
        {
          title: "몽골 문화",
          text: "현지 가족을 만나 몽골 전통 문화와 생활을 경험합니다.",
        },
        {
          title: "맞춤 여행",
          text: "소규모 그룹과 기업을 위한 맞춤 프로그램이 가능합니다.",
        },
      ],
    },

    activities: {
      eyebrow: "주요 활동",
      title: "야외 체험",
      description:
        "기본 당일 프로그램 또는 그룹에 맞는 맞춤 프로그램을 선택할 수 있습니다.",

      items: [
        {
          title: "픽업 & 드롭",
          text: "울란바토르에서 캠프까지 왕복 교통편을 제공합니다.",
        },
        {
          title: "표적 사격",
          text: "안전 교육과 함께 진행되는 관리된 표적 사격 체험입니다.",
        },
        {
          title: "캠프 체험",
          text: "몽골 자연 속 캠프에서 편안한 시간을 보내세요.",
        },
        {
          title: "승마",
          text: "말을 타고 몽골의 아름다운 자연을 탐험합니다.",
        },
        {
          title: "낚시",
          text: "계절에 따라 낚시와 자연 체험을 즐길 수 있습니다.",
        },
        {
          title: "전통 음식",
          text: "몽골 전통 음식과 유제품을 맛볼 수 있습니다.",
        },
      ],
    },

    program: {
      eyebrow: "예시 일정",
      title: "도시를 벗어난 특별한 하루.",
      description:
        "날씨, 계절 및 그룹 요청에 따라 일정 순서는 변경될 수 있습니다.",

      items: [
        "캠프 도착 및 안전 교육",
        "스포츠 사격 및 사격장 규칙 소개",
        "관리된 표적 사격 체험",
        "몽골 전통 점심 및 캠프 체험",
        "승마 또는 자연 산책",
        "야생동물 촬영 및 조류 관찰",
        "유목민 가정 방문 및 문화 체험",
        "울란바토르로 귀환",
      ],
    },

    quote:
      "넓은 초원과 맑은 공기 속에서 즐기는 특별한 몽골 야외 체험.",

    location: {
      eyebrow: "위치",
      title: "울란바토르에서 떠나는 자연 여행.",
      description:
        "포장도로와 시골길을 이용해 캠프에 도착할 수 있으며 울란바토르에서 교통편을 제공합니다.",

      paved: "포장도로 이용",
      countryside: "시골길 이용",
      nature: "자연, 야생동물과 넓은 몽골 초원",

      transport: "교통편 문의",
    },

    contact: {
      eyebrow: "예약 & 문의",
      title: "몽골 자연 속 특별한 하루를 준비하세요.",
      description:
        "예약 가능 날짜, 그룹 요금, 교통편 및 맞춤 프로그램에 대해 문의해 주세요.",

      name: "이름",
      namePlaceholder: "이름",

      group: "인원",
      date: "희망 날짜",

      message: "메시지",
      messagePlaceholder: "원하시는 여행에 대해 알려주세요...",

      send: "문의 보내기",
      advance: "사전 예약을 권장합니다",
    },

    footer: "모든 권리 보유.",
  },

  /* =========================================================
     CHINESE
     ========================================================= */

  zh: {
    languageName: "中文",

    nav: {
      about: "关于我们",
      activities: "体验项目",
      program: "行程",
      location: "位置",
      book: "预订旅行",
    },

    hero: {
      eyebrow: "乌兰巴托 • 蒙古国",
      title1: "蒙古户外",
      title2: "射击体验",
      description:
        "结合安全靶场射击、蒙古传统文化、骑马和自然探险的特别一日游。",

      plan: "预订旅行",
      view: "查看行程",

      distance: "110–150 公里",
      distanceSub: "距离乌兰巴托",

      duration: "全天",
      durationSub: "可定制行程",

      guided: "向导陪同",
      guidedSub: "户外体验",
    },

    about: {
      eyebrow: "体验介绍",
      title: "不仅仅是射击场。",
      description:
        "除了靶场射击，您还可以体验蒙古自然风光、野生动物、传统美食以及游牧文化。",

      features: [
        {
          title: "自然之旅",
          text: "远离城市，在蒙古宁静的自然环境中放松。",
        },
        {
          title: "安全第一",
          text: "提供明确的安全规则、指导和有序的体验活动。",
        },
        {
          title: "蒙古文化",
          text: "拜访当地家庭，体验传统蒙古生活与文化。",
        },
        {
          title: "定制旅行",
          text: "可为小型团体和企业提供定制旅行方案。",
        },
      ],
    },

    activities: {
      eyebrow: "体验项目",
      title: "户外活动",
      description:
        "您可以选择标准一日游，也可以为团队定制专属行程。",

      items: [
        {
          title: "接送服务",
          text: "提供乌兰巴托至营地的往返交通。",
        },
        {
          title: "靶场射击",
          text: "在安全指导和管理下进行靶场射击体验。",
        },
        {
          title: "营地体验",
          text: "在蒙古自然环境中的营地放松休息。",
        },
        {
          title: "骑马",
          text: "骑马探索蒙古美丽的乡村和草原。",
        },
        {
          title: "钓鱼",
          text: "根据季节安排钓鱼及自然体验。",
        },
        {
          title: "蒙古美食",
          text: "品尝蒙古传统食品和当地奶制品。",
        },
      ],
    },

    program: {
      eyebrow: "参考行程",
      title: "远离城市的一日体验。",
      description:
        "具体行程可能根据天气、季节和团队需求进行调整。",

      items: [
        "抵达营地及安全介绍",
        "运动射击及靶场规则介绍",
        "安全指导下的靶场射击",
        "蒙古传统午餐及营地体验",
        "骑马或自然徒步",
        "野生动物摄影及观鸟",
        "拜访游牧家庭并体验蒙古文化",
        "返回乌兰巴托",
      ],
    },

    quote:
      "辽阔的草原、清新的空气，以及难忘的蒙古户外体验。",

    location: {
      eyebrow: "位置",
      title: "从乌兰巴托轻松前往大自然。",
      description:
        "可通过公路和乡村道路抵达营地，并可安排从乌兰巴托出发的交通。",

      paved: "经公路路线",
      countryside: "经乡村路线",
      nature: "自然、野生动物和辽阔草原",

      transport: "咨询交通",
    },

    contact: {
      eyebrow: "预订 & 咨询",
      title: "准备好体验蒙古大自然的一天了吗？",
      description:
        "联系我们了解可预订日期、团队价格、交通方式及定制行程。",

      name: "姓名",
      namePlaceholder: "您的姓名",

      group: "人数",
      date: "希望日期",

      message: "留言",
      messagePlaceholder: "请告诉我们您希望体验什么样的旅行...",

      send: "发送咨询",
      advance: "建议提前预订",
    },

    footer: "版权所有。",
  },
};

/* =========================================================
   ICONS
   ========================================================= */

const activityIcons = [
  Car,
  ShieldCheck,
  Tent,
  Mountain,
  Fish,
  Utensils,
];

/* =========================================================
   APP
   ========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  const closeMenu = () => setMenuOpen(false);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">

      {/* ================= NAVIGATION ================= */}

      <header className="nav-wrap">

        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">M</span>

          <span>
            <strong>MONGOL TARGET</strong>
            <small>SHOOTING & OUTDOOR</small>
          </span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          <a href="#about" onClick={closeMenu}>
            {t.nav.about}
          </a>

          <a href="#activities" onClick={closeMenu}>
            {t.nav.activities}
          </a>

          <a href="#program" onClick={closeMenu}>
            {t.nav.program}
          </a>

          <a href="#location" onClick={closeMenu}>
            {t.nav.location}
          </a>

          {/* LANGUAGE SWITCHER */}

          <div className="language-dropdown">
              <select
    value={language}
    onChange={(e) => changeLanguage(e.target.value)}
  >
    <option value="en">EN — English</option>
    <option value="mn">MN — Монгол</option>
    <option value="ko">한국어</option>
    <option value="zh">中文</option>
  </select>
</div>

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            {t.nav.book}
          </a>

        </nav>

      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div className="hero-overlay" />

          <div className="hero-content">

            <span className="eyebrow">
              {t.hero.eyebrow}
            </span>

            <h1>
              {t.hero.title1}
              <br />
              {t.hero.title2}
            </h1>

            <p>
              {t.hero.description}
            </p>

            <div className="hero-actions">

              <a
                className="btn btn-primary"
                href="#contact"
              >
                {t.hero.plan}

                <ArrowRight size={18} />
              </a>

              <a
                className="btn btn-ghost"
                href="#program"
              >
                {t.hero.view}
              </a>

            </div>

            <div className="hero-stats">

              <div>
                <strong>{t.hero.distance}</strong>
                <span>{t.hero.distanceSub}</span>
              </div>

              <div>
                <strong>{t.hero.duration}</strong>
                <span>{t.hero.durationSub}</span>
              </div>

              <div>
                <strong>{t.hero.guided}</strong>
                <span>{t.hero.guidedSub}</span>
              </div>

            </div>

          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section intro"
        >

          <div className="section-copy">

            <span className="eyebrow dark">
              {t.about.eyebrow}
            </span>

            <h2>
              {t.about.title}
            </h2>

            <p>
              {t.about.description}
            </p>

          </div>

          <div className="feature-grid">

            {t.about.features.map((feature, index) => (

              <article
                className="feature-card"
                key={feature.title}
              >

                <span className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </article>

            ))}

          </div>

        </section>

        {/* ================= ACTIVITIES ================= */}

        <section
          id="activities"
          className="section dark-section"
        >

          <div className="section-head">

            <div>

              <span className="eyebrow">
                {t.activities.eyebrow}
              </span>

              <h2>
                {t.activities.title}
              </h2>

            </div>

            <p>
              {t.activities.description}
            </p>

          </div>

          <div className="service-grid">

            {t.activities.items.map((activity, index) => {

              const Icon = activityIcons[index];

              return (

                <article
                  className="service-card"
                  key={activity.title}
                >

                  <Icon
                    size={28}
                    strokeWidth={1.7}
                  />

                  <h3>
                    {activity.title}
                  </h3>

                  <p>
                    {activity.text}
                  </p>

                </article>

              );

            })}

          </div>

        </section>

        {/* ================= PROGRAM ================= */}

        <section
          id="program"
          className="section program-section"
        >

          <div className="program-visual">

            <img
              src={programImage}
              alt="Target shooting tour program"
            />

          </div>

          <div className="program-copy">

            <span className="eyebrow dark">
              {t.program.eyebrow}
            </span>

            <h2>
              {t.program.title}
            </h2>

            <p className="program-intro">
              {t.program.description}
            </p>

            <div className="timeline">

              {t.program.items.map((item, index) => (

                <div
                  className="timeline-item"
                  key={index}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= QUOTE ================= */}

        <section className="quote-section">

          <Camera size={34} />

          <p>
            “{t.quote}”
          </p>

        </section>

        {/* ================= LOCATION ================= */}

        <section
          id="location"
          className="section location-section"
        >

          <div className="location-copy">

            <span className="eyebrow dark">
              {t.location.eyebrow}
            </span>

            <h2>
              {t.location.title}
            </h2>

            <p>
              {t.location.description}
            </p>

            <div className="location-points">

              <div>

                <MapPin />

                <span>
                  <strong>110 km</strong>{" "}
                  {t.location.paved}
                </span>

              </div>

              <div>

                <Compass />

                <span>
                  <strong>150 km</strong>{" "}
                  {t.location.countryside}
                </span>

              </div>

              <div>

                <Binoculars />

                <span>
                  {t.location.nature}
                </span>

              </div>

            </div>

            <a
              className="btn btn-dark"
              href="#contact"
            >

              {t.location.transport}

              <ArrowRight size={18} />

            </a>

          </div>

          <div className="map-card">

            <img
              src={mapImage}
              alt="Target shooting camp location map"
            />

          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div>

            <span className="eyebrow">
              {t.contact.eyebrow}
            </span>

            <h2>
              {t.contact.title}
            </h2>

            <p>
              {t.contact.description}
            </p>

          </div>

          <form
            className="contact-card"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="field-row">

              <label>

                {t.contact.name}

                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                />

              </label>

              <label>

                {t.contact.group}

                <input
                  type="number"
                  min="1"
                  placeholder="2"
                />

              </label>

            </div>

            <label>

              {t.contact.date}

              <input type="date" />

            </label>

            <label>

              {t.contact.message}

              <textarea
                rows="4"
                placeholder={t.contact.messagePlaceholder}
              />

            </label>

            <button
              className="btn btn-primary full"
              type="submit"
            >

              {t.contact.send}

              <ArrowRight size={18} />

            </button>

            <div className="contact-meta">

              <span>

                <Phone size={16} />

                +976 9811 3270

              </span>

              <span>

                <CalendarDays size={16} />

                {t.contact.advance}

              </span>

            </div>

          </form>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="brand footer-brand">

          <span className="brand-mark">
            M
          </span>

          <span>

            <strong>
              MONGOL TARGET
            </strong>

            <small>
              SHOOTING & OUTDOOR
            </small>

          </span>

        </div>

        <p>
          © 2026 Mongol Target Shooting. {t.footer}
        </p>

      </footer>

    </div>
  );
}

export default App;
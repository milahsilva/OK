// =========================
// MENU HAMBÚRGUER
// =========================
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.left = menu.style.left === "0px" ? "-240px" : "0px";
}
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("sideMenu").classList.remove("open");
  });
});
// =========================
// DARK MODE
// =========================
document.getElementById("darkBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// =========================
// AUTO THEME
// =========================
const themes = [
  { c1: "#ff7eb6", c2: "#ff4fa3" },
  { c1: "#6aa9ff", c2: "#3a7bff" },
  { c1: "#6aff9b", c2: "#1e924eff" },
  { c1: "#f7d774", c2: "#e0b84a" },
];

let themeIndex = 0;
let themeInterval = null;

function applyTheme(i) {
  document.documentElement.style.setProperty("--cor1", themes[i].c1);
  document.documentElement.style.setProperty("--cor2", themes[i].c2);
}

document.getElementById("themeBtn").onclick = () => {
  if (themeInterval) {
    clearInterval(themeInterval);
    themeInterval = null;
    return;
  }
  themeInterval = setInterval(() => {
    themeIndex = (themeIndex + 1) % themes.length;
    applyTheme(themeIndex);
  }, 4000);
};

// =========================
// MULTILÍNGUE
// =========================
const translations = {
  pt: { title: "Serviços de Babá" },
  en: { title: "Babysitting Services" },
  no: { title: "Barnevakt-tjenester" },
  es: { title: "Servicios de Niñera" },
  fr: { title: "Services de Babysitting" },
  pt: {
    // HEADER
    title: "Serviços de Babá",
    subtitle: "Cuidado, segurança e amor para o seu bebê",

    // MENU
    menu_home: "Início",
    menu_services: "Serviços",
    menu_schedule: "Agendamento",

    // ABOUT
    about_title: "Sobre mim",
    about_text:
      "Sou uma babá iniciante, mas já tenho experiência cuidando da bebê da minha vizinha. Enquanto a mãe saía, eu ficava responsável, garantindo segurança e atenção enquanto a bebê dormia. Sou paciente, responsável e carinhosa.",

    // PRICE
    price_title: "Preço por hora",
    price_value: "120 NOK por hora",

    // SERVICES
    services_title: "O que eu ofereço",
    icon_safe: "Cuidado seguro",
    icon_feeding: "Ajuda na alimentação",
    icon_play: "Momento de brincar",
    table_service: "Serviço",
    table_description: "Descrição",
    service_monitor: "Vigiar o bebê enquanto dorme ou brinca com segurança.",
    service_clean: "Manter a área do bebê organizada e limpa.",
    service_feed: "Ajudar com mamadeiras ou refeições simples, se necessário.",
    service_play: "Atividades interativas e seguras para estimulação.",

    // SCHEDULE
    schedule_title: "Agende um horário",
    schedule_text:
      "Escolha uma data e horário e envie uma mensagem. Responderei o mais rápido possível.",
    schedule_name: "Nome:",
    schedule_email: "Email:",
    schedule_date: "Data:",
    schedule_time: "Horário:",
    schedule_message: "Mensagem:",
    schedule_button: "Enviar pedido",

    // FOOTER
    footer: "© 2026 - Serviços de Babá",
  },

  en: {
    title: "Babysitting Services",
    subtitle: "Care, safety and love for your little one",

    menu_home: "Home",
    menu_services: "Services",
    menu_schedule: "Schedule",

    about_title: "About Me",
    about_text:
      "I am a beginner babysitter, but I already have experience taking care of my neighbor’s baby. While the mother was out, I stayed responsible, ensuring safety and attention while the baby slept. I am patient, responsible and caring.",

    price_title: "Price per hour",
    price_value: "120 NOK per hour",

    services_title: "What I Offer",
    icon_safe: "Safe Care",
    icon_feeding: "Feeding Help",
    icon_play: "Playtime",
    table_service: "Service",
    table_description: "Description",
    service_monitor: "Watching the baby while sleeping or playing safely.",
    service_clean: "Keeping the baby’s area tidy and organized.",
    service_feed: "Helping with bottles or simple meals if needed.",
    service_play: "Interactive and safe activities for stimulation.",

    schedule_title: "Schedule an Appointment",
    schedule_text:
      "Choose a date and time and send me a message. I will confirm as soon as possible.",
    schedule_name: "Name:",
    schedule_email: "Email:",
    schedule_date: "Date:",
    schedule_time: "Time:",
    schedule_message: "Message:",
    schedule_button: "Send Request",

    footer: "© 2026 - Babysitting Services",
  },

  no: {
    title: "Barnevakt-tjenester",
    subtitle: "Omsorg, trygghet og kjærlighet for barnet ditt",

    menu_home: "Hjem",
    menu_services: "Tjenester",
    menu_schedule: "Bestilling",

    about_title: "Om meg",
    about_text:
      "Jeg er en ny barnevakt, men jeg har allerede erfaring med å passe naboens baby. Mens moren var borte, hadde jeg ansvaret og sørget for trygghet og oppmerksomhet mens babyen sov. Jeg er tålmodig, ansvarlig og omsorgsfull.",

    price_title: "Pris per time",
    price_value: "120 NOK per time",

    services_title: "Hva jeg tilbyr",
    icon_safe: "Trygg omsorg",
    icon_feeding: "Hjelp med mating",
    icon_play: "Leketid",
    table_service: "Tjeneste",
    table_description: "Beskrivelse",
    service_monitor: "Passer på babyen mens den sover eller leker trygt.",
    service_clean: "Holder babyens område ryddig og organisert.",
    service_feed: "Hjelper med flasker eller enkle måltider ved behov.",
    service_play: "Interaktive og trygge aktiviteter for stimulering.",

    schedule_title: "Bestill en time",
    schedule_text:
      "Velg dato og tidspunkt og send meg en melding. Jeg bekrefter så snart som mulig.",
    schedule_name: "Navn:",
    schedule_email: "E-post:",
    schedule_date: "Dato:",
    schedule_time: "Tid:",
    schedule_message: "Melding:",
    schedule_button: "Send forespørsel",

    footer: "© 2026 - Barnevakt-tjenester",
  },
};

function setLanguage(lang) {
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

document.querySelectorAll(".langBtn").forEach((btn) => {
  btn.onclick = () => setLanguage(btn.dataset.lang);
});

document.getElementById("date").addEventListener("input", function () {
  const selectedDate = new Date(this.value);
  const day = selectedDate.getDay(); // 0 = domingo, 5 = sexta, 6 = sábado

  if (day === 5 || day === 6 || day === 0) {
    alert(
      "This day is not available. Please choose a date from Monday to Thursday.",
    );
    this.value = "";
  }
});
// ... seu código ...

// ... resto do seu código ...

// CALENDAR
function saveAppleCalendar() {
  const name = document.getElementById("name").value || "Appointment";
  const date = document.getElementById("date").value;
  const start = document.getElementById("startTime").value;
  const end = document.getElementById("endTime").value;

  if (!date || !start || !end) {
    alert("Please fill in date and time before saving to Apple Calendar.");
    return;
  }

  // Converter data para formato YYYYMMDD
  const cleanDate = date.replace(/-/g, "");

  // Converter hora para HHMMSS
  const cleanStart = start.replace(":", "") + "00";
  const cleanEnd = end.replace(":", "") + "00";

  // Criar UID único
  const uid = Date.now() + "@babycare";

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//BabyCare//EN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${cleanDate}T${cleanStart}
SUMMARY:${name}
DTSTART:${cleanDate}T${cleanStart}
DTEND:${cleanDate}T${cleanEnd}
DESCRIPTION:Scheduled babysitting appointment.
END:VEVENT
END:VCALENDAR`;

  // Criar arquivo
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  // Baixar arquivo
  const link = document.createElement("a");
  link.href = url;
  link.download = "appointment.ics";
  link.click();

  URL.revokeObjectURL(url);
}

function showConfirmation() {
  const box = document.getElementById("confirmBox");
  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");
  }, 3000);
}
function sendSchedule() {
  showConfirmation();
  // ... resto do seu código de envio
  return false;
}

if (window.gsap) {
  gsap.from(".price-card", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
  });
}
// FAQ — abrir e fechar respostas
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Animação suave dos idiomas
if (window.gsap) {
  gsap.from(".speak-tag", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
  });
}
if (window.gsap) {
  gsap.from(".region-card", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
  });
}
if (window.gsap) {
  gsap.from(".routine-card", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2,
  });
}

// Mostrar/esconder botão
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});
const topBtn = document.getElementById("topBtn");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

//TIME
const start = document.getElementById("startTime");
const end = document.getElementById("endTime");
const alertBox = document.getElementById("rangeAlert");

function validateRange() {
  if (!start.value || !end.value) return;

  if (end.value <= start.value) {
    alertBox.classList.add("show");
    end.value = ""; // limpa o horário inválido
    setTimeout(() => alertBox.classList.remove("show"), 2000);
  }
}

// NEW TIME
const nightTime = document.getElementById("nightTime");
const nightNotice = document.getElementById("nightNotice");

nightTime.addEventListener("change", () => {
  const selected = nightTime.value;

  if (!selected) {
    nightNotice.style.display = "none";
    return;
  }

  //Show notification only between 6:00 PM and 9:30 PM
  if (selected >= "18:00" && selected <= "21:30") {
    nightNotice.style.display = "block";
  } else {
    nightNotice.style.display = "none";
  }
});
function sendSchedule() {
  alert("Your request has been sent! I will reply soon.");
  return false;
}

//EMAIL

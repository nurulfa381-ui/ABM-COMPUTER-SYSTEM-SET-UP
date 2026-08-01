const PASS_MARK = 60;
const STORAGE_KEY = "system-computer-set-up-c01";

const text = {
  bm: {
    subtitle: "ABM Interaktif SKM Tahap 3",
    intro:
      "Belajar langkah kerja Computer System Set-Up melalui nota ringkas, aktiviti simulasi, kuiz dan buka kunci KP secara berperingkat.",
    loginTitle: "Login Pelajar",
    fullName: "Nama penuh pelajar",
    studentId: "ID pelajar",
    language: "Bahasa",
    enter: "Masuk Dashboard",
    loginHint:
      "Nama mesti nama penuh sebenar dan ID mesti diisi. Nama umum seperti Pelajar, Test atau Admin akan ditolak.",
    dashboard: "Dashboard C01",
    progress: "Kemajuan",
    passed: "KT Lulus",
    average: "Purata",
    level: "Tahap",
    continue: "Teruskan",
    open: "Buka",
    locked: "Terkunci",
    completed: "Selesai",
    logout: "Log keluar",
    reset: "Reset Progress",
    profile: "Profil",
    listen: "Audio Bacaan",
    back: "Kembali",
    startQuiz: "Mula Kuiz KT",
    submit: "Hantar Jawapan",
    pass: "Terampil. KP seterusnya telah dibuka.",
    fail: "Belum terampil. Ulang kaji nota dan cuba semula.",
    score: "Markah",
    activity: "Latihan Simulasi",
    notes: "Nota Penting",
    quiz: "Kuiz KT",
    invalid:
      "Sila masukkan nama penuh sebenar dan ID pelajar yang lengkap sebelum masuk dashboard."
  },
  en: {
    subtitle: "Interactive Teaching Aid for SKM Level 3",
    intro:
      "Learn Computer System Set-Up work steps through concise notes, simulation activities, quizzes and progressive KP unlocking.",
    loginTitle: "Student Login",
    fullName: "Student full name",
    studentId: "Student ID",
    language: "Language",
    enter: "Enter Dashboard",
    loginHint:
      "Use the student's real full name and ID. Generic names such as Student, Test or Admin are rejected.",
    dashboard: "C01 Dashboard",
    progress: "Progress",
    passed: "Passed KT",
    average: "Average",
    level: "Level",
    continue: "Continue",
    open: "Open",
    locked: "Locked",
    completed: "Completed",
    logout: "Logout",
    reset: "Reset Progress",
    profile: "Profile",
    listen: "Read Aloud",
    back: "Back",
    startQuiz: "Start KT Quiz",
    submit: "Submit Answers",
    pass: "Competent. The next KP has been unlocked.",
    fail: "Not yet competent. Revise the notes and try again.",
    score: "Score",
    activity: "Simulation Practice",
    notes: "Key Notes",
    quiz: "KT Quiz",
    invalid:
      "Enter a valid student full name and student ID before opening the dashboard."
  }
};

const missions = [
  {
    id: 1,
    code: "KP01",
    titleBm: "Analisis Job Request / Change Order",
    titleEn: "Analyse Job Request / Change Order",
    scopeBm: "Fahami arahan kerja, keperluan pengguna dan skop pemasangan komputer.",
    scopeEn: "Understand work instructions, user requirements and computer setup scope.",
    notesBm: [
      "Baca job request untuk kenal pasti jenis komputer, lokasi pemasangan dan tarikh siap.",
      "Semak change order jika berlaku perubahan spesifikasi, perisian atau perkakasan.",
      "Catat keperluan pengguna seperti tujuan kerja, aplikasi utama dan akses rangkaian.",
      "Sahkan risiko awal seperti data lama, kekangan masa dan kelulusan penyelia."
    ],
    notesEn: [
      "Read the job request to identify computer type, setup location and completion date.",
      "Check the change order when hardware, software or specification changes occur.",
      "Record user needs such as work purpose, main applications and network access.",
      "Confirm early risks such as existing data, time limits and supervisor approval."
    ],
    activityBm: "Padankan job request dengan senarai keperluan: jenis PC, OS, aplikasi, akses rangkaian dan tarikh siap.",
    activityEn: "Match a job request with requirements: PC type, OS, applications, network access and due date."
  },
  {
    id: 2,
    code: "KP02",
    titleBm: "Penyediaan Tools, Hardware dan Software",
    titleEn: "Prepare Tools, Hardware and Software",
    scopeBm: "Sediakan peralatan kerja, komponen komputer dan perisian sebelum pemasangan.",
    scopeEn: "Prepare work tools, computer parts and software before setup.",
    notesBm: [
      "Sediakan pemutar skru, anti-static wrist strap, cable tie, thermal paste dan bekas skru.",
      "Semak komponen seperti motherboard, CPU, RAM, storage, PSU dan casing.",
      "Pastikan media pemasangan OS, driver dan aplikasi asas tersedia.",
      "Guna senarai semak supaya tiada komponen tertinggal."
    ],
    notesEn: [
      "Prepare screwdriver, anti-static wrist strap, cable tie, thermal paste and screw tray.",
      "Check components such as motherboard, CPU, RAM, storage, PSU and casing.",
      "Make sure OS installer, drivers and basic applications are ready.",
      "Use a checklist so no required component is missed."
    ],
    activityBm: "Pilih alat yang betul untuk kerja membuka casing dan memasang motherboard.",
    activityEn: "Select the correct tools for opening a casing and installing a motherboard."
  },
  {
    id: 3,
    code: "KP03",
    titleBm: "Perkakasan dan Peralatan Komputer",
    titleEn: "Computer Hardware and Equipment",
    scopeBm: "Kenal pasti komponen komputer, kabel dan fungsi asas setiap perkakasan.",
    scopeEn: "Identify computer components, cables and the basic function of each part.",
    notesBm: [
      "Motherboard menghubungkan CPU, RAM, storage, expansion card dan port I/O.",
      "CPU memproses arahan, RAM menyimpan data sementara, storage menyimpan data kekal.",
      "PSU membekalkan kuasa yang stabil kepada semua komponen.",
      "Kabel SATA, power cable, HDMI, DisplayPort dan USB perlu dipilih mengikut fungsi."
    ],
    notesEn: [
      "The motherboard connects CPU, RAM, storage, expansion card and I/O ports.",
      "CPU processes instructions, RAM stores temporary data, storage keeps permanent data.",
      "The PSU supplies stable power to all components.",
      "SATA, power, HDMI, DisplayPort and USB cables must be selected by function."
    ],
    activityBm: "Simulasi meja kerja: kenal pasti CPU, RAM, SSD, PSU dan kabel yang sesuai.",
    activityEn: "Workbench simulation: identify CPU, RAM, SSD, PSU and suitable cables."
  },
  {
    id: 4,
    code: "KP04",
    titleBm: "Peralatan Pemasangan Perkakasan",
    titleEn: "Hardware Installation Tools",
    scopeBm: "Gunakan peralatan pemasangan dengan betul dan selamat.",
    scopeEn: "Use installation tools correctly and safely.",
    notesBm: [
      "Matikan bekalan kuasa sebelum membuka casing.",
      "Gunakan anti-static wrist strap untuk mengurangkan risiko ESD.",
      "Jangan gunakan daya berlebihan ketika memasang RAM atau kabel.",
      "Simpan skru mengikut jenis supaya pemasangan semula lebih kemas."
    ],
    notesEn: [
      "Turn off the power supply before opening the casing.",
      "Use an anti-static wrist strap to reduce ESD risk.",
      "Do not use excessive force when installing RAM or cables.",
      "Sort screws by type to make reassembly cleaner."
    ],
    activityBm: "Susun prosedur keselamatan sebelum membuka CPU.",
    activityEn: "Arrange the safety procedure before opening a PC case."
  },
  {
    id: 5,
    code: "KP05",
    titleBm: "Fungsi Komponen Perkakasan Komputer",
    titleEn: "Computer Hardware Component Functions",
    scopeBm: "Terangkan fungsi komponen utama dalam unit sistem komputer.",
    scopeEn: "Explain the functions of main components in a computer system unit.",
    notesBm: [
      "CPU menentukan kelajuan pemprosesan mengikut core, thread dan clock speed.",
      "RAM membantu sistem menjalankan aplikasi secara sementara dan pantas.",
      "SSD memberi masa boot dan capaian fail yang lebih cepat berbanding HDD.",
      "GPU memproses paparan grafik, terutama untuk reka bentuk, video dan 3D."
    ],
    notesEn: [
      "CPU processing speed depends on cores, threads and clock speed.",
      "RAM helps the system run applications quickly in temporary memory.",
      "SSD gives faster boot and file access than HDD.",
      "GPU processes graphics, especially for design, video and 3D work."
    ],
    activityBm: "Pilih komponen yang sesuai untuk komputer pejabat, reka bentuk grafik dan bengkel latihan.",
    activityEn: "Choose suitable components for an office PC, graphic design PC and training lab PC."
  },
  {
    id: 6,
    code: "KP06",
    titleBm: "Pemasangan Motherboard dan CPU",
    titleEn: "Motherboard and CPU Installation",
    scopeBm: "Pasang motherboard, CPU, cooler dan RAM mengikut prosedur.",
    scopeEn: "Install motherboard, CPU, cooler and RAM according to procedure.",
    notesBm: [
      "Pastikan standoff casing sepadan dengan lubang motherboard.",
      "Letakkan CPU mengikut tanda segitiga pada socket.",
      "Sapukan thermal paste secara sederhana sebelum memasang cooler.",
      "Tekan RAM pada slot yang betul sehingga klip terkunci."
    ],
    notesEn: [
      "Ensure casing standoffs match the motherboard holes.",
      "Place the CPU according to the triangle mark on the socket.",
      "Apply a moderate amount of thermal paste before fitting the cooler.",
      "Press RAM into the correct slot until the clips lock."
    ],
    activityBm: "Simulasi urutan: standoff, motherboard, CPU, thermal paste, cooler, RAM.",
    activityEn: "Sequence simulation: standoff, motherboard, CPU, thermal paste, cooler, RAM."
  },
  {
    id: 7,
    code: "KP07",
    titleBm: "Pemasangan Storage dan Power Supply",
    titleEn: "Storage and Power Supply Installation",
    scopeBm: "Pasang storage, PSU dan sambungan kuasa dengan kemas.",
    scopeEn: "Install storage, PSU and power connections neatly.",
    notesBm: [
      "Pasang SSD/HDD pada bay atau slot M.2 yang sesuai.",
      "Sambungkan kabel SATA data dan SATA power untuk drive SATA.",
      "Pastikan kabel 24-pin motherboard dan 8-pin CPU dipasang ketat.",
      "Kemas kabel supaya aliran udara casing tidak terganggu."
    ],
    notesEn: [
      "Install SSD/HDD in the correct bay or M.2 slot.",
      "Connect SATA data and SATA power cables for SATA drives.",
      "Ensure 24-pin motherboard and 8-pin CPU power cables are firmly fitted.",
      "Manage cables so casing airflow is not blocked."
    ],
    activityBm: "Kenal pasti kabel PSU yang perlu dipasang pada motherboard, CPU dan storage.",
    activityEn: "Identify PSU cables needed for motherboard, CPU and storage."
  },
  {
    id: 8,
    code: "KP08",
    titleBm: "Pemasangan Sistem Operasi",
    titleEn: "Operating System Installation",
    scopeBm: "Pasang sistem operasi mengikut tetapan boot dan partisi.",
    scopeEn: "Install an operating system using correct boot and partition settings.",
    notesBm: [
      "Tetapkan boot priority kepada USB installer atau media pemasangan.",
      "Pilih edisi OS yang betul mengikut job request.",
      "Buat partisi mengikut keperluan kerja dan polisi organisasi.",
      "Lengkapkan tetapan wilayah, akaun dan kata laluan dengan selamat."
    ],
    notesEn: [
      "Set boot priority to the USB installer or installation media.",
      "Choose the correct OS edition based on the job request.",
      "Create partitions according to work needs and organisation policy.",
      "Complete region, account and password settings securely."
    ],
    activityBm: "Susun langkah pemasangan OS dari boot USB hingga desktop pertama.",
    activityEn: "Arrange OS installation steps from USB boot to first desktop."
  },
  {
    id: 9,
    code: "KP09",
    titleBm: "Pemasangan Driver",
    titleEn: "Driver Installation",
    scopeBm: "Pasang dan sahkan driver perkakasan selepas OS siap.",
    scopeEn: "Install and verify hardware drivers after OS setup.",
    notesBm: [
      "Semak Device Manager untuk kenal pasti driver yang belum lengkap.",
      "Pasang chipset driver sebelum driver lain jika disediakan.",
      "Gunakan driver rasmi daripada pengeluar perkakasan.",
      "Restart komputer selepas pemasangan driver penting."
    ],
    notesEn: [
      "Check Device Manager to identify missing drivers.",
      "Install chipset driver before other drivers when available.",
      "Use official drivers from the hardware manufacturer.",
      "Restart the computer after important driver installation."
    ],
    activityBm: "Tentukan tindakan apabila Device Manager memaparkan Unknown Device.",
    activityEn: "Decide what to do when Device Manager shows Unknown Device."
  },
  {
    id: 10,
    code: "KP10",
    titleBm: "Pemasangan Aplikasi Asas",
    titleEn: "Basic Application Installation",
    scopeBm: "Pasang aplikasi mengikut keperluan pengguna dan organisasi.",
    scopeEn: "Install applications according to user and organisation needs.",
    notesBm: [
      "Pasang aplikasi pejabat, browser, PDF reader, antivirus dan utiliti asas.",
      "Pastikan lesen perisian sah dan sesuai dengan polisi organisasi.",
      "Elakkan memasang aplikasi tidak berkaitan dengan job request.",
      "Uji aplikasi selepas pemasangan untuk pastikan boleh dibuka."
    ],
    notesEn: [
      "Install office apps, browser, PDF reader, antivirus and basic utilities.",
      "Ensure software licences are valid and match organisation policy.",
      "Avoid installing applications unrelated to the job request.",
      "Test applications after installation to ensure they open."
    ],
    activityBm: "Pilih aplikasi wajib untuk komputer pejabat baharu.",
    activityEn: "Select required applications for a new office computer."
  },
  {
    id: 11,
    code: "KP11",
    titleBm: "Set-Up Peripherals",
    titleEn: "Peripheral Set-Up",
    scopeBm: "Sambung dan konfigurasi periferal komputer.",
    scopeEn: "Connect and configure computer peripherals.",
    notesBm: [
      "Sambung monitor, papan kekunci, tetikus, printer dan speaker jika diperlukan.",
      "Pilih port yang sesuai seperti HDMI, DisplayPort, USB atau audio jack.",
      "Pasang driver printer atau scanner jika OS tidak mengesan automatik.",
      "Uji setiap periferal sebelum serahan kepada pengguna."
    ],
    notesEn: [
      "Connect monitor, keyboard, mouse, printer and speakers when required.",
      "Choose suitable ports such as HDMI, DisplayPort, USB or audio jack.",
      "Install printer or scanner drivers if the OS does not detect them automatically.",
      "Test each peripheral before handover."
    ],
    activityBm: "Padankan periferal dengan port yang betul.",
    activityEn: "Match each peripheral with the correct port."
  },
  {
    id: 12,
    code: "KP12",
    titleBm: "Konfigurasi Rangkaian Asas",
    titleEn: "Basic Network Configuration",
    scopeBm: "Tetapkan sambungan rangkaian asas dan uji capaian.",
    scopeEn: "Configure basic network connection and test access.",
    notesBm: [
      "Semak sambungan kabel LAN atau Wi-Fi.",
      "Tetapkan IP automatik atau statik mengikut arahan kerja.",
      "Uji capaian menggunakan ping, browser dan status network adapter.",
      "Catat maklumat IP, gateway dan DNS dalam laporan jika diperlukan."
    ],
    notesEn: [
      "Check LAN cable or Wi-Fi connection.",
      "Set automatic or static IP based on the work instruction.",
      "Test access using ping, browser and network adapter status.",
      "Record IP, gateway and DNS details in the report if required."
    ],
    activityBm: "Lengkapkan tetapan IP untuk komputer makmal latihan.",
    activityEn: "Complete IP settings for a training lab computer."
  },
  {
    id: 13,
    code: "KP13",
    titleBm: "Unit Functionality Test",
    titleEn: "Unit Functionality Test",
    scopeBm: "Uji fungsi komputer selepas pemasangan lengkap.",
    scopeEn: "Test computer functions after complete setup.",
    notesBm: [
      "Uji boot, login, storage, audio, paparan, rangkaian dan aplikasi.",
      "Semak suhu asas dan bunyi kipas yang tidak normal.",
      "Pastikan semua port penting boleh digunakan.",
      "Catat keputusan ujian sebagai bukti kerja siap."
    ],
    notesEn: [
      "Test boot, login, storage, audio, display, network and applications.",
      "Check basic temperature and abnormal fan noise.",
      "Ensure important ports are usable.",
      "Record test results as evidence of completed work."
    ],
    activityBm: "Tandakan item pass/fail dalam senarai semak ujian fungsi.",
    activityEn: "Mark pass/fail items in a functionality test checklist."
  },
  {
    id: 14,
    code: "KP14",
    titleBm: "Troubleshooting Selepas Set-Up",
    titleEn: "Post-Setup Troubleshooting",
    scopeBm: "Kenal pasti masalah biasa selepas pemasangan komputer.",
    scopeEn: "Identify common problems after computer setup.",
    notesBm: [
      "Jika komputer tidak hidup, semak kabel kuasa, PSU switch dan sambungan front panel.",
      "Jika tiada paparan, semak monitor, kabel video, RAM dan GPU.",
      "Jika OS tidak boot, semak boot order dan status storage.",
      "Rekod simptom, punca dan tindakan pembetulan."
    ],
    notesEn: [
      "If the PC does not power on, check power cable, PSU switch and front panel connection.",
      "If there is no display, check monitor, video cable, RAM and GPU.",
      "If the OS does not boot, check boot order and storage status.",
      "Record symptoms, causes and corrective actions."
    ],
    activityBm: "Pilih punca paling mungkin untuk simptom tiada paparan selepas pemasangan RAM.",
    activityEn: "Choose the most likely cause for no display after RAM installation."
  },
  {
    id: 15,
    code: "KP15",
    titleBm: "Penyediaan Laporan Sistem Komputer",
    titleEn: "Computer System Setup Report",
    scopeBm: "Sediakan laporan kerja pemasangan komputer yang lengkap.",
    scopeEn: "Prepare a complete computer setup work report.",
    notesBm: [
      "Masukkan maklumat pengguna, lokasi, tarikh dan nombor aset jika ada.",
      "Catat spesifikasi komputer, OS, aplikasi, driver dan periferal.",
      "Lampirkan keputusan ujian fungsi dan isu yang telah diselesaikan.",
      "Dapatkan pengesahan penyelia atau pengguna mengikut prosedur."
    ],
    notesEn: [
      "Include user details, location, date and asset number if available.",
      "Record computer specification, OS, applications, drivers and peripherals.",
      "Attach functionality test results and resolved issues.",
      "Obtain supervisor or user confirmation according to procedure."
    ],
    activityBm: "Lengkapkan borang laporan akhir berdasarkan senario pemasangan komputer.",
    activityEn: "Complete a final report form based on a computer setup scenario."
  }
];

const quizBank = {
  bm: [
    ["Apakah tujuan utama job request?", ["Menentukan kerja yang perlu dibuat", "Memadam semua data", "Menukar warna casing", "Membuang driver"], 0],
    ["Apakah alat keselamatan untuk elak ESD?", ["Cable tie", "Anti-static wrist strap", "HDMI cable", "Thermal pad"], 1],
    ["Komponen manakah menyimpan data sementara?", ["SSD", "PSU", "RAM", "Monitor"], 2],
    ["Sebelum membuka casing, tindakan pertama ialah", ["Matikan bekalan kuasa", "Pasang printer", "Format OS", "Buka browser"], 0],
    ["Thermal paste digunakan antara", ["CPU dan cooler", "Monitor dan HDMI", "RAM dan slot", "SSD dan SATA"], 0],
    ["Standoff casing penting untuk", ["Elak motherboard menyentuh casing secara terus", "Tambah kelajuan internet", "Memasang printer", "Membuang virus"], 0],
    ["Kabel 24-pin PSU biasanya disambung kepada", ["Monitor", "Motherboard", "Keyboard", "Speaker"], 1],
    ["Boot priority perlu diubah untuk", ["Memasang OS melalui USB", "Menaikkan volume", "Mencetak laporan", "Menukar wallpaper"], 0],
    ["Device Manager digunakan untuk semak", ["Kehilangan driver", "Nama pengguna", "Warna desktop", "Saiz meja"], 0],
    ["Perisian yang dipasang mestilah", ["Sah dan mengikut polisi", "Sentiasa percuma sahaja", "Tidak perlu diuji", "Dipilih secara rawak"], 0],
    ["Printer ialah contoh", ["Storage", "Peripheral", "CPU", "RAM"], 1],
    ["Arahan ping digunakan untuk", ["Uji capaian rangkaian", "Pasang RAM", "Format SSD", "Cetak fail"], 0],
    ["Ujian fungsi dibuat untuk", ["Mengesahkan komputer berfungsi selepas set-up", "Membuang semua aplikasi", "Menukar casing", "Menambah akaun media sosial"], 0],
    ["Jika tiada paparan selepas set-up, semak", ["Monitor, kabel video, RAM atau GPU", "Aplikasi pejabat sahaja", "Wallpaper", "Nama fail"], 0],
    ["Laporan akhir perlu mengandungi", ["Spesifikasi, kerja dibuat dan keputusan ujian", "Cerita bebas", "Muzik kegemaran", "Password peribadi"], 0]
  ],
  en: [
    ["What is the main purpose of a job request?", ["To define the required work", "To delete all data", "To change casing colour", "To remove drivers"], 0],
    ["Which safety tool helps prevent ESD?", ["Cable tie", "Anti-static wrist strap", "HDMI cable", "Thermal pad"], 1],
    ["Which component stores temporary data?", ["SSD", "PSU", "RAM", "Monitor"], 2],
    ["Before opening the casing, the first action is to", ["Turn off power", "Install printer", "Format OS", "Open browser"], 0],
    ["Thermal paste is applied between", ["CPU and cooler", "Monitor and HDMI", "RAM and slot", "SSD and SATA"], 0],
    ["Casing standoffs are important to", ["Prevent direct contact between motherboard and casing", "Increase internet speed", "Install printer", "Remove virus"], 0],
    ["The 24-pin PSU cable is usually connected to the", ["Monitor", "Motherboard", "Keyboard", "Speaker"], 1],
    ["Boot priority is changed to", ["Install OS from USB", "Increase volume", "Print a report", "Change wallpaper"], 0],
    ["Device Manager is used to check", ["Missing drivers", "Username", "Desktop colour", "Desk size"], 0],
    ["Installed software must be", ["Legal and policy-compliant", "Always free only", "Untested", "Randomly selected"], 0],
    ["A printer is an example of a", ["Storage device", "Peripheral", "CPU", "RAM"], 1],
    ["The ping command is used to", ["Test network reachability", "Install RAM", "Format SSD", "Print files"], 0],
    ["Functionality testing is done to", ["Confirm the computer works after setup", "Remove all apps", "Change casing", "Add social media accounts"], 0],
    ["If there is no display after setup, check", ["Monitor, video cable, RAM or GPU", "Office app only", "Wallpaper", "Filename"], 0],
    ["The final report should contain", ["Specification, completed work and test results", "Free story", "Favourite music", "Personal password"], 0]
  ]
};

const state = loadState();

function loadState() {
  const fallback = {
    lang: "bm",
    profile: null,
    progress: {
      unlocked: 1,
      scores: {},
      completed: []
    }
  };

  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return text[state.lang][key];
}

function missionTitle(mission) {
  return state.lang === "bm" ? mission.titleBm : mission.titleEn;
}

function missionScope(mission) {
  return state.lang === "bm" ? mission.scopeBm : mission.scopeEn;
}

function missionNotes(mission) {
  return state.lang === "bm" ? mission.notesBm : mission.notesEn;
}

function validateProfile(name, id) {
  const cleanName = name.trim().replace(/\s+/g, " ");
  const cleanId = id.trim();
  const badNames = ["pelajar", "student", "test", "admin", "user", "nama", "abc", "demo"];
  const hasTwoWords = cleanName.split(" ").filter(Boolean).length >= 2;
  const hasLetters = /[a-zA-Z]/.test(cleanName);
  const generic = badNames.includes(cleanName.toLowerCase());
  const idOk = cleanId.length >= 4 && !["0000", "1234", "test", "admin"].includes(cleanId.toLowerCase());

  if (!hasTwoWords || !hasLetters || generic || !idOk) return null;
  return { name: cleanName, id: cleanId };
}

function render() {
  document.documentElement.lang = state.lang === "bm" ? "ms" : "en";
  if (!state.profile) {
    renderLogin();
    return;
  }
  renderDashboard();
}

function renderChrome(content) {
  document.getElementById("app").innerHTML = `
    <main class="shell">
      <header class="topbar">
        <div class="brand">
          <strong>COMPUTER SYSTEM SET-UP C01</strong>
          <span>${t("subtitle")}</span>
        </div>
        <div class="toolbar">
          <button class="btn" data-action="lang">BM / EN</button>
          ${state.profile ? `<button class="btn" data-action="profile">${t("profile")}</button>` : ""}
          ${state.profile ? `<button class="btn danger" data-action="logout">${t("logout")}</button>` : ""}
        </div>
      </header>
      ${content}
    </main>
  `;

  bindGlobalActions();
}

function renderLogin(error = "") {
  renderChrome(`
    <section class="hero">
      <div class="intro panel">
        <span class="eyebrow">IT-020-3:2013-C01</span>
        <h1>COMPUTER SYSTEM SET-UP</h1>
        <p class="lead">${t("intro")}</p>
        <p class="muted">${t("loginHint")}</p>
      </div>
      <form class="login panel" id="loginForm">
        <h2>${t("loginTitle")}</h2>
        ${error ? `<div class="error">${error}</div>` : ""}
        <div class="field">
          <label for="studentName">${t("fullName")}</label>
          <input id="studentName" autocomplete="name" placeholder="Contoh: Nurul Farhana">
        </div>
        <div class="field">
          <label for="studentId">${t("studentId")}</label>
          <input id="studentId" autocomplete="off" placeholder="Contoh: C01-001">
        </div>
        <button class="btn primary" type="submit">${t("enter")}</button>
      </form>
    </section>
  `);

  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = validateProfile(
      document.getElementById("studentName").value,
      document.getElementById("studentId").value
    );

    if (!profile) {
      renderLogin(t("invalid"));
      return;
    }

    state.profile = profile;
    saveState();
    renderDashboard();
  });
}

function renderDashboard() {
  const passed = state.progress.completed.length;
  const scores = Object.values(state.progress.scores);
  const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;
  const percent = Math.round((passed / missions.length) * 100);
  const level = 1 + Math.floor(passed / 3);

  renderChrome(`
    <section>
      <div class="panel lesson-box">
        <span class="eyebrow">${t("dashboard")}</span>
        <h1>${state.profile.name}</h1>
        <p class="muted">${state.profile.id}</p>
      </div>
      <div class="stats">
        <div class="stat"><span>${t("progress")}</span><strong>${percent}%</strong></div>
        <div class="stat"><span>${t("passed")}</span><strong>${passed}/${missions.length}</strong></div>
        <div class="stat"><span>${t("average")}</span><strong>${average}%</strong></div>
        <div class="stat"><span>${t("level")}</span><strong>${level}</strong></div>
      </div>
      <div class="toolbar" style="justify-content:flex-start;margin-bottom:14px">
        <button class="btn warning" data-action="reset">${t("reset")}</button>
      </div>
      <div class="grid">
        ${missions.map(renderMissionCard).join("")}
      </div>
    </section>
  `);

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => renderMission(Number(button.dataset.open)));
  });
}

function renderMissionCard(mission) {
  const locked = mission.id > state.progress.unlocked;
  const done = state.progress.completed.includes(mission.id);
  const score = state.progress.scores[mission.id];
  const status = done ? t("completed") : locked ? t("locked") : t("open");
  const statusClass = done ? "pass" : locked ? "lock" : "";

  return `
    <article class="mission-card ${locked ? "locked" : ""} ${done ? "done" : ""}">
      <div>
        <div class="tag-row">
          <span class="tag">${mission.code}</span>
          <span class="tag ${statusClass}">${status}</span>
          ${score !== undefined ? `<span class="tag">${score}%</span>` : ""}
        </div>
        <h3>${missionTitle(mission)}</h3>
        <p class="muted">${missionScope(mission)}</p>
      </div>
      <button class="btn primary" data-open="${mission.id}" ${locked ? "disabled" : ""}>${done ? t("continue") : t("open")}</button>
    </article>
  `;
}

function renderMission(id) {
  const mission = missions.find((item) => item.id === id);
  if (!mission || mission.id > state.progress.unlocked) {
    renderDashboard();
    return;
  }

  renderChrome(`
    <section class="mission-page">
      <div class="panel lesson-box">
        <span class="eyebrow">${mission.code}</span>
        <h1>${missionTitle(mission)}</h1>
        <p class="lead">${missionScope(mission)}</p>
        <div class="toolbar" style="justify-content:flex-start">
          <button class="btn" data-action="back">${t("back")}</button>
          <button class="btn" data-action="speak" data-mission="${mission.id}">${t("listen")}</button>
          <button class="btn primary" data-action="quiz" data-mission="${mission.id}">${t("startQuiz")}</button>
        </div>
      </div>
      <div class="lesson-layout">
        <div class="panel lesson-box">
          <h2>${t("notes")}</h2>
          <ul class="note-list">${missionNotes(mission).map((note) => `<li>${note}</li>`).join("")}</ul>
        </div>
        <div class="panel lesson-box">
          <h2>${t("activity")}</h2>
          <div class="activity-stage">
            <p>${state.lang === "bm" ? mission.activityBm : mission.activityEn}</p>
            ${renderSimulation(mission)}
          </div>
        </div>
      </div>
      <div id="quizMount"></div>
    </section>
  `);
}

function renderSimulation(mission) {
  const parts = state.lang === "bm"
    ? ["Motherboard", "CPU", "RAM", "SSD", "PSU", "Kabel SATA"]
    : ["Motherboard", "CPU", "RAM", "SSD", "PSU", "SATA Cable"];

  if (![3, 5, 6, 7].includes(mission.id)) {
    return `
      <ol class="activity-list">
        <li>${state.lang === "bm" ? "Baca situasi kerja." : "Read the work situation."}</li>
        <li>${state.lang === "bm" ? "Pilih tindakan yang paling sesuai." : "Choose the most suitable action."}</li>
        <li>${state.lang === "bm" ? "Terangkan sebab pilihan kepada rakan." : "Explain the reason to a classmate."}</li>
      </ol>
    `;
  }

  return `<div class="bench">${parts.map((part) => `<div class="part">${part}</div>`).join("")}</div>`;
}

function renderQuiz(id) {
  const mission = missions.find((item) => item.id === id);
  const quiz = buildQuiz(id);
  const answers = {};
  const mount = document.getElementById("quizMount");

  mount.innerHTML = `
    <div class="panel lesson-box">
      <h2>${t("quiz")} ${mission.code}</h2>
      <div class="quiz">
        ${quiz.map((item, qIndex) => `
          <div class="question">
            <strong>${qIndex + 1}. ${item[0]}</strong>
            <div class="answers">
              ${item[1].map((answer, aIndex) => `
                <button class="answer" data-question="${qIndex}" data-answer="${aIndex}">${answer}</button>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      <div class="result">
        <button class="btn success" data-action="submitQuiz">${t("submit")}</button>
        <div id="quizResult"></div>
      </div>
    </div>
  `;

  mount.scrollIntoView({ behavior: "smooth", block: "start" });

  mount.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const qIndex = Number(button.dataset.question);
      answers[qIndex] = Number(button.dataset.answer);
      mount.querySelectorAll(`[data-question="${qIndex}"]`).forEach((answerButton) => {
        answerButton.classList.remove("selected");
      });
      button.classList.add("selected");
    });
  });

  mount.querySelector("[data-action='submitQuiz']").addEventListener("click", () => {
    const correct = quiz.reduce((count, item, index) => count + (answers[index] === item[2] ? 1 : 0), 0);
    const score = Math.round((correct / quiz.length) * 100);
    const passed = score >= PASS_MARK;

    state.progress.scores[id] = score;
    if (passed && !state.progress.completed.includes(id)) {
      state.progress.completed.push(id);
      state.progress.completed.sort((a, b) => a - b);
      state.progress.unlocked = Math.max(state.progress.unlocked, Math.min(id + 1, missions.length));
    }

    saveState();

    document.getElementById("quizResult").innerHTML = `
      <div class="${passed ? "success-note" : "error"}">
        <strong>${t("score")}: ${score}%</strong><br>
        ${passed ? t("pass") : t("fail")}
      </div>
    `;
  });
}

function buildQuiz(id) {
  const bank = quizBank[state.lang];
  const previous = bank[(id + 13) % bank.length];
  const current = bank[id - 1];
  const next = bank[id % bank.length];
  return [current, previous, next];
}

function speakMission(id) {
  const mission = missions.find((item) => item.id === id);
  if (!mission || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const content = [missionTitle(mission), missionScope(mission), ...missionNotes(mission)].join(". ");
  const utterance = new SpeechSynthesisUtterance(content);
  utterance.lang = state.lang === "bm" ? "ms-MY" : "en-US";
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function bindGlobalActions() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;

      if (action === "lang") {
        state.lang = state.lang === "bm" ? "en" : "bm";
        saveState();
        render();
      }

      if (action === "logout") {
        state.profile = null;
        saveState();
        renderLogin();
      }

      if (action === "profile") renderDashboard();
      if (action === "back") renderDashboard();
      if (action === "speak") speakMission(Number(button.dataset.mission));
      if (action === "quiz") renderQuiz(Number(button.dataset.mission));

      if (action === "reset") {
        state.progress = { unlocked: 1, scores: {}, completed: [] };
        saveState();
        renderDashboard();
      }
    });
  });
}

render();

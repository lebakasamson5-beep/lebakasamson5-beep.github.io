/* ==========================================================
   EDIT YOUR CONTENT HERE
   ========================================================== */

var ROLES = ["Applications Developer", "Web and Mobile Builder", "Cybersecurity Enthusiast", "Problem Solver"];

/* Set this to "owner/repository" of THIS portfolio. New files you drop into the
   certificates folder on GitHub are then found automatically. */
var GITHUB_REPO = "lebakasamson5-beep/YOUR-REPO-NAME";
var CERT_FOLDER = "certificates";

/* ---------- PROJECTS ---------- */
var PROJECTS = [
  { title: "Albert Park Pharmacy System", type: "Web application",
    description: "A web-based pharmacy management system with features that support pharmacy operations and information management.",
    tags: ["HTML", "C#", "Azure","sql database"], live: "https://albert-park-pharmacy.azurewebsites.net",
    code: "https://github.com/lebakasamson5-beep/albert-park-pharmacy", image: "images/pharmacy.png" },
  { title: "Rapid Guard", type: "Mobile application",
    description: "A Flutter mobile app with features for security and emergency activities, including the interface and core functionality.",
    tags: ["Flutter", "Dart", "Firebase"], live: "https://github.com/lebakasamson5-beep/RapidGuard/blob/main/apk/app-release.apk",
    code: "https://github.com/lebakasamson5-beep/RapidGuard", image: "images/rapid-guard.png" },
  { title: "Waste Wise", type: "Web application",
    description: "A web-based waste management system with features for better waste management and information handling.",
    tags: ["Python", "HTML", "Railway"], live: "https://waste-wise.up.railway.app",
    code: "https://github.com/HopewellA1/wastewise", image: "images/waste-wise.png" },
  { title: "Haba K Shop", type: "mobile application",
    description: "A shop management system to manage products, sales, stock and daily shop operations.",
    tags: ["flutter", "Dart", "Firebase"], live: "https://github.com/lebakasamson5-beep/Haba--k/blob/main/apk/app-release.apk",
    code: "https://github.com/lebakasamson5-beep/Haba--K", image: "images/haba-k-shop.png" },
  { title: "Smart Shopper", type: "web application",
    description: "My second software development project \u2013 a smart shopping assistant with price comparison and list management.",
    tags: ["Python", "Flask", "Railway"], live: "https://smartshopper-production-0fd7.up.railway.app/",
    code: "https://github.com/lebakasamson5-beep/smartshopper", image: "images/smart-shopper.png" },
    { title: "ParkingFinder", type: "Mobile application",
    description: "A mobile application that helps users find available parking spaces quickly and conveniently.",
    tags: ["Flutter", "Dart", "Firebase"], live: "https://github.com/Saziso040831/ParkingFinder/blob/main/apk/app-release.apk",
    code: "https://github.com/Saziso040831/ParkingFinder", image: "images/smart-parkeringfinder.png" }
];

/* ---------- QUALIFICATIONS (formal academic; shown only in the Qualifications section) ---------- */
var QUALIFICATIONS = [
  { title: "Diploma in ICT, Applications Development", issuer: "Durban University of Technology",
    year: 2025, note: "Completed with 67%", file: "certificates/dut-diploma.pdf" }
];

/* ---------- CERTIFICATES ----------
   To ADD a certificate: upload the file to the certificates folder on GitHub and start its
   name with the provider: mtn-..., ai-..., cisco-..., fnb-... (anything else goes to "Other").
   It then appears automatically. Add a line below only if you want a custom title or year. */
var CATEGORIES = [["mtn", "MTN"], ["ai", "AI"], ["cisco", "Cisco"], ["fnb", "FNB"], ["other", "Other"]];
var CERTIFICATES = [
  { title: "MTN Skills Academy \u2013 Internet Fundamentals",       issuer: "MTN", year: 2026, provider: "mtn", file: "certificates/Internet_Fundamental_mtn.pdf" },
  { title: "MTN Skills Academy \u2013 Internet Search and beyond",       issuer: "MTN", year: 2026, provider: "mtn", file: "certificates/Internet_Search_mtn.pdf" },
  { title: "MTN Skills Academy \u2013 Boost Your Productivity with Copilot", issuer: "MTN", year: 2026, provider: "mtn", file: "certificates/mtn.pdf" },
 { title: "MTN Skills Academy \u2013 AI for all", issuer: "MTN", year: 2026, provider: "mtn", file: "certificates/AI_for_all_Certificate.pdf" },
   
  { title: "AI and Accessibility",          issuer: "Microsoft / DUT", year: 2025, provider: "ai", file: "certificates/ai-and-accessibility.pdf" },
  { title: "AI Fundamentals",               issuer: "Microsoft / DUT", year: 2025, provider: "ai", file: "certificates/ai-fundamentals.pdf" },
  { title: "Generative AI", issuer: "Microsoft",       year: 2025, provider: "ai", file: "certificates/generative AI.pdf" },
  { title: "Responsible AI",                issuer: "Microsoft",       year: 2025, provider: "ai", file: "certificates/responsible ai.pdf" },
  { title: "Microsoft Copilot",       issuer: "Microsoft",       year: 2025, provider: "ai", file: "certificates/microsoft copilot ai" },
  // { title: "AI for Business",               issuer: "Microsoft",       year: 2025, provider: "ai", file: "certificates/ai-for-business.pdf" },
  // { title: "Prompt Engineering Essentials", issuer: "Microsoft",       year: 2025, provider: "ai", file: "certificates/ai-prompt-engineering.pdf" },
  // { title: "Azure AI Services",             issuer: "Microsoft",       year: 2025, provider: "ai", file: "certificates/ai-azure-services.pdf" },

  { title: "Cybersecurity Essentials",      issuer: "Cisco Networking Academy", year: 2023, provider: "cisco", file: "certificates/cisco-cybersecurity-essentials.pdf" },
  { title: "Get Connected", issuer: "Cisco Networking Academy", year: 2023, provider: "cisco", file: "certificates/Get_Connected_cisco.pdf" },
  { title: "Introduction to Packet Tracer",issuer: "Cisco Networking Academy", year: 2023, provider: "cisco", file: "certificates/Introduction_to_Packet_Tracer_cisco.pdf" },
  // { title: "Python Essentials 1",           issuer: "Cisco Networking Academy", year: 2024, provider: "cisco", file: "certificates/LSTSOTETSI-Get Connected En-cisco.pdf" },
  { title: "Partner: NDG Linux Unhatched",issuer: "Cisco Networking Academy", year: 2024, provider: "cisco", file: "certificates/Partner-_NDG_Linux_Unhatched_cisco.pdf" },

  { title: "Full Stack Development", issuer: "FNB App Academy", year: 2025, provider: "fnb", file: "certificates/fnb-full-stack-development.pdf" }
];

/* ==========================================================
   CODE BELOW: runs AFTER the page is fully loaded
   ========================================================== */
document.addEventListener("DOMContentLoaded", function () {

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Hero name letters ---------- */
  var nameEl = document.getElementById("name");
  if (nameEl) {
    var full = nameEl.textContent.trim();
    clear(nameEl);
    var idx = 0;
    full.split(" ").forEach(function (w) {
      var word = el("span", "word");
      word.setAttribute("aria-hidden", "true");
      w.split("").forEach(function (ch) {
        var s = el("span", "char", ch);
        s.style.setProperty("--i", idx++);
        word.appendChild(s);
      });
      nameEl.appendChild(word);
    });
  }

  /* ---------- Typing effect ---------- */
  var typed = document.getElementById("typed");
  if (typed) {
    if (reduce) { typed.textContent = ROLES[0]; }
    else {
      var r = 0, c = 0, del = false;
      (function tick() {
        var word = ROLES[r];
        c += del ? -1 : 1;
        typed.textContent = word.slice(0, c);
        var wait = del ? 40 : 85;
        if (!del && c === word.length) { del = true; wait = 1500; }
        else if (del && c === 0) { del = false; r = (r + 1) % ROLES.length; wait = 350; }
        setTimeout(tick, wait);
      })();
    }
  }

  /* ---------- Marquee ---------- */
  var tech = ["C#", "Python", "Dart", "Flutter", "HTML", "CSS", "JavaScript", "Firebase", "Git", "GitHub", "Render", "Railway", "Azure", "Cybersecurity"];
  var track = document.getElementById("marquee");
  if (track) tech.concat(tech).forEach(function (t) { track.appendChild(el("span", "", t)); });

  /* ---------- Stats ---------- */
  var statProj = document.getElementById("stat-projects");
  if (statProj) statProj.setAttribute("data-count", PROJECTS.length);

  /* ---------- Projects ---------- */
  var projectGrid = document.getElementById("project-grid");
  if (projectGrid) {
    PROJECTS.forEach(function (p, i) {
      var card = el("article", "card project reveal");
      card.style.setProperty("--d", (i * 0.12) + "s");
      if (p.image) {
        var img = el("img", "project-img");
        img.src = p.image; img.alt = p.title + " preview"; img.loading = "lazy";
        img.onerror = function () { this.style.display = "none"; };
        card.appendChild(img);
      }
      card.appendChild(el("p", "meta", p.type));
      card.appendChild(el("h3", "", p.title));
      card.appendChild(el("p", "", p.description));
      if (p.tags && p.tags.length) {
        var tags = el("ul", "tags");
        p.tags.forEach(function (t) { tags.appendChild(el("li", "", t)); });
        card.appendChild(tags);
      }
      var projLinks = el("div", "links");
      if (p.live) {
        var a = el("a", "btn small primary", p.type === "Mobile application" ? "Download APK / Release" : "View live app");
        a.href = p.live; a.target = "_blank"; a.rel = "noopener";
        projLinks.appendChild(a);
      }
      if (p.code) {
        var b = el("a", "btn small", "Source code");
        b.href = p.code; b.target = "_blank"; b.rel = "noopener";
        projLinks.appendChild(b);
      }
      if (!p.live && !p.code) projLinks.appendChild(el("span", "badge", "Link coming soon"));
      card.appendChild(projLinks);
      projectGrid.appendChild(card);
    });
  }

  /* ---------- Certificate helpers ---------- */
  var discovered = [], filter = "all", query = "";

  function all() { return CERTIFICATES.concat(discovered); }
  function labelOf(id) { for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i][0] === id) return CATEGORIES[i][1]; return id; }
  function providerOf(name) { var p = name.split(/[-_]/)[0].toLowerCase(); return /^(mtn|ai|cisco|fnb)$/.test(p) ? p : "other"; }
  function titleOf(name) {
    return name.replace(/\.[^.]+$/, "").replace(/^(mtn|ai|cisco|fnb)[-_]/i, "").replace(/[-_]+/g, " ")
      .replace(/\b\w/g, function (ch) { return ch.toUpperCase(); });
  }

  /* Finds new files in the certificates folder through the GitHub API (cached for the visit) */
  function discover() {
    if (!GITHUB_REPO || /YOUR-REPO/.test(GITHUB_REPO)) return Promise.resolve();
    var cached = null;
    try { cached = JSON.parse(sessionStorage.getItem("portfolio.certFolder") || "null"); } catch (e) {}
    var req = cached ? Promise.resolve(cached)
      : fetch("https://api.github.com/repos/" + GITHUB_REPO + "/contents/" + CERT_FOLDER)
          .then(function (res) { if (!res.ok) throw new Error("list failed"); return res.json(); })
          .then(function (list) { try { sessionStorage.setItem("portfolio.certFolder", JSON.stringify(list)); } catch (e) {} return list; });
    return req.then(function (list) {
      var known = CERTIFICATES.concat(QUALIFICATIONS).map(function (x) { return x.file.toLowerCase(); });
      list.forEach(function (f) {
        var path = CERT_FOLDER + "/" + f.name;
        if (f.type !== "file" || !/\.(pdf|jpe?g|png)$/i.test(f.name) || known.indexOf(path.toLowerCase()) > -1) return;
        var p = providerOf(f.name);
        discovered.push({ title: titleOf(f.name), issuer: labelOf(p), year: "", provider: p, file: path });
      });
    }).catch(function () {});          // offline or rate-limited: the built-in list still shows
  }

  function makeCard(item, i, isQual) {
    var card = el("article", "card cert");
    card.style.setProperty("--d", Math.min(i, 10) * 0.04 + "s");
    if (!isQual) {
      var tag = el("span", "provider-tag", labelOf(item.provider));
      tag.setAttribute("data-p", item.provider);
      card.appendChild(tag);
    }
    card.appendChild(el("span", "icon", isQual ? "\uD83C\uDF96\uFE0F" : "\uD83C\uDF93"));
    card.appendChild(el("p", "meta", item.year ? String(item.year) : "Certificate"));
    card.appendChild(el("h3", "", item.title));
    card.appendChild(el("p", "", item.issuer + (item.note ? " \u2014 " + item.note : "")));
    var open = el("button", "view-btn", isQual ? "View qualification \u2192" : "View certificate \u2192");
    open.type = "button";
    open.setAttribute("aria-label", "View " + item.title);
    open.addEventListener("click", function () { openCertificate(item); });
    card.appendChild(open);
    return card;
  }

  /* ---------- Qualifications ---------- */
  var qualGrid = document.getElementById("qual-grid");
  if (qualGrid) QUALIFICATIONS.forEach(function (q, i) { qualGrid.appendChild(makeCard(q, i, true)); });

  /* ---------- Certificates: tabs, search, counts ---------- */
  var tabs = document.getElementById("cert-filters");
  var certGrid = document.getElementById("cert-grid");
  var summary = document.getElementById("cert-summary");
  var search = document.getElementById("cert-search");
  var statCertEl = document.getElementById("stat-certs");

  function inFilter(c) { return filter === "all" || c.provider === filter; }

  function buildTabs() {
    clear(tabs);
    var cats = [["all", "All"]].concat(CATEGORIES);
    cats.forEach(function (cat, k) {
      var n = all().filter(function (x) { return cat[0] === "all" || x.provider === cat[0]; }).length;
      var btn = el("button", "filter-btn" + (cat[0] === filter ? " active" : ""));
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", cat[0] === filter ? "true" : "false");
      btn.tabIndex = cat[0] === filter ? 0 : -1;
      btn.appendChild(document.createTextNode(cat[1] + " "));
      btn.appendChild(el("span", "count", String(n)));
      btn.addEventListener("click", function () { filter = cat[0]; refresh(); });
      btn.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        filter = cats[(k + d + cats.length) % cats.length][0];
        refresh();
        tabs.querySelector(".active").focus();
      });
      tabs.appendChild(btn);
    });
  }

  function renderCerts() {
    clear(certGrid);
    var q = query.trim().toLowerCase();
    var inTab = all().filter(inFilter);
    var list = inTab.filter(function (c) { return !q || (c.title + " " + c.issuer + " " + c.year).toLowerCase().indexOf(q) > -1; });
    summary.textContent = "Showing " + list.length + " of " + inTab.length + (inTab.length === 1 ? " certificate" : " certificates") + " (" + all().length + " in total)";
    if (!list.length) {
      certGrid.appendChild(el("div", "cert-empty", q ? "No certificates match your search." : "No certificates in this category yet."));
      return;
    }
    list.forEach(function (c, i) { certGrid.appendChild(makeCard(c, i)); });
  }

  function refresh() {
    buildTabs(); renderCerts();
    if (statCertEl) {                  // keep the hero counter equal to the real total
      statCertEl.setAttribute("data-count", all().length);
      if (statCertEl.textContent !== "0") statCertEl.textContent = all().length;
    }
  }
  if (search) search.addEventListener("input", function () { query = search.value; renderCerts(); });
  refresh();
  discover().then(function () { if (discovered.length) refresh(); });

  /* ---------- Chip stagger ---------- */
  document.querySelectorAll(".chips").forEach(function (ul) {
    Array.prototype.forEach.call(ul.children, function (li, i) { li.style.setProperty("--c", i); });
  });

  /* ---------- 3D tilt on cards (works for cards created later) ---------- */
  if (fine && !reduce) {
    document.addEventListener("mousemove", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      var b = card.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
      card.style.setProperty("--mx", x + "px");
      card.style.setProperty("--my", y + "px");
      card.style.setProperty("--ry", ((x / b.width - 0.5) * 10) + "deg");
      card.style.setProperty("--rx", ((0.5 - y / b.height) * 10) + "deg");
    });
    document.addEventListener("mouseout", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (card && !card.contains(e.relatedTarget)) { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); }
    });
    var glow = document.getElementById("glow");
    if (glow) {
      document.addEventListener("mousemove", function (e) {
        glow.style.opacity = 1;
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      });
    }
  }

  /* ---------- Reveal + counters + active nav link ---------- */
  function countUp(node) {
    var target = +node.getAttribute("data-count");
    if (reduce) { node.textContent = target; return; }
    var start = null;
    (function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / 1400, 1);
      node.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (n) { io.observe(n); });
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (n) { cio.observe(n); });
    var navMap = {};
    document.querySelectorAll(".nav-links a").forEach(function (a) { navMap[a.getAttribute("href").slice(1)] = a; });
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) Object.keys(navMap).forEach(function (k) { navMap[k].classList.toggle("active", k === en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { sio.observe(s); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
    counters.forEach(countUp);
  }

  /* ---------- Scroll progress + back to top ---------- */
  var bar = document.getElementById("progress");
  var topBtn = document.getElementById("top");
  function onScroll() {
    var h = document.documentElement;
    var pct = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    if (bar) bar.style.width = (pct * 100) + "%";
    if (topBtn) topBtn.classList.toggle("show", h.scrollTop > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (topBtn) topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

  /* ---------- Theme toggle ---------- */
  var themeBtn = document.getElementById("theme");
  if (themeBtn) {
    var setIcon = function () {
      themeBtn.innerHTML = document.documentElement.getAttribute("data-theme") === "light" ? "&#9790;" : "&#9788;";
    };
    setIcon();
    themeBtn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      setIcon();
    });
  }

  /* ---------- Hero canvas network ---------- */
  var canvas = document.getElementById("net");
  if (canvas && canvas.getContext && !reduce) {
    var ctx = canvas.getContext("2d");
    var pts = [], W = 0, H = 0, lastW = 0, mouse = { x: -999, y: -999 }, running = true, looping = false;
    var size = function () {
      var dpr = window.devicePixelRatio || 1;
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.min(70, Math.floor(W * H / 16000));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 });
      lastW = W;
    };
    size();
    window.addEventListener("resize", function () { if (canvas.clientWidth !== lastW) size(); });
    canvas.parentNode.addEventListener("mousemove", function (e) {
      var bb = canvas.getBoundingClientRect(); mouse.x = e.clientX - bb.left; mouse.y = e.clientY - bb.top;
    });
    canvas.parentNode.addEventListener("mouseleave", function () { mouse.x = mouse.y = -999; });
    var loop = function () {
      if (!running) { looping = false; return; }
      ctx.clearRect(0, 0, W, H);
      var light = document.documentElement.getAttribute("data-theme") === "light";
      var rgb = light ? "47,91,255" : "120,160,255";
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        var mdx = p.x - mouse.x, mdy = p.y - mouse.y, md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 120 && md > 0) { p.x += mdx / md * 1.2; p.y += mdy / md * 1.2; }
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 6.283); ctx.fillStyle = "rgba(" + rgb + ",0.8)"; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = "rgba(" + rgb + "," + (0.35 * (1 - d / 130)) + ")";
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(loop);
    };
    var start = function () { if (running && !looping) { looping = true; loop(); } };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { running = en[0].isIntersecting; start(); }).observe(canvas);
    }
    start();
  }

  /* ---------- Certificate viewer ---------- */
  var EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".PDF", ".JPG", ".JPEG", ".PNG"];
  function findFile(path) {
    var base = path.replace(/\.(pdf|jpe?g|png)$/i, ""), list = [path];
    EXTENSIONS.forEach(function (x) { if (list.indexOf(base + x) < 0) list.push(base + x); });
    var i = 0, failed = 0;
    return new Promise(function (resolve) {
      (function next() {
        if (i >= list.length) return resolve(failed === list.length ? path : null); // every request errored (e.g. file://): just try the path
        var url = list[i++];
        fetch(url, { method: "HEAD" }).then(function (res) {
          var type = res.headers.get("content-type") || "";
          if (res.ok && type.indexOf("text/html") < 0) resolve(url); else next(); // some hosts answer 200 + index.html for missing files
        }).catch(function () { failed++; next(); });
      })();
    });
  }

  var viewer = document.getElementById("viewer");
  var viewerTitle = document.getElementById("viewer-title");
  var viewerBody = document.getElementById("viewer-body");
  var viewerOpen = document.getElementById("viewer-open");
  var lastFocus = null;

  window.openCertificate = function (item) {
    if (!viewer) return;
    lastFocus = document.activeElement;
    viewerTitle.textContent = item.title;
    clear(viewerBody);
    viewerBody.appendChild(el("p", "msg", "Loading..."));
    viewerOpen.hidden = true;
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("viewer-close").focus();
    findFile(item.file).then(function (url) {
      clear(viewerBody);
      if (!url) {
        viewerBody.appendChild(el("p", "msg", "This file has not been uploaded yet. Upload it to " + item.file + " on GitHub and it will appear here."));
        return;
      }
      viewerOpen.href = url;
      viewerOpen.hidden = false;
      viewerOpen.setAttribute("download", item.title.replace(/\s+/g, "-") + url.substring(url.lastIndexOf(".")));
      if (/\.pdf$/i.test(url)) {
        var pdfFrame = document.createElement("iframe");
        pdfFrame.src = url; pdfFrame.title = item.title;
        viewerBody.appendChild(pdfFrame);
      } else {
        var pic = document.createElement("img");
        pic.src = url; pic.alt = "Certificate: " + item.title;
        viewerBody.appendChild(pic);
      }
    });
  };

  function closeViewer() {
    if (!viewer) return;
    viewer.hidden = true;
    clear(viewerBody);
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  if (viewer) {
    document.getElementById("viewer-close").addEventListener("click", closeViewer);
    viewer.addEventListener("click", function (e) { if (e.target === viewer) closeViewer(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !viewer.hidden) closeViewer(); });
  }

  /* ---------- CV button (only shown if the file exists) ---------- */
  var cvBtn = document.getElementById("cv-btn");
  if (cvBtn) {
    fetch("cv/Tsotetsi-Lebaka-CV.pdf", { method: "HEAD" }).then(function (res) {
      if (res.ok) cvBtn.hidden = false;
    }).catch(function () {});
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector(".menu-btn");
  var navRight = document.querySelector(".nav-right");
  if (menuBtn && navRight) {
    menuBtn.addEventListener("click", function () {
      var open = navRight.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
    navRight.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { navRight.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
    });
  }
});

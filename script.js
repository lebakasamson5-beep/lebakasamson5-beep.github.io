/* ==========================================================
   EDIT YOUR CONTENT HERE
   ==========================================================
   PROJECTS:
     - Put your images in the /images folder and reference them
       here (e.g. "images/pharmacy.png")
     - `live` = live website link OR mobile app release (.apk) link
     - `code` = GitHub repo link
     - Leave "" to hide a button.

   CERTIFICATES:
     - Put your PDF/JPG/PNG files in the /certificates folder
     - Set `file` to the full name WITH extension
   ========================================================== */

var ROLES = ["Applications Developer", "Web and Mobile Builder", "Cybersecurity Enthusiast", "Problem Solver"];

var PROJECTS = [
  {
    title: "Albert Park Pharmacy System",
    type: "Web application",
    description: "A web-based pharmacy management system with features that support pharmacy operations and information management.",
    tags: ["HTML", "C#", "Azure"],
    live: "https://albert-park-pharmacy.onrender.com",
    code: "https://github.com/lebakasamson5-beep/pharmacy-system",
    image: "images/pharmacy.png"
  },
  {
    title: "Rapid Guard",
    type: "Mobile application",
    description: "A Flutter mobile app with features for security and emergency activities, including the interface and core functionality.",
    tags: ["Flutter", "Dart", "Firebase"],
    live: "https://github.com/lebakasamson5-beep/rapid-guard/releases/download/v1.0/app-release.apk",
    code: "https://github.com/lebakasamson5-beep/rapid-guard",
    image: "images/rapid-guard.png"
  },
  {
    title: "Waste Wise",
    type: "Web application",
    description: "A web-based waste management system with features for better waste management and information handling.",
    tags: ["Python", "HTML", "Railway"],
    live: "https://waste-wise.up.railway.app",
    code: "https://github.com/lebakasamson5-beep/waste-wise",
    image: "images/waste-wise.png"
  },
  {
    title: "Haba K Shop",
    type: "Shop management system",
    description: "A shop management system to manage products, sales, stock and daily shop operations.",
    tags: ["C#", "SQL", "Azure"],
    live: "https://habak-shop.azurewebsites.net",
    code: "https://github.com/lebakasamson5-beep/haba-k-shop",
    image: "images/haba-k-shop.png"
  },
  {
    title: "Smart Shopper",
    type: "Software project",
    description: "My second software development project – a smart shopping assistant with price comparison and list management.",
    tags: ["Python", "Flask", "Render"],
    live: "https://smart-shopper.onrender.com",
    code: "https://github.com/lebakasamson5-beep/smart-shopper",
    image: "images/smart-shopper.png"
  }
];

var CERTIFICATES = [
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", year: 2023, file: "certificates/cisco-cybersecurity-essentials.pdf" },
  { title: "Full Stack Development", issuer: "FNB App Academy", year: 2025, file: "certificates/fnb-full-stack-development.pdf" },
  { title: "AI and Accessibility", issuer: "Microsoft / Durban University of Technology", year: 2025, file: "certificates/ai-and-accessibility.pdf" },
  { title: "AI Fundamentals", issuer: "Microsoft / Durban University of Technology", year: 2025, file: "certificates/ai-fundamentals.pdf" },
  { title: "Diploma in ICT, Applications Development", issuer: "Durban University of Technology", year: 2025, file: "certificates/dut-diploma.pdf" }
];

/* ==========================================================
   CODE BELOW: you do not need to change anything
   ========================================================== */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

  /* Hero name letters */
  var nameEl = document.getElementById("name");
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

  /* Typing effect */
  var typed = document.getElementById("typed");
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

  /* Marquee */
  var tech = ["C#", "Python", "Dart", "Flutter", "HTML", "CSS", "JavaScript", "Firebase", "Git", "GitHub", "Render", "Railway", "Azure", "Cybersecurity"];
  var track = document.getElementById("marquee");
  tech.concat(tech).forEach(function (t) { track.appendChild(el("span", "", t)); });

  /* Projects */
  document.getElementById("stat-projects").setAttribute("data-count", PROJECTS.length);
  document.getElementById("stat-certs").setAttribute("data-count", CERTIFICATES.length);

  var projectGrid = document.getElementById("project-grid");
  PROJECTS.forEach(function (p, i) {
    var card = el("article", "card project reveal");
    card.style.setProperty("--d", (i * 0.12) + "s");
    if (p.image) {
      var img = el("img", "project-img");
      img.src = p.image;
      img.alt = p.title + " preview";
      img.loading = "lazy";
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
    var links = el("div", "links");
    if (p.live) {
      var a = el("a", "btn small primary", p.type === "Mobile application" ? "Download APK / Release" : "View live app");
      a.href = p.live; a.target = "_blank"; a.rel = "noopener";
      if (p.type === "Mobile application") a.setAttribute("download", "");
      links.appendChild(a);
    }
    if (p.code) {
      var b = el("a", "btn small", "Source code");
      b.href = p.code; b.target = "_blank"; b.rel = "noopener";
      links.appendChild(b);
    }
    if (!p.live && !p.code) links.appendChild(el("span", "badge", "Link coming soon"));
    card.appendChild(links);
    projectGrid.appendChild(card);
  });

  /* Certificates */
  var certGrid = document.getElementById("cert-grid");
  CERTIFICATES.forEach(function (c, i) {
    var card = el("button", "card cert reveal");
    card.type = "button";
    card.style.setProperty("--d", (i * 0.12) + "s");
    card.appendChild(el("span", "icon", "\uD83C\uDF93"));
    card.appendChild(el("p", "meta", String(c.year)));
    card.appendChild(el("h3", "", c.title));
    card.appendChild(el("p", "", c.issuer));
    card.appendChild(el("span", "view", "View certificate \u2192"));
    card.addEventListener("click", function () { openCertificate(c); });
    certGrid.appendChild(card);
  });

  /* Chip stagger */
  document.querySelectorAll(".chips").forEach(function (ul) {
    Array.prototype.forEach.call(ul.children, function (li, i) { li.style.setProperty("--c", i); });
  });

  /* 3D tilt */
  if (fine && !reduce) {
    document.querySelectorAll(".card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var b = card.getBoundingClientRect();
        var x = e.clientX - b.left, y = e.clientY - b.top;
        card.style.setProperty("--mx", x + "px");
        card.style.setProperty("--my", y + "px");
        card.style.setProperty("--ry", ((x / b.width - 0.5) * 10) + "deg");
        card.style.setProperty("--rx", ((0.5 - y / b.height) * 10) + "deg");
      });
      card.addEventListener("mouseleave", function () {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
    var glow = document.getElementById("glow");
    document.addEventListener("mousemove", function (e) {
      glow.style.opacity = 1;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  /* Reveal + counters */
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
    var links = {};
    document.querySelectorAll(".nav-links a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { sio.observe(s); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("in"); });
    counters.forEach(countUp);
  }

  /* Scroll progress + top */
  var bar = document.getElementById("progress");
  var topBtn = document.getElementById("top");
  function onScroll() {
    var h = document.documentElement;
    var pct = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = (pct * 100) + "%";
    topBtn.classList.toggle("show", h.scrollTop > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

  /* Theme toggle */
  var themeBtn = document.getElementById("theme");
  function setIcon() { themeBtn.innerHTML = document.documentElement.getAttribute("data-theme") === "light" ? "&#9790;" : "&#9788;"; }
  setIcon();
  themeBtn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setIcon();
  });

  /* Hero canvas */
  var canvas = document.getElementById("net");
  if (canvas.getContext && !reduce) {
    var ctx = canvas.getContext("2d");
    var pts = [], W = 0, H = 0, mouse = { x: -999, y: -999 }, running = true;
    function size() {
      var dpr = window.devicePixelRatio || 1;
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.min(70, Math.floor(W * H / 16000));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 });
    }
    size();
    window.addEventListener("resize", size);
    canvas.parentNode.addEventListener("mousemove", function (e) {
      var b = canvas.getBoundingClientRect(); mouse.x = e.clientX - b.left; mouse.y = e.clientY - b.top;
    });
    canvas.parentNode.addEventListener("mouseleave", function () { mouse.x = mouse.y = -999; });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { running = en[0].isIntersecting; if (running) frame(); }).observe(canvas);
    }
    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      var light = document.documentElement.getAttribute("data-theme") === "light";
      var rgb = light ? "47,91,255" : "120,160,255";
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        var mdx = p.x - mouse.x, mdy = p.y - mouse.y, md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 120) { p.x += mdx / md * 1.2; p.y += mdy / md * 1.2; }
        ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 6.283); ctx.fillStyle = "rgba(" + rgb + ",0.8)"; ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = "rgba(" + rgb + "," + (0.35 * (1 - d / 130)) + ")";
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* Certificate viewer */
  var EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".PDF", ".JPG", ".JPEG", ".PNG"];
  function findFile(base) {
    base = base.replace(/\.(pdf|jpe?g|png)$/i, "");
    var i = 0;
    return new Promise(function (resolve) {
      (function next() {
        if (i >= EXTENSIONS.length) return resolve(null);
        var url = base + EXTENSIONS[i++];
        fetch(url, { method: "HEAD" }).then(function (r) { if (r.ok) resolve(url); else next(); }).catch(next);
      })();
    });
  }

  var viewer = document.getElementById("viewer");
  var viewerTitle = document.getElementById("viewer-title");
  var viewerBody = document.getElementById("viewer-body");
  var viewerOpen = document.getElementById("viewer-open");
  var lastFocus = null;

  function openCertificate(c) {
    lastFocus = document.activeElement;
    viewerTitle.textContent = c.title;
    clear(viewerBody);
    viewerBody.appendChild(el("p", "msg", "Loading certificate..."));
    viewerOpen.hidden = true;
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("viewer-close").focus();
    findFile(c.file).then(function (url) {
      clear(viewerBody);
      if (!url) {
        viewerBody.appendChild(el("p", "msg", "This certificate has not been uploaded yet. Add the file to the certificates folder on GitHub and it will appear here."));
        return;
      }
      viewerOpen.href = url;
      viewerOpen.hidden = false;
      viewerOpen.setAttribute("download", c.title.replace(/\s+/g, "-") + url.substring(url.lastIndexOf(".")));
      if (/\.pdf$/i.test(url)) {
        var frame = document.createElement("iframe");
        frame.src = url; frame.title = c.title;
        viewerBody.appendChild(frame);
      } else {
        var img = document.createElement("img");
        img.src = url; img.alt = "Certificate: " + c.title;
        viewerBody.appendChild(img);
      }
    });
  }
  function closeViewer() {
    viewer.hidden = true;
    clear(viewerBody);
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.getElementById("viewer-close").addEventListener("click", closeViewer);
  viewer.addEventListener("click", function (e) { if (e.target === viewer) closeViewer(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !viewer.hidden) closeViewer(); });

  /* CV button */
  fetch("cv/Tsotetsi-Lebaka-CV.pdf", { method: "HEAD" }).then(function (r) {
    if (r.ok) document.getElementById("cv-btn").hidden = false;
  }).catch(function () {});

  /* Mobile menu */
  var menuBtn = document.querySelector(".menu-btn");
  var navRight = document.querySelector(".nav-right");
  menuBtn.addEventListener("click", function () {
    var open = navRight.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navRight.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { navRight.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });
})();

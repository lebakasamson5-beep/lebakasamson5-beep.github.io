/* ==========================================================
   script.js CHANGES  (all inside your DOMContentLoaded handler)
   Do these 4 replacements (certificates now come from the certificates folder, there is no add form), leave everything else as it is.
   ========================================================== */

/* ----------------------------------------------------------
   1) REPLACE everything from the comment
        /* ---------- QUALIFICATIONS ---------- * /
      down to (but NOT including)
        /* ---------- Chip stagger ---------- * /
   with the block below.
   ---------------------------------------------------------- */

  /* ---------- QUALIFICATIONS + CERTIFICATES ---------- */
  // Certificates are added by dropping the file into the "certificates" folder on GitHub.
  // Name it with a provider prefix: mtn-..., ai-..., cisco-..., fnb-... (anything else goes under "Other").
  // Example: certificates/cisco-network-security.pdf  ->  "Network Security" under Cisco.
  var GITHUB_REPO = "lebakasamson5-beep/YOUR-REPO-NAME";   // <- set to "owner/repository" of THIS portfolio
  var CERT_FOLDER = "certificates";
  var CATEGORIES = [["mtn", "MTN"], ["ai", "AI"], ["cisco", "Cisco"], ["fnb", "FNB"], ["other", "Other"]];
  var discovered = [], filter = "all", query = "";

  function all() { return CERTIFICATES.concat(discovered); }
  function labelOf(id) { for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i][0] === id) return CATEGORIES[i][1]; return id; }
  function providerOf(name) { var p = name.split(/[-_]/)[0].toLowerCase(); return /^(mtn|ai|cisco|fnb)$/.test(p) ? p : "other"; }
  function titleOf(name) {
    return name.replace(/\.[^.]+$/, "").replace(/^(mtn|ai|cisco|fnb)[-_]/i, "").replace(/[-_]+/g, " ")
      .replace(/\b\w/g, function (ch) { return ch.toUpperCase(); });
  }

  /* Find new files in the certificates folder through the GitHub API (cached per visit) */
  function discover() {
    if (!GITHUB_REPO || /YOUR-REPO/.test(GITHUB_REPO)) return Promise.resolve();
    var cached = null;
    try { cached = JSON.parse(sessionStorage.getItem("portfolio.certFolder") || "null"); } catch (e) {}
    var req = cached ? Promise.resolve(cached)
      : fetch("https://api.github.com/repos/" + GITHUB_REPO + "/contents/" + CERT_FOLDER)
          .then(function (r) { if (!r.ok) throw new Error("list failed"); return r.json(); })
          .then(function (list) { try { sessionStorage.setItem("portfolio.certFolder", JSON.stringify(list)); } catch (e) {} return list; });
    return req.then(function (list) {
      var known = CERTIFICATES.concat(QUALIFICATIONS).map(function (x) { return x.file.toLowerCase(); });
      list.forEach(function (f) {
        var path = CERT_FOLDER + "/" + f.name;
        if (f.type !== "file" || !/\.(pdf|jpe?g|png)$/i.test(f.name) || known.indexOf(path.toLowerCase()) > -1) return;
        var p = providerOf(f.name);
        discovered.push({ title: titleOf(f.name), issuer: labelOf(p), year: "", provider: p, file: path });
      });
    }).catch(function () {});           // offline or rate-limited: the built-in list still shows
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

  /* Qualifications (formal diplomas only; never listed under Certificates) */
  var qualGrid = document.getElementById("qual-grid");
  if (qualGrid) QUALIFICATIONS.forEach(function (q, i) { qualGrid.appendChild(makeCard(q, i, true)); });

  /* Certificates: tabs, search, counts */
  var tabs = document.getElementById("cert-filters");
  var certGrid = document.getElementById("cert-grid");
  var summary = document.getElementById("cert-summary");
  var search = document.getElementById("cert-search");
  var statCertEl = document.getElementById("stat-certs");

  function inFilter(c) { return filter === "all" || c.provider === filter; }

  function buildTabs() {
    clear(tabs);
    var cats = [["all", "All"]].concat(CATEGORIES);
    cats.forEach(function (c, idx) {
      var n = all().filter(function (x) { return c[0] === "all" || x.provider === c[0]; }).length;
      var b = el("button", "filter-btn" + (c[0] === filter ? " active" : ""));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", c[0] === filter ? "true" : "false");
      b.tabIndex = c[0] === filter ? 0 : -1;
      b.appendChild(document.createTextNode(c[1] + " "));
      b.appendChild(el("span", "count", String(n)));
      b.addEventListener("click", function () { filter = c[0]; refresh(); });
      b.addEventListener("keydown", function (e) {
        var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        filter = cats[(idx + d + cats.length) % cats.length][0];
        refresh();
        tabs.querySelector(".active").focus();
      });
      tabs.appendChild(b);
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
    if (statCertEl) {                   // keep the hero counter in step with the real total
      statCertEl.setAttribute("data-count", all().length);
      if (statCertEl.textContent !== "0") statCertEl.textContent = all().length;
    }
  }
  if (search) search.addEventListener("input", function () { query = search.value; renderCerts(); });
  refresh();
  discover().then(function () { if (discovered.length) refresh(); });

/* ----------------------------------------------------------
   2) REPLACE everything from the comment
        /* ---------- 3D tilt on cards ---------- * /
      down to (but NOT including) the line
        var glow = document.getElementById("glow");
   with this (it works for cards created later, too):
   ---------------------------------------------------------- */

  /* ---------- 3D tilt on cards ---------- */
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
    // (keep your existing "var glow = ..." code right after this)

/* ----------------------------------------------------------
   3) REPLACE everything from
        var EXTENSIONS = [...
      down to (but NOT including)
        function closeViewer() {
   with this. It also fixes the viewer reporting "not uploaded"
   when the site is opened from a local file or the server
   rejects HEAD requests, and it opens certificates added in the browser.
   ---------------------------------------------------------- */

  var EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png", ".PDF", ".JPG", ".JPEG", ".PNG"];
  function findFile(path) {
    var base = path.replace(/\.(pdf|jpe?g|png)$/i, ""), list = [path];
    EXTENSIONS.forEach(function (x) { if (list.indexOf(base + x) < 0) list.push(base + x); });
    var i = 0, failed = 0;
    return new Promise(function (resolve) {
      (function next() {
        if (i >= list.length) return resolve(failed === list.length ? path : null); // all requests errored (e.g. file://): just try the path
        var url = list[i++];
        fetch(url, { method: "HEAD" }).then(function (r) {
          var type = r.headers.get("content-type") || "";
          if (r.ok && type.indexOf("text/html") < 0) resolve(url); else next(); // hosts that answer 200 + index.html for missing files
        }).catch(function () { failed++; next(); });
      })();
    });
  }

  var viewer = document.getElementById("viewer");
  var viewerTitle = document.getElementById("viewer-title");
  var viewerBody = document.getElementById("viewer-body");
  var viewerOpen = document.getElementById("viewer-open");
  var lastFocus = null, objUrl = null;

  window.openCertificate = function (c) {
    if (!viewer) return;
    if (objUrl) { URL.revokeObjectURL(objUrl); objUrl = null; }
    lastFocus = document.activeElement;
    viewerTitle.textContent = c.title;
    clear(viewerBody);
    viewerBody.appendChild(el("p", "msg", "Loading..."));
    viewerOpen.hidden = true;
    viewer.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("viewer-close").focus();

    var ready = c.data
      ? fetch(c.data).then(function (r) { return r.blob(); }).then(function (b) {
          objUrl = URL.createObjectURL(b);
          var pdf = b.type === "application/pdf";
          return { url: objUrl, pdf: pdf, ext: pdf ? ".pdf" : b.type === "image/png" ? ".png" : ".jpg" };
        })
      : c.file
        ? findFile(c.file).then(function (u) { return u && { url: u, pdf: /\.pdf$/i.test(u), ext: u.substring(u.lastIndexOf(".")) }; })
        : Promise.resolve(null);

    ready.then(function (res) {
      clear(viewerBody);
      if (!res) {
        viewerBody.appendChild(el("p", "msg", "No file is attached to this item yet." + (c.file ? " Upload it to " + c.file + " on GitHub and it will appear here." : "")));
        return;
      }
      viewerOpen.href = res.url;
      viewerOpen.setAttribute("download", c.title.replace(/\s+/g, "-") + res.ext);
      viewerOpen.hidden = false;
      if (res.pdf) {
        var pdfFrame = document.createElement("iframe");
        pdfFrame.src = res.url; pdfFrame.title = c.title;
        viewerBody.appendChild(pdfFrame);
      } else {
        var img = document.createElement("img");
        img.src = res.url; img.alt = "Certificate: " + c.title;
        viewerBody.appendChild(img);
      }
    }).catch(function () {
      clear(viewerBody);
      viewerBody.appendChild(el("p", "msg", "This file could not be loaded."));
    });
  };

/* ----------------------------------------------------------
   4) Small fixes
   a) Rename the second "links" variable (it clashes with the one in the
      Projects loop). In the nav-highlight code change:
        var links = {};                      ->  var navMap = {};
        links[a.getAttribute("href")...      ->  navMap[a.getAttribute("href")...
        Object.keys(links)                   ->  Object.keys(navMap)
        links[k].classList                   ->  navMap[k].classList
   b) In the Projects loop, delete this line (it is ignored for
      cross-origin links anyway):
        if (p.type === "Mobile application") a.setAttribute("download", "");
   c) Delete the old "/* ---------- Stats ---------- * /" line
        if (statCert) statCert.setAttribute("data-count", CERTIFICATES.length);
      (refresh() now sets this, and includes certificates you add).
   ---------------------------------------------------------- */

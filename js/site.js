/* =====================================================================
   site.js  —  shared engine: header, nav, footer, theme, and rendering.
   You rarely need to edit this. To change the MENU, edit the NAV array
   just below. To change CONTENT, edit data.js instead.
   ===================================================================== */

const NAV = [
  { href:"index.html",        key:"home",         label:"Home" },
  { href:"about.html",        key:"about",        label:"About" },
  { href:"research.html",     key:"research",     label:"Research" },
  { href:"publications.html", key:"publications", label:"Publications" },
  { href:"collaboration.html",key:"collaboration",label:"Collaboration" },
  { href:"gallery.html",      key:"gallery",      label:"Gallery" },
  { href:"blog.html",         key:"blog",         label:"Blog" },
  { href:"cv.html",           key:"cv",           label:"CV" },
  { href:"contact.html",      key:"contact",      label:"Contact" }
];

/* ---- SVG icons ---- */
const ICON = {
  scholar:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM6 13.1v3.2c0 1.6 2.7 3.2 6 3.2s6-1.6 6-3.2v-3.2l-6 3.3-6-3.3z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.37 0-2.73 1.85-2.73 3.77V24H8V8z"/></svg>',
  orcid:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM7.4 18H5.6V8.6h1.8V18zM6.5 7.3a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2zM18.4 13.6c0 2.7-1.7 4.4-4.3 4.4H9.9V8.6h4.2c2.5 0 4.3 1.6 4.3 5zm-1.9.1c0-2.3-1.2-3.4-3-3.4h-1.8v6.6h1.8c1.6 0 3-.9 3-3.2z"/></svg>',
  email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  facebook:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.9h-2.34v7A10 10 0 0 0 22 12z"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.3-.5-1.5.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
  researchgate:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.7 8.2c0 1.2-.3 2.1-.9 2.7-.6.6-1.5.9-2.6.9-1.1 0-2-.3-2.5-.9-.6-.6-.9-1.5-.9-2.6V7c0-1.1.3-2 .9-2.6.5-.6 1.4-.9 2.5-.9s2 .3 2.6.9c.6.6.9 1.5.9 2.6v1.2zm-1.6-1.3c0-.7-.1-1.2-.4-1.5-.3-.3-.7-.5-1.2-.5s-.9.2-1.2.5c-.2.3-.4.8-.4 1.5v1.4c0 .7.2 1.2.4 1.5.3.3.7.5 1.2.5s.9-.2 1.2-.5c.3-.3.4-.8.4-1.5V6.9zM8.5 13.3H6.9l-1.6-3.1H4.1v3.1H2.7V4.4h3c1 0 1.8.2 2.3.7.5.5.8 1.1.8 2 0 .6-.1 1.1-.4 1.5-.3.4-.7.7-1.2.9l1.9 3.4v.4zM4.1 9h1.4c.5 0 .9-.1 1.1-.4.3-.2.4-.6.4-1s-.1-.8-.3-1c-.2-.3-.6-.4-1.1-.4H4.1V9zm9.5 11.5h-1.7v-5.8h1.7v5.8zm6.8 0h-4.8v-1.3h3.1v-1.1h-2.7v-1.3h2.7v-1h-3v-1.3h4.7v6z"/></svg>'
};

function socialHTML(){
  const L = PROFILE.links, out = [];
  const add = (url, key, title) => { if(url && url !== "#") out.push(`<a href="${url}" target="_blank" rel="noopener" title="${title}" aria-label="${title}">${ICON[key]}</a>`); };
  add(L.scholar,"scholar","Google Scholar");
  add(L.linkedin,"linkedin","LinkedIn");
  add(L.orcid,"orcid","ORCID");
  add(L.researchgate,"researchgate","ResearchGate");
  add(L.github,"github","GitHub");
  out.push(`<a href="mailto:${PROFILE.email}" title="Email" aria-label="Email">${ICON.email}</a>`);
  add(L.facebook,"facebook","Facebook");
  return out.join("");
}

/* ---- Header + footer injection ---- */
function buildChrome(){
  const page = document.body.dataset.page || "";
  const links = NAV.map(n => `<a href="${n.href}" class="${n.key===page?'active':''}">${n.label}</a>`).join("");
  const header = `
    <div class="nav-inner">
      <a class="brand" href="index.html">${PROFILE.name.replace(/^(.*?)\s(\S+)$/,'$1 <span>$2</span>')}</a>
      <nav class="nav-links" id="navlinks">${links}</nav>
      <button class="icon-btn" id="themeBtn" title="Toggle theme" aria-label="Toggle theme">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      </button>
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="Menu">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>`;
  const hdr = document.querySelector("header.nav");
  if(hdr) hdr.innerHTML = header;

  const ftr = document.querySelector("footer");
  if(ftr) ftr.innerHTML = `<div class="wrap">
      <div class="socials fsoc">${socialHTML()}</div>
      © <span>${new Date().getFullYear()}</span> ${PROFILE.name} · Lecturer, CSE, Begum Rokeya University, Rangpur<br/>
      <span style="opacity:.8">${PROFILE.affiliation}</span>
    </div>`;
}

/* ---- Global interactions ---- */
function wireGlobals(){
  const root = document.documentElement, key = "ht-theme";
  const set = t => { root.setAttribute("data-theme", t); try{localStorage.setItem(key,t)}catch(e){} };
  let saved; try{saved = localStorage.getItem(key)}catch(e){}
  if(!saved) saved = matchMedia("(prefers-color-scheme: dark)").matches ? "dark":"light";
  set(saved);
  const tb = document.getElementById("themeBtn");
  if(tb) tb.addEventListener("click", ()=> set(root.getAttribute("data-theme")==="dark"?"light":"dark"));

  const mb = document.getElementById("menuBtn"), links = document.getElementById("navlinks");
  if(mb && links){
    mb.addEventListener("click", ()=> links.classList.toggle("open"));
    links.addEventListener("click", e=>{ if(e.target.tagName==="A") links.classList.remove("open"); });
  }
  const top = document.querySelector(".top-link");
  if(top) window.addEventListener("scroll", ()=> top.classList.toggle("show", window.scrollY>500), {passive:true});
}

/* ---- Small builders ---- */
const interestTags = () => INTERESTS.map(i=>`<span class="tag">${i}</span>`).join("");
const interestCards = () => INTEREST_CARDS.map(c=>`<div class="card"><div class="icon">${c.icon}</div><h3>${c.title}</h3><p>${c.text}</p></div>`).join("");
const eduTimeline = () => EDUCATION.map(e=>`<div class="tl-item"><div class="when">${e.year}</div><h3>${e.degree}</h3><div class="where">${e.school}</div><div class="meta">${e.meta}</div></div>`).join("");
const expTimeline = () => EXPERIENCE.map(e=>`<div class="tl-item"><div class="when">${e.period}</div><h3>${e.role}</h3><div class="where">${e.org}</div><div class="meta">${e.text||""}</div></div>`).join("");

function pubLinks(p){
  const a = [];
  if(p.doi)  a.push(`<a href="${p.doi}" target="_blank" rel="noopener">DOI</a>`);
  if(p.pdf)  a.push(`<a href="${p.pdf}" target="_blank" rel="noopener">PDF</a>`);
  if(p.code) a.push(`<a href="${p.code}" target="_blank" rel="noopener">Code</a>`);
  return a.length ? `<div class="plinks">${a.join("")}</div>` : "";
}
function pubItem(p, n){
  const t = p.type ? `<span class="ptype">· ${p.type}</span>` : "";
  return `<div class="pub"><div class="num">${n}</div><div class="body">
    <h3>${p.title}</h3><div class="authors">${p.authors}</div>
    <div class="venue">${p.venue}, ${p.year}${t}</div>${pubLinks(p)}</div></div>`;
}

/* ---- Page renderers ---- */
function renderHome(){
  const h = document.getElementById("hero");
  if(h) h.innerHTML = `<div class="wrap hero-grid">
    <div>
      <p class="eyebrow">${PROFILE.tagline}</p>
      <h1>${PROFILE.name}</h1>
      <p class="role">${PROFILE.role}</p>
      <p class="affil">${PROFILE.affiliation}</p>
      <p class="bio">${PROFILE.bio}</p>
      <div class="cta">
        <a class="btn btn-primary" href="contact.html">Get in touch</a>
        <a class="btn btn-ghost" href="cv.html">View CV</a>
        <a class="btn btn-ghost" href="${PROFILE.links.scholar}" target="_blank" rel="noopener">Google Scholar</a>
      </div>
      <div class="socials">${socialHTML()}</div>
    </div>
    <div class="photo-card"><div class="photo-ring"><img src="${PROFILE.photo}" alt="${PROFILE.name}"/></div></div>
  </div>`;

  const s = document.getElementById("stats");
  if(s) s.innerHTML = STATS.map(x=>`<div class="stat"><div class="n">${x.value}</div><div class="l">${x.label}</div></div>`).join("");

  const it = document.getElementById("interest-cards");
  if(it) it.innerHTML = interestCards();

  const nw = document.getElementById("news");
  if(nw) nw.innerHTML = NEWS.map(x=>`<li><span class="d">${x.date}</span><span class="t">${x.text}</span></li>`).join("");

  const sp = document.getElementById("selpubs");
  if(sp){
    const feat = PUBLICATIONS.filter(p=>p.featured);
    sp.innerHTML = feat.length ? feat.map((p,i)=>pubItem(p,i+1)).join("")
      : `<p class="sec-intro">Publications will appear here. See <a href="${PROFILE.links.scholar}" target="_blank" rel="noopener">Google Scholar</a>.</p>`;
  }
}

function renderAbout(){
  const b = document.getElementById("bio"); if(b) b.innerHTML = PROFILE.bioLong;
  const e = document.getElementById("education"); if(e) e.innerHTML = eduTimeline();
  const x = document.getElementById("experience"); if(x) x.innerHTML = expTimeline();
  const sk = document.getElementById("skills"); if(sk) sk.innerHTML = SKILLS.map(s=>`<span class="tag">${s}</span>`).join("");
  const it = document.getElementById("interest-tags"); if(it) it.innerHTML = interestTags();
}

function renderResearch(){
  const it = document.getElementById("interest-tags"); if(it) it.innerHTML = interestTags();
  const ic = document.getElementById("interest-cards"); if(ic) ic.innerHTML = interestCards();
  const pr = document.getElementById("projects");
  if(pr) pr.innerHTML = PROJECTS.map(p=>`<div class="card"><span class="pill">${p.period}</span>
      <h3 style="margin-top:10px">${p.title}</h3><p>${p.text}</p>
      <div style="margin-top:12px">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      ${p.link?`<div style="margin-top:8px"><a href="${p.link}" target="_blank" rel="noopener">Details →</a></div>`:""}</div>`).join("");
  const aw = document.getElementById("awards");
  if(aw) aw.innerHTML = AWARDS.map(a=>`<div class="card"><span class="pill">${a.year}</span>
      <h3 style="margin-top:10px">${a.title}</h3><p>${a.org ? a.org+" — ":""}${a.text}</p></div>`).join("");
}

function renderPublications(){
  const box = document.getElementById("pubs");
  if(!box) return;
  const types = ["all", ...Array.from(new Set(PUBLICATIONS.map(p=>p.type)))];
  const fbar = document.getElementById("pub-filters");
  function draw(filter){
    const list = (filter==="all"?PUBLICATIONS:PUBLICATIONS.filter(p=>p.type===filter))
      .slice().sort((a,b)=>b.year-a.year);
    if(!list.length){ box.innerHTML = `<p class="sec-intro">No publications in this category yet.</p>`; return; }
    const years = Array.from(new Set(list.map(p=>p.year)));
    let n = 0;
    box.innerHTML = years.map(y=>{
      const items = list.filter(p=>p.year===y).map(p=>pubItem(p, ++n)).join("");
      return `<div class="year-group"><p class="yr-label">${y}</p>${items}</div>`;
    }).join("");
  }
  if(fbar) fbar.innerHTML = types.map((t,i)=>`<button class="${i===0?'active':''}" data-f="${t}">${t[0].toUpperCase()+t.slice(1)}</button>`).join("");
  if(fbar) fbar.addEventListener("click", e=>{
    const btn = e.target.closest("button"); if(!btn) return;
    fbar.querySelectorAll("button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active"); draw(btn.dataset.f);
  });
  draw("all");
}

function galleryCells(cat){
  const items = GALLERY.filter(g=>g.category===cat);
  if(!items.length) return `<p class="sec-intro">Photos coming soon.</p>`;
  return `<div class="gallery">` + items.map(g=>`<figure><div class="cell">${
      g.img ? `<img src="${g.img}" alt="${g.caption}"/>` : `<div class="ph">${g.caption}</div>`
    }</div>${g.img?`<figcaption>${g.caption}</figcaption>`:""}</figure>`).join("") + `</div>`;
}
function renderGallery(){
  const ev = document.getElementById("gallery-event"); if(ev) ev.innerHTML = galleryCells("event");
  const tv = document.getElementById("gallery-travel"); if(tv) tv.innerHTML = galleryCells("travel");
}

function renderBlog(){
  const box = document.getElementById("blog");
  if(!box) return;
  box.innerHTML = BLOG.map(b=>{
    const inner = `<div class="card blog-card"><div class="cat">${b.category}</div>
      <h3>${b.title}</h3><p>${b.excerpt}</p><div class="date">${b.date}</div></div>`;
    return b.link ? `<a href="${b.link}" target="_blank" rel="noopener" style="text-decoration:none">${inner}</a>` : inner;
  }).join("");
}

function renderCollaboration(){
  const c = document.getElementById("collab-cards");
  if(c) c.innerHTML = COLLABORATION.map(x=>`<div class="card"><div class="icon">${x.icon}</div><h3>${x.title}</h3><p>${x.text}</p></div>`).join("");
}

function renderContact(){
  const d = document.getElementById("cdetails");
  if(d) d.innerHTML = `
    <div class="contact-line">${ICON.email}<div><div class="l">Email (official)</div><div class="v"><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></div></div></div>
    <div class="contact-line">${ICON.email}<div><div class="l">Email (personal)</div><div class="v"><a href="mailto:${PROFILE.email2}">${PROFILE.email2}</a></div></div></div>
    <div class="contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg><div><div class="l">Phone</div><div class="v">${PROFILE.phone}</div></div></div>
    <div class="contact-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><div><div class="l">Office</div><div class="v">${PROFILE.office}</div></div></div>
    <div class="socials" style="margin-top:16px">${socialHTML()}</div>`;

  const form = document.getElementById("msgForm");
  if(form) form.addEventListener("submit", ev=>{
    ev.preventDefault();
    const g = id => (document.getElementById(id)||{}).value || "";
    const subject = g("s") || "Message from your website";
    const body = `Name: ${g("n")}%0D%0AEmail: ${g("e")}%0D%0A%0D%0A${encodeURIComponent(g("m"))}`;
    try{ window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${body}`; }
    catch(err){ const h=document.getElementById("formHint"); if(h) h.textContent = `Please email ${PROFILE.email} directly.`; }
  });
}

function renderCV(){
  const box = document.getElementById("cv-doc");
  if(!box) return;
  const edu = EDUCATION.map(e=>`<div class="cv-row"><div class="left"><b>${e.degree}</b><span>${e.school} — ${e.meta}</span></div><div class="yr">${e.year}</div></div>`).join("");
  const exp = EXPERIENCE.map(e=>`<div class="cv-row"><div class="left"><b>${e.role}</b><span>${e.org}</span></div><div class="yr">${e.period}</div></div>`).join("");
  const pubs = PUBLICATIONS.slice().sort((a,b)=>b.year-a.year)
    .map(p=>`<li>${p.authors} (${p.year}). <b>${p.title}</b>. <i>${p.venue}</i>.${p.doi?` DOI: ${p.doi}`:""}</li>`).join("");
  const awards = AWARDS.map(a=>`<li>${a.title}${a.org?`, ${a.org}`:""} (${a.year})</li>`).join("");
  const others = (typeof CV_OTHERS!=="undefined"?CV_OTHERS:[])
    .map(o=>`<p style="margin:0 0 6px;color:var(--muted)"><b style="color:var(--text)">${o.label}:</b> ${o.value}</p>`).join("");
  box.innerHTML = `
    <div class="cv-head">
      <h2>${PROFILE.name}</h2>
      <div class="cv-sub">${PROFILE.role}, ${PROFILE.affiliation}</div>
      <div class="cv-contact">${PROFILE.email} · ${PROFILE.phone} · ORCID: ${(PROFILE.links.orcid||"").replace('https://orcid.org/','')}</div>
    </div>
    <div class="cv-sec"><h3>Professional Summary</h3><p style="margin:0;color:var(--muted)">${PROFILE.summary||PROFILE.bio}</p></div>
    <div class="cv-sec"><h3>Research Interests</h3><p style="margin:0;color:var(--muted)">${INTERESTS.join(" · ")}</p></div>
    <div class="cv-sec"><h3>Teaching &amp; Work Experience</h3>${exp}</div>
    <div class="cv-sec"><h3>Education</h3>${edu}</div>
    <div class="cv-sec"><h3>Publications</h3>${pubs?`<ol class="cv-list">${pubs}</ol>`:`<p style="margin:0;color:var(--muted)">See Google Scholar — list to be added.</p>`}</div>
    <div class="cv-sec"><h3>Awards &amp; Honours</h3>${awards?`<ul class="cv-list">${awards}</ul>`:`<p style="margin:0;color:var(--muted)">To be added.</p>`}</div>
    <div class="cv-sec"><h3>Technical Skills</h3><p style="margin:0;color:var(--muted)">${SKILLS.join(" · ")}</p></div>
    <div class="cv-sec"><h3>Others</h3>${others||`<p style="margin:0;color:var(--muted)">—</p>`}</div>`;

  const btn = document.getElementById("cvBtn");
  if(btn) btn.addEventListener("click", ()=>{ try{ window.print(); }catch(e){
    const h=document.getElementById("print-hint"); if(h) h.textContent="Use your browser menu → Print → Save as PDF.";
  }});
}

/* ---- Boot ---- */
document.addEventListener("DOMContentLoaded", ()=>{
  buildChrome();
  wireGlobals();
  const page = document.body.dataset.page;
  ({ home:renderHome, about:renderAbout, research:renderResearch, publications:renderPublications,
     collaboration:renderCollaboration, gallery:renderGallery, blog:renderBlog,
     contact:renderContact, cv:renderCV }[page] || function(){})();
});

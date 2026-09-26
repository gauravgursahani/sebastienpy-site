/* ════════════════════════════════════════════════════════════════════
   SÉBASTIEN PY — SOCLE COMMUN (index.html + portfolio.html)
   --------------------------------------------------------------------
   Ce fichier est partagé par les deux pages : réglages, traductions,
   bascule de langue, en-tête, menu, visionneuse et mentions légales.
   Les comportements propres à une page (carrousel, formulaire, grille)
   restent dans la page concernée.

   ⚠️  Les textes se modifient ICI et nulle part ailleurs : les deux pages
   lisent le même dictionnaire, donc une correction profite aux deux.
   ════════════════════════════════════════════════════════════════════ */

/* ─── 1. RÉGLAGES ─── */
const CONFIG = {
  instagram: "https://www.instagram.com/sebastien.py/",
  // Format international, sans espaces ni "+" (repris de sa fiche Google).
  whatsapp:  "33664983083",
  // Numéro affiché en clair sous « WhatsApp » et dans les mentions légales.
  phone:     "+33 6 64 98 30 83",
  // Fiche Google, liée sous la note 5,0/5 des témoignages.
  reviews:   "https://maps.app.goo.gl/tmg8csiLXwqQjoRS8",

  // ── FORMULAIRE DE CONTACT ────────────────────────────────────────────
  // Rien à configurer ici : les demandes sont gérées par Netlify Forms.
  // L'adresse de réception se règle une seule fois dans Netlify :
  //   Forms → Notifications → Add notification → Email notification
  // C'est aussi pour cela que l'adresse e-mail de Sébastien n'apparaît
  // plus nulle part dans ce fichier.
};

/* ─── 2. TRADUCTIONS ─── */
const I18N = {
fr:{
 "doc.title":"Sébastien Py — Photographe de mariage à Lille",
 "nav.work":"Portfolio","nav.approach":"Approche","nav.about":"À propos",
 "nav.services":"Prestations","nav.contact":"Contact",
 "hero.a":"Capturer votre histoire","hero.b":"pour des souvenirs","hero.c":"inoubliables",
 "hero.sub":"Photographe de mariage — Lille, France &amp; ailleurs",
 "strip":"Mariages · Élopements · Séances couple — Hauts-de-France, Paris, Belgique &amp; destinations",
 "man.eyebrow":"Bienvenue",
 "man.p1":"Photographe de mariage basé à Lille, j'accompagne les couples partout en France.",
 "man.p2":"Mon approche&nbsp;? Un reportage photo discret et spontané pour immortaliser les rires, les regards complices et toute l'émotion brute de votre mariage.",
 "pf.eyebrow":"Portfolio","pf.title":"Quelques histoires",
 "pf.all":"Tout","pf.wed":"Mariage","pf.ed":"Éditorial","pf.cpl":"Couple","pf.det":"Détails",
 "bleed1":"« Il ne s'est pas contenté de prendre des photos, il a vraiment raconté notre journée. »",
 "ap.eyebrow":"L'approche","ap.title":"Ce qui compte vraiment dans ma façon de travailler",
 "ap.1t":"Sensible","ap.1p":"Une présence discrète, jamais intrusive. Vous vivez votre journée&nbsp;; je m'occupe de la capturer.",
 "ap.2t":"Narratif","ap.2p":"Raconter l'histoire entière, du calme du matin à la folie de la soirée.",
 "ap.3t":"Intemporel","ap.3p":"Un traitement naturel et fidèle à l'ambiance, sans retouches excessives.",
 "tm.eyebrow":"Leurs mots","tm.title":"Ils en parlent mieux que moi",
 "tm.rating":"5,0 / 5 sur Google — voir les avis",
 "tm.q1":"Les photos sont authentiques, joyeuses, pleines de vie — exactement ce que nous espérions.",
 "tm.a1":"Kit Gonimil — Avis Google",
 "tm.q2":"D'instinct, il savait où se placer pour saisir la bonne image. Toutes les photos sont superbes.",
 "tm.a2":"poemsjoewrote — Avis Google",
 "tm.q3":"Ils ont fait un travail incroyable, bien au-delà de nos attentes. Il était très rassurant le jour J.",
 "tm.a3":"Thanh-Van Dang — Avis Google",
 "ab.eyebrow":"À propos","ab.lead":"Je suis Sébastien. Photographe à Lille, et voyageur avant ça.",
 "ab.p1":"La photographie est arrivée pendant mes dix années en Asie. Appareil à l'épaule lors de mes voyages, j'y ai développé l'amour de la photographie sur le vif&nbsp;: observer sans déranger, capter l'instant fugace et saisir l'émotion brute.",
 "ab.p2":"C'est cette même philosophie que j'apporte aujourd'hui dans le mariage. Pas de poses figées, ni de sourires forcés. Je me fonds parmi vos invités pour capturer les vrais moments&nbsp;: les éclats de rire au vin d'honneur, une larme discrète pendant les vœux, et tous ces petits moments spontanés que vous n'aurez pas eu le temps de voir passer.",
 "ab.f1t":"Basé à","ab.f1d":"Lille, France",
 "ab.f2t":"Se déplace","ab.f2d":"Partout",
 "ab.f3t":"Langues","ab.f3d":"FR · EN",
 "sv.eyebrow":"Prestations","sv.title":"Trois façons de travailler ensemble",
 "sv.1t":"Le jour J","sv.1s":"Formule complète",
 "sv.1a":"Des préparatifs à la piste de danse","sv.1b":"Repérage du lieu en amont",
 "sv.1c":"400 à 800 photos retouchées","sv.1d":"Galerie privée en ligne",
 "sv.1e":"Séance couple en option",
 "sv.2t":"Élopement","sv.2s":"Intime · demi-journée",
 "sv.2a":"Cérémonie à deux ou en très petit comité","sv.2b":"Repérage &amp; itinéraire construits ensemble",
 "sv.2c":"150 à 300 photos retouchées","sv.2d":"France &amp; destinations",
 "sv.3t":"Séance couple","sv.3s":"Engagement · éditorial",
 "sv.3a":"1 à 2 heures, en extérieur ou chez vous",
 "sv.3b":"Idéal pour apprendre à se connaître avant le jour J",
 "sv.3c":"60 à 120 photos retouchées","sv.3d":"Posé ou pas&nbsp;? À vous de décider.",
 "sv.pt":"Pourquoi n'affichez-vous pas de grille tarifaire&nbsp;?",
 "sv.pp":"Selon vos envies et l'organisation de votre journée, vos besoins ne seront pas les mêmes. Au lieu d'afficher un tarif fixe souvent à côté de la plaque, parlons-en simplement quelques minutes. Je vous composerai ensuite un devis sur mesure.",
 "sv.cta":"Recevoir mes tarifs",
 "fq.eyebrow":"Questions fréquentes","fq.title":"Ce qu'on me demande le plus",
 "fq.q1":"Combien de temps pour recevoir les photos&nbsp;?",
 "fq.a1":"Un aperçu d'une vingtaine d'images sous une semaine, et la galerie complète sous quatre à six semaines. En haute saison, je vous préviens toujours du délai réel avant de m'engager.",
 "fq.q2":"Vous déplacez-vous hors des Hauts-de-France&nbsp;?",
 "fq.a2":"Oui, sans hésiter. Paris, la Belgique et le reste de la France régulièrement&nbsp;; l'étranger avec grand plaisir. Les frais de déplacement sont indiqués clairement dans la proposition.",
 "fq.q3":"On n'est pas à l'aise devant un objectif.",
 "fq.a3":"C'est le cas de presque tout le monde, et c'est précisément pour ça que je travaille en retrait. On se voit avant, parfois pour une séance couple&nbsp;: le jour J, je ne suis plus un inconnu, et ça change tout.",
 "fq.q4":"Comment réserver une date&nbsp;?",
 "fq.a4":"Un message ici, un appel pour faire connaissance, puis un contrat et un acompte de 30&nbsp;% qui bloque la date.",
 "fq.q5":"Proposez-vous des albums&nbsp;?",
 "fq.a5":"Oui — albums fine art, tirages et coffrets, fabriqués en France. Je vous fais une première sélection, vous ajustez, et vous validez avant impression.",
 "lg.legal":"Mentions légales","lg.privacy":"Confidentialité",
 "lg.legalBody":"<p><strong>Éditeur du site</strong><br>Sébastien Py — Photographe<br>Lille, France</p><p><strong>Directeur de la publication</strong><br>Sébastien Py</p><p><strong>Hébergeur</strong><br><a href=\"https://www.netlify.com/\" target=\"_blank\" rel=\"noopener\">https://www.netlify.com/</a></p><p><strong>Photographies</strong><br>© Sébastien Py. Toutes les images de ce site sont protégées par le droit d'auteur et publiées avec l'accord des personnes photographiées. Toute reproduction, même partielle, est interdite sans autorisation écrite.</p>",
 "lg.privacyBody":"<p><strong>Ce site ne dépose aucun cookie.</strong> Aucune mesure d'audience, aucun traceur publicitaire, aucun bouton de réseau social intégré. Les polices de caractères sont intégrées à la page : aucun serveur tiers n'est contacté pour l'affichage. Aucun bandeau de consentement n'est donc nécessaire.</p><p><strong>Formulaire de contact</strong><br>Les informations que vous saisissez (prénoms, adresse e-mail, date, lieu, message) servent uniquement à répondre à votre demande. Elles sont traitées par Netlify, l'hébergeur de ce site, puis conservées dans ma messagerie le temps de nos échanges.</p><p><strong>Vos droits</strong><br>Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données à tout moment via le formulaire de contact ci-dessus ou par WhatsApp au {phone}. Vous pouvez également introduire une réclamation auprès de la CNIL.</p>",
 "ct.eyebrow":"Contact","ct.title":"Racontez-moi tout",
 "ct.p":"Votre date, votre lieu, l'ambiance que vous imaginez — même si tout n'est pas encore décidé. Je réponds sous 48&nbsp;heures.",
 "ct.tel":"WhatsApp","ct.zone":"Zone","ct.zoned":"Lille, France",
 "ct.f1":"Vos prénoms","ct.f2":"E-mail","ct.f3":"Date du mariage","ct.f4":"Lieu / région",
 "ct.f5":"Prestation souhaitée","ct.f6":"Parlez-moi de votre journée",
 "ct.o1":"Mariage — jour complet","ct.o2":"Élopement","ct.o3":"Séance couple","ct.o4":"Je ne sais pas encore",
 "ct.send":"Envoyer","ct.note":"Réponse sous 48&nbsp;heures. Vos coordonnées ne servent qu'à vous répondre.",
 "ct.subject":"Demande de renseignements — mariage",
 "ct.invalid":"Merci d'indiquer vos prénoms et une adresse e-mail valide.",
 "ct.sending":"Envoi en cours…",
 "ct.sent":"Merci&nbsp;! Votre message est bien arrivé. Je vous réponds sous 48&nbsp;heures.",
 "ct.error":"L'envoi a échoué. Écrivez-moi sur WhatsApp — je réponds aussi vite.",
 "ft.title":"Pas encore totalement fixés&nbsp;? Discutons-en simplement",
 "ft.p":"Parlez-moi de votre journée, de vos envies, de votre lieu ou de vos hésitations. Que vous ayez déjà tout planifié ou que vous débutiez vos recherches, je serai ravi d'échanger avec vous autour d'un café ou en visio.",
 "ft.cta":"Me contacter",
 "meta.desc":"Photographe de mariage basé à Lille. Un regard spontané et sincère pour raconter votre journée, partout en France.",
 "pf.cta":"Voir le portfolio complet",
 "pf.prev":"Image précédente","pf.next":"Image suivante",
 "pfp.doctitle":"Portfolio — Sébastien Py, photographe de mariage à Lille",
 "pfp.desc":"Le portfolio complet de Sébastien Py, photographe de mariage à Lille : mariages, séances couple et détails, partout en France.",
 "pfp.eyebrow":"Portfolio",
 "pfp.title":"Le portfolio",
 "pfp.p":"Une sélection de mariages, de séances et de détails — de quoi voir comment je regarde une journée, du calme du matin à la folie de la soirée.",
 "pfp.back":"Retour à l'accueil",
 "pfp.count":"{n} images"
},
en:{
 "doc.title":"Sébastien Py — Wedding Photographer in Lille, France",
 "nav.work":"Portfolio","nav.approach":"Approach","nav.about":"About",
 "nav.services":"Services","nav.contact":"Contact",
 "hero.a":"Capturing your story","hero.b":"for memories that","hero.c":"stay with you",
 "hero.sub":"Wedding photographer — Lille, France &amp; beyond",
 "strip":"Weddings · Elopements · Couple sessions — Northern France, Paris, Belgium &amp; destinations",
 "man.eyebrow":"Welcome",
 "man.p1":"A wedding photographer based in Lille, working with couples all over France.",
 "man.p2":"My approach? Quiet, unhurried reportage — the laughter, the knowing glances, and all the raw feeling of your wedding day.",
 "pf.eyebrow":"Portfolio","pf.title":"A few stories",
 "pf.all":"All","pf.wed":"Weddings","pf.ed":"Editorial","pf.cpl":"Couples","pf.det":"Details",
 "bleed1":"“He didn't just take photographs — he really told the story of our day.”",
 "ap.eyebrow":"The approach","ap.title":"What really matters in the way I work",
 "ap.1t":"Sensitive","ap.1p":"A quiet presence, never intrusive. You live your day — capturing it is my job.",
 "ap.2t":"Narrative","ap.2p":"Telling the whole story — from the quiet of the morning to the madness of the evening.",
 "ap.3t":"Timeless","ap.3p":"Natural processing, faithful to the mood of the day, with no heavy-handed retouching.",
 "tm.eyebrow":"Kind words","tm.title":"They say it better than I do",
 "tm.rating":"Rated 5.0 / 5 on Google — read the reviews",
 "tm.q1":"The photos feel authentic, joyful, and full of life — exactly what we hoped for.",
 "tm.a1":"Kit Gonimil — Google review",
 "tm.q2":"Instinctively he knew how to position himself and get the right shots. All of the pictures were amazing.",
 "tm.a2":"poemsjoewrote — Google review",
 "tm.q3":"They did an incredible job, far exceeding our expectations. He was very reassuring on the big day.",
 "tm.a3":"Thanh-Van Dang — Google review",
 "ab.eyebrow":"About","ab.lead":"I'm Sébastien. A photographer in Lille, and a traveller before that.",
 "ab.p1":"Photography found me during ten years in Asia. Camera over my shoulder as I travelled, I fell in love with photographing life as it happens: watching without disturbing, catching the fleeting moment, holding on to the raw emotion.",
 "ab.p2":"It is that same philosophy I bring to weddings today. No stiff poses, no forced smiles. I blend in among your guests to catch the real moments: the bursts of laughter over drinks, a quiet tear during the vows, and all those small spontaneous things you won't have had time to notice.",
 "ab.f1t":"Based in","ab.f1d":"Lille, France",
 "ab.f2t":"Travels","ab.f2d":"Anywhere",
 "ab.f3t":"Languages","ab.f3d":"FR · EN",
 "sv.eyebrow":"Services","sv.title":"Three ways to work together",
 "sv.1t":"The wedding day","sv.1s":"Full coverage",
 "sv.1a":"From getting ready to the dance floor","sv.1b":"Venue scouting beforehand",
 "sv.1c":"400–800 edited photographs","sv.1d":"Private online gallery",
 "sv.1e":"Couple session optional",
 "sv.2t":"Elopement","sv.2s":"Intimate · half day",
 "sv.2a":"Just the two of you, or a very small gathering","sv.2b":"Location &amp; route planned together",
 "sv.2c":"150–300 edited photographs","sv.2d":"France &amp; destinations",
 "sv.3t":"Couple session","sv.3s":"Engagement · editorial",
 "sv.3a":"1–2 hours, outdoors or at home",
 "sv.3b":"The best way to get comfortable before the wedding day",
 "sv.3c":"60–120 edited photographs","sv.3d":"Posed or not? Entirely up to you.",
 "sv.pt":"Why isn't there a price list?",
 "sv.pp":"What you need depends on what you have in mind and how your day is put together. Rather than post a fixed price that is usually wide of the mark, let us talk it over for a few minutes. I will then put together a quote made for you.",
 "sv.cta":"Request pricing",
 "fq.eyebrow":"Frequently asked","fq.title":"What couples ask me most",
 "fq.q1":"How long until we get the photographs?",
 "fq.a1":"A preview of around twenty images within a week, and the full gallery within four to six weeks. In high season I always tell you the real timeline before we commit.",
 "fq.q2":"Do you travel outside northern France?",
 "fq.a2":"Gladly. Paris, Belgium and the rest of France regularly; abroad with real pleasure. Travel costs are always stated clearly in the proposal.",
 "fq.q3":"We're awkward in front of a camera.",
 "fq.a3":"Almost everyone is, and that's exactly why I work from a distance. We meet beforehand, sometimes for a couple session: on the day I'm no longer a stranger, and that changes everything.",
 "fq.q4":"How do we book a date?",
 "fq.a4":"A message here, a call to get to know each other, then a contract and a 30% deposit that holds the date.",
 "fq.q5":"Do you offer albums?",
 "fq.a5":"Yes — fine art albums, prints and boxes, made in France. I make a first selection, you adjust it, and you approve before anything is printed.",
 "lg.legal":"Legal notice","lg.privacy":"Privacy",
 "lg.legalBody":"<p><strong>Site owner</strong><br>Sébastien Py — Photographer<br>Lille, France</p><p><strong>Publication director</strong><br>Sébastien Py</p><p><strong>Hosting provider</strong><br><a href=\"https://www.netlify.com/\" target=\"_blank\" rel=\"noopener\">https://www.netlify.com/</a></p><p><strong>Photographs</strong><br>© Sébastien Py. Every image on this site is protected by copyright and published with the consent of the people photographed. No reproduction, in whole or in part, without written permission.</p>",
 "lg.privacyBody":"<p><strong>This site sets no cookies.</strong> No analytics, no advertising trackers, no embedded social widgets. The typefaces are embedded in the page itself, so no third-party server is contacted to display it. That is why you see no consent banner.</p><p><strong>Contact form</strong><br>What you type (names, email address, date, venue, message) is used only to answer you. It is processed by Netlify, this site's host, and then kept in my mailbox for as long as we are in touch.</p><p><strong>Your rights</strong><br>Under the GDPR you may request access to, correction of, or deletion of your data at any time through the contact form above, or by WhatsApp on {phone}. You may also lodge a complaint with the CNIL, the French data protection authority.</p>",
 "ct.eyebrow":"Contact","ct.title":"Tell me everything",
 "ct.p":"Your date, your venue, the feeling you're imagining — even if nothing is decided yet. I reply within 48&nbsp;hours.",
 "ct.tel":"WhatsApp","ct.zone":"Based in","ct.zoned":"Lille, France",
 "ct.f1":"Your names","ct.f2":"Email","ct.f3":"Wedding date","ct.f4":"Venue / region",
 "ct.f5":"What you're after","ct.f6":"Tell me about your day",
 "ct.o1":"Wedding — full day","ct.o2":"Elopement","ct.o3":"Couple session","ct.o4":"Not sure yet",
 "ct.send":"Send","ct.note":"I reply within 48&nbsp;hours. Your details are only ever used to answer you.",
 "ct.subject":"Wedding enquiry",
 "ct.invalid":"Please add your names and a valid email address.",
 "ct.sending":"Sending…",
 "ct.sent":"Thank you! Your message came through. I'll reply within 48 hours.",
 "ct.error":"Sending failed. Please message me on WhatsApp — I answer just as fast.",
 "ft.title":"Not quite decided yet? Let's just talk",
 "ft.p":"Tell me about your day, what you have in mind, your venue — or whatever you are still unsure about. Whether it is all planned already or you are only starting to look, I would love to talk it through over a coffee or on a video call.",
 "ft.cta":"Get in touch",
 "meta.desc":"Wedding photographer based in Lille. A spontaneous, honest eye to tell the story of your day, anywhere in France.",
 "pf.cta":"See the full portfolio",
 "pf.prev":"Previous image","pf.next":"Next image",
 "pfp.doctitle":"Portfolio — Sébastien Py, Wedding Photographer in Lille",
 "pfp.desc":"The full portfolio of Sébastien Py, wedding photographer in Lille: weddings, couple sessions and details, across France.",
 "pfp.eyebrow":"Portfolio",
 "pfp.title":"The portfolio",
 "pfp.p":"A selection of weddings, sessions and details — enough to see how I look at a day, from the quiet of the morning to the madness of the evening.",
 "pfp.back":"Back to home",
 "pfp.count":"{n} images"
}};

/* ─── 3. MOTEUR ─── */
let LANG = "fr";
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
document.documentElement.classList.add("js");

/* Les liens sont câblés depuis CONFIG. Chaque élément est facultatif :
   la page portfolio n'a pas exactement le même balisage que l'accueil. */
const wire = (sel, fn) => { const el = $(sel); if (el) fn(el); };
wire("#igLink",      e => e.href = CONFIG.instagram);
wire("#igLink2",     e => e.href = CONFIG.instagram);
wire("#waLink",      e => e.href = "https://wa.me/" + CONFIG.whatsapp);
wire("#reviewsLink", e => e.href = CONFIG.reviews);
wire("#telLink",     e => { e.href = "https://wa.me/" + CONFIG.whatsapp;
                            e.textContent = CONFIG.phone; });
wire("#yr",          e => e.textContent = new Date().getFullYear());

/* ─── 4. VISIONNEUSE ───
   Générique : chaque page remplit LB avec [{src, alt}] avant usage.
   L'accueil y met les images du carrousel, le portfolio les cinquante. */
let LB = [], lbi = 0;
function openLb(i){
  if(!LB.length) return;
  lbi = i; paintLb();
  $("#lb").classList.add("on");
  document.body.style.overflow = "hidden";
}
function paintLb(){
  const im = $("#lbImg");
  im.src = LB[lbi].src; im.alt = LB[lbi].alt || "";
  $("#lbCnt").textContent = (lbi + 1) + " / " + LB.length;
}
function stepLb(d){
  if(!LB.length) return;
  lbi = (lbi + d + LB.length) % LB.length; paintLb();
}
function closeLb(){
  $("#lb").classList.remove("on");
  document.body.style.overflow = "";
}
wire("#lb", el => el.addEventListener("click", e => { if(e.target.id === "lb") closeLb(); }));
document.addEventListener("keydown", e => {
  const lb = $("#lb"); if(!lb || !lb.classList.contains("on")) return;
  if(e.key === "Escape")     closeLb();
  if(e.key === "ArrowRight") stepLb(1);
  if(e.key === "ArrowLeft")  stepLb(-1);
});

/* ─── 5. LANGUE ─── */
function setLang(l){
  LANG = l;
  const d = I18N[l];
  const T = k => (d[k] || "").replace(/\{phone\}/g, CONFIG.phone);
  $$("[data-i18n]").forEach(el => { const k = el.dataset.i18n; if(d[k] != null) el.innerHTML = T(k); });
  /* Certains libellés ne sont pas du texte affiché mais des attributs
     (aria-label des flèches du carrousel, par exemple). */
  $$("[data-i18n-aria]").forEach(el => {
    const k = el.dataset.i18nAria; if(d[k] != null) el.setAttribute("aria-label", d[k]);
  });
  document.documentElement.lang = l;
  /* Chaque page déclare la clé de son <title> et de sa description. */
  const tk = document.body.dataset.titleKey || "doc.title";
  const dk = document.body.dataset.descKey  || "meta.desc";
  if(d[tk]) document.title = d[tk];
  const md = document.querySelector('meta[name="description"]');
  if(md && d[dk]) md.setAttribute("content", d[dk]);
  wire("#btn-fr", e => e.classList.toggle("on", l === "fr"));
  wire("#btn-en", e => e.classList.toggle("on", l === "en"));
  try{
    const u = new URL(location.href);
    if(l === "en") u.searchParams.set("lang", "en"); else u.searchParams.delete("lang");
    history.replaceState(null, "", u.pathname + u.search);
  }catch(e){}
  const lg = $("#legal");
  if(lg && lg.open) openLegal(lg.dataset.which);
  document.dispatchEvent(new CustomEvent("langchange", { detail: l }));
}

/* Les liens internes doivent conserver la langue choisie : un visiteur
   anglophone qui ouvre le portfolio ne doit pas retomber en français. */
function keepLang(){
  $$("a[data-keeplang]").forEach(a => {
    const u = new URL(a.getAttribute("href"), location.href);
    if(LANG === "en") u.searchParams.set("lang", "en"); else u.searchParams.delete("lang");
    a.setAttribute("href", u.pathname + u.search + u.hash);
  });
}
document.addEventListener("langchange", keepLang);

/* ─── 6. EN-TÊTE + MENU ─── */
addEventListener("scroll", () => wire("#hdr", e => e.classList.toggle("solid", scrollY > 60)), {passive:true});
const setMenu = open => {
  document.body.classList.toggle("menu-open", open);
  document.body.style.overflow = open ? "hidden" : "";
};
wire("#burger", e => e.onclick = () => setMenu(!document.body.classList.contains("menu-open")));
$$("#nav a").forEach(a => a.onclick = () => setMenu(false));
addEventListener("keydown", e => { if(e.key === "Escape") setMenu(false); });

/* ─── 7. APPARITIONS ─── */
const io = new IntersectionObserver(es => es.forEach((e, i) => {
  if(e.isIntersecting){ setTimeout(() => e.target.classList.add("in"), i * 80); io.unobserve(e.target); }
}), {rootMargin:"0px 0px -10%"});
$$(".rv").forEach(el => io.observe(el));

/* ─── 8. MENTIONS LÉGALES ─── */
function openLegal(which){
  const d = I18N[LANG], sub = t => (t || "").replace(/\{phone\}/g, CONFIG.phone);
  $("#legalTitle").textContent = d[which === "legal" ? "lg.legal" : "lg.privacy"];
  $("#legalBody").innerHTML    = sub(d[which === "legal" ? "lg.legalBody" : "lg.privacyBody"]);
  $("#legal").dataset.which    = which;
  $("#legal").showModal();
}
wire("#legal", el => el.addEventListener("click", e => { if(e.target.id === "legal") el.close(); }));

/* ─── 9. DÉMARRAGE ───
   Le site s'ouvre TOUJOURS en français. L'anglais ne s'affiche que si le
   visiteur clique sur EN, ou arrive par une URL en ?lang=en. On ne se fie
   volontairement pas à la langue du navigateur : elle basculait en anglais
   des visiteurs français, et les robots d'indexation — qui s'annoncent en
   en-US — voyaient la version anglaise alors que le <title> est en français. */
setLang(new URLSearchParams(location.search).get("lang") === "en" ? "en" : "fr");

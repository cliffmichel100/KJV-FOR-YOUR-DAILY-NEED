const BOOKS=[
["Genesis",50],["Exodus",40],["Leviticus",27],["Numbers",36],["Deuteronomy",34],["Joshua",24],["Judges",21],["Ruth",4],
["1 Samuel",31],["2 Samuel",24],["1 Kings",22],["2 Kings",25],["1 Chronicles",29],["2 Chronicles",36],["Ezra",10],["Nehemiah",13],["Esther",10],["Job",42],["Psalms",150],["Proverbs",31],["Ecclesiastes",12],["Song of Solomon",8],["Isaiah",66],["Jeremiah",52],["Lamentations",5],["Ezekiel",48],["Daniel",12],["Hosea",14],["Joel",3],["Amos",9],["Obadiah",1],["Jonah",4],["Micah",7],["Nahum",3],["Habakkuk",3],["Zephaniah",3],["Haggai",2],["Zechariah",14],["Malachi",4],
["Matthew",28],["Mark",16],["Luke",24],["John",21],["Acts",28],["Romans",16],["1 Corinthians",16],["2 Corinthians",13],["Galatians",6],["Ephesians",6],["Philippians",4],["Colossians",4],["1 Thessalonians",5],["2 Thessalonians",3],["1 Timothy",6],["2 Timothy",4],["Titus",3],["Philemon",1],["Hebrews",13],["James",5],["1 Peter",5],["2 Peter",3],["1 John",5],["2 John",1],["3 John",1],["Jude",1],["Revelation",22]
];

const doctrine=[
["Bibliology","The Bible is the inspired, preserved Word of God and the final authority for faith and practice. Study Scripture in context, compare Scripture with Scripture, and obey what God has revealed.","2 Timothy 3:16-17; Psalm 119:105; Isaiah 8:20"],
["God & the Trinity","There is one true God, eternally existing as Father, Son, and Holy Ghost. The Father is God, the Son is God, and the Holy Ghost is God, while God is one.","Deuteronomy 6:4; Matthew 28:19; 2 Corinthians 13:14"],
["Christology","Jesus Christ is the eternal Son of God, truly God and truly man. He was born of a virgin, lived sinlessly, died for sinners, rose bodily, ascended, and will return.","John 1:1-14; 1 Corinthians 15:3-4; Acts 1:9-11"],
["Gospel & Salvation","Salvation is by God's grace through personal faith in Jesus Christ, not by human merit or works. Repentance and faith belong to a genuine response to the Gospel.","John 3:16; Acts 20:21; Ephesians 2:8-9; Titus 3:5"],
["Eternal Security","A truly saved believer is kept by God and has everlasting life. Assurance rests on God's promise and Christ's finished work, while believers are called to holy living and faithful service.","John 10:27-30; John 5:24; Romans 8:38-39; 1 John 5:11-13"],
["Local Church","The church is a local assembly of baptized believers organized to worship, teach Scripture, observe the ordinances, evangelize, disciple, and carry out Christ's commission.","Acts 2:41-47; Matthew 28:19-20; 1 Corinthians 12:27-28"],
["Baptism & Lord's Supper","Baptism is the immersion of a believer in water, picturing Christ's death, burial and resurrection. The Lord's Supper is a memorial ordinance observed by the local church.","Romans 6:3-5; Acts 8:36-39; 1 Corinthians 11:23-29"],
["Church Leadership","Pastors/bishops and deacons are offices with qualifications stated in Scripture. Leadership is to be exercised with humility, integrity, service, and accountability.","1 Timothy 3:1-13; Titus 1:5-9; 1 Peter 5:1-4"],
["Separation & Holy Living","Believers are called to holiness, discernment, truthful speech, love, humility, and separation from sinful practices while continuing to show grace and witness to the world.","Romans 12:1-2; 2 Corinthians 6:14-18; Ephesians 5:15-17"],
["Evangelism & Missions","Every believer should make Christ known. The local church sends and supports Gospel laborers, prays for open doors, and disciples those who believe.","Matthew 28:18-20; Acts 1:8; Romans 1:16; 2 Timothy 4:5"],
["Future Things","Christ will return bodily. This framework teaches a literal future resurrection, judgment, and eternal destinies, with a premillennial reading of Christ's kingdom.","1 Thessalonians 4:13-18; Revelation 19-22"],
["Giving & Stewardship","Everything belongs to God. Believers are stewards who give willingly and faithfully, support Gospel ministry, care for needs, and avoid treating money as the master.","Malachi 3:10; 2 Corinthians 9:6-8; 1 Timothy 6:17-19"]
];

const studyNotes=[
["Genesis 1","Creation and the Creator","The opening chapter begins with God, not with human philosophy. Creation is presented as God's purposeful work. The repeated pattern of God's speaking and creating emphasizes His authority and power."],
["Psalm 23","The Shepherd's care","David describes the Lord as Shepherd, Provider, Guide, and Protector. The believer's confidence rests not in the absence of trouble but in the Shepherd's presence through it."],
["Isaiah 53","The suffering Servant","The chapter presents the substitutionary suffering of the Servant. Christians understand its fulfillment in the sacrificial work of Jesus Christ."],
["Matthew 28:18-20","The Great Commission","Christ possesses all authority and commands His followers to go, make disciples, baptize believers, and teach them to observe His commands."],
["John 3:16","God's love and the Gospel","The verse connects God's love, the giving of His Son, personal faith, and everlasting life. It should be read with the surrounding teaching on new birth and belief."],
["John 10:27-30","Security in Christ","Jesus describes His sheep hearing His voice and receiving eternal life. The passage grounds assurance in the Shepherd's hand and the Father's hand."],
["Acts 2:41-47","The first local church pattern","The passage shows believers receiving the Word, baptism, fellowship, teaching, prayer, the breaking of bread, and practical care."],
["Romans 3:23-26","The problem and God's provision","All have sinned. The Gospel announces God's righteous provision through Christ rather than human self-righteousness."],
["Romans 6","New life and holy living","Grace does not make sin desirable. The believer is taught to reckon himself dead to sin and alive unto God and to yield his members to righteousness."],
["Ephesians 2:8-10","Grace, faith and good works","Salvation is God's gift and not earned by works. Good works follow salvation as God's workmanship rather than serving as its price."],
["Philippians 4:6-9","Prayer and peace","Believers are told to bring requests to God with thanksgiving and to discipline their thoughts around things that are true, honest, just, pure and good."],
["2 Timothy 2:15","Handling Scripture","Bible study requires diligence, accuracy, and reverence. The goal is not merely collecting information but rightly handling God's Word."],
["2 Timothy 3:16-17","The purpose of Scripture","Scripture is profitable for doctrine, reproof, correction and instruction in righteousness so that the servant of God may be furnished for good works."],
["2 Timothy 4:1-5","Preach the Word","Paul charges Timothy to continue preaching Scripture faithfully, with patience and doctrine, even when people prefer teaching that agrees with their own desires."],
["1 Peter 3:15","Ready to answer","Believers should be ready to give a reason for the hope within them, doing so with meekness and fear."],
["1 John 5:11-13","Assurance of eternal life","John explains that God has given eternal life in His Son and that the written testimony is meant to give believers assurance."],
["Revelation 21-22","The eternal state","The final chapters present the holy city, God's dwelling with His people, the end of death and sorrow, and the promise of Christ's coming."]
];

const glossary=[
["Adoption","God's act of receiving the believer into His family and giving the privileges of a child."],["Atonement","Christ's sacrificial work dealing with sin and providing reconciliation to God."],["Assurance","Confidence grounded in God's promises concerning salvation and eternal life."],["Baptism","The immersion of a believer in water as a testimony of identification with Christ."],["Canon","The recognized collection of books received as Scripture."],["Church","A local assembly of baptized believers; the term is also used in Scripture in broader contexts."],["Conversion","The turning of a person to God in repentance and faith."],["Covenant","A solemn agreement or promise; biblical covenants must be understood in their scriptural context."],["Dispensation","A period or arrangement in God's revealed administration; dispensational study emphasizes distinctions in God's program without dividing Scripture into unrelated religions."],["Eternal Security","The biblical teaching that God keeps the truly saved believer and that eternal life is everlasting."],["Evangelism","The proclamation of the Gospel with the aim of making Christ known."],["Faith","Trust or confidence in God and His revealed truth; saving faith rests in Christ."],["Gospel","The good news concerning Jesus Christ, His death for sins, burial and resurrection."],["Grace","God's undeserved favor and kindness toward sinners and believers."],["Justification","God's declaration concerning the believer as righteous on the basis of Christ's work and received by faith."],["Local Church","A visible assembly of believers meeting for worship, doctrine, ordinances, fellowship and mission."],["Lord's Supper","A church ordinance commemorating Christ's body and blood and proclaiming His death until He comes."],["Missions","Sending and supporting Gospel workers to make disciples among peoples and places."],["Ordinance","A command of Christ given to the church; in this framework, believer's baptism and the Lord's Supper."],["Preservation","God's providential keeping of His Word; the believer should approach textual questions carefully and reverently."],["Propitiation","Christ's sacrificial work that satisfies the righteous demands of God concerning sin."],["Regeneration","The new birth, the work of God in giving spiritual life."],["Repentance","A change of mind and turning toward God; in Gospel response it accompanies a genuine turning to God."],["Resurrection","The raising of the dead; central to Christ's bodily resurrection and future resurrection."],["Revelation","God's making truth known; Scripture records God's authoritative written revelation."],["Sanctification","Being set apart to God and growing in practical holiness."],["Scripture","The written Word of God, authoritative for faith and practice."],["Separation","A believer's refusal to participate in sinful compromise, while continuing to love and witness to people."],["Soulwinning","A common Baptist term for personally presenting the Gospel and seeking to lead people to faith in Christ."],["Stewardship","Faithful management of time, abilities, possessions and opportunities entrusted by God."],["Trinity","One God eternally existing in three Persons: Father, Son and Holy Ghost."],["Witness","A person who testifies to what God has done and declares the Gospel."],["Word of God","A biblical expression for God's revealed message, especially Scripture and, in John 1, Christ as the Word."],
["Regeneration","The new birth, the work of God in giving spiritual life."],["Reconciliation","Restoration of relationship between parties formerly separated; the Gospel announces reconciliation to God through Christ."],["Redemption","Deliverance by the payment of a price; Christ's work is central to New Testament redemption."],["Remission","Release or forgiveness of sins."],["Imputation","The accounting or reckoning of something to another; Scripture uses this language in discussing sin and righteousness."],["Intercession","Prayer made on behalf of another person."],["Disciple","A learner and follower who is being taught to obey Christ."],["Discipleship","The process of teaching believers to follow and obey Jesus Christ."],["Edification","Building believers up in faith and usefulness."],["Exegesis","Careful explanation of what a biblical text means from its context."],["Hermeneutics","Principles used to interpret Scripture responsibly."],["Inspiration","God's work in giving Scripture through human writers."],["Inerrancy","The conviction that Scripture, as originally given by God, is truthful and without error."],["Illumination","The Holy Spirit's ministry of helping believers understand and apply Scripture."],["Prophecy","A message given by God through a prophet; prophecy may address near or future events depending on context."],["Sanctuary","A place set apart for worship; the meaning depends on biblical context."],["Sovereignty","God's supreme authority and rule over His creation. Biblical sovereignty does not require adopting a complete Calvinist system."],["Free Will","Human responsibility to respond to God and make genuine choices; Scripture holds human beings accountable for their response."],["Premillennial","The expectation that Christ returns before the future thousand-year reign described in Revelation 20."],["Tribulation","A period of severe trouble described in biblical prophecy, especially in Daniel and Revelation and Christ's discourse."],["Rapture","The term commonly used for the catching up of believers described in 1 Thessalonians 4:13-18."],["Second Coming","Christ's future bodily return, taught throughout the New Testament."],["Heaven","The dwelling of God and the destination of believers in the present intermediate state; Scripture also points to the future new heaven and new earth."],["Hell","The biblical reality of final judgment and punishment for the wicked."],["Evangelist","A Gospel preacher; Ephesians 4:11 names evangelists among Christ's gifts to the church."],["Pastor","A shepherding office/function in the local church, closely related to bishop/elder in New Testament usage."],["Deacon","A servant-officer of the local church meeting the qualifications in 1 Timothy 3."],["Ordination","A church's formal recognition and setting apart of qualified ministry workers."],["Fellowship","Shared participation and partnership among believers."],["Discipline","Biblical correction and restoration within the church when serious sin or disorder occurs."],["Apologetics","Reasoned defense of the Christian faith; 1 Peter 3:15 calls believers to be ready to answer."],["Typology","Study of persons, events or institutions that foreshadow later biblical realities; claims should be grounded in Scripture."],["Dispensationalism","A system of biblical interpretation emphasizing distinctions in God's administrations and a consistent literal-historical reading of prophecy."],["Textus Receptus","A printed Greek New Testament tradition associated with the textual history underlying the KJV's Greek base; textual-history discussions should distinguish editions and manuscript evidence."],["Strong's Numbers","A reference numbering system for Hebrew and Greek words used in many Bible-study tools; numbers are study aids, not inspired text."]
];

function $(id){return document.getElementById(id)}
let bible=null, currentBook=0, currentChapter=1;

function initSelects(){
  $("bookSelect").innerHTML=BOOKS.map((b,i)=>`<option value="${i}">${b[0]}</option>`).join("");
  $("bookSelect").addEventListener("change",()=>{currentBook=+$("bookSelect").value;fillChapters();loadChapter();});
  $("chapterSelect").addEventListener("change",()=>{currentChapter=+$("chapterSelect").value;loadChapter();});
  fillChapters();
}
function fillChapters(){
  $("chapterSelect").innerHTML=Array.from({length:BOOKS[currentBook][1]},(_,i)=>`<option value="${i+1}">Chapter ${i+1}</option>`).join("");
  $("chapterSelect").value=currentChapter;
}
function normalizeData(raw){
  if(raw.books)return raw;
  if(Array.isArray(raw)){
    return {books:raw.map((book,i)=>({book:BOOKS[i][0],chapters:book.map((chapter,ci)=>({chapter:ci+1,verses:chapter.map((text,vi)=>({verse:vi+1,text}))}))}))};
  }
  return raw;
}
async function loadBible(){
  const urls=[
    "https://raw.githubusercontent.com/midvash/bible-data/main/versions/en/kjv/kjv.json",
    "https://cdn.jsdelivr.net/gh/jsubroto/bible-api@main/kjv.json"
  ];
  for(const u of urls){
    try{
      const r=await fetch(u,{cache:"force-cache"});
      if(!r.ok)continue;
      bible=normalizeData(await r.json());
      $("loadStatus").textContent="KJV loaded • 66 books";
      return;
    }catch(e){}
  }
  $("loadStatus").innerHTML='Online KJV data could not be loaded. <a href="https://ebible.org/bible/details.php?id=eng-kjv2006" target="_blank">Open KJV source</a>.';
}
function findBook(name){
  if(!bible)return null;
  return bible.books.find(b=>String(b.book||b.name).toLowerCase()===name.toLowerCase())||bible.books.find(b=>String(b.book||b.name).toLowerCase().includes(name.toLowerCase()));
}
function loadChapter(){
  $("bookSelect").value=currentBook; $("chapterSelect").value=currentChapter;
  const name=BOOKS[currentBook][0], title=`${name} ${currentChapter}`;
  $("chapterTitle").textContent=title;
  const b=findBook(name);
  let ch=b?.chapters?.find(c=>Number(c.chapter)===currentChapter);
  if(!ch && b?.chapters)ch=b.chapters[currentChapter-1];
  if(!ch){$("verseList").innerHTML=`<p>Waiting for the KJV corpus to load…</p>`;return}
  $("verseList").innerHTML=(ch.verses||[]).map(v=>`<p class="verse"><sup class="verse-num">${v.verse}</sup>${escapeHtml(v.text)}</p>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]))}
function searchBible(q){
  if(!bible)return [];
  q=q.toLowerCase().trim(); if(!q)return [];
  const out=[];
  for(const b of bible.books){
    for(const c of (b.chapters||[])){
      for(const v of (c.verses||[])){
        if(String(v.text).toLowerCase().includes(q)){out.push({ref:`${b.book} ${c.chapter}:${v.verse}`,text:v.text});if(out.length>=60)return out}
      }
    }
  }
  return out;
}
function doSearch(){
  const q=$("searchBox").value, results=searchBible(q), box=$("searchResults");
  box.classList.remove("hidden");
  box.innerHTML=results.length?`<b>${results.length}${results.length===60?"+":""} results</b>`+results.map(r=>`<div class="result"><b>${escapeHtml(r.ref)}</b> — ${escapeHtml(r.text)}</div>`).join(""):`No matching verse found.`;
}
function randomVerse(){
  if(!bible)return;
  const b=bible.books[Math.floor(Math.random()*bible.books.length)], c=b.chapters[Math.floor(Math.random()*b.chapters.length)], v=c.verses[Math.floor(Math.random()*c.verses.length)];
  const idx=BOOKS.findIndex(x=>x[0].toLowerCase()===String(b.book).toLowerCase()); if(idx>=0){currentBook=idx;currentChapter=Number(c.chapter);fillChapters();loadChapter();setTimeout(()=>{window.scrollTo({top:document.querySelector(".paper").offsetTop-80,behavior:"smooth"});},50)}
}
function setupPages(){
 document.querySelectorAll(".navbtn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".navbtn").forEach(x=>x.classList.remove("active"));btn.classList.add("active");document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(btn.dataset.page).classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}));
}
function renderStudy(){ $("studyCards").innerHTML=studyNotes.map(n=>`<div class="study-card"><div class="mini-label">${n[0]}</div><h3>${n[1]}</h3><p>${n[2]}</p><button class="chip jump" data-ref="${n[0]}">Open passage</button></div>`).join("");}
function renderDoctrine(){ $("doctrineGrid").innerHTML=doctrine.map(d=>`<div class="doctrine-card"><h3>${d[0]}</h3><p>${d[1]}</p><div class="chips">${d[2].split(";").map(x=>`<span class="chip">${x}</span>`).join("")}</div></div>`).join("");}
function renderGlossary(filter=""){const f=filter.toLowerCase();$("glossaryList").innerHTML=glossary.filter(x=>!f||x[0].toLowerCase().includes(f)||x[1].toLowerCase().includes(f)).sort((a,b)=>a[0].localeCompare(b[0])).map(x=>`<div class="term"><b>${x[0]}</b><br>${x[1]}</div>`).join("")||"<p>No terms found.</p>";}
function setupIndexes(){document.querySelectorAll(".chips[data-links]").forEach(box=>box.innerHTML=box.dataset.links.split("|").map(x=>`<span class="chip">${x}</span>`).join(""))}
function parseRef(ref){
 const m=ref.match(/^(.+?)\s+(\d+)(?::(\d+))?$/);if(!m)return;
 const idx=BOOKS.findIndex(b=>b[0].toLowerCase()===m[1].toLowerCase());if(idx<0)return;
 currentBook=idx;currentChapter=+m[2];fillChapters();loadChapter();document.querySelector('[data-page="reader"]').click();
}
document.addEventListener("click",e=>{if(e.target.classList.contains("chip")&&e.target.dataset.ref)parseRef(e.target.dataset.ref)});
$("prevChapter").onclick=()=>{if(currentChapter>1){currentChapter--;fillChapters();loadChapter()}else if(currentBook>0){currentBook--;currentChapter=BOOKS[currentBook][1];fillChapters();loadChapter()}};
$("nextChapter").onclick=()=>{if(currentChapter<BOOKS[currentBook][1]){currentChapter++;fillChapters();loadChapter()}else if(currentBook<BOOKS.length-1){currentBook++;currentChapter=1;fillChapters();loadChapter()}};
$("searchBtn").onclick=doSearch;$("searchBox").addEventListener("keydown",e=>{if(e.key==="Enter")doSearch()});$("randomBtn").onclick=randomVerse;
$("glossarySearch").addEventListener("input",e=>renderGlossary(e.target.value));
initSelects();setupPages();renderStudy();renderDoctrine();renderGlossary();setupIndexes();loadChapter();loadBible().then(loadChapter);

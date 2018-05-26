function hentRapport(){
  skarUt = hentData();
  rapport.html(rWisc()[1]);
}

// LAGER AKTUELL RAPPORT
function rWisc() {
  var fraser = evneFraser();
  var r = {
      overskrift: "WISC-V (Wechsler Intelligence Scale for Children - Fifth Edition)",
      indikasjon: "Bakgrunn for ønske om å benytte en generell evnetest i utredningen er et vurdert behov for å kartlegge generelt evnenivå. Dette med tanke på differensialdiagnostikk og ønske om god forståelse av funksjonsprofil i utarbeidelse av hjelpetiltak og videre behandlingsplan.",
      om: "WISC-V er en generell evnetest for barn i alderen 6-17 år. Den består av 15 deltester, hvorav 7 er nødvendig for å beregne fullskala-IQ. Det er mulig å beregne 5 primærindekser; verbal forståelsesindeks (VFI), visuospatial indeks (VSI), flytende resonnering indeks (FRI), arbeidshukommelse indeks (AMI) og prosesseringshastighetsindeks (PHI). I tillegg er det mulig å beregne 5 sekundærindekser som kan gi nyttig tilleggsinformasjon om barnets kognitive fungering. <br>Følgende betegnelser brukes: Gjennomsnittlig; 32-68 percentil. Gjennomsnittets nedre del; 16-30 percentil. Gjennomsnittets øvre del; 70-84 percentil. Klart over gjennomsnittet; 86-98 percentil. Betydelig over gjennomsnittet; >98 percentil. Klart under gjennomsnittet; 2-14 percentil. Betydelig under gjennomsnittet; <2 percentil. ",
      observasjon: fraser.observasjoner,
      resultat: wiscTabell(),
      vurdering:  resBeWisc()
  };

  var rapport = (
        form.hEn(r.overskrift) + "<br><br>" +
        form.hTo("Bakgrunnsopplysninger og indikasjon for utredning: ") + r.indikasjon + "<br><br>" +
        form.hTo("Om testen: ") + form.be(r.om) + "<br><br>" +
        form.hTo("Om testsituasjonen: ") + r.observasjon + "<br><br>" +
        form.hTo("Resultat (" + idag() + ")") + ":<br>" + r.resultat + "<br><br>" +
        form.hTo("Vurdering/implikasjoner: ") + "<br>" + fraser.forskjeller + "<br><br>" + r.vurdering + "<br>" + fraser.vurdering + "<br>Vurderingen må ses i sammenheng med øvrig utredning.");

  var ut = [r.overskrift, rapport];
  return(ut);
}

//produserer resultatbeskrivelser
function resBeWisc() {

  var indeksBeskrivelse = indeksBeskrivelser();
  var resultat = wiscIndeksResultat();
  var sprikBe = wiscSprikBeskrivelse();



  // BESKRIV INDEKS RESULTAT
  function indeksResultatBeskrivelse(iSkor, ptile, fptile, tptile) {
    return("På denne indeksen skårer " + navn + " sterkere enn om lag " + ptile + " % av sine jevnaldrende. Det vil si " + iKat(iSkor) + ". Det reelle nivået på dette delområdet vil mest sannsynlig befinne seg et sted mellom " + fptile + " - " + tptile + " percentil.");
  }

  // BESKRIV FULLSKALA RESULTAT
  function fullskalaResultatBeskrivelse(iSkor, ptile, fptile, tptile) {
    return("Samlet sett fremkommer et generelt evnenivå på " + ptile + " percentil. Det vil si at " + navn + " gjør det bedre enn om lag " + ptile + " % av sine jevnaldrende, som er " + iKat(iSkor) + ". Det reelle nivået vil mest sannsynlig befinne seg et sted mellom " + fptile + " - " + tptile + " percentil.<br>");
  }

  // BESKRIV GEI RESULTAT
  function geiResultatBeskrivelse(iSkor, ptile, fptile, tptile) {
    return("GEI vurderes i dette tilfellet som et bedre mål på generelt evnenivå. Med GEI som utgangspunkt framkommer et generelt evnenivå på " + ptile + " percentil. Det vil si at " + navn + " gjør det bedre enn om lag " + ptile + " % av sine jevnaldrende, som er " + iKat(iSkor) + ". Det reelle nivået vil mest sannsynlig befinne seg et sted mellom " + fptile + " - " + tptile + " percentil.<br>");
  }

  // BESKRIV NVI RESULTAT
  function nviResultatBeskrivelse(iSkor, ptile, fptile, tptile) {
    return("NVI vurderes i dette tilfellet som et bedre mål på generelt evnenivå. Med NVI som utgangspunkt framkommer et generelt evnenivå på " + ptile + " percentil. Det vil si at " + navn + " gjør det bedre enn om lag " + ptile + " % av sine jevnaldrende, som er " + iKat(iSkor) + ". Det reelle nivået vil mest sannsynlig befinne seg et sted mellom " + fptile + " - " + tptile + " percentil.<br>");
  }

  var beskrivelse = {
      vfi: indeksBeskrivelse.wisc.vfi + indeksResultatBeskrivelse(resultat.vfi.iSkor, resultat.vfi.ptile, resultat.vfi.fptile, resultat.vfi.tptile) + "<br>" + sprikBe.vfi + "<br>",
      vsi: indeksBeskrivelse.wisc.vsi + indeksResultatBeskrivelse(resultat.vsi.iSkor, resultat.vsi.ptile, resultat.vsi.fptile, resultat.vsi.tptile) + "<br>" + sprikBe.vsi + "<br>",
      fri: indeksBeskrivelse.wisc.fri + indeksResultatBeskrivelse(resultat.fri.iSkor, resultat.fri.ptile, resultat.fri.fptile, resultat.fri.tptile) + "<br>" + sprikBe.fri + "<br>",
      ahi: indeksBeskrivelse.wisc.ahi + indeksResultatBeskrivelse(resultat.ahi.iSkor, resultat.ahi.ptile, resultat.ahi.fptile, resultat.ahi.tptile) + "<br>" + sprikBe.ahi + "<br>",
      phi: indeksBeskrivelse.wisc.phi + indeksResultatBeskrivelse(resultat.phi.iSkor, resultat.phi.ptile, resultat.phi.fptile, resultat.phi.tptile) + "<br>" + sprikBe.phi + "<br>",
      fsiq: fullskalaResultatBeskrivelse(resultat.fsiq.iSkor, resultat.fsiq.ptile, resultat.fsiq.fptile, resultat.fsiq.tptile),
      gei: rSt + indeksBeskrivelse.wisc.gei + geiResultatBeskrivelse(resultat.gei.iSkor, resultat.gei.ptile, resultat.gei.fptile, resultat.gei.tptile),
      nvi: rSt + indeksBeskrivelse.wisc.nvi + nviResultatBeskrivelse(resultat.nvi.iSkor, resultat.nvi.ptile, resultat.nvi.fptile, resultat.nvi.tptile)
    };
  return(beskrivelse.fsiq + "<br>" + beskrivelse.gei + "<br>" + beskrivelse.nvi + "<br>" + beskrivelse.vfi + "<br>" + beskrivelse.vsi + "<br>" + beskrivelse.fri + "<br>" + beskrivelse.ahi + "<br>" + beskrivelse.phi);
}

// Produserer tabell over wisc resultater
function wiscTabell() {
  var resultat = wiscIndeksResultat();

  var tb = {
    start: "<head> <title>Table Example</title> <style> table { border-collapse: collapse; width: 55%; } th, td { border: 1px solid black; } </style> </head> <body>",
    inf: "<tr>" + "<th>Indeks</th>" + "<th>Percentil</th>" + "<th>Konfidensintervall</th>" +  "</tr>",
    vfi:  "<tr>" + "<td>Verbal forståelse (VFI)</td>" + "<td>" + resultat.vfi.ptile + "</td>" + "<td>" + resultat.vfi.fptile + " - " + resultat.vfi.tptile + "</td>" + "</tr>",
    vsi:  "<tr>" + "<td>Visuospatial (VSI)</td>" + "<td>" + resultat.vsi.ptile + "</td>" + "<td>" + resultat.vsi.fptile + " - " + resultat.vsi.tptile + "</td>"  + "</tr>",
    fri:  "<tr>" + "<td>Flytende resonnering (FRI)</td>" + "<td>" + resultat.fri.ptile + "</td>" + "<td>" + resultat.fri.fptile + " - " + resultat.fri.tptile + "</td>"  + "</tr>",
    ahi:  "<tr>" + "<td>Arbeidshukommelse (AHI)</td>" + "<td>" + resultat.ahi.ptile + "</td>" + "<td>" + resultat.ahi.fptile + " - " + resultat.ahi.tptile + "</td>"  + "</tr>",
    phi:  "<tr>" + "<td>Prosesseringshastighet (PHI)</td>" + "<td>" + resultat.phi.ptile + "</td>" + "<td>" + resultat.phi.fptile + " - " + resultat.phi.tptile + "</td>"  + "</tr>",
    fsiq:  "<tr>" + "<td>Fullskala-IQ (FSIQ)</td>" + "<td>" + resultat.fsiq.ptile + "</td>" + "<td>" + resultat.fsiq.fptile + " - " + resultat.fsiq.tptile + "</td>",
    gei:  "<tr>" + "<td>Grunnleggende evne (GEI)</td>" + "<td>" + resultat.gei.ptile + "</td>" + "<td>" + resultat.gei.fptile + " - " + resultat.gei.tptile + "</td>" + "</tr></table></body>"
  };

  var lst = {
    inf:  "<i><u>Indeks  " + "Percentil  " + "Konfidensintervall 95%" +  "</u></i><br>",
    vfi:  "Verbal forståelse (VFI)  " + resultat.vfi.ptile + "  " + resultat.vfi.fptile + " - " + resultat.vfi.tptile + "<br>",
    vsi:  "Visuospatial (VSI)  " + resultat.vsi.ptile + "  " + resultat.vsi.fptile + " - " + resultat.vsi.tptile + "<br>",
    fri:  "Flytende resonnering (FRI)  " + resultat.fri.ptile + "  " + resultat.fri.fptile + " - " + resultat.fri.tptile + "<br>",
    ahi:  "Arbeidshukommelse (AHI)  " + resultat.ahi.ptile + "  " + resultat.ahi.fptile + " - " + resultat.ahi.tptile + "<br>",
    phi:  "Prosesseringshastighet (PHI)  " + resultat.phi.ptile + "  " + resultat.phi.fptile + " - " + resultat.phi.tptile + "<br>",
    fsiq: "Fullskala-IQ (FSIQ)  " + resultat.fsiq.ptile + "  " + resultat.fsiq.fptile + " - " + resultat.fsiq.tptile + "<br>",
    gei:  rSt + "Grunnleggende evne (GEI)  " + resultat.gei.ptile + "  " + resultat.gei.fptile + " - " + resultat.gei.tptile + "<br>",
    nvi:  rSt + "Nonverbal (NVI)  " + resultat.nvi.ptile + "  " + resultat.nvi.fptile + " - " + resultat.nvi.tptile
  };

  var tabell = tb.start + tb.inf + tb.vfi + tb.vsi + tb.fri + tb.ahi + tb.phi + tb.fsiq + tb.gei;
  var liste = lst.inf + lst.vfi + lst.vsi + lst.fri + lst.ahi + lst.phi + lst.fsiq + lst.gei + lst.nvi;
  return(liste); //kan ta med tabell
}

// Hent wisc indeks resultat
function wiscIndeksResultat() {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("WISC-V");

  var vfi = { // Math.round()
    iSkor: skarUt.vfi, //iSkor
    ptile: Math.round(iTilP(skarUt.vfi)), //ptile
    fptile: Math.round(iTilP(skarUt.vfiF)), //fptile
    tptile: Math.round(iTilP(skarUt.vfiT)), //tptile
    kat: dKat(skarUt.vfi) //kat
  };

  var vsi = {
    iSkor: skarUt.vsi, //iSkor
    ptile: Math.round(iTilP(skarUt.vsi)), //ptile
    fptile: Math.round(iTilP(skarUt.vsiF)), //fptile
    tptile: Math.round(iTilP(skarUt.vsiT)), //tptile
    kat: dKat(skarUt.vsi) //kat
  };

  var fri = {
    iSkor: skarUt.fri, //iSkor
    ptile: Math.round(iTilP(skarUt.fri)), //ptile
    fptile: Math.round(iTilP(skarUt.friF)), //fptile
    tptile: Math.round(iTilP(skarUt.friT)), //tptile
    kat: dKat(skarUt.fri) //kat
  };

  var ahi = {
    iSkor: skarUt.ahi, //iSkor
    ptile: Math.round(iTilP(skarUt.ahi)), //ptile
    fptile: Math.round(iTilP(skarUt.ahiF)), //fptile
    tptile: Math.round(iTilP(skarUt.ahiT)), //tptile
    kat: dKat(skarUt.ahi) //kat
  };

  var phi = {
    iSkor: skarUt.phi, //iSkor
    ptile: Math.round(iTilP(skarUt.phi)), //ptile
    fptile: Math.round(iTilP(skarUt.phiF)), //fptile
    tptile: Math.round(iTilP(skarUt.phiT)), //tptile
    kat: dKat(skarUt.phi) //kat
  };

  var fsiq = {
    iSkor: skarUt.fsiq, //iSkor
    ptile: Math.round(iTilP(skarUt.fsiq)), //ptile
    fptile: Math.round(iTilP(skarUt.fsiqF)), //fptile
    tptile: Math.round(iTilP(skarUt.fsiqT)), //tptile
    kat: dKat(skarUt.fsiq) //kat
  };

  var gei = {
    iSkor: skarUt.gei, //iSkor
    ptile: Math.round(iTilP(skarUt.gei)), //ptile
    fptile: Math.round(iTilP(skarUt.geiF)), //fptile
    tptile: Math.round(iTilP(skarUt.geiT)), //tptile
    kat: dKat(skarUt.gei) //kat
  };

  var nvi = {
    iSkor: skarUt.nvi, //iSkor
    ptile: Math.round(iTilP(skarUt.nvi)), //ptile
    fptile: Math.round(iTilP(skarUt.nviF)), //fptile
    tptile: Math.round(iTilP(skarUt.nviT)), //tptile
    kat: dKat(skarUt.nvi) //kat
  };


  var res = {
    vfi: vfi,
    vsi: vsi,
    fri: fri,
    ahi: ahi,
    phi: phi,
    fsiq: fsiq,
    gei: gei,
    nvi: nvi
  };
  return(res);
}

//Henter info om deltester
function wiscDeltest() {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("WISC-V");
  var beskriv = {
    li: ", som blant annet er ment å gi et mål på tilegnet kunnskap, ordforråd og evnen til å oppdage og beskrive relevante sammenhenger", //Likheter
    of: ", som blant annet er ment å gi et mål på tilegnet kunnskap, ordforråd, verbalt flyt, og ekspressivt- og reseptivt språk", //Ordforståelse
    tm: ", som i tillegg til å avhenge av evnen til å gjenkjenne deler ut fra sammensatte mønster og visualisere hvordan delene hører sammen, krever visuell-motorisk koordinasjon og evnen til å jobbe hurtig under tidspress", //Terningmønster
    vp: ", som krever evne til å gjenkjenne deler ut fra sammensatte mønster og visualisere hvordan delene hører sammen", //Visuelle puslespill
    mr: ", som blant annet krever evne til å bearbeide visuell informasjon for å oppdage de underliggende lovmessighetene som styrer et gitt fenomen og bruke dette i problemløsing", //Matriser
    fv: ", som i tillegg til å kreve evne til å bearbeide visuell informasjon for å oppdage underliggende sammenhenger, avhenger av evnen til logisk resonnering ved hjelp av kjente premisser og prinsipper, f.eks. nummer, matematikk eller operasjoner", //Figurvekter
    rg: ", som krever kapasitet og bearbeiding i auditiv arbeidshukommelse i tillegg til tillegnet matematikk kunnskap", //Regning
    th: ", som er ment å gi et mål på evnen til innlæring og umiddelbar gjenkalling av auditiv informasjon og evnen til å bearbeide denne informasjonen før gjenkalling", //Tallhukommelse
    bh: ", som krever evne til innlæring og umiddelbar gjenkjenning av visuelt stimuli, i tillegg til å gjengi opprinnelig rekkefølge", //Bildehukommelse
    tb: ", som krever evne til innlæring, re-sekvensiering og gjenkalling av auditiv informasjon", //Tall-bokstav-serier
    kd: ", som krever evne til å utføre enkle repetitive oppgaver raskt og flytende, og avhenger av oppmerksomhet, utholdenhet, innlæring og tempo i visuelt søk", //Koding
    sl: ", som krever evne til å utføre enkle repetitive oppgaver raskt og flytende, og avhenger av oppmerksomhet, utholdenhet, tempo i visuelt søk og evnen til å lete etter flere ting på en gang uten å la seg distrahere"  //Symbolleting
  };

  var skalSkor = {
    li: skarUt.li, //Likheter
    of: skarUt.of, //Ordforståelse
    tm: skarUt.tm, //Terningmønster
    vp: skarUt.vp, //Visuelle puslespill
    mr: skarUt.mr, //Matriser
    fv: skarUt.fv, //Figurvekter
    rg: skarUt.rg, //Regning
    th: skarUt.th, //Tallhukommelse
    bh: skarUt.bh, //Bildehukommelse
    tb: skarUt.tb, //Tall-bokstav-serier
    kd: skarUt.kd, //Koding
    sl: skarUt.sl  //Symbolleting
  };

  var ptil = {
    li: Math.round(dTilP(skarUt.li)), //Likheter
    of: Math.round(dTilP(skarUt.of)), //Ordforståelse
    tm: Math.round(dTilP(skarUt.tm)), //Terningmønster
    vp: Math.round(dTilP(skarUt.vp)), //Visuelle puslespill
    mr: Math.round(dTilP(skarUt.mr)), //Matriser
    fv: Math.round(dTilP(skarUt.fv)), //Figurvekter
    rg: Math.round(dTilP(skarUt.rg)), //Regning
    th: Math.round(dTilP(skarUt.th)), //Tallhukommelse
    bh: Math.round(dTilP(skarUt.bh)), //Bildehukommelse
    tb: Math.round(dTilP(skarUt.tb)), //Tall-bokstav-serier
    kd: Math.round(dTilP(skarUt.kd)), //Koding
    sl: Math.round(dTilP(skarUt.sl))  //Symbolleting
  };

  var kat = {
    li: dKat(skarUt.li), //Likheter
    of: dKat(skarUt.of), //Ordforståelse
    tm: dKat(skarUt.tm), //Terningmønster
    vp: dKat(skarUt.vp), //Visuelle puslespill
    mr: dKat(skarUt.mr), //Matriser
    fv: dKat(skarUt.fv), //Figurvekter
    rg: dKat(skarUt.rg), //Regning
    th: dKat(skarUt.th), //Tallhukommelse
    bh: dKat(skarUt.bh), //Bildehukommelse
    tb: dKat(skarUt.tb), //Tall-bokstav-serier
    kd: dKat(skarUt.kd), //Koding
    sl: dKat(skarUt.sl)  //Symbolleting
  };

  var indeks = {
      vfi: [skalSkor.li, skalSkor.of],
      vsi: [skalSkor.tm, skalSkor.vp],
      fri: [skalSkor.mr, skalSkor.fv, skalSkor.rg],
      ahi: [skalSkor.th, skalSkor.bh],
      phi: [skalSkor.kd, skalSkor.sl],
      mri: [skalSkor.rg, skalSkor.fv],
      aai: [skalSkor.th, skalSkor.tb],
      nvi: [skalSkor.tm, skalSkor.vp, skalSkor.mr, skalSkor.fv, skalSkor.bh, skalSkor.kd],
      gei: [skalSkor.li, skalSkor.of, skalSkor.tm, skalSkor.mr, skalSkor.fv],
      bpi: [skalSkor.th, skalSkor.bh, skalSkor.kd, skalSkor.sl],
      fsiq: [skalSkor.li, skalSkor.of, skalSkor.tm, skalSkor.mr, skalSkor.fg, skalSkor.th, skalSkor.kd]
  };

  var nfo = { //0=navn; 1=beskrivelse; 2=skalSor; 3=%ile; 4=kat
      li: ["likheter", beskriv.li, skalSkor.li, Math.round(ptil.li), kat.li],
      of: ["ordforståelse", beskriv.of, skalSkor.of, Math.round(ptil.of), kat.of],
      tm: ["terningmønster", beskriv.tm, skalSkor.tm, Math.round(ptil.tm), kat.tm],
      vp: ["visuelle puslespill", beskriv.vp, skalSkor.vp, Math.round(ptil.vp), kat.vp],
      mr: ["matriser", beskriv.mr, skalSkor.mr, Math.round(ptil.mr), kat.mr],
      fv: ["figurvekter", beskriv.fv, skalSkor.fv, Math.round(ptil.fv), kat.fv],
      rg: ["regning", beskriv.rg, skalSkor.rg, Math.round(ptil.rg), kat.rg],
      th: ["tallhukommelse", beskriv.th, skalSkor.th, Math.round(ptil.th), kat.th],
      bh: ["bildehukommelse", beskriv.bh, skalSkor.bh, Math.round(ptil.bh), kat.bh],
      tb: ["tall-bokstav-serier", beskriv.tb, skalSkor.tb, Math.round(ptil.tb), kat.tb],
      kd: ["koding", beskriv.kd, skalSkor.kd, Math.round(ptil.kd), kat.kd],
      sl: ["symbolleting", beskriv.sl, skalSkor.sl, Math.round(ptil.sl), kat.sl]
    };


  var ut = {
    beskriv: beskriv,
    skalskor: skalSkor,
    ptil: ptil,
    kat: kat,
    indeks: indeks,
    nfo: nfo
  };
  return(ut);
}

//henter sprik mellom deltester som utgjør en gitt indeks
function wiscIndeksKonsistens() {
  var deltest = wiscDeltest();
  var indeks = deltest.indeks;

  function deltestSprik(inn) {
    var min = 20;
    var max = 0;
    //midlertidige variabler
    for (var i = 0, len = inn.length; i < len; i++) {
      var sk = Math.round(inn[i]);

      if(sk < min) {
        var min = sk;
      }
      if(sk > max) {
        var max = sk;
      }
    }
    return(max-min);
  }

  var sprik = { //[faktisk sprik, signifikans grense, inkonsistens grense]
    vfi: deltestSprik(indeks.vfi),
    vsi: deltestSprik(indeks.vsi),
    fri: deltestSprik(indeks.fri),
    ahi: deltestSprik(indeks.ahi),
    phi: deltestSprik(indeks.phi),
    mri: deltestSprik(indeks.mri),
    aai: deltestSprik(indeks.aai),
    nvi: deltestSprik(indeks.nvi),
    gei: deltestSprik(indeks.gei),
    bpi: deltestSprik(indeks.bpi),
    fsiq: deltestSprik(indeks.fsiq) //er differansen 9 eller mer regnes indeksskåren som inkonsistent. Er den 5 til og med 8 er forskjellen signifikant
  };

  return(sprik);
}

//Henter beskrivelse av sprik innad i indekser
function wiscSprikBeskrivelse() {
  var deltest = wiscDeltest();
  var nfo = deltest.nfo; //0=navn; 1=beskrivelse; 2=skalSor; 3=%ile; 4=kat
  var fr = deltestSprikFr();

  function resBeTo(a, b) { //0=navn; 1=beskrivelse; 2=skalSor; 3=%ile; 4=kat
    if(a[2] >= b[2]) {
      var f = a;
      var s = b;
    }else if(b[2] >= a[2]) {
      var f = b;
      var s = a;
    }
    return(fr.en + f[0] + " (" +  f[3] + " percentil) " +  f[1] + fr.tre + s[0] + " (" +  s[3] + " percentil) " +  s[1]);
  }

  function resBeTre(a, b, c) { //0=navn; 1="beskrivelse; 2=skalSor; 3=%ile; 4=kat
    if(a[2] >= b[2] && b[2] >= c[2]) {
      var f = a;
      var m = b;
      var s = c;
    }else if(a[2] >= c[2] && c[2] >= b[2]) {
      var f = a;
      var m = c;
      var s = b;
    }else if(c[2] >= a[2] && a[2] >= b[2]) {
      var f = c;
      var m = a;
      var s = b;
    }else if(c[2] >= b[2] && b[2] >= a[2]) {
      var f = c;
      var m = b;
      var s = a;
    }else if(b[2] >= a[2] && a[2] >= c[2]) {
      var f = b;
      var m = a;
      var s = c;
    }else if(b[2] >= c[2] && c[2] >= a[2]) {
      var f = b;
      var m = c;
      var s = a;
    }
    return(fr.en + f[0] + " (" +  f[3] + " percentil) " +  f[1] + ". " + fr.tre + s[0] + " (" +  s[3] + " percentil) " +  s[1] + ". " + fr.seks + m[0] + m[1] + " " + fr.syv + m[3] + " percentil.");
  }

  var sprikBesk = {
    vfi: resBeTo(nfo.li, nfo.of),
    vsi: resBeTo(nfo.tm, nfo.vp),
    fri: resBeTre(nfo.mr, nfo.fv, nfo.rg),
    ahi: resBeTo(nfo.th, nfo.bh),
    phi: resBeTo(nfo.kd, nfo.sl)
  };
  return(sprikBesk);
}

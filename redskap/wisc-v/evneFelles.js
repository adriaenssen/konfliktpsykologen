var navn = "pas";
var rSt = '<font color="red">** </font>';
function idag(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear().toString().substr(-2);

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = dd + '.' + mm + '.' + yyyy;
  return(today);

}

//INSTILLINGER
var form = {
  glob: function(inn){
    return('<font face="calibri" size="3">' + inn + "</font>");
    },
  hEn: function(inn){ // overskrift en
    return(html.u(inn.toUpperCase()));
    },
  hTo: function(inn){ // oberskrift to
    return(html.u(inn));
    },
  be: function(inn) { // beskrivelse
    return(html.i(inn));
    }
};


var formTo = {
  glob: function(inn){
    return('<font face="calibri" size="3">' + inn + "</font>");
    },
  hEn: function(inn){ // overskrift en
    return(html.b(html.u(inn)));
    },
  hTo: function(inn){ // oberskrift to
    return(html.b(inn));
    },
  be: function(inn) { // beskrivelse
    return(html.i(inn));
    }
};

//KOMPONENTER
var html = {
  r: function(inn) {
    return('<font color="red">' + inn + '</font>');
    },
  b: function(inn) {
    return("<b>" + inn + "</b>");
    },
  u: function(inn) {
    return("<u>" + inn + "</u>");
    },
  i: function(inn) {
    return("<i>" + inn + "</i>");
    }
};

//henter fraser til evnetest rapport
function evneFraser() {
  var obsGenerelt = html.r("*GENERELT*: ") + navn + " gjennomfører testen ved BUP Lillehammer. Testen gjennomføres på "+ rSt + " t og " + rSt + " min, inkludert " + rSt +
                  " min pause halvveis i testingen/" + navn + " ønsker ingen pauser under testingen. Det er de 10 obligatoriske deltestene som er brukt. " + navn + " er fulgt av " +
                  rSt + ". " + navn + " kjenner/kjenner ikke u.t. fra tidligere kontakt. " + navn + " virker ikke negativt preget av testsituasjonen. Ved spørsmål bekrefter " + navn +
                  " at har vert spent/gruet seg/gledet seg.<br>";
  var obsKontakt = html.r("*KONTAKT*: ") + " Det er lett å få kontakt med " + navn + ". H*n tar mye/noe/lite initiativ selv i samtalen. Gir utdypende svar/svarer kort/svarer unnvikende/vet ikke. Normal bruk av øyekontakt/mimikk/gester. <br>";
  var obsMotivasjon = html.r("*MOTIVASJON*: ") + navn + " virker motivert til å gjøre sitt beste, samarbeider godt og arbeider konsentrert. " + navn + " merker når oppgavene blir mer krevende, men virker ikke negativt preget ved motgang. <br>";
  var obsTale = html.r("*TALE OG SPRÅK*: ") + "Ingenting å bemerke på tale og språk.<br>";
  var obsSansMotor = html.r("*SYN, HØRSEL, MOTORIKK, TEMPO*: ") + "Normal/kort/lang responstid/økt latenstid - uavhengig av om/lengre når oppgavene er vanskelige. U.t. observerer ingen motoriske vansker. Ingen påfallende motorisk uro. " +
                  navn + " er høyrehendt/venstrehendt. Ingenting å bemerke på syn og hørsel.<br>";
  var obsTestGen = html.r("*GENERELT OM TESTSITUASJON*: ") + navn + " forstår først ikke oppgaven og gir feil svar i øvingsoppgaven, men gjør det riktig etter videre instruksjoner.<br>\
                  Ser ut til å profitere på instruksjonene gitt i øvingsoppgaven. <br>\
                  Gir utfyllende svar eller trenger mye oppfølgingsspørsmål. <br>\
                  Gir tilleggsinformasjon ved oppfølgingsspørsmål, eller ikke (svarer “vet ikke”).<br>\
                  Fortsetter å gi utfyllende svar gjennom hele deltesten eller gir kortere og mer vage svar ettersom spørsmålene blir mer vanskelige. <br>\
                  Studerer visuelt stimuli og ser ut til å planlegge, eller starter uten videre med oppgaven. <br>Selvkorrigerer hyppig avgitte svar (kan tyde på prestasjonsangst).<br>\
                  Sammenligner mye eller lite med visuelt stimulimaterialet under veis (kan gi informasjon om visuell hukommelse).<br>\
                  Responstid (og hvorvidt den avhenger av oppgavens vanskelighetsgrad). <br>\
                  Gir raskt opp ved mer vanskelige oppgaver eller viser god utholdenhet. <br>\
                  Avgir raske svar basert på farge og form, men overser avgjørende egenskaper/detaljer. <br>";
  var obsTestTm = html.r("*OBSERVASJONER FRA TERNINGMØNSTER*: ") + "Starter konsekvent med en “ankerterning” (eks alltid i høyre nederste hjørne) og bygger ut fra den.<br>\
                  Ser ut til å lære av prøving og feiling i tidlige oppgaver, eller tilnærmer seg hver oppgave vilkårlig.<br>\
                  Ferdigstiller mønsteret relativt raskt, eller sakte. Avhenger responstid av vanskelighetsgrad? <br>\
                  Sammenligner mønsteret med stimulimaterialet før endelig svar.<br>Motoriske vanskeligheter?<br>\
                  Virker nervøs? <br>Break-in-configuration error? Rotasjon? <br>\
                  Er særlig nøye med å unngå mellomrom mellom klossene eller at de ligger i linje med bordet.<br>\
                  Prøver å rotere stimulimaterialet enten direkte eller ved å endre eget perspektiv/posisjon. <br>\
                  Oppdager og retter feil i egen konstruksjon (før eller etter avgitt svar?). <br>";
  var obsTestLi = html.r("*OBSERVASJONER FRA LIKHETER*: ") + "Prestasjon i Likheter (som krever verbal respons) sammenlignet med prestasjon i Terningmønster (som krever nonverbal respons).<br>\
                  Gir tillegsinformasjon ved oppfølgignsspørsmål eller ikke (svarer “vet ikke”).<br>\
                  Svarer konsekvent at objektene ikke er like eller er motsetninger.<br>\
                  Forskjeller i prestasjon mellom Likheter og Bildekategorier kan gi informasjon om resonneringsevne i ulike modaliteter.<br>";
  var obsTestTh = html.r("*OBSERVASJONER FRA TALLHUKOMMELSE*: ") + "Bruker strategi for å huske bedre (eks. to og to tall) <br>\
                  Bytter om på tall.<br>Virker til tider uoppmerksom eller nervøs.<br>Viser tegn til dårlig hørsel (eks oppgir feil tall, men med like vokaler)<br>\
                  Avgir svar raskt eller før testleder har snakket ferdig (kan tyde på impulsivitet).<br>\
                  Gjør det bedre på Tallhukommelse forlengs enn baklengs som krever høyere bearbeiding og resekvensiering.<br>";
  var forskjeller = rSt + "Det er ikke uvanlig stor forskjell mellom noen av indeksene og alle indekser er konsistente. Resultatet vurderes derfor som et pålitelig mål på evnenivå. <br>" +
                    rSt + "Det er signifikant forskjell mellom indeksene  (" + rSt +")  og uvanlig stor sprik mellom noen av deltestene. Resultatet må derfor tolkes med forsiktighet.";
  var vurdering = rSt + "vurderinger fraser";

  var fraser = {
      observasjoner: obsGenerelt + obsKontakt + obsMotivasjon + obsTale + obsSansMotor + obsTestGen + obsTestTm + obsTestLi + obsTestTh,
      forskjeller: forskjeller,
      vurdering: vurdering
      };
  return(fraser);
}


//Henter indeksbeskrivelser
function indeksBeskrivelser() {

  //WAIS-IV Generell beskrivelse av indekser
  var wais = {
      vfi: "<i>Verbal forståelsesindeks (VFI)</i> indikerer hvor mye testpersonen har fått med seg av dagligdags kunnskap, herunder ordforråd, allmennkunnskap og forståelse av dagligdagse konvensjoner. Den krever evnen til verbal begrepsdannelse og verbal flyt. ",
      pri: "<i>Perseptuell resonneringsindeks (PRI)</i> gjenspeiler logiske evner og evnen til å forstå og bearbeide visuell informasjon. Oppgavene krever ferdigheter som ikke er lærte. Indeksen gir et mål på flytende intelligens, samt visuell intelligens. ",
      ami: "<i>Arbeidsminneindeks (AMI)</i> er et mål på arbeidsminneprosesser knyttet til manipulering av verbal presentert informasjon. Dette omhandler evnen til midlertidig å lagre informasjon for bearbeiding og for å produsere et resultat. Dette krever konsentrasjon, oppmerksomhet, selvkontroll og resonnering. ",
      phi: "<i>Prosesseringshastighetsindeks (PHI)</i> gjenspeiler evnen til visuell persepsjon og organisering, visuell scanning og bruk av finmotorikk. Dette krever selvregulering og vedvarende oppmerksomhet. Man må arbeide raskt og effektivt under press. Skåren indikerer hvordan testpersonen vil gjøre det på prestasjonsbaserte oppgaver. ",
      gai: "<i>General Ability Index (GAI)</i> er et alternativt mål på generelt evnenivå som er mindre sensitivt for testpersonens evne til å løse prestasjonsbaserte oppgaver. Skåren forteller oss i hvilken grad testpersonen kan forstå og få med seg kunnskap, men mindre om hvor effektiv testpersonen er i selve tilegnelsen og bruken av denne kunnskapen. "
  };

  //WAIS-IV Generell beskrivelse av indekser
  var wiscFir = {
      vfi: "<i>Verbal forståelsesindeks (VFI)</i> indikerer hvor mye testpersonen har fått med seg av dagligdags kunnskap, herunder ordforråd, allmennkunnskap og forståelse av dagligdagse konvensjoner. Den krever evnen til verbal begrepsdannelse og verbal flyt. ",
      pri: "<i>Perseptuell resonneringsindeks (PRI)</i> gjenspeiler logiske evner og evnen til å forstå og bearbeide visuell informasjon. Oppgavene krever ferdigheter som ikke er lærte. Indeksen gir et mål på flytende intelligens, samt visuell intelligens. ",
      ami: "<i>Arbeidsminneindeks (AMI)</i> er et mål på arbeidsminneprosesser knyttet til manipulering av verbal presentert informasjon. Dette omhandler evnen til midlertidig å lagre informasjon for bearbeiding og for å produsere et resultat. Dette krever konsentrasjon, oppmerksomhet, selvkontroll og resonnering. ",
      phi: "<i>Prosesseringshastighetsindeks (PHI)</i> gjenspeiler evnen til visuell persepsjon og organisering, visuell scanning og bruk av finmotorikk. Dette krever selvregulering og vedvarende oppmerksomhet. Man må arbeide raskt og effektivt under press. Skåren indikerer hvordan testpersonen vil gjøre det på prestasjonsbaserte oppgaver. ",
      gai: "<i>General Ability Index (GAI)</i> er et alternativt mål på generelt evnenivå som er mindre sensitivt for testpersonens evne til å løse prestasjonsbaserte oppgaver. Skåren forteller oss i hvilken grad testpersonen kan forstå og få med seg kunnskap, men mindre om hvor effektiv testpersonen er i selve tilegnelsen og bruken av denne kunnskapen. "
  };

  //WISC-V Generell beskrivelse av indekser
  var wisc = {
      vfi: "<i>Verbal forståelsesindeks (VFI)</i> er ment å gi et mål på hvor mye testpersonen har fått med seg av dagligdags kunnskap, herunder ordforråd, allmennkunnskap og forståelse av dagligdagse konvensjoner. Dette krever blant annet evnen til verbal begrepsdannelse og verbal flyt. ",
      vsi: "<i>Visuospatial indeks (VSI)</i> er ment å gi et mål på testpersonens evne til å bearbeide visuospatial informasjon ved å forstå sammenhenger mellom del og helhet, kombinere deler og trekke ut synteser. Noen av oppgavene som utgjør denne indeksen avhenger i tillegg av evnen til visuell-motorisk koordinasjon. ",
      fri: "<i>Flytende resonnering indeks (FRI)</i> er ment å gi et mål på evnen til viljestyrt og fleksibel kontroll av oppmerksomhet for å løse ukjente, umiddelbare problemer, som ikke kun avhenger av allerede innlærte vaner, skjema eller skript. Oppgavene som utgjør denne indeksen krever evne til induktiv og visuell resonnering. ",
      ahi: "<i>Arbeidshukommelse indeks (AHI)</i> er ment å gi et mål på auditiv- og visuell arbeidshukommelse. Det vil si evnen til midlertidig å lagre informasjon for bearbeiding og for å produsere et resultat. Dette krever konsentrasjon, oppmerksomhet, selvkontroll og resonnering. ",
      phi: "<i>Prosesseringshastighetindeks (PHI)</i> gjenspeiler evnen til visuell persepsjon og organisering, visuell scanning og bruk av finmotorikk. Dette krever selvregulering og vedvarende oppmerksomhet. Man må arbeide raskt og effektivt under press. Skåren indikerer hvordan testpersonen vil gjøre det på prestasjonsbaserte oppgaver. ",
      mri: "<i>Mengderesonnering (MRI)</i>",
      aai: "<i>Auditiv arbeidshukommelse (AAI</i>)",
      nvi: "<i>Nonverbal indeks (NVI)</i> er et alternativt mål på generelt evnenivå som er mindre sensitivt for testpersonens ekspressive språkferdigheter. Skåren forteller oss noe om testpersonen evne til å bearbeide visuospasial informasjon og består av oppgaver som avhenger av bearbeidingshastighet, visuell arbeidshukommelse og flytende resonneringsevne. Skåren sier mindre om opparbeidet kunnskap og verbal forståelse. ",
      gei: "<i>Grunnleggende evne indeks (GEI)</i> er et alternativt mål på generelt evnenivå som er mindre sensitivt for testpersonens evne til å løse prestasjonsbaserte oppgaver. Skåren forteller oss i hvilken grad testpersonen kan forstå og få med seg kunnskap, men mindre om hvor effektiv testpersonen er i selve tilegnelsen og bruken av denne kunnskapen. ",
      bpi: "<i>Basal prosessering indeks (BPI)</i>"
  };

  var indeksBeskrivelse = {
      wais: wais,
      wisc: wisc,
      wiscFir: wiscFir
  };

  return(indeksBeskrivelse);
}

//henter fraser for å beskrive sprik mellom deltester
function deltestSprikFr() {
  var fr = {
    en: rSt + "På denne indeksen var prestasjonen mellom deltestene så ujevn at indeksen ikke kunne vurderes som enhetlig. Her oppnådde " + navn + " sitt sterkeste resultat på deltesten ",
    tre: " Dette resultatet sto i kontrast til " + navn + " sitt svakeste deltestresultat på deltesten ",
    fir: " Det vil si bedre enn ",
    fem: " % av sine jevnaldrende.",
    seks: " På deltesten ",
    syv: "oppnår " + navn + " en skåre på "
  };
  return(fr);
}


//FRA STANDARDSKOR TIL KATEGORI
function iKat(skor) {
  if(skor === "") {
    return("*");
  }else if(skor > 130) {
    return("betydelig over gjennomsnittet");
  }else if(skor >= 116) {
    return("klart over gjennomsnittet");
  }else if(skor >= 108) {
    return("gjennomsnittets øvre del");
  }else if(skor >= 93) {
    return("gjennomsnittlig");
  }else if(skor >= 85) {
    return("gjennomsnittets nedre del");
  }else if(skor >= 70) {
    return("klart under gjennomsnittet");
  }else if(skor < 70) {
    return("betydelig under gjennomsnittet");
  }
}

//FRA DELTESTSKOR TIL KATEGORI
function dKat(skor) {
  if(skor === "") {
    return("*");
  }else if(skor >=17) {
    return("betydelig over gjennomsnittet");
  }else if(skor >= 14) {
    return("klart over gjennomsnittet");
  }else if(skor >= 12) {
    return("gjennomsnittets øvre del");
  }else if(skor >= 9) {
    return("gjennomsnittlig");
  }else if(skor >= 7) {
    return("gjennomsnittets nedre del");
  }else if(skor >= 4) {
    return("klart under gjennomsnittet");
  }else if(skor < 4) {
    return("betydelig under gjennomsnittet");
  }
}

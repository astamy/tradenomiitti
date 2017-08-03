const supportEmail = 'info@mothersinbusiness.fi';

const source = {
  common: {
    supportEmail,
    dateFormat: 'd.M.y',
    readMore: 'lue lisää',
    cancel: 'Peru',
    login: 'Kirjaudu',
    logout: 'Kirjaudu ulos',
    tabs: {
      profile: 'Oma profiili',
      settings: 'Asetukset',
      contacts: 'Käyntikortit',
    },
    selectFilters: {
      domain: 'Valitse toimiala',
      position: 'Valitse tehtäväluokka',
      location: 'Valitse maakunta',
    },
    lengthHint: {
      needsNMoreChars: 'Vielä vähintään {.} merkkiä',
      fitsAtMostNCharsMore: 'Enää korkeintaan {.} merkkiä',
      tooLongByNChars: '{.} merkkiä liian pitkä',
    },
  },
  ad: {
    requestFailed: 'Ilmoituksen haku epäonnistui',
    noAnswersYet: 'Tällä ilmoituksella ei ole vielä yhtään vastausta',
    noAnswersHint: 'Lisää omasi ylhäällä',
    answerCount: {
      0: {
        heading: 'Tähän ilmoitukseen ei ole vastattu kertaakaan',
        hint: 'Kirjaudu sisään ja ole ensimmäinen',
      },
      1: {
        heading: 'Tällä ilmoituksella on yksi vastaus',
        hint: 'Kirjaudu sisään nähdäksesesi sen ja lisää omasi',
      },
      n: {
        heading: 'Tähän ilmoitukseen on vastattu {.} kertaa',
        hint: 'Kirjaudu sisään nähdäksesi vastaukset ja lisää omasi',
      },
    },
    leaveAnswerBox: {
      placeholder: 'Kirjoita napakka vastaus',
      submit: 'Jätä vastaus',
    },
    leaveAnswerPrompt: {
      isAsker: 'Muut käyttäjät voivat vastata ilmoitukseesi tällä sivulla. Näet vastaukset alla kun niitä tulee.',
      hasAnswered: 'Olet vastannut tähän ilmoitukseen. Kiitos kun autoit kanssamibiläistäsi!',
      hint: 'Kokemuksellasi on aina arvoa. Jaa näkemyksesi vastaamalla ilmoitukseen.',
      answerTooltip: 'Voit vastata muiden esittämiin kysymyksiin kerran',
      cannotAnswerTooltip: 'Et voi vastata tähän kysymykseen',
      submit: 'Vastaa ilmoitukseen',
    },
  },
  contacts: {
    heading: 'Käyntikortit',
  },
  createAd: {
    headingInputPlaceholder: 'Otsikko',
    adInputPlaceholder: 'Kirjoita ytimekäs ilmoitus',
    filtersHeading: 'Kenen toivot vastaavan?',
    filtersInfo: 'Valitsemalla toimialan tai tehtävän varmistat, että kysymyksesi löytää vastaajansa. Valittu kohderyhmä saa myös ilmoituksesi sähköpostina.',
    submit: 'Julkaise ilmoitus',
    successHeading: 'Lähetys onnistui',
    successAdId: 'Ilmoituksen numero on: ',
    successContinue: 'Paina selaimesi päivitä-nappulaa jatkaaksesi',
    errorHeading: 'Jotain meni pieleen',
    errorContinue: 'Ole hyvä ja lataa sivu uudelleen',
  },
  errors: {
    badUrl: 'BadUrl ',
    timeout: 'Vastauksen saaminen kesti liian kauan, yritä myöhemmin uudelleen',
    networkError: 'Yhteydessä on ongelma, yritä myöhemmin uudelleen',
    badPayload: 'Jotain meni pieleen. Verkosta tuli\n\n{.}\n\nja virhe oli\n\n{.}',
    badStatus: `Haettua sisältöä ei löytynyt. Se on voitu poistaa tai osoitteessa voi olla virhe. Voit ottaa yhteyttä osoitteeseen ${supportEmail} halutessasi. Ota silloin kuvakaappaus sivusta ja lähetä se viestin liitteenä. {.}`,
    codeToUserVisibleMessage: `Jotain meni pieleen. Virheen tunnus on {.}. Meille olisi suuri apu, jos otat kuvakaappauksen koko sivusta ja lähetät sen osoitteeseen ${supportEmail}.`,
    errorResponseFailure: '{.} Järjestelmässä on jotain pahasti pielessä, tutkimme asiaa',
  },
  footer: {
    link1: {
      url: 'http://www.mothersinbusiness.fi',
      text: 'Mothers in Business MiB ry',
    },
    link2: {
      url: 'http://www.mothersinbusiness.fi/jaseneksi/',
      text: 'Liity jäseneksi',
    },
    link3: {
      url: 'http://www.mothersinbusiness.fi/yhteys/',
      text: 'Ota yhteyttä',
    },
    linkStats: {
      text: 'Tilastoja',
    },
    socialButton: {
      facebookUrl: 'https://www.facebook.com/mibsuomi',
      twitterUrl: 'https://twitter.com/MiB_ry',
      linkedinUrl: 'https://www.linkedin.com/company/mothers-in-business-mib-ry',
      githubUrl: 'https://github.com/futurice/mibit',
    },
  },
  home: {
    introbox: {
      heading: 'Löydä mibiläinen',
      createProfile: 'Luo oma profiili',
      content: 'MiBiT on mibiläisten oma kohtaamispaikka, jossa yhdistyvät inspiroivat kohtaamiset, vertaistuki ja itsensä kehittäminen. Voit löytää etsimäsi MiB-kontaktin tai tulla itse löydetyksi juuri sinunkaltaistasi henkilöä etsivälle.',
    },
    tradenomiittiInfo: {
      // \xad === &shy;, that is soft hyphen
      heading: 'Ko\xADke\xADmuk\xADsel\xADla\xADsi on aina arvoa',
      paragraph1: 'MiB in Touch eli MiBiT on mibiläisten oma kohtaamispaikka, joka yhdistää MiB ry:n jäsenet ympäri Suomen. Kaipaatko vertaistukea, haluatko tutustua samalla alalla oleviin muihin äiteihin vai löytää samanhenkistä seuraa tietyltä alueelta? MiBiT yhdistää! Voit huhuilla kahvitteluseuraa perhevapaiden aikana, sopia lähialueen Minglejä, etsiä vertaistukea ruuhkavuosiin tai vaikka mentoria uudelle urallesi. Tule mukaan voimaannuttavaan verkostoon!',
      paragraph2: 'Luomalla profiilin pääset alkuun, loput on itsestäsi kiinni.',
    },
    listAds: {
      heading: 'Uusimmat ilmoitukset',
      buttonListAds: 'katso kaikki ilmoitukset',
      buttonCreateAd: 'jätä ilmoitus',
    },
    listUsers: {
      heading: 'Löydä mibiläinen',
      buttonListUsers: 'Katso kaikki mibiläiset',
      buttonEditProfile: 'Muokkaa omaa profiilia',
      buttonCreateProfile: 'Luo oma profiili',
    },
  },
  listAds: {
    heading: 'Selaa ilmoituksia',
    sort: {
      date: 'Päivämäärä',
      answerCount: 'Vastauksia',
      newestAnswer: 'Uusin vastaus',
    },
  },
  listUsers: {
    heading: 'Selaa mibiläisiä',
    sort: {
      activity: 'Aktiivisuus',
      name: 'Nimi',
    },
    filters: {
      institute: 'Valitse oppilaitos',
      specialization: 'Valitse suuntautuminen / pääaine',
      skill: 'Valitse taito',
    },
  },
  loginNeeded: {
    heading: 'Kirjaudu sisään',
    info: 'MiBiT on ainutlaatuinen kohtaamispaikka Mothers in Business MiB ry:n jäsenille. Sinun tulee kirjautua sisään MiB-tunnuksillasi, jotta voit luoda profiilin ja toimia MiBiTissä.',
    joinHeading: 'Etkö ole vielä Mothers in Business MiB ry:n jäsen?',
    joinUrl: 'http://www.mothersinbusiness.fi/jaseneksi/',
    joinLink: 'Liity jäseneksi',
  },
  main: {
    profile: 'Profiili',
    login: 'Kirjaudu',
    consentNeeded: {
      heading: 'Tervetuloa MiBiTiin!',
      content: 'Tehdäksemme palvelun käytöstä mahdollisimman vaivatonta hyödynnämme Mothers in Business MiB ry:n olemassa olevia jäsentietoja (nimesi). Luomalla profiilin hyväksyt tietojesi käytön MiBiTissä. Voit muokata tietojasi myöhemmin.',
      iAcceptThe: 'Hyväksyn palvelun ',
      terms: 'käyttöehdot',
      createProfile: 'Luo profiili',
    },
    splashScreen: {
      logoWidth: '400px',
    },
    notImplementedYet: 'Tätä ominaisuutta ei ole vielä toteutettu',
  },
  navigation: {
    sr_open: 'Navigaation avaus',
    logoAlt: 'Logo',
    logoWidth: '44px',
    routeNames: {
      user: 'Käyttäjä {.}',
      profile: 'Oma Profiili',
      home: 'Home',
      info: 'Tietoa',
      notFound: 'Ei löytynyt',
      listUsers: 'Mibiläiset',
      listAds: 'Ilmoitukset',
      createAd: 'Jätä ilmoitus',
      showAd: 'Ilmoitus {.}',
      loginNeeded: 'Kirjautuminen vaaditaan',
      terms: 'Palvelun käyttöehdot',
      registerDescription: 'Rekisteriseloste',
      settings: 'Asetukset',
      contacts: 'Käyntikortit',
    },
  },
  profile: {
    editProfile: {
      heading: 'Muokkaa profiilia',
      hint: 'Tehdäksemme MiBiTin käytöstä sinulle mahdollisimman vaivatonta, olemme luoneet sinulle profiilin Mothers in Business MiB ry:n jäsentietojen perusteella. Viimeistele profiilisi tarkastamalla jäsentietosi, muokkaamalla julkista profiiliasi ja täyttämällä henkilökohtainen käyntikorttisi.',
      nickNameMandatory: 'Kutsumanimi on pakollinen',
      buttonSave: 'Tallenna profiili',
      buttonEdit: 'Muokkaa profiilia',
    },
    membershipInfo: {
      profileUsesMembershipInfo: 'Profiilissa hyödynnetään liiton jäsentietoja. Tarkistathan, että tietosi ovat järjestelmässämme ajan tasalla. ',
      notVisibleAsIs: 'Jäsentiedot eivät näy sellaisenaan muille.',
      buttonUpdateInfo: 'päivitä jäsentiedot',
    },
    publicInfo: {
      heading: 'Julkiset tiedot',
      hint: 'Valitse itsellesi käyttäjänimi (yleisimmin etunimi) ja kuvaava titteli. Esittele itsesi ja osaamisesi muille kuvaavalla tekstillä',
    },
    businessCard: {
      heading: 'Käyntikortti',
      hint: 'Täydennä alle tiedot, jotka haluat lähettää käyntikortin mukana. ',
      visibleForRecipients: 'Tiedot näkyvät vain niille, joille olet lähettänyt kortin',
      notFound: 'Käyntikorttia ei löytynyt',
    },
    businessCardFields: {
      name: 'Koko nimi',
      title: 'Titteli, Työpaikka',
      location: 'Paikkakunta',
      phone: 'Puhelinnumero',
      email: 'Sähköposti',
      linkedIn: 'LinkedIn-linkki',
    },
    competences: {
      editHeading: 'Muokkaa osaamistasi',
      hint: 'Kerro osaamisestasi valitsemalla toimiala, tehtäväluokka ja taitosi. Näin MiBiT voi palvellla sinua paremmin ja jotta muut mibiläiset löytävät sinut helpommin. Osaaminen näkyy kaikille käyttäjille.',
      visibleForEveryone: 'Osaaminen näkyy kaikille käyttäjille.',
    },
    ownProfile: {
      notLoggedIn: 'Et ole kirjautunut',
    },
    educations: {
      heading: 'Koulutus',
      institute: 'Oppilaitos',
      degree: 'Tutkintonimike',
      major: 'Koulutus',
      specialization: 'Suuntautuminen / pääaine',
    },
    viewUser: {
      showAllActivity: 'Näytä kaikki aktiivisuus',
      activity: 'Aktiivisuus',
    },
    editProfileBox: {
      hint: 'Onhan profiilisi ajan tasalla? Mielenkiintoinen ja aktiivinen profiili auttaa luomaan kontakteja',
      editProfile: 'Muokkaa profiilia',
    },
    userInfoBox: {
      nickNamePlaceholder: 'Miksi kutsumme sinua?',
      titlePlaceholder: 'Titteli',
    },
    userDescriptionPlaceholder: 'Kirjoita napakka kuvaus itsestäsi',
    userIdForAdmins: 'Jäsentunniste: ',
    userDomains: {
      heading: 'Toimiala',
      question: 'Valitse toimialat, joista olet kiinnostunut tai sinulla on kokemusta',
      selectDomain: 'Valitse toimiala',
      selectDomainHint: 'Lisää toimiala, josta olet kiinnostunut tai sinulla on osaamista',
    },
    userSkills: {
      heading: 'Osaaminen',
      question: 'Mitä taitoja sinulla on?',
      addSkill: 'Lisää taito',
      selectSkill: 'Valitse taito',
    },
    userPositions: {
      heading: 'Tehtäväluokka',
      question: 'Missä tehtävissä olet toiminut tai haluaisit toimia?',
      selectPosition: 'Valitse tehtäväluokka',
      selectPositionHint: 'Lisää tehtäväluokka, josta olet kiinnostunut tai sinulla on osaamista',
    },
    educationsEditing: {
      hint: 'Lisää koulutus. Valitse omaa koulutustasi parhaiten vastaavat vaihtoehdot. Mikäli oppilaitoksesi on vaihtanut nimeä, valitse nykyisen nimen mukainen oppilaitos. Mikäli valikoista ei löydy oikeaa vaihtoehtoa, voit lisätä sen itse.',
      selectInstitute: 'Valitse oppilaitos',
      selectDegree: 'Valitse tutkintonimike',
      selectMajor: 'Valitse koulutusala / koulutusohjelma',
      selectSpecialization: 'Valitse suuntautuminen / pääaine',
      addEducation: 'Lisää koulutus',
      instituteRequired: 'Oppilaitos on pakollinen tieto',
    },
    membershipRegisterInfo: {
      heading: 'MiB:n jäsentiedot',
      nickName: 'Kutsumanimi',
      firstName: 'Etunimi',
      lastName: 'Sukunimi',
      positions: 'Tehtäväluokat',
      domains: 'Toimiala',
      email: 'Sähköposti',
      phone: 'Matkapuhelinnumero',
      location: 'Maakunta',
      missingData: 'Jäsentiedot puuttuvat',
    },
  },
  removal: {
    removeYour: {
      ad: 'Poista oma ilmoituksesi',
      answer: 'Poista oma vastauksesi',
    },
    iWantToRemoveMy: {
      ad: 'Haluan poistaa ilmoitukseni',
      answer: 'Haluan poistaa vastaukseni',
    },
    confirmationText: {
      ad: 'Tämä poistaa ilmoituksen ja kaikki siihen tulleet vastaukset pysyvästi. Oletko varma?',
      answer: 'Tämä poistaa vastauksen pysyvästi. Oletko varma?',
    },
  },
  settings: {
    heading: 'Asetukset',
    emailsHeading: 'Sähköpostit',
    emailsInfo: 'Voit itse valita missä tilanteissa MiBiT lähettää sinulle viestin sähköpostitse. Sähköposti varmistaa sen, että saat tiedon uusista kontakteista, sinua koskevista ilmoituksista ja saamistasi vastauksista.',
    emailAddress: 'Sähköpostiosoite',
    emailsForBusinesscards: 'Ilmoitus uudesta kontaktista/käyntikortista',
    emailsForAnswers: 'Ilmoitus uudesta vastauksesta jättämääsi kysymykseen',
    emailsForNewAds: 'Kootut sinulle suunnatut ilmoitukset (viikottainen)',
    buttonSave: 'Tallenna',
    sending: 'Tallenetaan…',
    success: 'Tallennus onnistui',
    error: 'Tallenuksessa meni jotain pieleen',
  },
  skill: {
    interested: 'Kiinnostunut',
    beginner: 'Vasta-alkaja',
    experienced: 'Osaaja',
    pro: 'Konkari',
  },
  user: {
    contactUser: {
      alreadySent: 'Olet lähettänyt käyntikortin tälle mibiläiselle.',
      mustContainPhoneOrEmail: 'Käyntikortissasi täytyy olla vähintään puhelinnumero tai sähköpostiosoite, jotta voisit lähettää sen',
      businessCardIsAttached: 'Viestin mukana lähetät käyntikortin',
      editOrContactUserPrompt: 'Kirjoita napakka esittelyteksti',
      contactUserPlaceholder: 'Vähintään 10 merkkiä',
      hint: 'Voisiko {.} auttaa sinua? Jaa käyntikorttisi tästä. ',
      contact: 'Ota yhteyttä',
      submit: 'Lähetä',
    },
  },
};


// transform into flat object with keys like "home.introbox.createProfile"
function flatten(object) {
  const flat = {};
  Object.keys(object).forEach(key => {
    if (typeof object[key] === 'object') {
      const innerFlat = flatten(object[key]);
      Object.keys(innerFlat).forEach(innerKey => {
        flat[`${key}.${innerKey}`] = innerFlat[innerKey];
      });
    } else {
      flat[key] = object[key];
    }
  });
  return flat;
}

const flatObject = flatten(source);
const list = Object.keys(flatObject).map(key => [key, flatObject[key]]);

export default list;
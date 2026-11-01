    const form = document.querySelector('#friend-form');
    const signupForm = document.querySelector('#signup-form');
    const startupScreen = document.querySelector('#startup-screen');
    const startFriendsListButton = document.querySelector('#start-friends-list');
    const showCreditsButton = document.querySelector('#show-credits');
    const startupMessage = document.querySelector('#startup-message');
    const saveSlotList = document.querySelector('#save-slot-list');
    const signupScreen = document.querySelector('#signup-screen');
    const friendsApp = document.querySelector('#friends-app');
    const titleIcon = document.querySelector('#title-icon');
    const windowTitle = document.querySelector('#window-title');
    const logoutButton = document.querySelector('#logout-button');
    const signupName = document.querySelector('#signup-name');
    const signupMessage = document.querySelector('#signup-message');
    const signupPictureMenu = document.querySelector('#signup-picture');
    const signupPreview = document.querySelector('#signup-preview');
    const signupBio = document.querySelector('#signup-bio');
    const signupHeading = document.querySelector('#signup-heading');
    const signupSubtitle = document.querySelector('#signup-subtitle');
    const signupSubmit = document.querySelector('#signup-submit');
    const editProfileButton = document.querySelector('#edit-profile');
    const celebrityModeButton = document.querySelector('#celebrity-mode');
    const myProfile = document.querySelector('#my-profile');
    const levelDisplay = document.querySelector('#level-display');
    const levelLabel = document.querySelector('#level-label');
    const xpBarFill = document.querySelector('#xp-bar-fill');
    const input = document.querySelector('#friend-name');
    const friendMessage = document.querySelector('#friend-message');
    const list = document.querySelector('#friends-list');
    const count = document.querySelector('#friend-count');
    const requestArea = document.querySelector('#friend-request');
    const achievementArea = document.querySelector('#achievement-area');
    const statusArea = document.querySelector('#status-area');
    const clippyAssistant = document.querySelector('#clippy-assistant');
    const clippySpeech = document.querySelector('#clippy-speech');
    const clippyButton = document.querySelector('#clippy-button');
    const achievementsPanel = document.querySelector('#achievements-panel');
    const achievementsList = document.querySelector('#achievements-list');
    const achievementProgress = document.querySelector('#achievement-progress');
    const showAchievementsButton = document.querySelector('#show-achievements');
    const closeAchievementsButton = document.querySelector('#close-achievements');
    const creditsPanel = document.querySelector('#credits-panel');
    const closeCreditsButton = document.querySelector('#close-credits');
    const showThemesButton = document.querySelector('#show-themes');
    const themesMenu = document.querySelector('#themes-menu');
    const themeSelect = document.querySelector('#theme-select');
    const friendsSort = document.querySelector('#friends-sort');
    const themeFade = document.querySelector('#theme-fade');
    const startupSound = document.querySelector('#startup-sound');
    const signupSound = document.querySelector('#signup-sound');
    const logoutSound = document.querySelector('#logout-sound');
    const gangsterAudio = document.querySelector('#gangster-audio');
    const xbox360Audio = document.querySelector('#xbox360-audio');
    const nightAudio = document.querySelector('#night-audio');
    const steamAudio = document.querySelector('#steam-audio');
    const halflifeAudio = document.querySelector('#halflife-audio');
    const passionAudio = document.querySelector('#passion-audio');
    const gmodAudio = document.querySelector('#gmod-audio');
    const notificationSound = document.querySelector('#notification-sound');
    const achievementSound = document.querySelector('#achievement-sound');
    const specialAchievementSound = document.querySelector('#special-achievement-sound');
    const requestSentSound = document.querySelector('#request-sent-sound');
    const requestAcceptedSound = document.querySelector('#request-accepted-sound');
    const rareRequestAcceptedSound = document.querySelector('#rare-request-accepted-sound');
    const requestDeclinedSound = document.querySelector('#request-declined-sound');
    const usernamesData = { textContent: window.friend7UsernamesData || '' };
    const iconNumbers = Array.from({ length: 1207 }, (_, index) => index + 1);
    const randomProfilePicture = (usedPictures = new Set()) => {
      const availablePictures = iconNumbers
        .map((number) => `icons/${number}.png`)
        .filter((picture) => !usedPictures.has(picture));
      const pictures = availablePictures.length ? availablePictures : iconNumbers.map((number) => `icons/${number}.png`);
      return pictures[Math.floor(Math.random() * pictures.length)];
    };
    // specified profile pictures for select users
    const specialProfiles = {
      'bill gates': 'icons/special/billgates.png',
      vallu: 'icons/special/vallu.png',
      'gabe newell': 'icons/special/gabe.png',
      '10000 angry bees': 'icons/special/bees.png',
      hacker: 'icons/special/hacker.png',
      'gordon freeman': 'icons/special/gordon.png',
      mlg: 'icons/special/mlg.png',
      'sugar free euroshopper': 'icons/special/es.png',
      'chef lunden': 'icons/special/cheflunden.png',
      microsoft: 'icons/special/microsoft.png',
      drake: 'icons/special/drake.png',
      xaviersobased: 'icons/special/xaviersobased.png',
      'yung lean': 'icons/special/yunglean.png',
      n6mer: 'icons/special/n6mer.png',
      alper: 'icons/special/alper.png',
      'big bob': 'icons/special/bigbob.png',
      'super win': 'icons/special/superwin.png',
      valve: 'icons/special/valve.png',
      scarface: 'icons/special/scarface.png',
      mxbq: 'icons/special/mxbq.png',
      mrbeast6000: 'icons/special/mrbeast6000.png',
      notch: 'icons/special/notch.png',
      steve: 'icons/special/steve.png',
      herobrine: 'icons/special/herobrine.png',
      illuminati: 'icons/special/illuminati.png',
      'steve jobs': 'icons/special/stevejobs.png',
      noki: 'icons/special/noki.png',
      chrisfromdao: "icons/special/chris.png",
      masle: "icons/special/masle.png",
      'valeria phoenix pin': "icons/special/valeria.png",
      'puneet ballabh': "icons/special/puneet.png",
      breezetix: "icons/special/breezetix.png",
      bettonn: "icons/special/bettonn.png",
      justxrexx: "icons/special/rex.png",
      bzixwenchu: "icons/special/wenchu.png",
      annie: "icons/special/annie.png",
      bella: "icons/special/bella.png",
      elio: "icons/special/elio.png",
      rupaw: "icons/special/rupaw.png",
      vpk: "icons/special/vpk.png",
      dew: "icons/special/dew.png",
      misho: "icons/special/misho.png",
      kit: "icons/special/kit.png",
      heapy: "icons/special/heapy.png",
      franssis: "icons/special/franssis.png",
      ghastyy: "icons/special/ghastyy.png",
      heapy: "icons/special/heapy.png",
      cloaker: "icons/special/cloaker.png",
      broom: "icons/special/broom.png",
      aiko: "icons/special/aiko.png",
      'linus torvalds': "icons/special/linux.png",
      bladee: "icons/special/bladee.png",
      ecco2k: "icons/special/ecco2k.png",
      'thaiboy digital': "icons/special/thaiboy.png",
      'vitun luumu': "icons/special/luumu.png",
      osamason: "icons/special/osamason.png",
      'chief keef': "icons/special/keef.png",
      github: "icons/special/github.png",
      spotify: "icons/special/spotify.png",
      soundcloud: "icons/special/soundcloud.png",
      google: "icons/special/google.png",
      youareanidiot: "icons/special/idiot.png",
      discord: "icons/special/discord.png",
      faze: "icons/special/faze.png",
      friend7_hater: "icons/special/friend7hater.png",
      adobe: "icons/special/adobe.png",
      phoon: "icons/special/phoon.png",
      '[ content deleted ]': "icons/special/contentdeleted.png",
      roblox: "icons/special/roblox.png",
      doge: "icons/special/doge.png",
      pewdiepie: "icons/special/pewdiepie.png",
      jacksepticeye: "icons/special/jacksepticeye.png",
      markiplier: "icons/special/markiplier.png",
      'dinnerbone': "icons/special/dinnerbone.png",
      ripsquad: "icons/special/ripsquad.png",
      '1exposed': "icons/special/1exposed.png",
      bonzibuddy: "icons/special/bonzibuddy.png",
      youtube: "icons/special/youtube.png",
      twikipedia: "icons/special/twikipedia.png",
      icedancer: "icons/special/icedancer.png",
      eversince: "icons/special/eversince.png",
      rainworld: "icons/special/rainworld.png",
      fakeadministrator: "icons/special/fakeadmin.png",
      troll: "icons/special/troll.png",
      turbomursu: "icons/special/turbomursu.png",
      administrator: "icons/special/admin.png",
      homeboy: "icons/special/homeboy.png",
      'faze banks': "icons/special/banks.png",
      spongebob: "icons/special/spongebob.png",
      'yami leke': "icons/special/yami.png",
      masleana: "icons/special/masleana.png"
    };
    Object.assign(specialProfiles, {
      'mrjepa': 'icons/special/mrjepa.png',
      'reddit': 'icons/special/reddit.png',
      '4chan': 'icons/special/4chan.png',
      'anonymous': 'icons/special/anonymous.png',
      'mojang': 'icons/special/mojang.png',
      'minecraft': 'icons/special/minecraft.png',
      'monster': 'icons/special/monster.png',
      'clarkson': 'icons/special/clarkson.png',
      'hammond': 'icons/special/hammond.png',
      'g-man': 'icons/special/g-man.png',
      'trump': 'icons/special/trump.png',
      'doctor kleiner': 'icons/special/doctor-kleiner.png',
      'alyx vance': 'icons/special/alyx-vance.png',
      'barney': 'icons/special/barney.png',
      'jupe': 'icons/special/jupe.png',
      'python': 'icons/special/python.png',
      'epic games': 'icons/special/epic-games.png',
      'fortnite': 'icons/special/fortnite.png',
      'tim sweeney': 'icons/special/tim-sweeney.png',
      'nintendo': 'icons/special/nintendo.png',
      'fuck ass little dog': 'icons/special/fuck-ass-little-dog.png',
      'foenem': 'icons/special/foenem.png',
      'homer simpson': 'icons/special/homer-simpson.png',
      'bart simpson': 'icons/special/bart-simpson.png',
      'marge simpson': 'icons/special/marge-simpson.png',
      'lisa simpson': 'icons/special/lisa-simpson.png',
      'maggie simpson': 'icons/special/maggie-simpson.png',
      'peter griffin': 'icons/special/peter-griffin.png',
      'lois griffin': 'icons/special/lois-griffin.png',
      'meg griffin': 'icons/special/meg-griffin.png',
      'stewie griffin': 'icons/special/stewie-griffin.png',
      'brian griffin': 'icons/special/brian-griffin.png',
      'chris griffin': 'icons/special/chris-griffin.png',
      'walter white': 'icons/special/walter-white.png',
      'heisenberg': 'icons/special/heisenberg.png',
      'gustavo fring': 'icons/special/gustavo-fring.png',
      'mike ehrmantraut': 'icons/special/mike-ehrmantraut.png',
      'jeff bezos': 'icons/special/jeff-bezos.png',
      'red bull': 'icons/special/red-bull.png',
      'odens': 'icons/special/odens.png',
      'greatest': 'icons/special/greatest.png',
      'vlc': 'icons/special/vlc.png',
      'obs': 'icons/special/obs.png',
      'subway': 'icons/special/subway.png',
      'burger king': 'icons/special/burger-king.png',
      'wendys': 'icons/special/wendys.png',
      'wingstop': 'icons/special/wingstop.png',
      'pizza hut': 'icons/special/pizza-hut.png',
      'dominos': 'icons/special/dominos.png',
      'justin bieber': 'icons/special/justin-bieber.png',
      'jesse pinkman': 'icons/special/jesse-pinkman.png',
      'nicki minaj': 'icons/special/nicki-minaj.png',
      'the weeknd': 'icons/special/the-weeknd.png',
      'taylor swift': 'icons/special/taylor-swift.png',
      'ed sheeran': 'icons/special/ed-sheeran.png',
      'macklemore': 'icons/special/macklemore.png',
      'dj nate': 'icons/special/dj-nate.png',
      'young thug': 'icons/special/young-thug.png',
      'migos': 'icons/special/migos.png',
      'asap rocky': 'icons/special/asap-rocky.png',
      'lil b': 'icons/special/lil-b.png',
      'joeyy': 'icons/special/joeyy.png',
      'playboi carti': 'icons/special/playboi-carti.png',
      'nettspend': 'icons/special/nettspend.png',
      'cartier god': 'icons/special/cartier-god.png',
      'novagang': 'icons/special/novagang.png',
      'ways': 'icons/special/ways.png',
      'yung sherman': 'icons/special/yung-sherman.png',
      'whitearmor': 'icons/special/whitearmor.png',
      'pitbull': 'icons/special/pitbull.png',
      'crypto': 'icons/special/crypto.png',
      'frank ocean': 'icons/special/frank-ocean.png',
      'twitter': 'icons/special/twitter.png',
      'ronaldo': 'icons/special/ronaldo.png',
      'messi': 'icons/special/messi.png',
      'kai cenat': 'icons/special/kai-cenat.png',
      'ishowspeed': 'icons/special/ishowspeed.png',
      'lebron james': 'icons/special/lebron-james.png',
      'steph curry': 'icons/special/steph-curry.png',
      'kobe bryant': 'icons/special/kobe-bryant.png',
      'micheal jordan': 'icons/special/micheal-jordan.png',
      'fanta': 'icons/special/fanta.png',
      'mountain dew': 'icons/special/mountain-dew.png',
      'doritos': 'icons/special/doritos.png',
      'coca cola': 'icons/special/coca-cola.png',
      'sprite': 'icons/special/sprite.png',
      'pepsi': 'icons/special/pepsi.png',
      'snoop dogg': 'icons/special/snoop-dogg.png',
      'soulja boy': 'icons/special/soulja-boy.png',
      'xbox': 'icons/special/xbox.png',
      'playstation': 'icons/special/playstation.png',
      'sony': 'icons/special/sony.png',
      'steam': 'icons/special/steam.png',
      'rockstar': 'icons/special/rockstar.png',
      'apple': 'icons/special/apple.png',
      'samsung': 'icons/special/samsung.png',
      'supreme': 'icons/special/supreme.png',
      'nokia': 'icons/special/nokia.png',
      'number nine': 'icons/special/number-nine.png',
      'louis vuitton': 'icons/special/louis-vuitton.png',
      'chrome hearts': 'icons/special/chrome-hearts.png',
      'ralph lauren': 'icons/special/ralph-lauren.png',
      'true religion': 'icons/special/true-religion.png',
      'calvin klein': 'icons/special/calvin-klein.png',
      'pringles': 'icons/special/pringles.png',
      'markorepairs': 'icons/special/markorepairs.png',
      'vine': 'icons/special/vine.png',
      'tiktok': 'icons/special/tiktok.png',
      'logan paul': 'icons/special/logan-paul.png',
      'joe rogan': 'icons/special/joe-rogan.png',
      'jake paul': 'icons/special/jake-paul.png',
      'franklin': 'icons/special/franklin.png',
      'trevor': 'icons/special/trevor.png',
      'michael': 'icons/special/michael.png',
      'niko bellic': 'icons/special/niko-bellic.png',
      'glados': 'icons/special/glados.png',
      'barack obama': 'icons/special/barack-obama.png',
      'conor mcgregor': 'icons/special/conor-mcgregor.png',
      'michelle obama': 'icons/special/michelle-obama.png',
      'floyd mayweather': 'icons/special/floyd-mayweather.png',
      'jesus': 'icons/special/jesus.png',
      'satan': 'icons/special/satan.png',
      'joe biden': 'icons/special/joe-biden.png',
      'george bush': 'icons/special/george-bush.png',
      'kyle broflovski': 'icons/special/kyle-broflovski.png',
      'eric cartman': 'icons/special/eric-cartman.png',
      'kenny mccormick': 'icons/special/kenny-mccormick.png',
      'stan marsh': 'icons/special/stan-marsh.png',
      'wendy testaburger': 'icons/special/wendy-testaburger.png',
      'joe swanson': 'icons/special/joe-swanson.png',
      'glenn quagmire': 'icons/special/glenn-quagmire.png',
      'cleveland brown': 'icons/special/cleveland-brown.png',
      'ted': 'icons/special/ted.png',
      'whatsapp': 'icons/special/whatsapp.png',
      'telegram': 'icons/special/telegram.png',
      'facebook': 'icons/special/facebook.png',
      'instagram': 'icons/special/instagram.png',
      'snapchat': 'icons/special/snapchat.png',
      'elon musk': 'icons/special/elon-musk.png',
      'zachxbt': 'icons/special/zachxbt.png',
      'paypal': 'icons/special/paypal.png',
      'cashapp': 'icons/special/cashapp.png',
      'venmo': 'icons/special/venmo.png',
      'zelle': 'icons/special/zelle.png',
      'visa': 'icons/special/visa.png',
      'mastercard': 'icons/special/mastercard.png',
      'binance': 'icons/special/binance.png',
      'kraken': 'icons/special/kraken.png',
      'dogecoin': 'icons/special/dogecoin.png',
      'litecoin': 'icons/special/litecoin.png',
      'bitcoin': 'icons/special/bitcoin.png',
      'ethereum': 'icons/special/ethereum.png',
      'razer': 'icons/special/razer.png',
      'logitech': 'icons/special/logitech.png',
      'steelseries': 'icons/special/steelseries.png',
      'alienware': 'icons/special/alienware.png',
      'clippy': 'icons/special/clippy.png',
      'dog': 'icons/special/dog.png',
      'cat': 'icons/special/cat.png',
      'villager': 'icons/special/villager.png',
      'garry newman': 'icons/special/garry-newman.png',
      'doom': 'icons/special/doom.png',
      'walmart': 'icons/special/walmart.png',
      '711': 'icons/special/711.png',
      'target': 'icons/special/target.png',
      'cvs': 'icons/special/cvs.png',
      'heavy': 'icons/special/heavy.png',
      'spy': 'icons/special/spy.png',
      'scout': 'icons/special/scout.png',
      'engineer': 'icons/special/engineer.png',
      'soldier': 'icons/special/soldier.png',
      'demoman': 'icons/special/demoman.png',
      'medic': 'icons/special/medic.png',
      'pyro': 'icons/special/pyro.png',
      'sniper': 'icons/special/sniper.png',
    });
    const profilePictureFor = (name) => {
      const normalizedName = name.trim().toLowerCase();
      const specialPicture = specialProfiles[normalizedName];
      if (specialPicture) return specialPicture;
      return randomProfilePicture();
    }
    // rare users
    const rareUsernames = new Set([
      'vallu', 'gabe newell', 'microsoft', 'bill gates', 'steve jobs', 'steve',
      'herobrine', 'notch', 'illuminati', 'mrbeast6000', 'scarface', 'valve',
      'drake', 'hacker', 'bladee', 'ecco2k', 'thaiboy digital',
      'osamason', 'chief keef', 'github', 'spotify', 'soundcloud',
      'google', 'faze', 'discord', 'adobe', 'roblox', 'pewdiepie',
      'jacksepticeye', 'markiplier', 'youtube', 'troll', 'administrator',
      'faze banks', 'spongebob', 'xaviersobased',
      ...[
        'mrjepa',
        'reddit',
        '4chan',
        'anonymous',
        'mojang',
        'minecraft',
        'monster',
        'clarkson',
        'hammond',
        'g-man',
        'trump',
        'doctor kleiner',
        'alyx vance',
        'barney',
        'jupe',
        'python',
        'epic games',
        'fortnite',
        'tim sweeney',
        'nintendo',
        'fuck ass little dog',
        'foenem',
        'homer simpson',
        'bart simpson',
        'marge simpson',
        'lisa simpson',
        'maggie simpson',
        'peter griffin',
        'lois griffin',
        'meg griffin',
        'stewie griffin',
        'brian griffin',
        'chris griffin',
        'walter white',
        'heisenberg',
        'gustavo fring',
        'mike ehrmantraut',
        'jeff bezos',
        'red bull',
        'odens',
        'greatest',
        'vlc',
        'obs',
        'subway',
        'burger king',
        'wendys',
        'wingstop',
        'pizza hut',
        'dominos',
        'justin bieber',
        'jesse pinkman',
        'nicki minaj',
        'the weeknd',
        'taylor swift',
        'ed sheeran',
        'macklemore',
        'dj nate',
        'young thug',
        'migos',
        'asap rocky',
        'lil b',
        'joeyy',
        'playboi carti',
        'nettspend',
        'cartier god',
        'novagang',
        'ways',
        'yung sherman',
        'whitearmor',
        'pitbull',
        'crypto',
        'frank ocean',
        'twitter',
        'ronaldo',
        'messi',
        'kai cenat',
        'ishowspeed',
        'lebron james',
        'steph curry',
        'kobe bryant',
        'micheal jordan',
        'fanta',
        'mountain dew',
        'doritos',
        'coca cola',
        'sprite',
        'pepsi',
        'snoop dogg',
        'soulja boy',
        'xbox',
        'playstation',
        'sony',
        'steam',
        'rockstar',
        'apple',
        'samsung',
        'supreme',
        'nokia',
        'number nine',
        'louis vuitton',
        'chrome hearts',
        'ralph lauren',
        'true religion',
        'calvin klein',
        'pringles',
        'markorepairs',
        'vine',
        'tiktok',
        'logan paul',
        'joe rogan',
        'jake paul',
        'franklin',
        'trevor',
        'michael',
        'niko bellic',
        'glados',
        'barack obama',
        'conor mcgregor',
        'michelle obama',
        'floyd mayweather',
        'jesus',
        'satan',
        'joe biden',
        'george bush',
        'kyle broflovski',
        'eric cartman',
        'kenny mccormick',
        'stan marsh',
        'wendy testaburger',
        'joe swanson',
        'glenn quagmire',
        'cleveland brown',
        'ted',
        'whatsapp',
        'telegram',
        'facebook',
        'instagram',
        'snapchat',
        'elon musk',
        'zachxbt',
        'paypal',
        'cashapp',
        'venmo',
        'zelle',
        'visa',
        'mastercard',
        'binance',
        'kraken',
        'dogecoin',
        'litecoin',
        'bitcoin',
        'ethereum',
        'razer',
        'logitech',
        'steelseries',
        'alienware',
        'clippy',
        'dog',
        'cat',
        'villager',
        'garry newman',
        'doom',
        'walmart',
        '711',
        'target',
        'cvs',
        'heavy',
        'spy',
        'scout',
        'engineer',
        'soldier',
        'demoman',
        'medic',
        'pyro',
        'sniper',
        'valve',
      ],
    ]);
    // custom sound effects when the player has accepted a rare users friend request
    const isRareUser = (name) => rareUsernames.has(name.trim().toLowerCase());
    const layeredAcceptanceUsers = new Set([
      'alyx vance', 'barney', 'bart simpson', 'chief keef', 'discord',
      'doctor kleiner', 'glados', 'g-man', 'homer simpson', 'illuminati',
      'jesus', 'lisa simpson', 'maggie simpson', 'marge simpson', 'mrjepa',
      'nintendo', 'phoon', 'roblox', 'satan', 'scarface', 'valve', 'whatsapp',
      'xaviersobased'
    ]);
    // automated method to find the sound file for the specified user
    const hasLayeredAcceptanceSound = (name) => layeredAcceptanceUsers.has(name.trim().toLowerCase());
    const specialAcceptanceAudioPath = (name) => `audio/${name.trim().toLowerCase().replace(/\s+/g, '-')}.mp3`;
    const friends = [
      // forced friend when the player makes a new save file
      { name: 'Random Kid', picture: 'icons/special/randomkid.png' }
    ];
    let observedFriendCount = friends.length;
    let permittedFriendAdditions = 0;
    let usernames = [];
    let pendingRequest = null;
    const friendRequestQueue = [];
    let notificationSoundUnlocked = false;
    let currentUsername = '';
    let currentBio = '';
    let editingProfile = false;
    let celebrityMode = false;
    let totalXp = 0;
    let levelInfo = null;
    let activeSaveSlot = null;
    let sessionActive = false;
    let friendRequestTimer = null;
    let clippyTimer = null;
    let clippyHideTimer = null;
    let clippyMessageIndex = 0;
    let clippyDragActive = false;
    let clippyWasDragged = false;
    const outgoingRequests = new Set();
    // clippys text messages
    const clippyMessages = [
      'It looks like you are building a friends list. Need help finding someone?',
      'Try sorting your friends to find the newest additions.',
      'You can click me anytime for another helpful tip!',
      'Friend requests can take a little while to receive a reply.',
      'Have you played Minesweeper?',
      'Do not delete Flappy Bird from your phone, You cannot download it again from the App Store!',
      'Always use an AdBlocker..',
      'Its like its in the past or something...',
      'Hey Lois, Im in Friend7!',
      'gabagool',
      'Bandicam vs Fraps, who wins?',
      'CS: Source is better than CS:GO',
      'CS 1.6 is better than CS: Source',
      'Plumsquad was here'
    ];

    function saveKey(slot) {
      return `friend7-save-slot-${slot}`;
    }

    function readSaveSlot(slot) {
      try {
        const saved = localStorage.getItem(saveKey(slot));
        return saved ? JSON.parse(saved) : null;
      } catch {
        return null;
      }
    }

    function renderSaveSlots() {
      saveSlotList.innerHTML = '';
      for (let slot = 1; slot <= 3; slot += 1) {
        const saved = readSaveSlot(slot);
        const row = document.createElement('div');
        const button = document.createElement('button');
        const icon = document.createElement('img');
        const label = document.createElement('span');
        row.className = 'save-slot-row';
        button.className = 'save-slot';
        button.type = 'button';
        icon.src = saved?.profilePicture || 'icons/1.png';
        icon.alt = '';
        label.textContent = saved ? `Slot ${slot}: ${saved.username}` : `Slot ${slot}: New profile`;
        button.append(icon, label);
        if (saved?.celebrityMode) button.classList.add('celebrity-slot');
        button.addEventListener('click', () => {
          if (saved) loadSaveSlot(slot);
          else {
            beginNewSave(slot);
            enterSignup();
          }
        });
        row.append(button);
        if (saved) {
          const deleteButton = document.createElement('button');
          deleteButton.className = 'delete-save';
          deleteButton.type = 'button';
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', () => {
            if (!window.confirm(`Delete save slot ${slot}?`)) return;
            localStorage.removeItem(saveKey(slot));
            renderSaveSlots();
          });
          row.append(deleteButton);
        }
        saveSlotList.append(row);
      }
    }

    function saveProgress() {
      if (!activeSaveSlot || !currentUsername) return;
      const saveData = {
        xp: totalXp,
        profilePicture: selectedSignupPicture,
        friends,
        achievements: [...unlockedAchievements],
        bio: currentBio,
        username: currentUsername,
        celebrityMode,
        theme: themeSelect.value
      };
      try {
        localStorage.setItem(saveKey(activeSaveSlot), JSON.stringify(saveData));
        renderSaveSlots();
      } catch {
        // Browser storage may be unavailable in private/restricted sessions.
      }
    }
    function setCelebrityMode(enabled) {
      celebrityMode = enabled;
      document.body.classList.toggle('celebrity-mode-active', celebrityMode);
      celebrityModeButton.classList.toggle('active', celebrityMode);
      celebrityModeButton.setAttribute('aria-pressed', celebrityMode);
      celebrityModeButton.textContent = celebrityMode ? 'Celebrity Mode: On' : 'Celebrity Mode';
    }

    function renderCurrentProfile() {
      const profilePicture = document.createElement('img');
      const profileAvatarColumn = document.createElement('div');
      const profileText = document.createElement('div');
      const profileTitle = document.createElement('strong');
      const profileBio = document.createElement('p');
      profilePicture.src = selectedSignupPicture;
      profilePicture.alt = `${currentUsername}'s profile picture`;
      profileTitle.textContent = currentUsername;
      if (celebrityMode) profileTitle.classList.add('rare-name');
      profileBio.textContent = currentBio || 'No bio yet.';
      profileText.append(profileTitle, profileBio);
      profileAvatarColumn.className = 'profile-avatar-column';
      profileAvatarColumn.append(profilePicture, editProfileButton);
      myProfile.replaceChildren(profileAvatarColumn, profileText);
      myProfile.hidden = false;
      levelInfo = { label: levelLabel, fill: xpBarFill };
      levelDisplay.hidden = false;
      updateLevelDisplay();
    }

    function enterSignup() {
      editingProfile = false;
      startupSound.currentTime = 0;
      startupSound.play().catch(() => {});
      startupScreen.hidden = true;
      signupScreen.hidden = false;
      windowTitle.textContent = 'Sign Up';
    }

    editProfileButton.addEventListener('click', () => {
      editingProfile = true;
      sessionActive = false;
      if (friendRequestTimer) window.clearTimeout(friendRequestTimer);
      stopClippy();
      friendsApp.hidden = true;
      showAchievementsButton.hidden = true;
      showThemesButton.hidden = true;
      logoutButton.hidden = true;
      signupName.value = currentUsername;
      signupName.disabled = true;
      signupBio.value = currentBio;
      signupMessage.textContent = '';
      signupHeading.textContent = 'Edit your profile';
      signupSubtitle.textContent = 'Choose a new picture or update your bio.';
      celebrityModeButton.hidden = true;
      signupSubmit.textContent = 'Save profile';
      signupScreen.hidden = false;
      titleIcon.src = 'w7/login.png';
      windowTitle.textContent = 'Edit Profile';
      updateSignupPreview();
    });

    function beginNewSave(slot) {
      activeSaveSlot = slot;
      totalXp = 0;
      currentUsername = '';
      currentBio = '';
      selectedSignupPicture = 'icons/1.png';
      unlockedAchievements.clear();
      friends.splice(0, friends.length, { name: 'Random Kid', picture: 'icons/special/randomkid.png' });
      observedFriendCount = friends.length;
      permittedFriendAdditions = 0;
      setCelebrityMode(false);
      themeSelect.value = 'original';
      applyTheme('original', false);
    }

    function openFriendsApp() {
      sessionActive = true;
      signupScreen.hidden = true;
      startupScreen.hidden = true;
      friendsApp.hidden = false;
      showAchievementsButton.hidden = false;
      showThemesButton.hidden = false;
      logoutButton.hidden = false;
      titleIcon.src = 'w7/network.png';
      windowTitle.textContent = 'Friends List';
      startClippy();
      renderCurrentProfile();
      renderFriends();
      checkForTampering();
      loadUsernames();
      scheduleFriendRequest();
    }

    function showClippyMessage() {
      clippySpeech.textContent = clippyMessages[clippyMessageIndex];
      clippyMessageIndex = (clippyMessageIndex + 1) % clippyMessages.length;
      clippySpeech.hidden = false;
      if (clippyHideTimer) window.clearTimeout(clippyHideTimer);
      clippyHideTimer = window.setTimeout(() => { clippySpeech.hidden = true; }, 7000);
    }

    function scheduleClippyMessage() {
      const delay = 60000 + Math.random() * 240000;
      clippyTimer = window.setTimeout(() => {
        showClippyMessage();
        scheduleClippyMessage();
      }, delay);
    }

    function startClippy() {
      if (!clippyMessages.length) return;
      clippyAssistant.hidden = false;
      clippySpeech.hidden = true;
      if (clippyTimer) window.clearTimeout(clippyTimer);
      scheduleClippyMessage();
    }

    function stopClippy() {
      if (clippyTimer) window.clearTimeout(clippyTimer);
      if (clippyHideTimer) window.clearTimeout(clippyHideTimer);
      clippyTimer = null;
      clippyHideTimer = null;
      clippyAssistant.hidden = true;
    }

    clippyAssistant.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      const bounds = clippyAssistant.getBoundingClientRect();
      clippyDragActive = true;
      clippyWasDragged = false;
      clippyAssistant.dataset.dragOffsetX = String(event.clientX - bounds.left);
      clippyAssistant.dataset.dragOffsetY = String(event.clientY - bounds.top);
      clippyAssistant.style.left = `${bounds.left}px`;
      clippyAssistant.style.top = `${bounds.top}px`;
      clippyAssistant.style.right = 'auto';
      clippyAssistant.style.bottom = 'auto';
      clippyAssistant.setPointerCapture(event.pointerId);
    });
    clippyAssistant.addEventListener('pointermove', (event) => {
      if (!clippyDragActive) return;
      const width = clippyAssistant.offsetWidth;
      const height = clippyAssistant.offsetHeight;
      const offsetX = Number(clippyAssistant.dataset.dragOffsetX);
      const offsetY = Number(clippyAssistant.dataset.dragOffsetY);
      const left = Math.max(0, Math.min(window.innerWidth - width, event.clientX - offsetX));
      const top = Math.max(0, Math.min(window.innerHeight - height, event.clientY - offsetY));
      if (Math.abs(event.movementX) + Math.abs(event.movementY) > 0) clippyWasDragged = true;
      clippyAssistant.style.left = `${left}px`;
      clippyAssistant.style.top = `${top}px`;
    });
    clippyAssistant.addEventListener('pointerup', (event) => {
      clippyDragActive = false;
      clippyWasDragged = false;
      if (clippyAssistant.hasPointerCapture(event.pointerId)) clippyAssistant.releasePointerCapture(event.pointerId);
    });

    function loadSaveSlot(slot) {
      const saved = readSaveSlot(slot);
      if (!saved) return;
      signupSound.currentTime = 0;
      signupSound.play().catch(() => {});
      activeSaveSlot = slot;
      totalXp = saved.xp || 0;
      currentUsername = saved.username || '';
      currentBio = saved.bio || '';
      selectedSignupPicture = saved.profilePicture || 'icons/1.png';
      friends.splice(0, friends.length, ...(Array.isArray(saved.friends) ? saved.friends : []));
      observedFriendCount = friends.length;
      permittedFriendAdditions = 0;
      unlockedAchievements.clear();
      (saved.achievements || []).forEach((achievement) => unlockedAchievements.add(achievement));
      setCelebrityMode(Boolean(saved.celebrityMode));
      themeSelect.value = saved.theme || 'original';
      applyTheme(themeSelect.value, false);
      openFriendsApp();
    }

    celebrityModeButton.addEventListener('click', () => {
      setCelebrityMode(!celebrityMode);
      saveProgress();
    });

    function applyTheme(theme, playAudio = true, persist = true) {
      const gangsterEdition = theme === 'gangster';
      const xbox360Edition = theme === 'xbox360';
      const nightEdition = theme === 'night';
      const steamEdition = theme === 'steam';
      const halflifeEdition = theme === 'halflife';
      const passionEdition = theme === 'passion';
      const gmodEdition = theme === 'gmod';
      [gangsterAudio, xbox360Audio, nightAudio, steamAudio, halflifeAudio, passionAudio, gmodAudio].forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      if (gangsterEdition && playAudio) {
        gangsterAudio.currentTime = 0;
        gangsterAudio.play().catch(() => {});
      }
      if (xbox360Edition && playAudio) {
        xbox360Audio.currentTime = 0;
        xbox360Audio.play().catch(() => {});
      }
      if (nightEdition && playAudio) {
        nightAudio.currentTime = 0;
        nightAudio.play().catch(() => {});
      }
      if (steamEdition && playAudio) {
        steamAudio.currentTime = 0;
        steamAudio.play().catch(() => {});
      }
      if (halflifeEdition && playAudio) {
        halflifeAudio.currentTime = 0;
        halflifeAudio.play().catch(() => {});
      }
      if (passionEdition && playAudio) {
        passionAudio.currentTime = 0;
        passionAudio.play().catch(() => {});
      }
      if (gmodEdition && playAudio) {
        gmodAudio.currentTime = 0;
        gmodAudio.play().catch(() => {});
      }
      themeFade.classList.add('active');
      window.setTimeout(() => {
        document.body.classList.toggle('gangster-edition', gangsterEdition);
        document.body.classList.toggle('xbox360-edition', xbox360Edition);
        document.body.classList.toggle('night-edition', nightEdition);
        document.body.classList.toggle('steam-edition', steamEdition);
        document.body.classList.toggle('halflife-edition', halflifeEdition);
        document.body.classList.toggle('passion-edition', passionEdition);
        document.body.classList.toggle('gmod-edition', gmodEdition);
        if (persist) saveProgress();
        window.setTimeout(() => themeFade.classList.remove('active'), 50);
      }, 250);
    }
    const achievementMilestones = [10, 20, 50, 100, 200, 500, 1000];
    const xpRewards = Object.freeze({
      sentRequest: 5,
      receivedRequest: 5,
      rareReceivedRequest: 40,
      acceptedRequest: 20,
      acceptedRareRequest: 80
    });
    const expectedRulesSignature = JSON.stringify({
      xpRewards: { sentRequest: 5, receivedRequest: 5, rareReceivedRequest: 40, acceptedRequest: 20, acceptedRareRequest: 80 },
      milestones: [10, 20, 50, 100, 200, 500, 1000]
    });
    const achievementIcons = Object.fromEntries(
      achievementMilestones.map((amount) => [amount, `achievements/${amount}friends.png`])
    );
    const levelAchievements = [
      { id: 'level-5', level: 5, title: 'Catching on...', description: 'Reach Level 5', icon: 'achievements/level5.png' },
      { id: 'level-10', level: 10, title: 'So many friends!', description: 'Reach Level 10', icon: 'achievements/level10.png' },
      { id: 'level-20', level: 20, title: 'Mom come look!', description: 'Reach Level 20', icon: 'achievements/level20.png' },
      { id: 'level-30', level: 30, title: 'So many famous people!', description: 'Reach Level 30', icon: 'achievements/level30.png' },
      { id: 'level-40', level: 40, title: 'Feeling like a celebrity...', description: 'Reach Level 40', icon: 'achievements/level40.png' },
      { id: 'level-50', level: 50, title: 'No autographs!', description: 'Reach Level 50', icon: 'achievements/level50.png' },
      { id: 'level-60', level: 60, title: "I'm going to be on TV!", description: 'Reach Level 60', icon: 'achievements/level60.png' },
      { id: 'level-70', level: 70, title: 'The fame is getting to my head!!', description: 'Reach Level 70', icon: 'achievements/level70.png' },
      { id: 'level-80', level: 80, title: 'The fame came out of my head...', description: 'Reach Level 80', icon: 'achievements/level80.png' },
      { id: 'level-90', level: 90, title: 'Running out of people to add...', description: 'Reach Level 90', icon: 'achievements/level90.png' },
      { id: 'level-100', level: 100, title: 'This took too long...', description: 'Reach Level 100', icon: 'achievements/level100.png', special: true }
    ];
    const collectionAchievements = [
      { id: 'drain-gang', title: 'Drain Gang', description: 'Have Bladee, Ecco2k, Thaiboy Digital & Whitearmor added', icon: 'achievements/draingang.png', friends: ['bladee', 'ecco2k', 'thaiboy digital', 'whitearmor'] },
      { id: 'half-life-3', title: 'HALF-LIFE 3 CONFIRMED!!11!1', description: 'Have Gordon Freeman, G-Man, Alyx Vance, Barney and Doctor Kleiner added', icon: 'achievements/halflife3.png', friends: ['gordon freeman', 'g-man', 'alyx vance', 'barney', 'doctor kleiner'] }
    ];
    const specialAchievements = [{
      id: 'gabe-newell-request',
      requestUsername: 'gabe newell',
      title: 'Please sign my profile!',
      description: "Accept Gabe Newell's Friend Request",
      icon: 'icons/special/gabe.png'
    }, {
      id: 'vallu-request',
      requestUsername: 'vallu',
      title: 'The chosen one...',
      description: "Accept the Developer's Friend Request",
      icon: 'icons/special/vallu.png'
    }, {
      id: 'administrator-request',
      requestUsername: 'administrator',
      title: 'Not getting banned!',
      description: "Accept the Administrator's Friend Request",
      icon: 'achievements/admin.png'
    }, {
      id: 'cheater',
      hidden: true,
      title: 'The admins hate you!',
      description: '!ban you',
      icon: 'achievements/hacker.png'
    }];
    const unlockedAchievements = new Set();
    // Add lowercase usernames here when they should reject every friend request.
    const usersWhoDoNotAcceptRequests = new Set([
      'administrator', 'gabe newell', 'vallu', 'hacker', 'drake', 'yung lean',
      'microsoft', 'steve jobs', 'illuminati', 'bladee', 'ecco2k',
      'thaiboy digital', 'vitun luumu', 'osamason', 'chief keef', 'github',
      'spotify', 'soundcloud', 'google', 'youareanidiot', 'discord', 'faze',
      'friend7_hater', 'adobe', 'phoon', '[ content deleted ]', 'roblox',
      'doge', 'pewdiepie', 'jacksepticeye', 'markiplier', 'dinnerbone',
      'ripsquad', '1exposed', 'bonzibuddy', 'youtube', 'twikipedia',
      'icedancer', 'eversince', 'rainworld', 'fakeadministrator', 'troll',
      'xaviersobased',
      'mrjepa',
      'reddit',
      '4chan',
      'anonymous',
      'mojang',
      'minecraft',
      'monster',
      'clarkson',
      'hammond',
      'g-man',
      'trump',
      'doctor kleiner',
      'alyx vance',
      'barney',
      'jupe',
      'python',
      'epic games',
      'fortnite',
      'tim sweeney',
      'nintendo',
      'fuck ass little dog',
      'foenem',
      'homer simpson',
      'bart simpson',
      'marge simpson',
      'lisa simpson',
      'maggie simpson',
      'peter griffin',
      'lois griffin',
      'meg griffin',
      'stewie griffin',
      'brian griffin',
      'chris griffin',
      'walter white',
      'heisenberg',
      'gustavo fring',
      'mike ehrmantraut',
      'jeff bezos',
      'red bull',
      'odens',
      'greatest',
      'vlc',
      'obs',
      'subway',
      'burger king',
      'wendys',
      'wingstop',
      'pizza hut',
      'dominos',
      'justin bieber',
      'jesse pinkman',
      'nicki minaj',
      'the weeknd',
      'taylor swift',
      'ed sheeran',
      'macklemore',
      'dj nate',
      'young thug',
      'migos',
      'asap rocky',
      'lil b',
      'joeyy',
      'playboi carti',
      'nettspend',
      'cartier god',
      'novagang',
      'ways',
      'yung sherman',
      'whitearmor',
      'pitbull',
      'crypto',
      'frank ocean',
      'twitter',
      'ronaldo',
      'messi',
      'kai cenat',
      'ishowspeed',
      'lebron james',
      'steph curry',
      'kobe bryant',
      'micheal jordan',
      'fanta',
      'mountain dew',
      'doritos',
      'coca cola',
      'sprite',
      'pepsi',
      'snoop dogg',
      'soulja boy',
      'xbox',
      'playstation',
      'sony',
      'steam',
      'rockstar',
      'apple',
      'samsung',
      'supreme',
      'nokia',
      'number nine',
      'louis vuitton',
      'chrome hearts',
      'ralph lauren',
      'true religion',
      'calvin klein',
      'pringles',
      'markorepairs',
      'vine',
      'tiktok',
      'logan paul',
      'joe rogan',
      'jake paul',
      'franklin',
      'trevor',
      'michael',
      'niko bellic',
      'glados',
      'barack obama',
      'conor mcgregor',
      'michelle obama',
      'floyd mayweather',
      'jesus',
      'satan',
      'joe biden',
      'george bush',
      'kyle broflovski',
      'eric cartman',
      'kenny mccormick',
      'stan marsh',
      'wendy testaburger',
      'joe swanson',
      'glenn quagmire',
      'cleveland brown',
      'ted',
      'whatsapp',
      'telegram',
      'facebook',
      'instagram',
      'snapchat',
      'elon musk',
      'zachxbt',
      'paypal',
      'cashapp',
      'venmo',
      'zelle',
      'visa',
      'mastercard',
      'binance',
      'kraken',
      'dogecoin',
      'litecoin',
      'bitcoin',
      'ethereum',
      'razer',
      'logitech',
      'steelseries',
      'alienware',
      'clippy',
      'dog',
      'cat',
      'villager',
      'garry newman',
      'doom',
      'walmart',
      '711',
      'target',
      'cvs',
      'heavy',
      'spy',
      'scout',
      'engineer',
      'soldier',
      'demoman',
      'medic',
      'pyro',
      'sniper',
      'valve',
      'xaviersobased',
    ]);
    // list of "usernames" that you cannot send a request to
    const bannedUsernames = new Set(['yassir', 'hexagon', 'ollum', 'rapist', 'epstein', 'nigga', 'nigger', 'faggot', 'gook', 'tranny', 'rape', 'diddy', 'pyhe', 'tom nuke npc', '764', 'n166er', 'n1gg3r', 'hitler', 'nazi', '1488']);
    const prohibitedSignupTerms = ['rapist', 'epstein', 'nigga', 'nigger', 'faggot', 'gook', 'tranny', 'rape', 'diddy', 'pyhe', 'tom nuke npc', '764', 'n166er', 'n1gg3r', 'hitler', 'nazi', '1488'];

    let selectedSignupPicture = 'icons/1.png';

    function updateSignupPreview() {
      signupPreview.src = selectedSignupPicture;
      document.querySelectorAll('.picture-choice').forEach((button) => {
        button.classList.toggle('selected', button.dataset.picture === selectedSignupPicture);
      });
    }

    iconNumbers.forEach((number) => {
      const picture = `icons/${number}.png`;
      const button = document.createElement('button');
      const image = document.createElement('img');
      button.className = 'picture-choice';
      button.type = 'button';
      button.dataset.picture = picture;
      button.title = `Icon ${number}`;
      image.src = picture;
      image.alt = `Icon ${number}`;
      button.append(image);
      button.addEventListener('click', () => {
        selectedSignupPicture = picture;
        updateSignupPreview();
      });
      signupPictureMenu.append(button);
    });
    updateSignupPreview();

    function unlockNotificationSound() {
      notificationSound.muted = true;
      notificationSound.play()
        .then(() => {
          notificationSound.pause();
          notificationSound.currentTime = 0;
          notificationSound.muted = false;
          notificationSoundUnlocked = true;
        })
        .catch(() => { notificationSound.muted = false; });
    }

    document.addEventListener('pointerdown', unlockNotificationSound, { once: true });
    document.addEventListener('keydown', unlockNotificationSound, { once: true });

    startFriendsListButton.addEventListener('click', () => {
      const emptySlot = [1, 2, 3].find((slot) => !readSaveSlot(slot));
      if (!emptySlot) {
        startupMessage.textContent = 'Choose an existing save slot to continue.';
        return;
      }
      beginNewSave(emptySlot);
      enterSignup();
    });
    // not used
    function loadUsernames() {
      usernames = usernamesData.textContent
        .split(/\r?\n/)
        .map((name) => name.trim())
        .filter(Boolean);
    }
    // only used if the player has added all usernames from usernamelist
    const generatedUsernamePrefixes = ['Cyber', 'xX', 'Neo', 'Pixel', 'Shadow', 'Turbo', 'Lunar', 'Retro', 'Ghost', 'Epic'];
    const generatedUsernameSuffixes = ['Gamer', 'Kid', 'Player', 'Fox', 'Wolf', 'Byte', 'Wizard', 'Rider', 'Ninja', 'Penguin'];

    function generateRandomUsername() {
      let name;
      do {
        const prefix = generatedUsernamePrefixes[Math.floor(Math.random() * generatedUsernamePrefixes.length)];
        const suffix = generatedUsernameSuffixes[Math.floor(Math.random() * generatedUsernameSuffixes.length)];
        name = `${prefix}${suffix}${Math.floor(100 + Math.random() * 9900)}`;
      } while (
        isAlreadyFriend(name) ||
        usernames.some((username) => username.toLowerCase() === name.toLowerCase()) ||
        (pendingRequest && pendingRequest.name.toLowerCase() === name.toLowerCase()) ||
        friendRequestQueue.some((request) => request.name.toLowerCase() === name.toLowerCase())
      );
      return name;
    }

    function replenishGeneratedUsernames() {
      for (let index = 0; index < 20; index += 1) {
        usernames.push(generateRandomUsername());
      }
    }

    function storedUsernameExists(name) {
      const normalizedName = name.toLowerCase();
      return usernamesData.textContent
        .split(/\r?\n/)
        .map((username) => username.trim())
        .filter(Boolean)
        .map((username) => username.toLowerCase())
        .includes(normalizedName);
    }

    function canonicalUsername(name) {
      const normalizedName = name.toLowerCase();
      const storedName = usernamesData.textContent
        .split(/\r?\n/)
        .map((username) => username.trim())
        .find((username) => username.toLowerCase() === normalizedName);
      return storedName || name;
    }
    // levels
    function updateLevelDisplay() {
      if (!levelInfo) return;
      const level = Math.floor(totalXp / 100) + 1;
      const xpInLevel = totalXp % 100;
      levelInfo.label.textContent = `Level ${level} — ${xpInLevel} / 100 XP`;
      levelInfo.fill.style.width = `${xpInLevel}%`;
    }

    function currentLevel() {
      return Math.floor(totalXp / 100) + 1;
    }

    function friendSpeedMultiplier() {
      return Math.min(1.5, 1 + (currentLevel() - 1) * 0.005);
    }

    function friendAcceptanceChance(baseChance) {
      return Math.min(baseChance + 0.2, baseChance + (currentLevel() - 1) * 0.002);
    }

    function gainXp(amount) {
      checkForTampering();
      totalXp += amount * (celebrityMode ? 10 : 1);
      updateLevelDisplay();
      checkAchievements();
      saveProgress();
    }
    // anti-tampering checks so if someone uses a script to change xp and such they get the hacker achievement
    function checkForTampering() {
      const currentRulesSignature = JSON.stringify({ xpRewards, milestones: achievementMilestones });
      if (currentRulesSignature !== expectedRulesSignature) {
        unlockSpecialAchievement('cheater');
      }
      const friendCountChange = friends.length - observedFriendCount;
      if (friendCountChange > permittedFriendAdditions) {
        unlockSpecialAchievement('cheater');
      }
      observedFriendCount = friends.length;
      permittedFriendAdditions = Math.max(0, permittedFriendAdditions - Math.max(0, friendCountChange));
    }

    function permitFriendAddition() {
      permittedFriendAdditions += 1;
    }

    function isValidUsername(name) {
      return /^[A-Za-z0-9 _-]{1,32}$/.test(name);
    }

    function containsProhibitedSignupTerm(name) {
      const normalizedName = name.toLowerCase().replace(/[^a-z]/g, '');
      return prohibitedSignupTerms.some((term) => normalizedName.includes(term));
    }

    function showFriendRequest(renderOnly = false) {
      let receivedNewRequest = false;
      if (!renderOnly) {
        if (!sessionActive) return;
        let eligibleUsernames = usernames.filter((name) => !isAlreadyFriend(name));
        if (!eligibleUsernames.length) {
          replenishGeneratedUsernames();
          eligibleUsernames = usernames.filter((name) => !isAlreadyFriend(name));
        }

        const name = eligibleUsernames[Math.floor(Math.random() * eligibleUsernames.length)];
        const requestIndex = usernames.indexOf(name);
        usernames.splice(requestIndex, 1);
        friendRequestQueue.push({ name, picture: profilePictureFor(name) });
        gainXp(xpRewards.receivedRequest);
        if (isRareUser(name)) gainXp(xpRewards.rareReceivedRequest);
        if (!pendingRequest) pendingRequest = friendRequestQueue.shift();
        receivedNewRequest = true;
      }
      if (!pendingRequest) return;
      requestArea.innerHTML = '';

      const message = document.createElement('span');
      const requestName = document.createElement('span');
      const infoIcon = document.createElement('img');
      const acceptButton = document.createElement('button');
      const declineButton = document.createElement('button');
      const actions = document.createElement('div');
      const acceptIcon = document.createElement('img');
      const declineIcon = document.createElement('img');
      infoIcon.className = 'request-icon';
      infoIcon.src = 'w7/info.png';
      infoIcon.alt = '';
      requestName.textContent = pendingRequest.name;
      if (isRareUser(pendingRequest.name)) requestName.className = 'rare-name';
      message.append(infoIcon, requestName, ' sent you a friend request. ');
      if (friendRequestQueue.length) {
        const queueCount = document.createElement('span');
        queueCount.className = 'request-queue-count';
        queueCount.textContent = String(friendRequestQueue.length + 1);
        queueCount.title = `${friendRequestQueue.length + 1} friend requests waiting`;
        message.append(queueCount);
      }
      acceptIcon.className = 'button-icon';
      acceptIcon.src = 'w7/accept.png';
      acceptIcon.alt = '';
      acceptButton.append(acceptIcon, 'Accept');
      declineIcon.className = 'button-icon';
      declineIcon.src = 'w7/decline.png';
      declineIcon.alt = '';
      declineButton.append(declineIcon, 'Decline');
      acceptButton.type = declineButton.type = 'button';
      acceptButton.className = 'accept-request';
      declineButton.className = 'decline-request';

      acceptButton.addEventListener('click', () => {
        const acceptedName = pendingRequest.name;
        if (!isAlreadyFriend(pendingRequest.name)) {
          permitFriendAddition();
          friends.push(pendingRequest);
        }
        const requestAchievement = specialAchievements.find((achievement) =>
          achievement.requestUsername === pendingRequest.name.toLowerCase()
        );
        if (requestAchievement) unlockSpecialAchievement(requestAchievement.id);
        const acceptanceSound = isRareUser(acceptedName) ? rareRequestAcceptedSound : requestAcceptedSound;
        if (isRareUser(acceptedName)) {
          gainXp(xpRewards.acceptedRareRequest);
          flashRareAcceptance();
        }
        showStatusNotification(`You accepted ${acceptedName}'s friend request.`, 'w7/accept.png', acceptanceSound);
        playSpecialAcceptanceLayer(acceptedName);
        pendingRequest = friendRequestQueue.shift() || null;
        requestArea.innerHTML = '';
        renderFriends();
        if (pendingRequest) showFriendRequest(true);
      });
      declineButton.addEventListener('click', () => {
        pendingRequest = friendRequestQueue.shift() || null;
        requestArea.innerHTML = '';
        if (pendingRequest) showFriendRequest(true);
      });

      actions.className = 'request-actions';
      actions.append(acceptButton, ' ', declineButton);
      requestArea.append(message, actions);
      if (receivedNewRequest && notificationSoundUnlocked) {
        notificationSound.currentTime = 0;
        notificationSound.play().catch(() => {});
      }
      if (receivedNewRequest) scheduleFriendRequest();
    }

    function scheduleFriendRequest() {
      if (!sessionActive) return;
      const waitTime = celebrityMode
        ? 1000 + Math.random() * 2000
        : (10000 + Math.random() * 50000) / friendSpeedMultiplier();
      friendRequestTimer = window.setTimeout(() => {
        if (!sessionActive) return;
        if (Math.random() < (celebrityMode ? 1 : friendAcceptanceChance(0.6))) {
          showFriendRequest();
        } else {
          scheduleFriendRequest();
        }
      }, waitTime);
    }

    function isAlreadyFriend(name) {
      return friends.some((friend) => friend.name.toLowerCase() === name.toLowerCase());
    }

    function showStatusNotification(message, iconPath = 'w7/info.png', sound = null) {
      const popup = document.createElement('div');
      const icon = document.createElement('img');
      const text = document.createElement('span');
      popup.className = 'status-popup';
      icon.src = iconPath;
      icon.alt = '';
      text.textContent = message;
      popup.append(icon, text);
      statusArea.append(popup);
      if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
      }
      window.setTimeout(() => popup.remove(), 4000);
    }

    function playSpecialAcceptanceLayer(name) {
      if (!hasLayeredAcceptanceSound(name)) return;
      const specialSound = new Audio(specialAcceptanceAudioPath(name));
      specialSound.play().catch(() => {});
    }

    function flashRareAcceptance() {
      document.body.classList.remove('rare-flash');
      void document.body.offsetWidth;
      document.body.classList.add('rare-flash');
      window.setTimeout(() => document.body.classList.remove('rare-flash'), 500);
    }

    function checkAchievements() {
      let unlockedAnything = false;
      achievementMilestones.forEach((milestone) => {
        if (friends.length < milestone || unlockedAchievements.has(milestone)) return;
        unlockedAchievements.add(milestone);
        const isSpecialMilestone = milestone === 500 || milestone === 1000;
        showAchievement('Achievement unlocked!', `${milestone} friends added`, achievementIcons[milestone], isSpecialMilestone);
        if (isSpecialMilestone) flashRareAcceptance();
        unlockedAnything = true;
      });
      const currentLevel = Math.floor(totalXp / 100) + 1;
      levelAchievements.forEach((achievement) => {
        if (currentLevel < achievement.level || unlockedAchievements.has(achievement.id)) return;
        unlockedAchievements.add(achievement.id);
        showAchievement(achievement.title, achievement.description, achievement.icon, Boolean(achievement.special));
        if (achievement.special) flashRareAcceptance();
        unlockedAnything = true;
      });
      const friendNames = new Set(friends.map((friend) => friend.name.toLowerCase()));
      collectionAchievements.forEach((achievement) => {
        if (unlockedAchievements.has(achievement.id) || !achievement.friends.every((name) => friendNames.has(name))) return;
        unlockedAchievements.add(achievement.id);
        showAchievement(achievement.title, achievement.description, achievement.icon);
        unlockedAnything = true;
      });
      if (unlockedAnything) {
        renderAchievements();
        saveProgress();
      }
    }

    function showAchievement(titleText, descriptionText, iconPath, isSpecial = false) {
      const popup = document.createElement('div');
      const icon = document.createElement('img');
      const text = document.createElement('div');
      const title = document.createElement('strong');
      const description = document.createElement('span');
      popup.className = `achievement-popup${isSpecial ? ' special' : ''}`;
      icon.src = iconPath;
      icon.alt = '';
      title.textContent = titleText;
      description.textContent = descriptionText;
      text.append(title, description);
      popup.append(icon, text);
      achievementArea.append(popup);
      const sound = isSpecial ? specialAchievementSound : achievementSound;
      sound.currentTime = 0;
      sound.play().catch(() => {});
      window.setTimeout(() => popup.remove(), 4000);
    }

    function unlockSpecialAchievement(id) {
      const achievement = specialAchievements.find((item) => item.id === id);
      if (!achievement || unlockedAchievements.has(id)) return;

      unlockedAchievements.add(id);
      showAchievement(achievement.title, achievement.description, achievement.icon, true);
      renderAchievements();
      saveProgress();
    }

    // the hacker badge that u cant get legitimately...
    window.friend7Cheat = () => unlockSpecialAchievement('cheater');

    function createAchievementIcon(iconPath, unlocked) {
      const wrapper = document.createElement('span');
      const icon = document.createElement('img');
      wrapper.className = 'achievement-icon';
      icon.src = iconPath;
      icon.alt = '';
      wrapper.append(icon);
      if (!unlocked) {
        const lock = document.createElement('img');
        lock.className = 'achievement-lock-icon';
        lock.src = 'achievements/locked.png';
        lock.alt = 'Locked';
        wrapper.append(lock);
      }
      return wrapper;
    }
    // achievements
    function renderAchievements() {
      achievementsList.innerHTML = '';
      const nextMilestone = achievementMilestones.find((amount) => friends.length < amount);
      achievementProgress.textContent = nextMilestone
        ? `${friends.length} / ${nextMilestone} friends until your next achievement`
        : 'Every friendship achievement unlocked!';

      achievementMilestones.forEach((amount) => {
        const item = document.createElement('div');
        const text = document.createElement('div');
        const title = document.createElement('strong');
        const description = document.createElement('small');
        const unlocked = unlockedAchievements.has(amount);
        item.className = `achievement-item${unlocked ? '' : ' locked'}${amount === 500 || amount === 1000 ? ' special' : ''}`;
        title.textContent = `${amount} Friends`;
        description.textContent = unlocked ? 'Unlocked' : `Add ${amount - friends.length} more friend${amount - friends.length === 1 ? '' : 's'}`;
        text.append(title, description);
        item.append(createAchievementIcon(achievementIcons[amount], unlocked), text);
        achievementsList.append(item);
      });

      [...levelAchievements, ...collectionAchievements].forEach((achievement) => {
        const item = document.createElement('div');
        const text = document.createElement('div');
        const title = document.createElement('strong');
        const description = document.createElement('small');
        const unlocked = unlockedAchievements.has(achievement.id);
        item.className = `achievement-item${unlocked ? '' : ' locked'}${achievement.special ? ' special' : ''}`;
        title.textContent = achievement.title;
        description.textContent = unlocked ? 'Unlocked' : achievement.description;
        text.append(title, description);
        item.append(createAchievementIcon(achievement.icon, unlocked), text);
        achievementsList.append(item);
      });

      specialAchievements.forEach((achievement) => {
        const item = document.createElement('div');
        const text = document.createElement('div');
        const title = document.createElement('strong');
        const description = document.createElement('small');
        const unlocked = unlockedAchievements.has(achievement.id);
        item.className = `achievement-item${unlocked ? '' : ' locked'}`;
        title.textContent = achievement.hidden && !unlocked ? 'Hidden achievement' : achievement.title;
        description.textContent = achievement.hidden && !unlocked ? 'Keep playing to discover it.' : (unlocked ? 'Unlocked' : achievement.description);
        text.append(title, description);
        item.append(createAchievementIcon(achievement.icon, unlocked), text);
        achievementsList.append(item);
      });
    }

    function renderFriends() {
      checkForTampering();
      list.innerHTML = '';
      count.textContent = `${friends.length} friend${friends.length === 1 ? '' : 's'}`;
      checkAchievements();

      if (friends.length === 0) {
        list.innerHTML = '<li class="empty">Your friends list is empty.</li>';
        renderAchievements();
        saveProgress();
        return;
      }
      // sorting friends alphabetically, latest added or by rarity
      const displayedFriends = [...friends].sort((first, second) => {
        if (friendsSort.value === 'alphabetical') return first.name.localeCompare(second.name, undefined, { sensitivity: 'base' });
        if (friendsSort.value === 'rarity') {
          const rarityDifference = Number(isRareUser(second.name)) - Number(isRareUser(first.name));
          return rarityDifference || first.name.localeCompare(second.name, undefined, { sensitivity: 'base' });
        }
        return friends.indexOf(second) - friends.indexOf(first);
      });

      displayedFriends.forEach((friend) => {
        const item = document.createElement('li');
        const picture = document.createElement('img');
        const friendName = document.createElement('span');
        const removeButton = document.createElement('button');

        picture.className = 'profile-picture';
        picture.src = friend.picture;
        picture.alt = `${friend.name}'s profile picture`;
        friendName.className = 'friend';
        if (isRareUser(friend.name)) friendName.classList.add('rare-name');
        friendName.textContent = friend.name;
        removeButton.className = 'remove';
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          friends.splice(friends.indexOf(friend), 1);
          renderFriends();
        });

        item.append(picture, friendName, removeButton);
        list.append(item);
      });
      renderAchievements();
      saveProgress();
    }

    friendsSort.addEventListener('change', renderFriends);

    showAchievementsButton.addEventListener('click', () => {
      renderAchievements();
      achievementsPanel.hidden = false;
    });
    closeAchievementsButton.addEventListener('click', () => {
      achievementsPanel.hidden = true;
    });
    showCreditsButton.addEventListener('click', () => {
      creditsPanel.hidden = false;
    });
    closeCreditsButton.addEventListener('click', () => {
      creditsPanel.hidden = true;
    });
    showThemesButton.addEventListener('click', () => {
      themesMenu.hidden = !themesMenu.hidden;
    });
    themeSelect.addEventListener('change', () => {
      applyTheme(themeSelect.value);
      themesMenu.hidden = true;
    });
    logoutButton.addEventListener('click', () => {
      saveProgress();
      sessionActive = false;
      stopClippy();
      if (friendRequestTimer) window.clearTimeout(friendRequestTimer);
      pendingRequest = null;
      friendRequestQueue.splice(0, friendRequestQueue.length);
      requestArea.innerHTML = '';
      friendsApp.hidden = true;
      showAchievementsButton.hidden = true;
      showThemesButton.hidden = true;
      themesMenu.hidden = true;
      logoutButton.hidden = true;
      startupScreen.hidden = false;
      titleIcon.src = 'w7/login.png';
      windowTitle.textContent = 'Welcome';
      logoutSound.currentTime = 0;
      logoutSound.play().catch(() => {});
      themeSelect.value = 'original';
      applyTheme('original', false, false);
      renderSaveSlots();
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const typedName = input.value.trim();
      if (!typedName) return;
      if (!isValidUsername(typedName)) {
        friendMessage.textContent = 'Usernames can be up to 32 characters and use only letters, numbers, spaces, dashes, or underscores.';
        showStatusNotification(friendMessage.textContent, 'w7/decline.png', requestDeclinedSound);
        return;
      }
      if (containsProhibitedSignupTerm(typedName)) {
        friendMessage.textContent = 'That username is not allowed.';
        showStatusNotification(friendMessage.textContent, 'w7/decline.png', requestDeclinedSound);
        return;
      }
      const name = canonicalUsername(typedName);
      const requestKey = name.toLowerCase();
      if (requestKey === currentUsername.toLowerCase()) 
        {
        // scripts when the player sends a friend request
        friendMessage.textContent = 'You cannot send a friend request to yourself.';
        showStatusNotification(friendMessage.textContent, 'w7/decline.png', requestDeclinedSound);
        return;
      }
      if (bannedUsernames.has(requestKey)) {
        friendMessage.textContent = 'This user is banned.';
        showStatusNotification(friendMessage.textContent, 'w7/decline.png', requestDeclinedSound);
        return;
      }
      if (usersWhoDoNotAcceptRequests.has(requestKey)) {
        friendMessage.textContent = "This user cannot receive friend requests.";
        showStatusNotification(friendMessage.textContent, 'w7/decline.png', requestDeclinedSound);
        return;
      }
      if (isAlreadyFriend(name)) {
        friendMessage.textContent = `${name} is already on your friends list.`;
        showStatusNotification(friendMessage.textContent);
        return;
      }
      if (outgoingRequests.has(requestKey)) {
        friendMessage.textContent = `A friend request to ${name} is already pending.`;
        showStatusNotification(friendMessage.textContent);
        return;
      }

      outgoingRequests.add(requestKey);
      gainXp(xpRewards.sentRequest);
      friendMessage.textContent = `Friend request sent to ${name}.`;
      showStatusNotification(friendMessage.textContent, 'w7/info.png', requestSentSound);
      input.value = '';
      input.focus();
      // functions for sending and receiving friend requests
      const responseTime = (10000 + Math.random() * 50000) / friendSpeedMultiplier();
      window.setTimeout(() => {
        outgoingRequests.delete(requestKey);
        if (Math.random() < friendAcceptanceChance(0.65)) {
          permitFriendAddition();
          friends.push({ name, picture: profilePictureFor(name) });
          gainXp(xpRewards.acceptedRequest);
          friendMessage.textContent = `${name} accepted your friend request.`;
          renderFriends();
          const acceptanceSound = isRareUser(name) ? rareRequestAcceptedSound : requestAcceptedSound;
          if (isRareUser(name)) flashRareAcceptance();
          showStatusNotification(friendMessage.textContent, 'w7/accept.png', acceptanceSound);
          playSpecialAcceptanceLayer(name);
        } else {
          friendMessage.textContent = `${name} declined your friend request.`;
          showStatusNotification(friendMessage.textContent, 'w7/decline.png', requestDeclinedSound);
        }
      }, responseTime);
    });
    // load the main page when the user has signed up
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (editingProfile) {
        currentBio = signupBio.value.trim();
        editingProfile = false;
        signupName.disabled = false;
        signupHeading.textContent = 'Create your account';
        signupSubtitle.textContent = 'Sign up to start using Friend7.';
        celebrityModeButton.hidden = false;
        signupSubmit.textContent = 'Sign up';
        signupScreen.hidden = true;
        openFriendsApp();
        saveProgress();
        return;
      }
      const selectedUsername = signupName.value.trim();
      if (!selectedUsername) {
        signupMessage.textContent = 'Enter a display name.';
        return;
      }
      // functions for usernames when signing up
      if (!isValidUsername(selectedUsername)) {
        signupMessage.textContent = 'Usernames can be up to 32 characters and use only letters, numbers, spaces, dashes, or underscores.';
        return;
      }
      // this only happens if the player tries to use a offensive username
      if (containsProhibitedSignupTerm(selectedUsername)) {
        signupMessage.textContent = 'That username is not allowed.';
        return;
      }
      if (storedUsernameExists(selectedUsername)) {
        signupMessage.textContent = 'That username is already taken.';
        return;
      }
      signupMessage.textContent = '';
      currentUsername = selectedUsername;
      unlockNotificationSound();
      signupSound.currentTime = 0;
      signupSound.play().catch(() => {});
      currentBio = signupBio.value.trim();
      if (!activeSaveSlot) activeSaveSlot = [1, 2, 3].find((slot) => !readSaveSlot(slot)) || 1;
      openFriendsApp();
      saveProgress();
    });

    renderSaveSlots();


<template>
  <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView='2'
      :loop="true"
      :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 20,
      modifier: 0.5,
      slideShadows: true,
    }"
      :modules="modules"
      :space-between="20"
      :navigation="true"
      :pagination="pagination"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide>
      <h3>Mateja</h3>
      <p>
        Ugodan ambijent, djelatnica stručna i pristupačna, masaža odlična! Puno mi je pomoglo kod ukočenog vrata!
        Preporučam svakome i dolazim sigurno ponovno! 😍
      </p>
    </swiper-slide>
    <swiper-slide>
      <h3>Kristina</h3>
      <p>
        Odlično iskustvo, vlasnica je vrlo pristupačna i temeljita. Tretman radiofrekvencijom i Deep lifting masaža lica
        su vrlo opuštajući, nakon tretmana se vidi razlika u licu. Preporučila bih tretman svakome :)
      </p>
    </swiper-slide>
    <swiper-slide>
      <h3>Vesna</h3>
      <p>Na bowen terapiju došla sam iz radoznalosti, zbog bolova u leđima stalno tražim pomoć. Divna djevojka Danijela mi
      je objasnila što ćemo raditi, samo sam se trebala opustiti i s povjerenjem predati svoje tijelo da napravi što
        zna. Oduševljena sam rezultatima.</p>
    </swiper-slide>
    <swiper-slide>
      <h3>Marija</h3>
      <p>Dugo sam bila u potrazi za mjestom na koje mogu ici redovito, a da sam stvarno zadovoljna. Cura koja radi je
      također fizioterapeut, jako draga i pristupacna. Ono sto me iznenadilo je da kad sam dosla prvi put, sjela sam i
      popricale smo o problemu – slusala je i to primjenila. Nije masirala po nekakvoj naucenoj spranci. Takodjer, placa
      se vrijeme, a ne odredjeni dio tijela tipa samo ledja ili cijelo tijelo kako je kod vecine – ponavljam, kazete na
        sto zelite fokus. Nakon masaze kao da hodam po oblacima 🥹</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Iva</h3>
      <p>Sve je uistinu izvrsno; od ambijenta, higijene, stručnosti, pedantnosti, uslužnosti, kvalitete usluge. Jako sam
        zadovoljna!</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Mateja</h3>
      <p>Odlučila sam se na Bowen terapiju zbog bolova na mjestu uboda spinalne anestezije te smanjenog osjeta na rezu i
      oko njega. Nakon odrađene tri terapije bolovi su se znatno smanjili, a ubrzo nakon i potpuno nestali. Osjet se
      također poboljšao te je ožiljak postao mekaniji. Imam jako pozitivno iskustvo te bih svakome preporučila Bowen
        terapiju.</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Marina</h3>
      <p>Napisala sam recenziju na googlu za koju mi se vlasnica salona zahvalila. Sve samo najbolje mogu napisati i ovdje
      jer je tako i bilo. Ljubaznost vrhunska, smirenost (a toga nam danas pogotovo treba), sve čisto, mirisno, sama
      masaža preeeeeekrasna. Vlasnica salona sve objasni, lijepo i pristupačno. Onaj osjećaj kad vidite da osoba zna što
      radi i kako radi, te zašto radi. Meni osobno znači itekako kad mi se objasni što mi se i zašto radi, volim znati
      te stvari. Od početka do kraja iskustvo koje si svatko treba priuštiti, čak su i rezultati itekako vidljivi. Koža
      blista, moji inače natečeni kapci smanjeni, koža glatka na dodir i onaj osjećaj kad prelazite prstima po koži i
      ona je sva napeta, tanka, kao da je odmah na kosti npr. na čelu. Kao da je sav višak nakupljen ispod kože lijepo
        eliminiran. Ma, morate probati!</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Sanda</h3>
      <p>Odlično iskustvo sa Bowen terapijom. Jednostavno naručivanje i dogovor oko termina, ugodna i opuštena atmosfera,
        odlični rezultati terapije. Svaka preporuka!</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Tina</h3>
      <p>Gospođa je jako ugodna i srdačna. Prvo me pitala iz kojih razloga dolazim na masažu, koji je problem i kakvu
        masažu preferiram prije nego smo krenuli uopće u drugu prostoriju. Sama masaža je bila odlična.</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Jelena</h3>
      <p>Vrlo ugodno iskustvo. Usluga je bila profesionalna, stručna i s puno pažnje. Danijela je izuzetno ljubazna i
        profesionalna, a prostor čist i ugodan. Sve preporuke!</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Martina</h3>
      <p>Oduševljena uslugom, pristupom, ljubaznošću! Od 12.mj sam tu barem jednom mjesečno, otkad sam obavila set od 4
      bowen terapije nemam migrene, koje su bile trodnevne i ništa mi nije pomagalo od lijekova. Nakon Bowen terapija
      kao da sam progledala.
        Svaka preporuka!❤️</p>
    </swiper-slide>
    <swiper-slide>
      <h3>Saša</h3>
      <p>Ne želite li ljubazan i profesionalan pristup iskusnog fizioterapeuta uz izvrsnu i pozitivnu komunikaciju u
      ugodnom ambijentu i uz to izvrsne rezultate nakon termina, onda svakako zaobiđite InStater i majstoricu Danijelu.
      Ako ipak želite sve na jednom mjestu, onda toplo preporučam da se javite Danijeli da dogovorimo termin, nećete
      požaliti, kao što nismo ni moja supruga i ja. Izvrsno iskustvo i vrlo dobri rezultati nakon fizioterapije i
        tretmana TECAR laserom.</p>
    </swiper-slide>
    <swiper-slide>
      <h3>Ingrid</h3>
      <p>Ugodno iskustvo s odličnim rezultatima deep lifting masaže+rf lica.Preporučam!😀</p>
    </swiper-slide>
    <swiper-slide>
      <h3>Marina</h3>
      <p>Danas sam bila na tretmanu lica i bez trunke pretjerivanja, bilo je božanstveno!
      Čim smo počele, pomislila sam - zašto si, zaboga ovo nisam prije priuštila?!
      Prvo nas je (mene i kćeri u pratnji) fizioterapeutkinja dočekala ljubazno i toplo. Znate ono kad odmah osjetite
      mir kad uđete u neki prostor? Taj mir dolazi od osobe/osoba u prostoru. Lijepo mi je objasnila sve što će mi
      raditi, koliko će koji dio trajati i da kažem bude li mi pritisak prejak. Divota je počela - prvo stimulacija
      točaka potrebna za aktivaciju limfe, slijedi mirisna kremica i ugodno zagrijavanje. Ljubazno objašnjavanje,
      odgovori na sva moja pitanja. Kreće masaža lica, deep lifting. To je nešto toliko ugodno da sam samo tonula sve
      dublje u ležaj , šutjela i beskrajno uživala. Ne može se to dostojno opisati, morate probati. MORATE!
      Na kraju bukalna masaža lica, što znači da se u rukavicama prstima masira lice iznutra, kroz usta. Također ugodno,
      a sigurno i korisno.
      Nisam se zamarala vidljivim rezultatom iako mi je bio obećan. No, čim sam se pogledala u ogledalo, zaista sam
      vidjela itekako primjetnu razliku. Cijelo lice je blistalo, izgledalo je svježije, mladolikije,a to mi je
      potvrdila i kćer koja je vrlo izravna i perfekcionist. I da nema vidljivih rezultata, došla bih ponovo. Ovako ću
      doći s još jednim očekivanjem više. Vrhunsko uživanje + vidljiv rezultat. Svaka čast na profesionalnosti, ne mogu
      dovoljno nahvaliti gospođu. Prostor čist, uredan, ugodan.
      Bravo! Ne samo da sam zadovoljna, ponosna sam i sretna da ovakve profesionalce imamo doma, u Hrvatskoj, u Zagrebu.
      Ovakav tretman je poklon koji bih rado za svaki rođendan! Sad sam se sama počastila, a ubuduće se nadam da će me i
        moje prijateljice. ; )</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Maja</h3>
      <p>Do ovog mjesta sam došla slučajno, preko oglasa na instagramu. Bila sam u potrazi za dobrim fizioterapeutom koji
      pruža usluge masaže. Malo je reći da sam ostala oduševljena. Prije svega mi se svidjela njezina ljubaznost i
      profesionalnost, a zatim i brza komunikacija oko dogovora termina. Sama masaža je bila odlična i mogu reći da se
      stvarno vidi da cura ima dosta iskustva u tome. Definitivno ću ponoviti još koji put, a svima koji su u potrazi za
        pravom masažom i osobom koja se razumije u to što radi, toplo preporučam ovo mjesto 😊.</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Tomislav</h3>
      <p>Do In Statera centra sam došao preko preporuke kolegice, koja mi je rekla da su joj pomogli s alergijama. Na prvu
      nisam vjerovao da takva terapija može pomoći mom kihanju, ali već nakon jednog seta terapija alergijske reakcije
        su gotovo pa nestale. Svaka čast!</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Valerija</h3>
      <p>Danijela je jako profesionalna i ljubazna, uživala sam u ugodnom ambijentu i masaži cijelog tijela koja je bila
      baš opuštajuća. Svaka preporuka i vidimo se opet! 🤗❤️</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Damir</h3>
      <p>Sve za pohvalu. Od zaintereiranosti za vase boljke, davanja savjeta, komunikacije. 5+</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Štefica</h3>
      <p>Tretman lica, točnije deep lifting, je fantastičan. Koriste se pomno odabrani visokokvalitetni proizvodi te se
      dobije odlična njega nakon koje lice izgleda osvježeno, hidratizirano i blistavo. Cijelo iskustvo je bilo vrlo
      ugodno, opuštajuće i zasigurno ću nastaviti sa kontinuiranim dolascima. Topla preporuka svima koji žele opuštajući
        užitak i pojačati njegu lica.</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Mladenka</h3>
      <p>Pa...odakle početi...nema nista ljepse nego kada vas na vratima dočeka mlada osoba s osmijehom na licu a o
      ljubaznosti i profesionalizmu da ne govorim.Vrijeme u tako ugodnom društvu zaista brzo prođe i poželite doci opet
      i opet i opet...Išla sam tecar tedapiju i poboljsanja su vidljiva...svakom toplo preporučujem terapiju u In
        strateri i vjerujte nećete požaliti!!Sretno!!👍👏</p>
    </swiper-slide>
    <swiper-slide>
      <h3>Marina</h3>
      <p>Sve pohvale za kolegicu fizioterapeut, od strucnosti, profesionalnosti, pristupa i jako ugodnog amijenta! Sve
        preporuke!</p>

    </swiper-slide>
    <swiper-slide>
      <h3>Ugur</h3>
      <p>Najbolja masaza koju sam ikad probao, vrlo stručan i profesionalan pristup i ugodan prostor.</p>
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination, EffectCoverflow} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default {
  methods: {Navigation},
  computed: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true
      },
      modules: [Navigation, Pagination, EffectCoverflow],
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  background-color: #C6AE8C;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: 600px;

  p {
    padding: 10px 50px;
    font-size: 1.2rem;
  }
}

.swiper-button-next,
.swiper-button-prev {
  color: #000;
}
</style>
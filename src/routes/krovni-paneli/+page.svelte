<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';
	import { base } from '$app/paths';

	import type { PanelLowestPrice } from '$lib/gSheets';
	export let data: PanelLowestPrice;
</script>

<h1 class="text-2xl tracking-tight text-base-content text-center">
	Krovni sendvič paneli - šta su i koja je njihova svrha
</h1>

<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Krovni paneli su ugradni elemeni sa termoizolacijom čija je namena da oblože krov na nekom
	stambenom objektu. Danas su vrlo popularni i koriste se na različitim građevinskim objektima baš
	zbog svojih prednosti koje pružaju.
</p>

<h2 class="flex mt-4 font-medium text-xl">Krovni paneli - detalji i karakteristike</h2>

<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Krovni paneli su napravljeni od izolacionih ispuna i dveju obloga, koje su zajedno spojene u jednu
	celinu. Bitno je reći da su su karakteristični po vrlo brzoj i praktičnoj ugradnji, a pritom
	temeljno pokrivaju krov, bez obzira o kom objektu se radi.
</p>
<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Krovni sendvič paneli su otporni na koroziju i insekte, kao i vodu, što je veliki plus, jer ćete u
	narednim godinama moći udobno da se smestite u svom domu ili nekom drugom prostoru, bez bojazni i
	straha da uskoro treba da zamenite krovne panele. Da spomenemo da su vrlo lagani, troškovi njihove
	proizvodnje su niski, i u praksi se pokazalo da oni nisu veliki teret konstrukcijama.
</p>
<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Međutim, da biste se opredelili za onaj željeni krovni sendvič panel, biće potrebno da, pored
	odgovarajućih dimenzija, on bude i vizuelno skladan. Panel krovni vam je dostupan u različitim
	stilovima i bojama, te ćete tako naći i one koji su zastupljeni u urbanim sredinama, u zelenoj
	boji, sivoj ili nekoj drugoj. Poznat je i valovit krovni panel, kao odraz modernog industrijskog
	stila, koji se uglavnom ugrađuje u urbanijim sredinama. Razni modeli postoje, što znači da, kada
	su u pitanju krovni paneli detalji igraju važnu ulogu na izbor.
</p>
<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Činjenica je da krovni paneli zaista mogu dati poseban pečat vašem domu ili nekom drugom objektu.
	A sada da sažmemo gore rečeno i kažemo ukratko šta karakteriše krovne panele:
</p>

<ol class="font-medium list-disc tracking-tight text-base-content px-10 mt-1 ">
	<li>brza ugradnja</li>
	<li>otpornost na rđu, vodu i koroziju</li>
	<li>lagani su za montiranje i održavanje</li>
	<li>pristupačne cene krovnih panela</li>
	<li>arhitektonska raznolikost (razni stilovi i boje)</li>
</ol>

<h2 class="flex mt-4 font-medium text-xl">Kako se ugrađuju</h2>
<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Pre nego što krenete da ih montirate, vrlo je važno da pre toga proverite površinu na koju se
	postavljaju. Vrlo je bitno da ona nema neravnina, već da bude svuda ravnomerna, u suprotnom će
	doći do kapljanja vode.
</p>

<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Takođe, pre nego što se bacite na posao, proverite da li ste skinuli zaštitnu foliju sa krovnih
	panela. Bilo bi dobro postaviti zaptivne trake, jer se tako sprečava mogućnost da dođe do
	oštećenja unutar panela krovnog. Ne zaboravite i ne fiksator za konstrukciju kog je potrebno
	imati, jer se njime postiže ojačavanje spojeva na krovnom panelu.
</p>

<h2 class="flex mt-4 font-medium text-xl">Cene krovnih panela</h2>

<p class="mt-2 w-full tracking-tight text-base-content ">
	Činjenica je da, kada su u pitanju krovni paneli cena je među prvim faktorima koja zanima
	korisnike. Pošto se cena krovnih panela utvrđuje na osnovu dimenzija koje vas zanimaju, na našoj
	strani <a class="underline text-blue-600 hover:text-blue-800" href="{base}/paneli-cene"
		>Cene panela</a
	> možete videti dodatne karakteristike naših krovnih panela (debljinu, dužinu i širinu) i tako utvrditi
	koliko bi vas koštao željeni krovni panel.
</p>
<p class="mt-2  w-full  tracking-tight text-base-content">
	Kada je u pitanju <a
		class="underline text-blue-600 hover:text-blue-800"
		href="{base}/krovni-paneli/tk5">TK5 krovni panel</a
	>
	cene na našem sajtu su vam istaknute bez i sa PDV-om, tako da možete tačno izračunati koliko bi vas
	on koštao. Najniza cena krovnog panela po m2 bez PDV-a iznosi {data.priceNoPDV}
	evra, odnosno {data.price} evra ukljucujuci PDV. Ukupna cena panela naravno zavisice od dimenzija krovnog
	panela za koji se odlučite kao i tipa.
</p>

<h2 class="flex mt-4 font-medium text-xl">Krovni paneli su investicija koja se isplati</h2>
<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Bilo da ste trenutno u procesu projektovanja doma ili planirate zameniti krov na kući, ugradnja
	krovnih panela će vam stvoriti dodatni posao, ali uprkos tome videćete da vredi posvetiti im vreme
	i namontirati ih, jer pružaju brojne benefite koje smo gore spomenuli.
</p>
<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Iako neki krovni paneli mogu biti skuplji, sagledajte i njihove ekološke prednosti, životni vek i
	shvatićete da je u njih ipak vredno investirati.
</p>

<p class="italic mt-2 w-full  tracking-tight text-base-content text-lg">
	Za više informacija o krovnim panelima - cenama, karakteristikama i njihovim prednostima, možete
	nas pozvati na telefone: <a
		class="underline text-blue-600 hover:text-blue-800"
		href="tel:0658027827"
		title="Pozovite nas">065 80 27 8 27</a
	>
	ili
	<a class="underline text-blue-600 hover:text-blue-800" href="tel:026731168" title="Pozovite nas"
		>026 73 11 68</a
	>
	ili nas
	<a class="underline text-blue-600 hover:text-blue-800" href="{base}/kontakt">Kontaktirajte</a> putem
	pisane forme.
</p>

<MetaTags
	title="Krovni paneli, sendvic panel krovni"
	titleTemplate="%s | {PUBLIC_DOMAIN}"
	description="Prodaja krovnih panela sa poliuretanskom vunom, veoma kvalitetni i imaju dug rok trajanja. Povoljne cene i brza isporuka na vašu adresu. Kontaktirajte nas."
	canonical="{PUBLIC_SITE_URL}/krovni-paneli"
/>

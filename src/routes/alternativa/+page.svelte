<script lang="ts">
	import { base } from '$app/paths';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';
</script>

<h1 class="mt-2 text-center text-2xl font font-medium text-base-content">Fabrika i proizvodnja</h1>

<p class="mt-1 tracking-tight text-base-content">
	Fabrika „ALTERNATIVA“ se nalaziti 30 km od Beograda, u modernom industrijskom naselju Šimanovci.
</p>
<p class="mt-1 tracking-tight text-base-content">
	Kao lider na tržištu u domenu termoizolacionih panela i profilisanih limova, Alternativa d.o.o. je uspostavila visoke tržišne strandarde u korištenju sirovina i opreme na kojoj se vrši proizvodnja. 
</p>

<h2 class="mt-2 text-center text-2xl tracking-tight text-base-content text-red-600">Kvalitet</h2>

<div class="mt-2 text-center tracking-tight text-base-content">
	<p>
		Paneli se proizvoditi u dužinama od 2m do 15m i u debljinama od 30mm do 200mm u zavisnosti od
		zahteva kupaca.
	</p>

	<p>
		U proizvodnji se koriste najsavremeniji materijali i sirovine renomiranih svetskih i evropskih
		dobavljača, što garantuje visoki kvalitet i karakteristike proizvoda.
	</p>
</div>

<h2 class="mt-2  text-2xl tracking-tight text-base-content">
	Visok kvalitet, pouzdanost i sigurnost postižemo usaglašenošću sa sledećim standardima:
</h2>

<ol class="list-decimal tracking-tight text-base-content pl-1 mt-2">
	<li>
		<strong class="text-red-600 font-medium">EN 14509:2014</strong> evropski standard koji definiše kvalitet
		proizvodnje, kvalitet proizvedenog panela i bezbednost panela za upotrebu.
	</li>
	<li>
		<strong class="text-red-600 font-medium">ISO 9001:2015</strong> međunarodno priznat standard koji
		daje okvir za sprovođenje sistema upravljanja kvalitetom.
	</li>
	<li>
		<strong class="text-red-600 font-medium">ISO 14001:2015</strong> međunarodni standard koji zahteva
		od organizacija da se bave pitanjima životne sredine.
	</li>
	<li>
		<strong class="text-red-600 font-medium">ISO 45001:2018</strong> sistem upravljanja bezbednošću i
		zdravljem na radu.
	</li>
	<li>
		<strong class="text-red-600 font-medium">ISO/IEC 27001:2013</strong> sistemi upravljanja bezbednošću
		informacija.
	</li>
</ol>

<h3 class="mt-2 text-3xl tracking-tight text-base-content">Jako je bitno znati:</h3>

<p class="mt-2 tracking-tight text-base-content">
	<strong class="font-medium">Za sečenje panela</strong> je zabranjeno koristiti brusilice, bušilice
	i slične alate čijom upotrebom dolazi do pregrevanja lima ili stvaranja opiljaka koji oštećuju zaštitu
	lima i dovode do pojave korozije na mestu oštećenja.
</p>

<p class="mt-1 tracking-tight text-base-content">
	<strong class="font-medium">Krovni paneli se pričvršćuju</strong> samourezujućim vijcima isključivo
	na rebrastom delu uz korišćenje jahača. Zavrtnji moraju biti optimalno pričvršćeni da bi izbegli deformaciju
	panela. Obavezno postavljati EPDM trake na spojevima krovnih panela (preklopima).
</p>

<p class="mt-1 tracking-tight text-base-content">
	<strong class="font-medium">Da ne bi narušili estetiku fasade</strong> prilikom montaža panela voditi
	računa o širini fuga, dilatacijama, spojevima.
</p>

<p class="tracking-tight text-base-content">Posebno uzeti u obzir da:</p>

<ol class="list-decimal tracking-tight text-base-content pl-1 mt-1">
	<li>Mehanička oštećenja panela trajno narušavaju estetski izgled fasade.</li>
	<li>Zaštitna folija na površini panela se oštećuje tokom izlaganja UV zracima i toploti.</li>
	<li>
		Zaštitnu foliju ukloniti neposredno pre ili nakon ugradnji panela, nepoštovanje preporuka dovodi
		do nemogućnosti uklanjanja folije sa površine panela.
	</li>
	<li>Za sečenje panela isključivo koristiti makaze i specijalne alate za sečenje panela.</li>
</ol>

<p class="mt-3 tracking-tight text-base-content ">
	Za sve dodatne informacije posetite oficijalni sajt proizvodjača:
	<a
		rel="noreferrer"
		target="_blank"
		href="https://alternativa.co.rs/"
		class="btn btn-active btn-primary">Alternativa paneli</a
	>
</p>

<MetaTags
	title="Alternativa panel, Alternativa paneli"
	titleTemplate="%s | {PUBLIC_DOMAIN}"
	description="Uz Alternativa panele mesečni računi su niži! Njima možete grejati svoj dom i smanjiti upotrebu električne energije. Investicija koja se isplati. Posetite naš sajt."
	canonical="{PUBLIC_SITE_URL}/alternativa"
/>

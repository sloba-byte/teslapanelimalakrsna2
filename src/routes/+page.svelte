<script lang="ts">
	import { base } from '$app/paths';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';

	let imgIds = ['3', '4', '5', '6', '7'];
	let alts = [
		'baner reklama alternativa paneli',
		'stovarište alternativa sendvic panela',
		'stovarište sendvic panela alternativa',
		'bager nosi sendvic panele',
		'stovariste sendvic panela alternativa',
		'slaganje sendvic panela'alternativa
	];
</script>

<h1 class="mt-2 text-center text-2xl font-medium tracking-tight text-base-content">
	Prodaja alternativa sendvič panela - Auto Šop Mala Krsna
</h1>

<h2 class="mt-2 text-center text-2xl tracking-tight text-base-content">
	Logistika prodaje i prevoza sendvič panela
</h2>

<ul class="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-3 ">
	{#each imgIds as id, i}
		<li class="shrink-0">
			<img alt={alts[i]} src="{base}/main-{id}.webp" width="500px" />
		</li>
	{/each}
</ul>

<h2 class="mt-2 text-red-600  text-2xl tracking-tight text-base-content">Šta su sendvič paneli?</h2>
<p class="mt-2 tracking-tight text-base-content">
	Sendvič paneli su ugradni elementi namenjeni za oblaganje spoljašnjih zidova zgrada i krovova, ali
	i radi postizanja izolovanosti zidova unutar objekata. U pitanju je sistem koji kvalitetno štiti
	građevinske objekte od raznih spoljašnjih faktora, i smatra se ekonomičnim i veoma povoljnim
	rešenjem, kada uzmemo u obzir prednosti koje nam pruža.Sendvič paneli su građevinski materijal
	savremenog dizajna, a što je vrlo bitno, veoma su lagani.
</p>

<p class="mt-2 tracking-tight text-base-content">
	Imaju po jedan spoljašnji i unutrašnji lim. Taj prostor koji postoji među njima popunjava se
	poliuretanskom penom, koja je negoriva i obična. Dodatne karakteristike ove pene jesta ta što
	omogućava proizvodu da bude lakši, a to smanjuje opterećenje na konstrukciju, montaža sendvič
	panela se odvija uglavnom brzo i praktično.
</p>
<p class="mt-2 tracking-tight text-base-content">
	Sendvič paneli se najčešće koriste u industrijskim halama, hladnjačama, kao i drugim energetskim
	zgradama.
</p>
<p class="mt-2 tracking-tight text-base-content">
	Postoji podela sendvič panela, tako da ih delimo na <a
		href="{base}/krovni-paneli"
		class="underline text-blue-600 hover:text-blue-800">Krovne Panele</a
	>
	i
	<a href="{base}/zidni-paneli" class="underline text-blue-600 hover:text-blue-800"
		>Zidne Panele
	</a>
	, o kojima smo pisali na sajtu.
</p>

<h2 class="mt-2 text-red-600  text-2xl tracking-tight text-base-content">
	Karakteristike sendvič panela
</h2>

<p class="mt-2 tracking-tight text-base-content">
	Za proizvodnju panela se koristi najkvalitetniji plastificirani lim, kao i najkvalitetniji
	proizvodi za izradu (PIR i PUR) pene.
</p>

<p class="mt-2 tracking-tight text-base-content">
	Sendvič paneli predstavljaju budućnost savremene gradnje. Njegove osnovne karakteristike su:
</p>

<ol class="font-medium list-decimal tracking-tight text-base-content px-10 mt-1 ">
	<li>Termička izolacija</li>
	<li>Otpornost na požar (PIR)</li>
	<li>Akustična izolacija</li>
	<li>Brzina gradnje</li>
</ol>
<p class="mt-2 tracking-tight text-base-content">
	Zbog svojih termoizolacionih karakteristika i kvaliteta savremene gradnje, ne samo da predstavlja
	materijal koji se brzo ugrađuje, već sendvič panel i štedi novac, kako izvođačima, tako i
	investitorima.
</p>

<p class="mt-2 flex w-full text-xl tracking-tight text-base-content">
	Dodjite kod nas i uverite se u našu sjajnu uslugu, vrhunski kvalitet i najbolje cene!
</p>

<MetaTags
	title="Prodaja sendvic panela, krovni i zidni paneli"
	titleTemplate="%s | {PUBLIC_DOMAIN}"
	description="Širok asortiman kvalitetnih i povoljnih sendvič panela za vaše domove. Brza isporuka na željenu adresu. Krovni i zidni paneli. Pozovite nas za više informacija."
	canonical="{PUBLIC_SITE_URL}/"
/>

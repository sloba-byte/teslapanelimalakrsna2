<script lang="ts">
	import type { PanelPrice } from '$lib/gSheets';
	import PanelPriceTable from '$lib/PanelPriceTable.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';

	interface PanelPrices {
		tk5: PanelPrice;
		tfh: PanelPrice;
		tfv: PanelPrice;
	}

	export let data: PanelPrices;
</script>

<h1 class="text-2xl tracking-tight text-base-content text-center font-medium">
	Cena sendvič panela
</h1>

<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Ako vas zanima koliko koštaju sendvic paneli cena nije fiksna, već ona zavisi od dimenzija datog
	panela, a dimenzija uključuje debljinu, dužinu i širinu.
</p>

<p class="mt-2 flex w-full  tracking-tight text-base-content">
	A da biste tačno znali koliko će vas koštati sendvič panel, pored dimenzija, utvrdite i oznaku
	koju svako od njih ima i po njoj se takođe razlikuju od ostalih.
</p>

<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Naša firma godinama uspešno trguje sendvič panelima, stoga nudimo visok kvalitet, povoljne cene
	sendvič panela i brzu isporuka. Za više informacija možete nas pozvati na:
</p>

<a class="underline text-blue-600 hover:text-blue-800" href="tel:0658027827" title="Pozovite nas"
	>065 80 27 8 27</a
> <br />
<a class="underline text-blue-600 hover:text-blue-800" href="tel:026731168" title="Pozovite nas"
	>026 73 11 68</a
>

<h2 class="flex mt-4 font-medium text-xl">
	Cena TFH zidnih panela sa skrivenim zavrtnjem, ispuna od poliuretana:
</h2>
<PanelPriceTable panelPriceData={data.tfh} />

<h2 class="flex mt-4 font-medium text-xl">
	Cena TFV zidnih panela sa vidljivim zavrtnjem, ispuna od poliuretana:
</h2>
<PanelPriceTable panelPriceData={data.tfv} />

<h2 class="flex mt-4 font-medium text-xl">Cena TK5 krovnih panela, ispuna od poliuretana:</h2>
<PanelPriceTable panelPriceData={data.tk5} />

<p class="mt-2 flex w-full  tracking-tight text-base-content">
	Ako vas zanimaju dodatne informacije o cenama sendvič panela, budite slobodni da nas kontaktirate.
	Vršimo uspešnu prodaju sendvič panela već duži niz godina.
</p>

<MetaTags
	title="Sendvič panel cena, krovni paneli cene"
	titleTemplate="%s | {PUBLIC_DOMAIN}"
	description="Povoljne cene sendvič panela na našem sajtu. Pružamo vam kvalitetne krovne, zidne i Tesla panele po pristupačnim cenama. Saznajte više na našem sajtu."
	canonical="{PUBLIC_SITE_URL}/paneli-cene"
/>

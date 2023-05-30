<script lang="ts">
	import { base } from '$app/paths';
	import type { PanelPrice } from '$lib/gSheets';
	import PanelPriceTable from '$lib/PanelPriceTable.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';

	export let data: PanelPrice;
</script>

<div class="sm:flex">
	<div class="sm:w-2/5 tracking-tight text-base-content">
		<h1 class="mt-4 font-medium text-3xl">
			Tesla paneli za krov - <strong class="text-red-600">TK5</strong>
		</h1>
		<div class="mt-6" />
		<p>
			Krovni termoizolacioni sendvič panel sa ispunom od poliuretana (PUR) ili samogasivog
			poliuretana (PIR).
		</p>
		<p>
			Spoljna strana panela je trapezoidno profilisani lim sa 5 rebara i sa profilacijom na
			unutrašnjoj strani čime je postignuta visoka nosivost panela.
		</p>
	</div>
	<img class="sm:w-3/5" alt="TK5" src="{base}/tk5_panel.webp" />
</div>

<h2 class="flex mt-4 font-medium text-3xl">Nasa ponuda panela sa cenama:</h2>
<PanelPriceTable panelPriceData={data} />

<p class="mt-3 tracking-tight text-base-content text-lg">
	Više o ovom tipu panela pročitaj na sajtu proizvodjača:
	<a
		rel="noreferrer"
		target="_blank"
		href="https://www.teslapanels.rs/paneli/tesla-tk5/"
		class="btn btn-active btn-primary">Tesla TK5 panel</a
	>
</p>

<p class="mt-3 tracking-tight text-base-content text-lg">
	Pogledajte i ostalu ponudu sendvič panela <a
		href="{base}/zidni-paneli/tfh"
		class="underline text-blue-600 hover:text-blue-800">Zidnog Panela TFH</a
	>
	kao i
	<a href="{base}/zidni-paneli/tfv" class="underline text-blue-600 hover:text-blue-800"
		>Zidnog Panela TFV
	</a>
</p>

<p class="mt-3 tracking-tight text-base-content text-lg">
	Na <a href="{base}/" class="underline text-blue-600 hover:text-blue-800">Početnoj Strani</a> stoje
	dodatne informacije o nama i sendvič panelima.
</p>

<MetaTags
	title="Krovni panel TK5, panel za krov"
	titleTemplate="%s | {PUBLIC_DOMAIN}"
	description="Krovni termoizolacioni panel greje vaš dom i pritom smanjuje mesečne troškove. Veoma kvalitetni i praktični za postavljanje. Pozovite nas za više informacija."
	canonical="{PUBLIC_SITE_URL}/krovni-paneli/tk5"
/>

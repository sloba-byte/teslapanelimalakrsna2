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
			Tesla paneli za zid - <strong class="text-red-600">TFH</strong>
		</h1>
		<div class="mt-6" />
		<p>
			Zidni panel sa skrivenim zavrtnjem i ispunom od poliuretana (PUR), ili samogasivog poliuretana
			(PIR).
		</p>
		<p>
			Sendvič panel sa skrivenim spojem odgovara najstrožijim estetskim zahtevima (pri montaži
			zavrtanj ostaje skriven u spoju panela).
		</p>
	</div>
	<img class="sm:w-3/5" alt="TFH" src="{base}/tfh_panel.webp" />
</div>

<h2 class="flex mt-4 font-medium text-3xl">Nasa ponuda panela sa cenama:</h2>
<PanelPriceTable panelPriceData={data} />

<p class="mt-3 tracking-tight text-base-content text-lg">
	Više o ovom tipu panela pročitaj na sajtu proizvodjača:
	<a
		rel="noreferrer"
		target="_blank"
		href="https://www.teslapanels.rs/paneli/tesla-tfh/"
		class="btn btn-active btn-primary">Tesla TFH panel</a
	>
</p>

<p class="mt-3 tracking-tight text-base-content text-lg">
	Pogledajte i ostalu ponudu sendvič panela <a
		href="{base}/zidni-paneli/tfv"
		class="underline text-blue-600 hover:text-blue-800">Zidnog Panela TFV</a
	>
	kao i
	<a href="{base}/krovni-paneli/tk5" class="underline text-blue-600 hover:text-blue-800"
		>Krovnog Panela TK5
	</a>
</p>

<p class="mt-3 tracking-tight text-base-content text-lg">
	Na <a href="{base}/" class="underline text-blue-600 hover:text-blue-800">Početnoj Strani</a> stoje
	dodatne informacije o nama i sendvič panelima.
</p>

<MetaTags
	title="Zidni panel TFH brenda Tesla"
	titleTemplate="%s | {PUBLIC_DOMAIN}"
	description="Zidni panel sa skrivenim zavrtnjem i ispunjen poliuretanskom vunom. Veoma kvalitetan panel koji zadovoljava najstrožije estetske zahvate. Posetite naš sajt."
	canonical="{PUBLIC_SITE_URL}/zidni-paneli/tfh"
/>

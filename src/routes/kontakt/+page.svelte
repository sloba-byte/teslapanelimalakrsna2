<script lang="ts">
	import { base } from '$app/paths';
	import { MetaTags } from 'svelte-meta-tags';
	import { PUBLIC_DOMAIN, PUBLIC_SITE_URL } from '$env/static/public';
</script>

<h1 class=" text-xl tracking-tight text-base-content text-center">
	Mi se nalazimo na Požarevačkom putu, posetite nas:
</h1>
<div class="mt-2 text-left tracking-tight text-base-content">
	<a rel="noreferrer" target="_blank" href="https://goo.gl/maps/TgrMjtdUaP6hFB859">
		<img alt="Nasa lokacija" src="{base}/lokacija.webp" style="border: 1px solid black" />
	</a>
	<p class="text-xs tracking-tight text-base-content">
		Klikom na mapu dobicete precizno našu lokaciju!
	</p>
</div>

<form
	method="POST"
	action="https://formsubmit.co/fb097466ea7a85e679efc3088550131d"
	class="w-full flex flex-col items-center"
>
	<div class="form-control w-full max-w-xs">
		<label for="name" class="label">
			<span class="label-text">Vaše Ime:</span>
		</label>

		<input
			type="text"
			name="name"
			class="input input-primary input-bordered w-full max-w-xs"
			required
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<label for="email" class="label">
			<span class="label-text">Kontakt Email:</span>
		</label>
		<input
			type="email"
			name="email"
			class="input input-primary input-bordered w-full max-w-xs"
			required
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<label for="company" class="label">
			<span class="label-text">Poruka:</span>
		</label>

		<textarea
			type="text"
			maxlength="256"
			placeholder=""
			name="message"
			rows="5"
			class="textarea input-primary input-bordered w-full max-w-xs "
			required
		/>
	</div>

	<button class="mt-4 btn btn-primary w-full max-w-xs">Kontaktirajte nas</button>

	<input type="text" name="_honey" style="display:none" />
	<input type="hidden" name="_captcha" value="false" />
</form>

<MetaTags
	title="Kontakt telefon i mejl"
	titleTemplate="%s | {PUBLIC_DOMAIN}"
	description="Ako vas zanimaju naši sendvič paneli, budite slobodni da nas kontaktirate. Takođe smo tu za vas i da vam pružimo odgovore na sva vaša pitanja."
	canonical="{PUBLIC_SITE_URL}/kontakt"
/>

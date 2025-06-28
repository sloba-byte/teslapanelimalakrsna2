<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths';
</script>

<div class="h-full w-full min-h-screen bg-base-200 ">
	<div class="bg-base-100 border-b-2">
		<div class="navbar xl:container mx-auto bg-base-100 px-4">
			<div class="navbar-start">
				<a href="{base}/" class="hidden lg:flex">
					<img
						alt="Vizit karta Auto Šopa"
						src="{base}/vizitka.png"
						width="250px"
						height="150px"
						style="border: 1px solid black"
					/>
				</a>

				<div class="dropdown">
					<button class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</button>

					<ul
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="{base}/zidni-paneli">Zidni Paneli</a></li>
						<li><a href="{base}/krovni-paneli">Krovni Paneli</a></li>
						<li><a href="{base}/paneli-cene">Paneli cene</a></li>
						<li><a href="{base}/alternativa">Proizvodnja Tesla</a></li>
						<li><a href="{base}/prica">O nama</a></li>
						<li><a href="{base}/kontakt">Kontakt</a></li>
					</ul>
				</div>
				<a href="{base}/" class="lg:hidden font-semibold">Auto Šop Sendvič Paneli</a>
			</div>
			<div class="navbar-end space-x-2 hidden lg:flex">
				<a href="{base}/zidni-paneli" class="btn btn-outline">Zidni panel</a>
				<a href="{base}/krovni-paneli" class="btn btn-outline">Krovni paneli</a>
				<a href="{base}/paneli-cene" class="btn btn-outline">Paneli cene</a>
				<a href="{base}/alternativa" class="btn btn-outline">Proizvodnja</a>
				<a href="{base}/prica" class="btn btn-outline">O nama</a>
				<a href="{base}/kontakt" class="btn btn-outline">Kontakt</a>
			</div>
		</div>
	</div>
	<div class="h-full w-full xl:container mx-auto mt-8 px-4">
		<slot />
		<footer class="footer p-10 bg-base-200 text-base-content">
			<div>
				<a href="{base}/">
					<img
						height="100px"
						width="150px"
						alt="Lokacija Auto Šopa"
						src="{base}/alternativa_logo.png"
					/>
				</a>
				<p class="font-semibold">Auto Šop Mala Krsna<br />Prodaja sendvič panela</p>
			</div>
			<div>
				<span class="footer-title">Lokacija</span>
				<a
					class="underline text-blue-600 hover:text-blue-800 "
					rel="noreferrer"
					target="_blank"
					href="https://goo.gl/maps/TgrMjtdUaP6hFB859"
				>
					Požarevački put bb <br /> Mala Krsna
				</a>
			</div>
			<div>
				<span class="footer-title">Telefon</span>
				<a
					class="underline text-blue-600 hover:text-blue-800"
					href="tel:0658027827"
					title="Pozovite nas">065 80 27 8 27</a
				>
				<a
					class="underline text-blue-600 hover:text-blue-800"
					href="tel:026731168"
					title="Pozovite nas">026 73 11 68</a
				>
			</div>
			<div>
				<span class="footer-title">E-mail</span>
				<a class="underline text-blue-600 hover:text-blue-800" href="mailto:autosopdoo@yahoo.com"
					>autosopdoo@yahoo.com</a
				>
			</div>
			<div>
				<span class="footer-title">Radno vreme</span>
				<p>Pon-Sub: 8-17</p>
			</div>
		</footer>
	</div>
</div>

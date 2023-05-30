<script lang="ts">
	import type { PanelPrice } from '$lib/gSheets';

	export let panelPriceData: PanelPrice;
</script>

<div class="flex flex-col">
	<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="min-w-full">
					<thead class="bg-white border-b">
						<tr>
							{#each panelPriceData.header as h}
								<th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
									{h}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each panelPriceData.values as values, i}
							<tr class="{i % 2 == 0 ? 'bg-gray-100' : 'bg-white'} border-b">
								{#each values as v}
									<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{v}</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<script lang="ts">

	export let data;
	const { products } = data;

	console.log(products);
</script>

<div class="grid grid-cols-4 gap-8 p-8 max-w-7xl self-center">
{#each products as product}
<div class="flex flex-col gap-2">
	<img src="{product.thumbnail}" alt="" class="object-cover aspect-square ">
	<p>{product.title}</p>
	<p class="text-xs opacity-80">{product.description}</p>
</div>
{/each}
</div>

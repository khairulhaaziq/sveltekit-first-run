<script lang="ts">
	export let id: number | undefined = undefined
	export let asChild = false;
	export let type: 'single' | 'multiple' = 'single';
	export let value: string;
	export let defaultValue: string;
	export let onValueChange: (value: string) => void;
	export let collapsible = false;
	export let disabled = false;
</script>

<div >
	<slot />
</div>

<script lang="ts" context="module">
	import { Alert } from '@svelteuidev/core';
	import { ExclamationTriangle } from 'radix-icons-svelte';

	let dialog: HTMLDialogElement;
	const openDialog = () => {
		dialog?.showModal();
	};
    const closeDialog = () => {
        dialog?.close();
    }

	export { openDialog, closeDialog };
</script>

<dialog class="bg-transparent" bind:this={dialog}>
	<Alert
		class="w-56 p-8"
		icon={ExclamationTriangle}
		title="Oopps!"
		variant="filled"
        withCloseButton
		on:close={closeDialog}>
        <slot />
        </Alert
	>
</dialog>

<script lang="ts">
	import { Button } from '@svelteuidev/core';
	import { goto } from '$app/navigation';

	export let type: 'Login' | 'Logout' ;

	const redirectToLoginPage = () => {
		goto('/login');
	};

</script>

{#if type === "Login"}
	<Button color="dark" on:click={redirectToLoginPage}>
		{type}
	</Button>
{:else}
<Button color="dark">
	{type}
</Button>
{/if}

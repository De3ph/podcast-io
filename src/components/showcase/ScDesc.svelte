<script lang="ts">
    import {Grid} from '@svelteuidev/core'
    import FadeIn from '$components/wrappers/FadeIn.svelte';
    export let text:string = "";

    const gridDescCol = 'flex justify-center items-center text-center';
</script>

<Grid.Col span={4} class={gridDescCol}>
    <FadeIn>
        <p>{text}</p>
    </FadeIn>
</Grid.Col>
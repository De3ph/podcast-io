<script lang="ts">
    import {Grid} from '@svelteuidev/core'
    import FadeIn from '$components/wrappers/FadeIn.svelte';
    export let text:string = "";

    const gridDescCol = 'flex justify-center items-center text-center';
</script>

<Grid.Col span={4} >
    <FadeIn>
        <p
        class="flex justify-center items-center text-center h-full leading-relaxed"
        >{text}</p>
    </FadeIn>
</Grid.Col>
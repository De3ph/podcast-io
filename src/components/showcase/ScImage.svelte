<script lang="ts">
    import {Grid, AspectRatio, Image} from '@svelteuidev/core'
    import FadeIn from '$components/wrappers/FadeIn.svelte';
    export let img:string = "";
</script>

<Grid.Col span={8}>
    <FadeIn>
        <AspectRatio ratio={16 / 9}>
            <Image src={img} fit="cover" />
        </AspectRatio>
    </FadeIn>
</Grid.Col>
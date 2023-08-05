<script lang="ts">
    import {Grid, AspectRatio, Image} from '@svelteuidev/core'
    import FadeIn from '$components/wrappers/FadeIn.svelte';
    export let img:string = "";
    export let isVertical:boolean = false;
</script>

<Grid.Col span={8}>
    <FadeIn>
        <AspectRatio ratio={isVertical ? 3/4 : 16 / 9}>
            <Image src={img} fit="cover" />
        </AspectRatio>
    </FadeIn>
</Grid.Col>
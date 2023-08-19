<script lang="ts">
    import {Grid, AspectRatio, Image} from '@svelteuidev/core'
    export let img:string = "";
    export let isVertical:boolean = false;
</script>

<Grid.Col span={8}>
        <AspectRatio ratio={isVertical ? 3/4 : 16 / 9}>
            <Image src={img} fit="cover" loading="lazy" />
        </AspectRatio>
</Grid.Col>
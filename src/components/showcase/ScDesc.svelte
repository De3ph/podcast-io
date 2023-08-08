<script lang="ts">
    import {twMerge} from "tailwind-merge"
    import {Grid} from '@svelteuidev/core'
    export let text:string = "";
    export let textRight:boolean = false;

</script>

<Grid.Col span={4} >
        <p
        class={twMerge("flex justify-center items-center h-full leading-relaxed",textRight ? "text-right" : "text-left")}
        >{text}</p>
</Grid.Col>
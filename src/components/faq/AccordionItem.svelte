<script lang="ts">
    export let value:string;
    export let title:string;
    export let desc:string;

    import {Accordion} from "@svelteuidev/core"
    import AccordionControl from "./AccordionControl.svelte";
    import AccordionDesc from "./AccordionDesc.svelte";

</script>

<Accordion.Item {value}>
    <AccordionControl slot="control" {title} />
    <AccordionDesc {desc} />
</Accordion.Item>
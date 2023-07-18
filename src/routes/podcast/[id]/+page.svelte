<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    console.log('====================================');
    console.log(data);
    console.log('====================================');
</script>

<main>
    {data.id}
</main>
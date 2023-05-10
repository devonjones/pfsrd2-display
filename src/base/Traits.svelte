<script>
	import Trait from './Trait.svelte'
    export let stat_block;

    function short_alignment(aligns) {
        let align = aligns[0]
        let newname = "";
        for (let align of aligns) {
            newname += align.name[0]
        }
        align.name = newname;
        return align;
    }

    function filter_traits(traits) {
        let newtraits = [];
        let aligns = [];
        for (let trait of traits) {
            if (trait.classes.includes('alignment')) {
                aligns.push(trait)
            } else {
                if (aligns.length > 0) {
                    let align = short_alignment(aligns)
                    newtraits.push(align);
                    aligns = [];
                }
                newtraits.push(trait);
            }
        }
        return newtraits;
    }

    let traits = filter_traits(stat_block.creature_type.traits)
</script>

<traits>
    {#each traits as trait}
        <Trait trait={trait}/>
    {/each}
</traits>

<style>
	traits {
		padding: 1em;
        display: flex;
        justify-content: flex-start;
        padding: 0px;
	}
</style>
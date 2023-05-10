<script>
    // TODO: All the trait details
    // TODO: Sources
    // TODO: game-obj, game-id
    // TODO: text
    // TODO: links

    function set_classes(trait) {
        let classes = trait.classes.join(" ")
        if (trait.classes.includes('rarity')) {
            classes += " " + trait.name.toLowerCase()
        }
        return classes
    }

    export let trait;
    const classes = set_classes(trait)
</script>

<trait class={classes}>
    {trait.name}
</trait>

<style>
	trait {
        border-width: 2px;
        border-style: double;
		text-transform: uppercase;
        display: inline-block;
        font-size: 1em;
        font-weight: 600;
		color: #ffffff;
        border-color: #c8bf8f;
        padding: 5px;
        padding-top: 0px;
        padding-bottom: 0px;
	}

    .uncommon {
        background-color: #98503c;
    }

    .rare {
        background-color: #00338a;
    }

    .unique {
        background-color: #711d93;
    }
    
    .alignment {
        background-color: #6c7ab9;
    }

    .size {
        background-color: #4ca073;
    }

    .creature_type {
        background-color: #5d0000;
    }

    .ancestry {
        background-color: #5d0000;
    }

    .monster {
        background-color: #5d0000;
    }
</style>
<script>
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
        background-color: #c45500;
    }

    .rare {
        background-color: #0c1466;
    }

    .unique {
        background-color: #800080;
    }
    
    .alignment {
        background-color: #4287f5;
    }

    .size {
        background-color: #478c42;
    }

    .creature_type {
        background-color: #522e2c;
    }

    .ancestry {
        background-color: #522e2c;
    }

    .monster {
        background-color: #522e2c;
    }
</style>
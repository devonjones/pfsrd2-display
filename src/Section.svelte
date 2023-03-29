<script>
	import Sources from './Sources.svelte';
    import Section from './Section.svelte';
    import Sidebar from './Sidebar.svelte';

    export let section;
    export let level;
    let lower_level = parseInt(level, 10) + 1;
</script>

<section>
    {#if level == 2}
        <h2>
            <span>{section.name}</span>
            {#if section.sidebar_heading}
                <span style="margin-left:auto; margin-right:0">{section.sidebar_heading}</span>
            {/if}
        </h2>
    {:else if level == 3}
        <h3>
            <span>{section.name}</span>
            {#if section.sidebar_heading}
                <span style="margin-left:auto; margin-right:0">{section.sidebar_heading}</span>
            {/if}
        </h3>
    {:else}
        <h4>
            <span>{section.name} {level}</span>
            {#if section.sidebar_heading}
                <span style="margin-left:auto; margin-right:0">{section.sidebar_heading}</span>
            {/if}
        </h4>
    {/if}

    <div id=sources>
        {#if section.sources}
            <Sources sources={section.sources}/><br>
        {/if}
    </div>

    <div id=section_text>
        {@html section.html}
    </div>

    {#if section.sections}
        <div id=sections>
            {#each section.sections as section}
                {#if section.subtype != "sidebar"}
                <Section section={section} level={lower_level}/>
                {:else}
                    <Sidebar sidebar={section}/>
                {/if}
            {/each}
        </div>
    {/if}

</section>

<style>
    h2 {
        color: #c8bf8f;
        background-color: #5d0000;
		text-transform: uppercase;
		font-size: 1.5em;
		font-weight: 600;
        display: flex;
        justify-content: flex-start;
        border-radius: 3px;
        border-width: 0px;
        padding-left: -24px;
        padding-right: 9px;
        margin-bottom: 5px;
        width: 100%;
    }

    h3 {
        color: #c8bf8f;
        background-color: #6b3b37;
		text-transform: uppercase;
		font-size: 1.3em;
		font-weight: 500;
        display: flex;
        justify-content: flex-start;
        border-radius: 3px;
        border-width: 0px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: -24px;
        padding-right: 9px;
        width: 100%;
    }

    h4 {
        color: #c8bf8f;
        background-color: #913e00;
		text-transform: uppercase;
		font-size: 1.1em;
		font-weight: 500;
        display: flex;
        justify-content: flex-start;
        border-radius: 3px;
        border-width: 0px;
        padding-left: -24px;
        padding-right: 9px;
        width: 100%;
    }

    #sources {
        padding-left: 15px;
    }

    section {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
	}
</style>
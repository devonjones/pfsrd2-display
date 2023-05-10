<script>
	import Sources from '../base/Sources.svelte';
    import Section from './Section.svelte';
    import Sidebar from './Sidebar.svelte';
	import {markdown} from '../markdown/markdown';

    export let section;
    export let level;
    let lower_level = parseInt(level, 10) + 1;
    let expanded = false
</script>

<section>
    {#if level == 2}
        <h2 id="{section.name}" class={expanded ? "expanded" : "retracted"}>
            <span>
                {section.name}
                <a href="#{section.name}" class="fold" aria-expanded={expanded} on:click={() => expanded = !expanded}>
                    {#if expanded}&#9660;{:else}&#9654;{/if}
                </a>
            </span>
            {#if section.sidebar_heading}
                <span style="margin-left:auto; margin-right:0">{section.sidebar_heading}</span>
            {/if}
        </h2>
    {:else if level == 3}
        <h3 id="{section.name}" class={expanded ? "expanded" : "retracted"}>
            <span>
                {section.name}
                <a href="#{section.name}" class="fold" aria-expanded={expanded} on:click={() => expanded = !expanded}>
                    {#if expanded}&#9660;{:else}&#9654;{/if}
                </a>
            </span>
            {#if section.sidebar_heading}
                <span style="margin-left:auto; margin-right:0">{section.sidebar_heading}</span>
            {/if}
        </h3>
    {:else}
        <h4 id="{section.name}" class={expanded ? "expanded" : "retracted"}>
            <span>
                {section.name}
                <a href="#{section.name}" class="fold" aria-expanded={expanded} on:click={() => expanded = !expanded}>
                    {#if expanded}&#9660;{:else}&#9654;{/if}
                </a>
            </span>
            {#if section.sidebar_heading}
                <span style="margin-left:auto; margin-right:0">{section.sidebar_heading}</span>
            {/if}
        </h4>
    {/if}

    <div id=sources hidden={!expanded}>
        {#if section.sources}
            <Sources sources={section.sources}/><br>
        {/if}
    </div>

    <div id=section_text hidden={!expanded}>
        {@html markdown(section.text)}
    </div>

    {#if section.sections}
        <div id=sections hidden={!expanded}>
            {#each section.sections as section}
                {#if section.subtype != "sidebar"}
                <Section section={section} level={lower_level}/>
                {/if}
            {/each}
        </div>
    {/if}
    {#if section.sections}
        <div id=sidebars>
            {#each section.sections as section}
                {#if section.subtype == "sidebar"}
                    <Sidebar sidebar={section}/>
                {/if}
            {/each}
        </div>
    {/if}

</section>

<style>
    .retracted {
        margin-top: 3px;
        margin-bottom: 3px;
        display: block;
    }

    .fold {
        color: #c8bf8f;
        text-decoration: none;
    }

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
        margin-top: 7px;
        margin-bottom: 5px;
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
        margin-top: 7px;
        margin-bottom: 5px;
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
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 0px;
        color: #ffffff;
	}
</style>
<script>
	import Sources from '../base/Sources.svelte';
	import {markdown} from '../markdown/markdown';

    export let sidebar;
    let expanded = false
</script>

<sidebar>
    <h5 id="{sidebar.name}" class={expanded ? "expanded" : "retracted"}>
        <span>
            {sidebar.name}
            <a href="#{sidebar.name}" class="fold" aria-expanded={expanded} on:click={() => expanded = !expanded}>
                {#if expanded}&#9660;{:else}&#9654;{/if}
            </a>
        </span>
        {#if sidebar.sidebar_heading}
            <span style="margin-left:auto; margin-right:0">{sidebar.sidebar_heading}</span>
        {/if}
    </h5>
    <div id=sources hidden={!expanded}>
        {#if sidebar.sources}
            <Sources sources={sidebar.sources}/><br>
        {/if}
    </div>

    <div id=section_text hidden={!expanded}>
        {@html markdown(sidebar.text)}
    </div>
</sidebar>

<style>
    .retracted {
        margin-top: 3px;
        margin-bottom: 3px;
    }

    .fold {
        color: #c8bf8f;
        text-decoration: none;
    }

    h5 {
        color: #c8bf8f;
        background-color: #002564;
		text-transform: uppercase;
        display: flex;
        justify-content: flex-start;
		font-size: 1.1em;
		font-weight: 500;
        border-radius: 3px;
        border-width: 0px;
        padding-left: -24px;
        padding-right: 9px;
        margin-top: 7px;
        margin-bottom: 5px;
        width: 100%;
    }

    #sources {
        padding-left: 15px;
    }

    sidebar {
		padding: 1em;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 0px;
        color: #ffffff;
	}
</style>
<script>
	import Sources from './Sources.svelte';

    export let sidebar;
</script>

<sidebar>
    <h5>
        <span>{sidebar.name}</span>
        {#if sidebar.sidebar_heading}
            <span style="margin-left:auto; margin-right:0">{sidebar.sidebar_heading}</span>
        {/if}
    </h5>
    <div id=sources>
        {#if sidebar.sources}
            <Sources sources={sidebar.sources}/><br>
        {/if}
    </div>

    <div id=section_text>
        {@html sidebar.html}
    </div>
</sidebar>

<style>
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

    section {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
	}
</style>
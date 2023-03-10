<script>
    function format_source(source) {
        // TODO: Link
        let source_text = source.name;
        if (source.page) {
            source_text += " pg. " + source.page
        }
        if (source.errata) {
            source_text += " er. " + source.errata
        }
        return source_text;
    }

    function format_sources(sources) {
        let sourcestext = []
        for (let source of sources) {
            sourcestext.push(format_source(source));
        }
        return sourcestext.join(", ")
    }

    export let sources;
    let sources_text = format_sources(sources);
</script>

<sources>
    <b>Source</b> {sources_text}
</sources>

<style>
    b {
        color: #c8bf8f;
    }

    sources {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
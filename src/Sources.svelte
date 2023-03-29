<script>
    function format_errata(errata) {
        // TODO: alt
        // TODO: game-obj
        // TODO: aonid

        let errata_text = "";
        if (errata) {
            errata_text += "<sup>" + errata.name + "</sup>"
        }
        return errata_text
    }

    function format_source(source) {
        // TODO: Link

        let source_text = source.name;
        source_text += format_errata(source.errata)
        if (source.page) {
            source_text += " pg. " + source.page
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
</script>

<sources>
    <b>Source</b> {@html format_sources(sources)}
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
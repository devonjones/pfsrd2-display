<script>
	import {format_modifiers, format_range, format_number} from './monsterlib';
    import AbilitySummary from './AbilitySummary.svelte'

    function format_language(language) {
        // TODO: Link
        let language_text = language.name;
        language_text += format_modifiers(language)
        return language_text;
    }

    function format_languages(languages) {
        // TODO: Link
        if (languages.languages) {
            let languages_list = [];
            for (let language of languages.languages) {
                languages_list.push(format_language(language));
            }
            let languages_text = languages_list.join(", ")
            languages_text += format_modifiers(languages)
            return languages_text
        }
        return "";
    }

    export let languages;
    let languages_text = format_languages(languages);
</script>

<languages>
    <b>Languages</b> {languages_text};
    {#if languages.communication_abilities}
        <AbilitySummary abilities={languages.communication_abilities}/>
    {/if}
</languages>

<style>
    b {
        color: #c8bf8f;
    }

    languages {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
<script>
	import {format_modifiers, format_range, format_number} from './monsterlib';

    function format_perception(perception) {
        // TODO: Link
        
        let perception_text = "";
        perception_text += format_number(perception.value)
        perception_text += format_modifiers(perception)
        return perception_text;
    }

    function format_special_sense(sense) {
        // TODO: Link

        let sensetext = sense.name
        sensetext += format_modifiers(sense)
        sensetext += format_range(sense);
        return sensetext
    }

    function format_special_senses(special_senses) {
        let sensetext = []
        if (special_senses) {
            for (let sense of special_senses) {
                sensetext.push(format_special_sense(sense));
            }
        }
        return sensetext.join(", ");
    }

    export let senses;
</script>

<senses>
    <b>Perception</b> {format_perception(senses.perception)}; {format_special_senses(senses.special_senses)}
</senses>

<style>
    b {
        color: #c8bf8f;
    }

    senses {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
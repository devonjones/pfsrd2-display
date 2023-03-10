<script>
	import {format_modifiers, format_range} from './monsterlib';

    function format_speed(speed) {
        // TODO: Link
        let speed_text = speed.movement_type + " " + speed.value + " feet";
        speed_text += format_modifiers(speed)
        return speed_text;
    }

    function format_speeds(speeds) {
        if (speeds.movement) {
            let speed_list = [];
            for (let speed of speeds.movement) {
                speed_list.push(format_speed(speed));
            }
            let speed_text = speed_list.join(", ")
            return speed_text
        }
        return "";
    }

    export let speeds;
    let speed_text = format_speeds(speeds);
    let modifiers_text = format_modifiers(speeds, false)
</script>

<speed>
    <b>Speed</b> {speed_text}; {modifiers_text}
</speed>

<style>
    b {
        color: #c8bf8f;
    }

	speed {
		padding: 1em;
        display: inline-block;
        text-align: left;
        padding: 0px;
        color: #ffffff;
        text-indent: -15px
	}
</style>
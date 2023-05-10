<script>
	import {format_modifiers, format_range} from './monsterlib';

    function format_speed(speed) {
        // TODO: Link
        // TODO: name (broken out)

        let speed_text = "";
        if (speed.movement_type != "walk") {
            speed_text += speed.movement_type + " "
        }
        speed_text += speed.value + " feet";
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
</script>

<speed>
    <b>Speed</b> {format_speeds(speeds)}; {format_modifiers(speeds, false)}
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
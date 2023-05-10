<script>
    import { get_action_image } from "../markdown/markdown"

    function format_action_image(action) {
        let base = ["Free Action", "Reaction", "One Action", "Two Actions", "Three Actions"]
        if (base.includes(action.name)) {
            return "<img src='" + get_action_image(action.name) + "'' alt='" + action.name + "'' height=15/>";
        } else if (action.name == "One to Three Actions") {
            let text = "<img src='" + get_action_image("One Action") + "'' alt='" + action.name + "'' height=15/>";
            text += " to ";
            text += "<img src='" + get_action_image("Three Actions") + "'' alt='" + action.name + "'' height=15/>";
            return text;
        } else if (action.name == "One or Two Actions") {
            let text = "<img src='" + get_action_image("One Action") + "'' alt='" + action.name + "'' height=15/>";
            text += " or ";
            text += "<img src='" + get_action_image("Two Actions") + "'' alt='" + action.name + "'' height=15/>";
            return text;
        } else if (action.name == "Two or Three Actions") {
            let text = "<img src='" + get_action_image("Two Actions") + "'' alt='" + action.name + "'' height=15/>";
            text += " or ";
            text += "<img src='" + get_action_image("Three Actions") + "'' alt='" + action.name + "'' height=15/>";
            return text;
        }
        throw "Don't recognize action " + action.name
    }

    export let action;
    let action_image = format_action_image(action)
</script>

&nbsp;{@html action_image}

<style>
    img {
        padding-left: 3px;
    }
</style>
import {markdown_inline} from '../markdown/markdown';

export function format_modifiers(obj, parens=true) {
    // TODO: handle links
    if (obj.modifiers) {
        let text = " "
        if (parens) {
            text += "("
        }
        text += obj.modifiers.map(x => x['name']).join(", ")
        if (parens) {
            text += ")"
        }
        return markdown_inline(text)
    }
    return ""
}

export function format_text_semi(text) {
    let outtext = text.trim()
    if (outtext.endsWith(".") || outtext.endsWith(";")) {
        outtext = outtext.substring(0, outtext.length-1);
    }
    return markdown_inline(outtext + ";")
}

export function format_range(obj) {
    // TODO: Format this manually instead of using text
    // TODO: range ^
    // TODO: unit ^
    // TODO: modifiers ^
    if (obj.range) {
        return " " + obj.range.text
    }
    return ""
}

export function format_saving_throw(obj) {
    // TODO: Format this manually instead of using text
    // TODO: dc ^
    // TODO: save_type ^
    // TODO: result ^
    let text = "";
    if (obj.saving_throw) {
        text += " " + obj.saving_throw.text
        text += format_modifiers(obj)
    }
    return text
}

export function format_traits(traits) {
    // TODO: Sources
    // TODO: game-obj
    // TODO: game-id
    // TODO: text
    // TODO: links
    // TODO: classes
    if (traits) {
        let trait_list = [];
        for (let trait of traits) {
            let trait_text = trait.name
            if (trait.value) {
                trait_text += " " + trait.value
            }
            trait_list.push(trait_text)
        }
        return " (" + trait_list.join(", ") + ")";
    }
    return "";
}

export function format_number(value) {
    if (!value && value != 0) {
        return "—"
    }
    let number = ""
    if (value > -1) {
        number += "+"
    }
    number += value
    return number
}

export function format_damage(damage) {
    // TODO: Links

    if (damage) {
        let damage_list = [];
        for (let d of damage) {
            let damage_text = "";
            if (d.formula) {
                damage_text += d.formula;
            }
            if (d.persistent) {
                damage_text += " persistent";
            }
            if (d.splash) {
                damage_text += " splash";
            }
            if (d.damage_type) {
                damage_text += " " + d.damage_type;
            }
            if (d.effect) {
                damage_text += " " + d.effect;
            }
            if (d.notes) {
                damage_text += " (" + d.notes + ")";
            }
            damage_list.push(damage_text)
        }
        return damage_list.join(" plus ")
    }
    return ""
}

export function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}


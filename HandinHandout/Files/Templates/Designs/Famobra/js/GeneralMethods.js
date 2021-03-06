function getCookie(name) {
    var pattern = RegExp(name + "=.[^;]*")
    matched = document.cookie.match(pattern)

    if (matched) {
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
}

function CreateItemFromJson(Obj, DivId, Tmpl) {
    var Template = $(Tmpl).html();
    for (Property in Obj) {
        Item = Obj[Property]; var NameKey = "Obj." + Property; Template = Template.replace(new RegExp(NameKey, "gi"),
        Item);
    }
    $(DivId).append(Template);

}
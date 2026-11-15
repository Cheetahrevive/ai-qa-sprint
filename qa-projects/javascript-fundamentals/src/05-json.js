// JSON: the format APIs speak. stringify = object -> text, parse = text -> object.
function toJson(obj) { return JSON.stringify(obj); }
function fromJson(text) { return JSON.parse(text); }
function isValidJson(text) { try { JSON.parse(text); return true; } catch { return false; } }
if (require.main === module) console.log(toJson({ ok: true }), isValidJson("{bad json"));
module.exports = { toJson, fromJson, isValidJson };

/**
 * moduleName:"saveLasseModule",
 * author:"Lasse",
 * version:"1.0v",
*/

module.exports.datoDansk = () => {
    return new Date().toISOString().slice(0, 10);
}

module.exports.klokkeslet = () => {
    return new Date().toLocaleTimeString();
}
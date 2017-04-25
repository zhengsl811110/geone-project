export default class Adapter {
    static buildingTable(data) {
        let json = {};
        for (var item of data) {
            if (json.hasOwnProperty(item.name))
                json[item.name].push(item);
            else
                json[item.name] = [item];
        }
        return json;
    }
}
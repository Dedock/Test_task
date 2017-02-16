var a = [
    {"name": "root", "parentId": null, "id": 100},
    {"name": "1stlevelChild1", "parentId": 100, "id": 201},
    {"name": "1stlevelChild2", "parentId": 100, "id": 202},
    {"name": "2ndlevelChild1", "parentId": 201, "id": 301},
    {"name": "2ndlevelChild2", "parentId": 201, "id": 301}
];


function convertToHierarchical(flat) {

    var roots = [];

    // make list of all existed id
    var id = flat.map(function (item) {
        return item.id;
    });
    //connect child with it's parent
    flat.forEach(function (item) {
        item.childs = [];
        if (item.parentId === null) {
            roots.push(item)
        } else if (id.indexOf(item.parentId) > -1) {
            var parent = flat[id.indexOf(item.parentId)];
            parent.childs.push(item);
        }
    });

    return roots
}


var c = convertToHierarchical(a);



var b = [
    {
        "name": "root",
        "parentId": null,
        "id": 100,
        "childs": [
            {
                "name": "1stlevelChild1",
                "parentId": 100,
                "id": 201,
                "childs": [
                    {"name": "2ndlevelChild1", "parentId": 201, "id": 301, "childs": []},
                    {"name": "2ndlevelChild2", "parentId": 201, "id": 301, "childs": []}
                ]
            },
            {
                "name": "1stlevelChild2",
                "parentId": 100,
                "id": 202,
                "childs": []
            }
        ]
    }
];


console.log(_.isEqual(c,b));
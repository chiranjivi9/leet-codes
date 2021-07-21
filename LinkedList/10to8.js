data = {
    "A": 6,
    "Foo": {
        "Bar": {
            "B": 4
        }
    },
    "Foo2": {
        "Bar2": {
            "Baz": {
                "C": 25
            }
        }
    }
}


function print_leaves_on_tree(data) {
    for (var key in data) {
        if (typeof data[key] === "object") {
            print_leaves_on_tree(data[key]);
        } else {
            console.log(key, ':', data[key]);
        }
    }
}

print_leaves_on_tree(data);
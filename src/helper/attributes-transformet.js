export const toSaveAttributes = (list) => {
    let attributes = [];
    let complexAttributes = {};

    list.forEach(item => {
        if (item.id !== undefined) {
            if (item.parent) {
                if (complexAttributes[item.parent] === undefined) {
                    complexAttributes[item.parent] = [];
                }

                complexAttributes[item.parent].push({
                    id: item.id,
                    value: String(item.value)
                });

            } else {
                attributes.push({
                    id: item.id,
                    value: String(item.value)
                });
            }

        }
    });

    for (let key in complexAttributes) {
        attributes.push({
            id: key,
            value: complexAttributes[key]
        })
    }

    return attributes;
}

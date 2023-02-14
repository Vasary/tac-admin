export const toSelect = (list) => {
    return list.items.map(c => createSelectItem(c));
}

const createSelectItem = (item) => {
    return {
        label: item.name,
        value: item.id,
        isParent: isComplex(item)
    }
}

const isComplex = (item) => {
    return item.type === 'array'
}

export const transformAttributes = (attributes) => {
    let list = [];

    attributes.sort((a, b) => (a.parent > b.parent ? 1 : -1)).forEach(
        attribute => {
            if (isComplex(attribute.attribute.type)) {
                list.push({
                    id: attribute.attribute.id,
                    parent: attribute.parent,
                    value: attribute.attribute.value,
                });
            }
        }
    );

    return list;
}

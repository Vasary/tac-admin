export const createTags = (tags) => tags.map(t => createTag(t));

const clone = node => JSON.parse(JSON.stringify(node));

const createTag = (tag) => clone(tag);

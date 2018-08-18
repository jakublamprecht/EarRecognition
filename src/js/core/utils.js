export const getParentPath = (path) => (
    path.substring(0, path.lastIndexOf('/'))
);
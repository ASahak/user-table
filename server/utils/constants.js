const SELECT_OPTIONS = {
    '*': 'All',
    'artist': 'Artist',
    'designer': 'Designer',
    'art-manager': 'Art Manager',
};
const EMAIL_PATTERN  = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i;

module.exports = {
    SELECT_OPTIONS,
    EMAIL_PATTERN,
};

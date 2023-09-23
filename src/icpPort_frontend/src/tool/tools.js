const crypto = require('crypto');

export function getUid(user) {
    const hash = crypto.createHash('sha256').update(user);
    const  v = hash.digest().subarray(0, 20);
    return v.toString('base64');
}


async function get_uid1(bytes) {
    const hash = crypto.createHash('sha256').update(bytes).digest().slice(0, 20);
    return Buffer.from(hash).toString('base64');
}
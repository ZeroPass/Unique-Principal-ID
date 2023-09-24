const crypto = require('crypto');

// creating hash of string, taking first 15 bytes, and encoding to base64
export function getUid(principal) {
    const user = principal.toString();
    const hash = crypto.createHash('sha256').update(user.toUpperCase());
    const  v = hash.digest().subarray(0, 15);
    return v.toString('base64');
}

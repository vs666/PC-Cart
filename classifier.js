const data = require('./samplesearch.json');

function cleanOut(q) {
    q = q.toString();
    var ret = "";
    for (let z = 0; z < q.length; z++) {
        if ((q[z] == ' ' || q[z] == '\n' || q[z] == '\t') == false) {
            ret = ret + q[z];
        }
    }
    return ret;
}

const isD = (n) => { return n < 10 };

function subsCheck(q, s) {
    q = q.toString().toLowerCase();
    s = s.toString();
    for (let x = 0; x < q.length; x++) {
        let res = true;
        for (let y = 0; y < s.length; y++) {
            if (s[y] == '%' && isD(q[y + x])) {
                while (isD(q[y + x + 1])) { x++; }
                continue;
            }
            if (q[x + y] != s[y]) {
                res = false;
                break;
            }
        }
        if (res == true) {
            return true;
        }

    }
    return false;
}

const search = (q) => {
    q = cleanOut(q);
    for (let i = 0; i < data.length; i++) {
        let count = 0;
        for (let j = 0; j < data[i].queries.length; j++) {

            if (subsCheck(q, data[i].queries[j])) {
                count++;
            }
        }
        if (count > 0) {
            return data[i].name;
        }
        else {
            let count = 0;
            for (let j = 0; j < data[i].less.length; j++) {
                if (subsCheck(q, data[i].less[j])) {
                    count++;
                }
            }
            if (count >= 2) {
                return data[i].name;
            }
        }
    }
    return '///';
}

module.exports = search;
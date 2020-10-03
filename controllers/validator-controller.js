const e = require('express');

const validateNic = async (t, a, r) => {
    const s = t.params.nic,
        e = s.length;
    let n,
        i,
        o = {};
    if (10 == e || 9 == e || 12 == e || 11 == e) {
        let t = {},
            r = parseInt(s[0] + s[1]);
        if (
            (e <= 10
                ? ((t.year = 1900 + r), (i = parseInt(s[2] + s[3] + s[4])))
                : ((t.year = parseInt(s[0] + s[1] + s[2] + s[3])),
                  (i = parseInt(s[4] + s[5] + s[6]))),
            (i > 366 && i <= 500) || i > 866 || i == 0)
        )
            return a
                .status(404)
                .json({ msg: 'Error, This is not a valid nic' });
        n = i <= 366 ? 'Male' : 'Female';
        var l = getDate(i);
        return (
            (o.birthday = t),
            (o.gender = n),
            (t.month = l.month),
            (t.day = l.day),
            a.status(200).json(o)
        );
    }
    return a.status(404).json({ msg: 'Error' });
};

const getDate = (t) => {
    var r = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let a;
    var e = 0,
        n = 0;
    a = t > 500 ? t - 500 : t;
    for (var o = 0; o < r.length; o++) {
        if (a < r[o]) {
            (e = o + 1), (n = a);
            break;
        }
        a -= r[o];
    }
    const v = {};
    return (v.day = n), (v.month = e), v;
};
exports.validateNic = validateNic;

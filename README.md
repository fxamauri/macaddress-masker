
# Mac Address Mask

[![npm](https://img.shields.io/npm/dw/macaddress-mask.svg)](https://www.npmjs.com/package/macaddress-mask)



Use a macaddress-mask to make masks in mac addresses.

Usage
-----

```
npm install --save macaddress-mask
```

```JavaScript
const macadressMask = require('macaddress-mask');
```

Examples
--------------

    macadressMask.mask('ALCLf2d27544') → Result: AL-CL-f2-d2-75-44
    macadressMask.unmask('AL-CL-f2-d2-75-44') → Result: ALCLf2d27544

---

Contributions of any kind are welcome!

## License

[MIT](LICENSE)

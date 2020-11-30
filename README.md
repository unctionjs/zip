# @unction/zip


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> ListType<R> | RecordType<unknown, R> | string => ListType<L> | RecordType<unknown, L> | string => ListType<[R, L]> | RecordType<unknown, [R, L]>

Takes two iterables and merges them together, combining their values into an array

``` javascript
zip([1, 2, 3])([4, 5, 6])
```

returns

``` javascript
[[1, 4], [2, 5], [3, 6]]
```

``` javascript
zip({x: 1, y: 2, z: 0})({x: 0, y: 0, z: 0})
```

returns

``` javascript
{x: [1, 0], y: [2, 0], z: [0, 0]}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/zip.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/zip.svg?maxAge=2592000&style=flat-square

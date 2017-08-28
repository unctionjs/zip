/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import zip from "./"

test(({same, end}) => {
  same(
    zip(["1", "2", "3"])(["4", "5", "6"]),
    [["1", "4"], ["2", "5"], ["3", "6"]]
  )

  end()
})

test(({same, end}) => {
  same(
    zip({
      aaa: "1",
      bbb: "2",
      ccc: "0",
    })({
      aaa: "0",
      bbb: "0",
      ccc: "0",
    }),
    {
      aaa: ["1", "0"],
      bbb: ["2", "0"],
      ccc: ["0", "0"],
    }
  )

  end()
})

test(({throws, end}) => {
  throws(
    () =>
      zip({
        aaa: "1",
        bbb: "2",
        ccc: "0",
      })(["4", "5", "6"])
  )

  end()
})

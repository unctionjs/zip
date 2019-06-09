import fresh from "@unction/fresh";
import keys from "@unction/keys";
import get from "@unction/get";
import {uniq} from "ramda";
import type from "@unction/type";
import attach from "@unction/attach";
import reduceValues from "@unction/reducevalues";

export default function zip (left) {
  return function zipLeft (right) {
    if (type(left) !== type(right)) {
      throw new Error("left and right were not the same functor type");
    }

    const uniqueKeys = uniq([...keys(left), ...keys(right)]);

    return reduceValues((accumulated) => (point) => {
      return attach(point)([get(point)(left), get(point)(right)])(accumulated);
    })(fresh(right))(uniqueKeys);
  };
}

import fresh from "@unction/fresh";
import keys from "@unction/keys";
import get from "@unction/get";
import {uniq} from "ramda";
import type from "@unction/type";
import attach from "@unction/attach";
import reduceValues from "@unction/reducevalues";

export default function zip<R, L> (left: ListType<R> | RecordType<unknown, R> | string) {
  return function zipLeft (right: ListType<L> | RecordType<unknown, L> | string): ListType<[R, L]> | RecordType<unknown, [R, L]> {
    if (type(left) !== type(right)) {
      throw new Error("left and right were not the same enumerable type");
    }

    const uniqueKeys = uniq([...keys(left), ...keys(right)]);

    return reduceValues(
      (accumulated: ListType<[R, L]> | RecordType<unknown, [R, L]>) =>
        (point: unknown) =>
          attach(point)([get(point)(left), get(point)(right)])(accumulated)
    )(
      fresh(right)
    )(
      uniqueKeys
    );
  };
}

// Copyright 2017-2023 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Point } from '@noble/secp256k1';

import { bnToU8a, hasBigInt, u8aConcat } from '@polkadot/util';
import { isReady, secp256k1Expand as wasm } from '@polkadot/wasm-crypto';

import { BN_BE_256_OPTS } from '../bn.js';

export function secp256k1Expand (publicKey: Uint8Array, onlyJs?: boolean): Uint8Array {
  if (![33, 65].includes(publicKey.length)) {
    throw new Error(`Invalid publicKey provided, received ${publicKey.length} bytes input`);
  }

  if (publicKey.length === 65) {
    return publicKey.subarray(1);
  }

  if (!hasBigInt || (!onlyJs && isReady())) {
    return wasm(publicKey).subarray(1);
  }

  const { x, y } = Point.fromHex(publicKey);

  return u8aConcat(
    bnToU8a(x, BN_BE_256_OPTS),
    bnToU8a(y, BN_BE_256_OPTS)
  );
}

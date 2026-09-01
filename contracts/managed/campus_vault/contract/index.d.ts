import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<PS> = {
}

export type ImpureCircuits<PS> = {
  issue_credential(context: __compactRuntime.CircuitContext<PS>,
                   admin_sk_0: Uint8Array,
                   hash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  prove_enrollment(context: __compactRuntime.CircuitContext<PS>,
                   student_id_0: bigint,
                   gpa_0: bigint,
                   is_enrolled_num_0: bigint,
                   salt_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  prove_gpa_threshold(context: __compactRuntime.CircuitContext<PS>,
                      student_id_0: bigint,
                      gpa_0: bigint,
                      is_enrolled_num_0: bigint,
                      salt_0: bigint,
                      threshold_0: bigint): __compactRuntime.CircuitResults<PS, []>;
}

export type ProvableCircuits<PS> = {
  issue_credential(context: __compactRuntime.CircuitContext<PS>,
                   admin_sk_0: Uint8Array,
                   hash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  prove_enrollment(context: __compactRuntime.CircuitContext<PS>,
                   student_id_0: bigint,
                   gpa_0: bigint,
                   is_enrolled_num_0: bigint,
                   salt_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  prove_gpa_threshold(context: __compactRuntime.CircuitContext<PS>,
                      student_id_0: bigint,
                      gpa_0: bigint,
                      is_enrolled_num_0: bigint,
                      salt_0: bigint,
                      threshold_0: bigint): __compactRuntime.CircuitResults<PS, []>;
}

export type PureCircuits = {
}

export type Circuits<PS> = {
  issue_credential(context: __compactRuntime.CircuitContext<PS>,
                   admin_sk_0: Uint8Array,
                   hash_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  prove_enrollment(context: __compactRuntime.CircuitContext<PS>,
                   student_id_0: bigint,
                   gpa_0: bigint,
                   is_enrolled_num_0: bigint,
                   salt_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  prove_gpa_threshold(context: __compactRuntime.CircuitContext<PS>,
                      student_id_0: bigint,
                      gpa_0: bigint,
                      is_enrolled_num_0: bigint,
                      salt_0: bigint,
                      threshold_0: bigint): __compactRuntime.CircuitResults<PS, []>;
}

export type Ledger = {
  readonly admin: Uint8Array;
  credential_hashes: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<[Uint8Array, boolean]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>,
               admin_pubkey_0: Uint8Array): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;

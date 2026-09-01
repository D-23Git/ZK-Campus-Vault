import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
__compactRuntime.checkRuntimeVersion('0.16.0');

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = __compactRuntime.CompactTypeBoolean;

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(4294967295n, 4);

const _descriptor_3 = __compactRuntime.CompactTypeField;

const _descriptor_4 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_5 = new __compactRuntime.CompactTypeVector(4, _descriptor_3);

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _Either_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_1.fromValue(value_0),
      left: _descriptor_0.fromValue(value_0),
      right: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.is_left).concat(_descriptor_0.toValue(value_0.left).concat(_descriptor_0.toValue(value_0.right)));
  }
}

const _descriptor_7 = new _Either_0();

const _descriptor_8 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_9 = new _ContractAddress_0();

const _descriptor_10 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

export class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      issue_credential: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`issue_credential: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const admin_sk_0 = args_1[1];
        const hash_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('issue_credential',
                                     'argument 1 (as invoked from Typescript)',
                                     'campus_vault.compact line 37 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(admin_sk_0.buffer instanceof ArrayBuffer && admin_sk_0.BYTES_PER_ELEMENT === 1 && admin_sk_0.length === 32)) {
          __compactRuntime.typeError('issue_credential',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'campus_vault.compact line 37 char 1',
                                     'Bytes<32>',
                                     admin_sk_0)
        }
        if (!(hash_0.buffer instanceof ArrayBuffer && hash_0.BYTES_PER_ELEMENT === 1 && hash_0.length === 32)) {
          __compactRuntime.typeError('issue_credential',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'campus_vault.compact line 37 char 1',
                                     'Bytes<32>',
                                     hash_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(admin_sk_0).concat(_descriptor_0.toValue(hash_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._issue_credential_0(context,
                                                  partialProofData,
                                                  admin_sk_0,
                                                  hash_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      prove_enrollment: (...args_1) => {
        if (args_1.length !== 5) {
          throw new __compactRuntime.CompactError(`prove_enrollment: expected 5 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const student_id_0 = args_1[1];
        const gpa_0 = args_1[2];
        const is_enrolled_num_0 = args_1[3];
        const salt_0 = args_1[4];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('prove_enrollment',
                                     'argument 1 (as invoked from Typescript)',
                                     'campus_vault.compact line 48 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(student_id_0) === 'bigint' && student_id_0 >= 0n && student_id_0 <= 4294967295n)) {
          __compactRuntime.typeError('prove_enrollment',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'campus_vault.compact line 48 char 1',
                                     'Uint<0..4294967296>',
                                     student_id_0)
        }
        if (!(typeof(gpa_0) === 'bigint' && gpa_0 >= 0n && gpa_0 <= 4294967295n)) {
          __compactRuntime.typeError('prove_enrollment',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'campus_vault.compact line 48 char 1',
                                     'Uint<0..4294967296>',
                                     gpa_0)
        }
        if (!(typeof(is_enrolled_num_0) === 'bigint' && is_enrolled_num_0 >= 0n && is_enrolled_num_0 <= 4294967295n)) {
          __compactRuntime.typeError('prove_enrollment',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'campus_vault.compact line 48 char 1',
                                     'Uint<0..4294967296>',
                                     is_enrolled_num_0)
        }
        if (!(typeof(salt_0) === 'bigint' && salt_0 >= 0 && salt_0 <= __compactRuntime.MAX_FIELD)) {
          __compactRuntime.typeError('prove_enrollment',
                                     'argument 4 (argument 5 as invoked from Typescript)',
                                     'campus_vault.compact line 48 char 1',
                                     'Field',
                                     salt_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(student_id_0).concat(_descriptor_2.toValue(gpa_0).concat(_descriptor_2.toValue(is_enrolled_num_0).concat(_descriptor_3.toValue(salt_0)))),
            alignment: _descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._prove_enrollment_0(context,
                                                  partialProofData,
                                                  student_id_0,
                                                  gpa_0,
                                                  is_enrolled_num_0,
                                                  salt_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      prove_gpa_threshold: (...args_1) => {
        if (args_1.length !== 6) {
          throw new __compactRuntime.CompactError(`prove_gpa_threshold: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const student_id_0 = args_1[1];
        const gpa_0 = args_1[2];
        const is_enrolled_num_0 = args_1[3];
        const salt_0 = args_1[4];
        const threshold_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('prove_gpa_threshold',
                                     'argument 1 (as invoked from Typescript)',
                                     'campus_vault.compact line 75 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(student_id_0) === 'bigint' && student_id_0 >= 0n && student_id_0 <= 4294967295n)) {
          __compactRuntime.typeError('prove_gpa_threshold',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'campus_vault.compact line 75 char 1',
                                     'Uint<0..4294967296>',
                                     student_id_0)
        }
        if (!(typeof(gpa_0) === 'bigint' && gpa_0 >= 0n && gpa_0 <= 4294967295n)) {
          __compactRuntime.typeError('prove_gpa_threshold',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'campus_vault.compact line 75 char 1',
                                     'Uint<0..4294967296>',
                                     gpa_0)
        }
        if (!(typeof(is_enrolled_num_0) === 'bigint' && is_enrolled_num_0 >= 0n && is_enrolled_num_0 <= 4294967295n)) {
          __compactRuntime.typeError('prove_gpa_threshold',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'campus_vault.compact line 75 char 1',
                                     'Uint<0..4294967296>',
                                     is_enrolled_num_0)
        }
        if (!(typeof(salt_0) === 'bigint' && salt_0 >= 0 && salt_0 <= __compactRuntime.MAX_FIELD)) {
          __compactRuntime.typeError('prove_gpa_threshold',
                                     'argument 4 (argument 5 as invoked from Typescript)',
                                     'campus_vault.compact line 75 char 1',
                                     'Field',
                                     salt_0)
        }
        if (!(typeof(threshold_0) === 'bigint' && threshold_0 >= 0n && threshold_0 <= 4294967295n)) {
          __compactRuntime.typeError('prove_gpa_threshold',
                                     'argument 5 (argument 6 as invoked from Typescript)',
                                     'campus_vault.compact line 75 char 1',
                                     'Uint<0..4294967296>',
                                     threshold_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(student_id_0).concat(_descriptor_2.toValue(gpa_0).concat(_descriptor_2.toValue(is_enrolled_num_0).concat(_descriptor_3.toValue(salt_0).concat(_descriptor_2.toValue(threshold_0))))),
            alignment: _descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment().concat(_descriptor_2.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._prove_gpa_threshold_0(context,
                                                     partialProofData,
                                                     student_id_0,
                                                     gpa_0,
                                                     is_enrolled_num_0,
                                                     salt_0,
                                                     threshold_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      }
    };
    this.impureCircuits = {
      issue_credential: this.circuits.issue_credential,
      prove_enrollment: this.circuits.prove_enrollment,
      prove_gpa_threshold: this.circuits.prove_gpa_threshold
    };
    this.provableCircuits = {
      issue_credential: this.circuits.issue_credential,
      prove_enrollment: this.circuits.prove_enrollment,
      prove_gpa_threshold: this.circuits.prove_gpa_threshold
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    const admin_pubkey_0 = args_0[1];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(admin_pubkey_0.buffer instanceof ArrayBuffer && admin_pubkey_0.BYTES_PER_ELEMENT === 1 && admin_pubkey_0.length === 32)) {
      __compactRuntime.typeError('Contract state constructor',
                                 'argument 1 (argument 2 as invoked from Typescript)',
                                 'campus_vault.compact line 23 char 1',
                                 'Bytes<32>',
                                 admin_pubkey_0)
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = new __compactRuntime.ChargedState(stateValue_0);
    state_0.setOperation('issue_credential', new __compactRuntime.ContractOperation());
    state_0.setOperation('prove_enrollment', new __compactRuntime.ContractOperation());
    state_0.setOperation('prove_gpa_threshold', new __compactRuntime.ContractOperation());
    const context = __compactRuntime.createCircuitContext(__compactRuntime.dummyContractAddress(), constructorContext_0.initialZswapLocalState.coinPublicKey, state_0.data, constructorContext_0.initialPrivateState);
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(0n),
                                                                                              alignment: _descriptor_10.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(1n),
                                                                                              alignment: _descriptor_10.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(0n),
                                                                                              alignment: _descriptor_10.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(admin_pubkey_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    state_0.data = new __compactRuntime.ChargedState(context.currentQueryContext.state.state);
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_4, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_5, value_0);
    return result_0;
  }
  _derive_admin_pubkey_0(admin_sk_0) {
    return this._persistentHash_0([new Uint8Array([122, 107, 45, 99, 97, 109, 112, 117, 115, 45, 118, 97, 117, 108, 116, 58, 97, 100, 109, 105, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   admin_sk_0]);
  }
  _issue_credential_0(context, partialProofData, admin_sk_0, hash_0) {
    const derived_pubkey_0 = this._derive_admin_pubkey_0(admin_sk_0);
    __compactRuntime.assert(this._equal_0(derived_pubkey_0,
                                          _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                    partialProofData,
                                                                                                    [
                                                                                                     { dup: { n: 0 } },
                                                                                                     { idx: { cached: false,
                                                                                                              pushPath: false,
                                                                                                              path: [
                                                                                                                     { tag: 'value',
                                                                                                                       value: { value: _descriptor_10.toValue(0n),
                                                                                                                                alignment: _descriptor_10.alignment() } }] } },
                                                                                                     { popeq: { cached: false,
                                                                                                                result: undefined } }]).value)),
                            'Unauthorized: only university admin can register credentials');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_10.toValue(1n),
                                                                  alignment: _descriptor_10.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(hash_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(true),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _prove_enrollment_0(context,
                      partialProofData,
                      student_id_0,
                      gpa_0,
                      is_enrolled_num_0,
                      salt_0)
  {
    __compactRuntime.assert(this._equal_1(is_enrolled_num_0, 1n),
                            'Student is not currently enrolled');
    const computed_hash_0 = this._persistentHash_1([student_id_0,
                                                    gpa_0,
                                                    is_enrolled_num_0,
                                                    salt_0]);
    __compactRuntime.assert(_descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_10.toValue(1n),
                                                                                                                  alignment: _descriptor_10.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(computed_hash_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'No matching credential registered on-chain');
    __compactRuntime.assert(_descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_10.toValue(1n),
                                                                                                                  alignment: _descriptor_10.alignment() } }] } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_0.toValue(computed_hash_0),
                                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value)
                            ===
                            true,
                            'Credential has been revoked');
    true;
    return [];
  }
  _prove_gpa_threshold_0(context,
                         partialProofData,
                         student_id_0,
                         gpa_0,
                         is_enrolled_num_0,
                         salt_0,
                         threshold_0)
  {
    __compactRuntime.assert(gpa_0 >= threshold_0,
                            'GPA is below the required threshold');
    const computed_hash_0 = this._persistentHash_1([student_id_0,
                                                    gpa_0,
                                                    is_enrolled_num_0,
                                                    salt_0]);
    __compactRuntime.assert(_descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_10.toValue(1n),
                                                                                                                  alignment: _descriptor_10.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(computed_hash_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'No matching credential registered on-chain');
    __compactRuntime.assert(_descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_10.toValue(1n),
                                                                                                                  alignment: _descriptor_10.alignment() } }] } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_0.toValue(computed_hash_0),
                                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                                       { popeq: { cached: false,
                                                                                                  result: undefined } }]).value)
                            ===
                            true,
                            'Credential has been revoked');
    true;
    return [];
  }
  _equal_0(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
}
export function ledger(stateOrChargedState) {
  const state = stateOrChargedState instanceof __compactRuntime.StateValue ? stateOrChargedState : stateOrChargedState.state;
  const chargedState = stateOrChargedState instanceof __compactRuntime.StateValue ? new __compactRuntime.ChargedState(stateOrChargedState) : stateOrChargedState;
  const context = {
    currentQueryContext: new __compactRuntime.QueryContext(chargedState, __compactRuntime.dummyContractAddress()),
    costModel: __compactRuntime.CostModel.initialCostModel()
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get admin() {
      return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_10.toValue(0n),
                                                                                                   alignment: _descriptor_10.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    credential_hashes: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_10.toValue(1n),
                                                                                                     alignment: _descriptor_10.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                                                 alignment: _descriptor_6.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_6.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_10.toValue(1n),
                                                                                                     alignment: _descriptor_10.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'campus_vault.compact line 20 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_10.toValue(1n),
                                                                                                     alignment: _descriptor_10.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'campus_vault.compact line 20 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_1.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_10.toValue(1n),
                                                                                                     alignment: _descriptor_10.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_1.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  currentQueryContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ });
export const pureCircuits = {};
export const contractReferenceLocations =
  { tag: 'publicLedgerArray', indices: { } };
//# sourceMappingURL=index.js.map

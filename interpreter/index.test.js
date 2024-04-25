// index.test.js
// it dose not work yet perfectly

const { Interpreter, OPCODE_MAP } = require('./index');
const { PUSH, STOP, ADD, SUB, MUL, DIV, LT, GT, EQ, AND, OR, JUMP, JUMPI } = OPCODE_MAP;

describe('Interpreter', () => {
  describe('runCode()', () => {
    describe('and the code includes ADD', () => {
      it('adds two values', () => {
        const result = new Interpreter().runCode([PUSH, 2, PUSH, 3, ADD, STOP]);
        expect(result).toEqual(5);
      });
    });
  });
});

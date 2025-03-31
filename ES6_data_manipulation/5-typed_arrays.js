export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  const dataView = new DataView(buffer);
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  int8Array[position] = value;
  const result = dataView.getInt8(position);
  if (result !== value) {
    throw new Error('Value not set');
  }
  return dataView;
}

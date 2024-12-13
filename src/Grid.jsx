import { range } from './utils';

const gridStyles = {
  width: '100px',
  height: '100px',
  border: 'solid grey',
  borderRadius: '5px',
};

function Grid({ numRows, numCols }) {
  const rows = Array(numRows).fill(null);
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {/* {todo} */}
      {rows.map((_, index) => (
        <div key={index} style={{ display: 'flex', gap: 10 }}>
          {range(numCols).map((cell) => (
            <div key={cell} style={gridStyles}></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;

import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width='96'
      height='96'
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xlink='http://www.w3.org/1999/xlink'>
      <rect width='128' height='128' fill='url(#pattern1)' />
      <defs>
        <pattern
          id='pattern1'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'>
          <use href='#image0_4_4' transform='scale(0.01)' />
        </pattern>
        <image
          id='image0_4_4'
          width='100'
          height='100'
          href='data:image/png;base64,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'
        />
      </defs>
    </svg>
  );
}

export default SvgComponent;
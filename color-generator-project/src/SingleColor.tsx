import React, { useEffect, useState } from 'react';
import { singleColorType } from './types';
import { MdOutlineFileCopy } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { BsCircle, BsCircleFill } from 'react-icons/bs';

const SingleColor = ({ color }: { color: singleColorType }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { rgb, weight, hex, type } = color;
  const [r, g, b] = rgb;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  let articleClass = '',
    iconClass = '',
    fillCircleIcon,
    shadeType = '';

  const isDark = r + g + b < 300;
  fillCircleIcon = Boolean(isDark);

  if (isDark || type === 'shade') {
    articleClass = 'color text-light';
    iconClass = 'icon icon-light';
  } else {
    articleClass = 'color text-dark';
    iconClass = 'icon icon-dark';
  }

  if (type === 'tint') {
    shadeType = 'light';
  } else if (type === 'base') {
    shadeType = 'base';
    iconClass = 'icon icon-base';
  } else {
    shadeType = 'dark';
  }

  const updatedWeight = Number.isInteger(weight)
    ? weight
    : Number(weight.toFixed(2));

  return (
    <article
      className={type === 'base' ? `${articleClass} text-base` : articleClass}
      style={{
        background: `#${hex}`,
      }}
    >
      <p className='shade-type'>{shadeType}</p>
      <p className='percent-value'>
        {fillCircleIcon ? <BsCircleFill /> : <BsCircle />} {updatedWeight}%
      </p>
      <p className='color-value'>#{hex}</p>
      <button
        className={iconClass}
        onClick={() => {
          setIsCopied(true);
          navigator.clipboard.writeText(`#${hex}`);
        }}
      >
        {isCopied ? <FaCheck /> : <MdOutlineFileCopy />}
      </button>
    </article>
  );
};

export default SingleColor;

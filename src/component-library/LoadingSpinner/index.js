import React from 'react';
import Loader from 'react-loader-spinner';
import {colors} from '../../style-guide';

export default function LoadingSpinner() {
  return (
    <Loader type="Oval" color={colors.primary.default} height={50} width={50} />
  );
}

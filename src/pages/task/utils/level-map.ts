export const convertLevelToServer = (
  kor: '상' | '중' | '하',
): 'HIGH' | 'MIDDLE' | 'LOW' => {
  switch (kor) {
    case '상':
      return 'HIGH';
    case '중':
      return 'MIDDLE';
    case '하':
      return 'LOW';
  }
};

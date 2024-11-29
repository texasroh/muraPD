type ThemeType = {
  background: {
    primary: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  accent: {
    primary: string;
    secondary: string;
  };
  border: {
    primary: string;
  };
  cardBg: {
    primary: string;
  };
};

export const light: ThemeType = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F9FA',
  },
  text: {
    primary: '#212529',
    secondary: '#6C757D',
  },
  accent: {
    primary: '#6C63FF',
    secondary: '#FF4081',
  },
  border: {
    primary: '#DEE2E6',
  },
  cardBg: {
    primary: '#FFFFFF',
  },
};

export const dark: ThemeType = {
  background: {
    primary: '#181818',
    secondary: '#232323',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#A8A8A8',
  },
  accent: {
    primary: '#8E80FF',
    secondary: '#FF5A90',
  },
  border: {
    primary: '#2C2C2C',
  },
  cardBg: {
    primary: '#202020',
  },
};

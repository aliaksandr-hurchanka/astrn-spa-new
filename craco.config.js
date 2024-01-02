const path = require('path');

const resolvePath = (filePath) => path.resolve(__dirname, filePath);

module.exports = {
  webpack: {
    alias: {
      '@astrn/assets': resolvePath('./src/assets'),
      '@astrn/assets/income': resolvePath('./src/assets/income'),
      '@astrn/common/components': resolvePath('./src/common/components'),
      '@astrn/common/hooks': resolvePath('./src/common/hooks'),
      '@astrn/common/tokens': resolvePath('./src/common/tokens'),
      '@astrn/common/types': resolvePath('./src/common/types'),
      '@astrn/common/utils': resolvePath('./src/common/utils'),
      '@astrn/components': resolvePath('./src/components'),
      '@astrn/pages': resolvePath('./src/pages'),
      '@astrn': resolvePath('./src')
    }
  },
};